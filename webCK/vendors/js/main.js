$(document).ready(function() {

    $("#productnew").click(function() {
        $(".product").show();
        $(".product-like").hide();
        $(".product-sales").hide();
        $(".product-shoegirl").hide();
        $(".product-scandalman").hide();
        $(".product-scandalgirl").hide();
        $(".product-socks").hide();
        $(".product-shoeman").hide();

    });

    $("#productsale").click(function() {
        $(".product").hide();
        $(".product-like").hide();
        $(".product-sales").show();
        $(".product-scandalman").hide();
        $(".product-socks").hide();
        $(".product-shoegirl").hide();
        $(".product-scandalgirl").hide();
        $(".product-shoeman").hide();
    });

    $("#productlike").click(function() {
        $(".product").hide();
        $(".product-like").show();
        $(".product-sales").hide();
        $(".product-shoegirl").hide();
        $(".product-scandalman").hide();
        $(".product-scandalgirl").hide();
        $(".product-socks").hide();
        $(".product-shoeman").hide();
    });

    $("#shoeman").click(function() {
        $(".product").hide();
        $(".product-like").hide();
        $(".product-sales").hide();
        $(".product-shoegirl").hide();
        $(".product-shoeman").show();
        $(".product-scandalgirl").hide();
        $(".product-socks").hide();
        $(".product-scandalman").hide();

    });

    $("#shoegirl").click(function() {
        $(".product").hide();
        $(".product-like").hide();
        $(".product-sales").hide();
        $(".product-shoeman").hide();
        $(".product-scandalman").hide();
        $(".product-shoegirl").show();
        $(".product-socks").hide();
        $(".product-scandalgirl").hide();

    });
    $("#scandalman").click(function() {
        $(".product").hide();
        $(".product-like").hide();
        $(".product-sales").hide();
        $(".product-shoeman").hide();
        $(".product-shoegirl").hide();
        $(".product-scandalgirl").hide();
        $(".product-socks").hide();
        $(".product-scandalman").show();

    });

    $("#scandalgirl").click(function() {
        $(".product").hide();
        $(".product-like").hide();
        $(".product-sales").hide();
        $(".product-shoeman").hide();
        $(".product-shoegirl").hide();
        $(".product-scandalman").hide();
        $(".product-scandalgirl").show();
        $(".product-socks").hide();

    });

    $("#socks").click(function() {
        $(".product").hide();
        $(".product-like").hide();
        $(".product-sales").hide();
        $(".product-shoeman").hide();
        $(".product-shoegirl").hide();
        $(".product-scandalman").hide();
        $(".product-scandalgirl").hide();
        $(".product-socks").show();
    });


    $(".header_cart-item-remove").click(function() {
        $(".header_cart-item:first-child").remove();
    })

})

var user = new Array();

var tk = {
    name: 'Võ Đăng Khoa',
    phone: '0948105460',
    pw: 'Khoa123@'

}
var tk2 = {
    name: 'Nguyễn Thế Sơn',
    phone: '0343859022',
    pw: 'Son123@'

}
user.push(tk);
user.push(tk2)

localStorage.setItem('TaiKhoan', JSON.stringify(user))