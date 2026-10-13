document.addEventListener('DOMContentLoaded', () => {
  // Prevent duplicate insertion
  if (document.querySelector('.global-nav-header')) return;

  const path = window.location.pathname.replace(/\\/g, '/'); // normalize backslashes
  const lowerPath = path.toLowerCase();
  
  // Calculate relative depth prefix based on script tag location relative to current page
  const scriptEl = document.currentScript || document.querySelector('script[src*="nav-header.js"]');
  let prefix = './';
  let isSem1 = lowerPath.includes('/sem1/');
  let isSem2 = lowerPath.includes('/sem2/');
  let isSem3 = lowerPath.includes('/sem3/');
  
  // 1. Determine prefix from script tag's relative src attribute if available
  if (scriptEl) {
    const srcAttr = (scriptEl.getAttribute('src') || '').replace(/\\/g, '/');
    const lastSlash = srcAttr.lastIndexOf('/');
    if (lastSlash !== -1) {
      prefix = srcAttr.substring(0, lastSlash + 1);
    }
  }

  // 2. Fallback / verify prefix based on URL path depth
  if (prefix === './') {
    if (lowerPath.includes('/exam-material/') || lowerPath.includes('/photo-ref/') || lowerPath.includes('/final-material/')) {
      prefix = '../../../';
    } else if (
      (lowerPath.includes('/sem1/') && lowerPath.split('/sem1/')[1] && lowerPath.split('/sem1/')[1].includes('/')) ||
      (lowerPath.includes('/sem2/') && lowerPath.split('/sem2/')[1] && lowerPath.split('/sem2/')[1].includes('/')) ||
      (lowerPath.includes('/sem3/') && lowerPath.split('/sem3/')[1] && lowerPath.split('/sem3/')[1].includes('/'))
    ) {
      prefix = '../../';
    } else if (lowerPath.includes('/sem1/') || lowerPath.includes('/sem2/') || lowerPath.includes('/sem3/')) {
      prefix = '../';
    }
  }

  // Create header container
  const header = document.createElement('header');
  header.className = 'global-nav-header';

  // Logo area - points to the main root landing page
  const logoLink = document.createElement('a');
  logoLink.href = prefix + 'index.html';
  logoLink.className = 'global-nav-logo';
  logoLink.innerHTML = `🎓 <span class="gradient-text">STUDYPORTAL</span>`;
  header.appendChild(logoLink);

  // Mobile hamburger toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'global-nav-toggle';
  toggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
  toggleBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  `;
  header.appendChild(toggleBtn);

  // Navigation menu items
  const menu = document.createElement('nav');
  menu.className = 'global-nav-menu';

  // Choose navigation items depending on current semester context
  let items = [];
  if (isSem1) {
    items = [
      { name: 'Sem 1 Home', path: 'sem1/index.html', icon: '🏠', id: 'sem1-home' },
      { name: 'Python', path: 'sem1/python/index.html', icon: '🐍', id: 'python', accent: '#3776ab', rgb: '55, 118, 171' },
      { name: 'Web Dev I', path: 'sem1/web-dev-1/index.html', icon: '💻', id: 'web-dev-1', accent: '#e34f26', rgb: '227, 79, 38' },
      { name: 'CSFCP', path: 'sem1/csfcp/index.html', icon: '🛡️', id: 'csfcp', accent: '#fbbf24', rgb: '251, 191, 36' },
      { name: 'Sem 2 Portal', path: 'sem2/index.html', icon: '🚀', id: 'sem2-portal' },
      { name: 'Sem 3 Portal', path: 'sem3/index.html', icon: '⚡', id: 'sem3-portal' }
    ];
  } else if (isSem2) {
    items = [
      { name: 'Sem 2 Home', path: 'sem2/index.html', icon: '🏠', id: 'sem2-home' },
      { name: 'Data Structures', path: 'sem2/ds/ds.html', icon: '🌳', id: 'ds', accent: '#10b981', rgb: '16, 185, 129' },
      { name: 'Web Dev II', path: 'sem2/web-dev/index.html', icon: '⚛️', id: 'web-dev', accent: '#3b82f6', rgb: '59, 130, 246' },
      { name: 'Philosophy', path: 'sem2/philosophy/index.html', icon: '🕉️', id: 'philosophy', accent: '#f59e0b', rgb: '245, 158, 11' },
      { name: 'Maths', path: 'sem2/comp-maths/index.html', icon: '🧮', id: 'comp-maths', accent: '#8b5cf6', rgb: '139, 92, 246' },
      { name: 'Chemistry', path: 'sem2/chem/index.html', icon: '🧪', id: 'chem', accent: '#06b6d4', rgb: '6, 182, 212' },
      { name: 'Sem 1 Portal', path: 'sem1/index.html', icon: '⏮️', id: 'sem1-portal' },
      { name: 'Sem 3 Portal', path: 'sem3/index.html', icon: '⚡', id: 'sem3-portal' }
    ];
  } else if (isSem3) {
    items = [
      { name: 'Sem 3 Home', path: 'sem3/index.html', icon: '🏠', id: 'sem3-home' },
      { name: 'N2T', path: 'sem3/N2T/index.html', icon: '💻', id: 'N2T', accent: '#ef4444', rgb: '239, 68, 68' },
      { name: 'CC-1', path: 'sem3/CC-1/index.html', icon: '⚔️', id: 'CC-1', accent: '#f59e0b', rgb: '245, 158, 11' },
      { name: 'DAA', path: 'sem3/DAA/index.html', icon: '📊', id: 'DAA', accent: '#10b981', rgb: '16, 185, 129' },
      { name: 'Web Dev 3', path: 'sem3/Web-Dev-3/index.html', icon: '🌐', id: 'Web-Dev-3', accent: '#6366f1', rgb: '99, 102, 241' },
      { name: 'DBMS', path: 'sem3/DBMS/index.html', icon: '🗄️', id: 'DBMS', accent: '#06b6d4', rgb: '6, 182, 212' },
      { name: 'VA', path: 'sem3/VA/index.html', icon: '🗣️', id: 'VA', accent: '#ec4899', rgb: '236, 72, 153' },
      { name: 'OEIKS001', path: 'sem3/OEIKS001/index.html', icon: '📜', id: 'OEIKS001', accent: '#eab308', rgb: '234, 179, 8' },
      { name: 'Sem 1 Portal', path: 'sem1/index.html', icon: '⏮️', id: 'sem1-portal' },
      { name: 'Sem 2 Portal', path: 'sem2/index.html', icon: '🚀', id: 'sem2-portal' }
    ];
  } else {
    // Standard dashboard options on root homepage
    items = [
      { name: 'Home', path: 'index.html', icon: '🏠', id: 'home' },
      { name: 'Semester 1', path: 'sem1/index.html', icon: '⏮️', id: 'sem1' },
      { name: 'Semester 2', path: 'sem2/index.html', icon: '🚀', id: 'sem2' },
      { name: 'Semester 3', path: 'sem3/index.html', icon: '⚡', id: 'sem3' }
    ];
  }

  items.forEach(item => {
    const link = document.createElement('a');
    link.href = prefix + item.path;
    link.className = 'global-nav-item';
    link.innerHTML = `<span>${item.icon}</span> ${item.name}`;
    
    // Check if the current page matches this item
    let isActive = false;
    if (item.id === 'sem1-home') {
      isActive = lowerPath.endsWith('/sem1/index.html') || lowerPath.endsWith('/sem1/') || lowerPath.endsWith('/sem1');
    } else if (item.id === 'sem2-home') {
      isActive = lowerPath.endsWith('/sem2/index.html') || lowerPath.endsWith('/sem2/') || lowerPath.endsWith('/sem2');
    } else if (item.id === 'sem3-home') {
      isActive = lowerPath.endsWith('/sem3/index.html') || lowerPath.endsWith('/sem3/') || lowerPath.endsWith('/sem3');
    } else if (item.id === 'home') {
      isActive = (lowerPath.endsWith('/index.html') || lowerPath.endsWith('/') || lowerPath.endsWith('/.study')) && !isSem1 && !isSem2 && !isSem3;
    } else {
      const lowerId = item.id.toLowerCase();
      isActive = lowerPath.includes(`/${lowerId}/`) || 
                 (item.id === 'ds' && lowerPath.includes('/ds/')) || 
                 (item.id === 'web-dev' && lowerPath.includes('/web-dev/')) || 
                 (item.id === 'web-dev-1' && lowerPath.includes('/web-dev-1/'));
    }

    if (isActive) {
      link.classList.add('active');
      if (item.accent) {
        link.style.setProperty('--subject-accent', item.accent);
        link.style.setProperty('--subject-rgb', item.rgb);
      }
    }

    menu.appendChild(link);
  });

  header.appendChild(menu);

  // Insert header at top of document body
  document.body.insertBefore(header, document.body.firstChild);

  // Toggle dropdown menu in mobile layouts
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});
