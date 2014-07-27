(function () {
  var ChatroomView = Backbone.View.extend({
    initialize : function() {
      this.collection.on('reset', this.addAll, this);
      this.collection.on('add', this.addOne, this);
    },
    events : {
      "submit .new-message" : function(e) {
        e.preventDefault();
        newMessage = $('.new-message').val;
        client
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

  faye = new.Faye.Client("http://localhost:9292/faye");
  faye.subscribe("/messages/new", function(data) {
    //reset (data)
  });
});

})();
