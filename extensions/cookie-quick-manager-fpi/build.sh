#!bin/bash
sudo pacman -S npm
sudo npm install --global web-ext
sudo make
cd ./src
web-ext build
sudo npm uninstall --global web-ext
sudo pacman -Rs npm
sudo cp -r ./web-ext-artifacts/*.zip ../
