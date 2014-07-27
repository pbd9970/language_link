(function () {
  var ChatroomView = Backbone.View.extend({
    initialize : function() {
      this.collection.on('reset', this.addAll, this);
      this.collection.on('add', this.addOne, this);
    },

    render: function() {
      this.addAll();
    },
    addAll: function(){
      this.$el.empty();
      this.collection.forEach(this.addOne, this);
      return this;
    },
    addOne: function(person) {
      var messageView = new MessageView({model: message});
      this.$el.append(messageView.render().el);
    }
    events : {
      "submit .new-message" : function(e) {
        e.preventDefault();
        newMessage = $('.new-message').val;
        faye.publish("/messages/new", function(data) {
          Chatroom.messages.reset(data);
        });
      }
    }
  });

})();


(function () {

  var MessageView = Backbone.View.extend({
    template : myTemplate,
    tagName: "p",
    render : function() {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    },
    events : {
      "click .message" : function() {
        console.log(this.model.get('id') + " - " + this.model.get('created_at'));
      }
    }
  });

})();

(function () {

  window.faye = new.Faye.Client("http://localhost:9292/faye");
  faye.subscribe("/messages/new", function(data) {
    Chatroom.messages.reset(data);
  });
});

})();
