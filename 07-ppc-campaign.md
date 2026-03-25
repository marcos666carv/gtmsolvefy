# Solvefy — Estratégia de Paid Media: Lançamento de Marca Unificada
**Período:** 15 de maio a 30 de junho de 2026 (47 dias)

---

## Sumário Executivo

O lançamento da marca Solvefy consolida 4 produtos com ICPs distintos sob um guarda-chuva único. A estratégia de paid media precisa cumprir três objetivos simultâneos:

1. Estabelecer reconhecimento da marca Solvefy no mercado B2B brasileiro
2. Preservar o volume de geração de leads dos produtos individuais durante a transição
3. Criar pipeline qualificado para cada vertical com eficiência de CAC sustentável

**Raciocínio central:** LinkedIn captura demanda de alto valor onde o cargo é o sinal de compra; Google captura demanda ativa que já existe; Meta e YouTube criam contexto de marca que reduz o CPC das outras plataformas ao longo do tempo.

---

## 1. Budget Recommendation

### Budget Total: R$ 180.000

**Split por Plataforma:**

| Plataforma | Budget (R$) | % | Justificativa |
|---|---|---|---|
| LinkedIn Ads | 81.000 | 45% | ICP B2B mais preciso — cargo é o sinal de compra |
| Google Search | 54.000 | 30% | Captura demanda ativa; concorrentes já têm presença |
| Google Display + YouTube | 18.000 | 10% | Brand awareness e retargeting |
| Meta | 18.000 | 10% | Remarketing + lookalike da base existente |
| Microsoft Ads | 9.000 | 5% | Audiência corporativa IT; CPC menor |

**Split por Produto:**

| Produto | Budget (R$) | % | Lógica |
|---|---|---|---|
| Marketing Platform | 54.000 | 30% | Mercado maior, mais concorrência, mais keywords de intenção |
| Cloud | 45.000 | 25% | Ciclo de venda longo — precisa de mais touchpoints |
| CPaaS | 36.000 | 20% | Nicho menor, keywords caras — LinkedIn mais eficiente |
| ADS | 27.000 | 15% | ICP parcialmente se autoatende; Search capta bem |
| Brand Institucional | 18.000 | 10% | Campanhas que vendem "Solvefy" — não um produto |

**Justificativa do volume:** Para competir contra Zenvia, Infobip e Sinch (budgets estimados em R$500k–1M/mês), menos de R$120k no período produz impression share insuficiente para criar memória de marca. R$180k permite frequência mínima de 3x por segmento no LinkedIn e cobertura de 80%+ das keywords de intenção no Search.

---

## 2. Arquitetura de Campanhas

### Estrutura de Funil (por produto, todas as plataformas)

```
TOPO (Awareness)
   Objetivo: Impressões, Alcance, Brand Recall
   Budget fixo, CPM otimizado
   Audiência: Broad por cargo/setor, sem pixel de retargeting

MEIO (Consideração)
   Objetivo: Cliques, Engajamento, Visitas à página de produto
   CPC otimizado, exclusão de converters
   Audiência: Engajou com topo + visitantes do site

FUNDO (Conversão)
   Objetivo: Lead form, Demo request
   tCPA (LinkedIn), Max Conversions (Google)
   Audiência: Visitou página de produto — retargeting quente
```

> **Regra de isolamento de budget:** Campanhas de awareness nunca compartilham budget com campanhas de conversão. Se compartilharem, o algoritmo sempre prioriza conversão e quebra a lógica de funil.

### Bidding Strategy por Fase

**Fase 1 — Lançamento (15–31 mai): Manual com tetos de CPC**
Sem histórico de conversão, tCPA e Max Conversions entregam de forma errática e inflam o CPL.
- LinkedIn: CPC manual, teto R$35 para awareness / R$45 para conversão
- Google Search: Max Cliques com teto por grupo de anúncio
- Meta: Cost per result manual

**Fase 2 — Otimização (1–15 jun): Transição para automated bidding**
Após 30–50 conversões por campanha:
- LinkedIn: tCPA baseado nas primeiras conversões reais
- Google Search: Max Conversions → tCPA quando volume permitir

**Fase 3 — Escala (16–30 jun): Portfolio bid strategies**
- Google: Portfolio tCPA compartilhado por produto
- LinkedIn: Escalar budget em campanhas com CPL 20%+ abaixo do target

### Benchmarks CPL e CPC — Mercado B2B Brasil 2026

| Produto | Plataforma | CPC Esperado | CPL Esperado | CVR Landing Page |
|---|---|---|---|---|
| Marketing Platform | LinkedIn | R$20–38 | R$280–450 | 6–9% |
| Marketing Platform | Google Search | R$8–18 | R$180–320 | 8–12% |
| Cloud | LinkedIn | R$22–40 | R$320–550 | 5–8% |
| Cloud | Google Search | R$10–22 | R$200–380 | 7–10% |
| CPaaS | LinkedIn | R$25–45 | R$380–650 | 4–7% |
| CPaaS | Google Search | R$12–28 | R$250–420 | 6–9% |
| ADS | LinkedIn | R$18–32 | R$220–380 | 7–10% |
| ADS | Google Search | R$6–14 | R$130–260 | 9–14% |

---

## 3. LinkedIn Ads — Campanha Prioritária

**Por que LinkedIn lidera:** Os 4 produtos têm ICPs definidos por cargo e setor. No LinkedIn é possível alcançar todos os CMOs de empresas com 200+ funcionários no Brasil sem depender de intenção de busca.

### Estrutura das 6 Campanhas LinkedIn

**Campanha 1 — Brand Launch (R$12.000 | 15–31 mai)**
Objetivo: Brand Awareness / Video Views | Tipo: Sponsored Content Video
Audiência: C-level, Diretores, Gerentes Sênior em empresas 200–10.000 funcionários no Brasil
CPM esperado: R$55–75 | Impressões: 160.000–220.000

**Campanha 2 — Marketing Platform (R$20.000)**
Objetivo: Lead Generation | Tipo: Sponsored Content + Lead Gen Forms
- Audiência A: CMO, VP Marketing, Diretor Marketing, Head de Growth — setores E-commerce, SaaS, Varejo, Saúde
- Audiência B: Visitantes do site + Customer Match de leads não convertidos
- Anúncios: Carrossel de canais / Vídeo case / Single image + LGF
- CPL alvo: R$380 | Leads esperados: 52–60

**Campanha 3 — Solvefy Cloud (R$18.000)**
Objetivo: Lead Generation + Website Visits | Tipo: Sponsored Content + Message Ads
- Audiência A: CTO, Diretor TI, IT Manager, Gerente Infraestrutura — ISPs, Educação, Saúde, Financeiro
- Audiência B: InMail para IT Directors com mensagem personalizada por vertical
- CPL alvo: R$420 | Leads esperados: 42–50

**Campanha 4 — CPaaS (R$14.000)**
Objetivo: Lead Generation | Tipo: Sponsored Content + Conversation Ads
- Audiência: Diretor Operações, Gerente Contact Center, Head CX, Telecom Manager — 500+ funcionários
- Inclui competitor interest targeting (seguidores de Zenvia, Infobip, Sinch)
- CPL alvo: R$500 | Leads esperados: 28–35

**Campanha 5 — Solvefy ADS (R$10.000)**
Objetivo: Lead Generation | Tipo: Sponsored Content
- Audiência: Performance Marketing Manager, Media Buyer, Gerente de Tráfego Pago, Growth Manager
- CPL alvo: R$280 | Leads esperados: 35–45

**Campanha 6 — Retargeting Global (R$7.000)**
Objetivo: Website Conversions
Audiência: Visitantes do site nos últimos 30 dias, segmentados por página de produto visitada
Mensagem dinâmica: "Você viu a Solvefy [Produto]. Quer ver uma demonstração ao vivo?"
CPL alvo: R$220 | Leads esperados: 30–40

### Resumo LinkedIn

| Campanha | Budget | Leads | CPL Alvo |
|---|---|---|---|
| Brand Launch | R$12.000 | N/A | — |
| Marketing Platform | R$20.000 | 52–60 | R$380 |
| Cloud | R$18.000 | 42–50 | R$420 |
| CPaaS | R$14.000 | 28–35 | R$500 |
| ADS | R$10.000 | 35–45 | R$280 |
| Retargeting | R$7.000 | 30–40 | R$220 |
| **Total** | **R$81.000** | **187–230** | **R$352 blended** |

---

## 4. Google Ads

### Estrutura de Keywords

**Princípio de isolamento por intenção:** Cada grupo de anúncio representa uma intenção específica. Keywords de marca ficam em campanhas Brand isoladas. Match type: Exact para alta intenção, Phrase para variação de query, Broad somente após fase 2 com Smart Bidding maduro e negative lists extensas.

**Campanha Brand (R$5.400)**
"solvefy", "solvefy marketing", "solvefy cloud", "solvefy ads", "solvefy cpaas"
CPC: R$2–6. Regra: nunca deixar sem budget — concorrentes podem estar fazendo brand bidding.

**Campanha Marketing Platform (R$16.000)**
- Grupo Plataforma: `[plataforma de marketing digital]`, `[software de marketing automation]`, `"plataforma de automação de marketing"`
- Grupo Canais: `[disparos de sms para empresas]`, `[sms marketing em massa]`, `"api rcs business"`
- Grupo Competidores: `[alternativa zenvia]`, `"concorrente infobip"`, `zenvia preço` — LP de comparativo dedicada
- CPL esperado: R$200–320 | Leads: 50–80

**Campanha Cloud (R$14.000)**
- Grupo Cloud Geral: `[cloud para empresas]`, `"infraestrutura em nuvem"`, `"migração para cloud"`
- Grupo ISP: `[software para provedores de internet]`, `"plataforma gestão isp"`, `gestão de assinantes isp`
- Grupo Verticais: `"cloud para instituições de ensino"`, `cloud hospitalar`
- CPL esperado: R$220–380 | Leads: 37–63

**Campanha CPaaS (R$11.000)**
- Grupo API: `[api de comunicação para empresas]`, `[cpaas brasil]`, `"plataforma omnichannel"`
- Grupo Contact Center: `[software para contact center]`, `"ccaas brasil"`, `"solução de atendimento multicanal"`
- CPL esperado: R$280–450 | Leads: 24–39

**Campanha ADS (R$7.600)**
- Grupo Plataforma: `[plataforma de gestão de tráfego pago]`, `"gerenciador de campanhas"`, `ferramentas para gestor de tráfego`
- Grupo Automação: `[automação de campanhas google ads]`, `"bid management software"`, `"otimização de roas"`
- CPL esperado: R$150–280 | Leads: 27–50

**Negativas compartilhadas (todas as campanhas):** grátis, gratuito, free, open source, github, curso, tutorial, o que é, como funciona, emprego, vaga

### Display e Retargeting (R$18.000)

**Display Retargeting (R$8.000):** Visitantes dos últimos 30 dias por produto.
Sequência: Dia 1–3 (produto), Dia 4–7 (prova social), Dia 8–14 (urgência/demo).
Frequência cap: 3x/semana. Exclusão de converters.

**Similar Audiences (R$5.000):** Semente = Customer Match da base de clientes.
Placements em: Portal do CIO, TI Inside, Canaltech, Olhar Digital.

**Competitor Display (R$5.000):** Custom Intent Audiences com URLs dos concorrentes.
Mensagem: "Compare antes de decidir" com LP de comparativo.

### YouTube (R$9.000)

**Brand Film (R$5.000):** TrueView In-Stream skippável, 60–90s + versão bumper 15s.
Audiência: Custom Intent com termos dos concorrentes + In-market B2B software.
KPI: View rate >30%.

**Product Demos (R$4.000):** 3 vídeos de 30–45s (Marketing Platform, Cloud, CPaaS).
Os primeiros 5s precisam ser impactantes (janela unskippable). Retargeting de visitantes do site.

---

## 5. Previsão de Performance — 47 Dias

### Projeção de Volume

| Produto | Plataforma | Budget | Leads | MQLs | SQLs |
|---|---|---|---|---|---|
| Marketing Platform | LinkedIn | R$20.000 | 44–56 | 15–20 | 6–8 |
| Marketing Platform | Google Search | R$16.000 | 50–80 | 18–28 | 7–11 |
| Cloud | LinkedIn | R$18.000 | 38–50 | 13–18 | 5–7 |
| Cloud | Google Search | R$14.000 | 37–63 | 13–22 | 5–9 |
| CPaaS | LinkedIn | R$14.000 | 28–35 | 10–12 | 4–5 |
| CPaaS | Google Search | R$11.000 | 24–39 | 8–14 | 3–6 |
| ADS | LinkedIn | R$10.000 | 35–45 | 12–16 | 5–6 |
| ADS | Google Search | R$7.600 | 27–50 | 9–18 | 4–7 |
| Retargeting / Display | Múltiplas | R$27.000 | 55–80 | 19–28 | 8–11 |
| Brand Launch | LinkedIn + YT | R$21.000 | — | — | — |
| **Total** | | **R$158.600** | **338–498** | **117–176** | **47–70** |

**Impressões totais estimadas:** 4,5M–7,2M

### CAC Paid por Produto

| Produto | Budget Pago | SQLs | CAC Paid | CAC Target Sustentável |
|---|---|---|---|---|
| Marketing Platform | R$36.000 | 13–19 | R$1.895–2.769 | R$2.500 |
| Cloud | R$32.000 | 10–16 | R$2.000–3.200 | R$3.000 |
| CPaaS | R$25.000 | 7–11 | R$2.273–3.571 | R$3.500 |
| ADS | R$17.600 | 9–13 | R$1.354–1.956 | R$2.000 |

> Esses CACs são do período de lançamento — historicamente 40–60% mais altos que o steady state após 6 meses.

### Pipeline e Break-even

| Produto | SQLs | Ticket Médio Anual (est.) | Pipeline (R$) | Receita Esperada 30% (R$) |
|---|---|---|---|---|
| Marketing Platform | 13–19 | R$36.000 | R$468k–684k | R$140k–205k |
| Cloud | 10–16 | R$48.000 | R$480k–768k | R$144k–230k |
| CPaaS | 7–11 | R$72.000 | R$504k–792k | R$151k–238k |
| ADS | 9–13 | R$24.000 | R$216k–312k | R$65k–94k |
| **Total** | **39–59** | | **R$1,67M–2,56M** | **R$500k–767k** |

**Break-even:** R$180.000 investido / 30% de fechamento = R$600.000 em pipeline necessário.
Pipeline esperado: R$1,67M–2,56M — **margem de segurança de 2,8x–4,3x**.

> **Caveat crítico:** Pipeline gerado em 47 dias raramente fecha em 47 dias. Ciclo de vendas B2B SaaS brasileiro: 30–90 dias (SMB), 90–180 dias (enterprise). O ROI real se materializa em Q3/Q4 2026.

---

## 6. Requisitos de Criativos

### Lista de Assets a Produzir

| Tipo | Qtd | Plataforma | Prioridade |
|---|---|---|---|
| Vídeo brand film (60–90s + bumper 15s) | 2 | YouTube + LinkedIn | Alta |
| Vídeos product demo (30–45s) | 3 | YouTube + LinkedIn | Alta |
| Carrossel LinkedIn (5–7 slides) | 4 | LinkedIn | Alta |
| Single Image LinkedIn | 5 | LinkedIn | Alta |
| Display responsivo | 4 sets | Google Display | Média |
| HTML5 sequencial retargeting | 3 peças | Google Display | Média |
| Stories/Reels retargeting | 8 peças | Meta | Média |
| Feed Meta | 4 peças | Meta | Média |
| **Total** | **~60 assets** | | |

**Prazo de produção:** Início até 15 de abril. Aprovação e upload até 8 de maio. 7 dias de buffer antes do go-live.

---

## 7. Checklist de Setup Técnico

### Tracking
- [ ] Google Tag Manager instalado em todas as páginas
- [ ] Google Ads Conversion Tracking por produto (lead form, demo request, trial)
- [ ] LinkedIn Insight Tag instalado e verificado
- [ ] Meta Pixel com eventos de conversão por produto
- [ ] GA4 com eventos customizados por produto
- [ ] UTM structure: `utm_source / utm_medium / utm_campaign / utm_content / utm_term`

### Audiências
- [ ] Customer Match lists carregadas no Google, LinkedIn e Meta
- [ ] Remarketing audiences criadas por produto (por URL de página)
- [ ] LinkedIn Matched Audiences configuradas

### Landing Pages
- [ ] LP específica por produto (não enviar tráfego para homepage)
- [ ] Formulário máximo 5 campos: nome, email, empresa, cargo, mensagem
- [ ] Velocidade de carregamento <3s (PageSpeed Insights)
- [ ] Versão mobile validada

### Estrutura de Conta
- [ ] Campanhas isoladas por produto
- [ ] Negative keyword lists compartilhadas aplicadas
- [ ] Standard delivery (sem entrega acelerada)
- [ ] Alertas de anomalia: CPA 50% acima do target → notificação automática
