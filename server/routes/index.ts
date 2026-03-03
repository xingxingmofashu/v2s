import { defineEventHandler } from "h3"
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

export default defineEventHandler(async () => {
  const file = await readFile(join(process.cwd(), 'index.html'))
  return new Response(file)
})