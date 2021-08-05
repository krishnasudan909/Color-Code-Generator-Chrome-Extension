var el = document.getElementById('btn');
if(el){
    el.addEventListener("click",function(){
        var color= document.getElementById("colorPicker").value;
        document.body.style.backgroundColor = color;
        document.getElementById("hexCodeBox").value = color;  
    });
}


