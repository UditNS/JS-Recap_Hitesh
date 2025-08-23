let clock = document.querySelector('#clock')

// agar mai date object ko setInterval ke bahar likhu ga toh vo sirf ek baar time batega toh mujhe har second new time chahiye isliye usse setInterval ke andar likha padega

setInterval((e)=>{
  const date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)