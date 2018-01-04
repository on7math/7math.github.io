var questionScroll;
var showingLesson = false;
var $lesson;
$(document).ready(function(){
	questionScroll = $("section.questions").offset().top;
	
	$("#show-lesson").click(function(){
			showingLesson = true;
			if(typeof lesson=="undefined")
			{
				var main = $(document.body).find("main");
				var article = $(document.body).find("article.lesson");
				lesson = $(document.createElement("div"));
				lesson.appendTo(document.body);
				lesson.addClass("group");
			
				lessonInner = article.clone().appendTo(lesson);
			
				var left = article.offset().left;
				lessonInner.css({
					"background-color" : "white",
					"max-width" : "525px",
					"height": "100vh",
					"padding" : "10px 25px"
				});
			
				lesson.css({
					position : "fixed",
					"left" : left,
					"z-index":"7",
					top: "0"
				});
			
				main.animate({
					"left" : "25%"
				},400);
			

				var lessonLeft = ($(document.body).width() *0.25)-$(lesson).outerWidth()/2;
			
				$(lesson).animate({
					"left":lessonLeft
				},350,function(){
					$(lessonInner).css({
						"overflow" : "scroll",
					});
					var hider = $(document.body).find("#hide-lesson");
					hider.css();
					hider.show();
				});
					
			}
			
	});
	
});



$(window).scroll(function(){
	var scroll = $(window).scrollTop()
	if(scroll>=questionScroll)
	{
		$("#show-lesson").fadeIn("fast");
		/*if(!showingLesson)
		{
			showingLesson = true;
			var article = $(document.body).find("article.lesson");
			lesson = $(document.createElement("div"));
			lesson.appendTo(document.body);
			lesson.addClass("group");
			
			lessonInner = article.clone().appendTo(lesson);
			lessonInner.css({
				"background-color" : "white",
				"max-width" : "525px",
				"overflow" : "scroll",
				"height": "100vh",
				"padding" : "10px 25px"
			});
			
			lesson.css({
				position : "fixed",
				"display":"none",
				top: "0"
			});
			$(lesson).slideDown( "slow" );
		}*/
		
	}else{
		$("#show-lesson").hide();
		/*if(showingLesson)
		{
			showingLesson = false;
			
		}*/
	}
});