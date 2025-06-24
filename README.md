# Dynamic Form Fields

This project demonstrate how to render forms dynamically. One can simply add multiple fields and can be flexible enough to add new field components to codebase to support other types of fields e.g. dropdown, checkbox. This project is created with [Expo](https://expo.dev) using [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). I considered using Expo over React Native CLI since it simplify development by providing essential tools and integrations I only needed for a simple project like this.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Libraries

- [Lodash](https://lodash.com/): JavaScript utility library that provides a collection of helper functions.

## Future Plans

The data source for the forms is currently in the [data.json](./assets/files/data.json) file. Further improvement can be done to have it fetch in a remote server or be provided by an api to where we can utilize [react-query](https://tanstack.com/query) and possibly implement further state management libraries like [zustand](https://zustand-demo.pmnd.rs/).
