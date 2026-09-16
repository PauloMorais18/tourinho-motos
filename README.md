# Luciano Motos

Landing page estática em React + Vite. Sem banco de dados ou backend.

## Desenvolvimento

Use Node.js 22.12 ou superior.

```sh
npm install
npm run dev
```

## Build e Vercel

```sh
npm run build
npm run preview
```

Importe este repositório na Vercel. O arquivo `vercel.json` configura o framework Vite, o comando `npm run build` e a pasta `dist`. Não são necessárias variáveis de ambiente.

## Conteúdo

- Textos, serviços e links: `src/main.jsx`.
- Estilos responsivos: `src/style.css`.
- Foto ilustrativa: `public/images/oficina.jpg`, reaproveitada do exemplo local fornecido. Não representa uma foto confirmada da Luciano Motos. Confirme o direito de uso ou substitua por foto própria antes da publicação.
- A identidade tipográfica e o símbolo de ferramenta são uma adaptação inspirada nas cores e no losango da imagem enviada, não a logo original. O anexo não estava disponível como arquivo no diretório do projeto.
- Os dados de telefone e endereço são os fornecidos. Comentários e Instagram estão identificados/vinculados ao perfil Tourinho Motos informado no pedido.
- Os serviços são uma proposta editorial baseada na oficina de referência: confirme os serviços oferecidos antes de publicar. Não foram adicionados horários semanais ou WhatsApp sem confirmação.
- Fontes Barlow e Barlow Condensed via Google Fonts, com alternativas locais do sistema.

O site está preparado para publicação futura; não foi publicado automaticamente.

## SEO local

- Domínio canônico: `https://www.lucianomotoshdo.com.br/`.
- `public/robots.txt` permite rastreamento e aponta para o sitemap.
- `public/sitemap.xml` contém a página inicial, única página do site; as âncoras de seções não são páginas separadas.
- `index.html` contém título, descrição, canonical, Open Graph e JSON-LD da oficina. A marca visível é apenas Luciano Motos. O nome antigo permanece em `alternateName` no JSON-LD para os mecanismos de busca. Os links dos perfis existentes mantêm seus endereços originais. O sitemap lista URLs canônicas, e não palavras-chave.
- Ao trocar o domínio, atualize `index.html`, `public/robots.txt` e `public/sitemap.xml`.
- Após publicar, confira `/robots.txt` e `/sitemap.xml` no domínio público e envie o sitemap pelo Google Search Console da propriedade verificada. Acompanhe a indexação pela inspeção de URL. Esses ajustes não garantem posições nos resultados.
