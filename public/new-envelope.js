const submitEnvelopeButton = document.getElementById('submit-envelope-button');

submitEnvelopeButton.addEventListener('click', () => {
    const envelopeName = document.getElementById('envelope-name').value;
    const envelopeBudget = document.getElementById('envelope-budget').value;

    const envelope = {envelopeName: envelopeName, envelopeBudget: envelopeBudget};

    fetch (`/api/envelopes?envelope=${envelope}`, {
        method:'POST',
    })
    .then (response => {
        console.log('Redirecting to home page...')
        window.location.href = 'index.html';
    })
})