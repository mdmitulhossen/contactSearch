
let filter = document.querySelector('input');
filter.addEventListener('keyup',()=>{
      
      let lowercase=document.querySelector('input').value.toLowerCase();
      
      let ul = document.querySelector('ul');
      let li=ul.querySelectorAll('li.list-group-item');

      for(var i =0;i<li.length;i++){
            let a=li[i].getElementsByTagName('a')[0];
            //console.log(a.innerText.toLowerCase());
            // console.log(li[i].innerHTML.toLowerCase().indexOf(uppercase));
             if(a.innerHTML.toLowerCase().indexOf(lowercase)>-1){
                  
                  li[i].style.display='';
               }
                
             else{
                  
                  li[i].style.display='none';
                }
      }
      

 })