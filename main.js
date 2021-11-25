
Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality: 90,


});
camera = document.getElementById("camera");
Webcam.attach( '#camera' );
function take_screenie(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="caputred_image" src="'+data_url+'">'
    })
}
console.log('ml5.version', ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4RP5evSjP/",modelLoaded);
function modelLoaded(){
    consle.log("Model Loaded");

}
function check (){
    img=document.getElementById("caputred_image");
    classifier.classify(img, gotResult);

}
function gotresult(error, results){
    if (error){
        consle.error(error);

    }else{
        consle.log(results)
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].cofidence.toFixed(4);
    }
}