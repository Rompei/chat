define(
    "main",
    [
      "MessageList"
    ],
    function(MessageList){
      var peer = new Peer({key:'88af0bf2-b30d-44b8-a9f9-c865ee0ce4ed'});
      var url = $.url();
      var roomId = url.param('id');
      var conn = peer.connect(roomId);
      conn.on('open', function(){
        var list = new MessageList(conn);
        ko.applyBindings(list);
      });
    });
