const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const backGrd = document.querySelector(".backGrd");
const gameArea = document.querySelector(".gameArea");
const replayBtn = document.querySelector(".replayBtn");
const replayBtnWin = document.querySelector(".replayBtnWin");
const replayBtnReplay = document.querySelector(".replayBtnReplay");

const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");

startBtn.addEventListener("click", () => {
    // bam
    audio1.play();

    // add Image
    createImg();
    carrotCount();
    
    // button Change start->stop
    startBtn.style.zIndex="2";
    stopBtn.style.zIndex="3";

    // Timer    
    gameTimer();
});

function gameTimer() {
    // Timer
    var time = 11;
    const gameTimer = setInterval(gmTimer, 1000); 
    function gmTimer() {
        time --;
        if(replayBtn.style.display === "block" || replayBtnWin.style.display === "block" || replayBtnReplay.style.display === "block") {
            clearInterval(gameTimer);
            audio1.pause();
            audio1.currentTime = 0;
        } else if(time <= 0) {
            audio1.pause();
            audio1.currentTime = 0;
            audio5.play();
            clearInterval(gameTimer);
            timeOver();
        } 
        document.getElementById("gameTimer").innerHTML = "0 : " + time;
    }
}

stopBtn.addEventListener("click", () => {
    startBtn.style.display="none";
    stopBtn.style.display="none";
    replayBtnReplay.style.display="block";
    replayBtnReplay.style.zIndex="9";
    audio5.play();
});

replayBtn.addEventListener("click", () => {

    audio1.play();
    replayBtn.style.display="none";
    startBtn.style.display="block";
    stopBtn.style.display="block";

    delAddImage();

    // Timer    
    gameTimer();
});

replayBtnWin.addEventListener("click", () => {

    audio1.play();
    replayBtnWin.style.display="none";
    startBtn.style.display="block";
    stopBtn.style.display="block";

    delAddImage();

    // Timer    
    gameTimer();
});

replayBtnReplay.addEventListener("click", () => {

    audio1.play();
    replayBtnReplay.style.display="none";
    startBtn.style.display="block";
    stopBtn.style.display="block";

    delAddImage();

    // Timer    
    gameTimer();
});

function delAddImage() {
    // delete Image
    while(document.body.contains(document.getElementById('carrot'))) {
        document.getElementById('carrot').remove();
    }
    while(document.body.contains(document.getElementById('bug'))) {
        document.getElementById('bug').remove();
    }

    // add Image
    createImg();
    carrotCount();
}

function carrotCount() {
    const count = document.getElementsByClassName("carrotImg").length;
    document.getElementById("carrotCount").innerHTML = count;

    if(count == 0) {
        replayBtnWin.style.display="block";
        startBtn.style.display="none";
        stopBtn.style.display="none";
        replayBtnWin.style.zIndex="9";
        audio4.play();
        audio1.pause();
        audio1.currentTime = 0;
    }
}

function createImg() {
    // carrot
    for(i=0; i < 10; i++) {
        const carrotImg = document.createElement('img');
        carrotImg.setAttribute('src', 'carrot-200629-202923/carrot/img/carrot.png');
        carrotImg.setAttribute('class', 'carrotImg');
        carrotImg.setAttribute('id', 'carrot');
        carrotImg.setAttribute('onclick', 'javascript:this.remove(); carrotCount(); audio2.play();');

        // 임의로 내가 정했지만 이 범위가 좋은듯.. 범위랜덤 구하는거 공부....
        const carrotRandomX = Math.floor(Math.random() * 1000) + 238;
        const carrotRandomY = Math.floor(Math.random() * 200) + 322;

        carrotImg.style.position = "absolute";
        carrotImg.style.left = carrotRandomX + "px";
        carrotImg.style.top = carrotRandomY + "px";

        //console.log("carrotRandomX:" + carrotRandomX, "carrotRandomY:" + carrotRandomY );   
        document.body.appendChild(carrotImg);
    }

    //bug
    for(j=0; j < 10; j++) {
        const bugImg = document.createElement('img');
        bugImg.setAttribute('src', 'carrot-200629-202923/carrot/img/bug.png');
        bugImg.setAttribute('class', 'bugImg');
        bugImg.setAttribute('id', 'bug');
        bugImg.setAttribute('onclick', 'bugEnd(); audio3.play(); audio1.pause();');

        const bugRandomX = Math.floor(Math.random() * 1000) + 238;
        const bugRandomY = Math.floor(Math.random() * 200) + 322;

        bugImg.style.position = "absolute";
        bugImg.style.left = bugRandomX + "px";
        bugImg.style.top = bugRandomY + "px";

        //console.log("bugRandomX:" + bugRandomX, "bugRandomY:" + bugRandomY );   
        document.body.appendChild(bugImg);
    }
}

function bugEnd() {
    replayBtn.style.display="block";
    startBtn.style.display="none";
    stopBtn.style.display="none";
    replayBtn.style.zIndex="9";
    audio5.play

}

function timeOver() {
    replayBtn.style.display="block";
    startBtn.style.display="none";
    stopBtn.style.display="none";
    replayBtn.style.zIndex="9";

}

// function getLoc() {
//     const x = event.clientX;
//     const y = event.clientY;
//     console.log("좌표:" + x, y);

//     // console.log("x:" + testX(), "y:" + testY() );

// }

// function testX() {
//     // 1, 1022
//     // 238, 1250
//     const minX = Math.ceil(279);
//     const maxX = Math.floor(1200);
//     return (Math.floor(Math.random() * (maxX - minX)) + minX);
// }

// function testY() {
//     // 368, 605 offset
//     // 203, 421 client 242, 420
//     const minY = Math.ceil(213);
//     const maxY = Math.floor(400);
//     return (Math.floor(Math.random() * (maxY - minY)) + minY);
    
// }


