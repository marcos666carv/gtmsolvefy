# Solvefy — Sales Strategy Completa
**Data:** Março 2026 | **Escopo:** Sales motion, cross-sell, channel enablement e battlecards

---

## 1. Sales Motion por Produto

### 1.1 Solvefy Marketing Platform
**Motion: SLG com PLG assistido**

O produto tem base enterprise existente. O ciclo de expansão é tão importante quanto o de aquisição. O movimento primário é vendas consultivas, mas com trial funcional para o prospect tocar o produto antes da decisão. PLG puro não funciona porque o valor aparece com integração de dados do cliente — isso exige onboarding humano.

**Discovery Questions:**
1. Como vocês se comunicam com a base de clientes hoje — quais canais e com qual frequência?
2. Qual canal gera mais resposta? Qual gostariam de escalar mas ainda não conseguiram?
3. Quando precisam disparar uma campanha urgente, qual é o tempo entre a decisão e o envio efetivo?
4. Como medem se uma campanha funcionou? Existe algum dado que gostariam de ter mas não têm?
5. Vocês já usam segmentação ou régua automática? O que é manual demais?
6. Qual é o volume médio de mensagens por mês — e qual seria o ideal se o custo não fosse restrição?
7. Quem aprova uma nova plataforma de comunicação — TI, marketing, financeiro?

**Landmines competitivos:**
- "Quando sua plataforma atual falha ou atrasa um disparo, qual é o impacto no negócio?"
- "Você consegue rastrear o resultado de uma campanha de SMS até uma conversão real no seu sistema?"

**Proposta de valor — linguagem de negócio:**
> "Solvefy Marketing Platform conecta todos os canais de comunicação em uma plataforma única, com IA que aprende quem responde a qual canal e quando. Resultado: menos gasto com disparos que não convertem, mais receita de campanhas que chegam na hora certa pelo canal certo."

**Objeções:**

| Objeção | Real significado | Como tratar |
|---------|-----------------|-------------|
| "Já temos ferramenta de SMS" | Medo de migração e retrabalho | Mostrar que migração típica são 3 dias. Focar na dor confirmada em discovery. |
| "Preciso de aprovação de TI" | TI pode ser bloqueador ou aliado | Preparar documento técnico que responde as 3 preocupações de TI: segurança, API, infraestrutura. |
| "Preço acima do orçamento" | Não viram o ROI ainda | "Antes de falarmos em preço: quanto gastam por mês em comunicação e quanto uma campanha boa gera?" |
| "Vamos construir internamente" | Controle ou projeto político | Quantificar: 6–12 meses de desenvolvimento + custo contínuo vs. tempo para valor da plataforma. |

**Demo Script (35–45 min):**
1. **Abertura (5 min):** Reiterar as 3 dores do discovery com dados específicos. Confirmar com o prospect antes de abrir qualquer tela.
2. **Resultado final primeiro (10 min):** Abrir no painel de performance de campanha. Mostrar taxa de entrega, resposta por canal, conversões. Perguntar: "Se vocês tivessem essa visibilidade hoje, o que fariam diferente?"
3. **Criar campanha em tempo real (15 min):** Importar segmento, seleção de canal com recomendação de IA, preview de RCS vs. SMS fallback, agendamento. Tempo total: 8 minutos na tela.
4. **API e integração (10 min — audiência técnica):** Documentação, webhook de resposta, logs de entrega.
5. **Fechamento (5 min):** Caso de cliente no mesmo setor com resultado quantificado. Definir próximo passo antes de encerrar — sem "vamos circular de volta."

---

### 1.2 Solvefy Cloud
**Motion: Channel-Led + SLG para contas estratégicas diretas**

Zero clientes. O investimento em enablement de canal supera qualquer material de vendas diretas neste momento. O SE está vendendo para o revendedor, não para o cliente final. O risco primário: revendedor posiciona o produto errado, perde a venda, e conclui que "o produto não vende."

**Discovery Questions (para revendedor):**
1. Quais são os 3 produtos de infraestrutura que você mais vende hoje?
2. Qual é o maior obstáculo ao vender cloud para clientes ainda on-premise?
3. Quando um cliente seu pergunta sobre VM ou segurança de rede, para onde você manda ele hoje?
4. Qual é o perfil do cliente que mais sente dor com custo de infraestrutura ou segurança de rede?

**Discovery Questions (para cliente final):**
1. Como gerenciam infraestrutura de TI hoje — on-premise, cloud, ou híbrido?
2. Qual é a maior dor — custo, gestão, segurança, ou escalabilidade?
3. Quando precisam provisionar um novo servidor, qual é o tempo e processo atual?
4. Quem decide infraestrutura — TI interno, terceirizado, ou diretoria?
5. Já tiveram incidente de segurança ou indisponibilidade com impacto real no negócio?
6. Se pudessem escalar infraestrutura sem comprar hardware, como isso mudaria o que conseguem fazer?

**Proposta de valor:**
> "Solvefy Cloud oferece VMs e infraestrutura de segurança em data centers brasileiros, com suporte em português e contratos em reais. Para ISPs: ofereça cloud aos seus clientes sem construir data center. Para TI corporativo: escale sem capex de hardware. Para educação: ambientes isolados por turma, pagando só pelo que usa."

**Objeções:**

| Objeção | Real significado | Como tratar |
|---------|-----------------|-------------|
| "Já usamos AWS/Azure" | Medo de migração ou lock-in | Posicionar como complementar: "Cloud local para compliance e latência, hyperscaler para workloads globais. Coexistência, não substituição." |
| "Não conheço Solvefy Cloud" | Brand awareness zero | "O que importa é a infraestrutura, o SLA e o suporte — não o nome na fatura." Provar com dados técnicos e referências. |
| "Meus clientes preferem players conhecidos" (revendedor) | Medo de rejeição | "O diferencial que você leva é suporte em português, billing em reais, e dados no Brasil. Para muitos clientes, isso vale mais que o nome da hyperscaler." |
| "Preço" | ROI não estabelecido | Cálculo de TCO: hardware + energia + equipe + renovação vs. cloud. Em 18–24 meses o cloud geralmente é mais barato. |

**Demo Script:**

**Para revendedor (30 min):** "Vou te mostrar exatamente o que você vai demonstrar para um cliente."
1. Painel de controle — simplicidade de gestão
2. Provisionar VM em tempo real: do zero ao ambiente rodando em menos de 3 minutos
3. Painel de segurança: firewall, logs, alertas
4. Billing em reais com breakdown por recurso
5. "Qualquer dúvida técnica do seu cliente, temos suporte técnico dedicado ao canal."

**Para cliente técnico (45 min):** adicionar escalabilidade sem downtime, opções de backup/recovery, API de gestão.

---

### 1.3 Solvefy CPaaS
**Motion: SLG com foco em integrações técnicas e contas enterprise**

O comprador primário é engenharia ou TI. O demo precisa mostrar qualidade de chamada, latência, integração via API, e confiabilidade de trunk. O negócio fecha quando o desenvolvedor ou arquiteto técnico está satisfeito.

**Discovery Questions:**
1. Como gerenciam ligações hoje — PABX físico, VoIP, ou cloud?
2. Qual é o volume de chamadas por mês — proporção entrada vs. saída?
3. Têm aplicações próprias que precisam fazer ou receber chamadas programaticamente?
4. Maior frustração atual — qualidade, custo, integração, ou gestão de números?
5. Existe algum fluxo de atendimento que gostariam de automatizar mas não conseguem?
6. Quais sistemas precisariam se integrar com telefonia — CRM, helpdesk, plataforma de atendimento?
7. Têm necessidade de gravação de chamadas por compliance ou qualidade?

**Proposta de valor:**
> "Solvefy CPaaS transforma telefonia de infraestrutura estática em capacidade programável. Você constrói fluxos de atendimento, integra ligações ao CRM, automatiza notificações por voz e escala capacidade sem hardware — tudo via API, com números brasileiros, pagando pelo uso."

**Objeções:**

| Objeção | Real significado | Como tratar |
|---------|-----------------|-------------|
| "Temos PABX instalado e funciona" | Sunk cost, medo de disrução | "Não precisamos substituir o PABX de uma vez. Comece com novos fluxos — URA nova, integração com CRM. A migração acontece naturalmente." |
| "Qualidade de VoIP não é boa" | Experiência ruim com soluções inferiores | Diferenciar CPaaS enterprise (codec G.711, SLA 99.9%) de VoIP genérico. Mostrar dados de latência e MOS score. |
| "Preciso de número fixo com DDD local" | Compliance ou percepção do cliente final | "Temos portabilidade numérica e provisioning de DDDs em todos os estados. Você mantém seus números atuais." |

**Demo Script:**

**Técnico (40 min):**
1. Documentação da API — clareza, exemplos de código, cobertura de eventos
2. Fazer chamada via API em tempo real: `POST /calls` → ligação tocando no celular do prospect
3. Webhook recebendo eventos em tempo real (call started, answered, ended, recording ready)
4. Configurar fluxo de URA via interface gráfica — sem código
5. CDR, qualidade de chamada, custo por minuto no painel de relatórios

**Executivo (25 min):**
1. Ligação de alta qualidade ao vivo
2. "Hoje vocês sabem quantas ligações perderam ontem? Aqui vocês sabem."
3. Caso de uso de automação: cobrança ou confirmação de agendamento automática
4. ROI: custo por minuto vs. alternativa atual

---

### 1.4 Solvefy ADS
**Motion: SLG consultivo, entrada via Marketing Platform**

Produto novo sem histórico. O motion mais seguro no lançamento é vender como expansão de contas já ativas no Marketing Platform. O discurso standalone deve ser desenvolvido após os primeiros 3–5 casos de sucesso.

**Discovery Questions:**
1. Como gerenciam campanhas de mídia paga hoje — interno, agência, ou combinação?
2. Têm visibilidade centralizada do gasto e resultado de mídia em todos os canais?
3. Como conectam resultado de campanha de mídia paga com o que acontece depois — lead gerado, venda fechada?
4. Qual canal performa melhor hoje? Qual gostariam de explorar mais?
5. Se pudessem ver em tempo real onde alocar mais verba para maximizar resultado, como isso mudaria a decisão?

**Proposta de valor:**
> "Solvefy ADS conecta todos os canais de mídia paga em uma visão única e otimiza automaticamente onde alocar verba para maximizar resultado. Você para de ter orçamento distribuído em silos — Google aqui, Meta ali — e passa a ter visão unificada com otimização em tempo real."

**Objeções:**

| Objeção | Real significado | Como tratar |
|---------|-----------------|-------------|
| "Já usamos o painel nativo de cada canal" | Fragmentação não é percebida como problema | "Nenhum painel nativo te diz qual canal escolher quando você tem R$10.000 para alocar amanhã. A visão consolidada é o que permite otimização cross-channel." |
| "Nossa agência cuida disso" | Questão política | "A plataforma não substitui a agência — ela dá mais transparência. A pergunta é: quem tem os dados, você ou a agência?" |
| "Produto muito novo, sem casos de sucesso" | Risco de ser cobaia | "Por isso o lançamento é com clientes selecionados que já confiam na plataforma. O benefício: influenciar o roadmap e ter pricing de early adopter." |

**Demo Script (30 min):**
1. Painel unificado com dados de múltiplos canais (Google, Meta, programático)
2. Gasto por canal vs. resultado por canal — comparado lado a lado
3. Simulação de realocação de budget: "se você mover R$5.000 do Google para Meta baseado no CPA atual, o modelo estima X resultado adicional"
4. Fluxo de criativo: upload único, distribuição automática formatada por canal
5. Integração com Marketing Platform: campanha de ADS dispara SMS/RCS para leads capturados
6. "Qual canal vocês mais gostariam de otimizar primeiro?"

---

## 2. Cross-sell Playbook

### 2.1 Martech → CPaaS

**Gatilhos:**
- Cliente menciona central de atendimento ou time de vendas que faz ligações
- Pergunta sobre voz como canal adicional
- Tem fluxo de cobrança só por texto e quer testar voz outbound

**Talk track:** "Vocês já usam nossa plataforma para comunicação escrita. A próxima camada é voz — taxas de resposta 3x maiores que SMS para determinados tipos de comunicação. Com CPaaS, vocês adicionam ligações automáticas de confirmação, cobrança ou reativação ao mesmo fluxo, sem contratar outra plataforma."

**Qualificação:** equipe de atendimento ativo, OU régua de comunicação que inclui voz, OU contrato de PABX próximo de renovação.

---

### 2.2 Martech → ADS

**Gatilhos:**
- Menciona gasto com mídia paga (Google Ads, Meta, programático)
- Reclama de dificuldade de conectar resultado de campanha com ação de comunicação
- Campanhas sazonais com alto gasto de mídia

**Talk track:** "Vocês já estão capturando e ativando a base com nossa plataforma de comunicação. A peça que falta é o topo do funil. Solvefy ADS fecha o loop — você atrai, converte em lead, e automaticamente ativa com comunicação personalizada. Tudo no mesmo ecossistema, com atribuição real de resultado."

**Qualificação:** gasto acima de R$30.000/mês em mídia paga, OU reclama que "não sabe de onde vêm os leads bons."

---

### 2.3 Cloud → CPaaS Bundle

**Lógica:** ISP que usa Solvefy Cloud para infraestrutura dos clientes é candidato natural para CPaaS — já revende conectividade, adicionar telefonia é extensão natural do portfólio.

**Talk track:** "Você já oferece cloud para seus clientes. Quantos deles também pagam por telefonia? Com CPaaS integrado ao seu portfólio, você oferece infraestrutura + telefonia em um único contrato, com billing unificado."

---

### 2.4 Full Stack Deal

**Quem é o cliente full stack:** empresa de médio/grande porte com time de marketing, TI e atendimento; ou ISP/revendedor montando portfólio completo.

**Argumento de valor:**
> "Quando os 4 produtos trabalham juntos, você tem atribuição real do ciclo completo de cliente: de qual campanha de mídia veio o lead (ADS), qual comunicação o converteu (Marketing Platform), qual ligação fechou a venda (CPaaS), tudo rodando em infraestrutura brasileira sob seu controle (Cloud). Não é integração de 4 ferramentas — é uma plataforma de crescimento."

**Desconto estratégico:** 15–20% no conjunto vs. soma dos produtos individuais, contrato mínimo de 12 meses. Objetivo: tornar a troca de qualquer componente individualmente mais custosa do que manter o ecossistema completo.

**Sequência de expansão mais comum:**
1. Marketing Platform (base existente de Disparo Pro)
2. CPaaS (quando surgir conversa de atendimento ou voz)
3. ADS (quando o cliente tem maturidade de marketing e visibilidade de funil)
4. Cloud (para clientes com TI interno ou ISPs)

---

## 3. Channel Enablement — Solvefy Cloud

### 3.1 Template de Proposta de Valor (1 página para revendedor usar com cliente)

**SOLVEFY CLOUD — Infraestrutura que você controla, em reais, no Brasil**

Para quem é: Empresas que precisam de servidores, VMs ou segurança de rede sem comprar hardware ou depender de plataformas internacionais com preço em dólar.

O que oferece:
- VMs configuráveis em minutos, sem compra de hardware
- Infraestrutura de segurança de rede gerenciada
- Data centers no Brasil: seus dados ficam no país (compliance + latência)
- Billing em reais, sem variação cambial
- Suporte em português no horário comercial brasileiro

Por que agora: A maioria das empresas paga hardware que fica ocioso 70% do tempo. Com cloud, você paga pelo que usa e escala quando precisar.

Para substituir: servidor físico envelhecendo, contrato de hosting em datacenter legado, AWS/Azure para workloads que precisam estar no Brasil.

Próximo passo: Solicite um ambiente de teste gratuito de 15 dias para seu cliente avaliar com carga real.

---

### 3.2 As 5 Perguntas Técnicas Mais Comuns

**1. "Os dados ficam no Brasil mesmo? Tenho compliance para atender."**
Sim. Todos os data centers da Solvefy Cloud são localizados no Brasil. Os dados dos clientes não saem do território nacional. Para setores regulados (saúde, financeiro, educação pública), isso é um diferencial crítico versus hyperscalers que armazenam dados fora por padrão.

**2. "Qual é o SLA de uptime?"**
99.9% de disponibilidade mensal, garantido em contrato com crédito de serviço em caso de descumprimento. Painel de status público com histórico de incidentes em tempo real.

**3. "Como funciona a migração de um servidor físico para cloud?"**
Três etapas: (1) levantamento do ambiente atual; (2) criação do ambiente espelhado na cloud com teste paralelo; (3) cutover com janela de manutenção planejada. Para a maioria das cargas: 3 a 10 dias dependendo da complexidade. Engenheiros de migração disponíveis para parceiros.

**4. "Como é a segurança? Posso ter firewall e controle de acesso?"**
Cada VM tem firewall configurável com regras de entrada/saída por porta e protocolo. Autenticação por chave SSH ou senha, VPN integrada, logs de acesso com retenção configurável. Para ambientes corporativos: VLAN privada com isolamento de tráfego entre clientes.

**5. "Qual a diferença entre Solvefy Cloud e AWS/Azure?"**
AWS e Azure são mais completos para workloads globais ou desenvolvimento de software complexo. Solvefy Cloud é a escolha certa quando: dados precisam ficar no Brasil por compliance, custo precisa ser em reais sem variação cambial, ou o cliente precisa de suporte em português com SLA em horário comercial brasileiro. As duas coisas podem coexistir.

---

### 3.3 Pricing e Empacotamento para Canal

| Pacote | Configuração | Preço ao cliente | Margem canal |
|--------|-------------|-----------------|--------------|
| Cloud Starter | 2 vCPU, 4GB RAM, 50GB SSD | R$ 180/mês | 25% |
| Cloud Business | 4 vCPU, 8GB RAM, 100GB SSD + backup diário | R$ 350/mês | 25% |
| Cloud Enterprise | 8 vCPU, 16GB RAM, 200GB SSD + backup + VPN | R$ 680/mês | 30% |
| Cloud ISP Bundle | 10 VMs Cloud Business + suporte dedicado | R$ 2.800/mês | 35% |

**Regras:** contrato mínimo de 6 meses; trial de 15 dias gratuitos ativado pelo revendedor via portal de parceiros. Não deixar o revendedor negociar preço unitário de vCPU — isso cria confusão, prolonga o ciclo e destrói margem.

---

## 4. Competitive Battlecards

### 4.1 vs. Zenvia

**Forças da Zenvia:** marca consolidada no Brasil, portfolio amplo, presença em LATAM.

**Fraquezas da Zenvia:** plataforma percebida como complexa, precificação pouco transparente, suporte lento para mid-market, crise financeira severa (ação -85% desde IPO).

**Como Solvefy vence:**
- Simplicidade: "Em quanto tempo você envia a primeira campanha com a plataforma atual? Com Solvefy, o cliente médio vai ao ar em menos de 48 horas."
- IA preditiva nativa: "O que a Zenvia chama de automação, você configura manualmente. O que a Solvefy chama de automação, o sistema aprende e otimiza sozinho."

**FIA:**
- **Fato:** Zenvia não tem módulo de IA preditiva de canal nativo — seleção de canal é configuração manual
- **Impacto:** Time de marketing gasta horas configurando regras que deveriam ser automáticas
- **Ação:** Demo do módulo de recomendação de canal. "O sistema identificou que esse segmento responde 3x mais a RCS que SMS às terças-feiras. Você não configurou essa regra — ela foi aprendida."

**Landmines em discovery:**
- "Como é o processo de onboarding com a plataforma atual? Quantas horas de configuração foram necessárias?"
- "Quando você precisa de suporte técnico, qual é o tempo médio de resposta?"

---

### 4.2 vs. Infobip

**Forças da Infobip:** player global em 60+ países, APIs bem documentadas, credibilidade em enterprise.

**Fraquezas da Infobip:** produto construído para mercado global, não otimizado para especificidades brasileiras (ANATEL, LGPD, RCS com operadoras locais); precificação em dólar com volatilidade cambial; complexidade excessiva para mid-market.

**Como Solvefy vence:**
- Especificidade local: "Infobip é uma plataforma global que atende o Brasil. Solvefy é uma plataforma brasileira que entende as peculiaridades de comunicação no Brasil."
- Custo em reais: "Quando o dólar sobe 15%, o custo da plataforma deles sobe junto. Com Solvefy, o que foi aprovado é o que você paga."
- Velocidade: deals de Infobip em mid-market levam 3–6 meses para go-live. Solvefy: 2–4 semanas.

**FIA:**
- **Fato:** Infobip cobra em dólar. Em 2024, o dólar variou mais de 30% no Brasil.
- **Impacto:** Uma empresa com R$50.000/mês de orçamento pode ver o custo subir para R$65.000 sem ter aprovado qualquer aumento.
- **Ação:** Perguntar em discovery "como lidam com variação cambial?" e mostrar contrato em reais com previsibilidade total.

**Landmines em discovery:**
- "Vocês têm operação fora do Brasil que justifique uma plataforma global?"
- "Como seu time financeiro lida com a variação cambial no budget de comunicação?"

---

### 4.3 vs. Sinch

**Forças da Sinch:** forte em SMS A2P e verificação de identidade, portfolio técnico maduro para desenvolvedores, presença global.

**Fraquezas da Sinch:** foco muito técnico — produto para desenvolvedores, não para times de marketing; interface fraca para criação e gestão de campanhas; sem módulo de IA para otimização de campanha; RCS limitado no Brasil.

**Como Solvefy vence:**
- Usuário-alvo: "Sinch é uma plataforma para desenvolvedores implementarem comunicação. Solvefy é uma plataforma para times de marketing rodarem campanhas. Se seu time de marketing precisa de autonomia sem depender de TI, a escolha é clara."
- Análise e otimização: "Sinch te diz se a mensagem foi entregue. Solvefy te diz qual mensagem, para qual segmento, em qual canal, gerou mais resultado — e otimiza automaticamente."

**FIA:**
- **Fato:** Para usar Sinch em sua capacidade plena, você precisa de um desenvolvedor que conheça a API.
- **Impacto:** Time de marketing fica dependente de TI para qualquer mudança de campanha — uma mudança simples de texto vira um ticket que leva dias.
- **Ação:** Demo da interface de criação de campanha. Mostrar quanto tempo leva para um usuário não técnico criar, segmentar e agendar uma campanha completa sem uma linha de código.

**Landmines em discovery:**
- "Quem cria e envia as campanhas na sua empresa hoje — um desenvolvedor ou o time de marketing?"
- "Vocês têm visibilidade sobre o resultado das campanhas além de taxa de entrega?"

---

## 5. Sales Collateral Necessário

### Prioridade 1 — Bloqueadores de venda (até 7 de abril)

| Material | Produto | Responsável |
|----------|---------|-------------|
| One-pager de proposta de valor unificada Solvefy | Todos | Marketing |
| Deck de apresentação comercial | Um por produto | SE + Marketing |
| Tabela de preços oficial | Um por produto | Produto + Comercial |
| Ficha técnica (1 página) | Um por produto | SE + Marketing |
| FAQ de objeções mais comuns (interno) | Um por produto | SE |

### Prioridade 2 — Habilitadores de avaliação técnica (até 21 de abril)

| Material | Produto | Responsável |
|----------|---------|-------------|
| Demo environment configurado | Um por produto | SE + Produto |
| Template de POC com critérios de sucesso | Marketing Platform + Cloud + CPaaS | SE |
| Documentação técnica de integração (API) | Marketing Platform + CPaaS | Engenharia |
| Security overview document | Todos | SE + Engenharia |
| Caso de uso de referência por setor | 2–3 por produto | SE + CS |

### Prioridade 3 — Habilitação de canal — Cloud (até 5 de maio)

| Material | Responsável |
|----------|-------------|
| Partner onboarding kit | SE + Channel |
| 1-pager de valor para revendedor usar com cliente | SE + Marketing |
| Guia de perguntas e respostas técnicas | SE |
| Tabela de margem e empacotamento | Comercial |
| Treinamento gravado de produto (30–45 min) | SE |
| Portal de parceiros com materiais centralizados | Produto |

### Prioridade 4 — Materiais competitivos (até 5 de maio)

| Material | Responsável |
|----------|-------------|
| Battlecard interno vs. Zenvia, Infobip, Sinch | SE |
| Comparativo de produto (feature matrix) vs. top 3 | SE + Produto |
| Case de sucesso de cliente existente (mínimo 1 por produto) | CS + Marketing |
| Calculadora de ROI/TCO (Marketing Platform + Cloud) | SE |
| Email templates de follow-up por estágio do funil | Marketing |

### Prioridade 5 — Pós-venda e expansão (até 15 de maio)

| Material | Responsável |
|----------|-------------|
| Guia de cross-sell para AEs e CSMs | SE |
| Deck de expansão de conta (upsell) | SE + CS |
| Onboarding checklist por produto | CS |
| Benchmark de time-to-value por produto | CS + SE |

### Timeline de Produção

| Período | Entrega |
|---------|---------|
| Semana 1–2 (até 7 abr) | One-pagers, FAQ de objeções, demo environments funcionais |
| Semana 3–4 (até 21 abr) | Decks comerciais, template de POC, partner kit Cloud, battlecards |
| Semana 5–6 (até 5 mai) | Cases de sucesso, guia de cross-sell, tabelas de preço, security overview |
| Semana 7 (5–14 mai) | Revisão final, treinamento interno, dry-run de demo com time comercial |
| **15 mai — Launch** | Prioridades 1–2 finalizadas; Canal habilitado com Prioridade 3; 4–5 em versão beta |
