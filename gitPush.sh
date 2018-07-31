#!/bin/sh
#push local code to origin server shell
git add .
git commit -am"$*"
git push origin
git status

