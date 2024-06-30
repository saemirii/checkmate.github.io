const remindersBtn = document.getElementById('reminders-btn');
const reminderContainer = document.getElementById('reminder-container');

remindersBtn.addEventListener('click', () => {
  console.log('test');
  // reminderContainer.classList.toggle('hidden');
  reminderContainer.classList.toggle('visible');
});