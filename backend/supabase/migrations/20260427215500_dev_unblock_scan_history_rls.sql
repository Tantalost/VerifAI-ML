-- DEV ONLY: unblock scan history while Clerk<->Supabase JWT integration is being finalized.
-- Remove these policies once JWT claims are verified and strict per-user policies work.

create policy "Dev allow scan history select"
  on public.scan_history
  for select
  using (true);

create policy "Dev allow scan history insert"
  on public.scan_history
  for insert
  with check (true);
