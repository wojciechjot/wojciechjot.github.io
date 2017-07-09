(function (){
    
    var body = document.querySelector("body");
    var nav = document.querySelector("nav");  
    var hamburgerIcon =document.querySelector("#hamburgerIcon");
    var hamburgerMenu = document.querySelector("#hamburgerMenu");
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

}());