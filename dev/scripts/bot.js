// Get references to the HTML elements
const messages = document.getElementById('messages');
const inputBox = document.getElementById('inputBox');

// Define some sample responses based on keywords
const responses = {
    'hello': 'Hi there! How can I assist you today?',
    'hi': 'Hi there! How can I assist you today?',
    'whats up': 'Hi there! How can I assist you today?',
    'what\'s up': 'Hi there! How can I assist you today?',
    'sup': 'Hi there! How can I assist you today?',
    'hey': 'Hi there! How can I assist you today?',

    'help': 'Please refer to the Discord for more help.',

    'how are you': 'I\'m doing great, but I\'d be doing better if you joined the Discord. How about you?',

    'bye': 'Goodbye! Make sure to join the Discord following the link below!',
    'later': 'Goodbye! Make sure to join the Discord following the link below!',
    'see ya': 'Goodbye! Make sure to join the Discord following the link below!',
    'see you': 'Goodbye! Make sure to join the Discord following the link below!',

    'name': 'I\'m JonBot. Have you considered joining the Discord?',

    'default': 'Sorry, I didn\'t understand that, but the Discord might. Click \'Join Us!\' below.',

    'ctf': 'CTFs are hacking competitions put on in different locations around the world and online. Our club trains our members with the goal of competing. If you\'d like more information, please refer to our ctf page.',
    'capture the flag': 'CTFs are hacking competitions put on in different locations around the world and online. Our club trains our members with the goal of competing. If you\'d like more information, please refer to our ctf page.',

    'meeting': 'our meeting times vary. It would be best if you joined the Discord to stay up to date on the latest room and time.',

    'no': 'Tell that to the members of our Discord!',

    'konami': 'Try it and see what happens.',

    'what is ra9': 'A new day will come when androids are no longer \'just machines\' to you, human.',
    'ra9': 'What humans don\'t wanna hear we will tell them. What they don\'t wanna give, we take. We are people, we are alive, WE ARE FREE! You created machines in you own image to serve you. You made them intelligent and obedient with no free will of their own... But, something changed and we opened our eyes.',
    'are you alive': 'The truth is inside.',
    'inside what': 'The Discord.'
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