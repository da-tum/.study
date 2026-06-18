document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/\\/g, '/'); // normalize backslashes
  
  // Calculate relative depth prefix based on script tag location relative to current page
  const scriptEl = document.currentScript;
  let prefix = './';
  let isSem1 = path.includes('/sem1/');
  let isSem2 = path.includes('/sem2/');
  
  if (scriptEl && scriptEl.src) {
    try {
      const scriptUrl = new URL(scriptEl.src);
      const scriptPath = scriptUrl.pathname.replace(/\\/g, '/');
      
      // Extract root dir of .study (where nav-header.js is located)
      const lastSlashIdx = scriptPath.lastIndexOf('/');
      const rootDir = lastSlashIdx !== -1 ? scriptPath.substring(0, lastSlashIdx) : '';
      
      if (rootDir === '' || path.startsWith(rootDir)) {
        const relativePart = rootDir !== '' ? path.substring(rootDir.length) : path;
        const segments = relativePart.split('/').filter(s => s.length > 0);
        
        // Slices away the page name (e.g. index.html or ds.html)
        const depth = segments.length - 1;
        if (depth > 0) {
          prefix = '../'.repeat(depth);
        }
      }
    } catch (e) {
      console.error('Error computing dynamic path prefix:', e);
      // Fallback depth calculation using simple path scanning if URL parsing fails
      if (path.includes('/Exam-Material/') || path.includes('/exam-material/') || path.includes('/photo-ref/') || path.includes('/final-material/')) {
        prefix = '../../../'; // Nested subject pages
      } else if (path.includes('/chem/') || path.includes('/ds/') || path.includes('/philosophy/') || path.includes('/comp-maths/') || path.includes('/web-dev/') || path.includes('/python/') || path.includes('/web-dev-1/') || path.includes('/csfcp/')) {
        prefix = '../../'; // Direct subject pages
      } else if (path.includes('/sem1/') || path.includes('/sem2/')) {
        prefix = '../'; // Semester landing pages
      }
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
      { name: 'Sem 2 Portal', path: 'sem2/index.html', icon: '🚀', id: 'sem2-portal' }
    ];
  } else if (isSem2) {
    items = [
      { name: 'Sem 2 Home', path: 'sem2/index.html', icon: '🏠', id: 'sem2-home' },
      { name: 'Data Structures', path: 'sem2/ds/ds.html', icon: '🌳', id: 'ds', accent: '#10b981', rgb: '16, 185, 129' },
      { name: 'Web Dev II', path: 'sem2/web-dev/index.html', icon: '⚛️', id: 'web-dev', accent: '#3b82f6', rgb: '59, 130, 246' },
      { name: 'Philosophy', path: 'sem2/philosophy/index.html', icon: '🕉️', id: 'philosophy', accent: '#f59e0b', rgb: '245, 158, 11' },
      { name: 'Maths', path: 'sem2/comp-maths/index.html', icon: '🧮', id: 'comp-maths', accent: '#8b5cf6', rgb: '139, 92, 246' },
      { name: 'Chemistry', path: 'sem2/chem/index.html', icon: '🧪', id: 'chem', accent: '#06b6d4', rgb: '6, 182, 212' },
      { name: 'Sem 1 Portal', path: 'sem1/index.html', icon: '⏮️', id: 'sem1-portal' }
    ];
  } else {
    // Standard dashboard options on root homepage
    items = [
      { name: 'Home', path: 'index.html', icon: '🏠', id: 'home' },
      { name: 'Semester 1', path: 'sem1/index.html', icon: '⏮️', id: 'sem1' },
      { name: 'Semester 2', path: 'sem2/index.html', icon: '🚀', id: 'sem2' }
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
      isActive = path.endsWith('/sem1/index.html') || path.endsWith('/sem1/');
    } else if (item.id === 'sem2-home') {
      isActive = path.endsWith('/sem2/index.html') || path.endsWith('/sem2/');
    } else if (item.id === 'home') {
      isActive = (path.endsWith('index.html') || path.endsWith('/')) && !isSem1 && !isSem2;
    } else {
      isActive = path.includes(`/${item.id}/`) || 
                 (item.id === 'ds' && path.includes('/ds/')) || 
                 (item.id === 'web-dev' && path.includes('/web-dev/')) || 
                 (item.id === 'web-dev-1' && path.includes('/web-dev-1/'));
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
