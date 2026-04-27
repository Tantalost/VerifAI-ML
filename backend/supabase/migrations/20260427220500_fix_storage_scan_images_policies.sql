-- Ensure bucket exists for uploads.
insert into storage.buckets (id, name, public)
values ('scan-images', 'scan-images', true)
on conflict (id) do nothing;

-- Remove potentially conflicting old policies for this bucket.
drop policy if exists "Users can upload scan images" on storage.objects;
drop policy if exists "Users can view scan images" on storage.objects;
drop policy if exists "Dev allow upload scan-images" on storage.objects;
drop policy if exists "Dev allow read scan-images" on storage.objects;

-- DEV-FRIENDLY: allow authenticated users to upload/read in scan-images.
-- Tighten this later to per-user folder policies once JWT mapping is finalized.
create policy "Dev allow upload scan-images"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'scan-images');

create policy "Dev allow read scan-images"
  on storage.objects
  for select
  to authenticated, anon
  using (bucket_id = 'scan-images');
