//code found and modified from: https://www.youtube.com/watch?v=paiI1N96EpQ
function showTime() 
{
  var now = new Date();
  var dayname = now.getDay(),
    month = now.getMonth(),
    datenumber = now.getDate(),
    year = now.getFullYear(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds(),
    period = "AM";

  if (hour >= 12) 
  {
    period = "PM";
  }
  if (hour == 0) 
  {
    hour = 12;
  }
  if (hour > 12) 
  {
    hour = hour - 12;
  }

  Number.prototype.pad = function(digits) 
  {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  }

  var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
  var values = [week[dayname], months[month], datenumber.pad(2), year, hour.pad(2), minute.pad(2), second.pad(2), period];
  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() 
{
  showTime();
  window.setInterval("showTime()", 1);
}

function formSub() 
{
  document.getElementById("frm").submit();
}

function userInfo(form) 
{
  var userName = form.name.value;
  var userFeel = form.text.value;
  alert("Hello " + userName + " we are glad you are feeling " + userFeel);
}

function calcTax() 
{
  var paid = prompt("Enter how much you paid");
  paid = parseFloat(paid);
  var total = (paid * 1.07);
  total = parseFloat(total);
  alert("Total after tax is: " + total);
}

function calcMPG() 
{
  var miles = prompt("Enter how many miles you drove.");
  miles = parseFloat(miles);
  var gallons = prompt("Enter how many gallons you use.");
  gallons = parseFloat(gallons);
  var mpg = miles / gallons;
  mpg = parseInt(mpg);
  alert("You got: " + mpg + " miles per gallon");
}

function sum(max)
 {
  var a = Math.floor(Math.random() * (max + 1));
  a = parseInt(a)
  var b = Math.floor(Math.random() * (max + 1));
  b = parseInt(b);
  var sum = (a + b);
  sum = parseInt(sum);
  alert("The sum of the two random numbers is: " + sum);
}

function FahrenheittoCelsius()
{
  var temp = prompt("Enter the temperature in Fahrenheit.");
  temp = parseFloat(temp);
  var celsius = (temp-32)*(5/9);
  celsius = parseFloat(celsius);
  let newtemp = celsius.toFixed(2);
  alert("The temperature in Celsius is: " + newtemp);
}

function MilestoKilo()
{
  var mile = prompt("Enter how many miles.");
  mile = parseFloat(mile);
  var kilo = (mile*1.609344);
  kilo = parseFloat(kilo);
  let newmile = kilo.toFixed(2);
  alert("The distance in kilometers is: " + newmile);
}

  