window.addEventListener('load', () => {
  const model = new TaskModel();
  const view = new TaskView();
  const controller = new TaskController(model, view);

  controller.model.createTask('Teste');
  controller.model.updateTask(3, 'Tomar Banho hoje');

  console.log(controller);
});