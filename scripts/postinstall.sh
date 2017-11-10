#!/bin/bash
if [ ! -z $npm_config_production ]; then
    exit
fi

echo "[GitHooks] Copying Git Hooks"
cp githooks/commit-msg.sh .git/hooks/commit-msg
cp githooks/post-checkout.sh .git/hooks/post-checkout
echo "[GitHooks] Setting Permissions"
chmod +x .git/hooks/commit-msg .git/hooks/post-checkout
echo "[GitHooks] Done"
echo
