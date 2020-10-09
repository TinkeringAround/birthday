const COLLAPSED = "collapsed";
const COLLAPSED_HEIGHT = "200px"; // window.innerHeight * 0.1 + "px";
const EXPANDED_HEIGHT = "500px"; // window.innerHeight * 0.15 + "px";

const questions = [...document.querySelectorAll(".question")];

questions.forEach((q, index) => {
    q.style.height = COLLAPSED_HEIGHT

    q.onclick = (event) => {
        if (event.target.type) {
            return;
        }

        const isCollapsed = questions[index].classList.contains(COLLAPSED);

        if (isCollapsed) questions[index].classList.remove(COLLAPSED);
        else questions[index].classList.add(COLLAPSED);

        questions[index].style.height = isCollapsed ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT;
    }
});
