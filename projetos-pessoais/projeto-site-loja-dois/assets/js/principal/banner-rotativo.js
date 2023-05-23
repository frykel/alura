var currentImageIndex = 0;
        var images = document.querySelectorAll('.banner img');
        var prevArrow = document.querySelector('.arrow.prev');
        var nextArrow = document.querySelector('.arrow.next');

        function showImage(index) {
            for (var i = 0; i < images.length; i++) {
                images[i].style.opacity = i === index ? 1 : 0;
            }
        }

        function nextImage() {
            currentImageIndex++;
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            showImage(currentImageIndex);
        }

        function prevImage() {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            }
            showImage(currentImageIndex);
        }

        nextArrow.addEventListener('click', nextImage);
        prevArrow.addEventListener('click', prevImage);

        setInterval(nextImage, 5000);