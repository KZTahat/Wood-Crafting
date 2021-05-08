
// var username = prompt('please inter your name');

// if (username !== null) {
//   document.write('<h2>' + 'Welcom to my site Mr.' + username + '</h2>');
// }
// console.log(username);

// //////////////////////////////

// var choice = prompt('do prefer wood turning or simple crafting (turning,simple)?');

// function askuser1(c){
// while (c !== 'turning' && choice !== 'simple') {
//   choice = prompt('Do prefer wood turning or simple crafting (turning,simple)?');
// }

// if (c == 'turning') {
//   var image = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFu2MjsAleSubaBZKTOcc28wHMVBPoU39NkA&usqp=CAU" alt="suggested turning project"/>';

//   document.write(image);

// }else if (c == 'simple'){
//   var image = '<img src="Images/simplecraftproject.jpg" alt="suggested crafting project"/>';

//   document.write(image);
// }}
// askuser1(choice);

// //////////////////////////////////


// var hourNow = prompt('What time is it?');
// var greeting;
// if (hourNow > 18) {
//   greeting = 'Good evening';
// }
// else if (hourNow > 12) {
//   greeting = 'Good afternoon';
// }
// else if (hourNow > 0) {
//   greeting = 'Good morning';
// }
// else {
//   greeting = 'Welcome';
// }
// document.write('<h3>' + greeting + '</h3>');

// //////////////////////////////////////////////

// var stars = Number(prompt('how many stars do you give this website(1-5)?'));
// while (!(1 <= stars && stars <=5)) {
//   stars = Number(prompt('how many stars do you give this website(1-5)?')); 
//   }
//   for (var i = 1; i <= stars; i++) {
//     var image = '<img src="Images/star.jpg" alt="star"/>';
//     document.write(image);
//   }

// //////////////////////////////////////////////

// var r = Number(prompt('please inter the radius of the piece!'));
// var h = Number(prompt('please inter the hight of the piece!'));

// function lateralsurfacearea(radius,hight){
//   return (2*3.14*r)*h;
// }

// function totalsurfacearea(radius){
//  console.log((2*3.14*r*r)+lateralsurfacearea(r,h));
// }

// totalsurfacearea(r);

// ///////////////////////////////////