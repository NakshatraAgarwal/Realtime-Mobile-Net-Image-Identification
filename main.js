function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  ImageValue = ml5.imageClassifier('MobileNet', modelloaded);
}
function preload(){
}

function draw(){
 image(video, 0, 0, 300, 300);
 ImageValue.classify(video,gotresults);
}

function modelloaded(){
  console.log('modelloaded');
}

function gotresults(error, results){
if(error){
  console.error(error);
}
else{
  console.log(results);
  document.getElementById('object_name').innerHTML = results[0].label;
  document.getElementById('object_accuracy').innerHTML = results[0].confidence.toFixed(3);
}
}


