//Program to double every element of an Array
//First Approach

const input = [1,2,3,4,5]
for(let i=0;i<input.length;i++){
    input[i] = input[i]*2
}
console.log(input)

//Second approach using Map function

const input2 = [1,2,3,4,5]
function double(i){
    return i*2
}

const ans = input2.map(double)
console.log(ans)