//Se importan todos los componentes existentes
import { Banner, NavBar, CategoriesCard } from './components';

//Axios para hacer el llamado a la API
import axios from "axios";
import { useState, useEffect } from 'react';
import Products from './pages/Products';

//Pantalla principal, se renderizan solo los componentes y paginas, desde aquí se debe hacer el llamado a la API para conseguir la info aunque tendría sentido hacer el llamado a la API desde la pagina de Products, pasarle qué tipo de productos queremos maybe


function App() {
  
  const url = "https://testing-agriglobal-market.ue.r.appspot.com/api/getproducts/admisiones";
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () =>{
      const res = await axios.get(url);
      setProducts(res.data.products);
    }
  
    fetchData()
  }, [])

  
  return (
    <div className="">
      {products ? <Products products={products}/> : <div>Esperando información...</div>}

      <div>
        <Banner />
        <NavBar />
        <CategoriesCard />
      </div>
    </div>
  );
}

export default App;
