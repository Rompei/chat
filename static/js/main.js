define(
    "main",
    [
    "Rooms"
    ],
    function(Rooms){
      var peer = new Peer({key:'88af0bf2-b30d-44b8-a9f9-c865ee0ce4ed'});
      var list = new Rooms(peer);
      ko.applyBindings(list);
    }
);
