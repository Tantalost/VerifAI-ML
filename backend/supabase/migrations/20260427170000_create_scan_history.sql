create extension if not exists pgcrypto;

create table if not exists public.scan_history (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  image_url text not null,
  detection_result text not null,
  confidence_score numeric(5, 2) not null check (confidence_score >= 0 and confidence_score <= 100),
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists scan_history_user_id_created_at_idx
  on public.scan_history (user_id, created_at desc);

alter table public.scan_history enable row level security;

create policy "Users can view their own scan history"
  on public.scan_history
  for select
  using ((auth.jwt() ->> 'sub') = user_id);

create policy "Users can insert their own scan history"
  on public.scan_history
  for insert
  with check ((auth.jwt() ->> 'sub') = user_id);

