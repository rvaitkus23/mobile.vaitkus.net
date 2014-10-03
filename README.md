mobile.vaitkus.net
==================

# Vaitkus Hybrid Mobile app

This is Front-end developer's Ricardas Vaitkus Portfolio app just to show how my code looks like.
Quickly coded app to demonstrate that can be done using [Ionic framework](http://ionicframework.com/) with some basic device specific features like:
- Camera
- GPS
- Local Notifications
- OAuth
- Barcode Scanner
- Flashlight

## Install

After you check out this git repository you need to get dependencies installed. To do that you need to run command 

```bash
$ npm install
```

To update styles from scss files you need to run command 

```bash
$ grunt sass
```

If you want css files to be updated each time you upadate scss files you can leave this command running 

```bash
$ grunt watch
```

### Release version

To minify JavaScript and Css files you can do that by running this command

```bash
$ grunt build:release
```

### Development version

To get back to development version with out using minified versions for easier debuging run this command

```bash
$ grunt build:dev
```

## Build and run on devices

To make build for devices you will have to follow [Cordova guidelines](http://cordova.apache.org/docs/en/3.6.0/guide_platforms_index.md.html#Platform%20Guides)