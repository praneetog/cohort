//PROGRAM TO FILTER OUT EVEN NUMBERS FROM AN ARRAY
//FIRST APPROACH

const arr=[1, 2, 3, 4, 5]
const ans=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        ans.push(arr[i])
    }
}
console.log(ans)

//SECOND APPROACH USING FILTER

const arr2=[1, 2, 3, 4, 5]
function evenNumbers(n){
    return n%2==0
}
const ans2=arr2.filter(evenNumbers)
console.log(ans2)