const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i += 2) {
  const question = cards[i];
  const answer = cards[i + 1];
  answer.style.display = 'none';

  question.addEventListener('click', () => {
    question.style.display = 'none';
    answer.style.display = 'flex';
  });

  answer.addEventListener('click', () => {
    answer.style.display = 'none';
    question.style.display = 'flex';
  });
}
