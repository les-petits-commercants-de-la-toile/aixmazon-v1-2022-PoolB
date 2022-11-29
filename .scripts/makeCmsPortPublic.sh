#!/usr/bin/env bash
if [ ! -z "$CODESPACE_NAME" ]
then
  gh codespace ports visibility 8000:public -c $CODESPACE_NAME
else
  echo "Running on local dev, not needed to make port visibility public"
fi
