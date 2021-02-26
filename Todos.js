var lis = document.querySelector("li");

for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
      this.classList.add("selected");
  });
  lis[i].addEventListener("mouseout",function(){
      this.classlist.remove("selected");
   });
}
lis[i].addEventListener("mouseover", function(){
    this.classList.add("selected");
});
lis[i].addEventListener("click", function(){
    this.classList.toggle("done"); 
});
