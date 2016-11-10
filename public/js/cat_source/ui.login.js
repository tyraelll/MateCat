$.extend(UI, {
    setLoginEvents: function () {
        UI.ModalWindow = ReactDOM.render(
            React.createElement(ModalWindow),
            $("#modal")[0]
        );
        $('#logoutlink').on('click',function(event){
            //stop form submit
            event.preventDefault();
            $.post('/ajaxLogout',{logout:1},function(data){
                if('unlogged'==data){
                    //ok, unlogged
                    if($('body').hasClass('manage')) {
                        location.href = config.hostpath + config.basepath;
                    } else {
                        window.location.reload();
                    }
                }
            })
        });

        $('.user-menu-preferences').on('click', function () {
            UI.ModalWindow.showModalComponent(PreferencesModal, 'Preferences');

            // var style = {
            //     'width': '80%',
            //     'maxWidth': '800px',
            //     'minWidth': '600px'
            // };
            // UI.ModalWindow.showModalComponent(LoginModal, 'Login or register', style);
        });

        $('#modal').on('openresetpassword', function () {
            UI.ModalWindow.showModalComponent(ResetPasswordModal, "Reset Password");
        });
        $('#modal').on('openforgotpassword', function () {
            UI.ModalWindow.showModalComponent(ForgotPasswordModal, "Forgot Password");
        });
        $('#modal').on('openregister', function () {
            UI.ModalWindow.showModalComponent(RegisterModal, "Register Now");
        });

    }
});