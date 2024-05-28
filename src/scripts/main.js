AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timesetAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timesetAtual ;

    const diasAteoEvento = Math.floor(distanciaDoEvento / (1000 * 60 * 60 * 24));
    const HorasAteoEvento = Math.floor((distanciaDoEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteEvento =  Math.floor((distanciaDoEvento %  (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor((distanciaDoEvento % (1000 * 60)) / (1000));
    console.log(diasAteoEvento);
    console.log(HorasAteoEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteoEvento}D ${HorasAteoEvento}H ${minutosAteEvento}M ${segundosAteOEvento}S`;

    if(distanciaDoEvento < 0){
        clearInterval();
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

},1000);