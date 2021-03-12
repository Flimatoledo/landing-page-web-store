(() => {
  let time = 3500,
      currentImageIndex = 0,
      btnMenu = document.querySelector('.btn-menu')
      btnClose = document.querySelector('.btnClose');
      menu = document.querySelector('.btnAbrir');
      images = document.querySelectorAll("#slider img")
      max = images.length;

  const nextImg = () => {

    images[currentImageIndex].classList.remove('selected');
    currentImageIndex += 1;

    if (currentImageIndex >= max)
      currentImageIndex = 0;

    images[currentImageIndex].classList.add('selected');
  }

  window.addEventListener('load', () => {
    setInterval(() => {
      nextImg();

    }, time)
  })
})();