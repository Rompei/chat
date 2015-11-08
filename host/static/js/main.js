define(
    "main",
    [
      "MessageList"
    ],
    function(MessageList){
      var peer = new Peer({key:'5086d3e7-41fa-4c94-aba3-3772c0975699'});
      peer.on('open', function(id){
        console.log("id:"+id);
        peer.on('connection', function(conn){
          var list = new MessageList(conn);
          ko.applyBindings(list);
        });
      });
    });
