## React Native Quick Start

### Tech stack

- [React Native 0.63](https://reactnative.dev/)
- [typeScript 3.9](https://www.typescriptlang.org/)
- [jest](https://jestjs.io/)
- [eslint](https://eslint.org/)
- [react-navigation](https://reactnavigation.org/docs/getting-started)
- [styled-components](https://styled-components.com/)

### Requirements

_NOTE_: The environment for this was done with macOS 10.14.X

- Node >= 12.X (LTS)
- NPM or Yarn (Optional)
- Watchman
- XCode
- Android Studio

### How to start the boilerplate

- Clone this repository:

```bash
$> git clone https://github.com/4t4sh/rnqs
```

- Inside the project run:

```bash
$> rm -rf .git/
$> git init
$> yarn
$> yarn rename <NewNameOfTheApp> -b "[domain].[company].[project]"
```

#### Android & iOS

The platform in the command bellow must be one of `android` or `ios`

```bash
$> yarn start
```

```bash
$> yarn run:[platform]
```

### Contribute

Please contribute with ideas on GH issues or create PR to improve this repository.

Thanks.
