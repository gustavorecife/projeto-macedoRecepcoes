$('#navbar-collapse-menu').on('show.bs.collapse', function(){
	$('.macedorecepcoes-banner').css('transform', 'translate(-50%, 10%)');
});

$('#navbar-collapse-menu').on('hide.bs.collapse', function(){
	$('.macedorecepcoes-banner').css('transform', 'translate(-50%, -50%)');
});