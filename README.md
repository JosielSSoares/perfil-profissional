# Josiel Soares — QA Portfolio

> Portfólio profissional de **Josiel Soares**, Junior QA Tester e Engenheiro de Qualidade de Software.

---

## Visão Geral

Site de portfólio pessoal desenvolvido em **React + TypeScript**, focado em apresentar a trajetória profissional, competências técnicas e certificações de Josiel Soares na área de Quality Assurance. O projeto combina animações fluidas, design responsivo e uma identidade visual sólida para transmitir profissionalismo.

---

## Demonstração

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com foto animada (transição grayscale → colorido) e bio |
| **Jornada Profissional** | Timeline de experiências com tags de tecnologias |
| **Arsenal Técnico** | Grade de habilidades com hover interativo |
| **Certificações** | Carrossel deslizante com verificação de credenciais |
| **Contato / CTA** | Download direto do currículo em PDF |

---

## Stack Tecnológica

| Tecnologia | Versão / Papel |
|---|---|
| React | UI Framework (componentes funcionais + Hooks) |
| TypeScript | Tipagem estática |
| Vite | Build tool e servidor de desenvolvimento |
| Tailwind CSS v4 | Estilização utilitária (`@import "tailwindcss"`) |
| Motion (Framer Motion) | Animações de entrada, hover e carrossel |
| Lucide React | Ícones SVG (ShieldCheck, Bug, Code2, Database, etc.) |
| Google Fonts | Inter (corpo) + Manrope (títulos) |

---

## Estrutura do Projeto

```
.
├── index.html              # Entrada HTML (lang="pt-br", meta SEO)
├── vite.config.ts          # Configuração do Vite (alias @/, Tailwind plugin, HMR)
├── tsconfig.json           # Configuração TypeScript (ES2022, bundler, paths)
├── src/
│   ├── main.tsx            # Bootstrap da aplicação (ReactDOM.createRoot)
│   ├── App.tsx             # Componente raiz — toda a lógica e estrutura de seções
│   ├── types.ts            # Interfaces TypeScript (Experience, Skill, Certification)
│   ├── index.css           # Estilos globais, variáveis de tema, fontes
│   └── assets/
│       ├── image/
│       │   ├── Eu.png                          # Foto profissional (hero)
│       │   └── certificados/
│       │       ├── Escolada-Nuvem.jpg
│       │       ├── SQLServer.jpg
│       │       ├── ReacteNext.jpg
│       │       └── aws-certified-cloud-practitioner.jpg
│       ├── docs/
│       │   └── Curriculo_Josiel_Soares_QA_2026.pdf
│       └── icon/
│           └── learning-svgrepo.svg            # Favicon
```

---

## Arquitetura e Decisões Técnicas

### Dados Estáticos como Constantes
Todo o conteúdo (experiências, habilidades, certificações, links sociais) é declarado como arrays de objetos tipados no topo do `App.tsx`. Isso facilita manutenção sem tocar na estrutura de renderização.

### Componente Interno `IconComponent`
Um mapeamento dinâmico resolve qual ícone Lucide renderizar a partir de uma string (`"Bug"`, `"Code2"`, etc.) em vez de fazer um IF/SWITCH, mantendo a interface `Skill` genérica e o código de renderização limpo.

### Carrossel de Certificações
Implementado sem biblioteca externa: usa estado `certIndex` + `translateX` calculado em CSS para deslizar os cards. Em mobile, o layout empilha verticalmente (`flex-col`). O botão de navegação respeita os limites (`maxCertIndex = total - 3`).

### Animação da Foto
A foto do hero inicia em `grayscale(100%)` e transita para `grayscale(0%)` via `onLoad` + CSS `transition`, criando um efeito de "revelação" sem biblioteca adicional.

### Navbar com Scroll Detection
`useEffect` ouve o evento `scroll` para alternar a opacidade do fundo da navbar conforme o usuário rola a página. O menu mobile usa `AnimatePresence` do Motion para uma entrada/saída suave.

---

## Como Executar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/JosielSSoares/<nome-do-repo>.git
cd <nome-do-repo>

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```
---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o build de produção na pasta `dist/` |
| `npm run preview` | Serve localmente o build de produção |

---

## Design e Identidade Visual

| Elemento | Valor |
|---|---|
| Cor primária (fundo escuro) | `#162839` |
| Cor de destaque (emerald) | `#4ade80` / `emerald-400` |
| Cor de fundo claro | `#f7f9fb` |
| Fonte de títulos | Manrope (Black 900) |
| Fonte de corpo | Inter |
| Estilo geral | Editorial, dark-navy + emerald accent |

---

## Contato e Links

- **LinkedIn:** [linkedin.com/in/josielssoares](https://www.linkedin.com/in/josielssoares/)
- **GitHub:** [github.com/JosielSSoares](https://github.com/JosielSSoares)

---