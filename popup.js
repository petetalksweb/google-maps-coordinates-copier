function displayError() {
    document.getElementById('error').classList.remove('hidden');
}

function displayCoordinates(lat, lng) {
    document.getElementById('coordinates').classList.remove('hidden');
    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lng;

    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(`${lat}, ${lng}`).then(() => {
            copyButton.textContent = 'Copied';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.sendMessage({ type: 'requestCoordinates' }, (response) => {
        if (response && response.coordinates) {
            displayCoordinates(response.coordinates.lat, response.coordinates.lng);
        } else {
            displayError();
        }
    });
});