#!/bin/bash
if [ ! -z $npm_config_production ]; then
    exit
fi

PREFIX="[Git Hooks]"
echo "$PREFIX Finding Git Hooks"
HOOKS=$(ls -1 githooks | sed -e 's/\..*$//')

for HOOK in $HOOKS;
do
    FILE_SAME=`cmp --silent githooks/$HOOK.sh .git/hooks/$HOOK`
    FILE_SAME=$?

    if [[ $FILE_SAME -eq 0 ]]; then
        echo "$PREFIX <$HOOK> Already installed."
    else
        echo "$PREFIX <$HOOK> Installing."
        cp githooks/$HOOK.sh .git/hooks/$HOOK
    fi

    if [[ ! -x .git/hooks/$HOOK ]]; then
        echo "$PREFIX <$HOOK> Making executable."
        chmod +x .git/hooks/$HOOK
    fi
done

echo "$PREFIX Done"
echo
