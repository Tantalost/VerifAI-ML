alter table public.scan_history
  add column if not exists ai_share numeric(5, 2),
  add column if not exists model_ai_share numeric(5, 2),
  add column if not exists forensic_ai_share numeric(5, 2),
  add column if not exists heuristic_ai_share numeric(5, 2),
  add column if not exists ensemble_models jsonb,
  add column if not exists forensic_metrics jsonb;
