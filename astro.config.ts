import { defineConfig } from 'astro/config';
// Also can be @astrojs/vercel/static
import vercel from '@astrojs/vercel/serverless';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
 
export default defineConfig({
  // Also can be 'static' or 'hybrid'
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  integrations:[
    partytown({
      config:{
        forward: ["dataLayer.push"],
      }
    })
  ]
});