const workoutsData = {
    arms: {
        name: "РУКИ",
        time: "25 минут",
        exercisesCount: "9 упражнений",
        heroImg: "images/arms.jpg",
        exercises: [
            { name: "Жим гантелей над плечами вверх", reps: "3x12", img: "images/exercises/arms1.jpg" },
            { name: "Махи в стороны с гантелями", reps: "3x12", img: "images/exercises/arms2.jpg" },
            { name: "Тяга гантелей в наклоне к плечам", reps: "3x12", img: "images/exercises/arms3.jpg" },
            { name: "Подъем гантелей на бицепс верт. хватом", reps: "3x12", img: "images/exercises/arms4.jpg" },
            { name: "Подъем гантелей на бицепс гориз. хватом", reps: "3x12", img: "images/exercises/arms5.jpg" },
            { name: "Французский жим с гантелью из-за головы", reps: "3x12", img: "images/exercises/arms6.jpg" },
            { name: "Жим гантелей от плеч лежа", reps: "3x12", img: "images/exercises/arms7.jpg" },
            { name: "Жим гантелей от груди лежа", reps: "3x12", img: "images/exercises/arms8.jpg" },
            { name: "Разведение гантелей в стороны лежа", reps: "3x12", img: "images/exercises/arms9.jpg" }
        ]
    },
    abs: {
        name: "ПРЕСС",
        time: "20 минут",
        exercisesCount: "18 упражнений",
        heroImg: "images/abs.jpg",
        exercises: [
            { name: "Скручивания с руками за головой", reps: "1x12", img: "images/exercises/abs1.jpg" },
            { name: "Скручивания с вытянутыми вверх руками", reps: "1x12", img: "images/exercises/abs2.jpg" },
            { name: "Скручивания с вытянутыми за голову руками и согнутыми поднятыми ногами", reps: "1x12", img: "images/exercises/abs3.jpg" },
            { name: "Сгибания поднятых ног к прессу лежа", reps: "1x12", img: "images/exercises/abs4.jpg" },
            { name: "Ножницы ногами лежа", reps: "1x12", img: "images/exercises/abs5.jpg" },
            { name: "Подъем прямых ног вверх и вниз", reps: "1x12", img: "images/exercises/abs6.jpg" },
            { name: "Обычная планка", reps: "60 сек", img: "images/exercises/abs7.jpg" },
            { name: "Планка с широкой постановкой рук и ног", reps: "30 сек", img: "images/exercises/abs8.jpg" },
            { name: "Лодочка (подъем рук и ног лежа на спине)", reps: "1x12", img: "images/exercises/abs9.jpg" },
            { name: "Русский твист сидя", reps: "1x12", img: "images/exercises/abs10.jpg" },
            { name: "Подъем левой ноги лежа на боку", reps: "1x12", img: "images/exercises/abs11.jpg" },
            { name: "Подъем правой ноги лежа на боку", reps: "1x12", img: "images/exercises/abs12.jpg" },
            { name: "Тяга к пяткам лежа", reps: "1x12", img: "images/exercises/abs13.jpg" },
            { name: "Боковая планка на левую сторону", reps: "30 сек", img: "images/exercises/abs14.jpg" },
            { name: "Боковая планка на правую сторону", reps: "30 сек", img: "images/exercises/abs15.jpg" },
            { name: "Разностаронний подьем рук и ног лежа", reps: "1x12", img: "images/exercises/abs16.jpg" },
            { name: "Планка с боковым сгибанием ног (альпинист)", reps: "1x12", img: "images/exercises/abs17.jpg" },
            { name: "V-планка сидя на ягодицах", reps: "1x12", img: "images/exercises/abs18.jpg" }
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
    }
};

// ЗАГРУЗКА СОХРАНЕННЫХ ДАННЫХ
let completions = { arms: 0, abs: 0, chest: 0 };

function loadCompletions() {
    const saved = localStorage.getItem('workoutCompletions');
    if (saved) {
        completions = JSON.parse(saved);
    }
}

function saveCompletions() {
    localStorage.setItem('workoutCompletions', JSON.stringify(completions));
}

function updateCompletionDisplay() {
    const armsCard = document.querySelector('.workout-card[data-workout="arms"] .completed-count');
    const absCard = document.querySelector('.workout-card[data-workout="abs"] .completed-count');
    const chestCard = document.querySelector('.workout-card[data-workout="chest"] .completed-count');
    if (armsCard) armsCard.textContent = `Выполнено: ${completions.arms} раз`;
    if (absCard) absCard.textContent = `Выполнено: ${completions.abs} раз`;
    if (chestCard) chestCard.textContent = `Выполнено: ${completions.chest} раз`;
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

// Загружаем сохраненные данные при старте
loadCompletions();

setTimeout(() => {
    if (splash) {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.classList.add('hidden');
            mainMenu.classList.remove('hidden');
            updateCompletionDisplay();
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
    
    workoutHeroImg.src = data.heroImg;
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
}

function loadExercise(index) {
    const exercises = workoutsData[currentWorkoutType].exercises;
    const exercise = exercises[index];
    const total = exercises.length;
    
    exerciseCounter.textContent = `Упражнение ${index + 1} / ${total}`;
    activeExerciseName.textContent = exercise.name;
    activeExerciseReps.textContent = exercise.reps;
    activeExerciseImg.src = exercise.img;
    activeExerciseImg.onerror = function() {
        this.style.display = 'none';
        this.parentElement.style.backgroundColor = '#ffffff';
    };
    activeExerciseImg.onload = function() {
        this.style.display = 'block';
        this.parentElement.style.backgroundColor = 'transparent';
    };
    
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

function showFinishScreen() {
    stopTimer();
    const data = workoutsData[currentWorkoutType];
    const exercisesCount = data.exercises.length;
    const durationFormatted = timerDisplay.textContent;
    
    // Увеличиваем счетчик и СОХРАНЯЕМ
    completions[currentWorkoutType]++;
    saveCompletions();
    updateCompletionDisplay();
    
    finishWorkoutName.textContent = data.name;
    finishExercisesCount.textContent = exercisesCount;
    finishDuration.textContent = durationFormatted;
    
    const finishHeroImg = document.getElementById('finish-hero-img');
    finishHeroImg.src = "images/finish.jpg";
    finishHeroImg.onerror = function() {
        this.style.display = 'none';
        this.parentElement.style.backgroundColor = '#ffffff';
    };
    finishHeroImg.onload = function() {
        this.style.display = 'block';
        this.parentElement.style.backgroundColor = 'transparent';
    };
    
    activeWorkoutScreen.classList.add('hidden');
    finishScreen.classList.remove('hidden');
}

function finishWorkoutAndExit() {
    finishScreen.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    currentWorkoutType = null;
    currentExerciseIndex = 0;
    timerSeconds = 0;
    updateTimerDisplay();
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
        if (workout === 'arms') openWorkout('arms');
        else if (workout === 'abs') openWorkout('abs');
        else if (workout === 'chest') openWorkout('chest');
    });
});

backBtn.addEventListener('click', closeWorkout);
startWorkoutBtn.addEventListener('click', startActiveWorkout);
activeBackBtn.addEventListener('click', closeWorkout);
prevExerciseBtn.addEventListener('click', prevExercise);
nextExerciseBtn.addEventListener('click', nextExercise);
finishExerciseBtn.addEventListener('click', showFinishScreen);
finishCloseBtn.addEventListener('click', finishWorkoutAndExit);