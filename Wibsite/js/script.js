function reverse(){
    var word = document.getElementById("word").value;
    var drow = "";
for (counter = word.length; counter>=0; counter--){
    drow = drow + word.charAt(counter);
}
document.getElementById("drow").innerHTML = drow;

}