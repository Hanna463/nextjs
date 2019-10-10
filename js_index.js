function insert(num) {
    document.form.textview.value += num;
}
function clean() {
     document.form.textview.value = "";
}
function back() {
    let exp = document.form.textview.value;
     document.form.textview.value = exp.substring(0,exp.length-1);
}
function equal() {
   let exp = document.form.textview.value;
   if(exp) {
       document.form.textview.value = eval(exp);
   }
}
 if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        resultNum = "You broke it!";
      } else {
        resultNum = "Look at what you've done";
      }
 }
