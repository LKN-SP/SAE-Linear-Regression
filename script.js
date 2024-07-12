const canvas = document.getElementById('canvas');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

function makeDraggable(element) {
    let isDragging = false;

    element.addEventListener('mousedown', (event) => {
        isDragging = true;
        const offsetX = event.clientX - element.getBoundingClientRect().left;
        const offsetY = event.clientY - element.getBoundingClientRect().top;

        function onMouseMove(event) {
            if (isDragging) {
                const x = event.clientX - offsetX;
                const y = event.clientY - offsetY;

                element.style.left = `${x}px`;
                element.style.top = `${y}px`;
            }
        }

        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
}

makeDraggable(button1);
makeDraggable(button2);
