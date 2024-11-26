

document.addEventListener('DOMContentLoaded', (event) => {
    fetch('/api/helloWorld', {
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.error('Could not execute GET');
        }
    })
    .then(response => {
        const helloWorldContainer = document.getElementById('hello-world-container');
        helloWorldContainer.innerHTML = response.response;
    })
})