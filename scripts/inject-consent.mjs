import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const CONSENT_SCRIPT = `<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
var _c=(typeof localStorage!=='undefined')?localStorage.getItem('cookie-consent'):null;
gtag('consent','default',{analytics_storage:_c==='rejected'?'denied':'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
</script>`

function injectInFile(filePath) {
  let html = readFileSync(filePath, 'utf8')
  // Check if consent is already injected as a real inline script (not in React JSON payload)
  if (html.includes('<head>' + CONSENT_SCRIPT) || html.includes('<head>\n' + CONSENT_SCRIPT)) {
    console.log(`  ✓ Already patched: ${filePath}`)
    return
  }
  // Insert consent script as first child of <head>
  html = html.replace('<head>', '<head>' + CONSENT_SCRIPT)
  writeFileSync(filePath, html)
  console.log(`  ✅ Patched: ${filePath}`)
}

function walkDir(dir) {
  const entries = readdirSync(dir)
  for (const entry of entries) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      walkDir(full)
    } else if (entry.endsWith('.html')) {
      injectInFile(full)
    }
  }
}

console.log('Injecting Consent Mode v2 into all HTML files...')
walkDir('./out')
console.log('Done.')
