// Получаем элементы
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const treeItems = document.querySelectorAll("#orgTree li[data-name]");
const carets = document.querySelectorAll(".caret");

// Функция поиска сотрудников
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (query === "") return;

    treeItems.forEach((item) => {
        const name = item.getAttribute("data-name").toLowerCase();
        if (name.includes(query)) {
            const resultItem = document.createElement("li");
            resultItem.textContent = item.getAttribute("data-name");
            resultItem.addEventListener("click", () => {
                highlightAndExpand(item);
            });
            searchResults.appendChild(resultItem);
        }
    });
});

// Функция разворачивания дерева и подсветки сотрудника
function highlightAndExpand(targetItem) {
    // Снять выделение с предыдущего сотрудника
    document.querySelectorAll(".selected").forEach((el) => {
        el.classList.remove("selected");
    });

    // Подсветить выбранного сотрудника
    targetItem.classList.add("selected");

    // Развернуть все родительские элементы
    let parent = targetItem.parentElement;
    while (parent && parent.id !== "orgTree") {
        if (parent.classList.contains("nested")) {
            parent.classList.add("active");
            const caret = parent.previousElementSibling;
            if (caret && caret.classList.contains("caret")) {
                caret.classList.add("caret-down");
            }
        }
        parent = parent.parentElement;
    }
}

// Добавляем обработчики для разворачивания дерева
carets.forEach((caret) => {
    caret.addEventListener("click", () => {
        caret.parentElement.querySelector(".nested").classList.toggle("active");
        caret.classList.toggle("caret-down");
    });
});
