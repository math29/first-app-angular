# first-app-angular

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.
## Installation
You can have some errors during installation
To solve them, try :
- `sudo npm install grunt --save-dev` for grunt not working
- `bower install` for not could find Bower packages !
- `sudo npm install grunt-karma --save-dev` for karma missing (`grunt test`)
- `npm install karma-jasmine --save-dev` for jasmine missing using karma

Magical command when grunt serve doesn't work (change la limite de nombre d'accès possible aux fichiers pour que grunt puisse avoir plus de libertés) :
- `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
