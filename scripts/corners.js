var pic1 = document.querySelector(".type1");
var pic2 = document.querySelector(".type2");
var pic3 = document.querySelector(".type2:nth-child(2)");
var pic4 = document.querySelector(".type1:nth-child(3)");
var pic5 = document.querySelector(".type3");
var pic6 = document.querySelector(".type4");
var pic7 = document.querySelector(".type5");
var pic8 = document.querySelector(".type6");

var corners = document.querySelectorAll(".cornerBorder");



function makeArray(nodeList)
{
    var arr = [];
    for(var i = 0; i < nodeList.length; i++)
        {
            arr.push(nodeList[i]);
        }
    
    return arr;
    
}

function choicePic(number, width, height, padding, widthM, heightM, paddingM, counter)
    {   

        for(i = 1; i<=number; i++)
            {
                if(i == number)
                    {
                        
                        
                        if(counter === 0)
                            {
                                corners[i-1].style.animation = "animationBorder 0.3s linear";
                            }
                        else
                            {
                                corners[i-1].style.animation = "none";
                            }
                        
                        if(window.innerWidth > 1280)
                            {
                                corners[i-1].style.width = width;
                                corners[i-1].style.height= height ;
                                corners[i-1].style.paddingTop= padding;
                            }
        
                        else if(window.innerWidth < 1280)
                            {
                                corners[i-1].style.width = widthM;
                                corners[i-1].style.height= heightM ;
                                corners[i-1].style.paddingTop= paddingM;
                            }
                    }
            }
    }

pic1.addEventListener("mouseover", function(e)
    {
        choicePic(1, "336px", "155px", "87px", "230px", "105px", "45px", 0);
    }, false);

pic1.addEventListener("mouseleave", function(e)
    {
        choicePic(1, "204px", "73px", "5px", "180px", "65px", "5px", 1);
    }, false);

pic2.addEventListener("mouseover", function(e)
    {
        choicePic(2, "336px", "155px", "87px", "230px", "105px", "45px", 0);
    }, false);

pic2.addEventListener("mouseleave", function(e)
    {
        choicePic(2, "204px", "73px", "5px", "180px", "65px", "5px", 1);
    }, false);

pic3.addEventListener("mouseover", function(e)
    {
        choicePic(3, "336px", "155px", "87px", "230px", "105px", "45px", 0);
    }, false);

pic3.addEventListener("mouseleave", function(e)
    {
        choicePic(3, "204px", "73px", "5px", "180px", "65px", "5px", 1);
    }, false);

pic4.addEventListener("mouseover", function(e)
    {
        choicePic(4, "336px", "155px", "87px", "230px", "105px", "45px", 0);
    }, false);

pic4.addEventListener("mouseleave", function(e)
    {
        choicePic(4, "262px", "73px", "5px", "222px", "65px", "5px", 1);
    }, false);

pic5.addEventListener("mouseover", function(e)
    {
        choicePic(5, "336px", "155px", "87px", "230px", "105px", "45px", 0);
    }, false);

pic5.addEventListener("mouseleave", function(e)
    {
        choicePic(5, "204px", "73px", "5px", "180px", "65px", "5px", 1);
    }, false);

pic6.addEventListener("mouseover", function(e)
    {
        choicePic(6, "336px", "155px", "87px", "230px", "105px", "45px", 0);
    }, false);

pic6.addEventListener("mouseleave", function(e)
    {
        choicePic(6, "204px", "73px", "5px", "180px", "65px", "5px", 1);
    }, false);

pic7.addEventListener("mouseover", function(e)
    {
        choicePic(7, "336px", "155px", "87px", "230px", "105px", "45px", 0);
    }, false);

pic7.addEventListener("mouseleave", function(e)
    {
        choicePic(7, "204px", "73px", "5px", "180px", "65px", "5px", 1);
    }, false);

pic8.addEventListener("mouseover", function(e)
    {
        choicePic(8, "336px", "155px", "87px", "230px", "105px", "45px", 0);
    }, false);

pic8.addEventListener("mouseleave", function(e)
    {
        choicePic(8, "204px", "73px", "5px", "180px", "65px", "5px", 1);
    }, false);