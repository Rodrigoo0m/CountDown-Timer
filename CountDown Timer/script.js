function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Formatação de 12 horas com AM e PM
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // a hora '0' deve ser '12'
  
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').innerHTML = timeString;
  
    // Mudança de cor dinâmica opcional (remova se não quiser)
    var color = "#" + hours.toString(16) + minutes.toString(16) + seconds.toString(16);
    document.getElementById('clock').style.borderColor = color;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);
  
