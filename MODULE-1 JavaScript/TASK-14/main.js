$(document).ready(function () {
  $("#registerBtn").click(function () {
    $("#eventCard").fadeIn(); // Show card smoothly
    alert("You registered!");
    setTimeout(() => {
      $("#eventCard").fadeOut(); // Hide card after 2 sec
    }, 2000);
  });
});
