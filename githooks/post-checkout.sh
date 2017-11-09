#!/bin/bash
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ $CURRENT_BRANCH == "master" ]]; then
    exit;
fi

GITHUB_NUMBER=$(echo $CURRENT_BRANCH | egrep -o '#[0-9]*')

if [ -z $GITHUB_NUMBER ]; then
    echo "[Post Checkout] No GitHub number on branch."
    echo "[Post Checkout] Please fix your branch name before committing."
    exit 1
fi
