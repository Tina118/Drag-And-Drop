let items = document.querySelectorAll('.container .box');

//occurs when the user starts to drag an element
function handleDragStart(e) {
    this.style.opacity = '0.4';
      
    //store current selected item
    dragSrcEl = this;
      
    //effect that is allowed for a drag operation.
    e.dataTransfer.effectAllowed = 'move';

    //to set data of event (type,data)
    e.dataTransfer.setData('text/html', this.innerHTML);

}
  
//occurs when the user has finished dragging the element
function handleDragEnd() {
    this.style.opacity = '1';
  
    items.forEach(function (item) {
        item.classList.remove('over');
    });
}

//occurs when the dragged element enters the drop target
function handleDragEnter() {
    this.classList.add('over');
}

//occurs when the dragged element is over the drop target
//By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element.
function handleDragOver(e) {
    e.preventDefault();
    return false;
}

// occurs when the dragged element is dropped on the drop target
function handleDrop(e) {
   
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

}
  
//occurs when the dragged element leaves the drop target
function handleDragLeave() {
    this.classList.remove('over');
}
  

items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('drop', handleDrop);
});
