function scrollTop(elem, duration) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button', 500);

/*const target = document.getElementById("menu");
target.addEventListener('click', () => {
  const target = document.getElementById("menu");
  target.classList.toggle('open');
});*/

const tabs = document.getElementsByClassName('tab-menu__item');
for (let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener('click', tabSwitch);
}
function tabSwitch() {
  document.getElementsByClassName('active')[0].classList.remove('active');
  this.classList.add('active');
  document.getElementsByClassName('show')[0].classList.remove('show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('tab-content__item')[index].classList.add('show')
};

const target = document.getElementById("menu");
target.addEventListener('click', () => {
  const target = document.getElementById("menu");
  target.classList.toggle('open');
  const nev = document.getElementById("nav");
  nav.classList.toggle('in');
});

const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const model = document.getElementById('model');
openBtn.addEventListener('click',() => {
  model.style.display = 'block';
})
closeBtn.addEventListener('click',() => {
  model.style.display = 'none';
})
window.addEventListener('click', (e) => {
  if (!e.target.closest('.model__content-inner') && e.targer.id!== "openBtn") {
    model.style.display = 'none';
  }
});

const menu3 = document.getElementsByClassName("menu3");
for (let i = 0; i < menu3.length; i++){
  menu3[i].addEventListener("click",toggle);
}
function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle("is-active");
  content.classList.toggle("is-open");
}