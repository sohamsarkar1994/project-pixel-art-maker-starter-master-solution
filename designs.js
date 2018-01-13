// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(n,m){
let value;
for(let rows=0;rows<n;rows++)
   {
     if(rows==0)
     {
      value='<tr>';
     }
     else {
       value=value+'<tr>';
     }
       for(let columns=0;columns<m;columns++)
       {
          value=value+'<td>';
       }
   }
 $('#pixel_canvas').append(value);
}

function colourtable(color)
{
  $('table').click(function(event){
    $(event.target).css('background-color',color);
  });
}

function refreshGrid(){
  $('#sizePicker').submit(function(event){
        window.location.reload();
   });
}
$(document).ready(function(){
 $('#sizePicker').submit(function(event){
   const height= $('#input_height').val();
   const width=  $('#input_width').val();
   const color= $('#colorPicker').val();


   colourtable(color);

   makeGrid(height,width);

   refreshGrid();

   event.preventDefault();
  });
});
