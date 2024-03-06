// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio,
//  secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica:
//  usando esclusivamente due input e un bottone (non stilizzati), 
//  realizziamo le specifiche scritte sopra. La risposta finale (o output) 
//  sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in 
// pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà 
// essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

// Raccogliere i dati quando il cliente clicca sul bottone 
const clcButton = document.querySelector('#clc-button');
clcButton.addEventListener('click', function() {

    const userName = document.querySelector('#user-name').value;
    const userKm = parseInt(document.querySelector('#user-km').value);
    const userAge = parseInt(document.querySelector('#user-age').value);
    console.log(userName);
    console.log(userKm);
    console.log(userAge);

    //Definiamo il costo al Km    
    const priceKm = 0.21 ;
    
    //Calcoliamo il costo dei Km 
    const totKmPrice = userKm * priceKm ;
    console.log(totKmPrice);

    // Defianimo gli sconti  
    const discountTeen = 20;
    const discountOld = 40;

    // Definiamo le condizioni dello sconto 
    let price = totKmPrice;

    let discount;

    if(userAge < 18 ){
        price = totKmPrice - (totKmPrice * discountTeen / 100);
        discount = `Sconto del ${discountTeen}%`;
    } else if (userAge > 65 ){
        price = totKmPrice - (totKmPrice * discountOld / 100);
        discount = `Sconto del ${discountOld}%`;
    } else {
        discount = `Biglietto Standard`;
    }

    // Arrotondiamo il risultato a 2 decimali 
    const ticketPrice =price.toFixed(2); 

    // Generiamo il numero della carrozza e il codice CP
    let carriage ;

    carriage = Math.floor(Math.random() * 16) + 1;

    let codeCp ;

    codeCp = Math.floor(Math.random() * 99999) + 10000;

    // Stampiano il risultato 
    const userMessageName = document.querySelector('#user-message-name');
    userMessageName.innerHTML = userName;

    const userMessageDiscount = document.querySelector('#user-discount');
    userMessageDiscount.innerHTML = discount;

    const userMessageCarriage = document.querySelector('#user-carriage');
    userMessageCarriage.innerHTML = carriage;

    const userMessageCodeCp = document.querySelector('#user-code');
    userMessageCodeCp.innerHTML = codeCp;

    const userMessageTicketPrice = document.querySelector('#user-ticket-price');
    userMessageTicketPrice.innerHTML = ticketPrice + "€";
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    document.querySelector("#user-name").value = "";
    document.querySelector("#user-km").value = "";
    document.querySelector("#user-age").value = "";

    const userMessageName = document.querySelector('#user-message-name');
    userMessageName.innerHTML = "";

    const userMessageDiscount = document.querySelector('#user-discount');
    userMessageDiscount.innerHTML = "";

    const userMessageCarriage = document.querySelector('#user-carriage');
    userMessageCarriage.innerHTML = "";

    const userMessageCodeCp = document.querySelector('#user-code');
    userMessageCodeCp.innerHTML = "";

    const userMessageTicketPrice = document.querySelector('#user-ticket-price');
    userMessageTicketPrice.innerHTML = "";
});