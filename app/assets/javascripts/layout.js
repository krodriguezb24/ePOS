window.onload = function(){
    window.frames['header__object'].contentDocument.getElementById('header_content__menu__icon').addEventListener("click", menuToggle)
    
    function menuToggle() {
        window.frames['menu__object'].contentDocument.getElementById('menu_body');
        if (window.frames['menu__object'].contentDocument.getElementById('menu_body').classList.contains('show')) {
            window.frames['menu__object'].contentDocument.getElementById('menu_body').classList.remove('show');
            window.frames['menu__object'].contentDocument.getElementById('menu_body').classList.add('hide');
            document.getElementById('menu').classList.add('hide')
        } else if (window.frames['menu__object'].contentDocument.getElementById('menu_body').classList.contains('hide')) {
            window.frames['menu__object'].contentDocument.getElementById('menu_body').classList.remove('hide');
            window.frames['menu__object'].contentDocument.getElementById('menu_body').classList.add('show');
            document.getElementById('menu').classList.remove('hide')
        }
    }
}
