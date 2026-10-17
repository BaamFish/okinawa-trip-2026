import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';
export default defineConfig({base:'/okinawa-trip-2026/',plugins:[react(),VitePWA({registerType:'prompt',includeAssets:['images/*','icon*'],manifest:{name:'Okinawa Christmas Trip 2026',short_name:'沖繩聖誕旅記',lang:'zh-TW',theme_color:'#126b80',background_color:'#f8f7f1',display:'standalone',scope:'.',start_url:'.',icons:[{src:'icon-192.png',sizes:'192x192',type:'image/png'},{src:'icon-512.png',sizes:'512x512',type:'image/png'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,webp,json}'],maximumFileSizeToCacheInBytes:3000000,navigateFallback:'index.html'}})]});
