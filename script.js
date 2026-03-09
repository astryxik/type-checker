function run() {
    // Находим элементы
    let inputElement = document.getElementById('code');
    let resultDiv = document.getElementById('result');
    
    // Проверяем, нашли ли элементы
    if (!inputElement) {
        resultDiv.innerHTML = 'Ошибка: не найден input';
        return;
    }
    
    try {
        // Получаем значение и вычисляем
        let value = eval(inputElement.value);
        resultDiv.innerHTML = 'Тип: ' + typeof value;
    } catch(e) {
        resultDiv.innerHTML = 'Такого типа не существует';
    }
}