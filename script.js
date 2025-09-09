
var messages = document.getElementById('messages');
var textbox = document.getElementById('textbox');
var send_button = document.getElementById('send-button');

//function for when send button is clicked
send_button.addEventListener('click', function(){
  // var newMessage = document.createElement('li') //new variable that creates list items
  // newMessage.innerHTML = textbox.value; //text inside the list item will now be equal to the lext found in the textbox
  // messages.appendChild(newMessage);
  textbox.value = ''; //deletes content in textbox after it is sent

  Swal.fire({
  title: "Coming soon!",
  text: "The message function doesn't work yet but it's a work in progress :'(",
  imageUrl: './images/crying.gif',
  imageHeight: 300,
  imageAlt: "image_not_available",
  showConfirmButton: false,
  showCloseButton: true,
});

});

