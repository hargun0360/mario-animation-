
var img = ['../images/mario3.png', '../images/mario1.png', '../images/mario2.png']
var i=0;


    setInterval(function animate(){
        document.getElementById("mario_img").src=img[i];
        i++;
    if(i==3){
        i=0;
    }
},100);



var pos= -150;
var speed=10;
var e = document.getElementById("obstacle");
 var m=window.getComputedStyle(e);   
setInterval(function dragon(){
        if(pos==window.innerWidth){
        pos=0;
        }
        else{
        e.style.marginLeft=((800) -pos )+ "px";
        console.log(e.style.marginLeft);
        pos++;
        if((e.style.marginLeft < 100+"px" )){
            alert("game over");
    
        }
    }
},speed--);

        
document.onkeydown=function(e){
    if(e.keycode==38){
        let mario=document.querySelector('#mario_img');
        mario.classList.add('.animatemario');
        setTimeout(() => {
            mario.classList.remove('.animatemario');
        }, 800);
    }
}
document.onkeydown = jump;
var mario=document.querySelector("#mario");
function jump(e){
    // var pleft=document.querySelector("#mario").offsetLeft;
    if(e.keyCode==32)
    {
        if(mario.classList=="animat")
        {
            return
        }
        mario.classList.add("animat");
        setTimeout(function(){
            mario.classList.remove("animat");
        },300)
    }
}