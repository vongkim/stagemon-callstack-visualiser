# Stagemon Callstack Visualiser

A simple tool to visualise [stagemonitor's](http://www.stagemonitor.org) callstack data stored in [elasticsearch](https://www.elastic.co). This tool is designed to be used only in development and in no means production ready.

## Requirements
* This project requires that elasticsearch has been installed and configured to allow CORS 
* Stagemonitor has been installed and configured in your web application with data stored in elasticsearch.


Add the following to your /elasticsearch-x.x.x/config/elasticsearch.yml
`http.cors.enabled: true`
`http.cors.allow-origin: "*"`

Replace origin '*' to your preferred origin.


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

This project was generated with the [angular-cli](https://github.com/angular/angular-cli). To get more help on the `angular-cli` use `ng --help` or go check out the [angular-cli README](https://github.com/angular/angular-cli/blob/master/README.md).
