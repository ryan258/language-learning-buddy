# Language Learning Buddy

Language Learning Buddy is a command-line interface (CLI) application designed to assist beginner language learners in various aspects of their learning journey. It leverages the power of Ollama's `llama3.1:latest` model to provide interactive and personalized language learning experiences.

## 🌟 Features

- **Vocabulary Builder**: Introduces new words with meanings, example sentences, and pronunciation tips.
- **Grammar Coach**: Explains grammar concepts and provides practice exercises.
- **Conversation Partner**: Engages in friendly dialogues to practice speaking skills.
- **Pronunciation Guide**: Offers pronunciation tips and corrections.
- **Progress Monitor**: Analyzes learner progress and provides personalized feedback.

## 🛠️ Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (usually comes with Node.js)
- Ollama running locally (with the `llama3.1:latest` model)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/language-learning-buddy.git
   cd language-learning-buddy
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   - Copy the `.env.example` file to `.env`
   - Update the `.env` file with your Ollama API URL and model name if different from the defaults

## 💻 Usage

To start the Language Learning Buddy:

```bash
node index.js
```

Follow the on-screen prompts to select an agent and interact with the application.

## 🤖 Agents

The application includes the following agents:

1. **Vocabulary Builder**: Introduces new vocabulary words.
2. **Grammar Coach**: Explains grammar concepts and provides exercises.
3. **Conversation Partner**: Engages in dialogue practice.
4. **Pronunciation Guide**: Offers pronunciation tips and corrections.
5. **Progress Monitor**: Analyzes learning progress and provides feedback.

## 📁 Project Structure

- `index.js`: Main application file
- `package.json`: Project dependencies and scripts
- `.env`: Environment variables (make sure to create this from `.env.example`)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/language-learning-buddy/issues).

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## 🙏 Acknowledgements

- [Ollama](https://ollama.ai/) for providing the AI model
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) for the interactive command line user interface

---

Happy Language Learning! 🌍📚