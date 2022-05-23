var database=JSON.parse(localStorage.getItem("products"));

database.map(function(el,index){
    var typ=document.createElement("h1");
    typ.innerText=el.name;

    var des=document.createElement("p");
    des.innerText=el.description;

    var pric=document.createElement("h2");
    pric.innerText=el.pric;

    var img=document.createElement("img");
    img.src=el.url;

    var remove=document.createElement("button");
    remove.innerText="Remove Product";
    remove.setAttribute("id","remove_product");
    remove.addEventListener("click",function(){
        removeitem(el,index);
    })
    
    var div=document.createElement("div");
    div.append(typ,des,pric,img,remove);
    document.querySelector("#all_products").append(div);
    console.log(div);

    function removeitem(index){
        database.splice(index,1);
        localStorage.setItem("products",JSON.stringify(database));
        window.location.reload();
    }

})