// Study & Teaching page JavaScript

// Sample study materials data
const studyMaterials = [
    {
        subject: 'Mathematics',
        icon: '🔢',
        materials: [
            { name: 'Algebra Basics', type: 'PDF', size: '2.5 MB' },
            { name: 'Geometry Formulas', type: 'PDF', size: '1.8 MB' },
            { name: 'Trigonometry Guide', type: 'PDF', size: '3.2 MB' },
            { name: 'Practice Problems', type: 'PDF', size: '4.1 MB' }
        ]
    },
    {
        subject: 'English Language',
        icon: '📝',
        materials: [
            { name: 'Grammar Rules', type: 'PDF', size: '2.1 MB' },
            { name: 'Essay Writing Guide', type: 'PDF', size: '1.5 MB' },
            { name: 'Vocabulary Builder', type: 'PDF', size: '3.8 MB' },
            { name: 'Comprehension Skills', type: 'PDF', size: '2.7 MB' }
        ]
    },
    {
        subject: 'Physics',
        icon: '⚡',
        materials: [
            { name: 'Mechanics Notes', type: 'PDF', size: '4.2 MB' },
            { name: 'Electricity & Magnetism', type: 'PDF', size: '3.9 MB' },
            { name: 'Waves & Optics', type: 'PDF', size: '3.1 MB' },
            { name: 'Lab Experiments', type: 'PDF', size: '2.8 MB' }
        ]
    },
    {
        subject: 'Chemistry',
        icon: '🧪',
        materials: [
            { name: 'Organic Chemistry', type: 'PDF', size: '5.1 MB' },
            { name: 'Periodic Table Guide', type: 'PDF', size: '2.3 MB' },
            { name: 'Chemical Reactions', type: 'PDF', size: '3.7 MB' },
            { name: 'Lab Safety Manual', type: 'PDF', size: '1.9 MB' }
        ]
    },
    {
        subject: 'Biology',
        icon: '🧬',
        materials: [
            { name: 'Cell Biology', type: 'PDF', size: '4.8 MB' },
            { name: 'Human Anatomy', type: 'PDF', size: '6.2 MB' },
            { name: 'Ecology Notes', type: 'PDF', size: '3.4 MB' },
            { name: 'Genetics Basics', type: 'PDF', size: '2.9 MB' }
        ]
    },
    {
        subject: 'Technical Drawing',
        icon: '📐',
        materials: [
            { name: 'Drawing Techniques', type: 'PDF', size: '8.1 MB' },
            { name: 'CAD Basics', type: 'PDF', size: '4.5 MB' },
            { name: 'Engineering Drawings', type: 'PDF', size: '5.7 MB' },
            { name: '3D Modeling Guide', type: 'PDF', size: '6.3 MB' }
        ]
    }
];

// Teaching resources data
const teachingResources = [
    {
        subject: 'Mathematics',
        icon: '🔢',
        resources: [
            { name: 'Lesson Plans - Algebra', type: 'DOCX', size: '1.2 MB' },
            { name: 'PowerPoint - Geometry', type: 'PPTX', size: '3.4 MB' },
            { name: 'Assessment Templates', type: 'PDF', size: '0.8 MB' },
            { name: 'Interactive Activities', type: 'PDF', size: '2.1 MB' }
        ]
    },
    {
        subject: 'English Language',
        icon: '📝',
        resources: [
            { name: 'Literature Lesson Plans', type: 'DOCX', size: '1.5 MB' },
            { name: 'Grammar Presentations', type: 'PPTX', size: '2.8 MB' },
            { name: 'Writing Rubrics', type: 'PDF', size: '0.6 MB' },
            { name: 'Reading Comprehension', type: 'PDF', size: '1.9 MB' }
        ]
    },
    {
        subject: 'Physics',
        icon: '⚡',
        resources: [
            { name: 'Physics Lab Manual', type: 'PDF', size: '4.2 MB' },
            { name: 'Demonstration Videos', type: 'MP4', size: '125 MB' },
            { name: 'Assessment Tools', type: 'PDF', size: '1.3 MB' },
            { name: 'Experiment Guides', type: 'PDF', size: '2.7 MB' }
        ]
    },
    {
        subject: 'Chemistry',
        icon: '🧪',
        resources: [
            { name: 'Chemistry Lab Safety', type: 'PDF', size: '1.8 MB' },
            { name: 'Practical Experiments', type: 'PDF', size: '3.5 MB' },
            { name: 'Assessment Criteria', type: 'PDF', size: '0.9 MB' },
            { name: 'Teaching Strategies', type: 'PDF', size: '2.2 MB' }
        ]
    },
    {
        subject: 'Biology',
        icon: '🧬',
        resources: [
            { name: 'Biology Lab Manual', type: 'PDF', size: '5.1 MB' },
            { name: 'Dissection Guides', type: 'PDF', size: '3.8 MB' },
            { name: 'Assessment Templates', type: 'PDF', size: '1.1 MB' },
            { name: 'Field Trip Ideas', type: 'PDF', size: '1.6 MB' }
        ]
    },
    {
        subject: 'Technical Drawing',
        icon: '📐',
        resources: [
            { name: 'Drawing Lesson Plans', type: 'DOCX', size: '2.3 MB' },
            { name: 'CAD Teaching Guide', type: 'PDF', size: '4.7 MB' },
            { name: 'Project Ideas', type: 'PDF', size: '2.9 MB' },
            { name: 'Assessment Rubrics', type: 'PDF', size: '1.4 MB' }
        ]
    }
];

// Quiz subjects data
const quizSubjects = [
    { name: 'Mathematics', icon: '🔢', difficulty: 'Medium' },
    { name: 'English Language', icon: '📝', difficulty: 'Easy' },
    { name: 'Physics', icon: '⚡', difficulty: 'Hard' },
    { name: 'Chemistry', icon: '🧪', difficulty: 'Medium' },
    { name: 'Biology', icon: '🧬', difficulty: 'Medium' },
    { name: 'History', icon: '📚', difficulty: 'Easy' },
    { name: 'Geography', icon: '🌍', difficulty: 'Medium' },
    { name: 'Computer Science', icon: '💻', difficulty: 'Hard' }
];

// Subject guides data
const subjectGuides = [
    {
        subject: 'Mathematics',
        icon: '🔢',
        description: 'Master mathematical concepts with our comprehensive guides',
        topics: ['Algebra', 'Geometry', 'Trigonometry', 'Statistics', 'Calculus'],
        studyTime: '6-8 hours/week'
    },
    {
        subject: 'English Language',
        icon: '📝',
        description: 'Improve your language skills with structured learning paths',
        topics: ['Grammar', 'Writing', 'Literature', 'Comprehension', 'Vocabulary'],
        studyTime: '4-6 hours/week'
    },
    {
        subject: 'Physics',
        icon: '⚡',
        description: 'Understand the fundamental principles of physics',
        topics: ['Mechanics', 'Electricity', 'Waves', 'Optics', 'Modern Physics'],
        studyTime: '7-9 hours/week'
    },
    {
        subject: 'Chemistry',
        icon: '🧪',
        description: 'Explore the world of chemical reactions and compounds',
        topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry'],
        studyTime: '6-8 hours/week'
    },
    {
        subject: 'Biology',
        icon: '🧬',
        description: 'Discover the science of living organisms',
        topics: ['Cell Biology', 'Genetics', 'Ecology', 'Human Biology', 'Evolution'],
        studyTime: '5-7 hours/week'
    },
    {
        subject: 'Technical Drawing',
        icon: '📐',
        description: 'Learn technical drawing and CAD skills',
        topics: ['Drawing Basics', 'CAD Software', 'Engineering Drawings', '3D Modeling'],
        studyTime: '8-10 hours/week'
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateStudyMaterials();
    populateTeachingResources();
    populateQuizSubjects();
    populateSubjectGuides();
    setupAnimations();
});

function populateStudyMaterials() {
    const grid = document.getElementById('studyMaterialsGrid');
    
    studyMaterials.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                <span style="font-size: 2.5rem; margin-right: 1rem;">${subject.icon}</span>
                <div>
                    <h3 style="color: #1e40af; margin-bottom: 0.25rem;">${subject.subject}</h3>
                    <p style="color: #6b7280; font-size: 0.9rem;">${subject.materials.length} materials available</p>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${subject.materials.map(material => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: #f8fafc; border-radius: 6px; border: 1px solid #e5e7eb;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 0.9rem; font-weight: 500;">${material.name}</span>
                            <span style="font-size: 0.8rem; color: #6b7280; background: #e5e7eb; padding: 0.2rem 0.5rem; border-radius: 4px;">${material.type}</span>
                        </div>
                        <button 
                            onclick="downloadMaterial('${subject.subject}', '${material.name}', '${material.type}')"
                            class="btn btn-primary" 
                            style="font-size: 0.8rem; padding: 0.4rem 0.8rem;"
                        >
                            📥 ${material.size}
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

function populateTeachingResources() {
    const grid = document.getElementById('teachingResourcesGrid');
    
    teachingResources.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                <span style="font-size: 2.5rem; margin-right: 1rem;">${subject.icon}</span>
                <div>
                    <h3 style="color: #dc2626; margin-bottom: 0.25rem;">${subject.subject}</h3>
                    <p style="color: #6b7280; font-size: 0.9rem;">${subject.resources.length} resources for teachers</p>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${subject.resources.map(resource => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: #fef2f2; border-radius: 6px; border: 1px solid #fecaca;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 0.9rem; font-weight: 500;">${resource.name}</span>
                            <span style="font-size: 0.8rem; color: #dc2626; background: #fecaca; padding: 0.2rem 0.5rem; border-radius: 4px;">${resource.type}</span>
                        </div>
                        <button 
                            onclick="downloadResource('${subject.subject}', '${resource.name}', '${resource.type}')"
                            class="btn btn-secondary" 
                            style="font-size: 0.8rem; padding: 0.4rem 0.8rem;"
                        >
                            📥 ${resource.size}
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

function populateQuizSubjects() {
    const grid = document.getElementById('quizGrid');
    
    quizSubjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.textAlign = 'center';
        card.style.cursor = 'pointer';
        card.onclick = () => startSubjectQuiz(subject.name);
        
        const difficultyColor = subject.difficulty === 'Easy' ? '#10b981' : 
                               subject.difficulty === 'Medium' ? '#f59e0b' : '#dc2626';
        
        card.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">${subject.icon}</div>
            <h3 style="color: #1f2937; margin-bottom: 0.5rem;">${subject.name}</h3>
            <div style="display: flex; justify-content: center; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                <span style="font-size: 0.8rem; color: #6b7280;">Difficulty:</span>
                <span style="font-size: 0.8rem; font-weight: 600; color: ${difficultyColor}; background: ${difficultyColor}20; padding: 0.2rem 0.6rem; border-radius: 4px;">
                    ${subject.difficulty}
                </span>
            </div>
            <button class="btn btn-primary" style="width: 100%;">
                🧪 Start Quiz
            </button>
        `;
        grid.appendChild(card);
    });
}

function populateSubjectGuides() {
    const grid = document.getElementById('subjectGuidesGrid');
    
    subjectGuides.forEach(guide => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                <span style="font-size: 2.5rem; margin-right: 1rem;">${guide.icon}</span>
                <div>
                    <h3 style="color: #1e40af; margin-bottom: 0.25rem;">${guide.subject}</h3>
                    <p style="color: #6b7280; font-size: 0.9rem;">${guide.studyTime}</p>
                </div>
            </div>
            
            <p style="margin-bottom: 1rem; color: #4b5563;">${guide.description}</p>
            
            <div style="margin-bottom: 1rem;">
                <h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem; color: #1f2937;">Key Topics:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.3rem;">
                    ${guide.topics.map(topic => `
                        <span style="font-size: 0.8rem; background: #e5e7eb; padding: 0.2rem 0.5rem; border-radius: 4px;">
                            ${topic}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <button 
                onclick="openSubjectGuide('${guide.subject}')"
                class="btn btn-primary" 
                style="width: 100%;"
            >
                📖 Open Guide
            </button>
        `;
        grid.appendChild(card);
    });
}

function downloadMaterial(subject, materialName, type) {
    // Create a sample material file
    const content = `
CHRIST THE KING SCHOOL - ${subject.toUpperCase()} STUDY MATERIAL
Material: ${materialName}
Type: ${type}
Generated: ${new Date().toLocaleDateString()}

${materialName.toUpperCase()}
==================

This study material covers essential concepts and topics in ${subject}.
Students should use this material to supplement their classroom learning
and prepare for examinations.

KEY TOPICS COVERED:
- Fundamental concepts
- Important formulas and definitions
- Practice problems and solutions
- Examination tips and strategies

STUDY TIPS:
1. Read through the material carefully
2. Take notes on important points
3. Practice the included exercises
4. Review regularly for better retention
5. Ask teachers for clarification on difficult topics

For more resources, visit the school library or contact your subject teacher.

© 2024 Christ the King School - Excellence in Education
`;
    
    downloadFile(content, `${subject}_${materialName.replace(/\s+/g, '_')}.${type.toLowerCase()}`);
}

function downloadResource(subject, resourceName, type) {
    // Create a sample teaching resource file
    const content = `
CHRIST THE KING SCHOOL - ${subject.toUpperCase()} TEACHING RESOURCE
Resource: ${resourceName}
Type: ${type}
Generated: ${new Date().toLocaleDateString()}

TEACHING RESOURCE FOR ${subject.toUpperCase()}
==========================================

This resource is designed to assist teachers in delivering effective
${subject} lessons at Christ the King School.

RESOURCE CONTENTS:
- Lesson objectives and outcomes
- Teaching strategies and methodologies
- Assessment tools and rubrics
- Student engagement activities
- Homework and assignment ideas

TEACHING GUIDELINES:
1. Adapt the material to suit student learning levels
2. Incorporate practical examples and demonstrations
3. Use interactive teaching methods
4. Provide regular feedback to students
5. Monitor student progress and adjust accordingly

ASSESSMENT CRITERIA:
- Understanding of key concepts
- Problem-solving abilities
- Practical application skills
- Class participation and engagement
- Homework and assignment completion

For additional teaching support, contact the head of ${subject} department.

© 2024 Christ the King School - Excellence in Education
`;
    
    downloadFile(content, `${subject}_${resourceName.replace(/\s+/g, '_')}.${type.toLowerCase()}`);
}

function downloadFile(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function startSubjectQuiz(subjectName) {
    // Generate quiz questions based on subject
    const quizQuestions = generateQuizQuestions(subjectName);
    let currentQuestion = 0;
    let score = 0;
    
    const quizModal = document.createElement('div');
    quizModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    quizModal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 600px; width: 90%; position: relative;">
            <button onclick="closeQuiz()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; cursor: pointer;">×</button>
            <h2 style="color: #1e40af; margin-bottom: 1rem;">🧪 ${subjectName} Quiz</h2>
            <div id="quizContent"></div>
        </div>
    `;
    
    document.body.appendChild(quizModal);
    
    function displayQuestion() {
        const question = quizQuestions[currentQuestion];
        const quizContent = document.getElementById('quizContent');
        
        quizContent.innerHTML = `
            <div style="margin-bottom: 1.5rem;">
                <p style="font-weight: 600; margin-bottom: 1rem;">Question ${currentQuestion + 1} of ${quizQuestions.length}</p>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${question.question}</p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    ${question.options.map((option, index) => `
                        <button onclick="checkAnswer(${index})" class="btn" style="text-align: left; background: #f3f4f6; color: #1f2937;">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #6b7280;">Score: ${score}/${quizQuestions.length}</span>
                <span style="color: #6b7280;">Progress: ${Math.round((currentQuestion / quizQuestions.length) * 100)}%</span>
            </div>
        `;
    }
    
    window.checkAnswer = function(selectedIndex) {
        const question = quizQuestions[currentQuestion];
        if (selectedIndex === question.correct) {
            score++;
            alert('✅ Correct! Well done!');
        } else {
            alert(`❌ Incorrect. The correct answer is: ${question.options[question.correct]}`);
        }
        
        currentQuestion++;
        
        if (currentQuestion < quizQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    };
    
    function showResults() {
        const quizContent = document.getElementById('quizContent');
        const percentage = Math.round((score / quizQuestions.length) * 100);
        
        quizContent.innerHTML = `
            <div style="text-align: center;">
                <h3 style="color: #1e40af; margin-bottom: 1rem;">🎉 ${subjectName} Quiz Complete!</h3>
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">Your Score: ${score}/${quizQuestions.length}</p>
                <p style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: ${percentage >= 70 ? '#10b981' : '#f59e0b'};">${percentage}%</p>
                <p style="margin-bottom: 1.5rem;">${percentage >= 70 ? 'Excellent work! You have mastered this subject!' : 'Good effort! Keep practicing to improve your understanding.'}</p>
                <button onclick="closeQuiz()" class="btn btn-primary">Close Quiz</button>
            </div>
        `;
    }
    
    window.closeQuiz = function() {
        document.body.removeChild(quizModal);
    };
    
    displayQuestion();
}

function generateQuizQuestions(subject) {
    // Sample quiz questions for different subjects
    const questionBank = {
        'Mathematics': [
            {
                question: "What is the value of x in the equation 2x + 5 = 15?",
                options: ["5", "10", "7.5", "20"],
                correct: 0
            },
            {
                question: "What is the area of a circle with radius 5 units?",
                options: ["25π", "10π", "5π", "50π"],
                correct: 0
            },
            {
                question: "What is the derivative of x²?",
                options: ["2x", "x²", "x", "2"],
                correct: 0
            }
        ],
        'English Language': [
            {
                question: "Which is the correct spelling?",
                options: ["Necessary", "Necesary", "Neccessary", "Nessecary"],
                correct: 0
            },
            {
                question: "What is the past tense of 'go'?",
                options: ["Went", "Gone", "Went", "Goed"],
                correct: 0
            },
            {
                question: "Which is a noun?",
                options: ["Run", "Running", "Runner", "Ran"],
                correct: 2
            }
        ],
        'Physics': [
            {
                question: "What is the SI unit of force?",
                options: ["Newton", "Joule", "Watt", "Pascal"],
                correct: 0
            },
            {
                question: "What is the speed of light in vacuum?",
                options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"],
                correct: 0
            },
            {
                question: "What is Newton's Second Law?",
                options: ["F = ma", "E = mc²", "V = IR", "PV = nRT"],
                correct: 0
            }
        ]
    };
    
    // Return questions for the subject or default questions
    return questionBank[subject] || [
        {
            question: `What is ${subject} about?`,
            options: ["A scientific subject", "An artistic subject", "A mathematical subject", "All of the above"],
            correct: 3
        },
        {
            question: `Why study ${subject}?`,
            options: ["For exams", "For knowledge", "For career", "All of the above"],
            correct: 3
        },
        {
            question: `How often should you practice ${subject}?`,
            options: ["Daily", "Weekly", "Monthly", "Never"],
            correct: 0
        }
    ];
}

function openSubjectGuide(subject) {
    const guideModal = document.createElement('div');
    guideModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    guideModal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 700px; width: 90%; max-height: 80vh; overflow-y: auto; position: relative;">
            <button onclick="closeGuide()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; cursor: pointer;">×</button>
            <h2 style="color: #1e40af; margin-bottom: 1.5rem;">📖 ${subject} Study Guide</h2>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">Study Strategy</h3>
                <p style="line-height: 1.6; color: #4b5563;">
                    Welcome to the ${subject} study guide. This comprehensive resource will help you 
                    master the key concepts and excel in your examinations. Follow the structured 
                    approach below for optimal learning outcomes.
                </p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">Learning Objectives</h3>
                <ul style="color: #4b5563; line-height: 1.6;">
                    <li>Understand fundamental concepts and principles</li>
                    <li>Develop problem-solving and critical thinking skills</li>
                    <li>Apply theoretical knowledge to practical situations</li>
                    <li>Prepare effectively for examinations</li>
                    <li>Build confidence in subject mastery</li>
                </ul>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">Study Schedule</h3>
                <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; border-left: 4px solid #1e40af;">
                    <p style="margin-bottom: 0.5rem;"><strong>Week 1-2:</strong> Foundation concepts and basics</p>
                    <p style="margin-bottom: 0.5rem;"><strong>Week 3-4:</strong> Intermediate topics and applications</p>
                    <p style="margin-bottom: 0.5rem;"><strong>Week 5-6:</strong> Advanced concepts and problem-solving</p>
                    <p style="margin-bottom: 0;"><strong>Week 7-8:</strong> Revision and exam preparation</p>
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">Assessment Criteria</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px;">
                        <h4 style="color: #0369a1; margin-bottom: 0.5rem;">Formative Assessment (40%)</h4>
                        <ul style="font-size: 0.9rem; color: #4b5563;">
                            <li>Class participation</li>
                            <li>Homework assignments</li>
                            <li>Quizzes and tests</li>
                            <li>Practical work</li>
                        </ul>
                    </div>
                    <div style="background: #f0fdf4; padding: 1rem; border-radius: 8px;">
                        <h4 style="color: #166534; margin-bottom: 0.5rem;">Summative Assessment (60%)</h4>
                        <ul style="font-size: 0.9rem; color: #4b5563;">
                            <li>Mid-term examinations</li>
                            <li>Final examinations</li>
                            <li>Projects and presentations</li>
                            <li>Practical examinations</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">Resources Available</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="background: #e5e7eb; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">📚 Textbooks</span>
                    <span style="background: #e5e7eb; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">📝 Study Notes</span>
                    <span style="background: #e5e7eb; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">🎥 Video Lessons</span>
                    <span style="background: #e5e7eb; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">🧪 Practice Tests</span>
                    <span style="background: #e5e7eb; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">👨‍🏫 Teacher Support</span>
                </div>
            </div>
            
            <button onclick="closeGuide()" class="btn btn-primary" style="width: 100%;">Close Guide</button>
        </div>
    `;
    
    document.body.appendChild(guideModal);
    
    window.closeGuide = function() {
        document.body.removeChild(guideModal);
    };
}

function setupAnimations() {
    // Add scroll animations to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}
