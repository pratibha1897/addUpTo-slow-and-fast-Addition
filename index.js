  function fastAddition(num) {
    var num = parseInt(document.getElementById("num").value);
    let total = num * (num + 1) / 2;
    return (document.getElementById("result").value = total);
  }
  
  
  function slowAddition(num) {
    var num = document.getElementById("num").value;
    let totalSum = 0;
    for (let i = 0; i <= num; i++) {
      totalSum += i;
    }
    return (document.getElementById("result").value = totalSum);
  }
  
  
  
  var t1 = performance.now();
  fastAddition(num);
  slowAddition(num);
  var t2 = performance.now();
  console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds.`);


