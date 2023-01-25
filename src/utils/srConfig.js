import ScrollReveal from "scrollreveal";
export const srConfig = (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    duration: 500,
    distance: '100px',
    delay: 200,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    // easing: "ease",
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: .25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

const sr = ScrollReveal();

export default sr;