if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/typescriptapp/sw.js', { scope: '/typescriptapp/' })})}