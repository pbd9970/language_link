(function () {
  var Message = Backbone.Model.extend({
    defaults : {
      "otheruser" : "Waiting on another user...";
    }
  });

  var Messages = Backbone.Collection.extend({
    model : Message
  });
})();
