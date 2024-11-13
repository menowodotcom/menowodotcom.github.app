function loadHTML(id, url) {
            fetch(url)
                .then(response => response.text())
                .then(data => document.getElementById(id).innerHTML = data)
                .catch(error => console.error('Error loading HTML:', error));
        }

        // Memuat masing-masing bagian dari folder templates
        loadHTML("pages-tentang-kacang", "pages/tentang-kacang.html");