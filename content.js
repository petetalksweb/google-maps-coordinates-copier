chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'requestCoordinates') {
        sendResponse({ data: findGoogleMapsLink() });
    }
});

function findGoogleMapsLink() {
    const anchors = document.getElementsByTagName('a');
    for (const anchor of anchors) {
        const match = anchor.href.match(/https:\/\/(www.google.com\/maps|maps.google.com)\/.*?@(-?\d+\.\d+),(-?\d+\.\d+)/);
        if (match) {
            return { lat: match[2], lng: match[3] };
        }
    }
    return null;
}
