-- Supabase (PostgreSQL). Execute no SQL Editor do projeto.
create table if not exists public.contatos (
  id uuid primary key default gen_random_uuid(),
  nome varchar(100) not null,
  email varchar(150) not null,
  mensagem text not null,
  criado_em timestamptz not null default now()
);

-- RLS ativo sem políticas: somente a service role (usada na API) consegue gravar/ler.
alter table public.contatos enable row level security;
