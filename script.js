//your JS code here. If required.
document.getElementById('download-images-button').addEventListener('click', () => {
    const imgUrls = [
        { url: 'https://example.com/image1.jpg' },
        { url: 'https://example.com/image2.jpg' },
        { url: 'https://example.com/image3.jpg' }
    ];

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear any previous images or messages

    // Function to download an image and return a promise
    const loadImage = (image) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.url;
            img.onload = () => resolve(img);
            img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
        });
    };

    // Use Promise.all to download all images in parallel
    Promise.all(imgUrls.map(loadImage))
        .then(images => {
            images.forEach(img => {
                outputDiv.appendChild(img);
            });
        })
        .catch(error => {
            outputDiv.textContent = error;
        });
});
