$(document).ready(function() {
	
	/*Search slideUp/Down */
	$("#hofsosSearch").click(function () {
		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$("#hofsosSearchDropdown").slideUp();
        	document.getElementById("iconSearchImg").src="icon/iconSearchWhite.svg";
        	$(".whatToBlur").removeClass("blur");
	    }
	    else{
	    	$(this).addClass("open");
	        $("#hofsosSearchDropdown").slideDown();
	        document.getElementById("iconSearchImg").src="icon/close.svg";
	        $(".whatToBlur").addClass("blur");
	    }
    });
    
    //MixItUp for the cards
    $(function(){
        //makes sure that the small cards stay hidden
        $('.cardsSmall').css('display', 'none');
        $('#cardsBig').mixItUp();
    });

    //Change from small to big cards or big to small
    $("#smallOption").click(function () {
    	$('.cardsSmall').css('display', 'block');
    	$('.cardsBig').css('display', 'none');
    	document.getElementById("bigIcon").src="icon/numb4Grey.svg";
    	document.getElementById("smallIcon").src="icon/numb16Blue.svg";
        $(function(){
            $('#cardsSmall').mixItUp();
        });
	});
	$("#bigOption").click(function () {
    	$('.cardsBig').css('display', 'block');
    	$('.cardsSmall').css('display', 'none');
    	document.getElementById("bigIcon").src="icon/numb4.jpg";
    	document.getElementById("smallIcon").src="icon/numb16.jpg";
	});

	/*Hofsós owlCarousel*/
	$('.owl-carousel').owlCarousel({
		loop:true,
	    margin:30,
	    pullDrag:true,
	    slideBy:1,
	    autoplay:true,
	    autoplayTimeout:3000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	/* Search typeahead */
	var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
	        var matches, substringRegex;
	        // an array that will be populated with substring matches
	        matches = [];
            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');
            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
            	if (substrRegex.test(str)) {
                	matches.push(str);
              	}
            });
            cb(matches);
            //Goes to underside on click
            $('.tt-suggestion').each(function(){
                $(this).click(function () {
                    
                    //console.log($(this).text());
                    //Goes to Hofsós side from the search
                    if($(this).text() === "Hofsóslaug"){
                        window.location.href = 'undirsida.html';
                    }
                    //filters and shows all pools in Reykjavík
                    else if($(this).text() === "Reykjavík" || "Höfuðborgin"){
                        $('#cardsBig').mixItUp('filter', '.hb');
                        $('#cardsSmall').mixItUp('filter', '.hb');
                    }
                    else if($(this).text() === "Vesturland"){
                        $('#cardsBig').mixItUp('filter', '.ve');
                        $('#cardsSmall').mixItUp('filter', '.ve');
                    }
                    else if($(this).text() === "Suðurland"){
                        $('#cardsBig').mixItUp('filter', '.su');
                        $('#cardsSmall').mixItUp('filter', '.su');
                    }
                    else if($(this).text() === "Austurland"){
                        $('#cardsBig').mixItUp('filter', '.au');
                        $('#cardsSmall').mixItUp('filter', '.au');
                    }
                    else if($(this).text() === "Norðurland"){
                        $('#cardsBig').mixItUp('filter', '.no');
                        $('#cardsSmall').mixItUp('filter', '.no');
                    }
                });
            });
        };
    };
    var states = ["Hofsóslaug", "Höfuðborgin",
        "Vesturland", "Hoppukastali", "Laugardalslaug",
    	"Lágafellslaug", "Austurland", "Suðurland",
        "Norðurland", "Krossneslaug", "Breiðholtslaug",
        "Rennibraut", "Gufubað", "Heitur pottur",
        "Útisundlaug", "Innisundlaug", "Vaðlaug",
        "Eimbað", "Akureyrarlaug", "Stökkbretti",
        "Dýfingar", "Akureyri", "Reykjavík",
        "Sundhöll Reykjavíkur", "Hveragerði", "Selfoss",
        "Nauthólsvík", "Sjósund", "Gravarvogslaug",
        "Sundnámskeið", "Kópavogslaug", "Salalaug"
    ];
    $("#the-basics .typeahead").typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: substringMatcher(states)
    });
    



    //To Top
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }   
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }


    //Mobile button for to pick places
    $("#velja_stad_takki").click(function() {
        $("#stad-val").slideDown();
        $(".baksida_main").addClass("blur");
    });
    $(".myMobileButton").click(function() {
        $("#stad-val").slideUp();
        $(".baksida_main").removeClass("blur");
    });


});






