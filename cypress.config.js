const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "browser": "chrome",
    "headless": false,
    "viewportWidth": 1920,
    "viewportHeight": 1080,      
  },
});
