// Definir a data e hora para a contagem regressiva (por exemplo, "Jan 5, 2025 15:37:25")
var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

// Atualizar a contagem regressiva a cada 1 segundo
var x = setInterval(function() {

  // Obter a data e hora de hoje
  var now = new Date().getTime();
    
  // Encontrar a distância entre agora e a data da contagem regressiva
  var distance = countDownDate - now;
    
  // Cálculos de tempo para dias, horas, minutos e segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Exibir o resultado no elemento com id="countdown"
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML = seconds + "s ";
    
  // Se a contagem regressiva terminar, escreva algum texto
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
