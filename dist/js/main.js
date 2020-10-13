//Setting DOM events
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menubranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item')

//Set Initial Set
let showMenu = false;

menuBtn.addEventListener("click",toggle)

function toggle(){
    if(!showMenu){
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menubranding.classList.add('show');
      menuNav.classList.add('show');
      navItems.forEach(items => items.classList.add('show'));

      showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menubranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(items => items.classList.remove('show'));
  
        showMenu = false;
    }
}

