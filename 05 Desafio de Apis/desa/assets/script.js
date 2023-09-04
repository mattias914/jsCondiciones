const monedaUno = document.getElementById('moneda__uno');
const monedaDos = document.getElementById('moneda__dos');
const cantidad = document.getElementById('cantidad');
const btn = document.getElementById('taza');
const cambio = document.getElementById('cambio');

async function getPagina() {
    try {
        const res = await fetch("https://mindicador.cl/api/");
        const data = await res.json();
        const tasaEUR = data.euro.valor;
        const tasaUSD = data.dolar.valor;
        console.log(data);

        btn.addEventListener('click', () => {
            const cantidadInput = Number(cantidad.value);
            let cantidadConvertida;

            if (monedaUno.value === "EUR" && monedaDos.value === "USD") {
                cantidadConvertida = cantidadInput * (tasaEUR / tasaUSD);
            } else if (monedaUno.value === "USD" && monedaDos.value === "EUR") {
                cantidadConvertida = cantidadInput * (tasaUSD / tasaEUR);
            } else {
                cantidadConvertida = cantidadInput;
            }

            cambio.textContent = cantidadConvertida.toFixed(2) + ' ' + monedaDos.value;
        });
    } catch (e) {
        const mensajeError = document.getElementById("mensaje__error");
        mensajeError.innerHTML = "Se produjo el siguiente error: " + e.message;
    }
}

getPagina();

async function getAndCreateDataToChart() {
    const res = await fetch("https://mindicador.cl/api/");
    const data = await res.json();

    // Elije la moneda que deseas graficar (por ejemplo, "dolar")
    const monedaSeleccionada = "dolar";

    // Obtén las fechas y valores de la moneda seleccionada para los últimos 10 días
    const fechas = data[monedaSeleccionada].serie.slice(-10).map((item) => item.fecha);
    const valores = data[monedaSeleccionada].serie.slice(-10).map((item) => Number(item.valor));

    const datasets = [{
        label: monedaSeleccionada.toUpperCase(), // Usamos el nombre de la moneda como etiqueta
        borderColor: "rgb(255, 99, 132)",
        data: valores
    }];

    return { labels: fechas, datasets };
}

async function renderGrafica() {
    console.log("Renderizando la gráfica...");
    const data = await getAndCreateDataToChart();
    const config = {
        type: "line",
        data
    };
    const myChart = document.getElementById("myChart");
    myChart.style.backgroundColor = "white";
    new Chart(myChart, config);
}

document.addEventListener('DOMContentLoaded', () => {
    renderGrafica();
});
