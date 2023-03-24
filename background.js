let coordinates = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'coordinates') {
        coordinates = request.data;
    } else if (request.type === 'requestCoordinates') {
        sendResponse({ coordinates: coordinates });
    }
});