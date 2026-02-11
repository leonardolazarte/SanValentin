let attempts = 0;

let loveQuotes = [
  "Eres la razón por la que sonrío sin darme cuenta 💖",
  "Contigo todo se siente más bonito ✨",
  "Mi lugar favorito es contigo 🥺",
  "Prometo hacerte sonreír todos los días 😘",
  "Tú haces que mi corazón lata más rápido ❤️"
];

let yesSelected = false;

let noGifs = [
  "gifs/corazongigante.gif",
  "gifs/osos.gif",
  "gifs/gatos.gif"
];

let yesGif = "gifs/beso.gif";
let noGifIndex = 0;

function displayMessage(response) {
  const responseMessage = document.getElementById('responseMessage');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const bottomGif = document.getElementById('bottomGif');

  if (yesSelected) return;

  if (response === 'yes') {
    if (attempts === 0) {
      const randomIndex = Math.floor(Math.random() * loveQuotes.length);
      responseMessage.innerHTML = loveQuotes[randomIndex] + "<br><br>Entonces nos vemos el 14 😍";
    } else {
      responseMessage.innerHTML = 
        "Sabía que dirías que sí 😏❤️<br><br>" +
        "Leonardo es la persona más feliz del mundo 🌍🤩🥰";
    }

    bottomGif.src = yesGif;

    noButton.disabled = true;
    yesSelected = true;

  } else {

    if (attempts === 0) {
      responseMessage.innerHTML = "Creo que te equivocaste 😅 intenta otra vez.";
    } else if (attempts === 1) {
      responseMessage.innerHTML = "Mmm... no es ese botón 🙃";
    } else if (attempts === 2) {
      responseMessage.innerHTML = "Pista: empieza con S y termina con Í 😏";
    } else {
      responseMessage.innerHTML = "Ok, ya no hay opción, di que sí 😘";
       noButton.disabled = true;
    }

    bottomGif.src = noGifs[noGifIndex];
    noGifIndex = (noGifIndex + 1) % noGifs.length;
  }

  responseMessage.style.display = 'block';
  attempts++;
}
