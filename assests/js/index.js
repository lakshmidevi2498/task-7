
function validate()
    
{ 
     var a = "";

   
    var re=abc();  
    if(re=="W")
    {
        var re1=abc1(re);
             
        if(re1=="WO")
        { 
            var re2=abc2(re1);
            if(re2=="WOR")
            {
                var re3= abc3(re2);
                     
                if(re3=="WORR")
                {
                    var re4= abc4(re3);
                        
                    if(re4=="WORRY")
                    {
                        var re5= abc5(re4);
                            
                        if(re5=="WORRYL")
                        {
                            var re6=abc6(re5);
                            
                            if(re6=="WORRYLE")
                            {
                                var re7= abc7(re6);
                                
                                if(re7=="WORRYLES")
                                {  
                                    var re8 =abc8(re7);
                                            
                                        console.log(re8);
                                        if(re8=="WORRYLESS")
                                        {  
                                        let hi = document.getElementById("modall");
                                                hi.style.display = "block";
                                            }
                                }
                                else{
                                    document.getElementById("chp").style.display = "none"; 
                                }
                            }
                            else
                            {
                                        
                                document.getElementById("country-error").style.display = "none";
                                document.getElementById('country').style.border = "2px solid black";
                            
                                    document.getElementById("chp").style.display = "none"; 
                            }

                        }
                        else
                        {
                        

                        document.getElementById('state-error').style.display = "none";
                        document.getElementById('state').style.border = "2px solid black";
            
                        document.getElementById("country-error").style.display = "none";
                        document.getElementById('country').style.border = "2px solid black";
            
                        document.getElementById("chp").style.display = "none";
                        }
                    }
                    else
                    {
                            
                        
                        
                     document.getElementById("error").style.display = "none";
    
                    document.getElementById('state-error').style.display = "none";
                    document.getElementById('state').style.border = "2px solid black";
            
                    document.getElementById("country-error").style.display = "none";
                    document.getElementById('country').style.border = "2px solid black";
            
                    document.getElementById("chp").style.display = "none"; 
                    }
                       
                }
                else
                {
            

                    
                document.getElementById('fnpp').style.display = "none";
                document.getElementById('cpassword').style.border = "2px solid black";
                document.getElementById('fncp').style.display = "none";
        
                document.getElementById("error").style.display = "none";
        
                document.getElementById('state-error').style.display = "none";
                document.getElementById('state').style.border = "2px solid black";
        
                document.getElementById("country-error").style.display = "none";
                document.getElementById('country').style.border = "2px solid black";
        
                document.getElementById("chp").style.display = "none"; 
                }
            }
                else 
            {


                document.getElementById('fnps').style.display = "none";
                document.getElementById('password').style.border = "2px solid black";
                document.getElementById('valid10').style.display = "none";
        
                document.getElementById('fnpp').style.display = "none";
                document.getElementById('cpassword').style.border = "2px solid black";
                document.getElementById('fncp').style.display = "none";
        
                document.getElementById("error").style.display = "none";
        
                document.getElementById('state-error').style.display = "none";
                document.getElementById('state').style.border = "2px solid black";
        
                document.getElementById("country-error").style.display = "none";
                document.getElementById('country').style.border = "2px solid black";
        
                document.getElementById("chp").style.display = "none";
            }
        }
        else 
        {
            



        document.getElementById('fnm').style.display = "none";
        document.getElementById('num').style.border = "2px solid black";
        document.getElementById('valid8').style.display = "none";
        document.getElementById('valid08').style.display = "none";
        document.getElementById('fnl').style.display = "none";
        document.getElementById('valid9').style.display = "none";

        document.getElementById('fnps').style.display = "none";
        document.getElementById('password').style.border = "2px solid black";
        document.getElementById('valid10').style.display = "none";

        document.getElementById('fnpp').style.display = "none";
        document.getElementById('cpassword').style.border = "2px solid black";
        document.getElementById('fncp').style.display = "none";

        document.getElementById("error").style.display = "none";

        document.getElementById('state-error').style.display = "none";
        document.getElementById('state').style.border = "2px solid black";

        document.getElementById("country-error").style.display = "none";
        document.getElementById('country').style.border = "2px solid black";

        document.getElementById("chp").style.display = "none";
        }
    }
    else
    {
        document.getElementById('fne').style.display = "none";
        document.getElementById('valid5').style.display = "none";
        document.getElementById('email').style.border = " 2px solid black";

        document.getElementById('valid9').style.display = "none";
        document.getElementById('fnm').style.display = "none";
        document.getElementById('num').style.border = "2px solid black";
        document.getElementById('valid8').style.display = "none";
        document.getElementById('valid08').style.display = "none";
        document.getElementById('fnl').style.display = "none";

        document.getElementById('fnps').style.display = "none";
        document.getElementById('password').style.border = "2px solid black";
        document.getElementById('valid10').style.display = "none";

        document.getElementById('fnpp').style.display = "none";
        document.getElementById('cpassword').style.border = "2px solid black";
        document.getElementById('fncp').style.display = "none";

        document.getElementById("error").style.display = "none";

        document.getElementById('state-error').style.display = "none";
        document.getElementById('state').style.border = "2px solid black";

        document.getElementById("country-error").style.display = "none";
        document.getElementById('country').style.border = "2px solid black";

        document.getElementById("chp").style.display = "none";
    }
    }

 
                            


// Name validation start

   
    function abc()
    {  var a="";
        let data1 = document.getElementById('uname').value;
        let names = data1;

        if (names === "") {
            document.getElementById('fnp').style.display = "block";
            document.getElementById('uname').style.border = "2px solid red";
            
            
        }
        else {
            if (names.length > 2) {
                document.getElementById('valid03').style.display = "none";
                

                if (names.charAt(0) >= 'A' && names.charAt(0) <= 'Z') {
                    document.getElementById('valid3').style.display = "none";

                    let validf = true;
                    for (let i = 0; i <= names.length; i++) {
                        if (names.charAt(i) >= '0' && names.charAt(i) <= '9') {
                            validf = false;

                        }
                    }
                    if (validf == false) {
                        document.getElementById('valid2').style.display = "block";
                        document.getElementById('uname').style.border = "2px solid red";
                    }
                    else {
                        document.getElementById('valid2').style.display = "none";
                        document.getElementById('uname').style.border = "2px solid green";
                        var a = a + "W";
                        
                    }
                }
                else {
                    document.getElementById('valid3').style.display = "block";
                    document.getElementById('uname').style.border = "2px solid red";
                }
            }
            else {
                document.getElementById('valid03').style.display = "block";
                document.getElementById('uname').style.border = "2px solid red";
            }
            document.getElementById('fnp').style.display = "none";
            
            console.log("name",a);
        }return a;  
    }
    //a=W



// E-mail validation start
function abc1(re)

 {

    let data2 = document.getElementById('email').value;
    let emails = data2;
    let mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emails === "") {
        document.getElementById('fne').style.display = "block";
        document.getElementById('email').style.border = "2px solid red";
      
    }
    else {
        if ((!emails.match(mailformat))) {
            document.getElementById('valid5').style.display = "block";
            document.getElementById('email').style.border = "2px solid red";
        }
        else {
            document.getElementById('valid5').style.display = "none";
            document.getElementById('email').style.border = "2px solid green";
            var re = re + "O";
            console.log("email",re);
            
        }
        document.getElementById('fne').style.display = "none";
    } return re;
    
     //a="WO"

}




//mobile number validation

function abc2(re1) 
{ 
  
    let data3 = document.getElementById('num').value;
    let nums = data3;
    let mobilefmt = /^[\+91]?[7-9][0-9]{9}$/;
    if (nums === "") {
        document.getElementById('fnm').style.display = "block";
        document.getElementById('num').style.border = "2px solid red";
        
    }
    else {
        if (nums.length === 13) {

            if (nums.charAt(0) == '+' && nums.charAt(1) == '9' && nums.charAt(2) == '1') {

                document.getElementById('valid08').style.display = "none";


                let validf = true;
                for (let i = 0; i < nums.length; i++) {
                    if ((nums.charAt(i) >= 'a' && nums.charAt(i) <= 'z') || (nums.charAt(i) >= 'A' && nums.charAt(i) <= 'Z')) {
                        validf = false;
                    }
                }
                if (validf == false) {
                    document.getElementById('valid8').style.display = "block";
                    document.getElementById('valid08').style.display = "none";
                    document.getElementById('num').style.border = "2px solid red";
                    document.getElementById('fnl').style.display = "none";
                    document.getElementById('valid9').style.display = "none";
                }
                else {
                    if (nums.charAt(3) >= '6' && nums.charAt(3) <= '9') {
                        document.getElementById('valid9').style.display = "none";
                        document.getElementById('num').style.border = "2px solid green";
                        document.getElementById('valid8').style.display = "none";
                        document.getElementById('valid08').style.display = "none";
                        document.getElementById('fnl').style.display = "none";
                    }
                    else {
                        document.getElementById('valid9').style.display = "block";
                        document.getElementById('num').style.border = "2px solid red";
                        document.getElementById('valid8').style.display = "none";
                        document.getElementById('fnl').style.display = "none";
                        document.getElementById('valid08').style.display = "block";

                    }
                    var re1=re1+ "R";
                    console.log("number",re1);
                }
            }
            else {
                document.getElementById('valid08').style.display = "block";
            }
        }
        else {
            if (nums.length > 13 || nums.length < 13) {
                document.getElementById('valid08').style.display = "none";
                document.getElementById('num').style.border = "2px solid red";
                document.getElementById('valid8').style.display = "none";
                document.getElementById('fnl').style.display = "block";
                document.getElementById('valid9').style.display = "none";
            }
            else {
                document.getElementById('valid08').style.display = "none";
                document.getElementById('fnl').style.display = "none";
                

            }

        }
        document.getElementById('fnm').style.display = "none";
    }return re1;  //a="WOR"
}


//password validation start
function abc3(re2)
{
    let pass1 = document.getElementById('password').value;
  let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (pass1 === "") 
            {
                document.getElementById('fnps').style.display = "block";
                document.getElementById('password').style.border = "2px solid red";
             
            }
            else 
            {
                if (!(pass1.match(passwordformat))) {

                    document.getElementById('valid10').style.display = "block";
                    document.getElementById('password').style.border = "2px solid red";
                }
                else {
                    document.getElementById('valid10').style.display = "none";
                    document.getElementById('password').style.border = "2px solid green";
                    var re2=re2 + "R";
                    console.log("password",re2);
                }
                document.getElementById('fnps').style.display = "none";

             } return re2; // a="WORR"
              
}


//confirm password validation start
function abc4(re3)
{
        let data5 = document.getElementById('cpassword').value;
        var cpass = data5;
        let pass1 = document.getElementById('password').value;
        if (cpass === "") {
            document.getElementById('fncp').style.display = "block";
            document.getElementById('cpassword').style.border = "2px solid red";
           
        }
        else {
            if (cpass != pass1) {
                document.getElementById('fnpp').style.display = "block";
                document.getElementById('cpassword').style.border = "2px solid red";
                

            } else {
                document.getElementById('fnpp').style.display = "none";
                document.getElementById('cpassword').style.border = "2px solid green";
                document.getElementById('fncp').style.display = "none";
                var re3=re3 + "Y";
                console.log("cpassword",re3);
            }

               } return re3;
}



//gender validation start
function abc5(re4)
{
    let data7 = document.getElementById("male").checked;
    let data8 = document.getElementById("female").checked;
    let data9 = document.getElementById("others").checked;
    if (!(data7 || data8 || data9)) {
        document.getElementById("error").style.display = "block";
        
       
    } else {
        document.getElementById('error').style.display = "none";
       var re4 = re4 + "L";
       console.log("gender",re4);
    }return re4;
}

//state validation start 
function abc6(re5)
{    
    
    if (document.getElementById('state').value == "") 
    {
        
        document.getElementById("state-error").style.display = "block";
        document.getElementById('state').style.border = "2px solid red";
        
    } else {
        document.getElementById('state-error').style.display = "none";
        document.getElementById('state').style.border = "2px solid green";
        var re5=re5 + "E";
        console.log("satate",re5);
    }return re5;
}

// //District validation start
function abc7(re6)
{      

    if (document.getElementById('country').value == "") 
    {
        
        document.getElementById("country-error").style.display = "block";
        document.getElementById('country').style.border = "2px solid red";
   
       
        
    } else
     {
        document.getElementById('country-error').style.display = "none";
        document.getElementById('country').style.border = "2px solid green";
        var re6=re6 + "S";
        console.log("district",re6);
        
    }return re6;
}

//checkbox validation start
function abc8(re7)
{
    let data9 = document.getElementById("check").checked;
    if (!(data9)) {
        document.getElementById("chp").style.display = "block";
        
    } else {
        document.getElementById('chp').style.display = "none";
        var re7 = re7 + "S";

        console.log("checkbox", re7);
    }
    return  re7;
}




