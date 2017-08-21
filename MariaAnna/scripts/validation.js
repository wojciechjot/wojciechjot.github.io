(function() {
    
    var form = document.querySelector("#myForm");
    var fields = document.querySelectorAll("[data-error]");
    var regex = /\w+@\w+\.\w{2,4}/;

    
    function isNotEmpty(field)
    {
        return field.value !== "";
    }
    
    function isEmail(field)
    {
        var test = regex.exec(field.value);
        return test;
    }
    
    function isAtLeast(field, min)
    {
        return field.value.length >= min;
    }

    form.addEventListener("submit", function(e){
        
        e.preventDefault();
      
        var errors = [];
        
        for(var i = 0; i < fields.length; i++)
            {
                var field = fields[i];
                var isValid = false;
                
                if(field.type === "text")
                    {
                        isValid = isNotEmpty(field);
                    }
                if(field.type === "email")
                    {
                        isValid = isEmail(field);
                    }
                if(field.type === "textarea")
                    {
                        isValid = isAtLeast(field, 3)
                    }
                
                if(!isValid)
                    {
                        field.classList.add("error");
                        errors.push(field.dataset.error);
                    }
                else
                    {
                        field.classList.remove("error");
                    }
                
           
            }
        
        if(!errors.length)
            {
                form.submit();
            }
        
    }, false);
    
})();