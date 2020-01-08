var random_number1=Math.floor(6*Math.random());
var img1_arr=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var img1=img1_arr[random_number1];
document.querySelectorAll("img")[0].setAttribute("src",img1);
var random_number2=Math.floor(6*Math.random());
var img2_arr=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var img2=img2_arr[random_number2];
document.querySelectorAll("img")[1].setAttribute("src",img2);

if(random_number1>random_number2)
{
  document.querySelector("h1").innerHTML="Player 1 wins";
}
 else if(random_number1==random_number2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
else{
  document.querySelector("h1").innerHTML="Player 2 wins";
}
