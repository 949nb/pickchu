!function(){
  function writeCode(prefix,code,fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(()=>{
      n++
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n >= code.length){
        window.clearInterval(id)
        fn && fn.call()
      }
    },10)
  }

  let code = `
  /*
   * 大家好，我给大家画一个比卡丘～
   */
  .preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FDE737;
    border:1px solid green;
  }

  .wrapper > :not(:last-child){
    z-index: 1;
  }
  
  
  .wrapper{
    width: 100%;
    height: 165px;
    position: relative;
  }
  .nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-color: black transparent transparent transparent;
    border-width: 12px;
    border-radius: 11px;
    background: none;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
  }
  .eye{
    width: 50px;
    height: 50px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid black;
  }
  .eye::before{
    content: '';
    display: block;
    height: 24px;
    width: 24px;
    border: 2px solid;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 6px;
  }
  .eye.left{
    right: 50%;
    margin-right: 90px;
  }
  .eye.right{
    left: 50%;
    margin-left: 90px;
  }
  .face {
    width: 68px;
    height: 69px;
    background: red;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
  }
  .face.left{
    right: 50%;
    margin-right: 116px;
  }
  .face.right{
    left: 50%;
    margin-left: 116px;
  }
  .upperLip{
    width: 84px;
    height: 22px;
    border: 3px solid black;
    position: absolute;
    background: #FDE737;
    top:52px;
  }
  .upperLip.left{
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    right: 50%;
    transform:rotate(-20deg);
  }
  .upperLip.right{
    
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    left: 50%;
    transform:rotate(20deg);
  }
  .lowerLip-wrapper{
    bottom:-10px;
    position: absolute;
    left: 50%;
    margin-left: -70px;
    /* z-index: -1; */
    height: 119px;
    width: 300px;
    overflow: hidden;
  }
  .lowerLip{
    width: 139px;
    height: 1000px;
    background: #990513;
    border-radius: 150px/650px;
    border: 3px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }
  .lowerLip::after{
    content: '';
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: -55px;
    height: 150px;
    width: 100px;
    background: #fc4a62;
    border-radius: 50px;
  }
  /*
   * 皮卡丘画完了，感谢观看～
   */`
  writeCode('',code)
}.call()