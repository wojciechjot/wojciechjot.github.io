(function (){
    
    var body = document.querySelector("body");
    var nav = document.querySelector("nav");  
    var hamburgerIcon =document.querySelector("#hamburgerIcon");
    var hamburgerMenu = document.querySelector("#hamburgerMenu");
    var links = document.querySelectorAll("a");
    var arrow = document.querySelector(".arrowUp");
    var rightCounter = -200;
    var rightString;
    var right;
    var isHamburger = false;


    window.addEventListener("scroll", function(e)
    {
        if(document.body.scrollTop >= 680)
        {
            nav.classList.add("FixedNav"); 
        }
        else
        {
            nav.classList.remove("FixedNav");     
        }
    }, false);
    
     for(var i = 0; i < links.length; i++)
    {
        links[i].onclick = goTo;
    }
    
    function goTo(e)
    {
        e.preventDefault();

        var target = e.target;
        var linksArr = makeArray(links);
        var index = linksArr.indexOf(target);

        switch(index)
            {
            case 0:
                {
                    change("none", "0", "0px", "3050px", "2720px", "load more", 0);
                    shift(330, 390, 440);
                    //About Mobile
                    
                } break;
            case 1:
                {
                    change("none", "0", "0px", "3050px", "2720px", "load more", 0);
                    shift(680, 730, 780);
                    //Works Mobile
                    
                } break;
            case 2:
                {
                    change("none", "0", "0px", "3050px", "2720px", "load more", 0);
                    shift(5300, 5350, 5400);
                    //Contact Mobile
                    
                } break;
            case 3:
                {
                    change("none", "0", "0px", "3050px", "2720px", "load more", 0);
                    shift(4700, 4750, 4800);;
                    //Follow Mobile
                    
                } break;
            case 4:
                {
                    if(window.innerWidth > 862 && window.innerWidth < 1280)
                    {
                        change("none", "0", "0px", "2550px", "2300px", "load more", 0);
                        shift(580, 680, 730);
                    }
                    else
                    {
                        smaller();
                        shift(580, 680, 780);
                    }
                    //About
                   
                   
                } break;
            case 5:
                {
                    if(window.innerWidth > 862 && window.innerWidth < 1280)
                    {
                        change("none", "0", "0px", "2550px", "2300px", "load more", 0);
                        shift(900, 1000, 1100);
                    }
                    else
                    {
                        smaller();
                        shift(900, 1000, 1100);
                    }
                    //Works
                   
                } break;
            case 6:
                {
                    if(window.innerWidth > 862 && window.innerWidth < 1280)
                    {
                        change("none", "0", "0px", "2550px", "2300px", "load more", 0);
                        shift(4800, 4900, 5000);
                    }
                    else
                    {
                        smaller();
                        shift(3770, 3870, 3970);
                    }
                    //Contact
                    
                } break;
            case 7:
                {
                    if(window.innerWidth > 862 && window.innerWidth < 1280)
                    {
                        change("none", "0", "0px", "2550px", "2300px", "load more", 0);
                        shift(4400, 4500, 4600);
                    }
                    else
                    {
                        smaller();
                        shift(3350, 3450, 3550);
                    }
                    //Follow me
                    
                } break;
            }
    }

    function makeArray(nodeList)
    {
        var arr = [];
        for(var i = 0; i < nodeList.length; i++)
            {
                arr.push(nodeList[i]);
            }

        return arr;

    }
    
    function shift(param1, param2, param3)
    {
        
        if(document.body.scrollTop < param1)
            {
                window.scrollBy(0, 15);
                setTimeout(function(){shift(param1, param2, param3)}, 1);
            }
        else if(document.body.scrollTop < param2)
            {
                window.scrollBy(0, 1);
                setTimeout(function(){shift(param1, param2, param3)}, 1);
            }
        else if(document.body.scrollTop > param2 && document.body.scrollTop <= param3)
            {
                window.scrollBy(0, -1);
                setTimeout(function(){shift(param1, param2, param3)}, 1);
            }
        else if(document.body.scrollTop > param3)
            {
                window.scrollBy(0, -15);
                setTimeout(function(){shift(param1, param2, param3)}, 1);
            }

         if(document.body.scrollTop === param2)
            nav.style.pointerEvents = "auto";

         else
            nav.style.pointerEvents = "none";
        
    }
    
    
    
    hamburgerIcon.addEventListener("click", function(e)
    {
        hamburgerIcon.style.display = "none";
        hamburgerMenu.style.display = "block";
        
        showHamburger(); 
        
    }, false);
    
    hamburgerMenu.addEventListener("click", function(e)
    {
        hamburgerIcon.style.display = "block";
        hideHamburger();
        
        
        
    }, false);
    
    body.addEventListener("click", function()
    {
       if(isHamburger === true)
           {
               hideHamburger();
               hamburgerIcon.style.display = "block";
               isHamburger = false;
           }
        
    }, false);

    function showHamburger()
    {
       
        
        if(rightCounter < 0)
            {
                rightCounter = rightCounter + 5;
                rightString = rightCounter.toString();
                right = rightCounter + "px";
                hamburgerMenu.style.right = right;
                setTimeout(showHamburger, 1); 
            }
        
        if(rightCounter === 0)
            {
                      
                isHamburger = true;
            }
        
    }
    
    function hideHamburger()
    {
    
        if(rightCounter > -200)
            {
                
                rightCounter = rightCounter - 5;
                rightString = rightCounter.toString();
                right = rightCounter + "px";
                hamburgerMenu.style.right = right;
                setTimeout(hideHamburger, 1); 
            }
        
    }
    
    arrow.addEventListener("click", function(e)
    {
         shift(630, 680, 730);
        
    }, false)
    
}());