window.onload = function(){
    window.frames['header__object'].contentDocument.getElementById('header_content__menu__icon').addEventListener("click", menuToggle)
    
    function menuToggle() {
        console.log('hola!')
        window.frames['menu__object'].contentDocument.getElementById('menu_body');
        if (window.frames['menu__object'].contentDocument.getElementById('menu_body').style.display === "none") {
            window.frames['menu__object'].contentDocument.getElementById('menu_body').style.display = "flex";
        } else {
            window.frames['menu__object'].contentDocument.getElementById('menu_body').style.display = "none";
        }
    }
}
