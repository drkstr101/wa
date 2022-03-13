#!/usr/bin/env  bash

suodo apt update
sudo apt upgrade -y

sudo apt-get install graphviz -y

sudo apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

npm install --global npm
npm install --global @teambit/bvm
bvm install

sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

cp "$(dirname $0)/.zshrc ${HOME}"