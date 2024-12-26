# Use a imagem oficial do Node.js
FROM node:22-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Exponha a porta padrão do Next.js
EXPOSE 3000

# Comando padrão (será substituído ao criar o projeto)
CMD ["sh"]