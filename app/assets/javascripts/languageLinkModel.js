(function () {
  var Message = Backbone.Model.extend({
    defaults : {
      nothing: nothing
    }
  });

  var Messages = Backbone.Collection.extend({
    model : Message
  });

  var Chatroom = Backbone.Model.extend({
    defaults : {
      "otheruser" : "Waiting on another user...";
    }
  });

})();
