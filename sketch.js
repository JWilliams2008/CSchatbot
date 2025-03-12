let currentQuestion = null; // Store the current question being asked

async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');
    
    // Display the user message in the chatbox
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userInput}`;
    chatbox.appendChild(userMessage);
    
    // Clear input field after sending
    document.getElementById('userInput').value = '';
    
    // Check if the user message contains predefined economic terms
const predefinedResponses = {
    'hi': 'Bot: Hi! Please ask me if you want a definition of a computer science term or if you want me to ask you a practice question.',
    'algorithm': 'Bot: An algorithm is a step-by-step procedure for solving a problem or performing a task, often used in computing.',
    'data structure': 'Bot: A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently.',
    'binary': 'Bot: Binary is a number system that uses only two digits: 0 and 1. It is the foundation of all modern computing systems.',
    'encryption': 'Bot: Encryption is the process of converting data into a code to prevent unauthorized access.',
    'debugging': 'Bot: Debugging is the process of identifying and fixing errors or bugs in software or hardware.',
    'compilation': 'Bot: Compilation is the process of converting source code written in a high-level programming language into machine code that a computer can execute.',
    'oop': 'Bot: Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which can contain data and methods.',
    'cloud computing': 'Bot: Cloud computing is the delivery of computing services such as storage, processing, and networking over the internet.',
    'machine learning': 'Bot: Machine learning is a subset of artificial intelligence (AI) that involves algorithms allowing computers to learn from data without being explicitly programmed.',
    'operating system': 'Bot: An operating system is software that manages hardware and software resources on a computer, providing services to other software.',
    'networking': 'Bot: Networking refers to the practice of connecting computers and other devices to share data and resources.',
    'ip address': 'Bot: An IP address (Internet Protocol address) is a unique string of numbers assigned to each device connected to a network.',
    'algorithm complexity': 'Bot: Algorithm complexity refers to the computational cost of an algorithm, often expressed in terms of time (time complexity) and space (space complexity).',
    'compiler': 'Bot: A compiler is a program that translates high-level programming code into machine-readable code or an intermediate code.',
    'database': 'Bot: A database is an organized collection of data, typically stored electronically, that can be accessed, managed, and updated efficiently.',
    'json': 'Bot: JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and for machines to parse and generate.',
    'api': 'Bot: An API (Application Programming Interface) is a set of rules that allows one software application to interact with another.',
    'frontend': 'Bot: Frontend refers to the part of a web application or website that users interact with directly, including the design, layout, and functionality.',
    'backend': 'Bot: Backend refers to the server-side of a web application, where data processing and storage occur, and the frontend is served to users.',
    'big data': 'Bot: Big data refers to large and complex data sets that require specialized tools and techniques to store, process, and analyze.',
    'artificial intelligence': 'Bot: Artificial intelligence (AI) is the simulation of human intelligence processes by machines, particularly computer systems.'
};

// Function to ask a computer science question
const askComputerScienceQuestion = () => {
    const questions = [
        { question: "Bot: What is an algorithm?", correctAnswer: "An algorithm is a step-by-step procedure for solving a problem or performing a task." },
        { question: "Bot: What is a data structure?", correctAnswer: "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently." },
        { question: "Bot: What is the purpose of encryption?", correctAnswer: "Encryption is the process of converting data into a code to prevent unauthorized access." },
        { question: "Bot: What is the difference between a compiler and an interpreter?", correctAnswer: "A compiler translates the entire source code into machine code before execution, while an interpreter translates and executes the code line by line." },
        { question: "Bot: What is OOP (Object-Oriented Programming)?", correctAnswer: "OOP is a programming paradigm based on the concept of objects that contain both data and methods." },
        { question: "Bot: What does a cloud computing service provide?", correctAnswer: "Cloud computing delivers computing services such as storage, processing, and networking over the internet." },
        { question: "Bot: What is a database?", correctAnswer: "A database is an organized collection of data that can be accessed, managed, and updated efficiently." },
        { question: "Bot: What is the purpose of an API?", correctAnswer: "An API allows one software application to interact with another by defining a set of rules for communication." },
        { question: "Bot: What is the difference between frontend and backend?", correctAnswer: "Frontend is the part of a web application that users interact with, while backend is the server-side where data processing and storage occur." },
        { question: "Bot: What is machine learning?", correctAnswer: "Machine learning is a subset of AI that involves algorithms allowing computers to learn from data without being explicitly programmed." }
    ];

    // Select a random question from the list
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    return randomQuestion;
};


    // If the user types "question", ask a new question
    if (userInput.toLowerCase().includes('question') && !currentQuestion) {
        const { question, correctAnswer } = askEconomicQuestion();
        currentQuestion = { question, correctAnswer }; // Store the current question and correct answer
        
        // Display the question to the user
        const botMessage = document.createElement('div');
        botMessage.textContent = question;
        chatbox.appendChild(botMessage);
        chatbox.scrollTop = chatbox.scrollHeight;
        
        return; // Return here to prevent further processing in this turn
    }

    // If a question is being asked, check for the answer
    if (currentQuestion) {
        const { correctAnswer } = currentQuestion;

        // Check if the user input matches the correct answer (case insensitive)
        if (userInput.toLowerCase().includes(correctAnswer.toLowerCase())) {
            const feedbackMessage = document.createElement('div');
            feedbackMessage.textContent = "Bot: Correct! Well done.";
            chatbox.appendChild(feedbackMessage);
        } else {
            const feedbackMessage = document.createElement('div');
            feedbackMessage.textContent = `Bot: The answer is: ${correctAnswer}.`;
            chatbox.appendChild(feedbackMessage);
        }
        
        // Reset the current question after answering
        currentQuestion = null;

        chatbox.scrollTop = chatbox.scrollHeight;
        return; // Return to stop further processing
    }
    
    // Check if the user message contains any predefined economic terms
    for (const term in predefinedResponses) {
        if (userInput.toLowerCase().includes(term)) {
            const botMessage = document.createElement('div');
            botMessage.textContent = predefinedResponses[term];
            chatbox.appendChild(botMessage);
            chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
            return;
        }
    }

    // If no condition is met, show an error message
    const errorMessage = document.createElement('div');
    errorMessage.textContent = "Bot: Sorry, I didn't understand that. Please ask about an economic term or request a practice question.";
    chatbox.appendChild(errorMessage);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}
