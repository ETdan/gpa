var creditList=[];
var gradeList=[];
var totalCredit=0;
var totalgrade=0;
var creditBox="<div><input type='text' placeholder='3' name='credit' class='credit'></div>";
var gradeBox="<div><input type='text' placeholder='A' name='grade' class='grade'></div>";

var gradeClass=document.querySelector(".grade-container");
var creditClass=document.querySelector(".credit-container");

document.querySelector(".addCourse").addEventListener("click",()=>{
    gradeClass.innerHTML+=gradeBox;
    creditClass.innerHTML+=creditBox;
});
document.querySelector(".removeCourse").addEventListener("click",()=>{
    // console.log(gradeClass.querySelector("div:last-child"));
    gradeClass.querySelector("div:last-child").remove();
    creditClass.querySelector("div:last-child").remove();
}); 
document.querySelector(".calculate").addEventListener("click",()=>{
    
    
    creditList=[];
    gradeList=[];
    totalCredit=0;
    totalgrade=0;
    
    
    document.querySelectorAll(".credit").forEach((e,i)=>{
        creditList[i]=e.value;
    })
    document.querySelectorAll(".grade").forEach((e,i)=>{
            gradeList[i]=e.value;
    })
    if(creditList.length>0&&(gradeList.length==creditList.length)){
        document.querySelector(".result").innerHTML=result();
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
    return totalgrade/totalCredit;
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
