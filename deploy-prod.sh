#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git pull origin main

# npm run docs:build


# 打包docker镜像之前把之前的先删除了 - 这里不用版本号管理了
sudo docker rmi coding-time -f
sudo docker rm coding-time-container -f

# 打包新的镜像
sudo docker build -t coding-time .


sudo docker run -itd -p 443:443 -p 80:80 --name coding-time-container coding-time
