
var img = ['../images/mario3.png', '../images/mario1.png', '../images/mario2.png']
var i=0;


    setInterval(function animate(){
        document.getElementById("mario_img").src=img[i];
        i++;
    if(i==3){
        i=0;
    }
},100);



var pos=0;
var speed=800;
var e = document.getElementById("obstacle");
var m=window.getComputedStyle(e);
var n=style.marginLeft;
setInterval(function dragon(){
                if(pos==window.innerWidth){
                pos=0;
            }
            else{
               n-=pos + "px";
                pos++;
            }
        },800);


        
        var vely=0;
        var acc=2;
        var y=345;
        var element=document.getElementById("dragon");


        function jump(){
            if(element.top){
                
            }
        }