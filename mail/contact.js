// $(function () {

//     $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
//         preventSubmit: false,
//         submitError: function ($form, event, errors) {
//         },
//         submitSuccess: function ($form, event) {
//             event.preventDefault();
//             var name = $("input#exampleInputName1").val();
//             var email = $("input#exampleInputEmail1").val();
//             var subject = $("input#exampleInputSubject1").val();
//             var message = $("textarea#exampleInputMessage1").val();

//             $this = $("#sendMessageButton");
//             $this.prop("disabled", true);

//             $.ajax({
//                 action: "https://formspree.io/f/mvoljopq",
//                 method: "POST",
//                 data: {
//                     name: exampleInputName1,
//                     email: exampleInputEmail1,
//                     Subject: exampleInputSubject1,
//                     Message: exampleInputMessage1
//                 },
//                 cache: false,
//                 success: function () {
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' value='send' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-success')
//                             .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                             .append('</button>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function () {
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' value='send' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
//                     $('#success > .alert-danger').append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 complete: function () {
//                     setTimeout(function () {
//                         $this.prop("disabled", true);
//                     }, 1000);
//                 }
//             });
//         },
//         filter: function () {
//             return $(this).is(":visible");
//         },
//     });

//     $("a[data-toggle=\"tab\"]").click(function (e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });

// $('#exampleInputName1').focus(function () {
//     $('#success').html('');
// });
