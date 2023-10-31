const expandButton = document.querySelector('.expand-button');

let activeIndex;

expandButton.addEventListener('click', () =>{
    document.body.classList.toggle('collapsed');
});

const current = window.location.href;

const allLinks = document.querySelectorAll('.sidebar-links a');

allLinks.forEach((element) => {
    element.addEventListener('click', function() {
        const hrefLinkClicked = element.href;

        allLinks.forEach((link) => {
            if (link.href == hrefLinkClicked) {
                link.classList.add('active');
            }
            else{
                link.classList.remove('active');
            }
        });
    });
});

const searchInput = document.querySelector('.search-container input');

searchInput.addEventListener('focus', (e) => {
    document.body.classList.remove('collapsed');
});   