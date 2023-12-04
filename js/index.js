


let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

let arrowKeyPressCount = 0;


function handleArrowKeyPress(event) {
  if (event.key === 'ArrowUp') {
    arrowKeyPressCount++;
    
    if (arrowKeyPressCount > 2) {
      event.preventDefault();
      return;
    }
    
    // Perform the desired action for the arrow key press
    // ...
  }
}

// Add a keydown event listener to the document
document.addEventListener('keydown', handleArrowKeyPress);
const gravity = 0.5;
const standLeft = new Image();
standLeft.src = './images/spriteStandLeft.png'
const standRight = new Image();
standRight.src = './images/spriteStandRight.png'
const sprintRunRight = new Image();
sprintRunRight.src = './images/spriteRunRight.png'
const sprintRunLeft = new Image();
sprintRunLeft.src = './images/spriteRunLeft.png'
const sta = new Image();
sta.src = './images/sta.png'


class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 66;
    this.height = 158;
    this.image=standRight;
    this.frame=0
    this.sprites={
      stand:{
        right:standRight,
        left:standLeft,
        cropWidth:177,
        width:66
      },
      run:{
        right:sprintRunRight,
        left:sprintRunLeft,
        cropWidth:341,
        width:127.875
      },
    }
    this.currentSprite=this.sprites.stand.right
    this.currentCropWidth=177
  }
  draw() {
    context.drawImage(this.currentSprite,
      this.frame*this.currentCropWidth,0,this.currentCropWidth,400,
      this.position.x,this.position.y,this.width,this.height)
  }
  update() {
    this.frame++
    if(this.frame>59 && this.currentSprite===this.sprites.stand.right || this.currentSprite===this.sprites.stand.left) this.frame=0
    else if(this.frame>29 && (this.currentSprite===this.sprites.run.right ||this.currentSprite===this.sprites.run.left)) this.frame=0
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    this.draw();
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
  
  }
}
const image = new Image();
image.src = './images/platform.png'
class Platform {
  constructor({ x, y,image }) {
    (this.position = {
      x,
      y,
    }),
    (this.image=image);
      (this.width = image.width);
    this.height = image.height;
  }
  draw() {
    context.drawImage(this.image,this.position.x,this.position.y)
    
  }
  handleClick(clickX, clickY) {
    if (
      clickX >= this.position.x &&
      clickX <= this.position.x + this.width &&
      clickY >= this.position.y &&
      clickY <= this.position.y + this.height
    ) {
      if (
        this.image === r1 )
        window.location.href = 'https://github.com';
      else if(
        this.image === r2)
        window.location.href = 'https://github.com';
      else if(  this.image === r3
      ) 
      window.location.href = 'https://github.com';
      else if(this.image==log4){
        window.location.href = 'contact.html';
      }
    }
  }
}

const bg = new Image();
bg.src = './images/background.png'
const hills = new Image();
hills.src = './images/hills.png'
const smallTallPlat = new Image();
smallTallPlat.src = './images/platformSmallTall.png'
const smallTallPlat1 = new Image();
smallTallPlat1.src = './images/platformSmallTall1.png'
const log = new Image();
log.src = './images/log.png'
const earth = new Image();
earth.src = './images/earth.png'
const orange_p = new Image();
orange_p.src = './images/orange.png'
const rocket = new Image();
rocket.src = './images/rocket.png'
const message = new Image();
message.src = './images/messgae1.png'
const star = new Image();
star.src = './images/starr.png'
const starr = new Image();
starr.src = './images/star.png'
const C = new Image();
C.src = './images/C.png'
const CS = new Image();
CS.src = './images/CS.png'
const JAVA = new Image();
JAVA.src = './images/JAVA.png'
const PY = new Image();
PY.src = './images/PY.png'
const TS = new Image();
TS.src = './images/TS.png'
const PHP = new Image();
PHP.src = './images/PHP.png'
const exp = new Image();
exp.src = './images/exp.png'
const dur = new Image();
dur.src = './images/dur.png'
const pro = new Image();
pro.src = './images/pro.png'
const r1 = new Image();
r1.src = './images/r1.png'
const r2 = new Image();
r2.src = './images/r2.png'
const r3 = new Image();
r3.src = './images/r3.png'
const s = new Image();
s.src = './images/s.png'
const log4 = new Image();
log4.src = './images/log4.png'
const flag = new Image();
flag.src = './images/fla.png'
const bird = new Image();
bird.src = './images/spritesheet.png'
const aler=new Image()
aler.src='./images/alert.png'
const node=new Image()
node.src='./images/node.png'
const lara=new Image()
lara.src='./images/lara.png'
const h=new Image()
h.src='./images/player.png'
const data=new Image()
data.src='./images/data.png'
const denim=new Image()
denim.src='./images/denim.png'
const log5=new Image()
log5.src='./images/log5.png'
const box=new Image()
box.src='./images/box.png'
const enemy=new Image()
enemy.src='./images/lucky.png'
const final=new Image()
final.src='./images/final.png'
const code=new Image()
code.src='./images/code.png'
const tn = new Image();
tn.src = './images/tunisie.png'
class Horse {
  constructor(x,y) {
    this.width = 120;
    this.height = 198;
    this.x = x;
    this.y = y;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 37;
    this.speedY = 0;
    this.maxSpeed = 3;
    this.projectiles = [];// Assuming 'h' is defined somewhere else
  }

  update() {
    if (this.frameX < this.maxFrame) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
    this.draw();
  }

  draw() {
    context.drawImage(
      h,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Fish {
  constructor(x,y) {
    this.width = 228;
    this.height = 171;
    this.x = x;
    this.y = y;
    this.frameX =0;
    this.frameY = Math.floor(Math.random()*2);
    this.maxFrame = 37;
    this.speedY = 0;
    this.maxSpeed = 3;
    this.projectiles = [];// Assuming 'h' is defined somewhere else
  }

  update() {
    if (this.frameX < this.maxFrame) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
    this.draw();
  }

  draw() {
    context.drawImage(
      enemy,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}





class Star {
  constructor({ x, y }) {
    this.width = 54.9;
    this.height = 88;
    (this.position = {
      x,
      y,
    }),
    this.frameX =0;
    this.frameY = 0;
    this.maxFrame = 60;
    this.speedY = 0;
    this.maxSpeed = 3;
    this.projectiles = [];// Assuming 'h' is defined somewhere else
  }

  update() {
    if (this.frameX < this.maxFrame) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
    console.log("worked")
    this.draw();
  }

  draw() {
    context.drawImage(
      sta,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}


  class GenericObject {
    constructor({ x, y,bg }) {
      (this.position = {
        x,
        y,
      }),
      (this.image=bg);
        (this.width = this.image.width);
      this.height = this.image.height;
    }
    draw() {
      context.drawImage(this.image,this.position.x,this.position.y)
    }
  }
  class Planet {
    constructor({ x, y,earth }) {
      (this.position = {
        x,
        y,
      }),
      (this.image=earth);
        (this.width = this.image.width);
      this.height = this.image.height;
    }
    draw() {
      context.drawImage(this.image,this.position.x,this.position.y)
    }
  }
  class Box {
    constructor(x,y,image) {
      this.x = x;
      this.y = y;
      this.image=image
    }
  
    draw() {
      context.drawImage(
        this.image,
        this.x,
        this.y,
      );
    }
  }
  const buttonWidth = 40;
const buttonHeight = 40;
const buttonX = 20;
const buttonY = 20;

// Draw the button




// Add event listener for button click
// Create a variable to track the music state
let isPlaying = false;

canvas.addEventListener('click', function(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  if (clickX >= buttonX && clickX <= buttonX + buttonWidth && clickY >= buttonY && clickY <= buttonY + buttonHeight) {
    // Button is clicked
    if (isPlaying) {
      // Stop the music
      audio.pause();
      isPlaying = false;
      console.log('Music stopped');
    } else {
      // Start playing the music
      audio.play();
      isPlaying = true;
      console.log('Music playing');
    }
  }
});


// Call the drawButton function to initially draw the button

  let hor=new Horse(1020,280)
  let horse=new Horse(6900,280)
  let fish=new Fish(1020,280)
   let stars=[
    new Star({x:3020,y:4}),
    new Star({x:3020+80,y:4}),
   new Star({x:3020+160,y:4}),
     new Star({x:3020+240,y:4}),
     new Star({x:3020+320,y:4}),
    new Star({x:3020,y:67}),
   new Star({x:3020+80,y:67}),
     new Star({x:3020,y:125}),
     new Star({x:3020+80,y:125}),
    new Star({x:3020+160,y:125}),
    new Star({x:3480,y:4}),
    new Star({x:3480+80,y:4}),
    new Star({x:3480+160,y:4}),
    new Star({x:3480+240,y:4}),
    new Star({x:3480+320,y:4}),
    new Star({x:3480,y:67}),
    new Star({x:3480+80,y:67}),
    new Star({x:3480,y:125}),
     new Star({x:3480+80,y:125}),
    new Star({x:3480+160,y:125}),
    new Star({x:3480+240,y:125}),

   ]
   
  let scrollOffset=0
  let player = new Player();
  let platforms = [
    new Platform({ x: 0, y: 470 ,image:image}),
    new Platform({ x: image.width-2, y: 470 ,image:image}),
    new Platform({ x: 2*image.width+118, y: 470 ,image:image}),
    new Platform({ x: 3*image.width+112, y: 470 ,image:image}),
    new Platform({ x: 4*image.width+109, y: 470 ,image:image}),
    new Platform({ x: 5*image.width+107, y: 470 ,image:image}),
    new Platform({ x: 6*image.width+104, y: 470 ,image:image}),
    new Platform({ x: 7*image.width+102, y: 470 ,image:image}),
    new Platform({ x: 8*image.width+100, y: 470 ,image:image}),
    new Platform({ x: 9*image.width+98, y: 470 ,image:image}),
    new Platform({ x: 10*image.width+96, y: 470 ,image:image}),
    new Platform({ x: image.width+10, y: 380 ,image:log}),
    new Platform({ x: 1.4*image.width, y: 84 ,image:tn}),
    new Platform({ x: 2.5*image.width+10, y: 380 ,image:exp}),
    new Platform({ x: 4*image.width+10, y: 380 ,image:log5}),
    new Platform({ x: 100, y: 250 ,image:rocket}),
    new Platform({ x:  4.2*image.width+190, y: 14 ,image:star}),
    new Platform({ x: 4.2*image.width+190, y: 74 ,image:C}),
    new Platform({ x: 4.2*image.width+190, y: 134 ,image:CS}),
     new Platform({ x: 5*image.width+190, y: 14 ,image:JAVA}),
     new Platform({ x: 5*image.width+190, y: 74 ,image:PY}),
     new Platform({ x: 5*image.width+190, y: 134 ,image:PHP}),
    new GenericObject({ x: 6.3*image.width, y: 380 ,bg:pro}),
    new GenericObject({ x: 6.7*image.width, y: 380 ,bg:aler}),
    new Platform({ x: 7*image.width, y: 245 ,image:r1}),
    new GenericObject({ x: 7.7*image.width, y: 380 ,bg:node}),
    new Platform({ x: 8*image.width, y: 255 ,image:r2}),
    new GenericObject({ x: 8.7*image.width, y: 380 ,bg:lara}),
    new Platform({ x: 9*image.width, y: 270,image:r3}),
    new Platform({ x: 9*image.width, y: 270,image:r3}),
    new Platform({ x: 10*image.width, y: 380 ,image:log4}),
    new Platform({ x: 7*image.width, y: 50 ,image:s}),
    new Platform({ x: 7*image.width, y: 100 ,image:code}),
    new GenericObject({ x: 3.3*image.width, y: 250 ,bg:smallTallPlat1}),
    new GenericObject({ x: 3.5*image.width, y: 160 ,bg:data}),
    new GenericObject({ x: 2.9*image.width, y: 207 ,bg:denim}),
    new GenericObject({ x: 2.7*image.width, y: 300 ,bg:smallTallPlat1}),

    new Platform({ x: image.width+120, y: 180 ,image:smallTallPlat1})
  ];

  let genericObjects=[
    new GenericObject({x:0,y:-1,bg:bg}),
    new GenericObject({x:11640,y:-1,bg:bg}),
    new GenericObject({x:2*11640,y:-1,bg:bg}),
      new GenericObject({x:-1,y:-1,bg:hills}),
      new GenericObject({x:3*image.width,y:10,bg:earth}),
      new GenericObject({x:8*image.width,y:10,bg:orange_p}),
      new GenericObject({x:2*bg.width-1,y:-1,bg:hills})
    ]
  
      let keys = {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
  };
function init()
{
   hor=new Horse(1020,280)
   horse=new Horse(8700,280)
   fish=new Fish(1470,280)
   b=new Box(870,265,box)
   scrollOffset=0
   player = new Player();
   platforms = [
    new Platform({ x: 0, y: 470 ,image:image}),
    new Platform({ x: image.width-2, y: 470 ,image:image}),
    new Platform({ x: 2*image.width+118, y: 470 ,image:image}),
    new Platform({ x: 3*image.width+112, y: 470 ,image:image}),
    new Platform({ x: 4*image.width+109, y: 470 ,image:image}),
    new Platform({ x: 5*image.width+107, y: 470 ,image:image}),
    new Platform({ x: 6*image.width+104, y: 470 ,image:image}),
    new Platform({ x: 7*image.width+102, y: 470 ,image:image}),
    new Platform({ x: 8*image.width+100, y: 470 ,image:image}),
    new Platform({ x: 9*image.width+98, y: 470 ,image:image}),
    new Platform({ x: 10*image.width+96, y: 470 ,image:image}),
    new Platform({ x: image.width+10, y: 380 ,image:log}),
    new Platform({ x: 2.5*image.width+10, y: 380 ,image:exp}),
    new Platform({ x: 4*image.width+10, y: 380 ,image:log5}),
    new Platform({ x: 100, y: 250 ,image:rocket}),
    new Platform({ x: 4.2*image.width+190, y: 14 ,image:star}),
    new Platform({ x: 4.2*image.width+190, y: 74 ,image:C}),,
    new Platform({ x: 4.2*image.width+190, y: 134 ,image:CS}),
    new Platform({ x: 5*image.width+190, y: 14 ,image:JAVA}),
    new Platform({ x: 5*image.width+190, y: 74 ,image:PY}),
    new Platform({ x: 5*image.width+190, y: 134 ,image:PHP}),
    new GenericObject({ x: 6.3*image.width, y: 380 ,bg:pro}),
    new GenericObject({ x: 6.7*image.width, y: 380 ,bg:aler}),
    new Platform({ x: 7*image.width, y: 245 ,image:r1}),
    new GenericObject({ x: 7.7*image.width, y: 380 ,bg:node}),
    new Platform({ x: 8*image.width, y: 255 ,image:r2}),
    new GenericObject({ x: 8.7*image.width, y: 380 ,bg:lara}),
    new Platform({ x: 9*image.width, y: 270,image:r3}),
    new Platform({ x: 9*image.width, y: 270,image:r3}),
    new Platform({ x: 10*image.width, y: 380 ,image:log4}),
   // new Platform({ x: 10.2*image.width, y: 200 ,image:flag}),
    new Platform({ x: 7*image.width, y: 50 ,image:s}),
    new Platform({ x: 7*image.width, y: 100 ,image:code}),
    new GenericObject({ x: 3.3*image.width, y: 250 ,bg:smallTallPlat1}),
    new GenericObject({ x: 3.5*image.width, y: 160 ,bg:data}),
    new GenericObject({ x: 2.9*image.width, y: 207 ,bg:denim}),
    new GenericObject({ x: 2.7*image.width, y: 300 ,bg:smallTallPlat1}),

    new Platform({ x: image.width+120, y: 180 ,image:smallTallPlat1})
  ];

   genericObjects=[
    new GenericObject({x:0,y:-1,bg:bg}),
    new GenericObject({x:500,y:50,bg:sta}),
    new GenericObject({x:11640,y:-1,bg:bg}),
    new GenericObject({x:2*11640,y:-1,bg:bg}),
      new GenericObject({x:-1,y:-1,bg:hills}),
      new GenericObject({x:3*image.width,y:10,bg:earth}),
      new GenericObject({x:8*image.width,y:10,bg:orange_p}),
      new GenericObject({x:2*bg.width-1,y:-1,bg:hills})
    ]
  

 keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};
}
let x = image.width+60;
const y = 410 
function drawSquare() {

  
}
platforms.forEach((platform)=>{
  canvas.addEventListener('click', function(event) {
    var rect = canvas.getBoundingClientRect();
    var clickX = event.clientX - rect.left;
    var clickY = event.clientY - rect.top;
    
    platform.handleClick(clickX, clickY);
  });
})
let counter=0;
function animate() {
  
  requestAnimationFrame(animate);
  context.fillStyle='white'
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  
  genericObjects.forEach((genericObject)=>{
    genericObject.draw()
  })

  horse.update()  
  platforms.forEach((platform) => {
    platform.draw();
    
    if (keys.right.pressed && player.position.x < 400 ) {
      
        player.velocity.x = 5;
      
    }
    else if(scrollOffset>=200000 && keys.left.pressed){
        
      player.velocity.x = -5;
      platform.position.x -= 0;
      console.log("te5dem");
      scrollOffset -= 5;
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= 0;
      });
    }
    else if ((keys.left.pressed && player.position.x > 100) || 
      (keys.left.pressed && scrollOffset===0  && player.position.x > 0))
     {
      
      console.log('te5dem')
      player.velocity.x = -5;
     }
    else {
      player.velocity.x = 0;
      if (keys.right.pressed ) {
        if(scrollOffset<200000)
       {
        fish.x-=0.15
        horse.x-=0.15
        stars.forEach((star)=>{
          star.position.x-=0.15
        })

        platform.position.x -= 5;
        scrollOffset+=5
      
        genericObjects.forEach((genericObject)=>{
            genericObject.position.x-=0.5
        })
        
       }
       else if(200000<=scrollOffset && scrollOffset<220000)
       {
        player.velocity.x = 5;
        
        platform.position.x -= 0;
        scrollOffset+=5
        genericObjects.forEach((genericObject)=>{
            genericObject.position.x-=0
        })
       }
       else
       {
        player.velocity.x = 0;
        scrollOffset=220000;
       }
    }
    
      else if (keys.left.pressed && scrollOffset>0) {
        if (scrollOffset < 200000) {
          
          fish.x += 0.15;
          horse.x += 0.15;
          platform.position.x += 5;
          scrollOffset -= 5;
          genericObjects.forEach((genericObject) => {
            genericObject.position.x += 0.5;
          });
          stars.forEach((star)=>{
            star.position.x+=0.15
          })
          console.log("aaaaaaaaaaa")
        } 
      }
    
      
      
    }

 
   
  });
  
  fish.update()
  stars.forEach((star)=>{
    star.update()
  })
  player.update();
  if(player.position.y > canvas.height){
      init()
    }
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    )
      player.velocity.y = 0;
  });
  
  console.log(scrollOffset)
  const audio1 = new Audio('./mp3/intro.mp3');
const audio2 = new Audio('./mp3/The Game Show Theme Music.mp3');
const audio3=new Audio('./mp3/win.mp3')
audio2.volume = 0.2; // Set volume of audio2 to 50% (0.5)
audio3.volume = 0.99;
function playAudio1() {
  audio2.pause(); // Pause the second audio
  audio2.currentTime = 0; // Reset the playback position to the beginning
  audio1.play().catch(error => {
    console.log('Failed to play audio1:', error.message);
  });
}

function playAudio2() {
  audio1.pause(); // Pause the first audio
  audio1.currentTime = 0; // Reset the playback position to the beginning
  //audio2.loop = true;
  audio2.play().catch(error => {
    console.log('Failed to play audio2:', error.message);
  });
}
function playAudio3() {
  audio2.pause(); // Pause the first audio
  audio2.currentTime = 0; // Reset the playback position to the beginning
  audio3.play().catch(error => {
    console.log('Failed to play audio2:', error.message);
  });
}

audio1.addEventListener('ended', function() {
  playAudio2()
  counter++
});
if (scrollOffset>8000 &&scrollOffset<9000 && counter==0) {
  setTimeout(playAudio1(),100)
  console.log("counter"+counter)
  counter++
} 
if(scrollOffset>202000 && counter==2)
{
  audio2.pause()
  playAudio3()
setTimeout(counter++,20000)}
}
// Create two audio elements



let arrowUpKeyPressCount = 0;
let arrowUpKeyPressBlocked = false;

addEventListener("keydown", ({ keyCode }) => {
  console.log(keyCode);
  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 40:
      break;
    case 39:
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 38:
      if (arrowUpKeyPressBlocked) {
        return;
      }
      arrowUpKeyPressCount++;
      if (arrowUpKeyPressCount === 2) {
        arrowUpKeyPressBlocked = true;
        setTimeout(() => {
          arrowUpKeyPressBlocked = false;
          arrowUpKeyPressCount = 0;
        }, 1000); // Adjust the delay duration in milliseconds (2000ms = 2 seconds)
      }
      console.log("up");
      player.velocity.y -= 10;
      break;
  }
});

addEventListener("keyup", ({ keyCode }) => {
  console.log(keyCode);
  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      player.currentSprite=player.sprites.stand.left
      player.currentCropWidth=player.sprites.stand.cropWidth
      player.width=player.sprites.stand.width
      break;
    case 40:
      break;
    case 39:
      keys.right.pressed = false;
      player.currentSprite=player.sprites.stand.right
      player.currentCropWidth=player.sprites.stand.cropWidth
      player.width=player.sprites.stand.width
      break;
    case 38:
      console.log("up");
      //player.velocity.y-=20
      break;
  }
});


animate();
