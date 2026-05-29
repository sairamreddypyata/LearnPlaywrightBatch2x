# LearnPlaywrightBatch2x

A comprehensive learning repository for Playwright automation and JavaScript fundamentals. This course is designed for beginners to intermediate learners who want to master browser automation testing using Playwright and solidify their JavaScript knowledge.

## 📋 Overview

This repository provides a structured, hands-on approach to learning Playwright browser automation and JavaScript concepts essential for writing robust automation scripts. Each chapter builds progressively on foundational concepts, combining theoretical understanding with practical coding exercises.

### Key Features
- ✅ Step-by-step progression from basics to advanced concepts
- ✅ Practical examples and real-world scenarios
- ✅ JavaScript fundamentals integrated throughout
- ✅ Best practices for automation scripting
- ✅ VSCode productivity tips and shortcuts
- ✅ Clear code examples with explanations

---

## 📁 Repository Structure

### Chapter 01: Basics
Introduction to Playwright and JavaScript fundamentals for test automation.
- **01_Basics.js** - Introduction to Playwright with basic browser interactions
- **02_JS.js** - JavaScript fundamentals essential for automation
- **03_JS_Verify_Setup.js** - Verify Playwright installation and Node.js environment setup
- **04_HotCode.js** - Hot code reloading patterns and quick iteration techniques for development

### Chapter 02: JavaScript Concepts
Core JavaScript skills and concepts for writing effective automation scripts.
- **05_JS_Basics.js** - JavaScript basics applied to test scripting scenarios

### Chapter 03: Identifier & Literals
Understanding naming conventions, identifiers, literals, and code documentation standards.
- **06_Identifier_Rules.js** - JavaScript identifier naming rules with practical examples
- **07_Identifier_Part2.js** - Advanced identifier and literal concepts
- **08_Comments.js** - Comment syntax and documentation best practices
- **js_identifier_rules.js** - Comprehensive identifier examples: snake_case, camelCase, PascalCase, and more
- **VSCode_Shortcuts_Windows.md** - Essential VS Code shortcuts for Windows users to boost productivity

### Chapter 04: JavaScript Concepts (Advanced)
Deep dive into JavaScript variables, scoping, functions, hoisting, and runtime behavior.
- **09_var_let_const.js** - Differences between var, let, and const and their scope rules
- **10_functions.js** - Function declarations, expressions, arrow functions, and invocation
- **11_var_explained.js** - In-depth exploration of `var` and variable behavior
- **12_let_explained.js** - Detailed analysis of `let` and block scoping
- **13_const_explained.js** - Constants, immutability, and best practices
- **14_var_functionscope.js** - Function scope versus global scope for `var`
- **15_let_scope.js** - Block scope behavior with `let`
- **16_hoisting.js** - Hoisting fundamentals and variable initialization
- **17_hoisting_fn.js** - Function hoisting and declaration order
- **18_let_hoisting.js** - Temporal Dead Zone and `let` hoisting
- **19_let_hoisting_block.js** - Hoisting behavior inside block scopes
- **20_let_const.js** - Combining `let` and `const` in modern JavaScript
- **21_JR_QA.js** - JavaScript questions and answers for review

---

## 🎯 Learning Objectives

By completing this course, you will:
- ✓ Understand Playwright architecture and capabilities
- ✓ Write browser automation scripts from scratch
- ✓ Master JavaScript variables, functions, and scoping
- ✓ Apply best practices for writing maintainable automation code
- ✓ Handle common automation challenges and edge cases
- ✓ Develop efficient test automation workflows
- ✓ Use professional development tools and shortcuts

---

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** or any code editor - [Download](https://code.visualstudio.com/)
- **Git** (for cloning) - [Download](https://git-scm.com/)
- Basic understanding of JavaScript (we cover basics, but prior exposure helps)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sairamreddypyata/LearnPlaywrightBatch2x.git
cd LearnPlaywrightBatch2x
```

### 2. Install Dependencies
```bash
npm install
npx playwright install
```

### 3. Run Your First Script
```bash
node chapter_01_Basics/01_Basics.js
```

### 4. Navigate Through Chapters
- Start with Chapter 01 basics
- Progress through chapters sequentially
- Run each JavaScript file to see outputs and learn concepts

---

## 💻 How to Use This Repository

1. **Read the file:** Open each `.js` file to understand the concepts
2. **Review examples:** Each file contains commented examples
3. **Run the code:** Execute with `node filename.js` to see results
4. **Experiment:** Modify code and observe how it behaves
5. **Practice:** Complete the exercises at the end of each section

---

## 🔧 Common Commands

```bash
# Run a specific script
node chapter_01_Basics/01_Basics.js

# Run all scripts in a chapter (example)
for file in chapter_01_Basics/*.js; do node "$file"; done

# Run Chapter 04 scripts
node chapter_04_Javascript_Concepts/09_var_let_const.js
node chapter_04_Javascript_Concepts/21_JR_QA.js

# Install a specific Playwright browser
npx playwright install chromium

# View Playwright documentation
npx playwright --help
```

---

## 📚 Topics Covered

### JavaScript Fundamentals
- Variables (var, let, const)
- Data types and literals
- Functions and scope
- Comments and documentation
- Identifier naming conventions
- Hoisting and temporal dead zone

### Playwright Concepts
- Browser automation basics
- Element selection and interaction
- Page navigation
- Screenshot and video recording
- Debugging automation scripts
- Error handling

### Best Practices
- Writing readable test code
- Naming conventions
- Code organization
- Documentation standards
- Performance optimization

---

## 🐛 Troubleshooting

### Issue: "playwright is not installed"
**Solution:** Run `npm install` and `npx playwright install`

### Issue: "Node.js not found"
**Solution:** Ensure Node.js is installed. Check with `node --version`

### Issue: Port conflicts when running scripts
**Solution:** Check what's using the port and either stop it or modify the port in your script

### Issue: Browser fails to launch
**Solution:** Run `npx playwright install` and ensure you have a compatible OS

---

## 📖 Additional Resources

- [Playwright Official Documentation](https://playwright.dev/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [VS Code Documentation](https://code.visualstudio.com/docs)

---

## 🤝 Contributing

Feel free to:
- Fork this repository
- Create feature branches for improvements
- Submit pull requests with enhancements
- Report issues and suggest improvements
- Share your learning experiences

---

## 📝 Notes for Learners

- **Go at your own pace:** Each chapter builds on the previous one
- **Practice regularly:** Code along with examples, don't just read
- **Experiment:** Modify examples and see what happens
- **Ask questions:** Refer to official documentation when stuck
- **Review:** Revisit earlier chapters if concepts feel unclear


This README was updated to clarify repository setup instructions and improve documentation for learners.

---

## 📄 License

This project is open for educational purposes. Feel free to use and modify for your learning.

---

## 👤 Author

Created for the Playwright Batch 2x learning cohort.

---

## 📞 Support

For questions or issues:
1. Check the troubleshooting section
2. Review chapter comments
3. Refer to official documentation links
4. Create an issue in the repository

---

**Last Updated:** May 2026  
**Course Status:** In Development  
**Difficulty Level:** Beginner to Intermediate

3. Run example JavaScript files:
```bash
node chapter_01_Basics/01_Basics.js
node chapter_01_Basics/03_JS_Verify_Setup.js
```

4. Open the repository in VS Code for best development experience.

## Requirements

- Node.js (v14 or higher recommended)
- npm
- Playwright
- Visual Studio Code (recommended)

## Playwright Resources

- [Playwright Documentation](https://playwright.dev/)
- [Getting Started with Playwright](https://playwright.dev/docs/intro)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)

## Notes

- Chapter 01 is the best starting point for Playwright setup and browser automation.
- Chapter 02 and Chapter 03 focus on the JavaScript knowledge needed to extend your automation skills.

## Author

**sairamreddypyata** - Playwright learning and automation repository
