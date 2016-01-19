if(localStorage.getItem('ICMS_BANNER') != 'disabled') {
    var ICMS_BANNER = document.createElement('div');
    var ICMS_STYLE = document.createElement('style');

    var ICMS_HTML = // HTML aqui;
    var ICMS_CSS = // CSS aqui

    ICMS_BANNER.innerHTML = ICMS_HTML;
    ICMS_STYLE.innerHTML = ICMS_CSS;

    document.body.insertBefore(ICMS_BANNER, document.body.firstChild);
    document.body.appendChild(ICMS_STYLE);
}

function cancelICMS_BANNER() {
    localStorage.setItem('ICMS_BANNER', 'disabled');
}
