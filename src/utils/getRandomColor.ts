export function getRandomColor() {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 1)`;
}
