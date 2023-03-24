
function gradesCalculate(){
    let english=document.getElementById("english").value
    let maths=document.getElementById("maths").value
    let physics=document.getElementById("physics").value
    let chemistry=document.getElementById("chemistry").value
    let computers=document.getElementById("computers").value

    
    let e=parseFloat(english)
    let m=parseFloat(maths)
    let p=parseFloat(physics)
    let ch=parseFloat(chemistry)
    let c=parseFloat(computers)
    
    if(e<0 || e>100 || m<0 || m>100 || p<0 || p>100 || ch<0 || ch>100 || c<0 || c>100){
        alert("Please enter marks in range 0-100")
        return
    }
    let total=e+m+p+ch+c
    // console.log(total);
    let average=total/5
    let grade=(total/100)*100
    console.log(average);
    console.log(grade);
    let totalresult=document.getElementById("total-result")
    let averageresult=document.getElementById("average-result")
    let graderesult=document.getElementById("grade-result")
    let gradeText=''
    if(grade>90) gradeText="A"
    else if(grade<89 || grade>80) gradeText="B"
    else if(grade<79 || grade>70) gradeText="C"
    else if(grade<69 || grade>60) gradeText="D"
    else if(grade<60) gradeText="F"

    if(e<=35 || m<=35 || p<=35 || ch<=35 || c<=35) gradeText="F"

    totalresult.innerHTML=`<b>Your Marks :${total}</b>`
    averageresult.innerHTML=`<b>Your Average Marks :${average}</b>`
    graderesult.innerHTML=`<b>Your Grade :${gradeText}</b>`
}
