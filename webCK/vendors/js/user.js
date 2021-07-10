$(document).ready(function() {
    var kt = "";
    kt = localStorage.getItem('LoginSuccess');
    if (kt == 'true') {
        var acc = JSON.parse(localStorage.getItem('CurrentAccount'))
        var name = acc.name;
        $("#tenDN").html(name);
        $(".header-item_sign").hover(function() {
                $(".header_navbar-user-menu").css({
                    "display": "block",
                    "width": "150px"
                });
            },
            function() {
                $(".header_navbar-user-menu").css("display", "none");
            })

        $(".header-item_sign").click(function() {
            $("#tenDN").attr("href", "#");
        })
    } else {
        $("#tenDN").html("Đăng nhập&nbsp;/&nbsp;Đăng ký");
        $(".header-item_sign").hover(function() {
            $(".header_navbar-user-menu").css("display", "none");
        })
    }

    $("#DX").click(function() {
        localStorage.removeItem('LoginSuccess');
        location.reload();
    })
})