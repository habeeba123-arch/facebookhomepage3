jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $( "#myform" ).validate({
    rules: {
      password: "required",
      
    }
  });