await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './out',
  target: 'bun'
})