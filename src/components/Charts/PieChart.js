import "./charts.css";

import { useEffect,useState } from "react";
import { Pie } from "react-chartjs-2";

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
            <font face="Courier New">
            <font size="8"> Honduras</font>
            </font>
                <Pie data={chartData} options={{responsive:true}} legend={{position: 'left'}} ></Pie>
            </div>
        </div>
    );
}

export default PieChart;