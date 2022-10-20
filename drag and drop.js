const imgbox=document.querySelector('.img-box')
const whiteboxes=document.getElementsByClassName('whitebox')
// console.log(whiteboxes)
imgbox.addEventListener('dragstart',(e)=>{
   e.target.className += ' hold'
   setTimeout(()=>{e.target.className = ' hide'},0)
})
imgbox.addEventListener('dragend',(e)=>{
    //at dragend we have to give the closs 'img-box' because while dragstart it was setted to 'hide'
    e.target.className='img-box'
    //e.target is for getting the element in which the eventlistener is registered in 
    // console.log('Drag end')
})
for(whitebox of whiteboxes){
    whitebox.addEventListener('dragover',(e)=>{
        //by default when dragover is active drop deactivated to activate it we write the next line
        e.preventDefault();
        // console.log('Drag over has been triggered')
    })
    whitebox.addEventListener('dragenter',(e)=>{
        // console.log('Drag enter has been triggered')
        e.target.className +=' dashed';
    })
    whitebox.addEventListener('dragleave',(e)=>{
        // console.log('Drag leave has been triggered')
        e.target.className ='whitebox'
    })
    whitebox.addEventListener('drop',(e)=>{
        // console.log('Drop has been triggered')
        e.target.append(imgbox)
    })
}