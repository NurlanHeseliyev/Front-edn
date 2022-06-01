var btn=document.querySelectorAll(".btn");
var message=document.getElementById("message");

let count=0;

btn.forEach((item )=>{
    item.addEventListener("click",function(e){
        e.preventDefault();
        let imgBox=item.parentElement.nextElementSibling;
        let img=imgBox.firstElementChild;
        let textBox=imgBox.nextElementSibling;
        img.style.transition="all 1s";
        img.style.filter="blur(0)";
        textBox.style.transition="all 1s "
        textBox.style.display="block";
        console.log(img)
        count ++;
        // console.log(count)
        if(count==1){
            btn.forEach((item2)=>{
                item2.style.display="none";
            })
            
        }
    })

})

