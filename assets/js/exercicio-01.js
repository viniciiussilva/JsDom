
function simuladorSalario(){
    const SALARIO_COMERCIAL = 1300;
    const PERCENTUA_COMISSAO = 0.1;
    const META_VENDA = 1000;
    
    var nomeVendedor = document.getElementById("nomeVendedor").value;
    var totalVendas  = document.getElementById("totalVendas").value;
   

    if(totalVendas >= META_VENDA){
        var salarioBruto = SALARIO_COMERCIAL + (totalVendas * PERCENTUA_COMISSAO);
        var comissao = totalVendas * PERCENTUA_COMISSAO;
        exibirMensagemSucesso(nomeVendedor,salarioBruto,comissao);
        
    }
/*
    <div class="col-sm-12 col-md-9 col-lg-9 pt-30">
    <div class="alert alert-success" role="alert">
       <h5>A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</h5> 
      </div>
</div>
*/
    console.log("Nome Vendedor:" + nomeVendedor);
    console.log("Total Vendas:" + totalVendas);
    console.log("Salario Bruto:" + salarioBruto);
}
function exibirMensagemSucesso(nome, salario, comissao){
let html =  '<div class="col-sm-12 col-md-9 col-lg-9 pt-30">' +
            ' <div class="alert alert-success" role="alert">' +
            '  <h5>'+ nome +', seu salário bruto será'+ salario +' reais. <br>voce recebeu '+ comissao +' reais de comissão</h5> ' +
            '</div>'+
            '</div>';
            let mensagemResultado = document.getElementById("mensagemResultado");
            mensagemResultado.clasName = "row visible";
            mensagemResultado.innerHTML = html;
}