#!/bin/bash
# sass单文件编译脚本

sass scss/$1.scss:css/$1.css --style compressed --sourcemap=none
