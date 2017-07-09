var article = document.querySelector("article:nth-of-type(1)");
var wrapper = document.querySelector("#worksWrapper");
var addon = document.querySelector("#addonDown");

var btn = document.querySelector("#btn");
var para = document.querySelector("#btn p");
var counter = 0;
var buttonCounter = 0;

var numberArticle = 1514;
var stringArticle = numberArticle.toString();
var pixelsArticle = stringArticle + "px";

var numberWrapper = 1152;
var stringWrapper = numberWrapper.toString();
var pixelsWrapper = stringWrapper + "px";

var numberAddon = 0;
var stringAddon = numberAddon.toString();
var pixelsAddon = stringAddon + "px";

var pic7 = document.querySelector(".type5");
var pic8 = document.querySelector(".type6");
var pics = [pic7,pic8];
var stringOpacity;
var opacityValue;

var width = window.innerWidth;

var startString;

btn.addEventListener("click", changeHeight, false);

function changeHeight(e)
{
     if(buttonCounter === 0)
        {
            if(window.innerWidth > 862 && window.innerWidth < 1280 )
            {
                change("flex", "1", "800px", "3470px", "3195px", "hide", 1);
                entry(200, 0, 0, "right", 0);
                entry(0-200, 0, 1, "left", 0);
            }
        else if(window.innerWidth < 861)
            {
                change("flex", "1", "800px", "3850px", "3550px", "hide", 1);
                entry(200, 0, 0, "right", 0);
                entry(0-200, 0, 1, "left", 0);
            }
        else
            {
                bigger();
            }
        }
    
      else
        {
            if(window.innerWidth > 862 && window.innerWidth < 1280 )
                {
                  //  entry(0, 200, 0, "right");
                  //  entry(0, 0-200, 1, "left");
                    entry(0, 400, 0, "right", 1);
                    entry(0 , 0-200, 1, "left", 1);
                    /*change("none", "0", "0px", "2550px", "2300px", "load more", 0);*/
                }
            else if(window.innerWidth < 861)
                {
                    entry(0, 400, 0, "right", 1);
                    entry(0 , 0-200, 1, "left", 1);
                    /*change("none", "0", "0px", "3050px", "2720px", "load more", 0);*/
                }
            else
                {
                    smaller();
                }
        }
}

function bigger()
{
    pic7.style.display= "flex";
    pic8.style.display= "flex"; 
    
    addon.style.display= "flex";
  if(counter <= 99)
    {
        stringArticle = numberArticle.toString();
        pixelsArticle = stringArticle + "px";
      
        stringWrapper = numberWrapper.toString();
        pixelsWrapper = stringWrapper + "px";
        
        stringAddon = numberAddon.toString();
        pixelsAddon = stringAddon + "px";
        
        opacityValue = counter * 0.01;
        stringOpacity = opacityValue.toString();
      
        counter++;
        numberArticle = numberArticle + 4;
        numberWrapper = numberWrapper + 4;
        numberAddon = numberAddon + 4;
        article.style.height = pixelsArticle;
        wrapper.style.height = pixelsWrapper;
        addon.style.height = pixelsAddon;
        pic7.style.opacity = stringOpacity;
        pic8.style.opacity = stringOpacity;
    
        setTimeout(bigger, 1);
    }
   
    if(counter === 100)
        {
            wrapper.style.height = "1547px";
            para.textContent= "hide";
        }
    
  buttonCounter = 1;
    
  if(counter < 99)
    btn.style.pointerEvents = "none";
  else
    btn.style.pointerEvents = "auto";
    
    
}

function smaller()
{
    
  if(counter <= 100 && counter >= 1)
    {
        stringArticle = numberArticle.toString();
        pixelsArticle = stringArticle + "px";
      
        stringWrapper = numberWrapper.toString();
        pixelsWrapper = stringWrapper + "px";
        
        stringAddon = numberAddon.toString();
        pixelsAddon = stringAddon + "px";
        
        opacityValue = counter * 0.01;
        stringOpacity = opacityValue.toString();
        
      
        counter--;
        numberArticle = numberArticle - 4;
        numberWrapper = numberWrapper - 4;
        numberAddon = numberAddon - 4;
        article.style.height = pixelsArticle;
        wrapper.style.height = pixelsWrapper;
        addon.style.height = pixelsAddon;
        pic7.style.opacity = stringOpacity;
        pic8.style.opacity = stringOpacity;
        setTimeout(smaller, 1);
    }
    
    if(counter === 0)
        {
            article.style.height = "1514px";
            wrapper.style.height = "1152px";
            pic7.style.display= "none";
            pic8.style.display= "none";
            para.textContent = "load more";
            addon.style.display = "none";
        }
    
  buttonCounter = 0;
  
  if(counter > 0)
    btn.style.pointerEvents = "none";
  else
    btn.style.pointerEvents = "auto";
}

function change(display, opacity, addonHeight, articleHeight, wrapperHeight, text, bCounter)
{
    pic7.style.display = display;
    pic7.style.opacity = opacity;
    
    pic8.style.display = display; 
    pic8.style.opacity = opacity; 
    
    addon.style.display = display;
    addon.style.height = addonHeight;

    article.style.height = articleHeight;
    wrapper.style.height = wrapperHeight;
    para.textContent= text;
    buttonCounter = bCounter;
    
}

function entry(start, end, number, direction, inOut)
{
     
    if(Math.abs(start) > end && inOut === 0)
        {
           
            if(direction === "right")
                {
                     start = start - 2;
                }
            else
                {
                     start = start + 2;
                }
            startString = start.toString() + "%";
            pics[number].style.marginRight = startString;
            
            
        }
    
    else if(inOut === 1 && Math.abs(start) < 410)
        {
        
            if(direction === "right")
                {
                     start = start - 2;
                }
            else
                {
                    start = start + 2;
                }
         
            startString = start.toString() + "%";
            pics[number].style.marginRight = startString;
        }

           
            setTimeout(function(){entry(start, end, number, direction, inOut);}, 1); 
        
    if(Math.abs(start) === 400)
       {
           if(window.innerWidth > 862 && window.innerWidth < 1280)
               {
                   change("none", "0", "0px", "2550px", "2300px", "load more", 0);
               }
           else
               {
                   change("none", "0", "0px", "3050px", "2720px", "load more", 0);
               }
            
       }
        
}