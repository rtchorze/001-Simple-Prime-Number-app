  var x = prompt("test a number");
  var prime = true;
  var divisors =[];
  var check = 2;

  //Check if the number entered can be divided by any number other than 1 and the number being tested

  for(check=2;check<x;check++){
    if(x%check==0){
      prime=false;
      divisors.push(check);
    }
  }

  //OUTPUT

  document.write("<h1>The number tested: ",x,"</h1>");

  if(prime==false){
    document.write("This is <b>not</b> a prime number, based on the following tests:");

    for(i=0;i<divisors.length;i++){
          var y = x/divisors[i];
          document.write("<ul><li> Case ",i+1,": ",x," / ",divisors[i]," = ",y,"</li></ul>");
    }

  }else{
    document.write("<p class=prime_number>This is a prime number</p>");
  }
