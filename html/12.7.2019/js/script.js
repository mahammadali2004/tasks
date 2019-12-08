let btnAdd=document.getElementById("btn_add");
let allPost=document.querySelector(".allPost");

btnAdd.onclick=function(){
    let http=new XMLHttpRequest();
    http.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            let response=JSON.parse(this.responseText);
            for(let time of response){
                let p=document.createElement("p");
                p.className="card-text";
                p.innerText=time.body;
                
                let h5=document.createElement("h5");
                h5.className="card-title";
                h5.innerText=time.title;

                let cardBody=document.createElement("div");
                cardBody.className="card-body";

                let card=document.createElement("div");
                card.className="card";

                let col=document.createElement("div");
                col.className="col-3 mt-3";

                cardBody.append(h5,p);
                card.append(cardBody);
                col.append(card);
                allPost.append(col);
            }
            
        }
    }
    http.open("GET","https://jsonplaceholder.typicode.com/posts");
    http.send();
}