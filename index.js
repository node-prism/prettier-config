module.exports = {
  endOfLine: "auto",
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,

  plugins: [
    require.resolve("@prettier/plugin-xml"),
    require.resolve("@trivago/prettier-plugin-sort-imports"),
  ],

  // @trivago/prettier-plugin-sort-imports
  importOrder: ['^node:.*', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,

  // @prettier/plugin-xml
  xmlSelfClosingSpace: true,
  singleAttributePerLine: false,

  overrides: [
    { files: "*.svg", options: { parser: "html", } },
  ],
};
