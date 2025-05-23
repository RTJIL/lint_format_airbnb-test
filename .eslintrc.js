module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',           // ✅ Good base rules
    'plugin:prettier/recommended',  // 💅 Turns Prettier on & disables conflicting rules
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': 'warn',         // Warn when you use console.log
    'eqeqeq': 1,                  // Warn if you're not using ===
    'no-unused-vars': ['warn'],  // Warn for unused variables
  },
};
