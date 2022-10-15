import { useState, useEffect } from 'react';

//Se importan todos los componentes existentes que aparezcan directamente en la web
import { Banner, CategoriesCard, Footer, NavBar } from './components';

//Se importan todas las páginas existentes
import Products from './pages/Products';
import Filters from './pages/Filters';

//Axios para hacer el llamado a la API
import axios from "axios";

//Importar DataContext para poder encapsular la aplicación en un contextProvider y poder compartir información desde otros componentes
import { DataContext } from './dataContext';

//Datos para la sección de categorias

const categoriesData = [
{
  image:'https://testing-e-commerce.vercel.app/static/media/cuttin-meet.f16dd2c594c97c5da982.webp',
  text:'Supply to feed mills',
  available: true
},{
  image:'https://testing-e-commerce.vercel.app/static/media/Supply-to-Farms.b295666dbcb52340085d.webp',
  text:'Supply to farms',
  available: false
},
{
  image:'https://testing-e-commerce.vercel.app/static/media/Meat-Offert.41c7135ff54fa2195072.webp',
  text:'Meat offer',
  available: true
},
{
  image:'https://testing-e-commerce.vercel.app/static/media/Supply-to-Renderers.2d10b5961db258714930.webp',
  text:'Supply to renderers',
  available: true
},
{
  image:'	https://testing-e-commerce.vercel.app/static/media/Machinery-and-Equipment.15a0b9c7581dc852479b.webp',
  text:'Machinery and equipment',
  available: false
},
]


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
        <CategoriesCard data={categoriesData}/>
        <div className='productsSection'>
        <Filters />
          {/* Se filtran los productos, validando si lo escrito en el input está contenido en los productos, aquellos que tengan lo puesto en el input en su nombre son retornados y se envían como un arreglo de objetos a Products para que se rendericen los ya filtrados*/}
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
