$(document).ready(function(){

var $animate_card = $('.animate-card');
var $move_chart = $('.chart');
var $window = $(window);

function check_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($animate_card, function() {
		var $card = $(this);
		var card_height = $card.outerHeight();
		var card_top_position = $card.offset().top;
		var card_bottom_position = (card_top_position + card_height);

		// see if this current container is within the viewport
		if ((card_bottom_position >= window_top_position) && (card_top_position <= window_bottom_position)) {
			$card.addClass('in-view');
		}
	});

	$.each($move_chart, function() {
		var $chart = $(this);
		var chart_height = $chart.outerHeight();
		var chart_top_position = $chart.offset().top;
		var chart_bottom_position = (chart_top_position + chart_height);

		// see if this current container is within the viewport
		if ((chart_bottom_position >= window_top_position) && (chart_top_position <= window_bottom_position)) {
			$chart.addClass('move-chart');
		}
	});

};
$window.on('scroll resize', check_view);
$window.trigger('scroll');

});


// function variable_speed() {
// 	// console.log('variable speed running');
// 	var $card = $('.in-view');
// 	var window_top_position = $window.scrollTop(); // how many have been scrolled
// 	// console.log("window top position: " + window_top_position); 
// 	var view_offset = $('#card1').offset().top; // pixels to top of view
// 	// console.log("until top of card1: " + view_offset);
// 	var card_height = $('#card1').height();
// 	// console.log("card1 height: " + card_height);
// 	var card_middle = card_height/4;
// 	var start_here = card_middle + view_offset;

// 	if ( window_top_position > 1300 ) {
// 		$.each($animate_card, function() {
// 				// console.log($(this).attr('id'));
// 				var $scroll_me = $(this);
// 				var scroll_speed = parseInt($scroll_me.data('scroll-speed'))
// 				var offset = -(window_top_position * .1) / scroll_speed;
				
// 				// console.log(window_top_position);
// 				// console.log(view_offset);
// 				// console.log(window_top_position);
// 				// console.log(card_middle);
// 					console.log('transform');
// 					$scroll_me.css('transform', 'translateY(' + offset + 'px)');
// 		});
// 	}

	
// };


// // $window.on('scroll', variable_speed);
// variable_speed();

// console.log('everything loaded');
// // $window.trigger('scroll');