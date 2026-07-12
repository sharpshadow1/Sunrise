import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/,
// so asset and route paths need to be aware of that '/Sunrise/' prefix.
// If you ever move this to a custom domain or a user/org root site
// (https://<user>.github.io/), change base back to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Sunrise/'
});
