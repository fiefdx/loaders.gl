function parseTextSync(text, options) {
  return JSON.parse(text);
}

export default {
  name: 'JSON',
  extension: 'json',
  testText: null,
  parseTextSync
};
