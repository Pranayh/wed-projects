// using for loop:

var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var button_select=this.innerHTML;

        soundcontrol(button_select);
            
           
           
        
    });
}





document.addEventListener("keypress",function(event){

soundcontrol(event.key);
});


function soundcontrol(key){

    switch (key) {
        case "w":
            var x = new Audio("sounds/crash.mp3");
            x.play();
            break;

        
        case "a":
            var x = new Audio("sounds/kick-bass.mp3");
            x.play();
            break;


        case "s":
            var x = new Audio("sounds/snare.mp3");
            x.play();
            break;

        case "d":
            var x = new Audio("sounds/tom-1.mp3");
            x.play();
            break;

        case "j":
            var x = new Audio("sounds/tom-2.mp3");
            x.play();
            break;

        case "k":
            var x = new Audio("sounds/tom-3.mp3");
            x.play();
            break;
        
        case "l":
            var x = new Audio("sounds/tom-4.mp3");
            x.play();
            break;

        default:console.log(button_select);

           
    }
   
       
}



// Another method :

// document.querySelector("button")[1].addEventListener("click",function(){

//     alert("I clicked");
//     });

// document.querySelector(".s").addEventListener("click",function(){

//     alert("I clicked");
//     });

// document.querySelector(".d").addEventListener("click",function(){

//         alert("I clicked");
        
//         });