//  *****************      Jai Shree Ram      *******************  \\

//for svg problem
let v = document.querySelector(".mobilesvg svg").innerHTML;
let conf = false;

setInterval(()=>{
    var x = window.matchMedia("(min-width : 700px)");
    if(x.matches){
        document.querySelector(".mobilesvg svg").innerHTML = "";
    }else{
        document.querySelector(".mobilesvg svg").innerHTML = v;
    }
},1);

// steps button working

function changePage(clicked_Id) {
    if(conf)return;

    // hiding goback button 
    if(clicked_Id === "b1"){
        document.querySelector(".controls .goback").style.display = "none";
    }else{
        
        let count = 0;
        // showing error when field is empty
        for(let i = 0 ; i<3 ;i++){
            if(document.getElementsByClassName("error")[i].value === ""){
                document.getElementsByClassName("error")[i].style.borderColor = "hsl(354, 84%, 57%)";
                document.querySelector(".error" + (i+1)).style.display = "inline";
                count++;
            }else{
                document.getElementsByClassName("error")[i].style.borderColor = "black";
                document.querySelector(".error"+(i+1)).style.display = "none";
            }
        }
        

        if(count>0)return;
        document.querySelector(".controls .goback").style.display = "inline";
    }

    // for step buttons color
    Array.from(document.getElementsByClassName(clicked_Id)).forEach(element => {
        element.setAttribute("id","clicked_color") ;
    });
    let arr = ["b1",'b2',"b3","b4"];
    arr.forEach(element1 =>{
        Array.from(document.getElementsByClassName(element1)).forEach(element =>{
            if(clicked_Id !== element1)
                element.removeAttribute('id');
        });
    });

    
    let c1 ;
    if(clicked_Id === "b1") c1 = "personalInfo";
    else if(clicked_Id === "b2")c1 = "planSelector";
    else if(clicked_Id === "b3")c1 = "addons";
    else if(clicked_Id === "b4")c1 = "finishingup";

    

    //showing confirm button
    if(clicked_Id === "b4"){
        document.querySelector(".controls .n1").style.display = "none";
        document.querySelector(".controls .confirm").style.display = "inline";
    }else{
        document.querySelector(".controls .n1").style.display = "inline";
        document.querySelector(".controls .confirm").style.display = "none";
    }

    // changing pages acc. to button clicked
    let arr1 = ["personalInfo",'planSelector',"addons","finishingup"];
    arr1.forEach(element =>{
        if(element !== c1)
            document.querySelector("."+element).style.display = "none";
        else
            document.querySelector("."+element).style.display = "inline";
    });
}

//for mobile next and go back button
function changePage1(add){
    let arr1 = ["personalInfo",'planSelector',"addons","finishingup"];
    for(let i = 0 ;i<4 ; i++){
        if(document.querySelector("."+arr1[i]).style.display !== "none"){
            let nextpageno = i + parseInt(add);
            changePage("b"+nextpageno);
            return;
        }
    };
}
let plan = 9;
let planyr = false;
let naddons = 0;

//for slecting monthl or yearly plan
function monthly_yearly(){
    let a =9;
    if(document.getElementById("mon-year").checked === true){

        planyr = true;

        document.querySelector(".monthly-yearly .month").style.color = "hsl(231, 11%, 63%)";
        document.querySelector(".monthly-yearly .year").style.color = "hsl(213, 96%, 18%)";

        document.querySelector(".subs h4 span").innerHTML = "+$"+plan+"0/yr";
        document.querySelector(".total span").innerHTML = "$" + (plan + naddons) +"0/yr";


        for(let i = 0 ; i<3 ;i++){

            document.querySelectorAll(".plans h3")[i].innerHTML = "$"+ (a+(i*3)) + "0/yr"

            document.querySelectorAll(".checkbox h4 span")[i].innerHTML = "+$" + (i === 2 ? i:i+1) + "0/yr";

            document.querySelectorAll(".planSelector h4")[i].style.display = "inline";

            document.querySelectorAll(".subs h3 span")[i].innerHTML = "$" + (i === 2 ? i:i+1) + "0/yr";


        }
            
    }else{

        planyr = false;

        document.querySelector(".monthly-yearly .month").style.color =  "hsl(213, 96%, 18%)";
        document.querySelector(".monthly-yearly .year").style.color = "hsl(231, 11%, 63%)";

        document.querySelector(".subs h4 span").innerHTML = "+$"+plan+"/mon";
        document.querySelector(".total span").innerHTML = "$" + (plan + naddons)+"/mon";

        for(let i = 0 ; i<3 ;i++){

            document.querySelectorAll(".plans h3")[i].innerHTML = "$"+ (a+(i*3)) + "/mon";

            document.querySelectorAll(".checkbox h4 span")[i].innerHTML = "+$" + (i === 2 ? i:i+1) + "/mo";

            document.querySelectorAll(".planSelector h4")[i].style.display = "none";

            document.querySelectorAll(".subs h3 span")[i].innerHTML = "$" + (i === 2 ? i:i+1) + "/mo";
        } 
    }
    
        
}

// changing colors for plan
function colorChange(clicked_plan){

    document.querySelector("." + clicked_plan).style.backgroundColor = "hsl(231, 100%, 98%)";

    

    let arr = ["plan1",'plan2',"plan3"];

    if(clicked_plan === arr[0])plan =  9;
    if(clicked_plan === arr[1])plan = 12;
    if(clicked_plan === arr[2])plan = 15;


    if(!planyr){
        document.querySelector(".subs h4 span").innerHTML = "+$"+plan+"/mon";
        document.querySelector(".total span").innerHTML = "$" + (plan + naddons)+"/mon";
    }
    else{
        document.querySelector(".subs h4 span").innerHTML = "+$"+plan+"0/yr";
        document.querySelector(".total span").innerHTML = "$" + (plan + naddons)+"0/yr";
    }
        

    arr.forEach(element1 =>{
        if(element1 !== clicked_plan)
            document.querySelector("." + element1).style.backgroundColor = "transparent";
    });
}



//changing colors of addons
function colorChange1(clicked){
    Array.from(document.querySelectorAll(".checkbox")).forEach(element =>{
        if(element.querySelector("input").checked === true){
            element.style.backgroundColor = "hsl(231, 100%, 98%)";
            element.style.borderColor = "hsl(243, 100%, 62%)";
        }else{
            element.style.backgroundColor = "transparent";
            element.style.borderColor = "black";
        }
    });
    for(let i = 0; i<3 ; i++){
        if(document.querySelectorAll(".checkbox input")[i].checked === true){
            document.querySelectorAll(".subs h3")[i].style.display = "block";
        }else{
            document.querySelectorAll(".subs h3")[i].style.display = "none";
        }
    }

    if(document.querySelectorAll(".checkbox input")[clicked].checked === true){
        naddons = naddons + ((clicked == 2)? clicked : clicked+1);
    }else{
        naddons = naddons - ((clicked == 2)? clicked : clicked+1);
    }

    if(planyr)
        document.querySelector(".total span").innerHTML = "$" + (plan + naddons)+"0/yr";
    else
        document.querySelector(".total span").innerHTML = "$" + (plan + naddons)+"/mon";

}

// for confirming button and thanku page
function confirm(){
    document.querySelector(".finishingup").style.display = "none";
    document.querySelector(".goback , .next").style.display = "none";
    document.querySelector(".controls").style.display = "none";
    document.querySelector(".thanks").style.display = "inline";
    conf = true;
}
