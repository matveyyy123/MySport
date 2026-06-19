// app.js - Основная логика приложения

// ===== УПРАВЛЕНИЕ СОСТОЯНИЕМ =====
let completions = { warmup: 0, legs: 0, arms: 0, abs: 0, chest: 0, back: 0 };
let currentWorkoutType = null;
let currentExerciseIndex = 0;
let timerSeconds = 0;
let isTimerRunning = false;
let timerInterval = null;

// ===== СОХРАНЕНИЕ И ЗАГРУЗКА СОСТОЯНИЯ =====

// Загрузка завершенных тренировок
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
    } catch(e) {
        console.error('Ошибка сохранения completions:', e);
    }
}

// Сохранение состояния тренировки
function saveWorkoutState() {
    const state = {
        workoutType: currentWorkoutType,
        exerciseIndex: currentExerciseIndex,
        timerSeconds: timerSeconds,
        isTimerRunning: isTimerRunning,
        timestamp: Date.now()
    };
    try {
        localStorage.setItem('activeWorkoutState', JSON.stringify(state));
    } catch(e) {
        console.error('Ошибка сохранения состояния тренировки:', e);
    }
}

// Загрузка состояния тренировки
function loadWorkoutState() {
    try {
        const saved = localStorage.getItem('activeWorkoutState');
        if (saved) {
            const state = JSON.parse(saved);
            // Проверяем, что состояние не старше 24 часов (если старше - считаем неактуальным)
            if (state.timestamp && (Date.now() - state.timestamp) < 24 * 60 * 60 * 1000) {
                return state;
            }
        }
    } catch(e) {
        console.error('Ошибка загрузки состояния тренировки:', e);
    }
    return null;
}

// Очистка состояния тренировки (при завершении)
function clearWorkoutState() {
    try {
        localStorage.removeItem('activeWorkoutState');
    } catch(e) {
        console.error('Ошибка очистки состояния тренировки:', e);
    }
}

// Сохранение последнего просмотренного экрана
function saveLastScreen(screen) {
    try {
        localStorage.setItem('lastScreen', screen);
    } catch(e) {
        console.error('Ошибка сохранения последнего экрана:', e);
    }
}

function loadLastScreen() {
    try {
        return localStorage.getItem('lastScreen');
    } catch(e) {
        return null;
    }
}

// ===== ЗАГРУЗКА ИЗОБРАЖЕНИЙ =====
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

// ===== DOM ЭЛЕМЕНТЫ =====
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

// ===== ОБНОВЛЕНИЕ ИНТЕРФЕЙСА =====
function setBodyBackground(color) {
    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color;
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

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    if (timerDisplay) {
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// ===== ТАЙМЕР =====
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    isTimerRunning = true;
    timerInterval = setInterval(() => {
        if (isTimerRunning) {
            timerSeconds++;
            updateTimerDisplay();
            // Сохраняем состояние каждые 5 секунд
            if (timerSeconds % 5 === 0) {
                saveWorkoutState();
            }
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

// ===== НАВИГАЦИЯ ПО ТРЕНИРОВКЕ =====
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
    
    // Сохраняем состояние при смене упражнения
    saveWorkoutState();
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

// ===== ОТКРЫТИЕ/ЗАКРЫТИЕ ТРЕНИРОВКИ =====
function openWorkout(workoutType) {
    const data = workoutsData[workoutType];
    if (!data) return;
    currentWorkoutType = workoutType;
    currentExerciseIndex = 0;
    timerSeconds = 0;
    updateTimerDisplay();
    
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
    saveLastScreen('workout');
}

function closeWorkout() {
    stopTimer();
    clearWorkoutState();
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
    saveLastScreen('main');
}

// ===== АКТИВНАЯ ТРЕНИРОВКА =====
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
    saveWorkoutState();
    saveLastScreen('active');
}

// ===== КОД ДОСТУПА =====
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

// ===== ФИНИШ ТРЕНИРОВКИ =====
function showFinishScreen() {
    stopTimer();
    clearWorkoutState();
    
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
            saveLastScreen('finish');
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
            saveLastScreen('finish');
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
    clearWorkoutState();
    
    setTimeout(() => {
        updateCompletionDisplay();
    }, 100);
    
    setBodyBackground('#26455f');
    saveLastScreen('main');
}

// ===== ПРЕДЗАГРУЗКА ИЗОБРАЖЕНИЙ =====
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

// ===== ВОССТАНОВЛЕНИЕ СОСТОЯНИЯ ПРИ ЗАГРУЗКЕ =====
function restoreWorkoutState() {
    const state = loadWorkoutState();
    if (!state) return false;
    
    // Проверяем, что тип тренировки существует
    if (!state.workoutType || !workoutsData[state.workoutType]) {
        clearWorkoutState();
        return false;
    }
    
    const data = workoutsData[state.workoutType];
    if (state.exerciseIndex >= data.exercises.length) {
        clearWorkoutState();
        return false;
    }
    
    // Восстанавливаем состояние
    currentWorkoutType = state.workoutType;
    currentExerciseIndex = state.exerciseIndex;
    timerSeconds = state.timerSeconds || 0;
    isTimerRunning = state.isTimerRunning || false;
    
    // Показываем экран тренировки
    mainMenu.classList.add('hidden');
    workoutScreen.classList.add('hidden');
    activeWorkoutScreen.classList.remove('hidden');
    setBodyBackground('#4682B4');
    
    // Загружаем упражнение
    loadExercise(currentExerciseIndex);
    updateTimerDisplay();
    
    // Если таймер был запущен - запускаем его
    if (isTimerRunning) {
        startTimer();
    }
    
    saveLastScreen('active');
    return true;
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
function initApp() {
    // Загружаем данные
    loadCompletions();
    preloadAllImages();
    
    // Определяем, что показывать при загрузке
    const lastScreen = loadLastScreen();
    let hasRestored = false;
    
    // Показываем сплэш-экран
    splash.classList.remove('hidden');
    mainMenu.classList.add('hidden');
    workoutScreen.classList.add('hidden');
    activeWorkoutScreen.classList.add('hidden');
    finishScreen.classList.add('hidden');
    
    // Пытаемся восстановить активную тренировку
    if (lastScreen === 'active' || lastScreen === 'finish' || lastScreen === 'workout') {
        hasRestored = restoreWorkoutState();
    }
    
    // Если восстановление не удалось - показываем главное меню
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.classList.add('hidden');
            
            if (!hasRestored) {
                mainMenu.classList.remove('hidden');
                updateCompletionDisplay();
                setBodyBackground('#26455f');
                saveLastScreen('main');
            }
            
            // Обновляем данные при показе
            updateCompletionDisplay();
        }, 600);
    }, 1500);
    
    // ===== НАВЕШИВАЕМ ОБРАБОТЧИКИ =====
    
    // Карточки тренировок
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
    
    // Кнопки навигации
    if (backBtn) backBtn.addEventListener('click', closeWorkout);
    if (startWorkoutBtn) startWorkoutBtn.addEventListener('click', startActiveWorkout);
    if (activeBackBtn) activeBackBtn.addEventListener('click', () => {
        // При выходе из активной тренировки возвращаемся на экран с описанием
        stopTimer();
        activeWorkoutScreen.classList.add('hidden');
        workoutScreen.classList.remove('hidden');
        setBodyBackground('#f8fafc');
        // Не очищаем состояние, чтобы можно было вернуться
        saveLastScreen('workout');
        saveWorkoutState();
    });
    if (prevExerciseBtn) prevExerciseBtn.addEventListener('click', prevExercise);
    if (nextExerciseBtn) nextExerciseBtn.addEventListener('click', nextExercise);
    if (finishExerciseBtn) finishExerciseBtn.addEventListener('click', showFinishScreen);
    if (finishCloseBtn) finishCloseBtn.addEventListener('click', finishWorkoutAndExit);
}

// ===== ЗАПУСК =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// ===== ОБРАБОТКА ВЫХОДА ИЗ ПРИЛОЖЕНИЯ =====
// Сохраняем состояние при закрытии/обновлении страницы
window.addEventListener('beforeunload', () => {
    saveCompletions();
    if (currentWorkoutType && !finishScreen.classList.contains('hidden')) {
        // Если на экране финиша - очищаем состояние
        clearWorkoutState();
    } else if (currentWorkoutType && !activeWorkoutScreen.classList.contains('hidden')) {
        // Если активная тренировка - сохраняем состояние
        saveWorkoutState();
    } else if (currentWorkoutType && !workoutScreen.classList.contains('hidden')) {
        // Если на экране описания тренировки - сохраняем
        saveWorkoutState();
    } else {
        // На главном экране - очищаем состояние тренировки
        clearWorkoutState();
    }
});

// ===== ВОССТАНОВЛЕНИЕ ПРИ ВОЗВРАТЕ В ПРИЛОЖЕНИЕ =====
// Срабатывает при возврате на вкладку (visibility change)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Приложение стало видимым
        const lastScreen = loadLastScreen();
        
        // Если мы на главном экране - обновляем данные
        if (!mainMenu.classList.contains('hidden') && 
            workoutScreen.classList.contains('hidden') && 
            activeWorkoutScreen.classList.contains('hidden') && 
            finishScreen.classList.contains('hidden')) {
            
            // Перезагружаем данные из localStorage
            loadCompletions();
            updateCompletionDisplay();
            
            // Обновляем историю, если есть функция
            if (typeof refreshStreak === 'function') {
                refreshStreak();
            }
            
            console.log('Данные обновлены при возврате в приложение');
        }
    }
});

console.log('✅ Приложение инициализировано с поддержкой сохранения состояния');