import { defineConfig } from 'cypress';

export default defineConfig({
  port: 9000,
  video: true,
  e2e: {
    specPattern: "e2e/**/*.{cy.ts,feature}",
    supportFile: false,
    viewportWidth: 1536
  }
});
