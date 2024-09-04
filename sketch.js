
//Array of all the words used to build the portrait
var wordsArray = ['حطّم' ,'أواني' ,'الزّهرِ' ,'والمرايا', 'اغضب' ,'كما' ,'تشاءُ', 'واجرحْ' ,'أحاسيسي' ,'كما' ,'تشاءُ','فكلُّ' ,'ما' ,'تفعلهُ' ,'سواءُ','كلُّ' ,'ما' ,'تقولهُ' ,'سواءُ']; 

//Portrait image source
var portraitImg = "img/ayman.jpg";

var originalImg;


//Canvas setup with protrait image and font style
function setup() {    
    createCanvas(windowWidth, windowHeight);
    background(255);

    loadedImg = loadImage(portraitImg);
    loadedImg.loadPixels();
    textFont('Courier New');
}


  function draw() {    
    //Loaded image pixels and colors
    var canvasWidth = width;
    var canvasHeight = height;
    var xPosition = random(canvasWidth);
    var yPosition = random(canvasHeight);
    var pixelColor = loadedImg.get(xPosition, yPosition);
    var c = color(pixelColor);
    
    textSize(random(20));
    
    //for (let e = 1; e <= 1; e++) {
      //for (let i = 1; i <= 1; i++) {  
        fill(c);
        stroke(255);
        strokeWeight(1);
        textStyle(BOLD);
        text(random(wordsArray), xPosition, yPosition);
        print(canvasWidth);
    //}
  //}
    
  
    
}