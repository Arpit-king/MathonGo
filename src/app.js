// Application data
const appData = {
  "subjects": {
    "physics": {
      "name": "Physics",
      "classes": ["11", "12"],
      "units": [
        "Gravitation", 
        "Math in Physics", 
        "Units and Dimensions", 
        "Motion in One Dimension", 
        "Motion in Two Dimensions", 
        "Laws of Motion",
        "Centre of Mass Equilibrium and Momentum",
        "Work Energy and Power",
        "Waves",
        "Thermodynamics"
      ],
      "chapters": [
        {
          "id": "phy_001",
          "title": "Gravitation",
          "class": "11",
          "unit": "Gravitation",
          "status": "completed",
          "progress": 85,
          "accuracy": 78,
          "timeSpent": "2h 45m",
          "questionsAttempted": 113,
          "totalQuestions": 205,
          "difficulty": "medium",
          "isWeak": false,
          "stats": {
            "year2025": {"questions": 80, "progress": 80},
            "year2024": {"questions": 60, "progress": 60}
          }
        },
        {
          "id": "phy_002", 
          "title": "Math in Physics",
          "class": "11",
          "unit": "Math in Physics",
          "status": "in_progress",
          "progress": 45,
          "accuracy": 65,
          "timeSpent": "1h 20m",
          "questionsAttempted": 113,
          "totalQuestions": 205,
          "difficulty": "hard",
          "isWeak": true,
          "stats": {
            "year2025": {"questions": 20, "progress": 20},
            "year2024": {"questions": 80, "progress": 80}
          }
        },
        {
          "id": "phy_003",
          "title": "Units and Dimensions", 
          "class": "12",
          "unit": "Units and Dimensions",
          "status": "not_started",
          "progress": 0,
          "accuracy": 0,
          "timeSpent": "0h 0m",
          "questionsAttempted": 0,
          "totalQuestions": 205,
          "difficulty": "easy",
          "isWeak": false,
          "stats": {
            "year2025": {"questions": 60, "progress": 60},
            "year2024": {"questions": 60, "progress": 60}
          }
        },
        {
          "id": "phy_004",
          "title": "Motion in One Dimension",
          "class": "11", 
          "unit": "Motion in One Dimension",
          "status": "completed",
          "progress": 100,
          "accuracy": 92,
          "timeSpent": "3h 15m",
          "questionsAttempted": 113,
          "totalQuestions": 205,
          "difficulty": "medium",
          "isWeak": false,
          "stats": {
            "year2025": {"questions": 80, "progress": 80},
            "year2024": {"questions": 60, "progress": 60}
          }
        },
        {
          "id": "phy_005",
          "title": "Motion in Two Dimensions",
          "class": "12",
          "unit": "Motion in Two Dimensions", 
          "status": "in_progress",
          "progress": 60,
          "accuracy": 75,
          "timeSpent": "2h 10m",
          "questionsAttempted": 113,
          "totalQuestions": 205,
          "difficulty": "hard",
          "isWeak": true,
          "stats": {
            "year2025": {"questions": 80, "progress": 80},
            "year2024": {"questions": 60, "progress": 60}
          }
        },
        {
          "id": "phy_006",
          "title": "Laws of Motion",
          "class": "11",
          "unit": "Laws of Motion",
          "status": "not_started", 
          "progress": 0,
          "accuracy": 0,
          "timeSpent": "0h 0m",
          "questionsAttempted": 0,
          "totalQuestions": 205,
          "difficulty": "medium",
          "isWeak": false,
          "stats": {
            "year2025": {"questions": 80, "progress": 80},
            "year2024": {"questions": 60, "progress": 60}
          }
        }
      ]
    },
    "chemistry": {
      "name": "Chemistry",
      "classes": ["11", "12"],
      "units": [
        "Atomic Structure",
        "Chemical Bonding", 
        "Organic Chemistry",
        "Thermodynamics",
        "Equilibrium",
        "Kinetics",
        "Electrochemistry"
      ],
      "chapters": [
        {
          "id": "chem_001",
          "title": "Atomic Structure",
          "class": "11",
          "unit": "Atomic Structure",
          "status": "completed",
          "progress": 90,
          "accuracy": 85,
          "timeSpent": "2h 30m",
          "questionsAttempted": 95,
          "totalQuestions": 180,
          "difficulty": "medium",
          "isWeak": false,
          "stats": {
            "year2025": {"questions": 70, "progress": 70},
            "year2024": {"questions": 55, "progress": 55}
          }
        },
        {
          "id": "chem_002", 
          "title": "Chemical Bonding",
          "class": "11",
          "unit": "Chemical Bonding",
          "status": "in_progress",
          "progress": 35,
          "accuracy": 60,
          "timeSpent": "1h 45m",
          "questionsAttempted": 68,
          "totalQuestions": 165,
          "difficulty": "hard",
          "isWeak": true,
          "stats": {
            "year2025": {"questions": 45, "progress": 45},
            "year2024": {"questions": 65, "progress": 65}
          }
        },
        {
          "id": "chem_003",
          "title": "Organic Chemistry",
          "class": "12",
          "unit": "Organic Chemistry",
          "status": "not_started",
          "progress": 0,
          "accuracy": 0,
          "timeSpent": "0h 0m",
          "questionsAttempted": 0,
          "totalQuestions": 190,
          "difficulty": "hard",
          "isWeak": false,
          "stats": {
            "year2025": {"questions": 75, "progress": 75},
            "year2024": {"questions": 65, "progress": 65}
          }
        }
      ]
    },
    "mathematics": {
      "name": "Mathematics", 
      "classes": ["11", "12"],
      "units": [
        "Algebra",
        "Trigonometry",
        "Calculus", 
        "Coordinate Geometry",
        "Statistics",
        "Probability",
        "Sequences and Series"
      ],
      "chapters": [
        {
          "id": "math_001",
          "title": "Algebra",
          "class": "11",
          "unit": "Algebra",
          "status": "completed",
          "progress": 95,
          "accuracy": 88,
          "timeSpent": "3h 20m",
          "questionsAttempted": 125,
          "totalQuestions": 220,
          "difficulty": "medium",
          "isWeak": false,
          "stats": {
            "year2025": {"questions": 85, "progress": 85},
            "year2024": {"questions": 70, "progress": 70}
          }
        },
        {
          "id": "math_002",
          "title": "Trigonometry", 
          "class": "12",
          "unit": "Trigonometry",
          "status": "in_progress",
          "progress": 50,
          "accuracy": 72,
          "timeSpent": "2h 15m",
          "questionsAttempted": 89,
          "totalQuestions": 195,
          "difficulty": "hard",
          "isWeak": true,
          "stats": {
            "year2025": {"questions": 60, "progress": 60},
            "year2024": {"questions": 80, "progress": 80}
          }
        },
        {
          "id": "math_003",
          "title": "Calculus",
          "class": "12",
          "unit": "Calculus",
          "status": "not_started",
          "progress": 0,
          "accuracy": 0,
          "timeSpent": "0h 0m",
          "questionsAttempted": 0,
          "totalQuestions": 210,
          "difficulty": "hard",
          "isWeak": false,
          "stats": {
            "year2025": {"questions": 90, "progress": 90},
            "year2024": {"questions": 85, "progress": 85}
          }
        }
      ]
    }
  }
};

// Application state
let currentState = {
  activeSubject: 'physics',
  filters: {
    classes: [],
    units: [],
    notStarted: false,
    weakChapters: false
  },
  sortOrder: 'asc',
  theme: 'light'
};

// Chapter icons mapping
const chapterIcons = {
  'Gravitation': 'ph-planet',
  'Math in Physics': 'ph-calculator',
  'Units and Dimensions': 'ph-ruler',
  'Motion in One Dimension': 'ph-arrow-right',
  'Motion in Two Dimensions': 'ph-arrows-out',
  'Laws of Motion': 'ph-scales',
  'Centre of Mass Equilibrium and Momentum': 'ph-target',
  'Work Energy and Power': 'ph-lightning',
  'Waves': 'ph-wave-sine',
  'Thermodynamics': 'ph-thermometer',
  'Atomic Structure': 'ph-atom',
  'Chemical Bonding': 'ph-molecule',
  'Organic Chemistry': 'ph-flask',
  'Equilibrium': 'ph-equals',
  'Kinetics': 'ph-trend-up',
  'Electrochemistry': 'ph-battery-charging',
  'Algebra': 'ph-function',
  'Trigonometry': 'ph-triangle',
  'Calculus': 'ph-chart-line',
  'Coordinate Geometry': 'ph-grid-four',
  'Statistics': 'ph-chart-bar',
  'Probability': 'ph-dice-six',
  'Sequences and Series': 'ph-list-numbers'
};

// Initialize the application
function initApp() {
  initTheme();
  setupEventListeners();
  updateSubject('physics');
}

// Theme management
function initTheme() {
  const savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  currentState.theme = savedTheme;
  document.documentElement.setAttribute('data-color-scheme', savedTheme);
}

function toggleTheme() {
  currentState.theme = currentState.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-color-scheme', currentState.theme);
}

// Event listeners setup
function setupEventListeners() {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Subject navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const subject = e.currentTarget.getAttribute('data-subject');
      if (subject) {
        updateSubject(subject);
      }
    });
  });

  // Dropdown toggles
  setupDropdown('class-dropdown');
  setupDropdown('units-dropdown');

  // Filter buttons
  const notStartedFilter = document.getElementById('not-started-filter');
  if (notStartedFilter) {
    notStartedFilter.addEventListener('click', () => {
      toggleFilter('notStarted');
    });
  }

  const weakChaptersFilter = document.getElementById('weak-chapters-filter');
  if (weakChaptersFilter) {
    weakChaptersFilter.addEventListener('click', () => {
      toggleFilter('weakChapters');
    });
  }

  // Sort button
  const sortBtn = document.getElementById('sort-btn');
  if (sortBtn) {
    sortBtn.addEventListener('click', toggleSort);
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });
}

// Dropdown setup
function setupDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;
  
  const toggle = dropdown.querySelector('.dropdown-toggle');
  
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      
      // Close all dropdowns
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
      
      // Toggle current dropdown
      if (!isOpen) {
        dropdown.classList.add('open');
      }
    });
  }

  // Handle checkbox changes
  dropdown.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      updateFilters();
    }
  });
}

// Update active subject
function updateSubject(subject) {
  if (!appData.subjects[subject]) return;
  
  currentState.activeSubject = subject;
  
  // Update navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-subject') === subject);
  });

  // Update section title
  const subjectData = appData.subjects[subject];
  const titleElement = document.getElementById('current-subject-title');
  const subtitleElement = document.querySelector('.section-subtitle');
  
  if (titleElement) {
    titleElement.textContent = `${subjectData.name} PYQs`;
  }
  if (subtitleElement) {
    subtitleElement.textContent = `Chapter-wise Collection of ${subjectData.name} PYQs`;
  }

  // Reset filters
  currentState.filters = {
    classes: [],
    units: [],
    notStarted: false,
    weakChapters: false
  };

  // Update units dropdown
  updateUnitsDropdown(subjectData.units);
  
  // Reset filter UI
  resetFilterUI();
  
  // Render chapters
  renderChapters();
}

// Update units dropdown
function updateUnitsDropdown(units) {
  const unitsMenu = document.getElementById('units-menu');
  if (!unitsMenu) return;
  
  unitsMenu.innerHTML = '';
  
  units.forEach(unit => {
    const label = document.createElement('label');
    label.className = 'dropdown-item';
    label.innerHTML = `
      <input type="checkbox" value="${unit}">
      <span>${unit}</span>
    `;
    unitsMenu.appendChild(label);
  });
}

// Reset filter UI
function resetFilterUI() {
  // Reset checkboxes
  document.querySelectorAll('.dropdown input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });
  
  // Reset filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Update dropdown labels
  updateDropdownLabels();
  
  // Clear active filters
  updateActiveFilters();
}

// Update filters based on UI state
function updateFilters() {
  try {
    // Get selected classes
    const classCheckboxes = document.querySelectorAll('#class-dropdown input[type="checkbox"]:checked');
    currentState.filters.classes = Array.from(classCheckboxes).map(cb => cb.value);
    
    // Get selected units
    const unitCheckboxes = document.querySelectorAll('#units-dropdown input[type="checkbox"]:checked');
    currentState.filters.units = Array.from(unitCheckboxes).map(cb => cb.value);
    
    updateDropdownLabels();
    updateActiveFilters();
    renderChapters();
  } catch (error) {
    console.error('Error updating filters:', error);
  }
}

// Toggle filter buttons
function toggleFilter(filterType) {
  currentState.filters[filterType] = !currentState.filters[filterType];
  
  const buttonId = filterType === 'notStarted' ? 'not-started-filter' : 'weak-chapters-filter';
  const button = document.getElementById(buttonId);
  if (button) {
    button.classList.toggle('active', currentState.filters[filterType]);
  }
  
  updateActiveFilters();
  renderChapters();
}

// Toggle sort order
function toggleSort() {
  currentState.sortOrder = currentState.sortOrder === 'asc' ? 'desc' : 'asc';
  
  const sortBtn = document.getElementById('sort-btn');
  if (sortBtn) {
    sortBtn.classList.toggle('desc', currentState.sortOrder === 'desc');
  }
  
  renderChapters();
}

// Update dropdown labels
function updateDropdownLabels() {
  // Update class dropdown label
  const classDropdown = document.getElementById('class-dropdown');
  if (classDropdown) {
    const classLabel = classDropdown.querySelector('.dropdown-label');
    const selectedClasses = currentState.filters.classes;
    
    if (classLabel) {
      if (selectedClasses.length === 0) {
        classLabel.textContent = 'Class';
      } else if (selectedClasses.length === 1) {
        classLabel.textContent = `Class ${selectedClasses[0]}`;
      } else {
        classLabel.textContent = `${selectedClasses.length} Classes`;
      }
    }
  }

  // Update units dropdown label
  const unitsDropdown = document.getElementById('units-dropdown');
  if (unitsDropdown) {
    const unitsLabel = unitsDropdown.querySelector('.dropdown-label');
    const selectedUnits = currentState.filters.units;
    
    if (unitsLabel) {
      if (selectedUnits.length === 0) {
        unitsLabel.textContent = 'Units';
      } else if (selectedUnits.length === 1) {
        unitsLabel.textContent = selectedUnits[0];
      } else {
        unitsLabel.textContent = `${selectedUnits.length} Units`;
      }
    }
  }
}

// Update active filters display
function updateActiveFilters() {
  const activeFiltersContainer = document.getElementById('active-filters');
  if (!activeFiltersContainer) return;
  
  activeFiltersContainer.innerHTML = '';
  
  // Class filters
  currentState.filters.classes.forEach(cls => {
    const badge = createFilterBadge(`Class ${cls}`, 'class', cls);
    activeFiltersContainer.appendChild(badge);
  });
  
  // Unit filters
  currentState.filters.units.forEach(unit => {
    const badge = createFilterBadge(unit, 'unit', unit);
    activeFiltersContainer.appendChild(badge);
  });
  
  // Status filters
  if (currentState.filters.notStarted) {
    const badge = createFilterBadge('Not Started', 'status', 'notStarted');
    activeFiltersContainer.appendChild(badge);
  }
  
  if (currentState.filters.weakChapters) {
    const badge = createFilterBadge('Weak Chapters', 'status', 'weakChapters');
    activeFiltersContainer.appendChild(badge);
  }
}

// Create filter badge
function createFilterBadge(text, type, value) {
  const badge = document.createElement('div');
  badge.className = 'filter-badge';
  badge.innerHTML = `
    <span>${text}</span>
    <button onclick="removeFilter('${type}', '${value}')">×</button>
  `;
  return badge;
}

// Remove filter
function removeFilter(type, value) {
  try {
    if (type === 'class') {
      currentState.filters.classes = currentState.filters.classes.filter(c => c !== value);
      // Update checkbox
      const checkbox = document.querySelector(`#class-dropdown input[value="${value}"]`);
      if (checkbox) checkbox.checked = false;
    } else if (type === 'unit') {
      currentState.filters.units = currentState.filters.units.filter(u => u !== value);
      // Update checkbox
      const checkbox = document.querySelector(`#units-dropdown input[value="${value}"]`);
      if (checkbox) checkbox.checked = false;
    } else if (type === 'status') {
      currentState.filters[value] = false;
      // Update button
      const buttonId = value === 'notStarted' ? 'not-started-filter' : 'weak-chapters-filter';
      const button = document.getElementById(buttonId);
      if (button) {
        button.classList.remove('active');
      }
    }
    
    updateDropdownLabels();
    updateActiveFilters();
    renderChapters();
  } catch (error) {
    console.error('Error removing filter:', error);
  }
}

// Filter and render chapters
function renderChapters() {
  try {
    const subjectData = appData.subjects[currentState.activeSubject];
    if (!subjectData || !subjectData.chapters) return;
    
    let chapters = [...subjectData.chapters];
    
    // Apply filters
    chapters = applyFilters(chapters);
    
    // Apply sorting
    chapters = applySorting(chapters);
    
    // Update chapter count
    updateChapterCount(chapters.length);
    
    // Render chapter cards
    const chaptersGrid = document.getElementById('chapters-grid');
    if (chaptersGrid) {
      chaptersGrid.innerHTML = '';
      
      chapters.forEach(chapter => {
        const chapterCard = createChapterCard(chapter);
        chaptersGrid.appendChild(chapterCard);
      });
    }
  } catch (error) {
    console.error('Error rendering chapters:', error);
  }
}

// Apply filters to chapters
function applyFilters(chapters) {
  // If weak chapters filter is active, it overrides other filters
  if (currentState.filters.weakChapters) {
    return chapters.filter(chapter => chapter.isWeak);
  }
  
  return chapters.filter(chapter => {
    // Class filter
    if (currentState.filters.classes.length > 0 && 
        !currentState.filters.classes.includes(chapter.class)) {
      return false;
    }
    
    // Unit filter
    if (currentState.filters.units.length > 0 && 
        !currentState.filters.units.includes(chapter.unit)) {
      return false;
    }
    
    // Not started filter
    if (currentState.filters.notStarted && chapter.status !== 'not_started') {
      return false;
    }
    
    return true;
  });
}

// Apply sorting to chapters
function applySorting(chapters) {
  return chapters.sort((a, b) => {
    const aValue = a.title.toLowerCase();
    const bValue = b.title.toLowerCase();
    
    if (currentState.sortOrder === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });
}

// Update chapter count display
function updateChapterCount(count) {
  const chapterCountText = document.getElementById('chapter-count-text');
  if (!chapterCountText) return;
  
  const totalChapters = appData.subjects[currentState.activeSubject].chapters.length;
  
  if (count === totalChapters) {
    chapterCountText.textContent = 'Showing all chapters';
  } else {
    chapterCountText.textContent = `Showing ${count} of ${totalChapters} chapters`;
  }
}

// Create chapter card
function createChapterCard(chapter) {
  const card = document.createElement('div');
  card.className = 'chapter-card';
  
  const icon = chapterIcons[chapter.unit] || 'ph-book';
  const statusClass = chapter.isWeak ? 'status-weak' : `status-${chapter.status}`;
  
  card.innerHTML = `
    <div class="chapter-header">
      <div class="chapter-icon ${statusClass}">
        <i class="ph-bold ${icon}"></i>
      </div>
      <div class="chapter-info">
        <h3 class="chapter-title">${chapter.title}</h3>
        <span class="chapter-class">Class ${chapter.class}</span>
      </div>
    </div>
    
    <div class="year-stats">
      <div class="year-stat">
        <span>2025: ${chapter.stats.year2025.questions}s</span>
        <i class="ph-bold ph-arrow-up progress-indicator"></i>
      </div>
      <div class="year-stat">
        <span>2024: ${chapter.stats.year2024.questions}s</span>
      </div>
    </div>
    
    <div class="chapter-progress">
      <div class="progress-bar">
        <div class="progress-fill ${statusClass}" style="width: ${chapter.progress}%"></div>
      </div>
      <div class="question-count">${chapter.questionsAttempted}/${chapter.totalQuestions} Qs</div>
    </div>
    
    <div class="chapter-stats">
      <div class="stats-row">
        <div class="stat-item">
          <i class="ph-bold ph-clock"></i>
          <span>${chapter.timeSpent}</span>
        </div>
        <div class="stat-item">
          <i class="ph-bold ph-percent"></i>
          <span>${chapter.accuracy}% accuracy</span>
        </div>
      </div>
    </div>
    
    ${createChapterBadges(chapter)}
  `;
  
  return card;
}

// Create chapter badges
function createChapterBadges(chapter) {
  const badges = [];
  
  if (chapter.isWeak) {
    badges.push('<span class="chapter-badge badge-weak">Weak</span>');
  }
  
  if (chapter.status === 'completed') {
    badges.push('<span class="chapter-badge badge-completed">Completed</span>');
  } else if (chapter.status === 'in_progress') {
    badges.push('<span class="chapter-badge badge-in-progress">In Progress</span>');
  } else {
    badges.push('<span class="chapter-badge badge-not-started">Not Started</span>');
  }
  
  return badges.length > 0 ? `<div class="chapter-badges">${badges.join('')}</div>` : '';
}

// Make removeFilter function global
window.removeFilter = removeFilter;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);