export default function afterMount() {
    const elements = document.querySelectorAll(".anim");

    function handleScroll() {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight) {
                element.classList.add("fade-in");
            }
            else {
                element.classList.remove("fade-in");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    window.scrollBy(0, 1)
    window.scrollBy(0, 0)
}