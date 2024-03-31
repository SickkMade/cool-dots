originalDot = document.querySelector('.dot');
dotList = []
const dotSize = 45
x = document.documentElement.clientWidth / dotSize; //dot is 15px by 15px
y = document.documentElement.clientHeight / dotSize;

for(let i = 0; i < y; i++){ //loops through every col and row
    for(let j = 0; j < x; j++){    
        let temp = originalDot.cloneNode(true) //clones dot
        dotList.push(temp);
        temp.style.top = i * dotSize + 'px'; //sets pos (15px wide)
        temp.style.left = j * dotSize + 'px';
        document.body.appendChild(temp); //appends to body :)
    }
}
originalDot.style.filter = 'opacity(0%)';

//make dot big!
document.onpointermove = event => { //very unoptimized, but bear with me
    dotBig(event);
}

function dotBig(event){
    //find current mouse pos:
    const {clientX, clientY} = event;
    dotList.forEach(function(dot){
        let dotSize = .15;
        let translateDistanceX = 0;
        let translateDistanceY = 0;
        rect = dot.getBoundingClientRect();
        let hyp = Math.hypot(clientX - rect.left, clientY - rect.top)/100;
        if(hyp < 3){
            
            dotSize = sizeFunction(hyp);
            translateDistanceX = -(clientX - rect.left) / 35
            translateDistanceY = -(clientY - rect.top)/ 35
        }
        dot.style.transform = `scale(${dotSize}) translate(${translateDistanceX}px, ${translateDistanceY}px)`
        //dot.style.filter  = `invert(${xTransform})`
    })
}

function sizeFunction(x){
    return (5/(Math.pow(Math.abs(x), 3)+1))
}

//next prject i want to use more vars, also less global space... need learning HAHAHA