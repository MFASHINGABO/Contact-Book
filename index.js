 // get input element
    let filterInput = document.getElementById('filterInput');
    // Add event Listener
    filterInput.addEventListener('keyup', filterNames);

    function filterNames(){
        // Get Value of input
        let filterValue = document.getElementById('filterInput').value.toUpperCase();
         //Get names ul
         let ul= document.getElementById('names');
 
         // get lis from ul

         let li = ul.querySelectorAll('li.collection-item');

         for(let i=0;i<li.length;i++){
            let a = li[i].getElementsByTagName('a')[0];
            if(a.innerHTML.toUpperCase().indexOf(filterValue)>
            -1){
                li[i].style.display='';
            } else{
                 li[i].style.display='none';
            }
        }

         
    }