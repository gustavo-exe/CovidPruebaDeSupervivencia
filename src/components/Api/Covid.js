import {useEffect} from 'react';

import getCountryCodeTotal from './CovidApi';

function Covid (){

  // useEffect(
  //   function(){
  //     getCountryCodeTotal(
  //       (err, data)=>{
  //         if(err){
  //           console.log(err);
  //         } else {
  //           console.log(data);
  //         }
  //       }
  //     )
  //   }
  //   ,[]
  // );


  return (
    <h1>Página de estadisticas COVID/19</h1>
  );
}


export default Covid;