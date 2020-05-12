document.getElementById('output').style.visibility ='hidden';

document.getElementById('lbsInput').addEventListener('input', function(x){
  document.getElementById('output').style.visibility ='visible';
  let lbs = x.target.value;

  //1 pound = 1/0.0022046 grams
  document.getElementById('gramsOutput').innerHTML= lbs/0.0022046;
  //1 pound = 1/2.2046 kilograms
  document.getElementById('kgOutput').innerHTML= lbs/2.2046;
  //1 pound = 16 Ounces
  document.getElementById('ozOutput').innerHTML= lbs*16;
});
