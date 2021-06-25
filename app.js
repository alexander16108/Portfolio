const navLinks = document.querySelector('.nav-links');
const openNav = document.querySelector('.open-menu');
const closeNav = document.querySelector('.close-menu');
const closeBar = document.querySelector('.close-first');
const closeBAR = document.querySelector('.close-second');
const closeBAr = document.querySelector('.close-third');



openNav.addEventListener('click', show);
closeNav.addEventListener('click', close);
closeBar.addEventListener('click', close);
closeBAR.addEventListener('click', close);
closeBAr.addEventListener('click', close);

/**  adding css style to the elements
 *   for opening
 */
function show() {
  navLinks.style.display = 'flex';
  navLinks.style.top = '0';
}
/** adding css style to the elements
 *  for closing
 */
function close() {
  navLinks.style.top = '-100%';
}
