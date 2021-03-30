'use strict';

function getMaxandMIN(z,x,y,a,b){
  
    if (z > x && z>y&& z>a&&z>b){
      console.log(z +' Is the maximum');
    } else if (z < x && z<y&& z<a&&z<b){
      console.log(z +' Is the minmum');
    } if (x > z && x>y&& x>a&&x>b){
      console.log(x +' Is the maximum');
    } else if (x < z && x<y&& x<a&&x<b){
      console.log(x +' Is the minmum');
    }  if (b > x &&b>y&& b>a&&b>z){
      console.log(b+' Is the maximum');
    } else if (b < x && b<y&& b<a&&b<z){
      console.log(b +' Is the minmum');

    } if (y > x && y>z&& y>a&&y>b){
      console.log(y +' Is the maximum');
    } else if (y < x && y<z&& y<a&&y<b){
      console.log(y +' Is the minmum');

    } if (a > x && a>y && a>z&&a>b){
      console.log(a +' Is the maximum');
    } else if (a < x && a<y&& a<z&&a<b){
      console.log(a +' Is the minmum');
    }
  

}
