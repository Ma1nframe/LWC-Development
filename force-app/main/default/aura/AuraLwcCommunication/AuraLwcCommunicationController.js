({
  handleMsg: function (component, event) {
    var msg = event.getParam("msg"); // msg requires ''
    component.set("v.message", msg); // v. === view (no bang operator or curly braces)
  }
});
