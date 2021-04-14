
var username = prompt('please inter your name');

if (username !== null)
{
  document.write('<h2>'+'Welcom to my site Mr.'+username+'</h2>');
}

var choice = prompt('do prefer wood turning or simple crafting (Turning,simple)');
  
if (choice == 'Turning'){
  var image = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFu2MjsAleSubaBZKTOcc28wHMVBPoU39NkA&usqp=CAU" alt="suggested turning project"/>';

  document.write(image);
}else if (choice == 'simple'){
  var image = '<img src="Images/simplecraftproject.jpg" alt="suggested crafting project"/>';

  document.write(image);
}

function myFunction() {
  confirm("Are you sure?");
}


var hourNow = prompt('What time is it?') ; 
var greeting; 
if (hourNow > 18) { 
greeting = 'Good evening';
}
else if (hourNow > 12) { 
greeting = 'Good afternoon'; 
}
else if (hourNow > 0) { 
greeting = 'Good morning'; 
}
else { 
greeting = 'Welcome'; 
}
document.write('<h3>'+greeting+'</h3>') ;