Webpack Code Splitting

https://webpack.js.org/guides/code-splitting/

Code splitting is one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.

 three general approaches to code splitting available:

* Entry Points: Manually split code using entry configuration.
* Prevent Duplication: Use the SplitChunks to dedupe and split chunks.
* Dynamic Imports: Split code via inline function calls within modules.

### Entry Points pitfalls 

* If there are any duplicated modules between entry chunks they will be included in both bundles.
* It isn't as flexible and can't be used to dynamically split code with the core application logic.

### Prevent Duplication
Here are some other useful plugins and loaders provided by the community for splitting code:

* [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin): Useful for splitting CSS out from the main application.
* [bundle-loader](https://webpack.js.org/loaders/bundle-loader): Used to split code and lazy load the resulting bundles.
* [promise-loader](https://github.com/gaearon/promise-loader): Similar to the bundle-loader but uses promises.

The [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin) is also used to split vendor modules from core application code using [explicit vendor chunks](https://webpack.js.org/plugins/commons-chunk-plugin/#explicit-vendor-chunk).


