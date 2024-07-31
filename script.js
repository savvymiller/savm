img = document.getElementById("img1");
        // Function to set image dimensions

        var x = 0;
        
        function enlargeImg() {
            img.style.width = "30rem";
            img.style.height = "auto";
            img.style.transition = "width 0.5s ease";
        }
        // Function to reset image dimensions
        function resetImg() {
            img.style.width = "9rem";
            img.style.height = "auto";
            img.style.transition = "width 0.5s ease";
        }

        function imgSize() {
            if (x === 0) {
                enlargeImg();
                x = 1;
            } else {
                resetImg();
                x = 0;
            }
        }

        function photosOn() {
            (document.getElementById("scrolling")).style.visibility = "visible";
        }

        function photosOff() {
            (document.getElementById("scrolling")).style.visibility = "hidden";
        }