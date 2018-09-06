Site.contact = {
    done: " Your message has been sent. Thank you!",
    form: null,
    link: "php/contact.php",
    init: function() {
        
    },
    load: function($) {
        Site.contact.form = $('#contactform'),

        Site.contact.form.submit(function() {
            $.ajax({
                type: "POST",
                url: Site.contact.link,
                data: $(this).serialize(),
                success: function(msg)
                {
                    var msg_error = msg.split(",");
                    var output_error = '';

                    if (msg_error.indexOf('error-message') != -1) {
                        $("#contact-message").addClass("has-error");
                        $("#contact-message").removeClass("has-success");
                        output_error = 'Please enter your message.';
                    } else {
                        $("#contact-message").addClass("has-success");
                        $("#contact-message").removeClass("has-error");
                    }

                    if (msg_error.indexOf('error-email') != -1) {

                        $("#contact-email").addClass("has-error");
                        $("#contact-email").removeClass("has-success");
                        output_error = 'Please enter valid e-mail.';
                    } else {
                        $("#contact-email").addClass("has-success");
                        $("#contact-email").removeClass("has-error");
                    }

                    if (msg_error.indexOf('error-name') != -1) {
                        $("#contact-name").addClass("has-error");
                        $("#contact-name").removeClass("has-success");
                        output_error = 'Please enter your name.';
                    } else {
                        $("#contact-name").addClass("has-success");
                        $("#contact-name").removeClass("has-error");
                    }


                    if (msg == 'success') {

                        response = '<div class="alert alert-success success-send">' +
                                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                                '<i class="glyphicon glyphicon-ok" style="margin-right: 5px;"></i> ' + $success
                                + '</div>';


                        $(".reset").trigger('click');
                        $("#contact-name").removeClass("has-success");
                        $("#contact-email").removeClass("has-success");
                        $("#contact-message").removeClass("has-success");

                    } else {

                        response = '<div class="alert alert-danger error-send">' +
                                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                                '<i class="glyphicon glyphicon-remove" style="margin-right: 5px;"></i> ' + output_error
                                + '</div>';

                    }
                    // Hide any previous response text
                    $(".error-send,.success-send").remove();
                    // Show response message
                    Site.contact.form.prepend(response);
                }
            });
            return false;
        });
    },
};

App.hook('init', Site.contact.init);
App.hook('load', Site.contact.load);

