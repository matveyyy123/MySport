const workoutsData = {
    warmup: {
        name: "РАЗМИНКА",
        time: "5 минут",
        exercisesCount: "9 упражнений",
        heroImg: "images/warmup.jpg",
        exercises: [
            { name: "Вращение головой", reps: "2x10", img: "images/exercises/warmup1.jpg" },
            { name: "Махи руками", reps: "2x10", img: "images/exercises/warmup2.jpg" },
            { name: "Вращение локтями", reps: "2x10", img: "images/exercises/warmup3.jpg" },
            { name: "Вращение кистями", reps: "2x10", img: "images/exercises/warmup4.jpg" },
            { name: "Наклоны корпуса", reps: "2x10", img: "images/exercises/warmup5.jpg" },
            { name: "Вращение тазом", reps: "1x10", img: "images/exercises/warmup6.jpg" },
            { name: "Вращение ногами", reps: "4x5", img: "images/exercises/warmup7.jpg" },
            { name: "Приседания без веса", reps: "1x10", img: "images/exercises/warmup8.jpg" },
            { name: "Прыжки", reps: "1x30", img: "images/exercises/warmup9.jpg" }
        ]
    },
    legs: {
        name: "НОГИ",
        time: "35 минут",
        exercisesCount: "9 упражнений",
        heroImg: "images/legs.jpg",
        exercises: [
            { name: "Приседания с гантелями", reps: "3x12", img: "images/exercises/legs1.jpg" },
            { name: "Выпады с гантелями", reps: "3x12", img: "images/exercises/legs2.jpg" },
            { name: "Плие-подъемы на носки с гантелями", reps: "3x12", img: "images/exercises/legs3.jpg" },
            { name: "Болгарские приседания с гантелями", reps: "3x12", img: "images/exercises/legs4.jpg" },
            { name: "Ягодичный мостик с гантелью", reps: "3x12", img: "images/exercises/legs5.jpg" },
            { name: "Выпады в сторону с гантелями", reps: "3x12", img: "images/exercises/legs6.jpg" },
            { name: "Подъемы на носки с гантелями", reps: "3x12", img: "images/exercises/legs7.jpg" },
            { name: "Приседания плие с гантелью", reps: "3x12", img: "images/exercises/legs8.jpg" },
            { name: "Глубокие приседания с задержкой с гантелями", reps: "3x12", img: "images/exercises/legs9.jpg" }
        ]
    },
    arms: {
        name: "РУКИ",
        time: "50 минут",
        exercisesCount: "10 упражнений",
        heroImg: "images/arms.jpg",
        exercises: [
            { name: "Жим гантелей над плечами вверх", reps: "3x12", img: "images/exercises/arms1.jpg" },
            { name: "Махи в стороны с гантелями", reps: "3x12", img: "images/exercises/arms2.jpg" },
            { name: "Тяга гантелей в наклоне к плечам", reps: "3x12", img: "images/exercises/arms3.jpg" },
            { name: "Подъем гантелей на бицепс вертикальным хватом", reps: "3x12", img: "images/exercises/arms4.jpg" },
            { name: "Французский жим с гантелью из-за головы", reps: "3x12", img: "images/exercises/arms6.jpg" },
            { name: "Подъем гантелей на бицепс горизонтальным хватом", reps: "3x12", img: "images/exercises/arms5.jpg" },
            { name: "Обратные отжимания от стула", reps: "3x12", img: "images/exercises/arms10.jpg" },
            { name: "Жим гантелей от плеч лежа", reps: "3x12", img: "images/exercises/arms7.jpg" },
            { name: "Жим гантелей от груди лежа", reps: "3x12", img: "images/exercises/arms8.jpg" },
            { name: "Разведение гантелей в стороны", reps: "3x12", img: "images/exercises/arms9.jpg" }
        ]
    },
    abs: {
        name: "ПРЕСС",
        time: "30 минут",
        exercisesCount: "15 упражнений",
        heroImg: "images/abs.jpg",
        exercises: [
            { name: "Скручивания с руками за головой", reps: "1x12", img: "images/exercises/abs1.jpg" },
            { name: "Скручивания с вытянутыми вверх руками", reps: "2x12", img: "images/exercises/abs2.jpg" },
            { name: "Ножницы ногами лежа", reps: "1x24", img: "images/exercises/abs3.jpg" },
            { name: "Скручивания с вытянутыми руками и согнутыми поднятыми ногами", reps: "2x12", img: "images/exercises/abs4.jpg" },
            { name: "Сгибания поднятых ног к прессу лежа", reps: "2x12", img: "images/exercises/abs5.jpg" },
            { name: "Обычная планка", reps: "60 сек", img: "images/exercises/abs6.jpg" },
            { name: "Подъем прямых ног лежа", reps: "2x12", img: "images/exercises/abs7.jpg" },
            { name: "Планка с широкой постановкой рук и ног", reps: "30 сек", img: "images/exercises/abs8.jpg" },
            { name: "Лодочка (подъем рук и ног лежа на спине)", reps: "2x12", img: "images/exercises/abs9.jpg" },
            { name: "Русский твист сидя", reps: "1x24", img: "images/exercises/abs10.jpg" },
            { name: "Боковая планка на левую сторону", reps: "60 сек", img: "images/exercises/abs11.jpg" },
            { name: "Боковая планка на правую сторону", reps: "60 сек", img: "images/exercises/abs12.jpg" },
            { name: "Тяга к пяткам лежа", reps: "1x24", img: "images/exercises/abs13.jpg" },
            { name: "Разностаронний подьем рук и ног лежа", reps: "2x12", img: "images/exercises/abs14.jpg" },
            { name: "Планка с боковым сгибанием ног (альпинист)", reps: "1x12", img: "images/exercises/abs15.jpg" }
        ]
    },
    chest: {
        name: "ГРУДЬ",
        time: "25 минут",
        exercisesCount: "10 упражнений",
        heroImg: "images/chest.jpg",
        exercises: [
            { name: "Отжимания от коленей", reps: "3x12", img: "images/exercises/chest1.jpg" },
            { name: "Отжимания с упором спереди", reps: "3x12", img: "images/exercises/chest2.jpg" },
            { name: "Отжимания от пола", reps: "3x12", img: "images/exercises/chest3.jpg" },
            { name: "Лежа поднятия гантелей от плеч наверх", reps: "3x12", img: "images/exercises/chest4.jpg" },
            { name: "Отжимания с упором сзади", reps: "3x12", img: "images/exercises/chest5.jpg" },
            { name: "Обратные отжимания от стула", reps: "3x12", img: "images/exercises/chest6.jpg" },
            { name: "Широкие отжимания", reps: "3x12", img: "images/exercises/chest7.jpg" },
            { name: "Лежа поднятия гантелей от груди наверх", reps: "3x12", img: "images/exercises/chest8.jpg" },
            { name: "Отжимания со сведенными ладонями", reps: "3x12", img: "images/exercises/chest9.jpg" },
            { name: "Лежа поднятие гантелей от сторон наверх", reps: "3x12", img: "images/exercises/chest10.jpg" }
        ]
    },
    back: {
        name: "СПИНА",
        time: "35 минут",
        exercisesCount: "9 упражнений",
        heroImg: "images/back.jpg",
        exercises: [
            { name: "Гиперэкстензия (лодочка) лёжа на животе", reps: "3x12", img: "images/exercises/back1.jpg" },
            { name: "V-отжимания", reps: "3x12", img: "images/exercises/back2.jpg" },
            { name: "Подтягивания широким хватом", reps: "3x12", img: "images/exercises/back3.jpg" },
            { name: "Тяга двух гантелей в наклоне", reps: "3x12", img: "images/exercises/back4.jpg" },
            { name: "Разведение гантелей в наклоне (задняя дельта/трапеция)", reps: "3x12", img: "images/exercises/back5.jpg" },
            { name: "Подтягивания узким параллельным хватом", reps: "3x12", img: "images/exercises/back6.jpg" },
            { name: "Подъем корпуса лёжа на животе (руки за головой)", reps: "3x12", img: "images/exercises/back7.jpg" },
            { name: "Пуловер с одной гантелью лёжа на скамье/полу", reps: "3x12", img: "images/exercises/back8.jpg" },
            { name: "Шраги с гантелями (трапеции)", reps: "3x12", img: "images/exercises/back9.jpg" }
        ]
    }
};

// ЗАГРУЗКА СОХРАНЕННЫХ ДАННЫХ
let completions = { warmup: 0, legs: 0, arms: 0, abs: 0, chest: 0, back: 0 };

function loadCompletions() {
    const saved = localStorage.getItem('workoutCompletions');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (let key in completions) {
                if (typeof parsed[key] === 'number' && !isNaN(parsed[key])) {
                    completions[key] = parsed[key];
                } else {
                    completions[key] = 0;
                }
            }
        } catch(e) {
            console.log('Ошибка загрузки');
        }
    }
    for (let key in completions) {
        if (typeof completions[key] !== 'number' || isNaN(completions[key])) {
            completions[key] = 0;
        }
    }
}

function saveCompletions() {
    localStorage.setItem('workoutCompletions', JSON.stringify(completions));
}

function updateCompletionDisplay() {
    const warmupCard = document.querySelector('.workout-card[data-workout="warmup"] .completed-count');
    const legsCard = document.querySelector('.workout-card[data-workout="legs"] .completed-count');
    const armsCard = document.querySelector('.workout-card[data-workout="arms"] .completed-count');
    const absCard = document.querySelector('.workout-card[data-workout="abs"] .completed-count');
    const chestCard = document.querySelector('.workout-card[data-workout="chest"] .completed-count');
    const backCard = document.querySelector('.workout-card[data-workout="back"] .completed-count');
    
    if (warmupCard) warmupCard.textContent = `Выполнено: ${completions.warmup} раз`;
    if (legsCard) legsCard.textContent = `Выполнено: ${completions.legs} раз`;
    if (armsCard) armsCard.textContent = `Выполнено: ${completions.arms} раз`;
    if (absCard) absCard.textContent = `Выполнено: ${completions.abs} раз`;
    if (chestCard) chestCard.textContent = `Выполнено: ${completions.chest} раз`;
    if (backCard) backCard.textContent = `Выполнено: ${completions.back} раз`;
}

function setBodyBackground(color) {
    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color;
}

let currentWorkoutType = null;
let currentExerciseIndex = 0;
let timerInterval = null;
let timerSeconds = 0;
let isTimerRunning = false;

const splash = document.getElementById('splash');
const mainMenu = document.getElementById('main-menu');
const workoutScreen = document.getElementById('workout-screen');
const activeWorkoutScreen = document.getElementById('active-workout-screen');
const finishScreen = document.getElementById('finish-screen');
const backBtn = document.getElementById('back-to-menu');
const startWorkoutBtn = document.getElementById('start-workout-btn');
const activeBackBtn = document.getElementById('active-back-btn');
const prevExerciseBtn = document.getElementById('prev-exercise-btn');
const nextExerciseBtn = document.getElementById('next-exercise-btn');
const finishExerciseBtn = document.getElementById('finish-exercise-btn');
const finishCloseBtn = document.getElementById('finish-close-btn');
const exerciseCounter = document.getElementById('exercise-counter');
const timerDisplay = document.getElementById('timer-display');
const activeExerciseImg = document.getElementById('active-exercise-img');
const activeExerciseName = document.getElementById('active-exercise-name');
const activeExerciseReps = document.getElementById('active-exercise-reps');
const finishWorkoutName = document.getElementById('finish-workout-name');
const finishExercisesCount = document.getElementById('finish-exercises-count');
const finishDuration = document.getElementById('finish-duration');

loadCompletions();

setTimeout(() => {
    if (splash) {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.classList.add('hidden');
            mainMenu.classList.remove('hidden');
            updateCompletionDisplay();
            setBodyBackground('#26455f');
        }, 600);
    }
}, 2000);

function openWorkout(workoutType) {
    const data = workoutsData[workoutType];
    if (!data) return;
    currentWorkoutType = workoutType;
    
    const workoutHeroImg = document.getElementById('workout-hero-img');
    const workoutNameSpan = document.getElementById('workout-name');
    const workoutTimeSpan = document.getElementById('workout-time');
    const workoutExercisesCountSpan = document.getElementById('workout-exercises-count');
    const exercisesListDiv = document.getElementById('exercises-list');
    
    workoutHeroImg.style.display = 'none';
    workoutHeroImg.parentElement.style.backgroundColor = '#ffffff';
    
    const heroImg = new Image();
    heroImg.onload = function() {
        workoutHeroImg.src = data.heroImg;
        workoutHeroImg.style.display = 'block';
        workoutHeroImg.style.objectFit = 'cover';
        workoutHeroImg.style.padding = '0';
        workoutHeroImg.parentElement.style.backgroundColor = 'transparent';
    };
    heroImg.onerror = function() {
        workoutHeroImg.style.display = 'none';
        workoutHeroImg.parentElement.style.backgroundColor = '#ffffff';
    };
    heroImg.src = data.heroImg;
    
    workoutNameSpan.textContent = data.name;
    workoutTimeSpan.textContent = data.time;
    workoutExercisesCountSpan.textContent = data.exercisesCount;
    
    exercisesListDiv.innerHTML = '';
    data.exercises.forEach((ex, idx) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        exerciseDiv.innerHTML = `
            <div class="exercise-num">${idx + 1}</div>
            <div class="exercise-details">
                <div class="exercise-name">${ex.name}</div>
                <div class="exercise-reps">${ex.reps}</div>
            </div>
        `;
        exercisesListDiv.appendChild(exerciseDiv);
    });
    
    mainMenu.classList.add('hidden');
    workoutScreen.classList.remove('hidden');
    setBodyBackground('#f8fafc');
}

function closeWorkout() {
    stopTimer();
    workoutScreen.classList.add('hidden');
    activeWorkoutScreen.classList.add('hidden');
    finishScreen.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    updateCompletionDisplay();
    currentWorkoutType = null;
    currentExerciseIndex = 0;
    timerSeconds = 0;
    updateTimerDisplay();
    setBodyBackground('#26455f');
}

function startActiveWorkout() {
    if (!currentWorkoutType) return;
    currentExerciseIndex = 0;
    timerSeconds = 0;
    updateTimerDisplay();
    workoutScreen.classList.add('hidden');
    activeWorkoutScreen.classList.remove('hidden');
    loadExercise(currentExerciseIndex);
    startTimer();
    setBodyBackground('#4682B4');
}

function loadExercise(index) {
    const exercises = workoutsData[currentWorkoutType].exercises;
    const exercise = exercises[index];
    const total = exercises.length;
    
    exerciseCounter.textContent = `Упражнение ${index + 1} / ${total}`;
    activeExerciseName.textContent = exercise.name;
    activeExerciseReps.textContent = exercise.reps;
    
    activeExerciseImg.style.display = 'none';
    activeExerciseImg.parentElement.style.backgroundColor = '#ffffff';
    
    const img = new Image();
    img.onload = function() {
        activeExerciseImg.src = exercise.img;
        activeExerciseImg.style.display = 'block';
        activeExerciseImg.style.objectFit = 'contain';
        activeExerciseImg.style.padding = '0';
        activeExerciseImg.parentElement.style.backgroundColor = '#ffffff';
        activeExerciseImg.onerror = null;
    };
    img.onerror = function() {
        activeExerciseImg.style.display = 'none';
        activeExerciseImg.parentElement.style.backgroundColor = '#ffffff';
    };
    img.src = exercise.img;
    
    if (index === 0) {
        prevExerciseBtn.classList.add('hidden');
    } else {
        prevExerciseBtn.classList.remove('hidden');
    }
    
    if (index === total - 1) {
        nextExerciseBtn.classList.add('hidden');
        finishExerciseBtn.classList.remove('hidden');
    } else {
        nextExerciseBtn.classList.remove('hidden');
        finishExerciseBtn.classList.add('hidden');
    }
}

function nextExercise() {
    const exercises = workoutsData[currentWorkoutType].exercises;
    if (currentExerciseIndex < exercises.length - 1) {
        currentExerciseIndex++;
        loadExercise(currentExerciseIndex);
    }
}

function prevExercise() {
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
        loadExercise(currentExerciseIndex);
    }
}

function addWorkoutToHistory(workoutType) {
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    
    const workoutNames = {
        arms: 'РУКИ',
        chest: 'ГРУДЬ',
        abs: 'ПРЕСС',
        back: 'СПИНА',
        legs: 'НОГИ',
        warmup: 'РАЗМИНКА'
    };
    
    const workoutName = workoutNames[workoutType] || workoutType;
    
    let workoutHistory = {};
    const saved = localStorage.getItem('workoutHistory');
    if (saved) {
        try {
            workoutHistory = JSON.parse(saved);
        } catch(e) {}
    }
    
    if (!workoutHistory[dateKey]) {
        workoutHistory[dateKey] = [];
    }
    
    if (!workoutHistory[dateKey].includes(workoutName)) {
        workoutHistory[dateKey].push(workoutName);
        localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory));
    }
}

// МОДАЛЬНОЕ ОКНО ДЛЯ КОДА
let pendingWorkout = null;
let pendingFinishCallback = null;

function showCodeModal(onSuccess, onFail) {
    const modal = document.getElementById('code-modal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    
    const codeInputs = modal.querySelectorAll('.code-input');
    const knowBtn = document.getElementById('code-know-btn');
    const notKnowBtn = document.getElementById('code-not-know-btn');
    
    codeInputs.forEach((input, index) => {
        input.value = '';
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < 3) {
                codeInputs[index + 1].focus();
            }
        });
    });
    
    const cleanup = () => {
        modal.classList.add('hidden');
        codeInputs.forEach(input => input.value = '');
        knowBtn.removeEventListener('click', handleKnow);
        notKnowBtn.removeEventListener('click', handleNotKnow);
    };
    
    const handleKnow = () => {
        const enteredCode = Array.from(codeInputs).map(i => i.value).join('');
        if (enteredCode === '0612') {
            cleanup();
            onSuccess();
        } else {
            alert('Неверный код');
        }
    };
    
    const handleNotKnow = () => {
        cleanup();
        onFail();
    };
    
    knowBtn.addEventListener('click', handleKnow);
    notKnowBtn.addEventListener('click', handleNotKnow);
}

function showFinishScreenWithCode() {
    stopTimer();
    
    const data = workoutsData[currentWorkoutType];
    const exercisesCount = data.exercises.length;
    const durationFormatted = timerDisplay.textContent;
    
    const workoutType = currentWorkoutType;
    const workoutNameForHistory = {
        warmup: 'РАЗМИНКА',
        legs: 'НОГИ',
        arms: 'РУКИ',
        abs: 'ПРЕСС',
        chest: 'ГРУДЬ',
        back: 'СПИНА'
    }[workoutType];
    
    showCodeModal(
        // Успех (код верный) - добавляем в счетчик и историю
        () => {
            // Добавляем в счетчик
            if (typeof completions[workoutType] === 'number') {
                completions[workoutType]++;
            } else {
                completions[workoutType] = 1;
            }
            saveCompletions();
            updateCompletionDisplay();
            
            // Добавляем в календарь (историю)
            const today = new Date();
            const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
            let workoutHistory = {};
            const saved = localStorage.getItem('workoutHistory');
            if (saved) {
                try {
                    workoutHistory = JSON.parse(saved);
                } catch(e) {}
            }
            if (!workoutHistory[dateKey]) {
                workoutHistory[dateKey] = [];
            }
            if (!workoutHistory[dateKey].includes(workoutNameForHistory)) {
                workoutHistory[dateKey].push(workoutNameForHistory);
                localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory));
            }
            
            // Показываем экран финиша
            finishWorkoutName.textContent = data.name;
            finishExercisesCount.textContent = exercisesCount;
            finishDuration.textContent = durationFormatted;
            
            const finishHeroImg = document.getElementById('finish-hero-img');
            finishHeroImg.style.display = 'none';
            finishHeroImg.parentElement.style.backgroundColor = '#ffffff';
            
            const finishImg = new Image();
            finishImg.onload = function() {
                finishHeroImg.src = "images/finish.jpg";
                finishHeroImg.style.display = 'block';
                finishHeroImg.style.objectFit = 'cover';
                finishHeroImg.parentElement.style.backgroundColor = 'transparent';
            };
            finishImg.onerror = function() {
                finishHeroImg.style.display = 'none';
                finishHeroImg.parentElement.style.backgroundColor = '#ffffff';
            };
            finishImg.src = "images/finish.jpg";
            
            activeWorkoutScreen.classList.add('hidden');
            finishScreen.classList.remove('hidden');
            setBodyBackground('#4682B4');
        },
        // Провал (код неверный или нажал НЕ ЗНАЮ) - показываем финиш без сохранения
        () => {
            finishWorkoutName.textContent = data.name;
            finishExercisesCount.textContent = exercisesCount;
            finishDuration.textContent = durationFormatted;
            
            const finishHeroImg = document.getElementById('finish-hero-img');
            finishHeroImg.style.display = 'none';
            finishHeroImg.parentElement.style.backgroundColor = '#ffffff';
            
            const finishImg = new Image();
            finishImg.onload = function() {
                finishHeroImg.src = "images/finish.jpg";
                finishHeroImg.style.display = 'block';
                finishHeroImg.style.objectFit = 'cover';
                finishHeroImg.parentElement.style.backgroundColor = 'transparent';
            };
            finishImg.onerror = function() {
                finishHeroImg.style.display = 'none';
                finishHeroImg.parentElement.style.backgroundColor = '#ffffff';
            };
            finishImg.src = "images/finish.jpg";
            
            activeWorkoutScreen.classList.add('hidden');
            finishScreen.classList.remove('hidden');
            setBodyBackground('#4682B4');
        }
    );
}

function finishWorkoutAndExit() {
    finishScreen.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    currentWorkoutType = null;
    currentExerciseIndex = 0;
    timerSeconds = 0;
    updateTimerDisplay();
    updateCompletionDisplay();
    setBodyBackground('#26455f');
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    isTimerRunning = true;
    timerInterval = setInterval(() => {
        if (isTimerRunning) {
            timerSeconds++;
            updateTimerDisplay();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    isTimerRunning = false;
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.querySelectorAll('.workout-card').forEach(card => {
    card.addEventListener('click', () => {
        const workout = card.getAttribute('data-workout');
        if (workout === 'warmup') openWorkout('warmup');
        else if (workout === 'legs') openWorkout('legs');
        else if (workout === 'arms') openWorkout('arms');
        else if (workout === 'abs') openWorkout('abs');
        else if (workout === 'chest') openWorkout('chest');
        else if (workout === 'back') openWorkout('back');
    });
});

backBtn.addEventListener('click', closeWorkout);
startWorkoutBtn.addEventListener('click', startActiveWorkout);
activeBackBtn.addEventListener('click', closeWorkout);
prevExerciseBtn.addEventListener('click', prevExercise);
nextExerciseBtn.addEventListener('click', nextExercise);
finishExerciseBtn.addEventListener('click', showFinishScreenWithCode);
finishCloseBtn.addEventListener('click', finishWorkoutAndExit);

// КАЛЕНДАРЬ
const calendarBtn = document.getElementById('calendar-btn');
const calendarModal = document.getElementById('calendar-modal');
const calendarCloseBtn = document.getElementById('calendar-close-btn');
const calendarOverlay = document.querySelector('.calendar-modal-overlay');
const prevMonthBtn = document.getElementById('prev-month-btn');
const nextMonthBtn = document.getElementById('next-month-btn');
const currentMonthYearSpan = document.getElementById('current-month-year');
const calendarDaysDiv = document.getElementById('calendar-days');

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function loadWorkoutHistory() {
    const saved = localStorage.getItem('workoutHistory');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch(e) {
            return {};
        }
    }
    return {};
}

function getWorkoutStyleForDate(year, month, day) {
    const history = loadWorkoutHistory();
    const dateKey = `${year}-${month + 1}-${day}`;
    const workouts = history[dateKey];
    if (!workouts || workouts.length === 0) return { class: '', style: '' };
    
    const colorMap = {
        'РУКИ': '#e74c3c',
        'ГРУДЬ': '#e67e22',
        'ПРЕСС': '#27ae60',
        'СПИНА': '#3498db',
        'НОГИ': '#9b59b6'
    };
    
    const colors = workouts.map(w => colorMap[w]).filter(c => c);
    
    if (colors.length === 0) return { class: '', style: '' };
    if (colors.length === 1) {
        return { class: '', style: `background: ${colors[0]}; color: white;` };
    }
    if (colors.length === 2) {
        return { 
            class: 'double-workout', 
            style: `background: linear-gradient(90deg, ${colors[0]} 0%, ${colors[0]} 50%, ${colors[1]} 50%, ${colors[1]} 100%); color: white;`
        };
    }
    if (colors.length >= 3) {
        return { 
            class: 'rainbow-workout', 
            style: `background: linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[0]}); background-size: 200% 200%; color: white; animation: rainbowShift 2s ease infinite;`
        };
    }
    return { class: '', style: '' };
}

function getMonthlyStats() {
    const history = loadWorkoutHistory();
    const stats = { arms: 0, chest: 0, abs: 0, back: 0, legs: 0 };
    const workoutNames = { 'РУКИ': 'arms', 'ГРУДЬ': 'chest', 'ПРЕСС': 'abs', 'СПИНА': 'back', 'НОГИ': 'legs' };
    
    for (const [dateKey, workouts] of Object.entries(history)) {
        const [year, month] = dateKey.split('-');
        if (parseInt(year) === currentYear && parseInt(month) === currentMonth + 1) {
            workouts.forEach(workout => {
                const key = workoutNames[workout];
                if (key) stats[key]++;
            });
        }
    }
    return stats;
}

function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    let startOffset = firstDayOfMonth.getDay();
    startOffset = startOffset === 0 ? 6 : startOffset - 1;
    
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    currentMonthYearSpan.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    calendarDaysDiv.innerHTML = '';
    
    for (let i = 0; i < startOffset; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'calendar-day empty';
        calendarDaysDiv.appendChild(emptyDiv);
    }
    
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        dayDiv.textContent = day;
        
        const { class: workoutClass, style } = getWorkoutStyleForDate(currentYear, currentMonth, day);
        if (workoutClass) {
            dayDiv.classList.add(workoutClass);
        }
        if (style) {
            dayDiv.setAttribute('style', style);
        }
        
        if (currentYear === today.getFullYear() && currentMonth === today.getMonth() && day === today.getDate()) {
            dayDiv.style.boxShadow = '0 0 0 2px #4682B4';
            dayDiv.style.position = 'relative';
            dayDiv.style.zIndex = '1';
        }
        
        calendarDaysDiv.appendChild(dayDiv);
    }
    
    updateLegendStats();
}

function updateLegendStats() {
    const stats = getMonthlyStats();
    const legendItems = document.querySelectorAll('.legend-item');
    const workoutKeys = ['arms', 'chest', 'abs', 'back', 'legs'];
    const workoutNames = ['РУКИ', 'ГРУДЬ', 'ПРЕСС', 'СПИНА', 'НОГИ'];
    const colors = ['#e74c3c', '#e67e22', '#27ae60', '#3498db', '#9b59b6'];
    
    legendItems.forEach((item, index) => {
        if (index < workoutKeys.length) {
            const count = stats[workoutKeys[index]];
            item.innerHTML = `<span class="legend-color" style="background: ${colors[index]}"></span>${workoutNames[index]} — ${count}`;
        }
    });
}

function openCalendarModal() {
    renderCalendar();
    calendarModal.classList.remove('hidden');
}

function closeCalendarModal() {
    calendarModal.classList.add('hidden');
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

if (calendarBtn) calendarBtn.addEventListener('click', openCalendarModal);
if (calendarCloseBtn) calendarCloseBtn.addEventListener('click', closeCalendarModal);
if (calendarOverlay) calendarOverlay.addEventListener('click', closeCalendarModal);
if (prevMonthBtn) prevMonthBtn.addEventListener('click', prevMonth);
if (nextMonthBtn) nextMonthBtn.addEventListener('click', nextMonth);