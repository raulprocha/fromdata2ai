# Design Pattern - fromdata2ai.com

## Padrão de Estrutura de Seções

### Estrutura Padrão
```html
<section id="section-name" class="my-16 scroll-mt-20">
    <div class="card p-8">
        <!-- Título e descrição da seção (FORA dos cards internos) -->
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-2">Título da Seção</h2>
            <p class="text-lg text-gray-600">Descrição da seção</p>
        </div>

        <!-- Subseção 1 (DENTRO de seu próprio card) -->
        <div class="card p-8 max-w-4xl mx-auto mb-8">
            <h3 class="text-2xl font-semibold mb-4" style="color: #A52A2A;">Subtítulo 1</h3>
            <p>Conteúdo...</p>
        </div>

        <!-- Subseção 2 (DENTRO de seu próprio card) -->
        <div class="card p-8 max-w-4xl mx-auto mb-8">
            <h3 class="text-2xl font-semibold mb-4" style="color: #A52A2A;">Subtítulo 2</h3>
            <p>Conteúdo...</p>
        </div>

        <!-- Última subseção (SEM mb-8) -->
        <div class="card p-8 max-w-4xl mx-auto">
            <h3 class="text-2xl font-semibold mb-4" style="color: #A52A2A;">Subtítulo 3</h3>
            <p>Conteúdo...</p>
        </div>
    </div>
</section>
```

## Padrões de Tipografia

### Títulos
- **H2 (Título de Seção)**: `text-4xl font-bold mb-2`
- **H3 (Subtítulo)**: `text-2xl font-semibold mb-4` + `style="color: #A52A2A;"`
- **H4 (Sub-subtítulo)**: `text-xl font-semibold mb-3`

### Texto
- **Descrição de Seção**: `text-lg text-gray-600`
- **Parágrafo**: `text-gray-700`
- **Texto pequeno**: `text-sm text-gray-600`

## Cores Padrão
- **Cor principal (marrom)**: `#A52A2A`
- **Texto principal**: `#3f3c3a`
- **Texto secundário**: `#78716c`
- **Background**: `#FDFBF8`
- **Card background**: `#FFFFFF`
- **Border**: `#F0EBE3`

## Code Blocks
```html
<div class="code-block">
<pre><code class="language-python">
# Código aqui
</code></pre>
</div>
```

## Badges
```html
<span class="tech-badge">Tecnologia</span>
```

## Highlight Boxes
```html
<div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
    <p class="font-semibold text-yellow-900 mb-2">💡 Key Insight</p>
    <p class="text-sm text-gray-700">Conteúdo...</p>
</div>
```
