import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click and check the console';
    btn.onclick = _ => {
        console.log('what the fuck');
    };

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());