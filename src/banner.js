if(localStorage.getItem('ICMS_BANNER') != 'disabled') {
    var ICMS_BANNER = document.createElement('div');
    var ICMS_STYLE = document.createElement('style');

    ICMS_BANNER.id = 'icms--banner';

    var ICMS_HTML = // HTML AQUI
    var ICMS_CSS = // CSS AQUI
    
    ICMS_BANNER.innerHTML = ICMS_HTML;
    ICMS_STYLE.innerHTML = ICMS_CSS;

    document.body.insertBefore(ICMS_BANNER, document.body.firstChild);
    document.body.appendChild(ICMS_STYLE);
}

function cancelICMS_BANNER() {
	document.getElementById('icms--banner').style.display = 'none';
    localStorage.setItem('ICMS_BANNER', 'disabled');
}
