import { motion, useAnimation } from "framer-motion";

const projectItems = document.querySelectorAll(".project");

projectItems.forEach((item) => {
    const controls = useAnimation();

    item.addEventListener("mouseenter", () => {
        controls.start({ scale: 2 });
    });

    item.addEventListener("mouseleave", () => {
        controls.start({ scale: 1 });
    });

    const AnimatedProjectItem = motion(item);
    AnimatedProjectItem.controls = controls;
});
