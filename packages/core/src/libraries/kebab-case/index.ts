// code taken from https://www.npmjs.com/package/kebab-case
const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;

export default function kebabCase(str: string) {
  return str.replace(KEBAB_REGEX, function (match) {
    return '-' + match.toLowerCase();
  });
};