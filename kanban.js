const addTaskbtn = document.querySelector('#addTask');

const board = document.querySelector('.board');

const tasks = document.querySelectorAll('.task');

addTaskbtn.addEventListener('click', () => {
  const paragraphTag = document.createElement('p');
  paragraphTag.innerText = prompt('Task name');

  paragraphTag.classList.add('task');

  board.appendChild(paragraphTag);

  paragraphTag.setAttribute('draggable', true);
});

tasks.forEach((task) => {
  return task.addEventListener('dragstart', () => {
    console.log(`dragstart on`);
  });
});
