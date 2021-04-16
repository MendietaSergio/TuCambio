var ventana_ancho = $(window).width()
if (ventana_ancho > 768) {
  $("button").click(function () {
    $('.caja-formulario').css({ 'margin-top': '0px' })
    $('.header-img').css({ 'margin': 'auto', 'display': 'block', 'width': 'auto' })
    $('.caja-cambio').css({ 'margin': '0px' })
    $('.caja-comision').css({ 'width': '98%', 'margin': '6px'})
    $('.header').css({ 'height': 'auto', 'margin-bottom': '0px' })

    $('#contenedor').removeClass('contenedor');
    $('#contenedor').addClass('contenedor_form');
    $("#caja-info").hide("slow");

    $('#caja-comision').show(2000)
    $("#caja-formulario").show(2000);

  })
}
if (ventana_ancho <= 768) {
  $("button").click(function () {
    $('#contenedor').removeClass('contenedor');
    $('#contenedor').addClass('contenedor_form');
    $("#caja-info").hide("slow");
    $('#caja-comision').show(4000)
    $('.caja-comision').css({'margin': '30px' })
    $("#caja-formulario").show(2000);
  })
}

