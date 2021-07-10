$(document).ready(function() {
    $(".btn-save").click(function() {
        var sdt = $("#txtsdt").val();
        var sonha = $("#txthome").val();
        var duong = $("#txtstreet").val();
        var pxa = $("#txtvil").val();
        var dis = $("#txtdis").val();
        var city = $("#txtpro").val();




        var address = sonha + ", " + duong + ", " + pxa + ", " + dis + ", " + city;
        $(".section-address").append(address);
        $(".section-phone").append(sdt);


    });


});