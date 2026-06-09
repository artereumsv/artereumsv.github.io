# Artereum SV UI

Frontend web de Artereum SV construido con React, TypeScript, Vite y Ant Design.

## Estructura

El proyecto de UI vive directamente en esta carpeta:

- `src/` aplicación React
- `public/` archivos estáticos públicos
- `package.json` scripts y dependencias
- `vite.config.ts` configuración de build

## Rutas

- `/` home pública alimentada desde el backend
- `/legacy` home estática anterior
- `/catalog` mantenimiento de artworks

## Variables de entorno

Crear `ui/.env.local` con:

```env
VITE_API_BASE_URL=https://tu-api
```

Si no se define, la UI usa el mismo host actual para llamar al backend.

## Scripts

```bash
npm install
npm run dev
npm run build
```
