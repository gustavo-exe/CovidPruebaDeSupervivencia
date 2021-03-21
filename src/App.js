import {useEffect, useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import PieChart from "./components/Charts/PieChart";

import getCountryCodeTotal from './components/Api/CovidApi';
import FireBaseInit  from "./FireBaseInit";


function App() {
  const [covidApiDato, setCovidApiDato] = useState(
    {
        datos:[]
    }
  );
  const eliminandoBaseDeDatos=()=>
  {
    FireBaseInit.database().ref('Covid').remove();
  }

  useEffect(
    ()=>{
      eliminandoBaseDeDatos();

      const covidRef = FireBaseInit.database().ref('Covid').orderByKey().limitToLast(100);
      covidRef.on('child_added', (snapshot) => 
      {
        let newDato = { ...snapshot.val(), fb_id: snapshot.key };
        let newDatos = covidApiDato.datos;
        newDatos.push(newDato);
        setCovidApiDato({...covidApiDato, todos: newDatos});
      });

      //Obtencion de los datos de la api
      getCountryCodeTotal(
        (err, data)=>{
          if(err){
            console.log(err);
          } else {
            console.log(data);
            FireBaseInit.database().ref("Covid").push(data);
          }
        }
      )
    },[]);

  return (
      <div className="App">
        <NavBar/>
        <PieChart/>
      </div>
  );
}



export default App;
