// Main JavaScript file for Christ the King School website

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Christ the King School website loaded');
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to cards on scroll
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
    
    // Observe all cards
    document.querySelectorAll('.card, .link-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Quiz functionality
function showQuiz() {
    const quizData = [
        {
            question: "What is the capital of Cameroon?",
            options: ["Douala", "Yaoundé", "Buea", "Limbe"],
            correct: 1
        },
        {
            question: "What percentage pass rate did Christ the King School achieve in 2023?",
            options: ["60%", "70%", "80%", "90%"],
            correct: 1
        },
        {
            question: "Which of these is NOT an industrial subject offered?",
            options: ["Woodwork", "Metalwork", "Chemistry", "Technical Drawing"],
            correct: 2
        },
        {
            question: "How many subjects are offered at Christ the King School?",
            options: ["10", "12", "15", "20"],
            correct: 2
        },
        {
            question: "What is the school's focus in education?",
            options: ["Sports only", "Academic only", "Industrial and General", "Arts only"],
            correct: 2
        }
    ];
    
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
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 500px; width: 90%; position: relative;">
            <button onclick="closeQuiz()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; cursor: pointer;">×</button>
            <h2 style="color: #1e40af; margin-bottom: 1rem;">🧪 Interactive Quiz</h2>
            <div id="quizContent"></div>
        </div>
    `;
    
    document.body.appendChild(quizModal);
    
    function displayQuestion() {
        const question = quizData[currentQuestion];
        const quizContent = document.getElementById('quizContent');
        
        quizContent.innerHTML = `
            <div style="margin-bottom: 1.5rem;">
                <p style="font-weight: 600; margin-bottom: 1rem;">Question ${currentQuestion + 1} of ${quizData.length}</p>
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
                <span style="color: #6b7280;">Score: ${score}/${quizData.length}</span>
                <span style="color: #6b7280;">Progress: ${Math.round((currentQuestion / quizData.length) * 100)}%</span>
            </div>
        `;
    }
    
    window.checkAnswer = function(selectedIndex) {
        const question = quizData[currentQuestion];
        if (selectedIndex === question.correct) {
            score++;
            alert('✅ Correct! Well done!');
        } else {
            alert(`❌ Incorrect. The correct answer is: ${question.options[question.correct]}`);
        }
        
        currentQuestion++;
        
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            showResults();
        }
    };
    
    function showResults() {
        const quizContent = document.getElementById('quizContent');
        const percentage = Math.round((score / quizData.length) * 100);
        
        quizContent.innerHTML = `
            <div style="text-align: center;">
                <h3 style="color: #1e40af; margin-bottom: 1rem;">🎉 Quiz Complete!</h3>
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">Your Score: ${score}/${quizData.length}</p>
                <p style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: ${percentage >= 70 ? '#10b981' : '#f59e0b'};">${percentage}%</p>
                <p style="margin-bottom: 1.5rem;">${percentage >= 70 ? 'Excellent work! You know our school well!' : 'Good effort! Keep learning about our school.'}</p>
                <button onclick="closeQuiz()" class="btn btn-primary">Close Quiz</button>
            </div>
        `;
    }
    
    window.closeQuiz = function() {
        document.body.removeChild(quizModal);
        currentQuestion = 0;
        score = 0;
    };
    
    displayQuestion();
}

// Statistics functionality
function showStats() {
    const statsModal = document.createElement('div');
    statsModal.style.cssText = `
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
    
    statsModal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 600px; width: 90%; position: relative;">
            <button onclick="closeStats()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; cursor: pointer;">×</button>
            <h2 style="color: #1e40af; margin-bottom: 1.5rem;">📊 Academic Performance Statistics</h2>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">2023 Performance Overview</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div style="text-align: center; padding: 1rem; background: #f8fafc; border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #10b981;">70%</div>
                        <div style="color: #6b7280;">GCE O/L Pass Rate</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: #f8fafc; border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #1e40af;">85%</div>
                        <div style="color: #6b7280;">Average Attendance</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: #f8fafc; border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #f59e0b;">92%</div>
                        <div style="color: #6b7280;">Teacher Presence</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: #f8fafc; border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #dc2626;">500+</div>
                        <div style="color: #6b7280;">Total Students</div>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">Subject Performance</h3>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0;">
                        <span>Mathematics</span>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="width: 100px; height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden;">
                                <div style="width: 75%; height: 100%; background: #10b981;"></div>
                            </div>
                            <span style="font-weight: 600;">75%</span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0;">
                        <span>English Language</span>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="width: 100px; height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden;">
                                <div style="width: 82%; height: 100%; background: #10b981;"></div>
                            </div>
                            <span style="font-weight: 600;">82%</span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0;">
                        <span>Physics</span>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="width: 100px; height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden;">
                                <div style="width: 68%; height: 100%; background: #f59e0b;"></div>
                            </div>
                            <span style="font-weight: 600;">68%</span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0;">
                        <span>Chemistry</span>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="width: 100px; height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden;">
                                <div style="width: 71%; height: 100%; background: #10b981;"></div>
                            </div>
                            <span style="font-weight: 600;">71%</span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0;">
                        <span>Technical Drawing</span>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="width: 100px; height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden;">
                                <div style="width: 88%; height: 100%; background: #10b981;"></div>
                            </div>
                            <span style="font-weight: 600;">88%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <button onclick="closeStats()" class="btn btn-primary" style="width: 100%;">Close Statistics</button>
        </div>
    `;
    
    document.body.appendChild(statsModal);
    
    window.closeStats = function() {
        document.body.removeChild(statsModal);
    };
}

// Add mobile menu functionality
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
}

// Add responsive navigation
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768 && navLinks) {
        navLinks.style.display = 'flex';
    }
});
