#!/bin/bash
if [ ! -z $npm_config_production ]; then
    exit
fi

PREFIX="[Git Hooks]"
echo "$PREFIX Copying Git Hooks"
cp githooks/commit-msg.sh .git/hooks/commit-msg
cp githooks/post-checkout.sh .git/hooks/post-checkout
echo "$PREFIX Setting Permissions"
chmod +x .git/hooks/commit-msg .git/hooks/post-checkout
echo "$PREFIX Done"
echo
