module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 120,
  tabWidth: 2,
  plugins: ["prettier-plugin-packagejson", "@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrder: ["^([./]|@/)"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
