#!/bin/bash
COMMIT_MESSAGE=$1
if [[ $COMMIT_MESSAGE == ".git/"* ]]; then
    COMMIT_MESSAGE=$(head -n 1 $COMMIT_MESSAGE)
fi

PREFIX="[Commit Message]"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
GITHUB_NUMBER=$(echo $CURRENT_BRANCH | egrep -o '#[0-9]*')

if [ -z $GITHUB_NUMBER ]; then
    echo "$PREFIX No associated GitHub number on branch."
    echo "$PREFIX Refusing commit message, fix your branch name."
    exit 1
fi

echo "$PREFIX Found GitHub number: '$GITHUB_NUMBER'"
GITHUB_COMPARISON="$GITHUB_NUMBER: "

if [[ $COMMIT_MESSAGE != $GITHUB_COMPARISON* ]]; then
    echo "$PREFIX '$COMMIT_MESSAGE' does not start with '$GITHUB_NUMBER: '."
    echo "$PREFIX Refusing commit message, fix your commit message."
    exit 1
fi

echo "$PREFIX Correctly formatted."
echo "$PREFIX Accepting commit message."
