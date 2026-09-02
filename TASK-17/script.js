const dummyNumbers = [10,2,10,0,27,3,5,2,356,0]; //set of 2 numbers total set=5

const divide = (a,b)=>{
    return new Promise((resolve,reject)=>{
      if(b===0){
        reject(`Error: Division by Zero is not allowed [${a}/${b}]`)
      }else{
        resolve("Division of "+a+" and "+b+" is "+a/b)
      }
    })
}

const getResult = async ()=>{
    for(i=0;i<dummyNumbers.length - 1;i=i+2){
    try{
    const result = await divide(dummyNumbers[i],dummyNumbers[i+1])
    console.log(result)
    }catch(err){
      console.log(err)
    }
    }
}
getResult();
