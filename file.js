function convert() {
    

var fromunit = document.getElementById('fromunit').value;
var tounit = document.getElementById('tounit').value;
var temperature = parseFloat(document.getElementById('temperature').value);

var converttedValue;
var resultUnit;

switch (fromunit)
{
case 'C' :
if(tounit === 'F')
{
converttedValue = (temperature * 9/5) + 32;
resultUnit = 'F';
}
else if(tounit === 'K')
{
converttedValue =  temperature + 273.15;
resultUnit = 'K';
}
else if(tounit === 'R')
{
converttedValue =  temperature + 273.15;
resultUnit = 'R';
}
else {
converttedValue = temperature ;
resultUnit = 'C';
}
break;

case 'F' :
if(tounit === 'C')
{
converttedValue = (temperature - 32) * 5/9;
resultUnit = 'C';
}
else if(tounit === 'K')
{
converttedValue = ( temperature - 32 ) * 5/9 + 273.15;
resultUnit = 'K';
}
else if(tounit === 'R')
{
converttedValue =  temperature + 459.67;
resultUnit = 'R';
}
else {
converttedValue = temperature ;
resultUnit = 'F';
}
break;

case 'K' :
if(tounit === 'C')
{
converttedValue = temperature - 273.15;
resultUnit = 'C';
}
else if(tounit === 'K')
{
converttedValue =  (temperature - 273.15) * 9/5 + 32;
resultUnit = 'K';
}
else if(tounit === 'R')
{
converttedValue =  temperature * 9/5;
resultUnit = 'R';
}
else {
converttedValue = temperature ;
resultUnit = 'K';
}
break;


case 'R' :
if(tounit === 'C')
{
converttedValue = (temperature - 491.67) * 5/9;
resultUnit = 'C';
}
else if(tounit === 'K')
{
converttedValue =  temperature - 459.67;
resultUnit = 'K';
}
else if(tounit === 'R')
{
converttedValue =  temperature * 5/9;
resultUnit = 'R';
}
else {
converttedValue = temperature ;
resultUnit = 'R';
}
break;

}

document.getElementById('result').value = converttedValue.toFixed(2) + '' + resultUnit;
}
