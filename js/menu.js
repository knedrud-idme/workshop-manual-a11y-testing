function load() {
    const menuItems = Array.from(document.querySelectorAll('.megamenu-navitem'))
    const submenus = Array.from(document.querySelectorAll('.megamenu-section'))

    function resetSubmenus(event) {
        var activeSubmenu = document.querySelector('.megamenu-section.active')
        if (activeSubmenu && !activeSubmenu.contains(event.target)) {
            activeSubmenu.classList.remove('active')
            activeSubmenu.querySelector('.megamenu-navitem').setAttribute('aria-expanded', 'false');
        }
    }

    menuItems.forEach((menuItem, index) => {
        let parentElement = menuItem.closest('.megamenu-section');
        menuItem.addEventListener('click', function(event) {
            resetSubmenus(event)

            // Add active menu for the item clicked
            if(!parentElement.classList.contains('active')) {
                parentElement.classList.add('active')
                menuItem.setAttribute('aria-expanded', 'true');
            } else {
                parentElement.classList.remove('active')
                menuItem.setAttribute('aria-expanded', 'false');
            }
        })
    })

    document.addEventListener('click', (event) => {
        resetSubmenus(event)
    })

    submenus.forEach(submenu => {
        submenu.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                resetSubmenus({});
                // bring focus back to menu toggle button
                submenu.querySelector('.megamenu-navitem').focus();
            }
        })
    })
}
document.addEventListener('DOMContentLoaded', load)
