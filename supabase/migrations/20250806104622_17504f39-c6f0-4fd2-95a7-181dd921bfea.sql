-- Create leads table for storing form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'closed'))
);

-- Enable Row Level Security (make table publicly writable for lead generation)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (for landing page form)
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Only authenticated users can view leads (for admin panel later)
CREATE POLICY "Authenticated users can view leads" 
ON public.leads 
FOR SELECT 
TO authenticated 
USING (true);