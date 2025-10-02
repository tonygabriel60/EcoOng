# EcoOng - Plataforma de Doações para ONGs Ambientais

## Sobre o Projeto

O **EcoOng** é uma aplicação web que conecta usuários a ONGs e projetos ambientais, permitindo doações de forma simples e intuitiva. O objetivo é conscientizar sobre causas ecológicas e simular um processo de contribuição financeira para organizações que trabalham pela preservação do meio ambiente.

## Problema que Resolve

- **Visibilidade**: Muitas ONGs ambientais têm dificuldade em alcançar potenciais doadores
- **Transparência**: Falta de clareza sobre o progresso das metas de arrecadação
- **Acessibilidade**: Processo de doação complexo e pouco intuitivo
- **Conscientização**: Necessidade de educar sobre causas ambientais importantes

## Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para maior segurança
- **React Router DOM** - Navegação entre páginas
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS3** - Estilização com design responsivo

### Arquitetura

- **Atomic Design** - Organização de componentes em átomos, moléculas, organismos e templates
- **Component-Based Architecture** - Reutilização e manutenibilidade
- **Local Storage** - Persistência de dados no navegador

### Estrutura do Projeto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, Input, ProgressBar)
│   ├── molecules/      # Combinações de átomos (ONGCard, DonationForm)
│   ├── organisms/      # Seções complexas (Header, ONGGrid)
│   └── templates/      # Layouts de página
├── pages/              # Páginas da aplicação
├── types/              # Definições TypeScript
├── data/               # Dados e funções de persistência
└── utils/              # Utilitários
```

##  Funcionalidades

### Dashboard

- Listagem de ONGs em cards organizados em grid
- Visualização de progresso das metas de arrecadação
- Efeito visual especial para metas atingidas
- Design responsivo para diferentes dispositivos

### Sistema de Doações

- Formulário simples para inserir valor da doação
- Validação de entrada de dados
- Atualização em tempo real do progresso das metas
- Persistência no localStorage

### ONGs Cadastradas

- **WWF Brasil** - Conservação da biodiversidade mundial
- **Greenpeace Brasil** - Ativismo ambiental e sustentabilidade
- **SOS Mata Atlântica** - Preservação da Mata Atlântica
- **Instituto Socioambiental** - Direitos socioambientais

##  Design e Usabilidade

### Responsividade

- **Desktop**: Grid com múltiplas colunas, layout otimizado para telas grandes
- **Tablet**: Adaptação do grid para telas médias
- **Mobile**: Layout em coluna única, botões e formulários otimizados para touch

### Acessibilidade

- Contraste adequado de cores
- Textos legíveis e bem estruturados
- Navegação intuitiva
- Feedback visual para interações

##  Demo Online

**Acesse a aplicação:** [https://eco-ongapp.vercel.app/](https://eco-ongapp.vercel.app/)

##  Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre no diretório
cd EcoOng

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # Verificação de código
```

##  Fluxo da Aplicação

1. **Carregamento**: Aplicação carrega ONGs do localStorage
2. **Visualização**: Usuário vê cards das ONGs com progresso das metas
3. **Seleção**: Usuário clica em "Doar" em uma ONG
4. **Doação**: Formulário para inserir valor da doação
5. **Confirmação**: Valor é adicionado à meta da ONG
6. **Atualização**: Dados são salvos e usuário retorna ao dashboard

##  Melhorias Futuras

### Funcionalidades

- [ ] Sistema de autenticação de usuários
- [ ] Histórico de doações
- [ ] Filtros e busca de ONGs
- [ ] Categorização por tipo de causa ambiental
- [ ] Sistema de favoritos
- [ ] Notificações quando metas são atingidas

### Técnicas

- [ ] Integração com API real
- [ ] Testes unitários e de integração
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)
- [ ] Análise de performance
- [ ] SEO otimizado

### Design

- [ ] Modo escuro/claro
- [ ] Animações mais elaboradas
- [ ] Gráficos de progresso avançados
- [ ] Tema customizável
