var slideArray = new Array()
			slideArray[0]= "'No! Try not. Do or do not. There is no try.' <br><br>-Master Yoda";
			slideArray[1]= "'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.' <br><br>-Master Yoda";
			slideArray[2]= "'Always pass on what you have learned.' <br><br>-Master Yoda";
			slideArray[3]= "'Named, must your fear be, before banish it, you can.' <br><br>-Master Yoda";
			slideArray[4]= "'It always seems impossible until it's done' <br><br>- Nelson Mandela";
			slideArray[5]= "'Everyone can rise above their circumstances and achieve success if they are dedicated to and passionate about what they do.' <br><br>-Nelson Mandela";
			slideArray[6]= "'Do not judge me by my successes, judge me by how many times I fell down and got back up again.' <br><br>-Nelson Mandela";
			slideArray[7]= "'There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.' <br><br>-Dalai Lama";
			slideArray[8]= "'I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.' <br><br>-Dalai Lama";
			slideArray[9]= "'Character is defined by the decisions we make when no one is looking.' <br><br>-me";
			
			slideArray = shuffle(slideArray)



			var current_slide = 0;
			// Based on code by Jonas Raoni Soares Silva
			// http://jsfromhell.com/array/shuffle [v1.0]

			function shuffle(o){ //v1.0
			    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			    return o;
			};

			function quoteSlideShow()
				{ 
					document.getElementById('quoteBox').innerHTML = slideArray[current_slide];
					if (current_slide < slideArray.length - 1) {
						current_slide++
					}
					else {
						slideArray = shuffle(slideArray);
						current_slide = 0;
					}
					timer = setTimeout("quoteSlideShow()", 3500);
				}

			function stopShow() {
				  clearTimeout(timer);
				}

			function runShow() {
				  quoteSlideShow();  
				}