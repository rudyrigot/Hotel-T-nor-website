function NewWindowTop(mypage, myname, width, height, scroll, centrerad, x, y, resize, serch_value) {

// mypage : url till html sidan som ska visas i java f�nstret
// myname : namnet p� f�nstret
// width : f�nstrets bred
// height : f�nstrets h�jd
// scroll : om det ska vara scroll i f�nstret (no - yes)
// centrerad : ska f�nstret vara centrerat p� sk�rmen (no - yes)
// x : om inte centrerat, hur l�ngt fr�n h�gra kanten p� sk�rmen
// y : om inte centrerat, hur l�ngt fr�n l�ngt ner fr�n toppen av sk�rmen
// resize : om det ska vara resizable i f�nstret (no - yes)
// serch_value n�r man vill skicka parametarr tille ett php eller annat cgi script
if (centrerad == 'no') {
  var wint = y;
  var winl = x;
} else {
  var winl = (screen.width - width) / 2;
  var wint = (screen.height - height) / 2;
}
winprops = 'height='+height+',width='+width+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable='+resize
//win = window.open(mypage+'?searchvalue='+serch_value, myname, winprops)
win = window.open(mypage, myname, winprops)
if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}	
