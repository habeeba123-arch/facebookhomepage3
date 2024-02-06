jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $( "#myform4" ).validate({
    rules: {
      field: {
        required: true,
        email: true
      }
    }
  });