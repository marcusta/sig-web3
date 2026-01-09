# Deployment Instructions

You have configured the application to run as a Node.js server (Server Side Rendering), which allows you to manage it with `systemctl`.

## 1. Prepare & Commit (Local Machine)

Since you want to commit built files, follow these steps:

1.  **Build the application**:
    ```bash
    # Set the base path matching your production URL structure
    export NEXT_PUBLIC_BASE_PATH=/sig-web3
    npm run build
    ```
    This creates a `.next` folder.

2.  **Commit everything**:
    ```bash
    git add .
    git commit -m "Build for deployment"
    git push
    ```

## 2. Server Setup (First Time)

On your deployment server:

1.  **Clone the repository**:
    ```bash
    cd /var/www/  # or your preferred directory
    git clone https://github.com/your-repo/sig-web3.git
    cd sig-web3
    ```

2.  **Install Production Dependencies**:
    Even though you committed the build, you still need `node_modules` for the server to run.
    ```bash
    npm install --omit=dev
    ```

3.  **Setup Systemd Service**:
    Copy the provided service file and edit it.
    
    ```bash
    # Copy file to systemd directory
    sudo cp sig-web3.service /etc/systemd/system/

    # Edit the file to match your User and Paths
    sudo nano /etc/systemd/system/sig-web3.service
    # -> UPDATE 'User', 'WorkingDirectory', and 'ExecStart'
    ```

4.  **Start the Service**:
    ```bash
    sudo systemctl daemon-reload
    sudo systemctl enable sig-web3
    sudo systemctl start sig-web3
    ```

5.  **Check Status**:
    ```bash
    sudo systemctl status sig-web3
    ```
    You should see it active and listening on port 4001.

## 3. Updates (Subsequent Depoyments)

When you have changes:

1.  **Local**: Make changes, `npm run build`, commit, and push.
2.  **Server**:
    ```bash
    cd /var/www/sig-web3
    git pull
    npm install --omit=dev  # Only if package.json changed
    sudo systemctl restart sig-web3
    ```

## Reverse Proxy (Caddy)

Add this to your Caddyfile.

Since Next.js is configured with `basePath: '/sig-web3'`, we simply forward the full path to the internal port. We do **not** want to strip the prefix.

```caddy
app.swedenindoorgolf.se {
    # Reverse proxy the specific path to your local node process
    reverse_proxy /sig-web3/* localhost:4001
}
```
