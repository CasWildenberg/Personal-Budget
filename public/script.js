const newEnvelopeButton = document.getElementById('new-envelope-button');
const envelopesContainer = document.getElementById('envelopes-container');

const renderEnvelopes = (envelopes = []) => {
    envelopesContainer.innerHTML = '';

    if (envelopes.length > 0) {
        envelopes.forEach(envelope => {
            const renderingEnvelope = document.createElement('div');
            renderingEnvelope.className = 'single-envelope';
            renderingEnvelope.innerHTML = `
            <h4 class='envelope-name'>${envelope.envelopeName}</h4>
            <h4 class='envelope-budget'>${envelope.envelopeBudget}</h4>`

            envelopesContainer.appendChild(renderingEnvelope);
        })
    }
}


newEnvelopeButton.addEventListener('click', (event) => {
    console.log('Directing to create envelope page...')
    window.location.href = 'new-envelope.html';
})

document.addEventListener('DOMContentLoaded', (event) => {
    fetch('/api/envelopes', {
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
        renderEnvelopes(response.envelopes);
    })
})