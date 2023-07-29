//efeito de esconder formulário de cadastro

  $(document).ready(function(){

    $("#botao-cadastrar").click(function() {

    $("#botao-cadastrar").slideToggle("slow");
    $("#form-cadastrar").slideToggle("slow");
    $("#section-login").hide();
    
    });
  });

