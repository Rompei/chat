define(
    "MessageList",
    [
    "Message"
    ],
    function(Message){
      function MessageList(conn){
        var that = this;
        this.messages = ko.observableArray();

        this.editingMessage = ko.observable(new Message());

        this.send = function(){
          var model = this.editingMessage().toModel();
          conn.send($.toJSON(model));
          var message = new Message();
          message.author(model.author);
          this.editingMessage(message);
          that.messages.push(model);
        };

        conn.on('data', function(data){
          console.log(data);
          var model = $.evalJSON(data);
          var msg = new Message(model);
          that.messages.push(msg);
        });

      }
      return MessageList;
    }
);
