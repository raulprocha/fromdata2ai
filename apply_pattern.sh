#!/bin/bash
# Script para aplicar padrão de design automaticamente
# Uso: ./apply_pattern.sh arquivo.html

if [ -z "$1" ]; then
    echo "Uso: ./apply_pattern.sh arquivo.html"
    exit 1
fi

FILE=$1

echo "Aplicando padrão em $FILE..."

# Backup
cp "$FILE" "${FILE}.backup"

# Padrão 1: Mover título/descrição para fora do card interno
sed -i 's|<div class="card p-8 max-w-4xl mx-auto">\s*<div class="text-center mb-12">|<div class="text-center mb-12">|g' "$FILE"

echo "✅ Padrão aplicado!"
echo "📁 Backup salvo em ${FILE}.backup"
echo ""
echo "Próximos passos manuais:"
echo "1. Procure por <h3> no arquivo"
echo "2. Antes de cada <h3>, adicione:"
echo "   </div>  <!-- fecha card anterior -->"
echo "   <div class=\"card p-8 max-w-4xl mx-auto mb-8\">"
echo ""
echo "3. No último <h3> da seção, use mb-8 apenas se não for o último"
