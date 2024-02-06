jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $( "#myform1" ).validate({
    rules: {
      field: {
        required: true,
        name: true
      }
    }
  });