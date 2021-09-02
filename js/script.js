const button = document.getElementsByClassName('mt-table-expand-button');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    let panel = document.querySelectorAll(`.mt-table-panel-expand-${i}`);
    panel.forEach(elm => {
      elm.classList.toggle('open');
    })
  })
}