const menuBtn=document.querySelector('.menu');
const sidebar=document.querySelector('.sidebar');

menuBtn.addEventListener('click',()=>{
       sidebar.classList.add('showsidebar');
});

document.addEventListener('mouseup',()=>{
    if(sidebar.contains(e.target)){
        
    sidebar.classList.add('showsidebar');
    }
   
});