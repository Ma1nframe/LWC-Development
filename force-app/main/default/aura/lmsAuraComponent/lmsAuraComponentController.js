({
  handleMessage: function (component, message) {
    if (message != null && message.getParam("lmsData") != null) {
      component.set("v.messageRecieved", message.getParam("lmsData").value);
    }
  },
  inputHandler: function (component, event) {
    component.set("v.messageValue", event.target.value);
  },
  publishMessage: function (component) {
    var msg = component.get("v.messageValue");
    var message = {
      lmsData: {
        value: msg
      }
    };
    component.find("lightningMessage").publish(message);
  }
});
