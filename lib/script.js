function loadHTML(id, url) {
            fetch(url)
                .then(response => response.text())
                .then(data => document.getElementById(id).innerHTML = data)
                .catch(error => console.error('Error loading HTML:', error));
        }

        // Memuat masing-masing bagian dari folder templates
        loadHTML("navbar", "templates/navbar.html");
        loadHTML("carousel", "templates/carousel.html");
        loadHTML("produk-kami", "templates/produk-kami.html");
        loadHTML("kebanggaan-indonesia", "templates/kebanggaan-indonesia.html");
        loadHTML("tentang-kacang", "templates/tentang-kacang.html");
        loadHTML("ikuti-kami", "templates/ikuti-kami.html");
        loadHTML("footer", "templates/footer.html");
