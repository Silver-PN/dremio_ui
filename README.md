Dremio UI Setup Guide

Environment Requirements

Before installing and running the project, ensure that your system has the following tools and libraries installed:

Required Tools

pnpm (Node.js package manager)

nvm (Node Version Manager)

Maven 3.9.6

Node.js LTS

JDK 11, 17, 21 (Default: JDK 21)

Installation Guide

1. Install Required Tools

If not already installed, you can install the tools as follows:

Install pnpm

curl -fsSL https://get.pnpm.io/install.sh | sh -

Install nvm

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
source ~/.bashrc

Install Node.js LTS

nvm install --lts
nvm use --lts

Install Maven 3.9.6

sudo apt update
sudo apt install maven
mvn -version  # Check version

Install JDK 21 and Set as Default

sudo apt install openjdk-21-jdk
sudo update-alternatives --config java  # Select JDK 21
java -version  # Check version

Install and Run the Project

1. Navigate to the Project Directory

cd /home/{user}/dremio_ui/dac/ui/

2. Install Dependencies

pnpm install

3. Configure Memory for Node.js

export NODE_OPTIONS="--max-old-space-size=4096"

4. Build Output Path

After building, the output files will be located in:

/home/{user}/dremio/dac/ui/target/classes/rest/dremio_static

Run the Project

If there is a startup script, use the appropriate command, e.g.: