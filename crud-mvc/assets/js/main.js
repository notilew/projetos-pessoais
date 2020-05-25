window.addEventListener('load', () => {
  const model = new TaskModel();
  const view = new TaskView();
  const controller = new TaskController(model, view);
});