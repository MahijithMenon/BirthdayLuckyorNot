dateBirth=document.getElementById('dateOfBirth');
luckyNumber=document.getElementById('luckynumber');
txtArea=document.getElementById('txtArea');
check=document.getElementById('check');
check.addEventListener('click',()=>{
if(dateBirth.value){
if(luckyNumber.value>0){
const dob=dateBirth.value;
const sum=calculate(dob);
if(sum<luckyNumber.value || sum%luckyNumber.value!=0){
 txtArea.style.color="red"   
 txtArea.innerText="Your Number is Not a Lucky Number"   
}
else{ 
    txtArea.style.color="black"   
    txtArea.innerText="Your Number is a Lucky Number"   
}
console.log(dob+"sum is"+sum)
}
else{
    txtArea.innerText="Entered Number should be greater than 0";
}
}
else{
    txtArea.innerText="Enter Date Of Birth"
}
})
function calculate(dob){
dob=dob.replaceAll("-","");
let sum=0;
for(let i=0;i<dob.length;i++){
    sum=sum+Number(dob.charAt(i));
}
return sum;
}