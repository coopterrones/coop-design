const innerCursor = document.getElementById("inner-cursor");

export const showMailCursor = () => {
  innerCursor.classList.add("hover-active");
  innerCursor.classList.remove("inner-cursor");
  innerCursor.innerText = "✉️";
};

export const hideMailCursor = () => {
  innerCursor.classList.add("inner-cursor");
  innerCursor.classList.remove("hover-active");
  innerCursor.innerText = "";
};

export const showfilmCursor = () => {
  innerCursor.classList.add("hover-active");
  innerCursor.classList.remove("inner-cursor");
  innerCursor.innerText = "📷";
};

export const hideFilmCursor = () => {
  innerCursor.classList.remove("hover-active");
  innerCursor.classList.add("inner-cursor");
  innerCursor.innerText = "";
};

export const showPlaygroundCursor = () => {
  innerCursor.classList.add("hover-active");
  innerCursor.classList.remove("inner-cursor");
  innerCursor.innerText = "🖍";
};

export const hidePlaygroundCursor = () => {
  innerCursor.classList.remove("hover-active");
  innerCursor.classList.add("inner-cursor");
  innerCursor.innerText = "";
};

export const showWorkCursor = () => {
  innerCursor.classList.add("hover-active");
  innerCursor.classList.remove("inner-cursor");
  innerCursor.innerText = "🖋";
};

export const hideWorkCursor = () => {
  innerCursor.classList.remove("hover-active");
  innerCursor.classList.add("inner-cursor");
  innerCursor.innerText = "";
};
