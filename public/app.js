const menu = document.querySelector('#burger-menu')
const mobileNav = document.querySelector('#mobile-nav')
const closeMenu = document.querySelector('#close-menu')
const body = document.querySelector('body')
let links = document.querySelectorAll('ul li a')

menu.addEventListener('click', function(){
	mobileNav.classList.remove('hidden')

	closeMenu.classList.remove('hidden');
	closeMenu.classList.add('block');
	menu.classList.add('hidden')

}) // burger-menu trigger

closeMenu.addEventListener('click', function(){
	mobileNav.classList.add('hidden')

	closeMenu.classList.remove('block')
	closeMenu.classList.add('hidden')

	menu.classList.remove('hidden')

	body.classList.remove('overflow-hidden')
}) // burger-menu closing trigger

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}) // smooth scroll

function handleClick (clickedElement){
	links.forEach (function(link){
		link.classList.remove('text-primary')
	})

	clickedElement.classList.add('text-primary')
}

