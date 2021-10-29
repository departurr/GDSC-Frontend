$(document).ready(function(){
	
	$(".movie-image").hover(function(){
		$(this).find(".play").show();

	},
	function()
	{
		$(this).find(".play").hide();
	});


	$(".blink").focus(function() {
            if(this.title==this.value) {
                this.value = '';
            }
        })
        .blur(function(){
            if(this.value=='') {
                this.value = this.title;                    
			}
		});
});

$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});

