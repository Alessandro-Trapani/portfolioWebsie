export default function typeWriter(id, txt, speed, i = 0) {
  const element = document.getElementById(id);

  if (i < txt.length) {
    element.innerHTML += txt.charAt(i);
    setTimeout(() => typeWriter(id, txt, speed, i + 1), speed);
  }
}
