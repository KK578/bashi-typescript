#!/bin/bash
PREFIX="[Pre Commit]"

set -e
grunt lint
LINT_COMMAND_RESULT=$?

if [[ $LINT_COMMAND_RESULT != 0 ]]; then
    echo "$PREFIX Linting issues found."
    echo "$PREFIX Not accepting commit."
    exit $LINT_COMMAND_RESULT
fi
