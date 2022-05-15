
function results(){
  var score=0;
  if (document.getElementById('thread').checked)
  {
  score++
  }
  if (document.getElementById('double_stroke').checked)
  {
   score++
  }
  if (document.getElementById('infinite').checked)
  {
    score++
  }
  if (document.getElementById('yes').checked)
  {
  score++
  }
  console.log(document.write('Your score is:'+score));
}
