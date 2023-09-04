const climasSection = document.querySelector(".climas");
const apiURL = "https://jsonplaceholder.typicode.com/users"

async function getClimas() {
    const res = await fetch(apiURL);
    const climas = await res.json();
    return climas;
}

async function renderClimas() {
    const climas = await getClimas();
    let template = "";

    climas.forEach((clima) => {
    template += `
    <div class="clima">
    <h3>Nombre: ${clima.name}</h3>
    <p>Email: ${clima.email}°C</p>
    <p>Phone: ${clima.phone}°C</p>
    </div>
    `;
    });
    climasSection.innerHTML = template;
    }
    renderClimas()

async function getPagina(){
    try{
        const res = await fetch("http://otroejemplo.cl");
        const data = await res.json();
        console.log(data)
    } catch (e){
        const mensajeError = document.getElementById("mensaje__error");
        mensajeError.innerHTML ="Se produjo el siguiente error: " + e.message;
    }
}
getPagina();


    async function getSomething() {
        try {
        const res = await fetch("https://estapaginanoexiste.cl");
        const data = await res.json();
        console.log(data);
        } catch (e) {
        alert(e.message);
        }
        }
        getSomething();

        async function getAndCreateDataToChart() {
            const res = await fetch("https://api.gael.cloud/general/public/sismos");
            const sismos = await res.json();
            const labels = sismos.map((sismo) => {
            return sismo.Fecha;
            });
            const data = sismos.map((sismo) => {
            const magnitud = sismo.Magnitud.split(" ")[0];
            return Number(magnitud);
            });
            const datasets = [
            {
            label: "Sismo",
            borderColor: "rgb(255, 99, 132)",
            data
            }
            ];
            return { labels, datasets };
            }

            async function renderGrafica() {
                const data = await getAndCreateDataToChart();
                const config = {
                type: "line",
                data
                };
                const myChart = document.getElementById("myChart");
                myChart.style.backgroundColor = "white";
                new Chart(myChart, config);
                }
                renderGrafica();