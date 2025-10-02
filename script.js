
// Minimal slider logic
let idx = 0;
const slides = document.querySelectorAll('.slide');
function show(i){ slides.forEach((s, k)=> s.classList.toggle('active', k===i)); }
function next(){ idx = (idx + 1) % slides.length; show(idx); }
show(idx);
setInterval(next, 4500);
