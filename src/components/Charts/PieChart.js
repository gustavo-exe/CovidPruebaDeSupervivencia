import "./charts.css";
import { useEffect,useState } from "react";
import { Pie } from "react-chartjs-2";

function PieChart({covidDatos}) {

  let confirmed = covidDatos.datos.map((elemento)=>{ return(elemento[0].confirmed)});
  let critical = covidDatos.datos.map((elemento)=>{ return(elemento[0].critical)});
  let deaths = covidDatos.datos.map((elemento)=>{ return(elemento[0].deaths)});
  
  console.log("confirmer",confirmed,"critical",critical,"Deaths",deaths);

    const [chartData, setCharData] = useState();
    

    const chart =() => {

      setCharData({
          labels: ['Criticos','Muertos','Confirmados'],
          
          datasets:[
            {
                data: [critical[0],deaths[0],confirmed[0]],
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
    },covidDatos.datos[0]);

    return (
        <div className="Contenedor">
            <div className="ContenedorPie" >
            <font face="Courier New">
            <font size="8"> Honduras</font>
            </font>
                <Pie data={chartData} options={{responsive:true}} legend={{position: 'left'}} ></Pie>
            </div>
        </div>
    );
}

export default PieChart;
