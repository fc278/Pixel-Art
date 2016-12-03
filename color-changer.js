document.getElementById("input").onchange = function(input) {
  if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          
document.getElementById('image').style.display = 'inline';
          
var c = document.querySelector('canvas');
          
if (c === null) {
  document.querySelector('canvas');
} 
          else {
            c.parentNode.removeChild(c);
          }
            
var img = $('#image')[0];

var img1 = document.querySelector('#hero image');
          document.getElementById("image").src = e.target.result;
          
         console.log(BreathingHalftone);
new BreathingHalftone(img);
          
        };
        reader.readAsDataURL(input.target.files[0]);
    }
};
