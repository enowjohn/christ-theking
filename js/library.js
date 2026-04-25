// Library & Videos page JavaScript

// Sample books data
const booksData = [
    {
        id: 1,
        title: "Mathematics for Advanced Students",
        author: "Dr. John Smith",
        category: "academic",
        subject: "Mathematics",
        description: "Comprehensive guide to advanced mathematics concepts",
        cover: "📚",
        rating: 4.5,
        downloads: 1250,
        size: "12.5 MB",
        format: "PDF"
    },
    {
        id: 2,
        title: "Physics Fundamentals",
        author: "Prof. Mary Johnson",
        category: "academic",
        subject: "Physics",
        description: "Essential physics concepts for O/L and A/L students",
        cover: "📖",
        rating: 4.8,
        downloads: 980,
        size: "8.3 MB",
        format: "PDF"
    },
    {
        id: 3,
        title: "Chemistry Lab Manual",
        author: "Dr. Robert Brown",
        category: "academic",
        subject: "Chemistry",
        description: "Complete laboratory manual for chemistry students",
        cover: "🧪",
        rating: 4.6,
        downloads: 750,
        size: "15.2 MB",
        format: "PDF"
    },
    {
        id: 4,
        title: "Biology: Life Sciences",
        author: "Dr. Sarah Davis",
        category: "academic",
        subject: "Biology",
        description: "Comprehensive biology textbook covering all major topics",
        cover: "🧬",
        rating: 4.7,
        downloads: 1100,
        size: "18.7 MB",
        format: "PDF"
    },
    {
        id: 5,
        title: "Technical Drawing Basics",
        author: "Eng. Michael Wilson",
        category: "industrial",
        subject: "Technical Drawing",
        description: "Introduction to technical drawing and CAD fundamentals",
        cover: "📐",
        rating: 4.4,
        downloads: 620,
        size: "22.1 MB",
        format: "PDF"
    },
    {
        id: 6,
        title: "Woodwork Projects",
        author: "Mr. James Taylor",
        category: "industrial",
        subject: "Woodwork",
        description: "Step-by-step guide to woodwork projects and techniques",
        cover: "🔨",
        rating: 4.3,
        downloads: 450,
        size: "9.8 MB",
        format: "PDF"
    },
    {
        id: 7,
        title: "English Grammar Guide",
        author: "Mrs. Emily Anderson",
        category: "academic",
        subject: "English",
        description: "Complete guide to English grammar and composition",
        cover: "📝",
        rating: 4.9,
        downloads: 1580,
        size: "6.4 MB",
        format: "PDF"
    },
    {
        id: 8,
        title: "French Language Course",
        author: "M. Pierre Martin",
        category: "academic",
        subject: "French",
        description: "Comprehensive French language learning resource",
        cover: "🇫🇷",
        rating: 4.5,
        downloads: 890,
        size: "11.2 MB",
        format: "PDF"
    },
    {
        id: 9,
        title: "History of Cameroon",
        author: "Dr. Paul Nkwe",
        category: "academic",
        subject: "History",
        description: "Detailed history of Cameroon from pre-colonial to modern times",
        cover: "📚",
        rating: 4.6,
        downloads: 720,
        size: "7.9 MB",
        format: "PDF"
    },
    {
        id: 10,
        title: "Geography Textbook",
        author: "Dr. Lisa Chen",
        category: "academic",
        subject: "Geography",
        description: "Physical and human geography for students",
        cover: "🌍",
        rating: 4.4,
        downloads: 680,
        size: "14.3 MB",
        format: "PDF"
    },
    {
        id: 11,
        title: "Computer Science Basics",
        author: "Mr. David Kumar",
        category: "academic",
        subject: "Computer Science",
        description: "Introduction to computer science and programming",
        cover: "💻",
        rating: 4.7,
        downloads: 1350,
        size: "10.6 MB",
        format: "PDF"
    },
    {
        id: 12,
        title: "Business Studies",
        author: "Mrs. Rachel Green",
        category: "academic",
        subject: "Business Studies",
        description: "Complete business studies curriculum for students",
        cover: "💼",
        rating: 4.5,
        downloads: 820,
        size: "8.9 MB",
        format: "PDF"
    }
];

// Sample videos data
const videosData = [
    {
        id: 1,
        title: "Introduction to Algebra",
        subject: "Mathematics",
        category: "mathematics",
        duration: "45:30",
        thumbnail: "🎥",
        teacher: "Mr. John Smith",
        views: 2450,
        description: "Basic concepts of algebra for beginners",
        level: "Beginner"
    },
    {
        id: 2,
        title: "Chemical Reactions",
        subject: "Chemistry",
        category: "sciences",
        duration: "38:45",
        thumbnail: "🧪",
        teacher: "Dr. Robert Brown",
        views: 1890,
        description: "Understanding chemical reactions and equations",
        level: "Intermediate"
    },
    {
        id: 3,
        title: "Cell Biology",
        subject: "Biology",
        category: "sciences",
        duration: "52:20",
        thumbnail: "🧬",
        teacher: "Dr. Sarah Davis",
        views: 2100,
        description: "Detailed study of cell structure and function",
        level: "Intermediate"
    },
    {
        id: 4,
        title: "Mechanics and Motion",
        subject: "Physics",
        category: "sciences",
        duration: "41:15",
        thumbnail: "⚡",
        teacher: "Prof. Mary Johnson",
        views: 1780,
        description: "Fundamental concepts of mechanics and motion",
        level: "Intermediate"
    },
    {
        id: 5,
        title: "English Essay Writing",
        subject: "English",
        category: "languages",
        duration: "35:40",
        thumbnail: "📝",
        teacher: "Mrs. Emily Anderson",
        views: 3200,
        description: "Techniques for writing effective essays",
        level: "Beginner"
    },
    {
        id: 6,
        title: "French Conversation",
        subject: "French",
        category: "languages",
        duration: "28:30",
        thumbnail: "🇫🇷",
        teacher: "M. Pierre Martin",
        views: 1450,
        description: "Practice French conversation skills",
        level: "Beginner"
    },
    {
        id: 7,
        title: "Technical Drawing Demo",
        subject: "Technical Drawing",
        category: "industrial",
        duration: "55:10",
        thumbnail: "📐",
        teacher: "Eng. Michael Wilson",
        views: 980,
        description: "Practical demonstration of technical drawing techniques",
        level: "Advanced"
    },
    {
        id: 8,
        title: "Woodwork Project Tutorial",
        subject: "Woodwork",
        category: "industrial",
        duration: "48:25",
        thumbnail: "🔨",
        teacher: "Mr. James Taylor",
        views: 720,
        description: "Step-by-step woodwork project tutorial",
        level: "Intermediate"
    },
    {
        id: 9,
        title: "Calculus Introduction",
        subject: "Mathematics",
        category: "mathematics",
        duration: "42:50",
        thumbnail: "🎥",
        teacher: "Mr. John Smith",
        views: 1650,
        description: "Introduction to differential and integral calculus",
        level: "Advanced"
    },
    {
        id: 10,
        title: "Programming Basics",
        subject: "Computer Science",
        category: "sciences",
        duration: "36:20",
        thumbnail: "💻",
        teacher: "Mr. David Kumar",
        views: 2890,
        description: "Introduction to programming concepts",
        level: "Beginner"
    },
    {
        id: 11,
        title: "Metalwork Techniques",
        subject: "Metalwork",
        category: "industrial",
        duration: "51:15",
        thumbnail: "⚙️",
        teacher: "Mr. Peter Jones",
        views: 580,
        description: "Advanced metalwork techniques and safety",
        level: "Advanced"
    },
    {
        id: 12,
        title: "Geography Field Study",
        subject: "Geography",
        category: "sciences",
        duration: "44:30",
        thumbnail: "🌍",
        teacher: "Dr. Lisa Chen",
        views: 1120,
        description: "Field study techniques in geography",
        level: "Intermediate"
    }
];

// Featured resources data
const featuredResources = [
    {
        title: "GCE O/L Preparation Pack",
        type: "Bundle",
        description: "Complete preparation package for GCE O/L examinations",
        icon: "📦",
        items: 15,
        size: "125 MB",
        rating: 4.8
    },
    {
        title: "Industrial Arts Collection",
        type: "Collection",
        description: "Comprehensive collection of industrial arts resources",
        icon: "🔧",
        items: 8,
        size: "89 MB",
        rating: 4.6
    },
    {
        title: "Science Video Series",
        type: "Video Series",
        description: "Complete video series for all science subjects",
        icon: "🎬",
        items: 24,
        size: "2.1 GB",
        rating: 4.9
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateLibrary();
    populateVideos();
    populateFeatured();
    loadUserProgress();
    setupAnimations();
});

let currentFilter = 'all';
let currentVideoFilter = 'all';

function populateLibrary() {
    const grid = document.getElementById('libraryGrid');
    grid.innerHTML = '';
    
    const filteredBooks = currentFilter === 'all' ? booksData : 
        booksData.filter(book => book.category === currentFilter);
    
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'card';
        bookCard.innerHTML = `
            <div style="text-align: center; margin-bottom: 1rem;">
                <div style="font-size: 4rem; margin-bottom: 0.5rem;">${book.cover}</div>
                <h3 style="color: #1f2937; margin-bottom: 0.5rem; font-size: 1.1rem;">${book.title}</h3>
                <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 0.5rem;">by ${book.author}</p>
                <div style="display: flex; justify-content: center; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span style="color: #f59e0b;">⭐ ${book.rating}</span>
                    <span style="color: #6b7280; font-size: 0.8rem;">(${book.downloads} downloads)</span>
                </div>
                <span style="font-size: 0.8rem; color: #6b7280; background: #e5e7eb; padding: 0.2rem 0.5rem; border-radius: 4px;">
                    ${book.subject}
                </span>
            </div>
            
            <p style="color: #4b5563; font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.4;">
                ${book.description}
            </p>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="font-size: 0.8rem; color: #6b7280;">${book.size} • ${book.format}</span>
                <button onclick="readBook(${book.id})" class="btn btn-primary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
                    📖 Read Online
                </button>
            </div>
            
            <button onclick="downloadBook(${book.id})" class="btn btn-secondary" style="width: 100%; font-size: 0.8rem;">
                📥 Download Book
            </button>
        `;
        grid.appendChild(bookCard);
    });
}

function populateVideos() {
    const grid = document.getElementById('videoGrid');
    grid.innerHTML = '';
    
    const filteredVideos = currentVideoFilter === 'all' ? videosData : 
        videosData.filter(video => video.category === currentVideoFilter);
    
    filteredVideos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'card';
        videoCard.innerHTML = `
            <div style="position: relative; margin-bottom: 1rem;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 120px; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
                    <div style="font-size: 3rem; color: white;">${video.thumbnail}</div>
                </div>
                <div style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.8); color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">
                    ${video.duration}
                </div>
                <div style="position: absolute; top: 8px; left: 8px; background: rgba(0,0,0,0.8); color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">
                    ${video.level}
                </div>
            </div>
            
            <h3 style="color: #1f2937; margin-bottom: 0.5rem; font-size: 1.1rem;">${video.title}</h3>
            <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 0.5rem;">by ${video.teacher}</p>
            <p style="color: #4b5563; font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.4;">
                ${video.description}
            </p>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="font-size: 0.8rem; color: #6b7280;">👁️ ${video.views} views</span>
                <span style="font-size: 0.8rem; color: #6b7280;">${video.subject}</span>
            </div>
            
            <button onclick="playVideo(${video.id})" class="btn btn-primary" style="width: 100%;">
                ▶️ Watch Video
            </button>
        `;
        grid.appendChild(videoCard);
    });
}

function populateFeatured() {
    const grid = document.getElementById('featuredGrid');
    
    featuredResources.forEach(resource => {
        const resourceCard = document.createElement('div');
        resourceCard.className = 'card';
        resourceCard.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        resourceCard.style.color = 'white';
        resourceCard.innerHTML = `
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">${resource.icon}</div>
                <h3 style="margin-bottom: 0.5rem;">${resource.title}</h3>
                <span style="background: rgba(255,255,255,0.2); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">
                    ${resource.type}
                </span>
            </div>
            
            <p style="margin-bottom: 1rem; opacity: 0.9;">${resource.description}</p>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div>
                    <div style="font-size: 0.9rem; opacity: 0.8;">${resource.items} items</div>
                    <div style="font-size: 0.9rem; opacity: 0.8;">${resource.size}</div>
                </div>
                <div style="text-align: right;">
                    <div style="color: #fbbf24;">⭐ ${resource.rating}</div>
                </div>
            </div>
            
            <button onclick="downloadFeatured('${resource.title}')" class="btn" style="width: 100%; background: white; color: #667eea;">
                📦 Download Bundle
            </button>
        `;
        grid.appendChild(resourceCard);
    });
}

function filterBooks(category) {
    currentFilter = category;
    populateLibrary();
    
    // Update button styles
    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.toLowerCase().includes(category.toLowerCase()) || 
            (category === 'all' && btn.textContent === 'All Books')) {
            btn.className = 'btn btn-primary';
        } else if (btn.textContent.includes('Academic') || btn.textContent.includes('Fiction') || 
                   btn.textContent.includes('Reference') || btn.textContent.includes('Industrial')) {
            btn.className = 'btn';
        }
    });
}

function filterVideos(category) {
    currentVideoFilter = category;
    populateVideos();
    
    // Update button styles
    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.toLowerCase().includes(category.toLowerCase()) || 
            (category === 'all' && btn.textContent === 'All Videos')) {
            btn.className = 'btn btn-primary';
        } else if (btn.textContent.includes('Mathematics') || btn.textContent.includes('Sciences') || 
                   btn.textContent.includes('Languages') || btn.textContent.includes('Industrial')) {
            btn.className = 'btn';
        }
    });
}

function searchLibrary() {
    const searchTerm = document.getElementById('librarySearch').value.toLowerCase();
    const grid = document.getElementById('libraryGrid');
    grid.innerHTML = '';
    
    const searchResults = booksData.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.subject.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm)
    );
    
    if (searchResults.length === 0) {
        grid.innerHTML = '<div style="text-align: center; grid-column: 1/-1; padding: 2rem;"><p style="color: #6b7280;">No books found matching your search.</p></div>';
        return;
    }
    
    searchResults.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'card';
        bookCard.innerHTML = `
            <div style="text-align: center; margin-bottom: 1rem;">
                <div style="font-size: 4rem; margin-bottom: 0.5rem;">${book.cover}</div>
                <h3 style="color: #1f2937; margin-bottom: 0.5rem; font-size: 1.1rem;">${book.title}</h3>
                <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 0.5rem;">by ${book.author}</p>
                <div style="display: flex; justify-content: center; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span style="color: #f59e0b;">⭐ ${book.rating}</span>
                    <span style="color: #6b7280; font-size: 0.8rem;">(${book.downloads} downloads)</span>
                </div>
                <span style="font-size: 0.8rem; color: #6b7280; background: #e5e7eb; padding: 0.2rem 0.5rem; border-radius: 4px;">
                    ${book.subject}
                </span>
            </div>
            
            <p style="color: #4b5563; font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.4;">
                ${book.description}
            </p>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="font-size: 0.8rem; color: #6b7280;">${book.size} • ${book.format}</span>
                <button onclick="readBook(${book.id})" class="btn btn-primary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
                    📖 Read Online
                </button>
            </div>
            
            <button onclick="downloadBook(${book.id})" class="btn btn-secondary" style="width: 100%; font-size: 0.8rem;">
                📥 Download Book
            </button>
        `;
        grid.appendChild(bookCard);
    });
}

function readBook(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    // Update reading progress
    let progress = JSON.parse(localStorage.getItem('readingProgress')) || {};
    progress.booksRead = (progress.booksRead || 0) + 1;
    progress.studyHours = (progress.studyHours || 0) + 1;
    localStorage.setItem('readingProgress', JSON.stringify(progress));
    loadUserProgress();
    
    // Show reading modal
    const readingModal = document.createElement('div');
    readingModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    readingModal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto; position: relative;">
            <button onclick="closeReadingModal()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; cursor: pointer;">×</button>
            <h2 style="color: #1e40af; margin-bottom: 1rem;">📖 ${book.title}</h2>
            <p style="color: #6b7280; margin-bottom: 2rem;">by ${book.author}</p>
            
            <div style="line-height: 1.8; color: #1f2937;">
                <h3 style="color: #1e40af; margin-bottom: 1rem;">Chapter 1: Introduction</h3>
                <p style="margin-bottom: 1rem;">
                    Welcome to ${book.title}. This comprehensive resource is designed to help students 
                    master the fundamental concepts and advanced topics in ${book.subject}. 
                    Whether you're preparing for examinations or seeking to deepen your understanding, 
                    this book provides the knowledge and practice you need.
                </p>
                
                <h3 style="color: #1e40af; margin-bottom: 1rem;">Chapter 2: Basic Concepts</h3>
                <p style="margin-bottom: 1rem;">
                    In this chapter, we explore the foundational concepts that form the basis of ${book.subject}. 
                    Understanding these basics is crucial for building a strong foundation and tackling more 
                    complex topics later in the book.
                </p>
                
                <h3 style="color: #1e40af; margin-bottom: 1rem;">Chapter 3: Practical Applications</h3>
                <p style="margin-bottom: 1rem;">
                    Theory meets practice in this chapter where we examine real-world applications of the 
                    concepts learned. Through examples and exercises, students will see how ${book.subject} 
                    applies to everyday situations and professional contexts.
                </p>
                
                <h3 style="color: #1e40af; margin-bottom: 1rem;">Chapter 4: Advanced Topics</h3>
                <p style="margin-bottom: 1rem;">
                    For students seeking to challenge themselves, this chapter covers advanced topics and 
                    cutting-edge developments in ${book.subject}. These topics are essential for those 
                    pursuing higher education or professional careers in related fields.
                </p>
                
                <p style="margin-top: 2rem; text-align: center; color: #6b7280; font-style: italic;">
                    This is a preview of the book. Download the full version to access all chapters and exercises.
                </p>
            </div>
            
            <div style="margin-top: 2rem; text-align: center;">
                <button onclick="downloadBook(${book.id})" class="btn btn-primary">
                    📥 Download Full Book
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(readingModal);
    
    window.closeReadingModal = function() {
        document.body.removeChild(readingModal);
    };
}

function downloadBook(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    // Create a sample book content
    const bookContent = `
CHRIST THE KING SCHOOL DIGITAL LIBRARY
=====================================

Title: ${book.title}
Author: ${book.author}
Subject: ${book.subject}
Format: ${book.format}
Size: ${book.size}
Rating: ${book.rating} stars
Downloads: ${book.downloads}

${book.title.toUpperCase()}
==================

${book.description}

TABLE OF CONTENTS
=================

Chapter 1: Introduction to ${book.subject}
Chapter 2: Fundamental Concepts
Chapter 3: Practical Applications
Chapter 4: Advanced Topics
Chapter 5: Problem Solving Techniques
Chapter 6: Examination Preparation
Chapter 7: Case Studies
Chapter 8: Summary and Review

CHAPTER 1: INTRODUCTION
======================

Welcome to the study of ${book.subject}. This chapter provides an overview of the subject
and its importance in modern education and professional development.

Key Learning Objectives:
- Understand the scope and importance of ${book.subject}
- Identify key concepts and terminology
- Recognize practical applications in daily life
- Develop a foundation for advanced study

[Full content would continue here with detailed explanations, examples, exercises, and practice problems...]

COPYRIGHT NOTICE
===============

This digital book is provided for educational purposes to students of Christ the King School.
Unauthorized distribution or commercial use is prohibited.

© 2024 Christ the King School - Excellence in Education
Generated: ${new Date().toLocaleDateString()}
`;
    
    const blob = new Blob([bookContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${book.title.replace(/\s+/g, '_')}.${book.format.toLowerCase()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(`📥 "${book.title}" downloaded successfully!`);
}

function playVideo(videoId) {
    const video = videosData.find(v => v.id === videoId);
    if (!video) return;
    
    // Update video watching progress
    let progress = JSON.parse(localStorage.getItem('readingProgress')) || {};
    progress.videosWatched = (progress.videosWatched || 0) + 1;
    progress.studyHours = (progress.studyHours || 0) + 0.75;
    localStorage.setItem('readingProgress', JSON.stringify(progress));
    loadUserProgress();
    
    // Get tutorial video URL based on subject
    const tutorialVideoUrl = getTutorialVideoUrl(video.subject);
    
    // Create educational tutorial content for each subject
    const tutorialContent = getSubjectTutorialContent(video.subject);
    
    // Create tutorial modal with educational content
    const videoModal = document.createElement('div');
    videoModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    videoModal.innerHTML = `
        <div style="background: white; padding: 1.5rem; border-radius: 12px; max-width: 700px; width: 90%; position: relative; max-height: 90vh; overflow-y: auto;">
            <button onclick="closeVideoModal()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #6b7280;">×</button>
            <h2 style="color: #1e40af; margin-bottom: 0.5rem; font-size: 1.3rem;">🎥 ${video.title}</h2>
            <p style="color: #6b7280; margin-bottom: 1rem; font-size: 0.9rem;">by ${video.teacher} • ${video.duration} • ${video.level}</p>
            
            <div style="margin-bottom: 1rem;">
                <video width="100%" height="315" controls autoplay muted style="border-radius: 8px; background: #000;">
                    <source src="${tutorialVideoUrl}" type="video/mp4">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                </video>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #1e40af;">
                    <h3 style="color: #1e40af; margin-bottom: 1rem; font-size: 1.2rem;">📚 ${video.subject} Tutorial</h3>
                    ${tutorialContent}
                </div>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <h3 style="color: #1f2937; margin-bottom: 0.5rem; font-size: 1.1rem;">� Tutorial Summary</h3>
                <p style="color: #4b5563; line-height: 1.5; font-size: 0.9rem;">${video.description}</p>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div>
                    <span style="color: #6b7280; font-size: 0.8rem;">👁️ ${video.views} views</span>
                </div>
                <div>
                    <span style="background: #e5e7eb; padding: 0.2rem 0.6rem; border-radius: 15px; font-size: 0.8rem;">
                        ${video.subject}
                    </span>
                </div>
            </div>
            
            <div style="display: flex; gap: 0.5rem;">
                <button onclick="downloadVideo(${video.id})" class="btn btn-secondary" style="flex: 1; font-size: 0.9rem; padding: 0.5rem;">
                    📥 Download Notes
                </button>
                <button onclick="closeVideoModal()" class="btn btn-primary" style="flex: 1; font-size: 0.9rem; padding: 0.5rem;">
                    Close Tutorial
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(videoModal);
    
    window.closeVideoModal = function() {
        document.body.removeChild(videoModal);
    };
}

function getTutorialVideoUrl(subject) {
    // Use working video sources that are guaranteed to work
    const tutorialVideos = {
        'Mathematics': 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        'Chemistry': 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        'Biology': 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'Physics': 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        'English': 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        'French': 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        'Technical Drawing': 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        'Woodwork': 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        'Computer Science': 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        'Metalwork': 'https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        'Geography': 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouBuy.mp4',
        'Calculus': 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    };
    
    return tutorialVideos[subject] || tutorialVideos['Mathematics'];
}

function getSubjectTutorialContent(subject) {
    const tutorials = {
        'Mathematics': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #1e40af; margin-bottom: 0.5rem;">🔢 Algebra Fundamentals</h4>
                <p style="margin-bottom: 1rem;">Welcome to your Mathematics tutorial! Today we'll learn about algebraic expressions and equations.</p>
                
                <h5 style="color: #1e40af; margin-bottom: 0.5rem;">📖 Key Concepts:</h5>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Variables:</strong> Letters representing unknown values (x, y, z)</li>
                    <li><strong>Constants:</strong> Fixed numbers in equations</li>
                    <li><strong>Coefficients:</strong> Numbers multiplying variables</li>
                    <li><strong>Expressions:</strong> Mathematical phrases with variables</li>
                </ul>
                
                <h5 style="color: #1e40af; margin-bottom: 0.5rem;">✏️ Example Problem:</h5>
                <div style="background: #e5e7eb; padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
                    <p><strong>Solve for x:</strong> 3x + 5 = 20</p>
                    <p><strong>Step 1:</strong> Subtract 5 from both sides: 3x = 15</p>
                    <p><strong>Step 2:</strong> Divide by 3: x = 5</p>
                    <p><strong>Answer:</strong> x = 5</p>
                </div>
                
                <h5 style="color: #1e40af; margin-bottom: 0.5rem;">🎯 Practice Exercise:</h5>
                <p style="margin-bottom: 0.5rem;">Try solving: 2x - 7 = 13</p>
                <p style="font-size: 0.9rem; color: #6b7280;">Hint: Add 7 to both sides first!</p>
            </div>
        `,
        'Chemistry': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #dc2626; margin-bottom: 0.5rem;">🧪 Chemical Reactions</h4>
                <p style="margin-bottom: 1rem;">Explore the fascinating world of chemical reactions and how substances transform!</p>
                
                <h5 style="color: #dc2626; margin-bottom: 0.5rem;">📖 Reaction Types:</h5>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Synthesis:</strong> A + B → AB (two substances combine)</li>
                    <li><strong>Decomposition:</strong> AB → A + B (compound breaks down)</li>
                    <li><strong>Single Replacement:</strong> A + BC → AC + B</li>
                    <li><strong>Double Replacement:</strong> AB + CD → AD + CB</li>
                </ul>
                
                <h5 style="color: #dc2626; margin-bottom: 0.5rem;">⚗️ Example Reaction:</h5>
                <div style="background: #fef2f2; padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
                    <p><strong>Combustion of Methane:</strong></p>
                    <p>CH₄ + 2O₂ → CO₂ + 2H₂O</p>
                    <p style="font-size: 0.9rem;">Methane reacts with oxygen to produce carbon dioxide and water</p>
                </div>
                
                <h5 style="color: #dc2626; margin-bottom: 0.5rem;">🔬 Safety Tips:</h5>
                <p style="margin-bottom: 0.5rem;">Always wear safety goggles and work in a well-ventilated area!</p>
            </div>
        `,
        'Chemistry': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #dc2626; margin-bottom: 0.5rem;">🧪 Chemical Reactions</h4>
                <p style="margin-bottom: 1rem;">Explore the fascinating world of chemical reactions!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Synthesis:</strong> A + B → AB</li>
                    <li><strong>Decomposition:</strong> AB → A + B</li>
                    <li><strong>Single Replacement:</strong> A + BC → AC + B</li>
                </ul>
                <div style="background: #fef2f2; padding: 1rem; border-radius: 6px;">
                    <p><strong>Example:</strong> CH₄ + 2O₂ → CO₂ + 2H₂O</p>
                </div>
            </div>
        `,
        'Biology': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #10b981; margin-bottom: 0.5rem;">🧬 Cell Biology</h4>
                <p style="margin-bottom: 1rem;">Discover the building blocks of life!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Cell Membrane:</strong> Controls entry/exit</li>
                    <li><strong>Nucleus:</strong> Contains DNA</li>
                    <li><strong>Mitochondria:</strong> Energy production</li>
                </ul>
                <div style="background: #f0fdf4; padding: 1rem; border-radius: 6px;">
                    <p><strong>Plant vs Animal Cells:</strong> Plants have cell walls and chloroplasts</p>
                </div>
            </div>
        `,
        'Physics': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #f59e0b; margin-bottom: 0.5rem;">⚡ Motion and Forces</h4>
                <p style="margin-bottom: 1rem;">Understand how objects move!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Speed:</strong> Distance ÷ Time</li>
                    <li><strong>Force:</strong> F = ma</li>
                    <li><strong>Weight:</strong> Mass × 9.8 m/s²</li>
                </ul>
                <div style="background: #fef3c7; padding: 1rem; border-radius: 6px;">
                    <p><strong>Example:</strong> 2kg object at 3 m/s² = 6 Newtons</p>
                </div>
            </div>
        `,
        'English': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #3b82f6; margin-bottom: 0.5rem;">📝 Essay Writing</h4>
                <p style="margin-bottom: 1rem;">Master essay writing skills!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Introduction:</strong> Hook and thesis</li>
                    <li><strong>Body:</strong> 3-5 paragraphs with evidence</li>
                    <li><strong>Conclusion:</strong> Summarize and final thought</li>
                </ul>
                <div style="background: #eff6ff; padding: 1rem; border-radius: 6px;">
                    <p><strong>Tip:</strong> Use transition words for flow</p>
                </div>
            </div>
        `,
        'French': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #dc2626; margin-bottom: 0.5rem;">🇫🇷 Basic French</h4>
                <p style="margin-bottom: 1rem;">Learn essential French phrases!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Bonjour:</strong> Hello</li>
                    <li><strong>Merci:</strong> Thank you</li>
                    <li><strong>Au revoir:</strong> Goodbye</li>
                </ul>
                <div style="background: #fef2f2; padding: 1rem; border-radius: 6px;">
                    <p><strong>Dialogue:</strong> Bonjour, comment allez-vous?</p>
                </div>
            </div>
        `,
        'Technical Drawing': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #8b5cf6; margin-bottom: 0.5rem;">📐 Technical Drawing</h4>
                <p style="margin-bottom: 1rem;">Learn precise drawing techniques!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>T-Square:</strong> Horizontal lines</li>
                    <li><strong>Compass:</strong> Circles and arcs</li>
                    <li><strong>Protractor:</strong> Angle measurement</li>
                </ul>
                <div style="background: #f3e8ff; padding: 1rem; border-radius: 6px;">
                    <p><strong>Practice:</strong> Draw a 3cm × 4cm rectangle</p>
                </div>
            </div>
        `,
        'Woodwork': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #f59e0b; margin-bottom: 0.5rem;">🔨 Woodworking</h4>
                <p style="margin-bottom: 1rem;">Master woodworking skills!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Hammer:</strong> Driving nails</li>
                    <li><strong>Saw:</strong> Cutting wood</li>
                    <li><strong>Chisel:</strong> Shaping wood</li>
                </ul>
                <div style="background: #fef3c7; padding: 1rem; border-radius: 6px;">
                    <p><strong>Safety:</strong> Always wear goggles!</p>
                </div>
            </div>
        `,
        'Computer Science': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #06b6d4; margin-bottom: 0.5rem;">💻 Programming</h4>
                <p style="margin-bottom: 1rem;">Start coding journey!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Variables:</strong> Data storage</li>
                    <li><strong>Loops:</strong> Repeating actions</li>
                    <li><strong>Conditions:</strong> Making decisions</li>
                </ul>
                <div style="background: #ecfeff; padding: 1rem; border-radius: 6px; font-family: monospace;">
                    <p>area = length * width</p>
                </div>
            </div>
        `,
        'Metalwork': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #64748b; margin-bottom: 0.5rem;">⚙️ Metalworking</h4>
                <p style="margin-bottom: 1rem;">Learn metalworking techniques!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Hammer:</strong> Ball peen hammer</li>
                    <li><strong>Vise:</strong> Holding metal</li>
                    <li><strong>Files:</strong> Smoothing surfaces</li>
                </ul>
                <div style="background: #f8fafc; padding: 1rem; border-radius: 6px;">
                    <p><strong>Metals:</strong> Steel, aluminum, copper</p>
                </div>
            </div>
        `,
        'Geography': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #10b981; margin-bottom: 0.5rem;">🌍 Geography</h4>
                <p style="margin-bottom: 1rem;">Explore the world!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Maps:</strong> Topographic and street maps</li>
                    <li><strong>Compass:</strong> Navigation</li>
                    <li><strong>Camera:</strong> Documentation</li>
                </ul>
                <div style="background: #f0fdf4; padding: 1rem; border-radius: 6px;">
                    <p><strong>Method:</strong> Observe, measure, sketch</p>
                </div>
            </div>
        `,
        'Calculus': `
            <div style="color: #4b5563; line-height: 1.6;">
                <h4 style="color: #1e40af; margin-bottom: 0.5rem;">📈 Calculus</h4>
                <p style="margin-bottom: 1rem;">Mathematics of change!</p>
                <ul style="margin-bottom: 1rem;">
                    <li><strong>Limits:</strong> Behavior approaching values</li>
                    <li><strong>Derivatives:</strong> Rate of change</li>
                    <li><strong>Integrals:</strong> Area under curves</li>
                </ul>
                <div style="background: #eff6ff; padding: 1rem; border-radius: 6px;">
                    <p><strong>Formula:</strong> d/dx(x²) = 2x</p>
                </div>
            </div>
        `
    };
    
    return tutorials[subject] || tutorials['Mathematics'];
}

function getLessonContent(subject) {
    const lessons = {
        'Mathematics': `
            <div style="max-width: 800px; margin: 0 auto;">
                <h2 style="color: #1e40af; margin-bottom: 2rem;">🔢 Introduction to Algebra</h2>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">Lesson Objectives</h3>
                    <ul style="color: #4b5563; line-height: 1.6;">
                        <li>Understand basic algebraic concepts</li>
                        <li>Solve linear equations</li>
                        <li>Apply algebra to real-world problems</li>
                        <li>Prepare for GCE O/L examinations</li>
                    </ul>
                </div>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">What is Algebra?</h3>
                    <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">Algebra is a branch of mathematics that uses symbols and letters to represent numbers and quantities in formulas and equations.</p>
                    
                    <div style="background: #e5e7eb; padding: 1rem; border-radius: 8px; text-align: center; font-weight: bold; font-size: 1.2rem; margin: 1rem 0;">
                        x + 5 = 10
                    </div>
                    
                    <p style="color: #4b5563; line-height: 1.6;">In this equation, 'x' represents an unknown value that we need to find.</p>
                </div>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">Solving Linear Equations</h3>
                    <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">To solve linear equations, we need to isolate the variable on one side of the equation.</p>
                    
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <h4 style="color: #1e40af; margin-bottom: 0.5rem;">Example 1:</h4>
                        <div style="background: #e5e7eb; padding: 1rem; border-radius: 8px; text-align: center; font-weight: bold; margin: 0.5rem 0;">
                            x + 5 = 10
                        </div>
                        <p style="color: #4b5563; margin: 0.5rem 0;">Step 1: Subtract 5 from both sides</p>
                        <div style="background: #e5e7eb; padding: 1rem; border-radius: 8px; text-align: center; font-weight: bold; margin: 0.5rem 0;">
                            x = 10 - 5
                        </div>
                        <p style="color: #4b5563; margin: 0.5rem 0;">Step 2: Simplify</p>
                        <div style="background: #e5e7eb; padding: 1rem; border-radius: 8px; text-align: center; font-weight: bold; margin: 0.5rem 0;">
                            x = 5
                        </div>
                    </div>
                </div>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">Practice Problems</h3>
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px;">
                        <p style="color: #4b5563; margin-bottom: 1rem;"><strong>Try these:</strong></p>
                        <p style="color: #4b5563;">1. x + 8 = 15</p>
                        <p style="color: #4b5563;">2. 3x - 4 = 11</p>
                        <p style="color: #4b5563;">3. 5x + 2 = 17</p>
                        <p style="color: #4b5563;">4. 2x + 7 = 19</p>
                    </div>
                    
                    <p style="color: #4b5563; margin-top: 1rem;"><strong>Solutions:</strong></p>
                    <p style="color: #4b5563;">1. x = 7 | 2. x = 5 | 3. x = 3 | 4. x = 6</p>
                </div>
            </div>
        `,
        'Chemistry': `
            <div style="max-width: 800px; margin: 0 auto;">
                <h2 style="color: #dc2626; margin-bottom: 2rem;">🧪 Chemical Reactions</h2>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">Lesson Objectives</h3>
                    <ul style="color: #4b5563; line-height: 1.6;">
                        <li>Understand what chemical reactions are</li>
                        <li>Identify types of chemical reactions</li>
                        <li>Balance chemical equations</li>
                        <li>Recognize reaction indicators</li>
                    </ul>
                </div>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">What is a Chemical Reaction?</h3>
                    <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">A chemical reaction is a process that leads to the transformation of one set of chemical substances to another.</p>
                    
                    <div style="background: #fef2f2; padding: 1rem; border-radius: 8px; text-align: center; font-weight: bold; font-size: 1.2rem; margin: 1rem 0;">
                        Reactants → Products
                    </div>
                    
                    <p style="color: #4b5563; line-height: 1.6;">During a chemical reaction, bonds between atoms are broken and new bonds are formed, creating new substances.</p>
                </div>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">Types of Chemical Reactions</h3>
                    
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                        <h4 style="color: #1e40af; margin-bottom: 0.5rem;">1. Synthesis (Combination)</h4>
                        <div style="background: #e5e7eb; padding: 1rem; border-radius: 8px; text-align: center; font-weight: bold; margin: 0.5rem 0;">
                            A + B → AB
                        </div>
                        <p style="color: #4b5563;">Example: 2H₂ + O₂ → 2H₂O</p>
                    </div>
                    
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px;">
                        <h4 style="color: #1e40af; margin-bottom: 0.5rem;">2. Decomposition</h4>
                        <div style="background: #e5e7eb; padding: 1rem; border-radius: 8px; text-align: center; font-weight: bold; margin: 0.5rem 0;">
                            AB → A + B
                        </div>
                        <p style="color: #4b5563;">Example: 2H₂O → 2H₂ + O₂</p>
                    </div>
                </div>
            </div>
        `,
        'Biology': `
            <div style="max-width: 800px; margin: 0 auto;">
                <h2 style="color: #10b981; margin-bottom: 2rem;">🧬 Cell Biology</h2>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">Lesson Objectives</h3>
                    <ul style="color: #4b5563; line-height: 1.6;">
                        <li>Understand cell structure and function</li>
                        <li>Identify different types of cells</li>
                        <li>Learn about cell organelles</li>
                        <li>Understand cell division processes</li>
                    </ul>
                </div>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">What is a Cell?</h3>
                    <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">A cell is the basic structural and functional unit of all living organisms.</p>
                    
                    <div style="background: #f0fdf4; padding: 1rem; border-radius: 8px; text-align: center; font-weight: bold; font-size: 1.2rem; margin: 1rem 0;">
                        🧬 CELL<br>Basic Unit of Life
                    </div>
                    
                    <p style="color: #4b5563; line-height: 1.6;">Key characteristics: surrounded by cell membrane, contains genetic material, carries out life processes, can reproduce.</p>
                </div>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1f2937; margin-bottom: 1rem;">Types of Cells</h3>
                    
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                        <h4 style="color: #1e40af; margin-bottom: 0.5rem;">Prokaryotic Cells</h4>
                        <p style="color: #4b5563;">No nucleus, simple structure, bacteria and archaea, usually smaller</p>
                    </div>
                    
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px;">
                        <h4 style="color: #1e40af; margin-bottom: 0.5rem;">Eukaryotic Cells</h4>
                        <p style="color: #4b5563;">Have nucleus, complex structure, plants, animals, fungi, protists, usually larger</p>
                    </div>
                </div>
            </div>
        `
    };
    
    return lessons[subject] || lessons['Mathematics'];
}

function initCanvasAnimation(video) {
    const canvas = document.getElementById('videoCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let isPlaying = false;
    let currentTime = 0;
    let duration = parseDuration(video.duration);
    
    window.togglePlayPause = function() {
        isPlaying = !isPlaying;
        const btn = document.getElementById('playPauseBtn');
        btn.textContent = isPlaying ? '⏸️ Pause' : '▶️ Play';
        
        if (isPlaying) {
            animate();
        }
    };
    
    window.toggleFullscreen = function() {
        if (!document.fullscreenElement) {
            canvas.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };
    
    function animate() {
        if (!isPlaying) return;
        
        // Clear canvas
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Create animated content based on subject
        drawSubjectContent(ctx, video.subject, currentTime);
        
        // Update progress
        currentTime += 0.016; // ~60fps
        if (currentTime > duration) currentTime = 0;
        
        const progress = (currentTime / duration) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
        document.getElementById('timeDisplay').textContent = formatTime(currentTime) + ' / ' + video.duration;
        
        window.animationId = requestAnimationFrame(animate);
    }
    
    // Start with a static frame
    drawSubjectContent(ctx, video.subject, 0);
}

function drawSubjectContent(ctx, subject, time) {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
    gradient.addColorStop(0, '#1e40af');
    gradient.addColorStop(1, '#3b82f6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Subject-specific animations
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(subject, centerX, centerY - 50);
    
    ctx.font = '24px Arial';
    ctx.fillText('Video Lesson Playing', centerX, centerY);
    
    // Animated elements
    const animOffset = time * 100;
    for (let i = 0; i < 5; i++) {
        const x = (animOffset + i * 150) % (ctx.canvas.width + 100) - 50;
        const y = centerY + 80 + Math.sin(time + i) * 20;
        
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${i * 60}, 70%, 60%, 0.8)`;
        ctx.fill();
    }
    
    // Progress indicator
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.fillText('▶️ Playing Educational Content', centerX, centerY + 120);
}

function parseDuration(duration) {
    // Convert "45:30" format to seconds
    const parts = duration.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function downloadVideo(videoId) {
    const video = videosData.find(v => v.id === videoId);
    if (!video) return;
    
    alert(`📥 "${video.title}" download started! File size: ~${Math.floor(parseInt(video.duration) * 2)}MB`);
}

function downloadFeatured(title) {
    alert(`📦 "${title}" bundle download started! This includes all related materials.`);
}

function loadUserProgress() {
    const progress = JSON.parse(localStorage.getItem('readingProgress')) || {};
    
    document.getElementById('booksRead').textContent = progress.booksRead || 0;
    document.getElementById('videosWatched').textContent = progress.videosWatched || 0;
    document.getElementById('studyHours').textContent = progress.studyHours || 0;
    document.getElementById('achievements').textContent = progress.achievements || 0;
}

function showProgressDetails() {
    const progress = JSON.parse(localStorage.getItem('readingProgress')) || {};
    
    const progressModal = document.createElement('div');
    progressModal.style.cssText = `
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
    
    progressModal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 500px; width: 90%; position: relative;">
            <button onclick="closeProgressModal()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; cursor: pointer;">×</button>
            <h2 style="color: #1e40af; margin-bottom: 1.5rem;">📊 Your Learning Progress</h2>
            
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">Statistics</h3>
                <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                    <p style="margin-bottom: 0.5rem;">📚 Books Read: <strong>${progress.booksRead || 0}</strong></p>
                    <p style="margin-bottom: 0.5rem;">🎥 Videos Watched: <strong>${progress.videosWatched || 0}</strong></p>
                    <p style="margin-bottom: 0.5rem;">⏰ Study Hours: <strong>${progress.studyHours || 0}</strong></p>
                    <p style="margin-bottom: 0;">🏆 Achievements: <strong>${progress.achievements || 0}</strong></p>
                </div>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: #1f2937; margin-bottom: 1rem;">Recent Activity</h3>
                <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                    <p style="color: #6b7280; font-style: italic;">Keep learning to unlock more achievements!</p>
                </div>
            </div>
            
            <button onclick="closeProgressModal()" class="btn btn-primary" style="width: 100%;">Close</button>
        </div>
    `;
    
    document.body.appendChild(progressModal);
    
    window.closeProgressModal = function() {
        document.body.removeChild(progressModal);
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
