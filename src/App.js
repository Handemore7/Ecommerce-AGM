//Se importan todos los componentes existentes
import { Banner, ProductCard, NavBar, CategoriesCard } from './components';

//Pantalla principal, se renderizan solo los componentes y paginas, desde aquí se debe hacer el llamado a la API para conseguir la info aunque tendría sentido hacer el llamado a la API desde la pagina de Products, pasarle qué tipo de productos queremos maybe


//Variable de prueba
var information = {
  "_id": "62e437d535a547472b99d754",
  "title": "fats and oils test",
  "hsCode": "code",
  "tags": "tags",
  "imgP": "https://res.cloudinary.com/dtafodkms/image/upload/v1659123667/imgs/ahddat0dhdu5b2dfqnnq.webp",
  "gallery": [
      "https://res.cloudinary.com/dtafodkms/image/upload/v1659123661/imgs/doymlvn5axa2gwn5pfpa.webp",
      "https://res.cloudinary.com/dtafodkms/image/upload/v1659123663/imgs/eam9jioeozsnlz50s0yd.webp",
      "https://res.cloudinary.com/dtafodkms/image/upload/v1659123664/imgs/e5gi7mqwah6xsf4635mr.webp",
      "https://res.cloudinary.com/dtafodkms/image/upload/v1659123666/imgs/q69w6ek32kq1wcx7wca9.webp"
  ],
  "ProteinMin": 1,
  "ashMax": 1,
  "fatContentMin": 1,
  "moistureMax": 1,
  "moistureMin": 1,
  "pepsinDigestibilityValue": 1,
  "pepsinDigestibility": "0,20%",
  "countriesOpenMarket": [
      {
          "value": "afghanistan",
          "label": "Afghanistan"
      },
      {
          "value": "algeria",
          "label": "Algeria"
      },
      {
          "value": "bangladesh",
          "label": "Bangladesh"
      },
      {
          "value": "belize",
          "label": "Belize"
      },
      {
          "value": "botswana",
          "label": "Botswana"
      },
      {
          "value": "bulgaria",
          "label": "Bulgaria"
      }
  ],
  "countriesExport": [
      {
          "value": "algeria",
          "label": "Algeria"
      },
      {
          "value": "albania",
          "label": "Albania"
      }
  ],
  "category": "biopolymers",
  "subCategory": "chitosan",
  "description": "desc",
  "promo": false,
  "approved": true,
  "toApprove": true,
  "offerted": false,
  "favorite": true,
  "originPlant": {
      "_id": "62a220353c37865a4064e353",
      "nicknameFacility": "nickname34"
  },
  "user": "62798c02bec763c9f456d1c5",
  "__v": 0,
  "colorFACMax": 1,
  "freeFattyAcidsMax": 1,
  "metabolizableEnergy": 1,
  "metals": 1,
  "titerMinC": 1,
  "totalMIUMax": 1,
  "aGMPayment": false,
  "bags_25Kg": false,
  "bags_40Kg": true,
  "bags_50Kg": true,
  "bigBags1_1_2Mt": false,
  "cashAgainstDocuments": false,
  "countryofOrigin": {
      "value": "albania",
      "label": "Albania"
  },
  "demurrage": 10,
  "dispatchEstimated": "2022-09-29",
  "dispatchPort": {
      "value": "durresdurazzoaldrz",
      "label": "Durres (Durazzo)  AL DRZ"
  }}

function App() {
  return (
    <div className="">
      <ProductCard info={information}/>

      <div>
        <Banner />
        <NavBar />
        <CategoriesCard />
      </div>
    </div>
  );
}

export default App;
