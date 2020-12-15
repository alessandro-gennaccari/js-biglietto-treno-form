var generate = document.getElementById("generate");
generate.addEventListener('click', function() {

    // Dichiero le varibili
    var guestName = document.getElementById('name').value;
    var kmDistance = document.getElementById('distance').value;
    var guestAge = document.getElementById('age').value;
    var ticketPrice = 0.21 * kmDistance;
    var promo = 'Tariffa Standard';
    var min = 90000;
    var max = 100000;

    // Calcolo dello sconto, con un controllo in base all'età
    if (guestAge == 'minor') {
        ticketPrice -= ticketPrice * 0.2;
        promo = 'Sconto Minorenni'
    } else if (guestAge == 'senior') {
        ticketPrice -= ticketPrice * 0.4;
        promo = 'Sconto Silver'
    }

    // Stampo tutto le informazioni del biglietto
    document.getElementById('guest-name').innerHTML = guestName;
    document.getElementById('promo').innerHTML = promo;
    document.getElementById('seat').innerHTML = Math.floor(Math.random() * 9) + 1;
    document.getElementById('code').innerHTML = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('price').innerHTML = ticketPrice.toFixed(2);

    // Cambio classe all'id selezionato
    document.getElementById('ticket').className = 'show';

});

var remove = document.getElementById('remove');
remove.addEventListener("click" , function() {

    // Azzero tutti i campi del form
    document.getElementById('name').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('age').value = '';

    // Azzero tutti i valori stampati
    document.getElementById('guest-name').innerHTML = ' ';
    document.getElementById('promo').innerHTML = ' ';
    document.getElementById('seat').innerHTML = ' ';
    document.getElementById('code').innerHTML = ' ';
    document.getElementById('price').innerHTML = ' ';
    
    // Cambio classe all'id selezionato
    document.getElementById('ticket').className = 'hidden';

});







