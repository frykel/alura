var currentImageIndex = 0;
        var images = document.querySelectorAll('.banner img');
        var prevArrow = document.querySelector('.prev');
        var nextArrow = document.querySelector('.next');
        var indicatorsContainer = document.querySelector('.indicators');

        function setActiveIndicator(index) {
            var indicators = document.querySelectorAll('.indicator');
            for (var i = 0; i < indicators.length; i++) {
                indicators[i].classList.toggle('active', i === index);
            }
        }

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
            setActiveIndicator(currentImageIndex);
        }

        function prevImage() {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            }
            showImage(currentImageIndex);
            setActiveIndicator(currentImageIndex);
        }

        nextArrow.addEventListener('click', nextImage);
        prevArrow.addEventListener('click', prevImage);

        for (var i = 0; i < images.length; i++) {
            var indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.onclick = function(index) {
                return function() {
                    currentImageIndex = index;
                    showImage(currentImageIndex);
                    setActiveIndicator(currentImageIndex);
                };
            }(i);
            indicatorsContainer.appendChild(indicator);
        }
        showImage(currentImageIndex);
        setActiveIndicator(currentImageIndex);

        
        setInterval(nextImage, 6000);