  function updateClock() {
    const now = new Date();

    // Calculando os segundos, minutos e horas com frações
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;                // Inclui frações de segundos
    const hours = now.getHours() % 12 + minutes / 60;                // Inclui frações de minutos

    // Calculando a rotação de cada ponteiro
    const secondsDeg = seconds * 6;    // 360 degrees / 60 seconds
    const minutesDeg = minutes * 6;    // 360 degrees / 60 minutes
    const hoursDeg = hours * 30;       // 360 degrees / 12 hours

    // Aplicando a rotação aos ponteiros
    document.querySelector('.seconds-hand').style.transform = `rotate(${secondsDeg}deg)`;
    document.querySelector('.minutes-hand').style.transform = `rotate(${minutesDeg}deg)`;
    document.querySelector('.hours-hand').style.transform = `rotate(${hoursDeg}deg)`;

    // Atualizando o relógio digital
    const digitalHours = String(now.getHours()).padStart(2, '0');
    const digitalMinutes = String(now.getMinutes()).padStart(2, '0');
    const digitalSeconds = String(now.getSeconds()).padStart(2, '0');

    document.querySelector('.digit-hours').textContent = digitalHours;
    document.querySelector('.digit-minutes').textContent = digitalMinutes;
    document.querySelector('.digit-seconds').textContent = digitalSeconds;
  }

  setInterval(updateClock, 100);
  updateClock();

