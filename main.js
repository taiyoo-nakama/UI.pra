function scrollTop(elem, duration) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTop({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button',500);