const correctAnswers = ['B', 'B', 'B', 'C', 'B', 'C', 'A', 'B', 'A', 'C']
const result = document.querySelector('.result');
const right = document.querySelector('.right-answers')

const form = document.querySelector('.form-list');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;

    const usersAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    // check answers
    usersAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 10
        }
    })

    scrollTo(0, 0)

    result.classList.remove('d-none')
    right.classList.remove('d-none')


    // Animate output of Scores

    let output = 0
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if (output === score) {
            clearTimeout(timer)
        } else {
            output++
        }
    }, 10)

});