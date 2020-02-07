
     var cards = new Array();
         var of_init = 0;
         var of_end = 7;
          // $(body).load(fonc);

           var fonc = function() {
            console.log('scroll');
             if($(window).scrollTop() == $(document).height() - $(window).height()) {
               
               console.log('collision');

          // ajax call get data from server and append to the div
          $.ajax({
           url : 'api/articles?of_init='+of_init,
           type : 'GET',
      
           success : function(data, statut)
           {
             JSONObject = JSON.parse(data);
             console.log(JSONObject,statut);


             //clone cards and push in card array
             
             for(index = of_init; index < of_end; index ++)
                 {
                 card = $('#variable_card').clone();
                 cards.push(card);
                 }

             //set Attribte of each card from the card array
             for(index = of_init; index < of_end; index ++)
                 {
                 c = cards[index];
                 c.attr("id","card_"+index);
                 }
              
              //clone each card from array to the #parent element

              for(index = of_init; index < of_end; index ++)
             {
              
                cards[index].appendTo('#parent');

                /*
                *set attribute
                */

              //  console.log("initial :"+of_init+",end :"+of_end+",index = "+index);

              // set display
        
              document.getElementById("card_"+index).style="border:none";
              // set main picture
                console.log(JSONObject[index-of_init]['main_picture']);
                document.getElementById("card_"+index).childNodes[1].setAttribute("src",JSONObject[index-of_init]['main_picture']);
  

                // set bagdes tags
          
                 console.log("tags:"+JSONObject[index-of_init]['tags']);
                  for(j = 0; j< JSONObject[index-of_init]['tags'].length; j++)
                  {
                    t= document.getElementById("card_"+index).childNodes[3].childNodes[5]; 
                    t.innerText = JSONObject[index-of_init]['tags'][j];
                }
                //set title
                document.getElementById("card_"+index).childNodes[5].childNodes[1].innerText =JSONObject[index-of_init]['title'];
                //set link
                //link:'articles/?post='.data_id."_1"
                document.getElementById("card_"+index).childNodes[5].childNodes[5].innerText="Read More &rarr";
               document.getElementById("card_"+index).childNodes[5].childNodes[5].setAttribute("href","articles/?post="+JSONObject[index-of_init]['id']+"_1");



             }

             //computing offset
             of_init += 7;
             of_end += 7;

           }
               });

   }
}