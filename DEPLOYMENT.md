# Deployment

Static site served from one.com webspace at `swedenindoorgolf.se`. WordPress was replaced in-place — files coexist under `/www/` with Apache configured to prefer `index.html`.

## Hosting

- **Provider:** one.com shared hosting
- **Webroot (remote):** `/www/` (symlink to the actual webspace)
- **Access:** SFTP only (no shell), port 22, host `ssh.swedenindoorgolf.se`, user `swedenindoorgolf.se`
- **Credentials:** set in one.com Control Panel → SSH & SFTP

## How routing works

one.com serves files from `/www/` with Apache + a `.htaccess` in the webroot. The first line of `.htaccess` pins the directory index:

```apache
DirectoryIndex index.html index.php
```

Effect:
- `/` → `/www/index.html` (static site homepage)
- `/prislista/` → `/www/prislista/index.html` (Apache serves real directories before hitting rewrites)
- Anything not a real file or directory → falls through to the WordPress rewrite block (still present in `.htaccess`), which now 404s since WP files may be gone or redundant

This means adding the `DirectoryIndex` line was the single flip that switched the site from WP to static. Removing the line reverts to WP (as long as WP files are still there).

## Build

```bash
BASE_PATH= node build.js       # root deployment (production)
BASE_PATH=/preview node build.js  # side-by-side preview at /preview/
```

`build.js` renders Nunjucks templates → `dist/`, compiles Tailwind, copies `public/` assets.

## Automatic deploy (GitHub Actions)

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and uploads `dist/` to `/www/` via SFTP. Manual runs are available from the Actions tab (`Run workflow`).

The workflow mirrors `deploy.sh`: same `lftp mirror -R` command, same `.htaccess` exclusion, no `--delete`. Intent: a non-dev colleague can edit `content/*.json` via GitHub's web editor, commit, and the site redeploys with no local tooling.

### Secret: `ONECOM_PASSWORD`

The workflow reads the SFTP password from the `ONECOM_PASSWORD` repo secret. Host (`ssh.swedenindoorgolf.se`) and user (`swedenindoorgolf.se`) are inlined in the workflow.

**Rotating the password:**
1. Change it in one.com Control Panel → SSH & SFTP
2. GitHub → repo → Settings → Secrets and variables → Actions → update `ONECOM_PASSWORD`
3. (Optional) update local `~/.netrc` / `ONECOM_PASSWORD` env var for `./deploy.sh`
4. Re-run the latest failed workflow, or push a trivial commit to verify

If the secret is missing, the workflow fails fast with a clear message.

## Manual deploy script

`./deploy.sh` builds and uploads in a single SFTP session. Use when iterating locally or deploying `preview`.

```bash
./deploy.sh             # build BASE_PATH= and upload to /www/
./deploy.sh preview     # build BASE_PATH=/preview and upload to /www/preview/
```

Script behavior:
- Uses `lftp mirror -R` for recursive upload, 4 parallel streams
- **Skips `.htaccess`** — does not touch server config
- **No `--delete`** — leaves unrelated server files alone (WP remnants, preview dir, backups)
- Auto-confirms host key

### Credentials

Password resolution order:
1. `ONECOM_PASSWORD` env var
2. `~/.netrc` entry:
   ```
   machine ssh.swedenindoorgolf.se login swedenindoorgolf.se password XXX
   ```
   (must be `chmod 600`)
3. Interactive prompt (one per deploy)

## Contact form

Form in `src/templates/partials/contact-form.njk` POSTs to:
```
https://app.swedenindoorgolf.se/sig-status/contact
```

That endpoint lives in the separate `sig-status` repo (`src/app.ts`), sends mail via Gmail SMTP using `GMAIL_USER` (currently `marcus.andersson1975@gmail.com`) to `RECIPIENT_EMAIL`. CORS allowlist covers both `swedenindoorgolf.se` and `www.swedenindoorgolf.se`.

Spam protections: honeypot field (`_url`), rate limiting by IP, origin check.

## Rollback

1. Edit `/www/.htaccess` via `lftp edit` — remove the `DirectoryIndex index.html index.php` line
2. `/` goes back to serving `index.php` (WordPress) if WP files are still present

This assumes WP files haven't been deleted. Once they are removed, the rollback requires restoring from the SFTP + phpMyAdmin backups taken before the switch.

## Cleanup TODO (post-switch)

- [ ] Delete WP files from `/www/`: `wp-admin/`, `wp-content/`, `wp-includes/`, `wp-*.php`, `xmlrpc.php`, `index.php`, `readme.html`, `license.txt`
- [ ] Delete stale dirs: `old homepage bkp/`, `onewebmedia/`, `tmp-onehopmigration-*/`, `preview/`
- [ ] Remove WordPress rewrite block from `.htaccess`
- [ ] Drop WP database tables via phpMyAdmin (after a few weeks of confidence)
- [ ] Optional: add 301 redirects for old WP URLs in `.htaccess`
- [ ] Submit new sitemap to Google Search Console

## Useful one-shot commands

```bash
# List remote webroot
lftp -u swedenindoorgolf.se sftp://ssh.swedenindoorgolf.se -e "cls /www/; bye"

# Cat a remote file
lftp -u swedenindoorgolf.se sftp://ssh.swedenindoorgolf.se -e "cat /www/.htaccess; bye"

# Edit a remote file in $EDITOR
lftp -u swedenindoorgolf.se sftp://ssh.swedenindoorgolf.se -e "edit /www/.htaccess"

# Download a single file
lftp -u swedenindoorgolf.se sftp://ssh.swedenindoorgolf.se -e "get /www/.htaccess -o htaccess.backup; bye"
```
