document.addEventListener('DOMContentLoaded', function() {
    const variantSelect = document.getElementById('variant-select');
    const variantImages = document.querySelectorAll('.variant-image');

    function updateImage() {
        const selectedVariant = variantSelect.value;

        // Hide all images
        variantImages.forEach(image => {
            image.classList.remove('active');
        });

        // Show the selected image
        const selectedImage = document.querySelector(`.variant-image[data-variant="${selectedVariant}"]`);
        if (selectedImage) {
            selectedImage.classList.add('active');
        }
    }

    // Add event listener for changes
    variantSelect.addEventListener('change', updateImage);

    // Initial display on page load
    updateImage();
});