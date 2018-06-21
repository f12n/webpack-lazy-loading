import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');
    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);


    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e =>
        import ( /* webpackChunkName: "print" */ './print').then(
            //Note that when using import() on ES6 modules 
            // you must reference the .default property 
            // as it's the actual module object that will be returned when the promise is resolved.
            module => {
                var print = module.default;
                print();
            }
        );

    return element;
}

document.body.appendChild(component());