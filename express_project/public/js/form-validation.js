// filename: form-validation.js

$(function()
{
    var $registerForm=$("#register");
     
    $registerForm.validate({
        rules:{
            name:{
                required:true,
                letteronly:true
            },
            phonenumber:{
                required:true,
                numericonly:true
                
            },
            email:{
                required:true,
                email:true
            },
            subject:
            {
                required:true,
                letteronly:true
            },
            usermsg:
            {
                required:true
            }



        },
        messages:
        {
            name:{
                required:'name required',
                letteronly:'invalid name'

            },
            phonenumber:{
                required:'phonenumber required',
                numericonly:'invalid phno'
               
            },
            email:{
                required:'email required',
                email:'invalid email',
                
            },
            subject:
            {
                required:'subject required',
                letteronly:'invalid subject'
            },
            usermsg:
            {
                required:'message required',
                
            }


        }



    })
    jQuery.validator.addMethod('letteronly',function(value,element){
        return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
    });

    //For checking number,rejax
    jQuery.validator.addMethod('numericonly',function(value,element){
        return /^[0-9]+$/.test(value);
    });
    

})