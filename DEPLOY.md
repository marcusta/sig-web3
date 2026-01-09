# Deployment Instructions

Your site is configured for static export and subdirectory deployment.
The target URL is: `https://app.swedenindoorgolf.se/sig-web3/`

## 1. Local Development (Port 4001)
To run locally at root (`http://localhost:4001/`):
```bash
npm run dev
```

To run locally mimicking the subdirectory (optional, for testing):
```bash
NEXT_PUBLIC_BASE_PATH=/sig-web3 npm run dev
```

## 2. Server Deployment
Since you have a VPS with Linux, you can serve the static files using Nginx or Apache.

### Step A: Build for Production
Run this command on your local machine (or the server if it has Node.js):
```bash
export NEXT_PUBLIC_BASE_PATH=/sig-web3
npm run build
```
*Note: This generates a static export in the `out/` directory.*

### Step B: Upload Files
Upload the contents of the `out/` directory to your server.
Example location: `/var/www/html/sig-web3/` or wherever your web root matches the URL.

### Step C: Web Server Config (Nginx Example)
Ensure your Nginx block handles the location. If `apps.swedenindoorgolf.se` root is `/var/www/html/` and you uploaded `out` content to `/var/www/html/sig-web3/`, it should work automatically for static files.

**Important for SPA Routing:**
For a single page app (Next.js), if you refresh a page like `/sig-web3/faq`, Nginx might look for a file `faq.html` or `faq/index.html`. `next export` creates these files.
- `/sig-web3/` -> `index.html`
- `/sig-web3/faq` -> `faq.html`

Make sure `try_files` is configured if you experience 404s on direct link access (though simpler static export structure usually just works if `.html` extension is resolved).

## Gotchas to Watch Out For
1.  **Images**: Any manual `<img>` tags or CSS `background-url` must include the base path. I have updated `Hero.tsx` and `Gallery.tsx` to handle this. Next.js `<Image />` handles it automatically.
2.  **Links**: Next.js `<Link />` handles `basePath` automatically. Standard `<a href="...">` tags do NOT. Using `<Link>` is always preferred for internal navigation.
3.  **Environment Variable**: You MUST set `NEXT_PUBLIC_BASE_PATH=/sig-web3` when building for the server. If you forget this, assets will 404.
