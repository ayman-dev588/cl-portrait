
//Array of all the words used to build the portrait
var wordsArray = ['حطّم' ,'أواني' ,'الزّهرِ' ,'والمرايا', 'اغضب' ,'كما' ,'تشاءُ', 'واجرحْ' ,'أحاسيسي' ,'كما' ,'تشاءُ','فكلُّ' ,'ما' ,'تفعلهُ' ,'سواءُ','كلُّ' ,'ما' ,'تقولهُ' ,'سواءُ']; 

//Portrait image source
var portraitImg = "https://st4.depositphotos.com/2760050/40817/i/450/depositphotos_408176034-stock-photo-man-bearded-hipster-stylish-mustache.jpg";

var originalImg;


//Canvas setup with protrait image and font style
function setup() {    
    createCanvas(windowWidth, windowHeight);
    background(0);

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
    
    textSize(random(15));
    
    //for (let e = 1; e <= 1; e++) {
      //for (let i = 1; i <= 1; i++) {  
        fill(c);
        stroke(0);
        strokeWeight(1);
        textStyle(BOLD);
        text(random(wordsArray), xPosition, yPosition);
        print(canvasWidth);
    //}
  //}
    
  
    
}