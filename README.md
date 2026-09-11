# Processo Seletivo Rocha Cerqueira

## Sobre o Projeto

Este repositório contém as soluções desenvolvidas para o Processo Seletivo da Rocha Cerqueira Sociedade de Advogados.

As atividades propostas tiveram como objetivo avaliar competências relacionadas a atendimento ao usuário, análise e resolução de incidentes, organização de processos, desenvolvimento web e programação em Python.

---

## Estrutura do Repositório

```text
ProcessoSeletivoRochaCerqueira
│
├── Questao01
│   └── Questao01-AtendimentoIncidentes.md
│
├── Questao02
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── Questao03
    └── main.py
```

---

## Tecnologias Utilizadas

### Questão 01

- Documentação Técnica
- Análise de Incidentes
- Fluxo de Atendimento
- Boas Práticas de Suporte

### Questão 02

- HTML5
- CSS3
- JavaScript

### Questão 03

- Python 
- Requests
- API REST
- JSON

---

# Questão 01 - Atendimento e Triagem de Incidentes

## Objetivo

Descrever o processo completo de atendimento a um usuário que reporta um problema crítico de acesso a um sistema utilizado em suas atividades profissionais.

---

## Escopo da Solução

A solução contempla:

- Atendimento inicial ao usuário
- Levantamento de informações
- Registro da ocorrência
- Coleta de evidências
- Diagnóstico inicial
- Testes de validação
- Escalonamento para equipes responsáveis
- Acompanhamento até a resolução
- Encerramento documentado do atendimento

---

## Principais Etapas

### Atendimento Inicial

Realização do primeiro contato com o usuário buscando compreender a situação, demonstrando empatia e priorizando a resolução do incidente.

### Coleta de Informações

Investigação do cenário através de perguntas relacionadas a:

- Histórico do problema
- Credenciais utilizadas
- Permissões de acesso
- Atualizações recentes
- Comportamento do erro
- Impacto operacional

### Registro do Chamado

Documentação das informações coletadas para garantir rastreabilidade durante todo o processo.

### Coleta de Evidências

Solicitação de:

- Prints da tela
- Vídeos demonstrando a ocorrência
- Data e horário do problema
- Informações do dispositivo
- Informações do usuário

### Diagnóstico Inicial

Execução de testes para validar:

- Funcionamento da rede
- Conectividade do dispositivo
- Permissões do usuário
- Integridade do ambiente
- Ocorrências semelhantes

### Escalonamento

Encaminhamento do incidente para a equipe mais adequada de acordo com a causa identificada:

- Desenvolvimento
- Implantação
- Administrativo
- Financeiro
- Gestão Contratual

### Acompanhamento

Comunicação contínua com o usuário até a completa resolução do problema.

### Encerramento

Registro final contendo:

- Causa do problema
- Equipe responsável
- Solução aplicada
- Data e horário de encerramento

---

# Questão 02 - Sistema de Controle de Chamados

## Objetivo

Desenvolver uma aplicação web para abertura e acompanhamento de chamados internos.

---

## Funcionalidades

- Cadastro de chamados
- Registro de solicitante
- Registro de e-mail
- Registro de setor
- Definição de prioridade
- Seleção do setor responsável
- Registro da descrição do problema
- Inclusão de anexos
- Controle de status
- Listagem de chamados
- Encerramento de chamados

---

## Estrutura dos Arquivos

### index.html

Responsável pela estrutura da aplicação.

Contém:

- Cabeçalho principal
- Formulário de abertura de chamados
- Campos de cadastro
- Área de descrição do problema
- Campo de anexos
- Tabela para visualização dos chamados

### style.css

Responsável pela estilização da interface.

Principais recursos:

- Layout responsivo
- Organização visual dos componentes
- Estilização de formulários
- Estilização de tabelas
- Personalização de botões

### script.js

Responsável pelas regras de negócio da aplicação.

Principais funcionalidades:

- Cadastro de chamados
- Armazenamento em memória
- Atualização dinâmica da tabela
- Controle de status
- Registro das datas de abertura e encerramento
- Encerramento mediante confirmação de devolutiva ao usuário

---

## Fluxo da Aplicação

1. Usuário preenche o formulário.
2. Sistema valida os campos obrigatórios.
3. Chamado é criado.
4. Chamado é exibido na tabela.
5. Status inicial definido como "Aberto".
6. Atendimento é realizado.
7. Usuário recebe retorno.
8. Chamado é encerrado.
9. Status é alterado para "Fechado".

---

## Como Executar

Abra o arquivo:

```bash
index.html
```

em qualquer navegador moderno.

---

# Questão 03 - Relatório de Tarefas por Usuário

## Objetivo

Consumir dados de APIs públicas, processá-los e gerar relatórios consolidados de tarefas por usuário.

---

## Funcionalidades

- Consulta de usuários via API
- Consulta de tarefas via API
- Relacionamento entre usuários e tarefas
- Contagem de tarefas concluídas
- Contagem de tarefas pendentes
- Cálculo do total de atividades
- Identificação do usuário com mais pendências
- Geração de relatório via terminal

---

## Estrutura da Solução

### buscar_usuarios()

Realiza a requisição para obtenção da lista de usuários.

### buscar_tarefas()

Realiza a requisição para obtenção da lista de tarefas.

### Processamento dos Dados

Relaciona tarefas aos respectivos usuários através do identificador da conta.

### Relatório

Exibe para cada usuário:

- Quantidade de tarefas concluídas
- Quantidade de tarefas pendentes
- Quantidade total de atividades

### Análise de Pendências

Após a geração do relatório, identifica:

- Usuário com o maior número de pendências
- Empates entre usuários
- Quantidade máxima de pendências registradas

---

## Como Executar

### Instalar dependências

```bash
pip install requests
```

### Executar aplicação

```bash
python main.py
```

---

## Competências Demonstradas

### Atendimento e Suporte

- Comunicação com usuários
- Coleta de evidências
- Registro de incidentes
- Escalonamento de chamados
- Acompanhamento de resolução

### Desenvolvimento Web

- HTML5
- CSS3
- JavaScript
- - Responsividade

### Programação

- Python
- Consumo de APIs REST
- Manipulação de JSON
- Estruturas condicionais
- Estruturas de repetição
- Processamento de dados
- Geração de relatórios

---

## Melhorias Futuras

- Persistência de dados utilizando banco de dados.
- Integração entre frontend e API.
- Sistema de autenticação.
- Dashboard gerencial.
- Upload real de anexos.
- Exportação de relatórios.
- Testes automatizados.
- Monitoramento de indicadores.

---

## Autor

**Davi Lopes Miranda**

Desenvolvido como parte do Processo Seletivo da Rocha Cerqueira Sociedade de Advogados
