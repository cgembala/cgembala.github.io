var sides;
var shape;
var polygon;
var rerun;

function getSides() 
{
  sides = prompt("The Cyan Gator would like you to enter the number of sides for a polygon from 1 to 10.");
  sides = parseFloat(sides);
  return sides;
}

function errorRetry() 
{
  sides = prompt("You have entered an invalid number please chose from 1 to 10.");
  sides = parseFloat(sides);
  return sides;
}

function validEntry() 
{
  sides = Math.round(Math.abs(sides));
  if (sides > 10 || sides <= 0) 
  {
    errorRetry();
  }
}

function getShape() 
{
  rerun = 1;
  while (rerun == 1) 
  {
    getSides();
    var shape = Math.round(Math.abs(sides));
    validEntry();
    while (sides <= 10) 
    {
      if (shape == 1) 
      {
        polygon = "hexagon";
      } else if (shape == 2) 
      {
        polygon = "digon";
      } else if (shape == 3) 
      {
        polygon = "trigon";
      } else if (shape == 4) 
      {
        polygon = "tetragon";

      } else if (shape == 5) 
      {
        polygon = "pentagon";

      } else if (shape == 6) 
      {
        polygon = "hexagon";

      } else if (shape == 7) 
      {
        polygon = "heptagon";

      } else if (shape == 8) 
      {
        polygon = "octagon";

      } else if (shape == 9) 
      {
        polygon = "enneagon";

      } else if (shape == 10) 
      {
        polygon = "decagon";
      }
      alert("Number of sides = " + shape + "\n" + "Name of the polygon is " + polygon);
      break;
    }
    rerun = prompt("Do you want to go again? Enter 1 for yes or 2 for no");
    rerun = parseFloat(rerun);
  }

}

 


