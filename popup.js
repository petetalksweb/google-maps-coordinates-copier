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
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' }, () => {
            setTimeout(() => {
                chrome.tabs.sendMessage(tabs[0].id, { type: 'requestCoordinates' }, (response) => {
                    if (chrome.runtime.lastError) {
                        displayError();
                    } else if (response && response.data) {
                        displayCoordinates(response.data.lat, response.data.lng);
                    } else {
                        displayError();
                    }
                });
            }, 100);
        });
    });
});
