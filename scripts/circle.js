(function () {
    
    var circle = document.querySelectorAll(".circle");
    var circlePara = document.querySelector("section:nth-of-type(2) > p:nth-child(4)");
    var circleBy = document.querySelector("section:nth-of-type(2) > p:nth-child(5)");
    var degCounter = 0;
    var stringDeg;
    var circleCounter = 1;
    
    function makeArray(nodeList)
    {
        var arr = [];
        
        for(var i = 0; i < nodeList.length; i++)
            {
                arr.push(nodeList[i]);
            }

        return arr;
    
    }
    
    function changeCircle(e)
    {
        var target = e.target;
        var circleArr = makeArray(circle);
        var indexCircle = circleArr.indexOf(target);
        
        switch(indexCircle)
                {
                    case 0:
                        {
                            degCounter = 0;
                            circleCounter = 1;
                            textPivot();

                        } break;

                        case 1:
                        {
                            degCounter = 0;
                            circleCounter = 2;
                            textPivot();
                        } break;

                        case 2:
                        {
                            degCounter = 0;
                            circleCounter = 3;
                            textPivot();
                        } break;
                }
    }
    
    function textPivot()
    {
        var rotate = "rotateY(" + stringDeg + "deg)";
        
        if(degCounter <= 360)
            {
                stringDeg = degCounter.toString();

                degCounter = degCounter + 2;
                circlePara.style.transform = rotate;
                circleBy.style.transform = rotate;

                setTimeout(textPivot, 1);
            }
        if(degCounter === 90 && circleCounter === 1)
            {
               circlePara.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.";
               circleBy.textContent = "John Doe CEO at Unknown";
            }
        if(degCounter === 90 && circleCounter === 2)
            {
               circlePara.textContent = "Imperare sibi maximum est imperium";
               circleBy.textContent = "Lucius Annaeus Seneca";

            }
        if(degCounter === 90 && circleCounter === 3)
            {
                circlePara.textContent = "Aut viam inveniam aut faciam";
                circleBy.textContent = "Hannibal";
            }
        
    }
    
    for(var i = 0; i < circle.length; i++)
    {
        circle[i].addEventListener("click", changeCircle, false);
    }
        for(var i = 0; i < circle.length; i++)
    {
       
        circle[i].addEventListener("keydown", function(e)
        {
            if(e.keyCode === 13)
                {
                    changeCircle(e);
                }
        }, false);
    }
    
}());