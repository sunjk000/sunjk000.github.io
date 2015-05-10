$(document).ready(function() {
		
  $('.blogButton').click(function() {
    if (window.location.hash && window.location.hash == "#blog") return;
    if ($('.maskView').hasClass('cover-view-up')) return;
		$('.maskView').css('-webkit-animation','cover-view-up 0.5s ease-out 1');
		animationCoverUp();
  });

  if (window.location.hash && window.location.hash == "#blog") {
   	animationCoverUp();
  }
  
});

function animationCoverUp() {
	$('.maskView').addClass('cover-view-up');
  $('.actionButton').addClass('hidden');
  $('.welcome').addClass('hidden');
  $('.headTitle').addClass('headTitle-cover-view-up');
  $('.rightTitle').removeClass('hidden');
  $('.footer').removeClass('hidden');
  
  initCss();
}

function initCss() {
	$('body').css("overflow", "auto");
  $('.mainContent').css("height", "auto");
  $('.mainContent').css("overflow-y", "auto");
	var currentWidth = document.body.clientWidth;//window.screen.availWidth;
  if (currentWidth < 600) {
  	$('.mainContent').css("margin-top", "54px");
	}	
}