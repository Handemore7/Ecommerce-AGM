# Construcción de la página web de AGM
Link de referencia: https://testing-e-commerce.vercel.app/shop
Link del prototipo final: (https://handemore7.github.io/Ecommerce-AGM/)

# Herramientas usadas
- React
- React-icons
- Axios

# Funcionalidades
- **Barra de navegación**
> En la barra de navegación hay algunos hover en "About us" y "News", en "Account" y "Language" hay unos dropdowns.

- **Sección de filtros**
> El único filtro funcional es el de busqueda, los de "Filter categories" y "Filter Dispatch Estimated" están maquetados pero no tienen la lógica para su funcionamiento.
En el fondo se encuentra un botón que resetea el valor de los filtros.

- **Sección de productos**
> Se bajan los datos con un llamado a un endpoint mediante Axios, con esta información se crean las tarjetas, las cuales aquellas que tienen descuento o son etiquetadas como favoritas tienen ciertos cambios, al igual que aquellas en las que ya no hay productos disponibles por lo cual aparecen deshabilitadas.
En el fondo se encuentra tambien una paginación

- **Tarjeta de un producto**
> En la tarjeta de un producto hay un Hover para destacar cuando el usuario pase el mouse, el botón de "Add to cart" solo muestra un alert con el nombre del producto, el botón de comparar (el de las flechas) hace que las tarjetas disponibles dejen de estarlo y dandole una segunda vez vuelve a estar disponible.

- **Footer**
> Algunos hover añadidos


# Para ejecutar:
> Abrir el código en el IDE, asegurandose de estar en la carpeta correcta ejecutar el comando npm install, una vez instalado todo lo necesario ejecutar el comando npm start

# Cosas por hacer:
- Hacer funcionar el resto de filtros