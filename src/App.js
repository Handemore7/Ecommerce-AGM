//useState para manejos de estados y useEffect para el llamado de la API
import { useState, useEffect } from 'react';

//Se importan todos los componentes existentes
import { Banner, NavBar, CategoriesCard } from './components';

//Se importan todas las páginas existentes
import Products from './pages/Products';
import Filters from './pages/Filters';

//Axios para hacer el llamado a la API
import axios from "axios";
import { DataContext } from './dataContext';


//Importar el contexto


//Pantalla principal, se renderizan solo los componentes y paginas, desde aquí se debe hacer el llamado a la API para conseguir la info aunque tendría sentido hacer el llamado a la API desde la pagina de Products, pasarle qué tipo de productos queremos maybe

function App() {
  //Algunas variables importantes, url del endpoint para conseguir la data, el estado de "products" para almacenar los datos, el estado "searchFilter" es para tener el string de busqueda para filtrar los products, searchFilter acá recibe la data pero la manda desde el componente SearchBar
  const url = "https://testing-agriglobal-market.ue.r.appspot.com/api/getproducts/admisiones";
  const [products, setProducts] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [productsFilter, setProductsFilter] = useState(null);

  const [categories, setCategories] = useState(['op1','op2','op3'])

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  
  //Mediante axios llamar a la API para conseguir la data y guardarla en un estado "products"
  useEffect(() => {
    const fetchData = async () =>{
      const res = await axios.get(url);
      setProducts(res.data.products);
    }
    fetchData()
  }, [])
  
  //Arreglo de los productos filtrados
    var filterProducts = [];
  
  //Primero se filtran los productos aqui, porque la página de "Products" debería recibir los productos filtrados y solo encargarse de renderizar las tarjetas y su respectiva paginación.
  return (
    <DataContext.Provider value={
      {
        products,
        currentPage, 
        setCurrentPage, 
        itemsPerPage,
        setSearchFilter,
        searchFilter,
        setProductsFilter,
        productsFilter,
        setCategories,
        categories
      }}>
      <div className="">

        <Banner />
        <NavBar />
        <div className='productsSection'>
          <Filters />
          
          {products ? products.filter((filterName) => {
            searchFilter.toLowerCase() === '' ?
              filterProducts.push(filterName) : filterName.title.toLowerCase().includes(searchFilter.toLowerCase())?
                filterProducts.push(filterName): <div>Filtrando...</div>;
          }) : 
          <div>Esperando información...</div>}
          <Products products={filterProducts}/>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
