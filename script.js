document.addEventListener('DOMContentLoaded', function() {
    const imageSelect = document.getElementById('image-select');
    const selectedImage = document.getElementById('selected-image');

    imageSelect.addEventListener('change', function() {
        const value = this.value;
        if (value) {
            selectedImage.src = `images/${value}.png`;
        } else {
            selectedImage.src = '';
        }
    });
});
