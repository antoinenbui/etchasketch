$(document).ready(function(){
	var $grid = $('#grid');

	for (i = 0; i < 30; i++) 
	{
	    var row = '<div>';

	    for (j = 0; j < 30; j++)
	        row += '<div class="square"></div>';

	    row += '</div>';

	    $grid.append(row);
	}

	$('.square').hover(function() {
		$(this).addClass('hover');
	});

	$('#clear').click(function() {
		$('.square').removeClass('hover');
	});
});