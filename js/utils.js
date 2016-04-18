//faz a foto de perfil ficar quadrada
function square(selector){
    var $foto = $(selector);
	if ($foto.width() > $foto.height()){
		$foto.height("100%");
	}else if ($foto.width() < $foto.height()){
		$foto.width("100%");
	}
}

$(document).ready(function({
    square(".square-photo");
});