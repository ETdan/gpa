var creditList=[];
var gradeList=[];
var totalCredit=0;
var totalgrade=0;
var creditBox="<div><input type='text' placeholder='3' name='credit' class='credit'></div>";
var gradeBox="<div><input type='text' placeholder='A' name='grade' class='grade'></div>";

var gradeClass=document.querySelector(".grade-container");
var creditClass=document.querySelector(".credit-container");

var sizeCounter=3;

document.querySelector(".addCourse").addEventListener("click",()=>{
    sizeCounter++;
    addMargin(sizeCounter);
    
    gradeClass.innerHTML+=gradeBox;
    creditClass.innerHTML+=creditBox;
});

document.querySelector(".removeCourse").addEventListener("click",()=>{
    sizeCounter--;
    gradeClass.querySelector("div:last-child").remove();
    creditClass.querySelector("div:last-child").remove();
}); 
document.querySelector(".calculate").addEventListener("click",()=>{
    
    creditList=[];
    gradeList=[];
    totalCredit=0;
    totalgrade=0;
    
    
    document.querySelectorAll(".credit").forEach((e,i)=>{
        if(e.value!="")
        creditList[i]=e.value;
    })
    document.querySelectorAll(".grade").forEach((e,i)=>{
        if(e.value!="")
            gradeList[i]=e.value;
    })
    console.log(creditList.length==0);
    if(creditList.length>0&&(gradeList.length==creditList.length)){
            document.querySelector(".result").textContent=result();
    }
});

function result(){
    for(i=0;i<creditList.length;++i){
        if(gradeList[i]!=""&&creditList[i]!="")
        {
            gradeList[i]=converter(gradeList[i]);
            totalCredit+=creditList[i]-1+1;
            totalgrade+=creditList[i]*gradeList[i];
        }
    }
    return Math.floor((totalgrade/totalCredit)* 100) / 100;
}
function converter(grade){
    if (grade=="a"||grade=="a+"||grade=="A"||grade=="A+")
        return 4;
    else if (grade=="a-"||grade=="A-"||grade=="a -"||grade=="A -")
        return 3.75;
    else if (grade=="b+"||grade=="B+"|| grade=="b +"||grade=="B +")
        return 3.5;
    else if (grade=="b"||grade=="B")
        return 3;
    else if (grade=="b-"||grade=="B-"||grade=="b -"||grade=="B -")
        return 2.75;
    else if (grade=="c+"||grade=="C+"|| grade=="c +"||grade=="C +")
        return 2.5;
    else if (grade=="c"||grade=="C")
        return 2;
    else if (grade=="c-"||grade=="C-"|| grade=="c -"||grade=="C -")
        return 1.75;
    else if (grade=="d"||grade=="D")
        return 1;
    else if (grade=="f"||grade=="F")
        return 1;
    
}
// curser reder

document.querySelector("body").addEventListener("mousemove",xyz);
    function xyz(e){
    this.querySelectorAll(".move").forEach(target=>{
        const speed=target.getAttribute("data-speed");
        target.setAttribute("id",speed);
        x=window.innerWidth- e.clientX*speed;
        y=window.innerHeight- e.clientY*speed;
        document.getElementById(target.getAttribute("id")).style.transform=`translateX(${x/100}px) translateY(${y/100}px)`;
    })
}
// add margin
function addMargin(sizeCounter){
    if(sizeCounter>=6)
    {
        var topMargin=45+(30*(sizeCounter-5))+"px";
        var topMarginResult=220+(30*(sizeCounter-5))+"px";
        document.getElementById("btn").style.marginTop=topMargin;
        document.getElementById("resultc").style.marginTop=topMarginResult;
        console.log(topMarginResult)
    }
}
