// Course data
const courses = {
    1: {
        title: "Web Development Fundamentals",
        description: "Learn HTML, CSS, and JavaScript to build modern websites. This comprehensive course covers everything from basic markup to advanced JavaScript concepts.",
        price: "$49.99",
        duration: "12 weeks",
        completionTime: "3-4 months",
        image: "images/web-dev.jpg"
    },
    2: {
        title: "Digital Marketing Mastery",
        description: "Master SEO, social media, and content marketing strategies. Learn how to create and execute successful digital marketing campaigns.",
        price: "$59.99",
        duration: "8 weeks",
        completionTime: "2-3 months",
        image: "images/digital-marketing.jpg"
    },
    3: {
        title: "Data Science Essentials",
        description: "Learn data analysis, visualization, and machine learning. Master Python, pandas, and scikit-learn for data science.",
        price: "$69.99",
        duration: "16 weeks",
        completionTime: "4-5 months",
        image: "images/data-science.jpg"
    },
    4: {
        title: "AI & Machine Learning",
        description: "Deep dive into artificial intelligence and machine learning algorithms. Learn TensorFlow, PyTorch, and deep learning concepts.",
        price: "$79.99",
        duration: "20 weeks",
        completionTime: "5-6 months",
        image: "images/ai-ml.jpg"
    },
    5: {
        title: "Social Media Marketing",
        description: "Create effective social media strategies and campaigns. Learn to manage and grow social media presence across platforms.",
        price: "$54.99",
        duration: "6 weeks",
        completionTime: "1-2 months",
        image: "images/social-media.jpg"
    },
    6: {
        title: "Cyber Security Fundamentals",
        description: "Learn network security, ethical hacking, and security best practices. Master the tools and techniques for cybersecurity.",
        price: "$74.99",
        duration: "14 weeks",
        completionTime: "3-4 months",
        image: "images/cyber-security.jpg"
    },
    7: {
        title: "Mobile App Development",
        description: "Build iOS and Android apps using React Native. Learn cross-platform mobile development from scratch.",
        price: "$64.99",
        duration: "10 weeks",
        completionTime: "2-3 months",
        image: "images/mobile-dev.jpg"
    },
    8: {
        title: "SEO Mastery Course",
        description: "Master search engine optimization techniques and strategies. Learn to improve website rankings and drive organic traffic.",
        price: "$49.99",
        duration: "6 weeks",
        completionTime: "1-2 months",
        image: "images/seo.jpg"
    },
    9: {
        title: "Cloud Computing",
        description: "Learn AWS, Azure, and Google Cloud platforms. Master cloud architecture and deployment strategies.",
        price: "$69.99",
        duration: "12 weeks",
        completionTime: "3-4 months",
        image: "images/cloud-computing.jpg"
    },
    10: {
        title: "Content Marketing Strategy",
        description: "Create engaging content and effective marketing strategies. Learn content planning, creation, and distribution.",
        price: "$54.99",
        duration: "8 weeks",
        completionTime: "2-3 months",
        image: "images/content-marketing.jpg"
    },
    11: {
        title: "Blockchain Development",
        description: "Learn blockchain technology and smart contract development. Master Ethereum, Solidity, and Web3.",
        price: "$79.99",
        duration: "16 weeks",
        completionTime: "4-5 months",
        image: "images/blockchain.jpg"
    },
    12: {
        title: "UI/UX Design",
        description: "Master user interface and user experience design principles. Learn design thinking and prototyping tools.",
        price: "$64.99",
        duration: "10 weeks",
        completionTime: "2-3 months",
        image: "images/ui-ux.jpg"
    }
};

// Course enrollment functionality
function enrollCourse(courseId) {
    const course = courses[courseId];
    
    // Update modal content
    document.getElementById('modal-course-image').src = course.image;
    document.getElementById('modal-course-image').alt = course.title;
    document.getElementById('modal-course-title').textContent = course.title;
    document.getElementById('modal-course-description').textContent = course.description;
    document.getElementById('modal-course-duration').textContent = course.duration;
    document.getElementById('modal-completion-time').textContent = course.completionTime;
    document.getElementById('modal-course-price').textContent = course.price;
    
    // Show modal
    const enrollmentModal = new bootstrap.Modal(document.getElementById('enrollmentModal'));
    enrollmentModal.show();
}

// Handle payment form submission
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // In a real application, this would process the payment
    // For demo purposes, we'll just show a success message
    const modal = bootstrap.Modal.getInstance(document.getElementById('enrollmentModal'));
    modal.hide();
    
    showNotification('Payment successful! You are now enrolled in the course.');
});

// Add input validation for payment form
document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.querySelector('input[placeholder="1234 5678 9012 3456"]');
    const expiryInput = document.querySelector('input[placeholder="MM/YY"]');
    const cvvInput = document.querySelector('input[placeholder="123"]');

    // Card number formatting
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})/g, '$1 ').trim();
        e.target.value = value.substring(0, 19);
    });

    // Expiry date formatting
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        }
        e.target.value = value.substring(0, 5);
    });

    // CVV formatting
    cvvInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value.substring(0, 3);
    });
});

// Contact form handling
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // In a real application, this would send the data to a server
    console.log('Form submitted:', {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });
    
    // Show success message
    showNotification('Thank you for your message! We will get back to you soon.');
    form.reset();
}

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: '#28a745',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        zIndex: '1000',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });
    
    // Add to document
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to navigation items based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// Quiz functionality
const quizQuestions = [
    {
        question: "What is your primary goal for learning?",
        options: [
            "Build websites and web applications",
            "Create data analysis solutions",
            "Develop software applications",
            "Learn programming basics"
        ]
    },
    {
        question: "What is your current programming experience level?",
        options: [
            "Complete beginner",
            "Some basic knowledge",
            "Intermediate",
            "Advanced"
        ]
    },
    {
        question: "How much time can you dedicate to learning per week?",
        options: [
            "Less than 5 hours",
            "5-10 hours",
            "10-20 hours",
            "More than 20 hours"
        ]
    },
    {
        question: "What type of projects interest you the most?",
        options: [
            "Web development projects",
            "Data analysis and visualization",
            "Mobile applications",
            "Machine learning projects"
        ]
    },
    {
        question: "What is your preferred learning style?",
        options: [
            "Video tutorials",
            "Interactive coding exercises",
            "Reading documentation",
            "Project-based learning"
        ]
    },
    {
        question: "Which industry are you interested in?",
        options: [
            "Technology and Software",
            "Finance and Banking",
            "Healthcare",
            "Education"
        ]
    },
    {
        question: "What is your career goal?",
        options: [
            "Become a web developer",
            "Work as a data scientist",
            "Software engineering",
            "IT consultant"
        ]
    },
    {
        question: "Which technology stack interests you most?",
        options: [
            "HTML, CSS, JavaScript",
            "Python, R, SQL",
            "Java, C++, C#",
            "React, Node.js, MongoDB"
        ]
    },
    {
        question: "What is your preferred project size?",
        options: [
            "Small, quick projects",
            "Medium-sized applications",
            "Large enterprise systems",
            "Data analysis projects"
        ]
    },
    {
        question: "What is your learning budget?",
        options: [
            "Under $50",
            "$50-$100",
            "$100-$200",
            "Over $200"
        ]
    }
];

let currentQuestion = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById('start-quiz').style.display = 'none';
    document.getElementById('quiz-questions').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    updateProgress();
}

function selectOption(optionIndex) {
    userAnswers[currentQuestion] = optionIndex;
    
    // Remove selected class from all options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to chosen option
    document.querySelectorAll('.option-btn')[optionIndex].classList.add('selected');
    
    // Move to next question after a short delay
    setTimeout(() => {
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            showResults();
        }
    }, 500);
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
}

function showResults() {
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    // Analyze answers and recommend courses
    const results = analyzeQuizResults();
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = `
        <div class="alert alert-success">
            <h4>Based on your responses, we recommend:</h4>
            <ul class="list-unstyled">
                ${results.map(course => `
                    <li class="mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${course.title}</h5>
                                <p class="card-text">${course.description}</p>
                                <p class="text-success font-weight-bold">$${course.price}</p>
                                <button class="btn btn-primary" onclick="enrollCourse('${course.id}')">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function analyzeQuizResults() {
    // Simple analysis based on user answers
    const webDevScore = userAnswers.filter(answer => answer === 0).length;
    const dataScore = userAnswers.filter(answer => answer === 1).length;
    const programmingScore = userAnswers.filter(answer => answer === 2).length;

    const recommendations = [];
    
    if (webDevScore >= 3) {
        recommendations.push({
            id: 'web-dev',
            title: 'Web Development Fundamentals',
            description: 'Perfect for aspiring web developers. Learn HTML, CSS, and JavaScript.',
            price: 49.99
        });
    }
    
    if (dataScore >= 3) {
        recommendations.push({
            id: 'data-science',
            title: 'Data Science Essentials',
            description: 'Master data analysis, visualization, and machine learning concepts.',
            price: 69.99
        });
    }
    
    if (programmingScore >= 3) {
        recommendations.push({
            id: 'python',
            title: 'Python Programming',
            description: 'Learn Python programming from basics to advanced concepts.',
            price: 59.99
        });
    }

    // If no clear preference, recommend the web development course
    if (recommendations.length === 0) {
        recommendations.push({
            id: 'web-dev',
            title: 'Web Development Fundamentals',
            description: 'A great starting point for your programming journey.',
            price: 49.99
        });
    }

    return recommendations;
}

// Chatbot functionality
let isChatbotOpen = true;

function toggleChatbot() {
    const chatbotBody = document.querySelector('.chatbot-body');
    const toggleIcon = document.querySelector('.chatbot-toggle i');
    
    if (isChatbotOpen) {
        chatbotBody.style.display = 'none';
        toggleIcon.className = 'fas fa-chevron-down';
    } else {
        chatbotBody.style.display = 'flex';
        toggleIcon.className = 'fas fa-chevron-up';
    }
    
    isChatbotOpen = !isChatbotOpen;
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message) {
        addMessage('user', message);
        input.value = '';
        
        // Process user message and generate response
        setTimeout(() => {
            const response = generateBotResponse(message);
            addMessage('bot', response);
        }, 500);
    }
}

function addMessage(type, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(message) {
    message = message.toLowerCase();
    
    // Simple keyword-based responses
    if (message.includes('hello') || message.includes('hi')) {
        return "Hello! How can I help you find the right course?";
    }
    
    if (message.includes('web') || message.includes('website')) {
        return "Our Web Development Fundamentals course would be perfect for you! It covers HTML, CSS, and JavaScript. Would you like to know more?";
    }
    
    if (message.includes('digital') || message.includes('marketing')) {
        return "We have several marketing courses! Our Digital Marketing Mastery course covers SEO, social media, and content marketing. We also have specialized courses in Social Media Marketing and Content Marketing Strategy. Which area interests you most?";
    }
    
    if (message.includes('data') || message.includes('analysis')) {
        return "Our Data Science Essentials course would be ideal for you. It covers data analysis, visualization, and machine learning. We also have an AI & Machine Learning course for advanced topics. Would you like more details?";
    }

    if (message.includes('ai') || message.includes('machine learning')) {
        return "Our AI & Machine Learning course covers deep learning, neural networks, and practical applications. It's perfect for those interested in artificial intelligence. Would you like to learn more?";
    }
    
    if (message.includes('security') || message.includes('cyber')) {
        return "Our Cyber Security Fundamentals course teaches network security, ethical hacking, and security best practices. It's perfect for aspiring security professionals. Interested in learning more?";
    }

    if (message.includes('mobile') || message.includes('app')) {
        return "Our Mobile App Development course teaches how to build iOS and Android apps using React Native. Would you like to know more about the curriculum?";
    }

    if (message.includes('seo')) {
        return "We offer a comprehensive SEO Mastery Course that covers all aspects of search engine optimization. You'll learn both technical SEO and content optimization strategies. Shall I tell you more?";
    }

    if (message.includes('cloud')) {
        return "Our Cloud Computing course covers major platforms like AWS, Azure, and Google Cloud. You'll learn cloud architecture, deployment, and management. Would you like more details?";
    }

    if (message.includes('blockchain')) {
        return "Our Blockchain Development course covers blockchain technology fundamentals and smart contract development. Perfect for those interested in Web3 and cryptocurrency. Would you like to know more?";
    }

    if (message.includes('ui') || message.includes('ux') || message.includes('design')) {
        return "Our UI/UX Design course teaches user interface and user experience design principles. You'll learn to create beautiful and functional designs. Interested in learning more?";
    }
    
    if (message.includes('price') || message.includes('cost')) {
        return "Our courses range from $49.99 to $79.99. Each course includes lifetime access and a certificate upon completion. The Digital Marketing Mastery course is $59.99, while the AI & Machine Learning course is $79.99. Which course interests you?";
    }
    
    if (message.includes('beginner') || message.includes('start')) {
        return "For beginners, I recommend our Web Development Fundamentals course ($49.99) or Digital Marketing Mastery course ($59.99). Both are designed to be beginner-friendly. Which field interests you more?";
    }
    
    return "I'm here to help you find the perfect course. We offer courses in web development, digital marketing, data science, AI, cyber security, mobile development, and more. What subject interests you?";
}

// Add event listener for Enter key in chat input
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}); 