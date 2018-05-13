$( document ).ready(function() {
  var socket = io();

  socket.on('payload', function(payload) {
    console.log(payload);

    $("#payload").html(payload);
  });
});
