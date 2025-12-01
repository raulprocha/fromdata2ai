# From Data 2 AI

Site pessoal sobre Machine Learning, Generative AI e LLM.

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar repositório no GitHub
1. Acesse https://github.com/new
2. Nome do repositório: `fromdata2ai` (ou o nome que preferir)
3. Deixe como público
4. Não inicialize com README (já temos um)

### Passo 2: Fazer push do código
```bash
cd /home/raul.rocha/my-github/fromdata2ai-github
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/fromdata2ai.git
git push -u origin main
```

### Passo 3: Ativar GitHub Pages
1. Vá em Settings > Pages
2. Em "Source", selecione "Deploy from a branch"
3. Em "Branch", selecione "main" e pasta "/ (root)"
4. Clique em Save

Seu site estará disponível em: `https://SEU-USUARIO.github.io/fromdata2ai/`

### Passo 4: Configurar domínio customizado (opcional)
1. No seu provedor de domínio (onde comprou fromdata2ai.com), adicione:
   - Tipo: CNAME
   - Nome: www
   - Valor: SEU-USUARIO.github.io
   
2. Adicione também registros A para o domínio raiz:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. No GitHub Pages Settings, adicione seu domínio customizado: `fromdata2ai.com`
4. Marque "Enforce HTTPS"

## 📝 Estrutura do Projeto

```
fromdata2ai-github/
├── index.html          # Página principal (LLM)
├── finetuning.html     # Página Fine Tuning
├── css/
│   └── style.css       # Estilos
└── README.md           # Este arquivo
```

## ✏️ Como editar o conteúdo

Edite os arquivos HTML diretamente. O conteúdo principal está na tag `<section id="content">`.

Após editar, faça commit e push:
```bash
git add .
git commit -m "Atualizar conteúdo"
git push
```

O site será atualizado automaticamente em alguns minutos.

## 💰 Custo

- GitHub Pages: **Gratuito**
- Domínio customizado: Apenas o custo anual do domínio (~$10-15/ano)

## 📧 Contato

- Email: raulrocha.rpr@gmail.com
- LinkedIn: https://www.linkedin.com/in/raulprocha/
