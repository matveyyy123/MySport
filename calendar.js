// calendar.js - Календарь и статистика (без разминки)

function loadWorkoutHistory() {
    const saved = localStorage.getItem('workoutHistory');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch(e) {
            console.error('Ошибка парсинга workoutHistory:', e);
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
    
    // Убрал РАЗМИНКУ из colorMap
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
    // Для 3+ тренировок используем градиент
    const gradientColors = colors.slice(0, 3).join(', ');
    return { 
        class: 'multiple-workout', 
        style: `background: linear-gradient(135deg, ${gradientColors}); color: white;`
    };
}

function getMonthlyStats(year, month) {
    const history = loadWorkoutHistory();
    // Убрал warmup из статистики
    const stats = { arms: 0, chest: 0, abs: 0, back: 0, legs: 0 };
    const workoutNames = { 
        'РУКИ': 'arms', 
        'ГРУДЬ': 'chest', 
        'ПРЕСС': 'abs', 
        'СПИНА': 'back', 
        'НОГИ': 'legs'
    };
    
    for (const [dateKey, workouts] of Object.entries(history)) {
        const [y, m] = dateKey.split('-');
        if (parseInt(y) === year && parseInt(m) === month + 1) {
            workouts.forEach(workout => {
                const key = workoutNames[workout];
                if (key && stats[key] !== undefined) {
                    stats[key]++;
                }
            });
        }
    }
    return stats;
}

function updateLegendStats(year, month) {
    const stats = getMonthlyStats(year, month);
    const legendItems = document.querySelectorAll('.legend-item');
    // Убрал warmup из легенды
    const workoutKeys = ['arms', 'chest', 'abs', 'back', 'legs'];
    const workoutNames = ['РУКИ', 'ГРУДЬ', 'ПРЕСС', 'СПИНА', 'НОГИ'];
    const colors = ['#e74c3c', '#e67e22', '#27ae60', '#3498db', '#9b59b6'];
    
    legendItems.forEach((item, index) => {
        if (index < workoutKeys.length) {
            const count = stats[workoutKeys[index]] || 0;
            item.innerHTML = `<span class="legend-color" style="background: ${colors[index]}"></span>${workoutNames[index]} — ${count}`;
        }
    });
}

function renderCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    let startOffset = firstDayOfMonth.getDay();
    startOffset = startOffset === 0 ? 6 : startOffset - 1;
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    
    const currentMonthYearSpan = document.getElementById('current-month-year');
    const calendarDaysDiv = document.getElementById('calendar-days');
    
    if (currentMonthYearSpan) currentMonthYearSpan.textContent = `${monthNames[month]} ${year}`;
    if (!calendarDaysDiv) return;
    
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
        
        const { class: workoutClass, style } = getWorkoutStyleForDate(year, month, day);
        if (workoutClass) dayDiv.classList.add(workoutClass);
        if (style) dayDiv.setAttribute('style', style);
        
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dayDiv.style.boxShadow = '0 0 0 2px #4682B4';
            dayDiv.style.position = 'relative';
            dayDiv.style.zIndex = '1';
        }
        
        calendarDaysDiv.appendChild(dayDiv);
    }
    
    updateLegendStats(year, month);
}

function initCalendar() {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    
    const calendarBtn = document.getElementById('calendar-btn');
    const calendarModal = document.getElementById('calendar-modal');
    const calendarCloseBtn = document.getElementById('calendar-close-btn');
    const calendarOverlay = document.querySelector('.calendar-modal-overlay');
    const prevMonthBtn = document.getElementById('prev-month-btn');
    const nextMonthBtn = document.getElementById('next-month-btn');
    
    function openCalendarModal() {
        if (calendarModal) {
            currentYear = new Date().getFullYear();
            currentMonth = new Date().getMonth();
            renderCalendar(currentYear, currentMonth);
            calendarModal.classList.remove('hidden');
        }
    }
    
    function closeCalendarModal() {
        if (calendarModal) calendarModal.classList.add('hidden');
    }
    
    function prevMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    }
    
    function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    }
    
    if (calendarBtn) calendarBtn.addEventListener('click', openCalendarModal);
    if (calendarCloseBtn) calendarCloseBtn.addEventListener('click', closeCalendarModal);
    if (calendarOverlay) calendarOverlay.addEventListener('click', closeCalendarModal);
    if (prevMonthBtn) prevMonthBtn.addEventListener('click', prevMonth);
    if (nextMonthBtn) nextMonthBtn.addEventListener('click', nextMonth);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalendar);
} else {
    initCalendar();
}