-- Remove the overly permissive policy that allows all authenticated users to view leads
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.leads;

-- Keep the insert policy as it allows anonymous lead submission
-- The leads table will now only allow:
-- 1. Anyone to insert leads (for the contact form)
-- 2. No one to read leads unless they have database admin access
-- 
-- This protects sensitive customer contact information from being accessible
-- to regular authenticated users while maintaining the lead submission functionality