$(document).ready(function() {
        
    
    $('#pobierz-dane').click(function() {
        // console.log('działa');

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
            
            let daneProgramisty = 'Imię: ' + data.imie + ',     Nazwisko: ' + data.nazwisko + ', Zawód: ' + data.zawod + ', Firma: ' + data.firma; 
            $('#dane-programisty').text(daneProgramisty);

        });
    
    });


});