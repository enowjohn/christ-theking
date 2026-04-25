// Sample subjects data
const subjects = [
    { name: 'Mathematics', code: 'MATH', icon: '🔢' },
    { name: 'English Language', code: 'ENG', icon: '📝' },
    { name: 'French', code: 'FRE', icon: '🇫🇷' },
    { name: 'Physics', code: 'PHY', icon: '⚡' },
    { name: 'Chemistry', code: 'CHEM', icon: '🧪' },
    { name: 'Biology', code: 'BIO', icon: '🧬' },
    { name: 'History', code: 'HIST', icon: '📚' },
    { name: 'Geography', code: 'GEO', icon: '🌍' },
    { name: 'Economics', code: 'ECON', icon: '💰' },
    { name: 'Computer Science', code: 'CS', icon: '💻' },
    { name: 'Technical Drawing', code: 'TD', icon: '📐' },
    { name: 'Woodwork', code: 'WW', icon: '🔨' },
    { name: 'Metalwork', code: 'MW', icon: '⚙️' },
    { name: 'Electrical Installation', code: 'EI', icon: '⚡' },
    { name: 'Business Studies', code: 'BS', icon: '💼' }
];

// Store marks entries
let marksEntries = JSON.parse(localStorage.getItem('marksEntries')) || [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateSubjects();
    populateSubjectSelect();
    loadRecentEntries();
    setupEventListeners();
});

function populateSubjects() {
    const subjectsGrid = document.getElementById('subjectsGrid');
    
    subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'card';
        subjectCard.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                <span style="font-size: 2rem; margin-right: 1rem;">${subject.icon}</span>
                <div>
                    <h3 style="color: #1e40af; margin-bottom: 0.25rem;">${subject.name}</h3>
                    <p style="color: #6b7280; font-size: 0.9rem;">Code: ${subject.code}</p>
                </div>
            </div>
            
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button 
                    class="btn btn-primary" 
                    style="font-size: 0.85rem; padding: 8px 12px;"
                    onclick="downloadQuestions('${subject.name}', '2023')"
                >
                    2023 Questions
                </button>
                <button 
                    class="btn btn-secondary" 
                    style="font-size: 0.85rem; padding: 8px 12px;"
                    onclick="downloadQuestions('${subject.name}', '2022')"
                >
                    2022 Questions
                </button>
                <button 
                    class="btn" 
                    style="font-size: 0.85rem; padding: 8px 12px; background-color: #10b981;"
                    onclick="downloadQuestions('${subject.name}', '2021')"
                >
                    2021 Questions
                </button>
            </div>
        `;
        subjectsGrid.appendChild(subjectCard);
    });
}

function populateSubjectSelect() {
    const subjectSelect = document.getElementById('subject');
    
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject.name;
        option.textContent = `${subject.icon} ${subject.name}`;
        subjectSelect.appendChild(option);
    });
}

function setupEventListeners() {
    const marksForm = document.getElementById('marksForm');
    const downloadBtn = document.getElementById('downloadMarks');
    
    marksForm.addEventListener('submit', handleMarksSubmit);
    downloadBtn.addEventListener('click', downloadMarksFile);
}

function handleMarksSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const marksData = {
        studentName: formData.get('studentName'),
        subject: formData.get('subject'),
        className: formData.get('className'),
        term: formData.get('term'),
        marks: formData.get('marks'),
        timestamp: new Date().toISOString(),
        id: Date.now()
    };
    
    // Add to entries
    marksEntries.push(marksData);
    localStorage.setItem('marksEntries', JSON.stringify(marksEntries));
    
    // Show success message
    showSuccessMessage(marksData);
    
    // Reset form
    e.target.reset();
    
    // Update recent entries
    loadRecentEntries();
}

function showSuccessMessage(data) {
    const successMsg = document.getElementById('successMessage');
    successMsg.textContent = `✅ Marks submitted successfully for ${data.studentName} - ${data.subject}`;
    successMsg.style.display = 'block';
    
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
}

function loadRecentEntries() {
    const recentEntries = document.getElementById('recentEntries');
    const entriesList = document.getElementById('entriesList');
    
    if (marksEntries.length === 0) {
        recentEntries.style.display = 'none';
        return;
    }
    
    recentEntries.style.display = 'block';
    entriesList.innerHTML = '';
    
    // Show last 5 entries
    marksEntries.slice(-5).reverse().forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.style.cssText = 'padding: 0.5rem 0; border-bottom: 1px solid #e5e7eb;';
        entryDiv.innerHTML = `
            <strong>${entry.studentName}</strong> - ${entry.subject} (${entry.className}) - ${entry.term}: 
            <span style="color: #10b981;">${entry.marks}%</span>
        `;
        entriesList.appendChild(entryDiv);
    });
}

function downloadMarksFile() {
    if (marksEntries.length === 0) {
        alert('No marks entries to download');
        return;
    }
    
    const marksContent = marksEntries.map(entry => 
        `${entry.studentName} - ${entry.subject} - ${entry.className} - ${entry.term}: ${entry.marks}%`
    ).join('\n');
    
    const blob = new Blob([marksContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `marks_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function downloadQuestions(subject, year) {
    // Create a sample question file
    const questionContent = `
CHRIST THE KING SCHOOL - ${subject.toUpperCase()} PAST QUESTIONS
Year: ${year}
Duration: 2 hours 30 minutes
Total Marks: 100

INSTRUCTIONS:
1. Answer all questions in Section A and any THREE questions in Section B
2. Write your answers in the spaces provided
3. Do not write in the margins

SECTION A - OBJECTIVE (40 MARKS)
Answer all questions

1. What is the capital of Cameroon?
   a) Douala  b) Yaoundé  c) Buea  d) Limbe

2. Calculate 25% of 200:
   a) 25  b) 50  c) 75  d) 100

[More questions would be included here...]

SECTION B - THEORY (60 MARKS)
Answer any THREE questions

1. Explain the importance of ${subject} in modern education.
   (20 marks)

2. Discuss the applications of ${subject} in industry.
   (20 marks)

[More questions would be included here...]

END OF PAPER
`;
    
    const blob = new Blob([questionContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${subject.replace(/\s+/g, '_')}_Questions_${year}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
