const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
cursor.textContent = '🐶';
document.body.appendChild(cursor);

const cursorSize = 26;
const pawSize = 22;

document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX - cursorSize/2}px`;
  cursor.style.top = `${e.clientY - cursorSize/2}px`;
});

document.addEventListener('click', e => {
  const paw = document.createElement('span');
  paw.textContent = '🐾';
  paw.style.position = 'fixed';
  paw.style.left = `${e.clientX - pawSize/2}px`;
  paw.style.top = `${e.clientY - pawSize/2}px`;
  paw.style.fontSize = `${pawSize}px`;
  paw.style.pointerEvents = 'none';
  paw.style.opacity = '1';
  paw.style.transition = 'all 1s ease-out';
  paw.style.zIndex = '99999';
  document.body.appendChild(paw);

  setTimeout(() => {
    paw.style.top = `${e.clientY - pawSize/2 - 40}px`;
    paw.style.opacity = '0';
  }, 50);
  setTimeout(() => paw.remove(), 1050);
});

const sections = document.querySelectorAll('section');
sections.forEach(sec => sec.style.zIndex = '1');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.style.opacity = '1';
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
  const offset = window.pageYOffset;
  document.body.style.backgroundPositionY = `${offset * 0.3}px`;
});
