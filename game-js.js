const images = ['תמונות/1.jpg', 'תמונות/2.jpeg', 'תמונות/3.jpg', 'תמונות/4.jpg',
    'תמונות/5.jpg', 'תמונות/6.jpg', 'תמונות/7.jpg', 'תמונות/9.jpg', 'תמונות/10.jpg',
    'תמונות/11.jpg', 'תמונות/12.jpg', 'תמונות/13.jpg', 'תמונות/14.jpg', 'תמונות/15.jpg', 'תמונות/16.jpg',
    'תמונות/17.jpg', 'תמונות/18.jpg', 'תמונות/19.jpg', 'תמונות/20.jpg', 'תמונות/21.jpg', 'תמונות/22.jpg',
    'תמונות/23.jpg', 'תמונות/24.jpg', 'תמונות/25.jpg', 'תמונות/27.jpg', 'תמונות/28.jpg',
    'תמונות/29.jpg', 'תמונות/30.jpg', 'תמונות/31.jpg', 'תמונות/32.jpg', 'תמונות/33.jpg', 'תמונות/34.jpg',
    'תמונות/35.jpg', 'תמונות/36.jpg', 'תמונות/37.jpg', 'תמונות/38.jpg', 'תמונות/39.jpg', 'תמונות/40.jpg',
    'תמונות/41.jpg', 'תמונות/42.jpg', 'תמונות/43.jpg', 'תמונות/44.jpg', 'תמונות/45.jpg', 'תמונות/46.jpg',
    'תמונות/47.jpg', 'תמונות/48.jpg', 'תמונות/49.jpg', 'תמונות/50.jpg', 'תמונות/51.jpg', 'תמונות/52.jpeg',
    'תמונות/53.jpg', 'תמונות/54.jpg', 'תמונות/55.jpg', 'תמונות/56.jpeg', 'תמונות/57.jpeg', 'תמונות/58.jpg', 'תמונות/59.jpg'];


const images2 = ['תמונות/משפטים/1.jpg', 'תמונות/משפטים/2.jpg', 'תמונות/משפטים/3.jpg', 'תמונות/משפטים/4.jpg',
    'תמונות/משפטים/5.jpg', 'תמונות/משפטים/6.jpg', 'תמונות/משפטים/7.jpg', 'תמונות/משפטים/8.jpg',
    'תמונות/משפטים/9.jpg', 'תמונות/משפטים/10.jpg', 'תמונות/משפטים/11.jpg', 'תמונות/משפטים/12.jpg',
    'תמונות/משפטים/13.jpg', 'תמונות/משפטים/14.jpg', 'תמונות/משפטים/15.jpg', 'תמונות/משפטים/16.jpg',
    'תמונות/משפטים/17.jpg', 'תמונות/משפטים/18.jpg', 'תמונות/משפטים/19.jpg', 'תמונות/משפטים/20.jpg',
    'תמונות/משפטים/21.jpg', 'תמונות/משפטים/22.jpg', 'תמונות/משפטים/23.jpg', 'תמונות/משפטים/24.jpg',
    'תמונות/משפטים/25.jpg', 'תמונות/משפטים/26.jpg', 'תמונות/משפטים/27.jpg', 'תמונות/משפטים/28.jpg',
    'תמונות/משפטים/29.jpg', 'תמונות/משפטים/30.jpg', 'תמונות/משפטים/31.jpg', 'תמונות/משפטים/32.jpg',
    'תמונות/משפטים/33.jpg', 'תמונות/משפטים/34.jpg', 'תמונות/משפטים/35.jpg', 'תמונות/משפטים/36.jpg',
    'תמונות/משפטים/37.jpg', 'תמונות/משפטים/38.jpg', 'תמונות/משפטים/39.jpg', 'תמונות/משפטים/40.jpg',
    'תמונות/משפטים/41.jpg', 'תמונות/משפטים/42.jpg', 'תמונות/משפטים/43.jpg', 'תמונות/משפטים/44.jpg',
    'תמונות/משפטים/45.jpg', 'תמונות/משפטים/46.jpg', 'תמונות/משפטים/47.jpg', 'תמונות/משפטים/48.jpg',
    'תמונות/משפטים/49.jpg', 'תמונות/משפטים/50.jpg', 'תמונות/משפטים/51.jpg', 'תמונות/משפטים/52.jpg',
    'תמונות/משפטים/53.jpg', 'תמונות/משפטים/54.jpg', 'תמונות/משפטים/55.jpg', 'תמונות/משפטים/56.jpg',
    'תמונות/משפטים/57.jpg', 'תמונות/משפטים/58.jpg', 'תמונות/משפטים/59.jpg', 'תמונות/משפטים/60.jpg',
    'תמונות/משפטים/61.jpg', '6תמונות/משפטים/2.jpg', 'תמונות/משפטים/63.jpg', 'תמונות/משפטים/64.jpg',
    'תמונות/משפטים/65.jpg', 'תמונות/משפטים/66.jpg', 'תמונות/משפטים/67.jpg', 'תמונות/משפטים/68.jpg',
    'תמונות/משפטים/69.jpg', 'תמונות/משפטים/70.jpg', 'תמונות/משפטים/71.jpg', 'תמונות/משפטים/72.jpg',
    'תמונות/משפטים/73.jpg', 'תמונות/משפטים/74.jpg', 'תמונות/משפטים/75.jpg', 'תמונות/משפטים/76.jpg',
    'תמונות/משפטים/77.jpg', 'תמונות/משפטים/78.jpg', 'תמונות/משפטים/79.jpg', 'תמונות/משפטים/80.jpg',
    'תמונות/משפטים/81.jpg', 'תמונות/משפטים/82.jpg', 'תמונות/משפטים/83.jpg', 'תמונות/משפטים/84.jpg',
    'תמונות/משפטים/85.jpg', 'תמונות/משפטים/86.jpg', 'תמונות/משפטים/87.jpg', 'תמונות/משפטים/88.jpg',
    'תמונות/משפטים/89.jpg', 'תמונות/משפטים/90.jpg', 'תמונות/משפטים/91.jpg', 'תמונות/משפטים/92.jpg'];

let audioo=new Audio("./AwayInAMangerEDM.mp3");
let flagMusic=0;
const memoryGameTable = document.querySelector('.memory-game');
let lockBoard = false;
let firstCard, secondCard;
let arrChoose=images;
let goodCards = 0;
let tableSize;
let flag=true;
function createTable() {
    tableSize = document.getElementById('tableSize').value;
    memoryGameTable.innerHTML = ''; // נקיית הטבלה מהתוכן הקודם
    let indexImagesArray = createArrayOfImagesIndex(tableSize)//מכיל מערך אינדקסים מרונדמים על פי הגודל שנבחר

    // יצירת הכרטיסים בטבלה
    let t = 0;
    for (let i = 0; i < tableSize; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < tableSize; j++) {
            const cell = document.createElement('td');
            if(tableSize=="6"){
                cell.classList.add('card') 
                cell.style.width="10vh";
                cell.style.height="10vh";
            }
            else{
            cell.classList.add('card');
            }
            let img = document.createElement('img');
            img.src = arrChoose[indexImagesArray[t]]; // בחירת תמונה אקראית מהמערך שנבחר
            cell.dataset.index = indexImagesArray[t];
            cell.addEventListener('click', flipCard);
            row.appendChild(cell);
            t++;
        }
        memoryGameTable.appendChild(row);
    }
}
function chooseTopics(){

    if(document.getElementById("select").value=="cars")
        arrChoose=images;
        else
        arrChoose=images2;
} 
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    const imageIndex = parseInt(this.dataset.index);
    const imagePath = arrChoose[imageIndex];
    this.style.backgroundImage = `url(${imagePath})`;
    this.classList.add('flipped');
    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkForMatch();
    }
}

function createArrayOfImagesIndex(tableSize) {
    let newArry = []
    let monimArray = []
    for (let i = 0; i < tableSize * tableSize / 2; i++) {
        const index = Math.floor(Math.random() * (arrChoose.length - 1));
        if (monimArray[index] > 0) {
            i--;
            continue;
        }
        newArry[i] = index;
        monimArray[index] = 1;
    }
    return shuffleArray([...newArry, ...newArry]);
}

function checkForMatch() {
    let isMatch = firstCard.dataset.index === secondCard.dataset.index;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    playWinSound()
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    goodCards++;
    if (goodCards === tableSize * tableSize / 2)
        showWinningMessage();
    resetBoard();
}

function showWinningMessage() {
    // יצירת תיבת מידע להודעת הניצחון
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // יצירת הודעת טקסט
    const message = document.createElement('div');
    message.classList.add('message');
    modal.appendChild(message);

    // מערך של משפטים רנדומליים
    const randomSentences = [
        "Congratulations! You won!",
        "Amazing! You're the winner!",
        "You did it! Victory is yours!",
        "!!!😍🤘🔥אתה יכל להיות פרופסור עם כזה זיכרון ",
        "פיייי אלוף העולםםם",
        "Wow you are the champion of champions!😍There is nothing above you",
        "Congratulations!💖💙💚💛💘💜"
    ];

    // בחירת משפט רנדומלי מהמערך
    const randomIndex = Math.floor(Math.random() * randomSentences.length);
    const randomSentence = randomSentences[randomIndex];

    // טקסט רנדומלי להודעת הניצחון
    const textNode = document.createTextNode(randomSentence);
    message.appendChild(textNode);

    // יצירת הכפתור "המשך למשחק"
    const continueButton = document.createElement('button');
    continueButton.innerText = "Continue to Game";
    continueButton.classList.add('continue-button');
    continueButton.onclick = function () {
        window.location.href = "game.html"; // כאן מוגדרת כתובת ה-URL לדף המשחק
    };

    // הוספת הכפתור לתוך התיבה
    modal.appendChild(continueButton);

    // הוספת התיבה לגוף המסמך
    document.body.appendChild(modal);

    // הוספת אנימציה יפה להודעת הניצחון
    setTimeout(function () {
        modal.classList.add('show');
    }, 100);
    showHearts()
    updateGameStatus('win'); // כאן ניתן להעביר את התוצאה של המשחק (ניצחון או הפסד)

}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.style.backgroundImage = '';
        secondCard.style.backgroundImage = '';
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    window.location.href = 'game.html';
}

function showInstructions() {
    window.location.href = 'instruction.html';
}

function redirectHome() {
    window.location.href = 'homePage.html';
}



createTable();


// צלילים
function playWinSound() {
    var audio = document.getElementById("winSound");
    audio.play();
}
function playWinSoundlast() {
    var audio = document.getElementById("winSoundlast");
    audio.play();
}
function playMusic() {
    if(flagMusic==0){
    audioo.play();
    flagMusic=1;
    }
    else{
        audioo.pause();
        flagMusic=0;
    }
}


// יצירת לבבות

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.backgroundColor = getRandomColor();
    document.body.appendChild(heart);

    // מחיקת הלבבה בסיומה של האנימציה
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// קריאה לפונקציה ליצירת לבבה כל פעם שהשחקן מנצח
function showHearts() {
    // כמות הלבבות שתוצג
    const heartsCount = 150;
    for (let i = 0; i < heartsCount; i++) {
        createHeart();
    }
}

// פונקציה ליצירת צבע אקראי
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/////// טיימר ////////

// יצירת משתנה לשמירת הזמן
let timeLeft = 60;

// יצירת טיימר שמתחיל לפעול כאשר המשחק מתחיל
const timerInterval = setInterval(function () {
    // יורדים 1 שניה מהזמן הנותר
    timeLeft--;

    // מציגים את הזמן הנותר ב-HTML
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = 'Time left: ' + timeLeft + ' seconds';
    timerDisplay.classList.add('timer');

    // בודקים אם הזמן נגמר, ואם כן - מפסיקים את הטיימר
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        // הוספת פעולה לקראת סיום הזמן
        timeOver();
    }
}, 1000); // מפעילים את הטיימר כל שנייה


    let isGameWon = false; // משתנה בוליאני שמציין אם המשחק נכנס למצב ניצחון

    // פונקציה שמופעלת במידה והזמן נגמר לפני שסיים את המשחק
    function timeOver() {
        // אם השחקן נצח, חזור מיידית מהפונקציה
        if (isGameWon) {
            return;
        }
    
        // איפוס משחק - כל הנתונים והמצבים של המשחק מאופסים
        resetGame();
        
        // הצגת הודעת הפסד
        const modal = document.createElement('div');
        modal.classList.add('modal');
    
        const message = document.createElement('div');
        message.innerText = "Oh no! You're out of time. What a loser!🤦‍♀️";
        message.classList.add('message');
    
        const restartButton = document.createElement('button');
        restartButton.innerText = "Start Game";
        restartButton.classList.add('restart-button');
        restartButton.onclick = function() {
            window.location.href = "game.html"; // או כתובת URL לדף המשחק הראשי
        };
    
        modal.appendChild(message);
        modal.appendChild(restartButton);
    
        document.body.appendChild(modal);
    
        // הוספת אימוגים עצובים
        const sadImages = document.createElement('div');
        sadImages.classList.add('sad-images');
    
        for (let i = 0; i < 5; i++) {
            const img = document.createElement('img');
            img.src = 'https://cdn.jsdelivr.net/gh/googlei18n/noto-emoji/svg/emoji_u1f614.svg'; // שינוי לנתיב של האימוג העצוב
            img.classList.add('sad-image');
            sadImages.appendChild(img);
        }
    
        document.body.appendChild(sadImages);
    }
    

function resetGame() {
    // נאפס את הזמן הנותר
    timeLeft = 60;
    // נמחק את התוכן של הטיימר מה-HTML
    document.getElementById('timer').textContent = 'Time left: ' + timeLeft + ' seconds';
    createTable()
}

// פונקציה שמגדירה את זמן הטיימר על פי גודל הלוח שנבחר
function setTimer(boardSize) {
    // בדיקת גודל הלוח והגדרת הזמן לפיו
    switch (boardSize) {
        case '4':
            timeLeft = 60; // 1 דקה
            break;
        case '6':
            timeLeft = 180; // 3 דקות
            break;
        default:
            timeLeft = 60; // ברירת מחדל לגודל 4 על 4
            break;
    }

    // מציגים את זמן הטיימר ב-HTML
    document.getElementById('timer').textContent = 'Time left: ' + timeLeft + ' seconds';
}

function updateGameStatus(result) {
    if (result === 'win') {
        isGameWon = true; // הגדרת המשתנה ל-true במקרה של ניצחון
    }
}
function saveUserName(event){
   var userName = document.getElementById("username").value;
    localStorage.setItem("textName", userName);
    }


function getName(){
    document.getElementById("textName").innerText=localStorage.getItem("textName");
}






