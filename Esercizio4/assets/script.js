const creaTabellone = function () {
    const tabelloneContenitore = document.getElementById("tabellone");

    for (let i = 0; i < 76; i++) {
        const caselleContenitore = document.createElement("div");
        caselleContenitore.className = "casella";
        caselleContenitore.textContent = i + 1;

        tabelloneContenitore.appendChild(caselleContenitore);
    }
};

creaTabellone();

const numeriEstratti = [];

function generaNumeroCasuale() {
    let numeroCasuale;
    do {
        numeroCasuale = Math.floor(Math.random() * 76) + 1;
    } while (numeriEstratti.includes(numeroCasuale));

    numeriEstratti.push(numeroCasuale);
    return numeroCasuale;
}

function evidenziaNumeriEstratti() {
    for (let numero of numeriEstratti) {
        const casellaEstratta = document.querySelector(`.casella:nth-child(${numero})`);
        casellaEstratta.classList.add("numeroEstratto");
    }
}

function onClickGeneraNumero() {
    const numeroCasuale = generaNumeroCasuale();
    document.getElementById("numeroCasuale").textContent = "IL NUMERO ESTRATTO E': " + numeroCasuale;

    evidenziaNumeriEstratti();
}

document.getElementById("generaNumeroBtn").addEventListener("click", onClickGeneraNumero);