jQuery(document).ready(function() {	
	
	// Place Holder Forms
    $('input, textarea').placeholder();
		
	// Button Animation
	$(".op").css("opacity", 1.0);
    $(".op").hover(function() {
        $(this).animate({opacity: 0.8}, 200);
    }, function() {
        $(this).animate({opacity: 1.0}, 200);
    });
	
	// Same Height
	equalHeight($(".sameHeight1"));	
	equalHeight($(".sameHeight2"));	
	equalHeight($(".sameHeight3"));	
	equalHeight($(".sameHeight4"));	
	equalHeight($(".sameHeight5"));	
	
	


	$('.listview').click(function () {
		$('.listview').addClass('active');
		$('.gridview, .gridviewlg').removeClass('active');
		$('.horizContainer').removeClass('hide');
		$('.horizContainer').addClass('animated fadeInDown');
		$('.gridContainer, .gridlgContainer').each(function () {
			$(this).addClass('hide');
			$(this).removeClass('animated fadeInDown');
			$('.togglewidth').addClass('col-md-9');
			$('.togglewidth').removeClass('col-md-12');
			$('.cart').removeClass('hide');
			 
		});
	});
	
	$('.gridview').click(function () {
		$('.gridview').addClass('active');
		$('.listview, .gridviewlg').removeClass('active');
		$('.gridContainer').removeClass('hide');
		$('.gridContainer').addClass('animated fadeInDown');
		$('.horizContainer, .gridlgContainer').each(function () {
			$(this).addClass('hide');
			$(this).removeClass('animated fadeInDown');
			$('.togglewidth').removeClass('col-md-9');
			$('.togglewidth').addClass('col-md-12');
			$('.cart').addClass('hide');
			
		});
	});


	$('.gridviewlg').click(function () {
		$('.gridviewlg').addClass('active');
		$('.listview, .gridview').removeClass('active');
		$('.gridlgContainer').removeClass('hide');
		$('.gridlgContainer').addClass('animated fadeInDown');
 		$('.horizContainer, .gridContainer').each(function () {
			$(this).addClass('hide');
			$(this).removeClass('animated fadeInDown');
			$('.togglewidth').removeClass('col-md-9');
			$('.togglewidth').addClass('col-md-12');
			$('.cart').addClass('hide');
			 
		});
	});


	
});


function showAllFeat(serviceID){
	var showHide = 0;
	$(serviceID).parent().children().each(function(){
		if($(this).hasClass('show_feat')){
			showHide++;
		}
	});
	if(showHide<=2){
		$('.bullet-2').removeAttr('style');
		$(serviceID).parent().find('li').each(function(){
			if($(this).hasClass('show_feat') == false){
				$(this).addClass('show_feat');
			}
		});
		$(serviceID).text('[-] hide');
	}else{
		var hiddenFeat = 1;
		$('.bullet-2').removeAttr('style');
		$(serviceID).parent().find('li').each(function(){
			$(this).removeClass('show_feat');
		});
		$(serviceID).parent().find('li').each(function(){
			if(hiddenFeat <= 2){
				$(this).addClass('show_feat');
			}
			hiddenFeat++;
		});
		$(serviceID).text('[+] more');

	}
	sameHeight();
}
