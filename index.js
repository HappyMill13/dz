const hold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];

hold.forEach(item => {
    console.log(`[Проверка] Отсек "${item}" — в норме.`);
    if (item === 'Кристаллы') {
        console.log('⚠️ Обнаружен ценный груз! Требуется охрана.');
    }
});
const dropped = hold.pop();
console.log(`Отсек "${dropped}" отсоединён и сброшен в космос.`);

const labSamples = hold.slice(1, 4);
console.log('Образцы для учёных:', labSamples);
console.log('Исходный отсек не пострадал:', hold);

hold.splice(1, 2);
console.log('После атаки пиратов осталось:', hold);

hold.splice(1, 0, 'Золото', 'Детектор лжи');
console.log('Финальный отсек после визита на станцию:', hold);