
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
  window.alert('Your score is:'+score);
}
