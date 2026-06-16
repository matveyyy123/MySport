// data.js - Данные тренировок

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
        exercisesCount: "9 упражнений",
        heroImg: "images/chest.jpg",
        exercises: [
            { name: "Отжимания от коленей", reps: "1x12", img: "images/exercises/chest1.jpg" },
            { name: "Отжимания с упором спереди", reps: "3x10", img: "images/exercises/chest2.jpg" },
            { name: "Отжимания от пола", reps: "3x8", img: "images/exercises/chest3.jpg" },
            { name: "Обратные отжимания от стула", reps: "3x12", img: "images/exercises/chest4.jpg" },
            { name: "Широкие отжимания", reps: "3x6", img: "images/exercises/chest5.jpg" },
            { name: "Лежа поднятия гантелей от груди наверх", reps: "3x12", img: "images/exercises/chest6.jpg" },
            { name: "Отжимания с упором сзади", reps: "3x4", img: "images/exercises/chest7.jpg" },
            { name: "Лежа поднятие гантелей от сторон наверх", reps: "3x12", img: "images/exercises/chest8.jpg" },
            { name: "Отжимания со сведенными ладонями", reps: "3x2", img: "images/exercises/chest9.jpg" }
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