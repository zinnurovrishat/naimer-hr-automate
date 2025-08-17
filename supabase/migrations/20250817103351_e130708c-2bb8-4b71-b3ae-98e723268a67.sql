-- Fix critical security vulnerability: Add SELECT policies to protect lead data

-- 1. Add SELECT policy for leads table - only authenticated users can view leads
CREATE POLICY "Only authenticated users can view leads" 
ON public.leads 
FOR SELECT 
TO authenticated
USING (true);

-- 2. Add SELECT policy for partner_leads table - only authenticated users can view partner leads  
CREATE POLICY "Only authenticated users can view partner leads" 
ON public.partner_leads 
FOR SELECT 
TO authenticated  
USING (true);

-- 3. Explicitly deny SELECT access to anonymous users for leads
CREATE POLICY "Anonymous users cannot view leads" 
ON public.leads 
FOR SELECT 
TO anon
USING (false);

-- 4. Explicitly deny SELECT access to anonymous users for partner_leads
CREATE POLICY "Anonymous users cannot view partner leads" 
ON public.partner_leads 
FOR SELECT 
TO anon
USING (false);