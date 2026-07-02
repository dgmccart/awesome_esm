# Contributing to Awesome ESM

We're excited to have you contribute! This resource is built by and for the ESM community.

## Ways to Contribute

### 1. Add a Paper or Use Case

Found a great paper using ESM? Share it!

**[Open an issue](https://github.com/Biohub/awesome-esm/issues/new?template=add-paper.md)** with:
- Title
- Link to paper
- Brief summary (2-3 sentences)
- Which ESM model(s) were used
- Your name/affiliation

### 2. Add a FAQ Entry

Is something confusing? Help us improve documentation.

**[Open an issue](https://github.com/Biohub/awesome-esm/issues/new?template=add-faq.md)** with:
- Your question (in user language)
- Suggested answer
- Code example (if applicable)

### 3. Report an Error or Suggest a Change

Found a typo, broken link, or outdated info?

**[Open an issue](https://github.com/Biohub/awesome-esm/issues)** and let us know what needs fixing.

### 4. Request or Contribute a Tutorial

Want to see a tutorial on a specific topic?

**[Open an issue](https://github.com/Biohub/awesome-esm/issues/new?template=tutorial-request.md)** to request one.

To contribute a tutorial:
- Check that it's not already listed
- Open a pull request with the tutorial notebook/script
- Link to the tutorial from the Tutorials page

## Development Guidelines

### Local Setup

```bash
git clone https://github.com/Biohub/awesome-esm.git
cd awesome-esm
quarto preview
```

**Making Changes**

Create a new branch: `git checkout -b my-contribution`
Make your changes
Preview locally: `quarto preview`
Commit: `git commit -am` "Add: description of change"
Push: `git push origin my-contribution`
Open a pull request

**Style Guide**

Use clear, accessible language
Include code examples where applicable
Link to relevant resources
Use the provided templates for papers and use cases

**Curation Standards**
We aim for high-quality, accurate content. Contributions are reviewed on:

Relevance: Does it relate to ESM models or applications?
Accuracy: Is the information correct?
Clarity: Is it well-written and understandable?
Originality: Is it not spam or duplicate content?

**Questions?**

GitHub: Open an issue
Slack: Join the community
Email: resources@biohub.ai

---

## Initial Commit

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Quarto site structure"

# Push to GitHub
git push -u origin main

# Preview site locally
quarto preview

# Render for production
quarto render

# Check that _site/ was created with HTML files
ls _site/
