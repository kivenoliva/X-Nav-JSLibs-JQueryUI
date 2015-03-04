
jQuery(document).ready(function() {

    $(function(){ 
        //------------------Declaracion de menus y calendario----------
        var menuApagado = $("#menu_apagar").menu().hide();
        var menuHome = $("#menu_home").menu().hide();
        var calendario = $( "#datepicker" ).datepicker().hide();
        var calendarioshow = false;
        
        //------------------boton de calendario-----------------         
        $( "#calendar" ).button({
            text: false,
            icons: {
                primary: "ui-icon-calendar"
            }
        }).click(function() {
            if (!calendarioshow){
                calendario.show();
                calendarioshow = true;
            }else{
                calendario.hide();
                calendarioshow = false;
            }
        });
        
        //------------------boton de mail--------------------
        $( "#mail" ).button({
            text: false,
            icons: {
                primary: "ui-icon-mail-closed"
            }
        }).click(function() {
            alert("Bandeja de mensajes vacia");
        }); 
        
        //------------------boton de wifi---------------------
        $( "#wifi" ).button({
            text: false,
            icons: {
                primary: "ui-icon-signal-diag"
            }
        });
  
        //------------------boton de apagado---------------------
        $( "#power" ).button({
            text: false,
            icons: {
                primary: "ui-icon-power"
            }
        }).click(function() {
            menuApagado.show();
            $( document ).one( "click", function() {
                menuApagado.hide();
            });
            return false;
        }); 
        
        //------------------boton de home---------------------
        $( "#home" ).button({
            text: false,
            icons: {
                primary: "ui-icon-home"
            }
        }).click(function() {
            menuHome.show();
            $( document ).one( "click", function() {
                menuHome.hide();
            });
            return false;
        });
   
        //--------------------- Carpetas ---------------------
        $( "#video" ).button({
            text: false,
            icons: {
                primary: "ui-icon-video"
            }
        }).draggable();
        
        $( "#cart" ).button({
            text: false,
            icons: {
                primary: "ui-icon-cart"
            }
        }).draggable();
        
        $( "#image" ).button({
            text: false,
            icons: {
                primary: "ui-icon-image"
            }
        }).draggable();
        
        $( "#contact" ).button({
            text: false,
            icons: {
                primary: "ui-icon-contact"
            }
        }).draggable();
        
        $( "#clock" ).button({
            text: false,
            icons: {
                primary: "ui-icon-clock"
            }
        }).draggable();
        
        $( "#comment" ).button({
            text: false,
            icons: {
                primary: "ui-icon-comment"
            }
        }).draggable();
        
        $( "#note" ).button({
            text: false,
            icons: {
                primary: "ui-icon-note"
            }
        }).draggable();
        
        $( "#print" ).button({
            text: false,
            icons: {
                primary: "ui-icon-print"
            }
        }).draggable();
        
        $( "#papelera" ).button({
            text: false,
            icons: {
                primary: "ui-icon-trash"
            }
        }).droppable({
            tolerance: "touch",
            drop: function( event, ui ){
                ui.draggable.hide();
            }
  });
  
    });
        
    
});
