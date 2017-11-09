#!/bin/bash
COMMIT_MESSAGE=$1
if [[ $COMMIT_MESSAGE == ".git/"* ]]; then
    COMMIT_MESSAGE=$(head -n 1 $COMMIT_MESSAGE)
fi

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
GITHUB_NUMBER=$(echo $CURRENT_BRANCH | egrep -o '#[0-9]*')

if [ -z $GITHUB_NUMBER ]; then
    echo "[Commit Message] No associated GitHub number on branch."
    echo "[Commit Message] Refusing commit message, fix your branch name."
    exit 1
fi

echo "[Commit Message] Found GitHub number: '$GITHUB_NUMBER'"
GITHUB_COMPARISON="$GITHUB_NUMBER: "

if [[ $COMMIT_MESSAGE != $GITHUB_COMPARISON* ]]; then
    echo "[Commit Message] '$COMMIT_MESSAGE' does not start with '$GITHUB_NUMBER: '."
    echo "[Commit Message] Refusing commit message, fix your commit message."
    exit 1
fi

echo "[Commit Message] Correctly formatted."
echo "[Commit Message] Accepting commit message."
