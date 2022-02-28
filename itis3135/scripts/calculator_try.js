function dis(val)
{
    document.getElementById("calc").value+=val;
}
function solve()
{
    let numberOne = document.getElementById("calc").value;
    let numberTwo = eval(numberOne);
    document.getElementById("calc").value = numberTwo;
}
function reset()
{
    document.getElementById("calc").value = "";
}