# ObservableSessions

## Code overview
1. Create service for alert `ng g s alert` which has an alert `Subject` with `push` and `get` methods that sets the subject and returns it
2. Create a component for the alert `ng g c alert` which subscribes to the alert subject in the `AlertService` and displays it in its HTML
3. Create a module for the alert `ng g m alert` which exports `AlertComponent`
4. Optionally create an interface for the alert with `alertMessage` and `alertType` with alertType preferably being an `enum`
5. Include `AlertModule` in the `AppModule`
6. Include `AlertComponent` selector `app-alert` in the `app.component.html`
7. Add few buttons to show different types of alerts in the `app.component.html`
8. On click of each button push an alert with a message and approproate type to `AlertService#push`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

