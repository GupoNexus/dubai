# Publicar a Dubai Enxovais na Vercel

## Opção recomendada

1. Extraia este ZIP.
2. Crie um repositório no GitHub e envie todo o conteúdo desta pasta.
3. Na Vercel, clique em **Add New > Project**.
4. Importe o repositório.
5. Em **Environment Variables**, adicione `NITRO_PRESET` com o valor `vercel`.
6. Mantenha o comando de instalação como `npm install` e o de build como `npm run build`.
7. Clique em **Deploy**.

## Integrações futuras

Mercado Pago e Melhor Envio estão preparados no site, mas permanecem desativados até que as credenciais reais sejam configuradas. Nunca coloque tokens secretos diretamente no código ou envie-os por mensagem; use as variáveis de ambiente da Vercel.

## Desenvolvimento local

```bash
npm install
npm run dev
```
