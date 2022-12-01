let items = document.querySelectorAll('.container .box');

function handleDragStart(e) {
    this.style.opacity = '0.4';
      
    dragSrcEl = this;
      
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}
  
function handleDragEnd() {
    this.style.opacity = '1';
  
    items.forEach(function (item) {
    item.classList.remove('over');
    });
}

function handleDrop(e) {
   
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

}
  
function handleDragOver(e) {
    e.preventDefault();
    return false;
}
  
function handleDragEnter() {
    this.classList.add('over');
}
  
function handleDragLeave() {
    this.classList.remove('over');
}
  

items.forEach(function(item) {
item.addEventListener('dragstart', handleDragStart);
item.addEventListener('dragover', handleDragOver);
item.addEventListener('dragenter', handleDragEnter);
item.addEventListener('dragleave', handleDragLeave);
item.addEventListener('dragend', handleDragEnd);
item.addEventListener('drop', handleDrop);
});
