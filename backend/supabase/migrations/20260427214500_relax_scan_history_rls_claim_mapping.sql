drop policy if exists "Users can view their own scan history" on public.scan_history;
drop policy if exists "Users can insert their own scan history" on public.scan_history;

create policy "Users can view their own scan history"
  on public.scan_history
  for select
  using (
    coalesce(
      auth.jwt() ->> 'sub',
      auth.jwt() ->> 'user_id',
      auth.jwt() ->> 'userId'
    ) = user_id
  );

create policy "Users can insert their own scan history"
  on public.scan_history
  for insert
  with check (
    coalesce(
      auth.jwt() ->> 'sub',
      auth.jwt() ->> 'user_id',
      auth.jwt() ->> 'userId'
    ) = user_id
  );
