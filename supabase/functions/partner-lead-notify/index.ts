import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PartnerLeadData {
  company: string;
  contact_person: string;
  contact_info: string;
  city?: string;
  candidates_count?: string;
  start_date?: string;
  comment?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  partner?: string;
  webhook_url?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: PartnerLeadData = await req.json();
    console.log('Processing partner lead:', leadData);

    // Send Telegram notification if bot token is configured
    const telegramBotToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const telegramChatId = Deno.env.get('TELEGRAM_CHAT_ID');
    
    if (telegramBotToken && telegramChatId) {
      const message = `
🎯 *Новый партнёрский лид*

🏢 *Компания:* ${leadData.company}
👤 *Контактное лицо:* ${leadData.contact_person}
📞 *Контакты:* ${leadData.contact_info}
${leadData.city ? `🏙️ *Город:* ${leadData.city}` : ''}
${leadData.candidates_count ? `👥 *Количество кандидатов:* ${leadData.candidates_count}` : ''}
${leadData.start_date ? `📅 *Дата старта:* ${leadData.start_date}` : ''}
${leadData.comment ? `💬 *Комментарий:* ${leadData.comment}` : ''}

*UTM метки:*
${leadData.utm_source ? `- Source: ${leadData.utm_source}` : ''}
${leadData.utm_medium ? `- Medium: ${leadData.utm_medium}` : ''}
${leadData.utm_campaign ? `- Campaign: ${leadData.utm_campaign}` : ''}
${leadData.partner ? `- Partner: ${leadData.partner}` : ''}
      `.trim();

      const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
          parse_mode: 'Markdown'
        }),
      });

      if (!telegramResponse.ok) {
        console.error('Telegram notification failed:', await telegramResponse.text());
      } else {
        console.log('Telegram notification sent successfully');
      }
    }

    // Send to webhook if provided (for Google Sheets, CRM, etc.)
    if (leadData.webhook_url) {
      const webhookPayload = {
        timestamp: new Date().toISOString(),
        source: 'partner_form',
        data: leadData
      };

      const webhookResponse = await fetch(leadData.webhook_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookResponse.ok) {
        console.error('Webhook notification failed:', await webhookResponse.text());
      } else {
        console.log('Webhook notification sent successfully');
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Notifications sent successfully' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('Error in partner-lead-notify function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);