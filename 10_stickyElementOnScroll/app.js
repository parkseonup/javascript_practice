const scrollable = document.querySelector('.scrollable');
const stickyProject = document.querySelector('.project');

let images = [...document.querySelectorAll('img')];

let current = 0;
let target = 0;
const ease = 0.1;

function lerp(start, end, t) {
  return start * (1 - t) + end * t; // 선형보간법 : 이동 전과 후의 직선 경로를 구해서 적용하면 부드럽게 변화하는 것처럼 보임
}

function init() {
  document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
}

function smoothScroll() {
  target = window.scrollY;
  current = lerp(current, target, ease);
  scrollable.style.transform = `translate3d(0, ${-current}px, 0)`;
  sticky();
  animateImages();
  window.requestAnimationFrame(smoothScroll);
}

function sticky() {
  let offset = window.innerHeight * 2;
  if (current < offset) {
    stickyProject.style.transform = `translate3d(0, 0, 0)`;
  } 
  if (current >= offset && current <= offset * 2) {
    stickyProject.style.transform = `translate3d(0, ${current - offset}px, 0)`;
  } 
  if (current > offset * 2) {
    stickyProject.style.transform = `translate3d(0, ${current}, 0)`;
  } 
}

function animateImages() {
  for (let i = 0; i < images.length; i++) {
    let {top} = images[i].getBoundingClientRect();
    if (i % 2 === 0) {
      images[i].style.transform = `rotate(${top * 0.05}deg)`;
    } else if (i % 2 !== 0) {
      images[i].style.transform = `rotate(-${top * 0.05}deg)`;
    }
  }
}

init();
smoothScroll();