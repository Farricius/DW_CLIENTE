window.addEventListener("load",cuerpo)

function cuerpo(){

    var json =[{src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]}]
        

    var div = document.createElement("div");
    document.body.appendChild(div);

    div.setAttribute("id","todos-los-viajes");
    
    var h1= document.createElement("h1");
    var txt1=document.createTextNode("Subtituloo");
    h1.appendChild(txt1);
    div.appendChild(h1);

    var ul = document.createElement("ul");
    div.appendChild(ul);

    for(var i=0; i<json.length; i++){
        var li=document.createElement("li");
        var img=document.createElement("img");
        img.setAttribute("src",json[i]["src"]);
        li.appendChild(img);

        
        var parr= document.createElement("p");
        var txt2= document.createTextNode(json[i]["desc"]);
        parr.appendChild(txt2);
        li.appendChild(parr);

        
        var ul1 = document.createElement("ul");
        ul1.setAttribute("class","specs");
        li.appendChild(ul1);
        for (let z = 0; z < json[i]["specs"].length; z++) {
            var specsLi = document.createElement("li");
            var txt3 = document.createTextNode(json[i]["specs"][z])
            specsLi.appendChild(txt3);
            ul1.appendChild(specsLi);
        }

        ul.appendChild(li);
    }

}