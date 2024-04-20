let qiymet1=document.querySelector(".box1");
let qiymet2=document.querySelector(".box2");
let qiymet3=document.querySelector(".box3");
let button=document.querySelector(".duyme1");
let tbody=document.querySelector(".test");
let duyme=document.querySelector(".duyme2");


button .addEventListener("click", function(){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    tr.appendChild(td1);
    td1.textContent=qiymet1.value;
    qiymet1.value ='';

    let td2=document.createElement("td");
    tr.appendChild(td2);
    td2.textContent=qiymet2.value;
    qiymet2.value='';

    let td3=document.createElement("td");
    tr.appendChild(td3);
    td3.textContent=qiymet3.value;
    qiymet3.value='';
    tbody.appendChild(tr);
})
duyme.addEventListener("click",function(){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    tr.remove(td1);
    td1.textContent=qiymet1.value;
    qiymet1.value ='';

    let td2=document.createElement("td");
    tr.remove(td2);
    td2.textContent=qiymet2.value;
    qiymet2.value='';

    let td3=document.createElement("td");
    tr.remove(td3);
    td3.textContent=qiymet3.value;
    qiymet3.value='';
    tbody.remove(tr);
})
