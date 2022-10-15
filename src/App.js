//useState para manejos de estados y useEffect para el llamado de la API
import { useState, useEffect } from 'react';

//Se importan todos los componentes existentes que aparezcan directamente en la web
import { Banner, Footer, NavBar } from './components';

//Se importan todas las páginas existentes
import Products from './pages/Products';
import Filters from './pages/Filters';

//Axios para hacer el llamado a la API
import axios from "axios";

//Importar DataContext para poder encapsular la aplicación en un contextProvider y poder compartir información desde otros componentes
import { DataContext } from './dataContext';


//Pantalla principal, se renderizan solo los componentes y paginas, desde aquí se debe hacer el llamado a la API para conseguir la info aunque tendría sentido hacer el llamado a la API desde la pagina de Products, pasarle qué tipo de productos queremos maybe
function App() {
  //Algunas variables importantes, url del endpoint para conseguir la data
  const url = "https://testing-agriglobal-market.ue.r.appspot.com/api/getproducts/admisiones";
  
  //Algunos de estos estados los manejo desde acá para tener un mejor manejo, esto solo sirve en estos casos que son webs simples, con webs mas grandes es mejor que cada componente maneje todos sus procesos
  const [products, setProducts] = useState(null); //Almacenar la información de los productos
  const [searchFilter, setSearchFilter] = useState(''); //String que se usa para filtrar los productos
  const [categories, setCategories] = useState(['']); //Almacenar las categorías de todos los objetos
  const [currentPage, setCurrentPage] = useState(1); //Almacenar la página de la paginación en la que debe estar el usuario
  const [itemsPerPage] = useState(9); //Numero de elementos por página
  const [totalPages, setTotalPages] = useState(1); //Numero de elementos por página

  const handleCleanFilters = (e) => {
    setCurrentPage(1);
    setSearchFilter('');
  }
  //Mediante axios acceder al endpoint para conseguir los datos y guardarlos en el estado "products"
  useEffect(() => {
    const fetchData = async () =>{
      const res = await axios.get(url);
      setProducts(res.data.products);
    }
    fetchData()
  }, [])
  
  //Arreglo de los productos filtrados
    var filterProducts = [];
  
  
  return (
    <DataContext.Provider value={
      { //Todos los estados, seter's o información que quiero compartir entre componentes
        products,
        currentPage, 
        setCurrentPage, 
        itemsPerPage,
        setSearchFilter,
        searchFilter,
        setCategories,
        categories,
        handleCleanFilters,
        totalPages,
        setTotalPages
      }}>
      <div>
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
      <Footer /> 
    </DataContext.Provider>
  );
}

export default App;
