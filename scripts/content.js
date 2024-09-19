$('#BBCBox_message_button_1_26').after("<input type='file' class='custom-file-input' id='imgurFile' style='visibility: hidden;'>");

$("#BBCBox_message_button_1_23").click(function(){          
  $("#imgurFile").click();  
});

$('input[id=imgurFile]').change(function(){

  var formData = new FormData();
  formData.append("image", $("#imgurFile")[0].files[0]);

   $.ajax({
    url: "https://api.imgur.com/3/image",
    type: "POST",
    datatype: "json",
    headers: {
      "Authorization": "Client-ID aca6d2502f5bfd8"
    },
    data: formData,
    success: function(response) {
      console.log(response);
      // var photo = response.data.link;
      // var photo_hash = response.data.deletehash;
      $("#message").val($("#message").val().replace("[gifv][/gifv]", "[img]" + response.data.link +"[/img]"));
    },
    cache: false,
    contentType: false,
    processData: false
  });
  
});
