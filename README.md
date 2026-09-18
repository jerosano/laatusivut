# Laatusivut

Yrityssivusto [laatusivut.fi](https://laatusivut.fi) — räätälöidyt verkkosivut suomalaisille pk-yrityksille.

Tekijä: Jere Karvinen, Jyväskylä.

Lähdekoodi: [github.com/jerosano/laatusivut](https://github.com/jerosano/laatusivut)

## Kehitys

```bash
npm install
npm run dev
```

Tuotanto (Vercel):

```bash
VITE_AUTH_ENABLED=false npx vite build
```

Hinnat, yhteystiedot ja paketit: `src/lib/site.ts`.
