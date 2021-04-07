var ventana_ancho = $(window).width()
console.log(ventana_ancho);
if (ventana_ancho > 768) {
  $("button").click(function () {
    console.log(ventana_ancho);
    $('.caja-formulario').css({ 'margin-top': '0px' })
    $('.header-img').css({ 'margin': 'auto', 'display': 'block', 'width': 'auto' })
    $('.caja-cambio').css({ 'margin': '0px' })
    $('.caja-comision').css({ 'height': 'auto', 'margin': '0px', 'margin-top': '24px' })
    $('.header').css({ 'height': 'auto', 'margin-bottom': '0px' })

    $('#contenedor').removeClass('contenedor');
    $('#contenedor').addClass('contenedor_form');
    $("#caja-info").hide("slow");

    $('.caja-comision').css({ 'height': 'auto', 'margin': '0px', 'margin-top': '24px' })
    $('#caja-comision').show(2000)
    $("#caja-formulario").show(2000);

  })
}
if (ventana_ancho <= 768) {
  $("button").click(function () {
    console.log(ventana_ancho);
    $('#contenedor').removeClass('contenedor');
    $('#contenedor').addClass('contenedor_form');
    $("#caja-info").hide("slow");
    $('#caja-comision').show(4000)
    $('.caja-comision').css({'margin': '30px' })
    $("#caja-formulario").show(2000);
  })
}

