define(
    "main",
    [
      "MessageList"
    ],
    function(MessageList){
      var peer = new Peer({key:'88af0bf2-b30d-44b8-a9f9-c865ee0ce4ed'});
      peer.on('open', function(id){
        console.log("id:"+id);
        peer.on('connection', function(conn){
          var list = new MessageList(conn);
          ko.applyBindings(list);
        });
      });
    });
