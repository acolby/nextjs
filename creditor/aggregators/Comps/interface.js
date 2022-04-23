module.exports = ({ paths = [] }) => {
  const filtered = paths.filter((item) => item.split('/').length > 1).sort();

  const _exports = filtered.map(
    (item) =>
      `export { ${item.replace(/\//g, '_')} as ${item
        .split('/')
        .slice(1)
        .join('')}} from '#src/${item}';`
  );

  return ['', ..._exports, ''].join('\n');
};
