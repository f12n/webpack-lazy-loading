// import _ from 'lodash';

/* async */
function getComponent() {
    /* var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click and check the console';
    btn.onclick = _ => {
        console.log('what the fuck');
    };
    element.appendChild(btn);
    return element; */

    /**
     * Note the use of "webpackChunkName" in the comment:
     * This will cause our separate bundle to be named lodash.bundle.js 
     * instead of just [id].bundle.js. for more infor:
     * https://webpack.js.org/api/module-methods#import-
     */
    return import ( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        // above: lodash is the "name" of : "chunkFilename: '[name].bundle.js',""
        var element = document.createElement('div');
        element.innerHTML = _.default.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}

// document.body.appendChild(component());
getComponent().then(component => {
    document.body.appendChild(component);
})