// Массив для хранения элементов очереди
let queue = [];

// Функция для добавления элемента в очередь
function enqueueElement() {
    const inputElement = document.getElementById('elementInput');
    const value = inputElement.value;

    if (value) {
        queue.push(value); // Добавляем элемент в конец массива (очереди)
        inputElement.value = ''; // Очищаем поле ввода
        renderQueue(); // Обновляем визуализацию очереди
    } else {
        alert("Введите значение для добавления в очередь");
    }
}

// Функция для удаления элемента из очереди
function dequeueElement() {
    if (queue.length > 0) {
        queue.shift(); // Удаляем первый элемент из массива (очереди)
        renderQueue(); // Обновляем визуализацию очереди
    } else {
        alert("Очередь пуста");
    }
}

// Функция для визуализации очереди
function renderQueue() {
    const queueContainer = document.getElementById('queueContainer');
    queueContainer.innerHTML = ''; // Очищаем контейнер

    // Проходимся по массиву очереди и создаем элементы для отображения
    queue.forEach(element => {
        const queueElement = document.createElement('div');
        queueElement.className = 'queue-element';
        queueElement.textContent = element;
        queueContainer.appendChild(queueElement);
    });
}
