document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const imageUpload = document.getElementById('image-upload');
    const form = document.getElementById('problem-form');
    const problemDescription = document.getElementById('problem-description');

    let uploadedImage = null;

    dropZone.addEventListener('click', () => {
        imageUpload.click();
    });

    imageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            uploadedImage = file;
            dropZone.innerHTML = `<p>Image selected: ${file.name}</p>`;
        }
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) {
            uploadedImage = file;
            dropZone.innerHTML = `<p>Image selected: ${file.name}</p>`;
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = problemDescription.value;
        if (uploadedImage && description) {
            alert('Problem submitted successfully!');
            // Here, you would typically send the data to your server or process it accordingly.
            // For this example, we'll just reset the form.
            form.reset();
            dropZone.innerHTML = '<p>Drag & drop an image here or click to select</p>';
            uploadedImage = null;
        } else {
            alert('Please provide both an image and a description.');
        }
    });

    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Example marker (you would replace this with dynamic data)
    L.marker([12.934533, 77.626579]).addTo(map)
        .bindPopup('Water problem')
        .openPopup();


});
