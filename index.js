function todo(){
    let val=document.getElementById("name")
    let inputValue = val.value;
    let li=document.createElement("li");
    let ul=document.getElementById("list");
    li.textContent=inputValue
    ul.appendChild(li);
    val.value="";
}