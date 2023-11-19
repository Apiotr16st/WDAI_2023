const cnt = document.getElementById('scoreValue');
const cos = document.getElementById('cos');
const plate = document.getElementById('plate');
var score = 30;
var life = 3;

function hearts(x) {
  cos.innerHTML = "";
  let xs = 3 - x;
  for (let i = 0; i < x; i++) {
    let full_h = document.createElement('img');
    full_h.src = 'full_heart.png';
    full_h.id = 'heart';
    cos.appendChild(full_h);
  }

  for (let i = 0; i < xs; i++) {
    let empty_h = document.createElement('img');
    empty_h.src = 'empty_heart.png';
    empty_h.id = 'heart';
    cos.appendChild(empty_h);
  }
  if (x === 0) {
    endgame();
  }
}
function endgame() {
  var enddiv = document.createElement('div');
  enddiv.id = 'endgame';
  if (score<0){
    score = 0;
  }
  enddiv.innerHTML = `
    Koniec Gry<br>
    Twój wynik:  ${score}<br>
  `;

  var reload = document.createElement('button');
  reload.id = 'reload';
  reload.innerHTML = `Zagraj Ponownie`;

  reload.addEventListener('click', function () {
    location.reload();
  });
  enddiv.appendChild(reload);
  plate.appendChild(enddiv);
}

plate.addEventListener('click', function () {
  if(life > 0 && score >= 0){
    score = score - 3;
    cnt.innerText = score;
    if (score < 0) {
      endgame();
      hearts(life);
    }
  }
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var abc = setInterval(function () {
    zombie();
    },
    getRandomInt(100, 500));

function zombie() {
  let zombieElement = document.createElement('div');
  zombieElement.id = 'zombie';
  var min = 10;
  var max = 360;

  var bottomPos = Math.floor(Math.random() * (max - min + 1) + min);
  zombieElement.style.bottom = bottomPos + 'px';
  zombieElement.style.zIndex = 360 - bottomPos;

  var scale = 0.8 + Math.random() * 0.5;
  zombieElement.style.transform = 'scale(' + scale + ')';
  plate.appendChild(zombieElement);

  zombieElement.addEventListener('click', function (e) {
    if(life > 0 && score > 0){
      score = score + 10;
      cnt.innerText = score;
      e.stopPropagation();
      this.remove();
    }
  });

  zombieElement.addEventListener('animationend', function (e) {
    if (e.animationName === 'zombieWalk' && life > 0 && score > 0) {
      score -= 10;
      cnt.innerText = score;
      life--;
      hearts(life);
      this.remove();
      if (score < 0) {
        endgame();
        hearts(life);
      }
    }
  });
}

hearts(life);
