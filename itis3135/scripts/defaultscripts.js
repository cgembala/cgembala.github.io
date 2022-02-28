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

  if (hour >= 12) {
    period = "PM";
  }
  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
  }

  Number.prototype.pad = function(digits) {
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

function initClock() {
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

var employee =["Tony Stark","John Snow","Henry Smith","Luke Collins","Camerron Gembala"];
var salary = [75000,32000,21000,56000,43000];

window.onload = function () 
{
  document.getElementById("displayresults").onclick = displayResults;
  document.getElementById("addsalary").onclick = addSalary;
  document.getElementById("displaysalary").onclick = displaySalary;
  document.getElementById("employee").focus;
};

function addSalary()
{
  var addEmployee = document.getElementById("employee").value;
  var addSalary = document.getElementById("salary").value;

  if (salary == "")
  {
    alert("Please enter a valid number");
    addSalary = "";
  }
   else 
   {
     addSalary = parseInt(addSalary);
      if(employee.includes(addEmployee)){
       var index =  employee.indexOf(addEmployee);
       salary[index] = addSalary;
    }
  
  else
  {
    employee.push(addEmployee);
    salary.push(addSalary);
    
  }
  document.getElementById("salary").innerHTML = "";
  document.getElementById("employee").focus();
}

}

function displayResults()
{
  var highest = 0;
  var sum = 0;
  var person;
 

  for (i = 0; i < salary.length-1; i++)
  {
    sum = sum + salary[i];
  }
  let average = (sum / salary.length).toFixed(2);

  for (j=0; j<salary.length;j++)
  {
    if(salary[j]>highest)
    {
    highest = salary[j];
    person = j;
    }
}
  document.getElementById("result").innerHTML = "<h2>Result</h2>" + "<p>The average salary is " + average + "</p>" + "<p>The person with the highest salary was: " + employee[person] + "</p>"
}

function displaySalary()
{
  let table = "";
  table += "<tr><th>Employee</th> <th>Salary</th></tr>"
  for (i=0;i < salary.length;i++)
  {
    table += "<tr><td>" + employee[i] + "</td><td>" + salary[i] + " </td></tr>";
  }
  table+="</table>";
  document.getElementById("result_table").innerHTML = "<h2>Salaries</h2>" + table;
}