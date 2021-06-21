const navLinks = document.querySelector('.nav-links');
const openNav = document.querySelector('.open-menu');
const closeNav = document.querySelector('.close-menu');

openNav.addEventListener('click', show);
closeNav.addEventListener('click', close);

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
