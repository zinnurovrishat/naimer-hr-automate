-- Create partner_leads table for partner referral form submissions
CREATE TABLE public.partner_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  company TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  contact_info TEXT NOT NULL,
  city TEXT,
  candidates_count TEXT,
  start_date TEXT,
  comment TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  partner TEXT,
  consent BOOLEAN NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.partner_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert partner leads (for the form submission)
CREATE POLICY "Anyone can insert partner leads" 
ON public.partner_leads 
FOR INSERT 
WITH CHECK (true);