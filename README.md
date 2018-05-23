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

