/**
 * Game source code taken from Mozilla:
 * https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
 */
(function boot(document) {
  function runGame(config) {
    const canvas = document.getElementById('game');
    canvas.style.backgroundColor = config.secondaryColor;
    const ctx = canvas.getContext('2d');
    const ballRadius = 10;
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    const paddleHeight = 10;
    const paddleWidth = 75;
    let paddleX = (canvas.width - paddleWidth) / 2;
    let rightPressed = false;
    let leftPressed = false;
    const brickRowCount = 5;
    const brickColumnCount = 3;
    const brickWidth = 75;
    const brickHeight = 20;
    const brickPadding = 10;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 30;
    let score = 0;
    let lives = 3;

    const bricks = [];
    for (c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    document.addEventListener('mousemove', mouseMoveHandler, false);

    function keyDownHandler(e) {
      if (e.keyCode == 39) {
        rightPressed = true;
      } else if (e.keyCode == 37) {
        leftPressed = true;
      }
    }
    function keyUpHandler(e) {
      if (e.keyCode == 39) {
        rightPressed = false;
      } else if (e.keyCode == 37) {
        leftPressed = false;
      }
    }
    function mouseMoveHandler(e) {
      const relativeX = e.clientX - canvas.offsetLeft;
      if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
      }
    }
    function collisionDetection() {
      for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
          const b = bricks[c][r];
          if (b.status == 1) {
            if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
              dy = -dy;
              b.status = 0;
              score++;
              if (score == brickRowCount * brickColumnCount) {
                alert('YOU WIN, CONGRATS!');
                document.location.reload();
              }
            }
          }
        }
      }
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = config.primaryColor;
      ctx.fill();
      ctx.closePath();
    }
    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
      ctx.fillStyle = config.primaryColor;
      ctx.fill();
      ctx.closePath();
    }
    function drawBricks() {
      for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status == 1) {
            const brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
            const brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = config.primaryColor;
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    }
    function drawScore() {
      ctx.font = 'bold 18px Helvetica';
      ctx.fillStyle = config.primaryColor;
      ctx.fillText(`Score: ${score}`, 8, 20);
    }
    function drawLives() {
      ctx.font = 'bold 18px Helvetica';
      ctx.fillStyle = config.primaryColor;
      ctx.fillText(`Lives: ${lives}`, canvas.width - 74, 20);
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();
      drawScore();
      drawLives();
      collisionDetection();

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy < ballRadius) {
        dy = -dy;
      } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
        } else {
          lives--;
          if (!lives) {
            alert('GAME OVER');
            document.location.reload();
          } else {
            x = canvas.width / 2;
            y = canvas.height - 30;
            dx = 3;
            dy = -3;
            paddleX = (canvas.width - paddleWidth) / 2;
          }
        }
      }

      if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
      }

      x += dx;
      y += dy;
      requestAnimationFrame(draw);
    }

    draw();
  }

  function loadConfig() {
    fetch('game.json')
      .then(response => response.json())
      .then(runGame);
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
  });
}(document));
