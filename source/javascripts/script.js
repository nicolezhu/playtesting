$(document).ready(function() {
  $('#show-forum').on('click', function() {
    $('#show-forum').hide();
    $('.game-forum-container').show();
  });

  $('#chat-box').on('keypress', function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      var message = $('#chat-box').val();
      $('.clearfix').before('<div class="chat new"><div class="chat-info"><span class="chat-info">@mrrobot <span class="chat-time">2/6/16, now pm</span></span></div><span class="chat-message">' + message + '</span></div>');
      $('#chat-box').val('');
    }
  });
});
