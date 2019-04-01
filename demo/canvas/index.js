var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
/*ctx.clearRect(0,0,c.width,c.height); 
var img=document.getElementById("picture");
var pat=ctx.createPattern(img,"repeat");
ctx.rect(0,0,150,100);
ctx.fillStyle=pat;
ctx.fill();*/
ctx.strokeStyle="blue";
ctx.lineWidth=10;
ctx.moveTo(0,0);
ctx.lineTo(800,600);
ctx.stroke();
