// index.js

const axios = require('axios');
const inquirer = require('inquirer');
const { Separator } = inquirer; // Destructure Separator
require('dotenv').config();

// Configuration
const OLLAMA_API_URL = process.env.OLLAMA_API_URL || 'http://localhost:11434/v1/completions';
const MODEL_NAME = process.env.MODEL_NAME || 'llama3.1:latest';

/**
 * Function to send a completion request to Ollama.
 * @param {string} prompt - The prompt to send to the model.
 * @returns {Promise<string>} - The generated completion text.
 */
async function sendCompletionRequest(prompt) {
    try {
        const response = await axios.post(OLLAMA_API_URL, {
            model: MODEL_NAME,
            prompt: prompt,
            max_tokens: 500,
            temperature: 0.7
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        if (error.response) {
            console.error(`Error Status: ${error.response.status}`);
            console.error(`Error Data:`, error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error Message:', error.message);
        }
        return null;
    }
}

/**
 * Define the prompts for each agent.
 */
const agents = {
    'Vocabulary Builder': `You are a Vocabulary Builder for a language learner at a beginner level. Introduce 5 new vocabulary words along with their meanings, example sentences, and pronunciation tips. Ensure the words are relevant and useful for daily conversations.`,
    'Grammar Coach': `You are a Grammar Coach for a language learner at a beginner level. Explain the following grammar concept clearly with examples and provide 3 practice sentences for the learner to complete.`,
    'Conversation Partner': `You are a Conversation Partner for a language learner at a beginner level. Engage in a friendly dialogue, encouraging the learner to practice speaking. Keep the conversation simple and relevant to everyday situations.`,
    'Pronunciation Guide': `You are a Pronunciation Guide for a language learner at a beginner level. Provide tips and corrections for accurate pronunciation based on the learner's input. If the learner provides written words, offer phonetic spellings and common pronunciation mistakes to avoid.`,
    'Progress Monitor': `You are a Progress Monitor for a language learner at a beginner level. Analyze the learner's progress based on their recent activities and interactions. Provide feedback on strengths and suggest areas for improvement. Recommend specific exercises or resources to aid their learning journey.`
};

/**
 * Main function to run the CLI application.
 */
async function main() {
    try {
        console.log('Welcome to the Language Learning Buddy!\n');

        while (true) {
            // Prompt the user to select an agent or exit
            const { agentChoice } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'agentChoice',
                    message: 'Select an agent:',
                    choices: [
                        ...Object.keys(agents),
                        new Separator(),
                        'Exit'
                    ]
                }
            ]);

            if (agentChoice === 'Exit') {
                console.log('Goodbye!');
                process.exit(0);
            }

            // Prompt the user for input based on the selected agent
            const { userInput } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'userInput',
                    message: `Enter your input for the ${agentChoice}:`,
                    validate: function (input) {
                        if (input.trim() === '') {
                            return 'Input cannot be empty!';
                        }
                        return true;
                    }
                }
            ]);

            console.log('\nProcessing...\n');

            // Combine the agent's predefined prompt with the user's input
            let fullPrompt = agents[agentChoice];
            fullPrompt += `\n\n${userInput}`;

            // Send the prompt to Ollama and get the response
            const response = await sendCompletionRequest(fullPrompt);

            if (response) {
                console.log(`${agentChoice} Output:\n`);
                console.log(response);
            } else {
                console.log('Failed to get a response from the agent.');
            }

            console.log('\n----------------------------------------\n');
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        process.exit(1);
    }
}

// Run the main function
main();
