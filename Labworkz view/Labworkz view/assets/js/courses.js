// courses.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.querySelector('.course-list');
  
    // Sample data for courses
    const courses = [
      {
        title: 'Python Basics',
        description: 'An introduction to Python programming for beginners.',
        link: '#',
      },
      {
        title: 'Advanced JavaScript',
        description: 'Master JavaScript for dynamic and interactive web development.',
        link: '#',
      },
      {
        title: 'Data Science with Python',
        description: 'Learn to analyze and visualize data using Python libraries.',
        link: '#',
      },
      {
        title: 'Web Development Bootcamp',
        description: 'Learn HTML, CSS, and JavaScript to build stunning websites.',
        link: '#',
      },
      {
        title: 'Machine Learning Fundamentals',
        description: 'Explore the basics of machine learning and AI.',
        link: '#',
      },
    ];
  
    // Function to render courses dynamically
    function renderCourses() {
      courseList.innerHTML = ''; // Clear existing courses
  
      courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
  
        courseItem.innerHTML = `
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <a href="${course.link}" class="btn">Start Learning</a>
        `;
  
        courseList.appendChild(courseItem);
      });
    }
  
    // Render courses on page load
    renderCourses();
  });
  