// Renders favicon.svg + all PNG variants + logo.png from a single source.
// Run: node scripts/generate-icons.mjs
import { Resvg } from '@resvg/resvg-js'
import { writeFileSync } from 'node:fs'

// Rounded-square cream card + Clover stem (same DNA as the site nav logo)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <rect width="48" height="48" rx="10" fill="#faf6ef"/>
  <ellipse cx="17" cy="15" rx="8" ry="8.5" fill="#1f4d35"/>
  <ellipse cx="31" cy="15" rx="8" ry="8.5" fill="#1f4d35"/>
  <ellipse cx="17" cy="29" rx="8" ry="8.5" fill="#1f4d35"/>
  <ellipse cx="31" cy="29" rx="8" ry="8.5" fill="#1f4d35"/>
  <circle cx="24" cy="22" r="2.6" fill="#faf6ef"/>
  <path d="M24 36 Q 24 42, 30 44" stroke="#1f4d35" stroke-width="2.2" stroke-linecap="round" fill="none"/>
</svg>`

// Full brand logo for Organization.logo schema — wordmark + mark on solid cream
const W = 512
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${W}" viewBox="0 0 ${W} ${W}">
  <rect width="${W}" height="${W}" fill="#faf6ef"/>
  <g transform="translate(184, 120)">
    <ellipse cx="48" cy="40" rx="44" ry="46" fill="#1f4d35"/>
    <ellipse cx="96" cy="40" rx="44" ry="46" fill="#1f4d35"/>
    <ellipse cx="48" cy="86" rx="44" ry="46" fill="#1f4d35"/>
    <ellipse cx="96" cy="86" rx="44" ry="46" fill="#1f4d35"/>
    <circle cx="72" cy="63" r="12" fill="#faf6ef"/>
    <path d="M72 148 Q 72 184, 112 198" stroke="#1f4d35" stroke-width="10" stroke-linecap="round" fill="none"/>
  </g>
  <text x="${W / 2}" y="400" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-weight="600"
        font-size="62" fill="#1f4d35" letter-spacing="-1">Clover Digital</text>
</svg>`

const renderPng = (svg, size) => {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: size },
    font: { loadSystemFonts: true, defaultFontFamily: 'Georgia' },
  })
  return resvg.render().asPng()
}

const outputs = [
  { file: 'favicon.svg', kind: 'svg', content: faviconSvg },
  { file: 'favicon-16.png',     kind: 'png', svg: faviconSvg, size: 16 },
  { file: 'favicon-32.png',     kind: 'png', svg: faviconSvg, size: 32 },
  { file: 'favicon-180.png',    kind: 'png', svg: faviconSvg, size: 180 },
  { file: 'apple-touch-icon.png', kind: 'png', svg: faviconSvg, size: 180 },
  { file: 'favicon-192.png',    kind: 'png', svg: faviconSvg, size: 192 },
  { file: 'favicon-512.png',    kind: 'png', svg: faviconSvg, size: 512 },
  { file: 'favicon.png',        kind: 'png', svg: faviconSvg, size: 32 },
  { file: 'logo.png',           kind: 'png', svg: logoSvg,    size: 512 },
]

for (const out of outputs) {
  const path = new URL(`../${out.file}`, import.meta.url)
  if (out.kind === 'svg') {
    writeFileSync(path, out.content)
    console.log(`wrote ${out.file} (svg)`)
  } else {
    const buffer = renderPng(out.svg, out.size)
    writeFileSync(path, buffer)
    console.log(`wrote ${out.file} (${out.size}x${out.size}, ${buffer.length} bytes)`)
  }
}
