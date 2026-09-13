// script.js

const projectsLink = document.getElementById('projects-link');
const dropdownContent = document.querySelector('.dropdown-content');

projectsLink.addEventListener('click', function() {
  if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
    projectsLink.textContent = 'nvfiojjfnd';
    dropdownContent.style.display = 'block'; // Show the dropdown
  } else {
    projectsLink.textContent = 'Projects';
    dropdownContent.style.display = 'none'; // Hide the dropdown
  }
});

document.addEventListener('click', function(event) {
  if (!projectsLink.contains(event.target)) {
    dropdownContent.style.display = 'none';
    projectsLink.textContent = 'Projects';
  }
});
