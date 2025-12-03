# From Data 2 AI

Personal website about Machine Learning, Generative AI, and LLMs.

🌐 **Live at:** [fromdata2ai.com](https://fromdata2ai.com)

## 📚 Content

### LLM
Insights and practical applications of Large Language Models in production environments.

### Fine Tuning
- **Overview**: Strategies and best practices for fine-tuning LLMs
- **SEAL Framework**: Comprehensive guide to evaluating Augmented Language Models

### RAG (Retrieval Augmented Generation)
- **AWS Bedrock RAG**: Complete tutorial on building production-ready RAG systems with:
  - Hierarchical chunking strategies
  - FAISS vector search with OpenSearch Serverless
  - Bedrock Agents for automatic RAG
  - Infrastructure as Code with Terraform
  - Performance benchmarks and cost analysis

## 🏗️ Project Structure

```
fromdata2ai/
├── index.html              # Home page
├── llm.html               # LLM insights
├── finetuning.html        # Fine-tuning overview
├── seal.html              # SEAL Framework deep dive
├── rag-tutorial.html      # AWS Bedrock RAG tutorial
├── images/                # Images and assets
│   ├── profile.jpg
│   ├── favicon.png
│   └── favicon.ico
└── README.md              # This file
```

## 🚀 Deployment

This site is deployed using **GitHub Pages** with a custom domain.

### GitHub Pages Setup

1. **Repository Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main` / `(root)`
4. **Custom domain**: `fromdata2ai.com`
5. **Enforce HTTPS**: ✅ Enabled

### Custom Domain Configuration

DNS records configured at domain provider:

**CNAME Record:**
```
www → raulprocha.github.io
```

**A Records (for root domain):**
```
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, Tailwind CSS
- **Syntax Highlighting**: Prism.js (for code examples)
- **Charts**: Chart.js (for SEAL visualizations)
- **Hosting**: GitHub Pages
- **Domain**: Custom domain with HTTPS

## ✏️ Editing Content

All pages use consistent styling with:
- **Color scheme**: `#A52A2A` (primary), `#FDFBF8` (background)
- **Typography**: Inter font family
- **Components**: Cards, dropdowns, responsive navigation

To update content:

```bash
# Edit HTML files
git add .
git commit -m "Update content"
git push origin main
```

GitHub Pages automatically rebuilds the site in ~1-2 minutes.

## 🎨 Design Features

- ✅ Responsive design (mobile-friendly)
- ✅ Sticky navigation header
- ✅ Dropdown menus for organized content
- ✅ Hover effects on cards and links
- ✅ Syntax highlighting for code blocks
- ✅ Professional footer with contact links

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds
- **Mobile Optimized**: Yes
- **HTTPS**: Enforced

## 💰 Cost

- **GitHub Pages**: Free
- **Custom Domain**: ~$10-15/year
- **Total**: ~$1.25/month

## 📧 Contact

- **Email**: [raulrocha.rpr@gmail.com](mailto:raulrocha.rpr@gmail.com)
- **LinkedIn**: [linkedin.com/in/raulprocha](https://www.linkedin.com/in/raulprocha/)
- **GitHub**: [github.com/raulprocha](https://github.com/raulprocha)

## 📝 License

Content © 2025 Raul Rocha. All rights reserved.

---

**Built with ❤️ by Raul Rocha | AI/ML Specialist | Data Scientist | LLM Engineer**
