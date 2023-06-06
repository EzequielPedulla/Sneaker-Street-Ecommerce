document.addEventListener('DOMContentLoaded', function () {
  //Thumbnail

  const mainImage = document.querySelector('.principal__img');
  const thumbnail = document.querySelectorAll('.thumbnail');

  thumbnail.forEach((thumb) => {
    thumb.addEventListener('click', function () {
      const active = document.querySelector('.active');
      active.classList.remove('active');
      this.classList.add('active');
      mainImage.src = this.src;
    });
  });

  //buscador

  window.onload = function () {
    const productlist = document.querySelector('.product__list');
    productlist.style.display = 'none'; // Ocultar la lista de productos al cargar la página
  };

  document.addEventListener('click', (e) => {
    const buscadorInput = document.querySelector('.buscador__input');
    const productlist = document.querySelector('.product__list');

    if (e.target === buscadorInput) {
      productlist.style.display = 'block'; // Mostrar la lista de productos al hacer clic en el campo de búsqueda
    } else {
      productlist.style.display = 'none'; // Ocultar la lista de productos al hacer clic en cualquier otra parte
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.target.matches('.buscador__input')) {
      if (e.key === 'Escape') e.target.value = '';

      const searchTerm = e.target.value.toLowerCase();
      const articles = document.querySelectorAll('.article');

      articles.forEach((article) => {
        const articleText = article.textContent.toLowerCase();

        if (articleText.includes(searchTerm)) {
          article.style.display = 'block'; // Mostrar artículo
        } else {
          article.style.display = 'none'; // Ocultar artículo
        }
      });
    }
  });
});
