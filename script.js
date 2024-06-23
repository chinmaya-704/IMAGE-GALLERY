let downloadImage=(id)=>{
   let x=document.getElementById(`dwnld${id+1}`)
   x.setAttribute('download',x.getAttribute('href'))
   x.click()
}

let l=[]
for(let i=1;i<=40;i++){
   l.push(i)
}
console.log(l)      

l.forEach(x => {
   console.log(x)
   document.querySelector('.container').innerHTML+=`<div class="img">
<div class="images">
   <a id="dwnld${x}" href="images/${x}.jpg">
      <img src="images/${x}.jpg" alt="">
   </a>
</div>
<div class="download">
   <button onclick="downloadImage(${x-1})">
      <img class="icon" src="icons/download.png" alt="">
   </button>
</div>
</div>`
});