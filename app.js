const moneyInput = document.querySelector('#money')
const month = document.querySelector('#monthSelect')
const calculate = document.querySelector('#calculateButton')
const result = document.querySelector('#result')

calculate.addEventListener('click', () => {
    const money = +moneyInput.value
    const daysInMonth = +month.value
    const dailyBudget = money / daysInMonth

    if (!isNaN(money) && daysInMonth !== 0) {
        result.textContent = ''

        for (let i = 1; i <= daysInMonth; i++) {
            const dayBudget = dailyBudget.toFixed(2)
            result.innerHTML += `день ${i} - ${dayBudget} c <br>`

        }
    } else {
        result.textContent = 'Ввели некорректные данные'
    }
})
