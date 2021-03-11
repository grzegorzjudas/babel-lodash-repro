# babel-lodash-repro
Meant to demo the issue in babel-lodash-plugin

## Description
This is a clean, example repo containing code that shows the [issue #236](https://github.com/lodash/babel-plugin-lodash/issues/236) in [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash), causing the plugin to include multiple unused lodash functions in the bundle, even if you only use one that has no dependencies. You can see the result yourself - run `npm run build` and once it's done, a **webpack-bundle-analyzer** dashboard will appear showing below:

<img width="958" alt="Dependency dashboard showing multiple lodash functions being imported" src="https://user-images.githubusercontent.com/3832059/110768529-99db8c00-8257-11eb-9c77-3f55e5bbaf76.png">
