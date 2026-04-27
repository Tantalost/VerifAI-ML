## Supabase Setup Notes

- Run migrations from `backend/supabase/migrations`.
- Create a storage bucket named `scan-images` (or set `VITE_SUPABASE_STORAGE_BUCKET`).
- Make the bucket public if you want direct image preview URLs in the frontend.
- Ensure Clerk JWT template `supabase` is configured for RLS-protected queries.

