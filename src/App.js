//Se importan todos los componentes existentes
import { Banner, NavBar, CategoriesCard } from './components';

//Axios para hacer el llamado a la API
import axios from "axios";
import { useState, useEffect } from 'react';
import Products from './pages/Products';
import Filters from './pages/Filters';

//Pantalla principal, se renderizan solo los componentes y paginas, desde aquí se debe hacer el llamado a la API para conseguir la info aunque tendría sentido hacer el llamado a la API desde la pagina de Products, pasarle qué tipo de productos queremos maybe

function App() {
  var filterProducts = [];
  

  const url = "https://testing-agriglobal-market.ue.r.appspot.com/api/getproducts/admisiones";
  const [products, setProducts] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    const fetchData = async () =>{
      const res = await axios.get(url);
      setProducts(res.data.products);
    }
  
    fetchData()
  }, [])

  
  return (
    <div className="">
        <Filters setData={setSearchFilter}/>
      {products ? products.filter((filterName) => {
        searchFilter.toLowerCase() === '' ?
          filterProducts.push(filterName) : filterName.title.toLowerCase().includes(searchFilter.toLowerCase())?
             filterProducts.push(filterName): <div>Filtrando...</div>;
      }) : <div>Esperando información...</div>}
      {<Products products={filterProducts}/>}

      <div>
        <Banner />
        <NavBar />
        <CategoriesCard />
      </div>
    </div>
  );
}

export default App;
