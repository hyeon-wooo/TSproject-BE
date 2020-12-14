export function* range(...argv) {
  if (argv.length === 0) return [];
  let min = argv.length === 1 ? 0 : argv[0];
  const max = argv.length === 1 ? argv[0] : argv[1];

  while (min < max) yield min++;
}
