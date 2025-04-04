// Get references to the HTML elements
const messages = document.getElementById('messages');
const inputBox = document.getElementById('inputBox');

// Define some sample responses based on keywords
const responses = {
    'hello': 'Hi there! How can I assist you today?',
    'how are you': 'I\'m just a bot, but I\'m doing great! How about you?',
    'bye': 'Goodbye! Have a great day!',
    'name': 'I\'m your friendly chatbot!',
    'default': 'Sorry, I didn\'t understand that. Can you ask something else?',
};

// Function to sanitize user input by escaping HTML characters
function sanitizeInput(input) {
    const element = document.createElement('div');
    if (input) {
        element.innerText = input;  // Use innerText to escape input automatically
        return element.innerHTML;  // Get the sanitized HTML
    }
    return '';
}

// Function to handle sending messages
function sendMessage() {
    const userMessage = inputBox.value.trim();

    if (!userMessage) return; // Do nothing if input is empty

    // Sanitize the user's message before displaying it
    const sanitizedUserMessage = sanitizeInput(userMessage);

    // Display the user's sanitized message
    messages.innerHTML += `<div><strong>You:</strong> ${sanitizedUserMessage}</div>`;

    // Get the chatbot's response (sanitize the bot's response too)
    const botResponse = getBotResponse(userMessage.toLowerCase());
    const sanitizedBotResponse = sanitizeInput(botResponse);

    // Display the bot's sanitized response
    messages.innerHTML += `<div><strong>JonBot:</strong> ${sanitizedBotResponse}</div>`;

    // Clear the input box
    inputBox.value = '';
    messages.scrollTop = messages.scrollHeight; // Auto-scroll to bottom
}

// Function to get the chatbot's response based on keywords
function getBotResponse(userMessage) {
    // Check if the message contains a recognized keyword
    for (const keyword in responses) {
        if (userMessage.includes(keyword)) {
            return responses[keyword];
        }
    }

    // Return the default response if no keywords matched
    return responses['default'];
}

// Listen for 'Enter' key press to submit the message
inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent the default behavior (such as adding a new line)
        sendMessage();           // Call the sendMessage function
    }
});