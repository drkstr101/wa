FROM gitpod/workspace-full-vnc

# Update system
RUN sudo apt-get update && \
  sudo apt-get upgrade -y

# Install graphviz
RUN sudo apt-get install graphviz -y

# Setup zsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
ADD env/.zshrc /home/gitpod/.zshrc

# Install sdkman
RUN curl -s "https://get.sdkman.io" | bash

# Install Cypress dependencies
# TODO noninteractive has no affect
# RUN DEBIAN_FRONTEND=noninteractive sudo apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
