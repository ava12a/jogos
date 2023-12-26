var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["08378e54-cd54-42af-a219-22ebdfd6c072","271db62d-417e-4958-bd92-b4ae11cd9f2a","35ed8478-fbea-4aa1-9afb-9b8a4a330502","469e42b6-6e39-4b0f-9754-dd2acf9e73da","1c476786-8392-417e-8a50-99b2afa58382","5ec0dbf6-bfb5-44f2-a902-c3423100e7fe"],"propsByKey":{"08378e54-cd54-42af-a219-22ebdfd6c072":{"name":"Teca","sourceUrl":"assets/api/v1/animation-library/gamelab/Y8rLrPP4qJ_PtGUAXmnx3fkbeEisuyxJ/category_animals/butterfly.png","frameSize":{"x":393,"y":257},"frameCount":1,"looping":true,"frameDelay":2,"version":"Y8rLrPP4qJ_PtGUAXmnx3fkbeEisuyxJ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":257},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Y8rLrPP4qJ_PtGUAXmnx3fkbeEisuyxJ/category_animals/butterfly.png"},"271db62d-417e-4958-bd92-b4ae11cd9f2a":{"name":"gaivota","sourceUrl":null,"frameSize":{"x":400,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"6TQx1FgdJEH0E3NV0AGv9bIsr8_DfgpO","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":192},"rootRelativePath":"assets/271db62d-417e-4958-bd92-b4ae11cd9f2a.png"},"35ed8478-fbea-4aa1-9afb-9b8a4a330502":{"name":"arara","sourceUrl":"assets/api/v1/animation-library/gamelab/PYmxgeNSNCYRIAkJ2sJh7IFAgfIPLXpt/category_animals/birdside_15.png","frameSize":{"x":394,"y":200},"frameCount":1,"looping":true,"frameDelay":2,"version":"PYmxgeNSNCYRIAkJ2sJh7IFAgfIPLXpt","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":200},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PYmxgeNSNCYRIAkJ2sJh7IFAgfIPLXpt/category_animals/birdside_15.png"},"469e42b6-6e39-4b0f-9754-dd2acf9e73da":{"name":"corvo","sourceUrl":null,"frameSize":{"x":396,"y":220},"frameCount":1,"looping":true,"frameDelay":12,"version":"lcI5tTnkLCcmbqxJ2Qx7KXC5Um0zI7KT","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":220},"rootRelativePath":"assets/469e42b6-6e39-4b0f-9754-dd2acf9e73da.png"},"1c476786-8392-417e-8a50-99b2afa58382":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/6M6MI5k464mg5p8h89sU8tyvtAbANGea/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6M6MI5k464mg5p8h89sU8tyvtAbANGea","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6M6MI5k464mg5p8h89sU8tyvtAbANGea/category_backgrounds/meadow.png"},"5ec0dbf6-bfb5-44f2-a902-c3423100e7fe":{"name":"casulo","sourceUrl":null,"frameSize":{"x":398,"y":317},"frameCount":1,"looping":true,"frameDelay":12,"version":"Yhy9JFUEBfirgaApEgI0V_Lf7kTngPQw","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":317},"rootRelativePath":"assets/5ec0dbf6-bfb5-44f2-a902-c3423100e7fe.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// plano de fundo

var fundo=createSprite(200,200);
  fundo.setAnimation("fundo");

// personage

var Teca=createSprite(190,360,20,20);
  Teca.setAnimation("Teca");
  Teca.scale = 0.13;

// obstaculo

var corvo=createSprite(190,296,20,20);
  corvo.setAnimation("corvo");
  corvo.scale = 0.20;

var gaivota=createSprite(190,190,20,20);
  gaivota.setAnimation("gaivota");
  gaivota.scale = 0.23;

var arara=createSprite(190,90,20,20);
  arara.setAnimation("arara");
  arara.scale = 0.20;

// casulo

var casulo=createSprite(180,20,20,20);
  casulo.setAnimation("casulo");
  casulo.scale = 0.20;


// velocidade do obstaculo

corvo.setVelocity(15,0);
gaivota.setVelocity(-15,0);
arara.setVelocity(15,0);

var goal =0;
var death = 0;

function draw() {
  
  createEdgeSprites();
  
  corvo.bounceOff(edges);
  gaivota.bounceOff(edges);
  arara.bounceOff(edges);  
  
  Teca.bounceOff(edges);



// velocidade da teca  
   
   if(keyDown(UP_ARROW)){
  Teca.y=Teca.y-3;
}

if(keyDown(DOWN_ARROW)){
  Teca.y=Teca.y+3;
}

if(keyDown(LEFT_ARROW)){
  Teca.x=Teca.x-3;
}

if(keyDown(RIGHT_ARROW)){
  Teca.x=Teca.x+3;
}
  
 if (Teca.isTouching(corvo) || Teca.isTouching(gaivota) || Teca.isTouching(arara)) {
  playSound("assets/category_alerts/airy_bell_notification.mp3");
  Teca.x=190;
  Teca.y=360;
 death = death+1;
}

if(Teca.isTouching(casulo)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  Teca.x=200;
  Teca.y=345;
  goal=goal+1;
}
 
 textSize(20);
  fill("blue");
  text("Objetivos:"+goal,320,350);
  

textSize(20);
  fill("blue");
  text("mortes:"+death,20,350); 
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
