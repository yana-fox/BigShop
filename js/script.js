
let tab = $('.tabs-content > div');

$('.tabs__nav').click(function(){
	$('.tabs__nav').removeClass('tabs__nav--active');
	$(this).addClass('tabs__nav--active');
	$('.tabs-content__item--show').removeClass('tabs-content__item--show');
	tab.filter(this.hash).addClass('tabs-content__item--show');
	return false;
});

//Адаптив 
$(window).resize(function(event){
	adaptive_function();
});

function adaptive_header(w,h){
	let headerMenu = $('.burger-menu');
	// let headerLang = $('.header-top-lang');
	if (w < 600){
		if(!$('.header-menu').hasClass('done')){
			$('.header-menu').addClass('done').appendTo(headerMenu);
		}
	} else{
		if( $('.header-menu').hasClass('done')){
			$('.header-menu').removeClass('done').appendTo($('.header-top'));
		}
	}
	
};

function adaptive_function(){
	let w = $(window).outerWidth();
	let h = $(window).outerHeight();
	adaptive_header(w,h);
};
adaptive_function();

$('.burger-menu__icon').click(function(event){
	$(this).toggleClass('active');
	$('.burger-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});