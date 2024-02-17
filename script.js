
 function checkloveper(){

  var name = document.getElementById('name').value;
  var lname = document.getElementById('lname').value;

  if(name == ""){
   alert('Please enter your name');
  }else if (name.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(name)){
   alert('Numbers are not allowed');
  }

  else if(lname == ""){
   alert('Please enter your love name');
  }else if (lname.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(lname)){
   alert('Numbers are not allowed');
  }
  else{
  var lovePercentage = Math.random() * 100;
  lovePercentage = Math.floor(lovePercentage);
  document.getElementById('lovevalue').value = lovePercentage + "%"; 
  }
  var message = "";
    if (lovePercentage >= 80) {
      message = "Wow! You are meant to be together!";
    } else if (lovePercentage >= 50) {
      message = "Looks like there's potential!";
    } else {
      message = "Hmm... Keep working on it!";
    }
    
    document.getElementById('message').innerText = message;
 }
