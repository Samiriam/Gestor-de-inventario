<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1VJA-6TgZP4CZP6gnLDyEo4xccDB7S_YL

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

### Configuración para Velo de Wix

Para enlazar las acciones del sitio con Wix Bookings y Wix Stores define las siguientes variables en tu archivo `.env` o `.env.local`:

```
VITE_WIX_BOOKINGS_URL=/book-online
VITE_WIX_STORE_URL=/store
```

Puedes usar rutas absolutas de tu sitio de Wix, anclas internas (por ejemplo `#reservas`) o incluso abrir un lightbox configurado en Velo con el prefijo `lightbox:` (por ejemplo `lightbox:Reservas`). Si las variables no se definen, la navegación seguirá funcionando con las secciones internas predeterminadas del proyecto.
