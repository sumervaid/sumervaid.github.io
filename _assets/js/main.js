document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = `
    <svg class="icon" viewBox="0 0 24 24">
      <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>
    </svg>
  `;
  document.body.appendChild(themeToggle);

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'neon') {
    document.body.classList.add('neon-theme');
  }

  // Theme toggle click handler
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('neon-theme');
    const isNeon = document.body.classList.contains('neon-theme');
    localStorage.setItem('theme', isNeon ? 'neon' : 'default');
  });

  // Smooth page transitions
  document.querySelectorAll('a').forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.href;
        
        document.body.style.opacity = '0';
        
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      });
    }
  });

  // Fade in on page load
  document.body.style.opacity = '1';
}); 