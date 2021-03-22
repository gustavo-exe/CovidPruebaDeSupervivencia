import "./charts.css";
import { useEffect,useState } from "react";
import { Pie } from "react-chartjs-2";

function PieChart({covidDatos}) {

  const confirmed = covidDatos.datos.map((elemento)=>{ return(elemento[0].confirmed)});
  const critical = covidDatos.datos.map((elemento)=>{ return(elemento[0].critical)});
  const deaths = covidDatos.datos.map((elemento)=>{ return(elemento[0].deaths)});
  //console.log("confirmer",confirmed,"critical",critical,"Deaths",deaths);

    const [chartData, setCharData] = useState();

    const chart =() => {

      setCharData({
          labels: ['Criticos','Muertos','Confirmados'],
          
          datasets:[
            {
                data: [critical,deaths,confirmed],
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