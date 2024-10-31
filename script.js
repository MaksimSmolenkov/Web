// Массив для хранения элементов стека
let stack = [];

// Функция для добавления элемента в стек
function pushElement() {
    const inputElement = document.getElementById('elementInput');
    const value = inputElement.value;

    if (value) {
        stack.push(value); // Добавляем элемент в массив
        inputElement.value = ''; // Очищаем поле ввода
        renderStack(); // Обновляем визуализацию стека
    } else {
        alert("Введите значение для добавления в стек");
    }
}

// Функция для удаления элемента из стека
function popElement() {
    if (stack.length > 0) {
        stack.pop(); // Удаляем верхний элемент из массива
        renderStack(); // Обновляем визуализацию стека
    } else {
        alert("Стек пуст");
    }
}

// Функция для визуализации стека
function renderStack() {
    const stackContainer = document.getElementById('stackContainer');
    stackContainer.innerHTML = ''; // Очищаем контейнер

    // Проходимся по массиву стека и создаем элементы для отображения
    stack.forEach(element => {
        const stackElement = document.createElement('div');
        stackElement.className = 'stack-element';
        stackElement.textContent = element;
        stackContainer.appendChild(stackElement);
    });
}
