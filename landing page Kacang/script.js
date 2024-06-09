document.addEventListener('DOMContentLoaded', function () {
    const sideNavToggle = document.getElementById('side-nav');
    const sideNav = document.querySelector('.side-nav');
    const sideNavItems = document.querySelectorAll('.list-nav ul li');

    sideNavToggle.addEventListener('change', function () {
        if (this.checked) {
            sideNavItems.forEach(function (item, index) {
                setTimeout(function () {
                    item.classList.add('show');
                }, index * 50); // Menambahkan jeda animasi untuk setiap item
            });
        } else {
            sideNavItems.forEach(function (item) {
                item.classList.remove('show');
            });
        }
    });
});