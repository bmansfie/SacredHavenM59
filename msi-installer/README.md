## MSI Installer

This installer depends on

* node.js / npm
* msi tools

The documentation for the high level tools being used is here https://github.com/mmckegg/msi-packager .  It leverages msitools on MacOS and msitools on Linux.

I build it with Linux - Ubuntu.

`apt install msitools`

I always download and install node.js from their website as the package manager is always more out of date than I can tolerate.

This process looks like this (as root).

```shell
wget https://nodejs.org/dist/v18.17.1/node-v18.17.1-linux-x64.tar.xz
tar xf node-v18.17.1-linux-x64.tar.xz
mv node-v18.17.1-linux-x64/bin/* /usr/bin
mv node-v18.17.1-linux-x64/lib/* /usr/lib
rm -rf node-v18.17.1-linux-x64*
```

Then

```shell
cd msi-installer
npm install
```

With all the dependencies installed, you build the msi package with

`node msiPackager.js`

I'm not sure if msitools or equivalent are available on Windows, all my build flows are Linux-based so this is what I know.

This is not a signed package.  Which means the user must click through a warning about it not having an official signed certificate approved by windows.  Maybe one day I fix this and update this documentation.

Node.js could be pulled from this workflow, it really isn't doing that much and is a front end to the command line utilities.  Node.js is a zero cost to me as that what I use to build software every day, but it could be removed and the command line tools used directly.

Presently my build process is to build with Visual Studio on windows, copy the artifact to Linux and make the installer.
