var widthImg=116,count=4,carousel=document.querySelector(".media-duck__carousel-preview"),list=document.querySelector(".carousel-indicators"),listElems=document.querySelectorAll("li"),position=0;function left(){position=Math.min(position+widthImg*count,0),list.style.marginLeft=position+"px"}function right(){position=Math.max(position-widthImg*count,-widthImg*(listElems.length-count)),list.style.marginLeft=position+"px"}document.querySelector(".media-duck__control-preview-prev").addEventListener("click",left,!1),document.querySelector(".media-duck__control-preview-next").addEventListener("click",right,!1);