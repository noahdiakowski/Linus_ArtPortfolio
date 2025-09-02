fetch('nav.html')   
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar').innerHTML = data;

                const navLinks = document.querySelectorAll(".navtext");
                const currentPage = window.location.pathname.split("/").pop(); 

                navLinks.forEach(link => {
                    const linkPage = link.getAttribute("href");
                    if (linkPage === currentPage) {
                        link.classList.add("active");
                    }
                });

                const navFlex = document.getElementById('navFlex');
                const body = document.body;
                const menuToggle = document.getElementById('menuToggle');
                const closeToggle = document.getElementById('closeToggle');

                menuToggle.addEventListener('click', () => {
                    navFlex.classList.add('menu-open');
                    body.classList.add('menu-open');
                    closeToggle.style.display = 'inline-block';
                });

                closeToggle.addEventListener('click', () => {
                    navFlex.classList.remove('menu-open');
                    body.classList.remove('menu-open');
                    closeToggle.style.display = 'none';
                });
                }
            );