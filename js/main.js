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

  // Buscador

  const buscadorInput = document.querySelector('.buscador__input');
  const productlist = document.querySelector('.product__list');
  const articles = document.querySelectorAll('.article');

  // Ocultar la lista de productos al cargar la página
  productlist.style.display = 'none';

  // Mostrar la lista de productos al hacer clic en el campo de búsqueda
  buscadorInput.addEventListener('click', function () {
    if (buscadorInput.value.trim() !== '') {
      productlist.style.display = 'block';
    }
  });

  // Filtrar los artículos en tiempo real al escribir en el campo de búsqueda
  buscadorInput.addEventListener('input', function () {
    const searchTerm = buscadorInput.value.trim().toLowerCase();

    articles.forEach((article) => {
      const articleText = article.textContent.toLowerCase();

      if (articleText.includes(searchTerm)) {
        article.style.display = 'block'; // Mostrar artículo que coincide con la búsqueda
      } else {
        article.style.display = 'none'; // Ocultar artículo que no coincide con la búsqueda
      }
    });

    // Mostrar u ocultar la lista de productos según si hay resultados de búsqueda o no
    if (searchTerm === '') {
      productlist.style.display = 'none';
    } else {
      productlist.style.display = 'block';
    }
  });
});
