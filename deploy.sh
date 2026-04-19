#!/usr/bin/env bash
# Deploy static site to one.com via SFTP (single login).
#
# Usage:
#   ./deploy.sh                 # deploy to /www/ (root, for production)
#   ./deploy.sh preview         # deploy to /www/preview/ (side-by-side testing)
#
# Password: set ONECOM_PASSWORD env var, or put creds in ~/.netrc:
#   machine ssh.swedenindoorgolf.se login swedenindoorgolf.se password XXX

set -euo pipefail

HOST="ssh.swedenindoorgolf.se"
USER="swedenindoorgolf.se"
MODE="${1:-root}"

case "$MODE" in
  root)
    BASE_PATH=""
    REMOTE="/www"
    ;;
  preview)
    BASE_PATH="/preview"
    REMOTE="/www/preview"
    ;;
  *)
    echo "Unknown mode: $MODE (use: root | preview)" >&2
    exit 1
    ;;
esac

echo "==> Building with BASE_PATH='$BASE_PATH'"
BASE_PATH="$BASE_PATH" node build.js

echo "==> Uploading dist/ to $REMOTE/"
# mirror -R: upload (reverse)
# --parallel=4: concurrent transfers
# -x '\.htaccess$': don't clobber server .htaccess
# no --delete: leave existing server files alone (safer during staged cutover)
LFTP_CMDS="set sftp:auto-confirm yes; \
mirror -R --parallel=4 --verbose -x '\.htaccess\$' dist/ $REMOTE/; \
bye"

if [[ -n "${ONECOM_PASSWORD:-}" ]]; then
  lftp -u "$USER,$ONECOM_PASSWORD" "sftp://$HOST" -e "$LFTP_CMDS"
else
  # Falls back to ~/.netrc or interactive prompt (one prompt, one session)
  lftp -u "$USER" "sftp://$HOST" -e "$LFTP_CMDS"
fi

echo "==> Done"
