let innerCursor = document.querySelector("#inner-cursor");
let outterCursor = document.querySelector("#outter-cursor");

export function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outterCursor.style.left = `${x}px`;
  outterCursor.style.top = `${y}px`;
}
