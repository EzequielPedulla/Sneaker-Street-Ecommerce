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

  // Obtener las referencias a los elementos relevantes
  const filtroSelect = document.getElementById('filtros');
  const cardsContainer = document.querySelector('.cards');
  let tarjetasIniciales = Array.from(
    cardsContainer.getElementsByClassName('card__grid')
  );

  // Agregar el evento change al elemento select
  filtroSelect.addEventListener('change', function () {
    // Obtener el valor seleccionado
    const filtroSeleccionado = filtroSelect.value;

    if (filtroSeleccionado === 'relevantes') {
      // Ordenar las tarjetas por las más recientes
      const tarjetas = tarjetasIniciales.slice(); // Hacer una copia del arreglo inicial
      tarjetas.sort(function (a, b) {
        return b.dataset.timestamp - a.dataset.timestamp;
      });
      for (const tarjeta of tarjetas) {
        cardsContainer.appendChild(tarjeta);
      }
    } else if (filtroSeleccionado === '') {
      // Ordenar las tarjetas alfabéticamente
      const tarjetas = tarjetasIniciales.slice(); // Hacer una copia del arreglo inicial
      tarjetas.sort(function (a, b) {
        const tituloA = a.querySelector('h4').textContent.toUpperCase();
        const tituloB = b.querySelector('h4').textContent.toUpperCase();
        if (tituloA < tituloB) {
          return -1;
        } else if (tituloA > tituloB) {
          return 1;
        } else {
          return 0;
        }
      });
      for (const tarjeta of tarjetas) {
        cardsContainer.appendChild(tarjeta);
      }
    }
  });
});
