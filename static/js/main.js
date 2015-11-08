define(
    "main",
    [
    "Rooms"
    ],
    function(Rooms){
      var peer = new Peer({key:'5086d3e7-41fa-4c94-aba3-3772c0975699'});
      var list = new Rooms(peer);
      ko.applyBindings(list);
    }
);
