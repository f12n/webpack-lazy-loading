// This will result in <link rel="prefetch" href="login-modal-chunk.js"> 
// being appended in the head of the page, 
// which will instruct the browser to prefetch in idle time the login-modal-chunk.js file.

document.body.onclick = function() {
	import(/* webpackPrefetch: true */ './LoginModal');
}

// webpack will add the prefetch hint once the parent chunk has been loaded.