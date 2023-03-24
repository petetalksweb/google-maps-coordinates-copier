function findGoogleMapsLink() {
    const anchors = document.getElementsByTagName('a');
    for (const anchor of anchors) {
        const match = anchor.href.match(/https:\/\/www.google.com\/maps\/.*?@(-?\d+\.\d+),(-?\d+\.\d+)/);
        if (match) {
            return { lat: match[1], lng: match[2] };
        }
    }
    return null;
}

chrome.runtime.sendMessage({ type: 'coordinates', data: findGoogleMapsLink() });
