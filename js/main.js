originalDot = document.querySelector('.dot');
dotList = []
x = document.documentElement.clientWidth / 45; //dot is 15px by 15px
y = document.documentElement.clientHeight / 45;

for(let i = 0; i < y; i++){ //loops through every col and row
    for(let j = 0; j < x; j++){    
        let temp = originalDot.cloneNode(true) //clones dot
        dotList.push(temp);
        temp.style.top = i * 45 + 'px'; //sets pos (15px wide)
        temp.style.left = j * 45 + 'px';
        document.body.appendChild(temp); //appends to body :)
    }
}

//make dot big!
document.onpointermove = event => { //very unoptimized, but bear with me
    dotBig(event);
}

function dotBig(event){
    //find current mouse pos:
    const {clientX, clientY} = event;
    dotList.forEach(function(dot){
        let distance = 1;
        let translateDistanceX = 0;
        let translateDistanceY = 0;
        rect = dot.getBoundingClientRect();
        if(Math.abs(clientY - rect.top) < 200 && Math.abs(clientX - rect.left) < 200){
            let hyp = Math.hypot(clientX - rect.left, clientY - rect.top)/100;
            distance = sizeFunction(hyp);
            translateDistanceX = -(clientX - rect.left) / 35
            translateDistanceY = -(clientY - rect.top)/ 35
        }
        dot.style.transform = `scale(${distance}) translate(${translateDistanceX}px, ${translateDistanceY}px)`
        //dot.style.filter  = `invert(${xTransform})`
    })
}

function sizeFunction(x){
    return (5.5/(Math.pow(Math.abs(x), 2)+1))
}

//next prject i want to use more vars, also less global space... need learning HAHAHA