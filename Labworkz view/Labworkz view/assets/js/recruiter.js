// recruiter.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
const candidateSearch = document.getElementById('candidateSearch');
const searchButton = document.querySelector('.search-bar .btn');
const candidateList = document.querySelector('.candidate-list');

// Sample candidates (mock data)
const candidates = [
    {
    name: 'John Doe',
    skills: 'Python, Data Analysis, Machine Learning',
    portfolio: '#',
    },
    {
    name: 'Jane Smith',
    skills: 'Web Development, React, Node.js',
    portfolio: '#',
    },
    {
    name: 'Alex Lee',
    skills: 'Java, Spring Boot, API Design',
    portfolio: '#',
    },
];

// Search handler
searchButton.addEventListener('click', () => {
    const query = candidateSearch.value.toLowerCase();
    const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(query) ||
    candidate.skills.toLowerCase().includes(query)
    );

    // Update the candidate list
    candidateList.innerHTML = '<h3>Top Candidates</h3>';
    if (filteredCandidates.length > 0) {
    filteredCandidates.forEach(candidate => {
        const candidateDiv = document.createElement('div');
        candidateDiv.classList.add('candidate');

        candidateDiv.innerHTML = `
        <h4>${candidate.name}</h4>
        <p>Skills: ${candidate.skills}</p>
        <p>Portfolio: <a href="${candidate.portfolio}">View Portfolio</a></p>
        <button class="btn">Send Assessment Invitation</button>
        `;

        candidateList.appendChild(candidateDiv);
    });
    } else {
    candidateList.innerHTML += '<p>No candidates found matching your criteria.</p>';
    }
});
});