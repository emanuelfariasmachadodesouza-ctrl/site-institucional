# Site institucional

Exemplo de portfólio: site responsivo (HTML, CSS, JavaScript) com formulário de contato salvo em banco (Supabase/PostgreSQL) via função serverless da Vercel.

## Banco
1. Crie um projeto no Supabase.
2. Execute `database/schema.sql` no SQL Editor.

## Deploy na Vercel
1. Suba para o GitHub e importe na Vercel (sem build, sem framework).
2. Defina as variáveis `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` (a chave service role nunca deve ir para o código nem para o front-end).
3. Faça o deploy.

## Rodar local
`npx vercel dev` (com `.env` baseado em `.env.example`).
