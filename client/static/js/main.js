define(
    "main",
    [
      "MessageList"
    ],
    function(MessageList){
      var peer = new Peer({key:'5086d3e7-41fa-4c94-aba3-3772c0975699'});
      var url = $.url();
      var roomId = url.param('id');
      var conn = peer.connect(roomId);
      conn.on('open', function(){
        var list = new MessageList(conn);
        ko.applyBindings(list);
      });
    });
