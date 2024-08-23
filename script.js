const showMenu = (toggleId, navbarId, bodyId, headerId, mainId, footerId) => {
    const toggle = document.getElementById(toggleId),
          navbar = document.getElementById(navbarId),
          bodypadding = document.getElementById(bodyId),
          header = document.getElementById(headerId),
          main = document.getElementById(mainId),
          footer = document.getElementById(footerId);

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander');
            //bodypadding.classList.toggle('body-pd');
            //header.classList.toggle('body-pd');
            //main.classList.toggle('body-pd');
            //footer.classList.toggle('body-pd');
        });
    }
}

showMenu('nav-toggle', 'navbar', 'body-pd', 'header', 'main-content', 'footer');

const linkColor = document.querySelectorAll('.nav__link');
function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}
linkColor.forEach(l => l.addEventListener('click', colorLink));

const linkCollapse = document.getElementsByClassName('collapse__link');
for (let i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function() {
        const collapseMenu = this.nextElementSibling;
        collapseMenu.classList.toggle('showCollapse');

        const rotate = collapseMenu.previousElementSibling;
        rotate.classList.toggle('rotate');
    });
}
