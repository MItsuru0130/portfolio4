$(function(){
/*ヘッダー左部分をクリックでページトップに戻る*/
	$('#scrollTop').click(function(){
		$('html,body').animate({
		'scrollTop':0
		},'slow');		
});
	
/*色の付いたボタンをオスと対応した画像が表示される*/
	$('.iittala-button').click(function(){
		$('.active').removeClass('active');
		var clickedIittalabutton=$('.iittala-button').index((this));
		$('.iittala-slide').eq(clickedIittalabutton).addClass('active');
	});
});