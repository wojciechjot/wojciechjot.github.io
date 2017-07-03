(function () {
    
    var pinterest = document.querySelector(".pinterest");
    var pinterestSpan = document.querySelector(".pinterestSpan");

    var instagram = document.querySelector(".instagram");
    var instagramSpan = document.querySelector(".instagramSpan");

    var google = document.querySelector(".google");
    var googleSpan = document.querySelector(".googleSpan");

    var twitter = document.querySelector(".twitter");
    var twitterSpan = document.querySelector(".twitterSpan");

    var tumblr = document.querySelector(".tumblr");
    var tumblrSpan = document.querySelector(".tumblrSpan");
    
    pinterest.onmouseover = function() 
    {
        pinterest.style.border = "1px solid #e6b5b5";
        pinterestSpan.classList.add("pinterestHover");
    }

    pinterest.onmouseleave = function() 
    {
        pinterest.style.border = "1px solid #ffffff";
        pinterestSpan.classList.remove("pinterestHover");
    }

    instagram.onmouseover = function() 
    {
        instagram.style.border = "1px solid #e6b5b5";
        instagramSpan.classList.add("instagramHover");
    }

    instagram.onmouseleave = function() 
    {
        instagram.style.border = "1px solid #ffffff";
        instagramSpan.classList.remove("instagramHover");
    }

    twitter.onmouseover = function() 
    {
        twitter.style.border = "1px solid #e6b5b5";
        twitterSpan.classList.add("twitterHover");
    }

    twitter.onmouseleave = function() 
    {
        twitter.style.border = "1px solid #ffffff";
        twitterSpan.classList.remove("twitterHover");
    }

    google.onmouseover = function() 
    {
        google.style.border = "1px solid #e6b5b5";
        googleSpan.classList.add("googleHover");
    }

    google.onmouseleave = function() 
    {
        google.style.border = "1px solid #ffffff";
        googleSpan.classList.remove("googleHover");
    }

    tumblr.onmouseover = function() 
    {
        tumblr.style.border = "1px solid #e6b5b5";
        tumblrSpan.classList.add("tumblrHover");
    }

    tumblr.onmouseleave = function() 
    {
        tumblr.style.border = "1px solid #ffffff";
        tumblrSpan.classList.remove("tumblrHover");
    }
    
}());