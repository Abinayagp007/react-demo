const names = ["abi" , "naya" , "mati" , "raksa"]
 const hi=names.map((x)=>{
  return x[0].toUpperCase() +x.slice(1)

 })
 console.log(hi)//['Abi', 'Naya', 'Mati', 'Raksa']//

 const names = ["abi" , "naya" , "mati" , "raksa"]

 const y=names.map((abc)=>{
    return `<p>${abc}</p>`
 })
 console.log(y)

  //output:['<p>abi</p>', '<p>naya</p>', '<p>mati</p>', '<p>raksa</p>']//

 const nums=[1,2,3,4,5]
  const sqr=nums.map(function(item){
    return item * item
  })

  console.log(sqr)