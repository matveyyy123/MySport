// app.js - Основная логика приложения

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
            console.log('Ошибка загрузки completions:', e);
            resetCompletions();
        }
    } else {
        resetCompletions();
    }
    
    for (let key in completions) {
        if (typeof completions[key] !== 'number' || isNaN(completions[key])) {
            completions[key] = 0;
        }
    }
}

function resetCompletions() {
    completions = { warmup: 0, legs: 0, arms: 0, abs: 0, chest: 0, back: 0 };
}

function saveCompletions() {
    try {
        localStorage.setItem('workoutCompletions', JSON.stringify(completions));
        const saved = localStorage.getItem('workoutCompletions');
        if (!saved) {
            console.error('Не удалось сохранить данные в localStorage');
        }
    } catch(e) {
        console.error('Ошибка сохранения в localStorage:', e);
    }
}

function updateCompletionDisplay() {
    const workoutTypes = ['warmup', 'legs', 'arms', 'abs', 'chest', 'back'];
    workoutTypes.forEach(type => {
        const card = document.querySelector(`.workout-card[data-workout="${type}"] .completed-count`);
        if (card) {
            const count = completions[type] || 0;
            card.textContent = `Выполнено: ${count} раз`;
        }
    });
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

const imageCache = {};

function loadImageWithCache(src, imgElement, fallbackColor = '#ffffff') {
    if (!imgElement) return;
    
    if (imageCache[src]) {
        imgElement.src = imageCache[src];
        imgElement.style.display = 'block';
        imgElement.style.opacity = '1';
        if (imgElement.parentElement) {
            imgElement.parentElement.style.backgroundColor = 'transparent';
        }
        return;
    }
    
    imgElement.style.opacity = '0.5';
    imgElement.style.display = 'block';
    
    const img = new Image();
    
    img.onload = function() {
        imageCache[src] = src;
        imgElement.src = src;
        imgElement.style.display = 'block';
        imgElement.style.opacity = '1';
        imgElement.style.objectFit = 'cover';
        if (imgElement.parentElement) {
            imgElement.parentElement.style.backgroundColor = 'transparent';
        }
        imgElement.onerror = null;
    };
    
    img.onerror = function() {
        console.warn(`Не удалось загрузить изображение: ${src}`);
        imgElement.style.display = 'none';
        if (imgElement.parentElement) {
            imgElement.parentElement.style.backgroundColor = fallbackColor;
        }
        imgElement.style.opacity = '1';
    };
    
    img.src = src;
}

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

function openWorkout(workoutType) {
    const data = workoutsData[workoutType];
    if (!data) return;
    currentWorkoutType = workoutType;
    
    const workoutHeroImg = document.getElementById('workout-hero-img');
    const workoutNameSpan = document.getElementById('workout-name');
    const workoutTimeSpan = document.getElementById('workout-time');
    const workoutExercisesCountSpan = document.getElementById('workout-exercises-count');
    const exercisesListDiv = document.getElementById('exercises-list');
    
    if (workoutHeroImg) {
        loadImageWithCache(data.heroImg, workoutHeroImg, '#ffffff');
    }
    
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
        
        if (ex.img && !imageCache[ex.img]) {
            const preloadImg = new Image();
            preloadImg.src = ex.img;
            imageCache[ex.img] = ex.img;
        }
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
    
    setTimeout(() => {
        updateCompletionDisplay();
    }, 100);
    
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
    if (!exercises || !exercises[index]) {
        console.error('Упражнение не найдено');
        return;
    }
    
    const exercise = exercises[index];
    const total = exercises.length;
    
    exerciseCounter.textContent = `Упражнение ${index + 1} / ${total}`;
    activeExerciseName.textContent = exercise.name;
    activeExerciseReps.textContent = exercise.reps;
    
    if (activeExerciseImg) {
        loadImageWithCache(exercise.img, activeExerciseImg, '#ffffff');
    }
    
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
        } catch(e) {
            console.error('Ошибка парсинга workoutHistory:', e);
            workoutHistory = {};
        }
    }
    
    if (!workoutHistory[dateKey]) {
        workoutHistory[dateKey] = [];
    }
    
    if (!workoutHistory[dateKey].includes(workoutName)) {
        workoutHistory[dateKey].push(workoutName);
        try {
            localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory));
        } catch(e) {
            console.error('Ошибка сохранения workoutHistory:', e);
        }
    }
}

function showCodeModal(onSuccess, onFail) {
    const modal = document.getElementById('code-modal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    
    const codeInputs = modal.querySelectorAll('.code-input');
    const knowBtn = document.getElementById('code-know-btn');
    const notKnowBtn = document.getElementById('code-not-know-btn');
    
    codeInputs.forEach(input => {
        input.value = '';
    });
    
    setTimeout(() => {
        if (codeInputs[0]) codeInputs[0].focus();
    }, 100);
    
    const handleInput = (e, index) => {
        if (e.target.value.length === 1 && index < 3) {
            codeInputs[index + 1].focus();
        }
    };
    
    const cleanup = () => {
        modal.classList.add('hidden');
        codeInputs.forEach(input => {
            input.removeEventListener('input', handleInput);
        });
        if (knowBtn) knowBtn.removeEventListener('click', handleKnow);
        if (notKnowBtn) notKnowBtn.removeEventListener('click', handleNotKnow);
    };
    
    const handleKnow = () => {
        const enteredCode = Array.from(codeInputs).map(i => i.value).join('');
        if (enteredCode === '0612') {
            cleanup();
            onSuccess();
        } else {
            alert('Неверный код');
            codeInputs.forEach(input => {
                input.value = '';
            });
            if (codeInputs[0]) codeInputs[0].focus();
        }
    };
    
    const handleNotKnow = () => {
        cleanup();
        onFail();
    };
    
    codeInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => handleInput(e, index));
    });
    
    if (knowBtn) knowBtn.addEventListener('click', handleKnow);
    if (notKnowBtn) notKnowBtn.addEventListener('click', handleNotKnow);
}

function showFinishScreen() {
    stopTimer();
    
    const data = workoutsData[currentWorkoutType];
    if (!data) return;
    
    const exercisesCount = data.exercises.length;
    const durationFormatted = timerDisplay.textContent;
    
    const workoutType = currentWorkoutType;
    
    showCodeModal(
        () => {
            if (typeof completions[workoutType] === 'number') {
                completions[workoutType]++;
            } else {
                completions[workoutType] = 1;
            }
            saveCompletions();
            updateCompletionDisplay();
            addWorkoutToHistory(workoutType);
            if (typeof refreshStreak === 'function') {
                refreshStreak();
            }
            
            finishWorkoutName.textContent = data.name;
            finishExercisesCount.textContent = exercisesCount;
            finishDuration.textContent = durationFormatted;
            
            const finishHeroImg = document.getElementById('finish-hero-img');
            if (finishHeroImg) {
                loadImageWithCache('images/finish.jpg', finishHeroImg, '#ffffff');
            }
            
            activeWorkoutScreen.classList.add('hidden');
            finishScreen.classList.remove('hidden');
            setBodyBackground('#4682B4');
        },
        () => {
            finishWorkoutName.textContent = data.name;
            finishExercisesCount.textContent = exercisesCount;
            finishDuration.textContent = durationFormatted;
            
            const finishHeroImg = document.getElementById('finish-hero-img');
            if (finishHeroImg) {
                loadImageWithCache('images/finish.jpg', finishHeroImg, '#ffffff');
            }
            
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
    
    setTimeout(() => {
        updateCompletionDisplay();
    }, 100);
    
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
    if (timerDisplay) {
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function preloadAllImages() {
    const allImages = [];
    
    for (const workoutType in workoutsData) {
        const workout = workoutsData[workoutType];
        if (workout.heroImg) {
            allImages.push(workout.heroImg);
        }
        if (workout.exercises) {
            workout.exercises.forEach(ex => {
                if (ex.img) {
                    allImages.push(ex.img);
                }
            });
        }
    }
    
    allImages.push('images/finish.jpg');
    
    allImages.forEach(src => {
        if (!imageCache[src]) {
            const img = new Image();
            img.onload = () => {
                imageCache[src] = src;
            };
            img.onerror = () => {
                console.warn(`Не удалось предзагрузить: ${src}`);
            };
            img.src = src;
        }
    });
}

function initApp() {
    loadCompletions();
    preloadAllImages();
    
    setTimeout(() => {
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.classList.add('hidden');
                mainMenu.classList.remove('hidden');
                
                setTimeout(() => {
                    updateCompletionDisplay();
                }, 50);
                
                setBodyBackground('#26455f');
            }, 600);
        }
    }, 1500);
    
    const workoutCards = document.querySelectorAll('.workout-card');
    workoutCards.forEach(card => {
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
    
    if (backBtn) backBtn.addEventListener('click', closeWorkout);
    if (startWorkoutBtn) startWorkoutBtn.addEventListener('click', startActiveWorkout);
    if (activeBackBtn) activeBackBtn.addEventListener('click', closeWorkout);
    if (prevExerciseBtn) prevExerciseBtn.addEventListener('click', prevExercise);
    if (nextExerciseBtn) nextExerciseBtn.addEventListener('click', nextExercise);
    if (finishExerciseBtn) finishExerciseBtn.addEventListener('click', showFinishScreen);
    if (finishCloseBtn) finishCloseBtn.addEventListener('click', finishWorkoutAndExit);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

window.addEventListener('beforeunload', () => {
    saveCompletions();
});