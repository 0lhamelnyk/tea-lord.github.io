$(function(){

	$('.search__button').click(function(){
		$(this).toggleClass('active')
		$('.search-input').slideToggle(400)
	});

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
	});

	$('.collection-slider').slick({
		appendArrow: '.collection-slider__button-prev',   /*верхню і нижню кнопку треба впихнути в один клас,щоб можна було стилізувати*/
		prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
		appendArrow: '.collection-slider__button-next',
		nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
		infinite: false, /*щоб не повторювались ті елементи списку при слайді*/
		responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,  /*прибираємо крапки при розмірі мешще 767 тому що на ще менших розмірах пальцем буде складно потрапити в них*/
			}
		}
		]
	});


	$(window).on('resize load', function(){   /*це написано щоб слайдер з*являвся на мобільних пристроях// в ON вказані умови коли буде це застосовуватись/// при resize щоб слайдер автоматично з*явився і сам зник коли буде,наприклад, версія для планшету //load щоб при завантажні теж це працювало(ШТА?Я цю умову не зрозуміла)*/ 
		if($(window).width() > 767) { /*if$(window).width -первіряємо ширину браузера,якщо більше 768рх,то буде виконуватись наступне: */
			if($nav_tabs_slider.hasClass('.slick-initialized')) { /*перевіряється чи є клас .slick-initialized в цій змінній $nav-tabs-slider, і тоді,якщо такий слайд є,то повинен зупинитись сам слайдер....*/
				$nav_tabs_slider.slick('unslick')  /*.slick('unslick') - ми викликаємо сам слайдер, і 'unslick' -зупинити сам слайдер*/
			} 
			return
		} 
		if(!$nav_tabs_slider.hasClass('.slick-initialized'))  /*  ! - значить зворотнє значення, типу коли він не має .slick-initialized класу*/
			return $nav_tabs_slider.slick(settings) /*не розумію чого return поставили*/
	});  

});

