import { Glob } from "bun"
import { resolve } from 'path'

const glob = new Glob(`**/*.ts`);
const entryPath = resolve(__dirname, 'src', 'server')
const filename = glob.scan({ cwd: entryPath })
const entries = await Array.fromAsync(filename)

await Bun.build({
  entrypoints: ['./src/index.ts', ...entries.map(entry => resolve(entryPath, entry))],
  outdir: './out',
  target: 'bun',
  minify: true
})