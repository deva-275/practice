/*console.log("hi prends");
var x=10;
console.log(x);
if (x==10)
{console.log("hor");}
var z=prompt("enter a number");
console.log(typeof(z))
console.log(z*3)*/
/*var a="";
var i=prompt('enter range upto print the number:');
for (var p=0;p<=i;p++)
    {   a+=" <br> the value is "+p;
        console.log(a);    
    }
    document.getElementById("prasad").innerHTML = a;*/
    var metal={
        basicName:"copper",
        getData :function(){
            return document.getElementById("demo").innerHTML=this.basicName;
        }
    }