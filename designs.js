const height= $('#input_height');
const width=  $('#input_width');
const color= $('#colorPicker');
function makeGrid(){
  //grid generation based on user input
  let heightinput=height.val();
  let widthinput=width.val();
let value;
for(let rows=0;rows<heightinput;rows++)
   {
     if(rows==0)
     {
      value='<tr>';
     }
     else {
       value=value+'<tr>';
     }
       for(let columns=0;columns<widthinput;columns++)
       {
          value=value+'<td>';
       }
   }
 $('#pixel_canvas').append(value);
}

function colourtable()
   //for choosing various colours and paint the canvas
{
  $('table').click(function(){
      let colorinput = color.val();
      $(event.target).css('background-color', colorinput);
   });
}

function refreshgrid(){
     //for refreshing the grid
  $('#sizePicker').submit(function(event){
    $('#pixel_canvas').empty();
    makeGrid();
  });
}

$(document).ready(function(){
 $('#sizePicker').submit(function(event){

   colourtable();

   makeGrid();

   refreshgrid();

   event.preventDefault();
  });
});
