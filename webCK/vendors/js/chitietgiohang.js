$(document).ready(function() {

    $("#btn-save").click(function() {

        $(".header_cart-list-no-cart").hide();
        var img = $(".list_item-img").val();
        $(".header_cart-item-img").append(img);

    })
})