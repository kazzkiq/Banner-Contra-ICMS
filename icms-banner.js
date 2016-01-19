if(localStorage.getItem('ICMS_BANNER') != 'disabled') {
    var ICMS_BANNER = document.createElement('div');
    var ICMS_STYLE = document.createElement('style');

    ICMS_BANNER.id = 'icms--banner';

    var ICMS_HTML = '<div class="icms--banner"> <div class="icms--banner__container"> <img src="https://raw.githubusercontent.com/kazzkiq/Banner-Contra-ICMS/master/brazil-icon.png" alt="Imagem do Brasil"> <h2>Por causa do Governo, você vai pagar mais caro</h2> <p>O nosso governo irá começar a cobrar o ICMS, um imposto que dificulta a vida de empresas e lojas virtuais, incluindo a nossa. Se você também é contra este imposto e não quer pagar o pato com o seu bolso, assine nossa petição.</p><a href="https://secure.avaaz.org/po/petition/Nelson_Barbosa_Ministro_da_Fazenda_REVOGACAO_da_nova_Lei_de_ICMS_para_ECommerce" target="_blank" onclick="cancelICMS_BANNER()"> <small>Assinar Petição</small> EU SOU CONTRA O ICMS </a> <span class="icms--banner__cancel" onclick="cancelICMS_BANNER()">Não quero ajudar.</span> </div></div>';
    var ICMS_CSS = '.icms--banner__cancel,.icms--banner__container a{display:block;top:50%;right:15px;text-align:center}.icms--banner,.icms--banner *{box-sizing:border-box}.icms--banner{background:#ffe155;padding:5px 0;color:#5b4e1a!important;font-family:"San Francisco","Helvetica Neue",Helvetica,Arial,sans-serif!important;border-bottom:1px solid #e8bf1d}.icms--banner__container{max-width:1100px;margin:0 auto;padding:20px 250px 20px 100px;position:relative}.icms--banner__container img{width:75px;position:absolute;left:15px;top:50%;margin-top:-37px}.icms--banner__container h2{font-size:20px;margin:0 0 10px}.icms--banner__container p{font-size:14px;margin:0}.icms--banner__container a{position:absolute;margin-top:-20px;font-size:13px;background:#000;border-radius:5px;padding:7px 20px;color:#fff;text-decoration:none!important;font-weight:700}.icms--banner__container a:hover{background:#555}.icms--banner__container a small{font-size:12px;display:block;font-weight:400}.icms--banner__cancel{min-width:200px;position:absolute;margin-top:30px;color:#111;font-size:12px}@media (max-width:600px){.icms--banner__container{padding:20px 20px 0;text-align:center}.icms--banner__cancel,.icms--banner__container a{position:relative;top:auto;right:auto;margin-top:20px}.icms--banner__cancel{padding:0 0 10px}.icms--banner__container img{display:none}}';
    
    ICMS_BANNER.innerHTML = ICMS_HTML;
    ICMS_STYLE.innerHTML = ICMS_CSS;

    document.body.insertBefore(ICMS_BANNER, document.body.firstChild);
    document.body.appendChild(ICMS_STYLE);
}

function cancelICMS_BANNER() {
	document.getElementById('icms--banner').style.display = 'none';
    localStorage.setItem('ICMS_BANNER', 'disabled');
}