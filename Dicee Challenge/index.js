var random1=Math.floor(Math.random()*6)+1;

var random_image= "dice"+random1+".png";

var random_image_source="images/"+random_image;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", random_image_source);



var random2= Math.floor(Math.random()*6)+1;

var random_image2= "dice"+random2+".png";

var random_image_source2="images/"+random_image2;

document.querySelectorAll("img")[1].setAttribute("src", random_image_source2);


if(random1 > random2){
    document.querySelector("h1").innerHTML="🎉✨Player 1 won the Battle";
}
else if(random1 < random2){
    document.querySelector("h1").innerHTML="🎉✨Player 2 won the Battle";

}
else{
    document.querySelector("h1").innerHTML="Its Draw!";

}