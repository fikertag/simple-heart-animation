const bo = document.querySelector('body');

bo.addEventListener('mousemove', (event)=>{
  const x = event.offsetX;
  const y = event.offsetY;
   
  const creat =  document.createElement('span');
  bo.appendChild(creat)
   
  creat.style.setProperty('--x' , x + 'px');
  creat.style.setProperty('--y' , y + 'px');

  const size = Math.random()*50;

  creat.style.width = size + 'px'
  creat.style.height = size + 'px'
  

  setTimeout(()=>{
    creat.remove()
  },2000)
})