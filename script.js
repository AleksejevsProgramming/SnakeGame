function myFunc() {

  var choose = document.getElementById('choose');
  var main = document.getElementById('main');
  if (main.style.display != 'block') {
    main.style.display = 'block';
    choose.style.display = 'none';
    gradualy();
  } else {
    main.style.display = 'none';
  }
}

function myFunc2() {

  var choose = document.getElementById('choose');
  var main = document.getElementById('main');
  var select = document.getElementById('select');
  if (main.style.display != 'block') {
    main.style.display = 'none';
    select.style.display = 'block';
    choose.style.display = 'none';
    //oneSpeed();
  } else {
    main.style.display = 'none';
  }
}

function startGame() {
  var choose = document.getElementById('choose');
  var main = document.getElementById('main');
  var select = document.getElementById('select');
  var gameValue = document.getElementById('mySelect').value;
  if (main.style.display != 'block') {
    main.style.display = 'block';
    select.style.display = 'none';
    choose.style.display = 'none';
    console.log(gameValue);
    if (gameValue == 1) {
      oneSpeed1();
    }
    if (gameValue == 2) {
      oneSpeed2();
    }
    if (gameValue == 3) {
      oneSpeed3();
    }
    if (gameValue == 4) {
      oneSpeed4();
    }
  } else {
    main.style.display = 'none';
  }
}


function gradualy() {
var canvas = document.getElementById('canvas');
var conTxt = canvas.getContext('2d');
window.addEventListener( "keydown", doKeyDown);
var timer;
var score = 0;
var box = 30;
var snake = [{}];
var time = 200;
snake[0] = {
  x : 10 * box,
  y : 10 * box
};
snake[1] = {
  x : 10 * box,
  y : 10 * box
};
snake[2] = {
  x : 10 * box,
  y : 10 * box
};
var fruit = [{
  x : Math.floor(Math.random()*20) * box,
  y : Math.floor(Math.random()*20) * box,
}];
function reload() {
  location.reload();
}
function draw() {
    conTxt.clearRect(0,0,600,600);

    for (var i = 0; i < snake.length; i++) {
      conTxt.strokeStyle = 'black';
      conTxt.strokeRect(snake[i].x , snake[i].y , box, box);
}
      conTxt.fillRect(fruit[0].x , fruit[0].y, box, box);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;


        if (direction == 'left') snakeX = snakeX - box;
        if (direction == 'up')   snakeY = snakeY - box;
        if (direction == 'right') snakeX = snakeX + box;
        if (direction == 'down') snakeY = snakeY + box;


    if (snakeX == fruit[0].x && snakeY == fruit[0].y) {
        time = time - 10;
        clearInterval(timer);
        timer = setInterval(draw, time);
        score++;
        fruit = [{
          x : Math.floor(Math.random()*20) * box,
          y : Math.floor(Math.random()*20) * box,
        }];
      } else {
        snake.pop();
      }

    var newHead = {
      x : snakeX,
      y : snakeY
    };

    if (snakeX < box - box || snakeX > 19*box || snakeY < box - box || snakeY > 19*box) {
      //alert();
      clearInterval(timer);
      setTimeout(reload, 3000);
    }
    for (var j = 0; j < snake.length; j++) {
      if (newHead.x == snake[j].x && newHead.y == snake[j].y && snake.length > 3)  {
        clearInterval(timer);
        setTimeout(reload, 3000);
      }
    }


      snake.unshift(newHead);

    document.getElementById('score').innerHTML = 'Your score is: ' + score;

}
var direction;
function doKeyDown(e) {
  var key = e.keyCode;
  if (key == 37 && direction != 'right') direction = 'left';
  if (key == 38 && direction != 'down') direction = 'up';
  if (key == 39 && direction != 'left') direction = 'right';
  if (key == 40 && direction != 'up') direction = 'down';
}

timer = setInterval(draw, 200);
}






function oneSpeed1() {
var canvas = document.getElementById('canvas');
var conTxt = canvas.getContext('2d');
window.addEventListener( "keydown", doKeyDown);
var timer;
var score = 0;
var box = 30;
var snake = [{}];
//var time = 200;
snake[0] = {
  x : 10 * box,
  y : 10 * box
};
snake[1] = {
  x : 10 * box,
  y : 10 * box
};
snake[2] = {
  x : 10 * box,
  y : 10 * box
};
var fruit = [{
  x : Math.floor(Math.random()*20) * box,
  y : Math.floor(Math.random()*20) * box,
}];
function reload() {
  location.reload();
}
function draw() {
    conTxt.clearRect(0,0,600,600);

    for (var i = 0; i < snake.length; i++) {
      conTxt.strokeStyle = 'black';
      conTxt.strokeRect(snake[i].x , snake[i].y , box, box);
}
      conTxt.fillRect(fruit[0].x , fruit[0].y, box, box);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;


        if (direction == 'left') snakeX = snakeX - box;
        if (direction == 'up')   snakeY = snakeY - box;
        if (direction == 'right') snakeX = snakeX + box;
        if (direction == 'down') snakeY = snakeY + box;


    if (snakeX == fruit[0].x && snakeY == fruit[0].y) {
      /*  time = time - 10;
        clearInterval(timer);
        timer = setInterval(draw, time);*/
        score++;
        fruit = [{
          x : Math.floor(Math.random()*20) * box,
          y : Math.floor(Math.random()*20) * box,
        }];
      } else {
        snake.pop();
      }

    var newHead = {
      x : snakeX,
      y : snakeY
    };

    if (snakeX < box - box || snakeX > 19*box || snakeY < box - box || snakeY > 19*box) {
      //alert();
      clearInterval(timer);
      setTimeout(reload, 3000);
    }
    for (var j = 0; j < snake.length; j++) {
      if (newHead.x == snake[j].x && newHead.y == snake[j].y && snake.length > 3)  {
        clearInterval(timer);
        setTimeout(reload, 3000);
      }
    }


      snake.unshift(newHead);

    document.getElementById('score').innerHTML = 'Your score is: ' + score;

}
var direction;
function doKeyDown(e) {
  var key = e.keyCode;
  if (key == 37 && direction != 'right') direction = 'left';
  if (key == 38 && direction != 'down') direction = 'up';
  if (key == 39 && direction != 'left') direction = 'right';
  if (key == 40 && direction != 'up') direction = 'down';
}

timer = setInterval(draw, 300);
}















function oneSpeed2() {
var canvas = document.getElementById('canvas');
var conTxt = canvas.getContext('2d');
window.addEventListener( "keydown", doKeyDown);
var timer;
var score = 0;
var box = 30;
var snake = [{}];
//var time = 200;
snake[0] = {
  x : 10 * box,
  y : 10 * box
};
snake[1] = {
  x : 10 * box,
  y : 10 * box
};
snake[2] = {
  x : 10 * box,
  y : 10 * box
};
var fruit = [{
  x : Math.floor(Math.random()*20) * box,
  y : Math.floor(Math.random()*20) * box,
}];
function reload() {
  location.reload();
}
function draw() {
    conTxt.clearRect(0,0,600,600);

    for (var i = 0; i < snake.length; i++) {
      conTxt.strokeStyle = 'black';
      conTxt.strokeRect(snake[i].x , snake[i].y , box, box);
}
      conTxt.fillRect(fruit[0].x , fruit[0].y, box, box);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;


        if (direction == 'left') snakeX = snakeX - box;
        if (direction == 'up')   snakeY = snakeY - box;
        if (direction == 'right') snakeX = snakeX + box;
        if (direction == 'down') snakeY = snakeY + box;


    if (snakeX == fruit[0].x && snakeY == fruit[0].y) {
      /*  time = time - 10;
        clearInterval(timer);
        timer = setInterval(draw, time);*/
        score++;
        fruit = [{
          x : Math.floor(Math.random()*20) * box,
          y : Math.floor(Math.random()*20) * box,
        }];
      } else {
        snake.pop();
      }

    var newHead = {
      x : snakeX,
      y : snakeY
    };

    if (snakeX < box - box || snakeX > 19*box || snakeY < box - box || snakeY > 19*box) {
      //alert();
      clearInterval(timer);
      setTimeout(reload, 3000);
    }
    for (var j = 0; j < snake.length; j++) {
      if (newHead.x == snake[j].x && newHead.y == snake[j].y && snake.length > 3)  {
        clearInterval(timer);
        setTimeout(reload, 3000);
      }
    }


      snake.unshift(newHead);

    document.getElementById('score').innerHTML = 'Your score is: ' + score;

}
var direction;
function doKeyDown(e) {
  var key = e.keyCode;
  if (key == 37 && direction != 'right') direction = 'left';
  if (key == 38 && direction != 'down') direction = 'up';
  if (key == 39 && direction != 'left') direction = 'right';
  if (key == 40 && direction != 'up') direction = 'down';
}

timer = setInterval(draw, 200);
}



















function oneSpeed3() {
var canvas = document.getElementById('canvas');
var conTxt = canvas.getContext('2d');
window.addEventListener( "keydown", doKeyDown);
var timer;
var score = 0;
var box = 30;
var snake = [{}];
//var time = 200;
snake[0] = {
  x : 10 * box,
  y : 10 * box
};
snake[1] = {
  x : 10 * box,
  y : 10 * box
};
snake[2] = {
  x : 10 * box,
  y : 10 * box
};
var fruit = [{
  x : Math.floor(Math.random()*20) * box,
  y : Math.floor(Math.random()*20) * box,
}];
function reload() {
  location.reload();
}
function draw() {
    conTxt.clearRect(0,0,600,600);

    for (var i = 0; i < snake.length; i++) {
      conTxt.strokeStyle = 'black';
      conTxt.strokeRect(snake[i].x , snake[i].y , box, box);
}
      conTxt.fillRect(fruit[0].x , fruit[0].y, box, box);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;


        if (direction == 'left') snakeX = snakeX - box;
        if (direction == 'up')   snakeY = snakeY - box;
        if (direction == 'right') snakeX = snakeX + box;
        if (direction == 'down') snakeY = snakeY + box;


    if (snakeX == fruit[0].x && snakeY == fruit[0].y) {
      /*  time = time - 10;
        clearInterval(timer);
        timer = setInterval(draw, time);*/
        score++;
        fruit = [{
          x : Math.floor(Math.random()*20) * box,
          y : Math.floor(Math.random()*20) * box,
        }];
      } else {
        snake.pop();
      }

    var newHead = {
      x : snakeX,
      y : snakeY
    };

    if (snakeX < box - box || snakeX > 19*box || snakeY < box - box || snakeY > 19*box) {
      //alert();
      clearInterval(timer);
      setTimeout(reload, 3000);
    }
    for (var j = 0; j < snake.length; j++) {
      if (newHead.x == snake[j].x && newHead.y == snake[j].y && snake.length > 3)  {
        clearInterval(timer);
        setTimeout(reload, 3000);
      }
    }


      snake.unshift(newHead);

    document.getElementById('score').innerHTML = 'Your score is: ' + score;

}
var direction;
function doKeyDown(e) {
  var key = e.keyCode;
  if (key == 37 && direction != 'right') direction = 'left';
  if (key == 38 && direction != 'down') direction = 'up';
  if (key == 39 && direction != 'left') direction = 'right';
  if (key == 40 && direction != 'up') direction = 'down';
}

timer = setInterval(draw, 100);
}


























function oneSpeed4() {
var canvas = document.getElementById('canvas');
var conTxt = canvas.getContext('2d');
window.addEventListener( "keydown", doKeyDown);
var timer;
var score = 0;
var box = 30;
var snake = [{}];
//var time = 200;
snake[0] = {
  x : 10 * box,
  y : 10 * box
};
snake[1] = {
  x : 10 * box,
  y : 10 * box
};
snake[2] = {
  x : 10 * box,
  y : 10 * box
};
var fruit = [{
  x : Math.floor(Math.random()*20) * box,
  y : Math.floor(Math.random()*20) * box,
}];
function reload() {
  location.reload();
}
function draw() {
    conTxt.clearRect(0,0,600,600);

    for (var i = 0; i < snake.length; i++) {
      conTxt.strokeStyle = 'black';
      conTxt.strokeRect(snake[i].x , snake[i].y , box, box);
}
      conTxt.fillRect(fruit[0].x , fruit[0].y, box, box);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;


        if (direction == 'left') snakeX = snakeX - box;
        if (direction == 'up')   snakeY = snakeY - box;
        if (direction == 'right') snakeX = snakeX + box;
        if (direction == 'down') snakeY = snakeY + box;


    if (snakeX == fruit[0].x && snakeY == fruit[0].y) {
      /*  time = time - 10;
        clearInterval(timer);
        timer = setInterval(draw, time);*/
        score++;
        fruit = [{
          x : Math.floor(Math.random()*20) * box,
          y : Math.floor(Math.random()*20) * box,
        }];
      } else {
        snake.pop();
      }

    var newHead = {
      x : snakeX,
      y : snakeY
    };

    if (snakeX < box - box || snakeX > 19*box || snakeY < box - box || snakeY > 19*box) {
      //alert();
      clearInterval(timer);
      setTimeout(reload, 3000);
    }
    for (var j = 0; j < snake.length; j++) {
      if (newHead.x == snake[j].x && newHead.y == snake[j].y && snake.length > 3)  {
        clearInterval(timer);
        setTimeout(reload, 3000);
      }
    }


      snake.unshift(newHead);

    document.getElementById('score').innerHTML = 'Your score is: ' + score;

}
var direction;
function doKeyDown(e) {
  var key = e.keyCode;
  if (key == 37 && direction != 'right') direction = 'left';
  if (key == 38 && direction != 'down') direction = 'up';
  if (key == 39 && direction != 'left') direction = 'right';
  if (key == 40 && direction != 'up') direction = 'down';
}

timer = setInterval(draw, 60);
}
