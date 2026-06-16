// ========== ОГОНЕК С СЕРИЕЙ (STREAK) С ИКОНКАМИ БАТАРЕИ ==========
function updateStreakDisplay() {
    const saved = localStorage.getItem('workoutHistory');
    const streakSpan = document.getElementById('streak-number');
    const iconElement = document.getElementById('streak-icon');
    
    if (!streakSpan || !iconElement) return;
    
    // Если нет истории — показываем 0 и красную пустую батарею
    if (!saved) {
        streakSpan.textContent = '0';
        iconElement.className = 'fa-solid fa-battery-empty';
        iconElement.style.color = '#ef4444';
        iconElement.style.textShadow = 'none';
        return;
    }
    
    try {
        const workouts = JSON.parse(saved);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Проверяем была ли тренировка сегодня
        const todayStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const hasTodayWorkout = workouts[todayStr] && workouts[todayStr].length > 0;
        
        // Проверяем была ли тренировка вчера
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
        const hasYesterdayWorkout = workouts[yesterdayStr] && workouts[yesterdayStr].length > 0;
        
        // Проверяем была ли тренировка позавчера
        const dayBeforeYesterday = new Date(today);
        dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);
        const dayBeforeYesterdayStr = `${dayBeforeYesterday.getFullYear()}-${dayBeforeYesterday.getMonth() + 1}-${dayBeforeYesterday.getDate()}`;
        const hasDayBeforeYesterdayWorkout = workouts[dayBeforeYesterdayStr] && workouts[dayBeforeYesterdayStr].length > 0;
        
        // Считаем серию
        let streak = 0;
        let currentDate = new Date(today);
        
        // Если сегодня нет тренировки - считаем со вчера
        if (!hasTodayWorkout) {
            currentDate.setDate(currentDate.getDate() - 1);
        }
        
        while (true) {
            const dateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
            
            if (workouts[dateStr] && workouts[dateStr].length > 0) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        
        // Обновляем цифру
        streakSpan.textContent = streak;
        
        // ===== ОПРЕДЕЛЯЕМ ИКОНКУ И ЦВЕТ =====
        if (streak === 0) {
            // Нет серии - красная пустая батарея
            iconElement.className = 'fa-solid fa-battery-empty';
            iconElement.style.color = '#ef4444';
            iconElement.style.textShadow = 'none';
        } else if (hasTodayWorkout) {
            // Сегодня была тренировка - зеленая полная батарея (горит)
            iconElement.className = 'fa-solid fa-battery-full';
            iconElement.style.color = '#22c55e';
            iconElement.style.textShadow = '0 0 20px rgba(34, 197, 94, 0.6)';
        } else if (hasYesterdayWorkout && !hasTodayWorkout) {
            // Сегодня нет, но вчера была - желтая половина (ждет)
            iconElement.className = 'fa-solid fa-battery-half';
            iconElement.style.color = '#eab308';
            iconElement.style.textShadow = 'none';
        } else if (hasDayBeforeYesterdayWorkout && !hasYesterdayWorkout && !hasTodayWorkout) {
            // Наступил след день, серию держим (шанс еще один день) - оранжевая пустая
            iconElement.className = 'fa-solid fa-battery-empty';
            iconElement.style.color = '#f97316';
            iconElement.style.textShadow = 'none';
        } else {
            // Ничего не было и наступил след день - красная пустая
            iconElement.className = 'fa-solid fa-battery-empty';
            iconElement.style.color = '#ef4444';
            iconElement.style.textShadow = 'none';
        }
        
    } catch(e) {
        console.log('Ошибка подсчета streak:', e);
        streakSpan.textContent = '0';
        const iconElement = document.getElementById('streak-icon');
        if (iconElement) {
            iconElement.className = 'fa-solid fa-battery-empty';
            iconElement.style.color = '#ef4444';
            iconElement.style.textShadow = 'none';
        }
    }
}

// Запускаем при загрузке
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateStreakDisplay, 200);
});

// Функция для ручного обновления (вызывать после тренировки)
function refreshStreak() {
    setTimeout(updateStreakDisplay, 100);
}

// Обновляем при изменении истории (БЕЗ ПЕРЕХВАТА localStorage)
// Вместо перехвата используем MutationObserver или просто вызываем вручную
// Самый надежный способ - вызывать refreshStreak() после сохранения тренировки
console.log('🔥 Streak модуль загружен. Для обновления вызовите refreshStreak()');