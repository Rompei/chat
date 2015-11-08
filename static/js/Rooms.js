define(
    "Rooms",
    [
    ],
    function(){
      function Rooms(peer){
        var that = this;
        this.rooms = ko.observableArray();
        peer.listAllPeers(function(list){
          for(var i = 0; i<list.length; i++){
            that.rooms.push(list[i]);
          }
        });
      }
      return Rooms
    }
    );
