const workoutsData = {
    arms: {
        name: "РУКИ",
        time: "25 минут",
        exercisesCount: "9 упражнений",
        heroImg: "images/arms.jpg",
        exercises: [
            { name: "Жим гантелей над плечами вверх", reps: "3x12" },
            { name: "Махи в стороны с гантелями", reps: "3x12" },
            { name: "Тяга гантелей в наклоне к плечам", reps: "3x12" },
            { name: "Подъем гантелей на бицепс верт. хватом", reps: "3x12" },
            { name: "Подъем гантелей на бицепс гориз. хватом", reps: "3x12" },
            { name: "Французский жим с гантелью из-за головы", reps: "3x12" },
            { name: "Жим гантелей от плеч лежа", reps: "3x12" },
            { name: "Жим гантелей от груди лежа", reps: "3x12" },
            { name: "Разведение гантелей в стороны лежа", reps: "3x12" }
        ]
    },
    abs: {
        name: "ПРЕСС",
        time: "20 минут",
        exercisesCount: "18 упражнений",
        heroImg: "images/abs.jpg",
        exercises: [
            { name: "Скручивания с руками за головой", reps: "1x12" },
            { name: "Скручивания с вытянутыми вверх руками", reps: "1x12" },
            { name: "Скручивания с вытянутыми за голову руками и согнутыми поднятыми ногами", reps: "1x12" },
            { name: "Сгибания поднятых ног к прессу лежа", reps: "1x12" },
            { name: "Ножницы ногами лежа", reps: "1x12" },
            { name: "Подъем прямых ног вверх и вниз", reps: "1x12" },
            { name: "Обычная планка", reps: "60 сек" },
            { name: "Планка с широкой постановкой рук и ног", reps: "30 сек" },
            { name: "Лодочка (подъем рук и ног лежа на спине)", reps: "1x12" },
            { name: "Русский твист сидя", reps: "1x12" },
            { name: "Подъем левой ноги лежа на боку", reps: "1x12" },
            { name: "Подъем правой ноги лежа на боку", reps: "1x12" },
            { name: "Тяга к пяткам лежа", reps: "1x12" },
            { name: "Боковая планка на левую сторону", reps: "30 сек" },
            { name: "Боковая планка на правую сторону", reps: "30 сек" },
            { name: "Разностаронний подьем рук и ног лежа", reps: "1x12" },
            { name: "Планка с боковым сгибанием ног (альпинист)", reps: "1x12" },
            { name: "V-планка сидя на ягодицах", reps: "1x12" },
        ]
    }
};

let completions = {
    arms: 0,
    abs: 0
};

const splash = document.getElementById('splash');
const mainMenu = document.getElementById('main-menu');
const workoutScreen = document.getElementById('workout-screen');
const backBtn = document.getElementById('back-to-menu');
const startWorkoutBtn = document.getElementById('start-workout-btn');
const workoutHeroImg = document.getElementById('workout-hero-img');
const workoutNameSpan = document.getElementById('workout-name');
const workoutTimeSpan = document.getElementById('workout-time');
const workoutExercisesCountSpan = document.getElementById('workout-exercises-count');
const exercisesListDiv = document.getElementById('exercises-list');

let currentWorkoutType = null;

function updateCompletionDisplay() {
    const armsCard = document.querySelector('.workout-card[data-workout="arms"] .completed-count');
    const absCard = document.querySelector('.workout-card[data-workout="abs"] .completed-count');
    if (armsCard) armsCard.textContent = `Выполнено: ${completions.arms} раз`;
    if (absCard) absCard.textContent = `Выполнено: ${completions.abs} раз`;
}

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
    
    workoutHeroImg.src = data.heroImg;
    workoutHeroImg.onerror = function() {
        this.src = 'https://via.placeholder.com/800x400?text=Workout';
    };
    
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
    workoutScreen.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    updateCompletionDisplay();
    currentWorkoutType = null;
}

function finishWorkout() {
    if (currentWorkoutType) {
        completions[currentWorkoutType]++;
        updateCompletionDisplay();
        alert(`Тренировка "${workoutsData[currentWorkoutType].name}" завершена!\nВы выполнили её ${completions[currentWorkoutType]} раз(а).`);
        closeWorkout();
    }
}

const workoutCards = document.querySelectorAll('.workout-card');
workoutCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const workout = card.getAttribute('data-workout');
        if (workout === 'arms') openWorkout('arms');
        else if (workout === 'abs') openWorkout('abs');
    });
});

if (backBtn) {
    backBtn.addEventListener('click', closeWorkout);
}

if (startWorkoutBtn) {
    startWorkoutBtn.addEventListener('click', finishWorkout);
}