//store the products array in localstorage as "products"
let database=JSON.parse(localStorage.getItem("products")) || [];

function pumaDataObj(n,d,p,e){
    this.name=n;
    this.description=d;
    this.pric=p;
    this.url=e;
}

function myFunction(event){
    event.preventDefault();
    let form=document.getElementById("products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let newData= new pumaDataObj(type,desc,price,image);
    database.push(newData);

    localStorage.setItem("products",JSON.stringify(database));
     console.log(database);
     console.log("products");
}