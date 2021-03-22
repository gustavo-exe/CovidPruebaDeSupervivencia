import "./charts.css";
import { useEffect,useState } from "react";
import { Pie } from "react-chartjs-2";

import FireBaseInit  from "../../FireBaseInit";


const response = FireBaseInit.database().ref('Covid/-MWMRGACvRSZaiVFhOqj/0/confirmed').get().then(function(snapshot) {
    if (snapshot.exists()) {
      console.log("Muertes confirmadas",snapshot.val());
    }
    else {
      console.log("No hay datos");
    }
  })
  

const response1 = FireBaseInit.database().ref('Covid/-MWMRGACvRSZaiVFhOqj/0/critical').get().then(function(snapshot) {
  if (snapshot.exists()) {
    console.log("Criticos",snapshot.val());
  }
  else {
    console.log("No hay datos");
  }
})


const response2 = FireBaseInit.database().ref('Covid/-MWMRGACvRSZaiVFhOqj/0/deaths').get().then(function(snapshot) {
  if (snapshot.exists()) {
    console.log("Muertos",snapshot.val());
  }
  else {
    console.log("No hay datos");
  }
})



function PieChart() {
    const [chartData, setCharData] = useState();
    const datosEstadisticos = [22,10,10];
    /* const uno=20;
    const dos="80"; */
    

    const chart =() => {
    setCharData({
        labels: ['Criticos','Muertos','Confirmados'],
        
        datasets:[
        {
            data: datosEstadisticos,
            backgroundColor:[
            '#4E9100','#6BC300','#8CFF00'
            ],
            borderColor: "transparent",
            borderWidth: 10,
        }
        ]
        })
    };

    useEffect(()=>{
        chart();

        
    },[]);

    return (
        <div className="Contenedor">
            <div className="ContenedorPie" >
                <Pie data={chartData} options={{responsive:true}} legend={{position: 'left'}} ></Pie>
            </div>
        </div>
    );
}

export default PieChart;