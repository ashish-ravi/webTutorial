function func(a) {
    var name = 'Hello'; 
    var x = 10
    function disp(y) { 
      console.log(name); 
      console.log(x+y+a)
    }
    disp(5);
  }
func(20);

// concept of global scope, outter function scope and local scope

var e = 10;
function sum(a){
  return function(b){
    return function(c){
      return function(d){        
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4));