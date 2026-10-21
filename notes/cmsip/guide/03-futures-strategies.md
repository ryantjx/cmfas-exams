---
id: '3'
kind: 'chapter'
num: 3
part: null
title: 'Futures Strategies'
order: 3
slug: 'chapter-3-futures-strategies'
---

# Chapter 3 — Futures Strategies

Who trades futures, how orders behave, which spread isolates which relationship, and how to size a hedge. This is the most calculation-heavy chapter after Options.

## Learning Objectives

The candidate should be able to:

- Understand and explain the participants and their roles in the futures market.
- Explain the various types of futures orders, futures trades and trading strategies.
- Describe and explain the different types of spread trades.
- Explain how to identify and manage financial risks using futures.
- Describe and demonstrate how to develop and manage hedging programmes for various cash positions.
- Describe and demonstrate how to develop and manage hedging for short-term and long-term interest rate risks.
- Explain how to manage a hedge programme for equity risk exposures.
- Describe and demonstrate arbitrage strategies using short-term and long-term interest rate futures.

## 3.1 Market Participants

The main participants are:

- **a.** Hedgers
- **b.** Speculators
- **c.** Market makers
- **d.** Proprietary trading firms
- **e.** Arbitrageurs
- **f.** Portfolio managers
- **g.** Hedge funds
- **h.** Central banks, sovereign funds and regulators

As volatility rises, participants with different motivations turn to derivatives to hedge or to maximise return. The same firm can act as speculator, hedger and arbitrageur at once, and knowing which group is driving the market helps decide whether to follow or oppose the direction. Growth in hedge funds and alternative assets has driven innovative derivative strategies, and growth in wealth management has pushed institutions to offer structured products built from futures and other derivatives.

### 3.1.1 Hedgers

Hedgers hold a position in the underlying asset or commodity and use futures to reduce or limit the risk of an adverse price change. Producers such as farmers sell futures on the crop they grow to hedge a price fall, which makes long-term planning easier. Industrial users buy futures to fix input costs — a food processor fixing corn or wheat, an airline hedging fuel, a jeweller hedging gold and silver — so they can plan on a fixed cost for core supplies and stabilise the price passed to customers.

### 3.1.2 Speculators (Individual Traders)

Many speculators are individuals trading their own funds, expressing a view on a market's direction. Electronic trading has levelled the field by improving access to price and trade information; speed and ease of execution, with modern risk management, give individuals access to markets and strategies once reserved for institutions.

### 3.1.3 Market Makers

Market makers are trading firms contractually obliged to provide liquidity, continually quoting both bids and offers, usually in exchange for reduced trading fees. Electronic market makers now supply much of the liquidity that lets large transactions occur without moving price substantially. They profit from capturing the **spread** — the small difference between bid and offer across many transactions — or by trading related futures markets where they see price or profit opportunities.

### 3.1.4 Proprietary Trading Firms

**Prop shops** profit directly from their traders' activity. They supply education and capital so traders can execute many trades a day, gaining more leverage than they would on their own account and access to research and strategies developed by larger institutions.

Some large banks retain proprietary units. The most famous loss is **Barings in 1995**, where a single proprietary trader's excessive risk-taking on **Nikkei 225 futures** accumulated losses **twice the bank's capital**. Poor controls and supervision led several banks to close proprietary units, but losses from distressed debt, CDOs, CDS and **Delta One** instruments continued to be reported well after the crisis.

> **Delta One.** Desks provide OTC derivative structures pegged one-to-one against an underlying, usually an index. The bank trades the underlying and related derivatives — sometimes swaps with other banks — seeking arbitrage profit or profit from holdings moving against the direction of the structure sold. Trades are typically very large because margins are extremely fine, and because most are OTC they are hard to monitor or regulate.

Financial institutions also hedge their sale of derivatives to institutional and private clients through futures and options, and ETF and ETN issuers manage daily offsetting futures and options positions against their long and short baskets through the proprietary desk.

### 3.1.5 Arbitrageurs

Arbitrageurs seek riskless profit from disequilibrium between cash and futures markets. They take no directional bet, instead exploiting price differences between related markets or markets with a fixed relationship — the gap between implied and market value. They rely on computer systems and models, because windows close very fast: computers spot the opportunity and arbitrage it away. Arbitrageurs improve liquidity and keep the pricing relationship between futures and the underlying consistent, and they usually work for market makers and proprietary firms.

### 3.1.6 Portfolio Managers

A portfolio or investment manager invests or hedges the assets of a mutual fund, ETF or closed-end fund, implementing the strategy and managing day-to-day trading. Futures are often used to raise or lower overall market exposure **without disrupting a portfolio balance that took significant effort to build**.

### 3.1.7 Hedge Funds

The deep, liquid futures market lets hedge funds execute large transactions and adjust exposure without changing security holdings. A hedge fund is a managed portfolio using advanced strategies to maximise return, absolutely or against a benchmark. The name is historical: early funds shorted the market to offset bear-market risk. On occasion hedge funds have exploited market weakness by shorting futures collectively, adding sharp downward pressure to both futures and spot.

### 3.1.8 Sovereign Funds, Central Banks and Regulators

Collective selling by speculators and hedge funds has sometimes forced governments to intervene in spot and futures markets to counterbalance speculative forces and stabilise the market. In severe cases, tightening liquidity, capital flows and trading activity has been used to break the momentum in both markets.

During the **1997 Asian Currency Crisis**, several Asian currencies and equity markets were driven down under persistent heavy selling, but the speculation was broken when some governments intervened in spot and futures markets and introduced **capital and currency exchange controls**, locking speculators into short currency positions they could not unwind while incurring interest cost.

Day to day, many governments manage their currency within a trading band and participate in spot and futures markets to influence its direction.

## 3.2 Types of Orders on the SGX

Most order types are common across futures and stock exchanges.

| Order type | Behaviour |
|---|---|
| **Limit order** | Carries a specified price and quantity — the price the trader will pay, or wants to receive, for one contract. |
| **Market-to-limit (MTL) order** | Has a validity time and can be entered as Fill-and-Kill (FAK), Fill-or-Kill (FOK), or stored as a Day or Good-Till-Cancelled (GTC) order. A **store** order leaves any unfilled quantity in the book at that price. If there is no price on the opposite side, the order is stored as a limit **one tick better** than the best price on the same side; if no such price exists it is rejected. Entered while orders are continuously matched, it matches at the best possible price. |
| **Market order** | Entered while orders are continuously matched, it matches at the best possible price. Entered when orders are **not** continuously matched, it takes the **Equilibrium Price (EP)** as its price, and its price therefore changes if the EP changes. |
| **Stop order (limit, MTL or market)** | Hidden until its trigger is met, then converted to a limit, MTL or market order. Four parameters define the trigger: **Stop Series** (the instrument the Stop Price is compared to); **Stop Price** (the level the price condition must meet); **Stop Price Reference Type** (Bid, Ask or Last); and **Stop Price Condition** (≥ or ≤ versus that reference). |
| **Market-if-touched (MIT) order** | An order to buy or sell a contract **below** or **above** the market, held until the trigger price is touched and then submitted as a market order. It resembles a stop, except that an **MIT sell is placed above** the market and a **stop sell below** it. Hidden until converted. |
| **Session state order (SSO)** | Triggers entry of an order into the book only when the market transitions into a new session state. Participants query valid session states and select one. SSOs and their triggered orders are invisible until triggering, are **deleted at end of day** if the transition never occurs (for example because of a trading halt or invalid state), and **may not be GTC**. |

### 3.2.1 Other Types of Orders — Packs and Bundles

**Packs and bundles** were introduced by **CME Group** for Eurodollar contracts; NYSE Euronext LIFFE offers them for STIR Euribor and Sterling futures. They buy or sell a series of futures representing a segment along the yield curve, creating or liquidating positions along the curve and gaining exposure to longer-term rates **without legging risk** — the risk of failing to complete one leg. The advantage is execution at a single price: no multiple orders per contract, lower overall cost, and no unfilled legs.

- A **pack** buys a predefined number of contracts in **four consecutive delivery months**. Eurodollar packs are the simultaneous purchase of an equally weighted, consecutive series of four Eurodollar futures, executed in a single transaction so partial fills cannot occur.
- A **bundle** buys a predefined number of contracts in **each consecutive quarterly month for two or more years**, across the standard **2, 3 or 5-year** periods. There are **no 1-year bundles** because those are effectively packs. The first contract is typically the first quarterly contract in the strip, but a bundle can start at any quarterly contract.

Packs and bundles are quoted on the **average net change** in value of all constituent Eurodollar contracts since the prior settlement, in increments of **¼ of 1 basis point (0.01%)**.

## 3.3 Types of Trades and Strategies

- **a. Outright trades.** Buy or sell a single futures contract, wagering the underlying rises or falls. Familiar and easy to understand.
- **b. Hedging.** Sell a futures contract to offset a cash position. A holder of a large US equity portfolio who does not want to sell for tax reasons but fears a decline can sell S&P 500 index futures.
- **c. Basis trades.** An arbitrage strategy taking opposing long and short positions in two securities to profit from convergence. A trader could be long 10-year US Treasury **bond futures** and short physical 10-year Treasury **bonds**, expecting undervalued futures to appreciate relative to the overpriced bond. Making the trade worthwhile requires substantial **leverage** to enlarge the positions.
- **d. Spread trades.** See 3.4.

## 3.4 Spread Trades

A spread normally needs less margin than two unrelated outright positions but is not risk-free: correlation can break, liquidity can vanish, and one leg may fill without the other. Types:

- **Intra-commodity / intra-delivery** — same commodity and market, different delivery months.
- **Inter-commodity** — related commodities, e.g. crude against refined products.
- **Intra-market** — related contracts on the same exchange.
- **Inter-market** — similar contracts on different exchanges.
- **Calendar / horizontal** — same underlying, different months.

For a calendar spread, long the near month and short the deferred is generally a bullish view on the near-versus-deferred relationship; short near and long deferred is bearish. Profit depends on the **change in the spread**, not simply on whether the underlying rises.

### 3.4.1 Calendar Spread

With the S&P E-mini index at 2,344.00 on 19 April 2020, June at 2,335 and December at 2,330, a long June / short December spread requires initial margin of **USD 70,050 + USD 69,900 = USD 139,950** — margins are not netted across the legs.

| Scenario | Index move | June | December | Spread P&L | Return on margin |
|---|---|---|---|---|---|
| 1 | +4%; June +6% to 2,475; Dec +5% to 2,447 | Gain | Loss | **+USD 70,000 − USD 58,500 = +USD 11,500** | **+8.2%** |
| 2 | +2.5%; June +3% to 2,405; Dec +3.5% to 2,412 | Gain | Loss | **+USD 35,000 − USD 41,000 = −USD 6,000** | **−4.3%** |
| 3 | −4% with a circuit breaker; June −7.5% to 2,160; Dec −9% to 2,120 | Loss | Gain | **−USD 87,500 + USD 105,000 = +USD 17,500** | **+12.5%** |

Read the results carefully: scenario 3 makes money on a **falling** market because the deferred leg falls further, so the spread widens. The spread, not the direction, is what is being traded.

A currency example: E-micro EUR/USD, 12,500 EUR per contract, tick 0.0001 USD. Selling the near leg at 1.1810 and buying the far at 1.1866, then closing at 1.1750 and 1.1828, gives **+USD 7,500 and −USD 4,750, net +USD 2,750**.

### 3.4.2 Butterfly Spread

Four legs across three maturities with weights **+1, −2, +1**. It targets curvature or relative richness and is more market-neutral than an outright.

#### 3.4.2.1 Buying a Butterfly

**Gold butterfly.** On 6 January 2020 the April, June and August contracts stood at 1,176.3, 1,179.0 and 1,181.7; by 21 April they were 1,287.4, 1,289.1 and 1,292.4. The two spreads widened to **+1.00 and +0.60**, a net **+1.60**. With 100 oz per contract and 100 contracts:

$$ 100 \times 1.60 \times 100 = \text{USD } 16{,}000 $$

The same +1.60 recurred on 24 April after the French election.

#### 3.4.2.2 Selling a Butterfly

**Eurodollar sell-butterfly** on 8 February 2020: short 1 Jun-20 at 98.8000, closing at 98.7350; long 2 Dec-20 at 98.5325, closing at 98.5550; short 1 Jun-21 at 98.3250, closing at 98.3800. The results are **+0.0875, −0.0325** on two contracts, and **−0.0550**, giving a net **+0.0550 = 5.5 ticks**. One basis point is one tick worth **USD 25**:

$$ 5.5 \times 25 = \text{USD } 137.50 $$

#### 3.4.2.3 The Double Butterfly

A butterfly is bought and another sold in staggered fashion, with the second and third legs of the first butterfly being the first and second legs of the second.

| Stage | Near | Mid | Mid | Distant |
|---|---|---|---|---|
| Buy first butterfly | Buy 1 | Sell 2 | — | Buy 1 |
| Sell second butterfly, matched to the two mid-term sells | — | — | Buy 2 | Sell 1 |
| **Overall structure** | **Buy 1** | **Sell 3** | **Buy 3** | **Sell 1** |

### 3.4.3 Condor Spread

A condor also combines a bear and a bull spread, but the four expiry dates are **all different**, with equally distributed delivery months and a ratio of **+1 : −1 : −1 : +1**. Buying a condor means buying the nearest month, selling the next, selling the next, and buying the farthest. It typically has a wider but flatter profit zone than a butterfly.

A Eurodollar condor on 8 February 2017: May 98.8450, June 98.8000, September 98.6675, Mar-21 98.4350. By 20 April they stood at 98.7875, 98.7300, 98.6250 and 98.4650. The near-to-mid move is **+1.25 ticks**, the mid-to-distant **+7.25 ticks**, net **+8.5 ticks**:

$$ 8.5 \times 25 = \text{USD } 212.50 $$

The tick value is derived from

$$ 0.01 \times 0.01 \times 1{,}000{,}000 \times \frac{90}{360} = \text{USD } 25 $$

### 3.4.4 Other Spread Trades

#### 3.4.4.1 TED Spread

The **TED spread** compares Treasury bill and Eurodollar (LIBOR) pricing. It is a **credit and liquidity** indicator, not a pure interest-rate measure: as the spread widens, default risk is perceived to rise and investors prefer safer assets; as it narrows, perceived default risk falls. Three-month T-bill futures were delisted from the CME, so the spread is now measured between the T-bill rate and 3-month USD LIBOR.

#### 3.4.4.2 Inter-Product or Inter-Commodity Spread

Takes advantage of the value differential between two or more related commodities or financial products influenced by similar factors. A trader may look at the spread between two financial products — US T-bills and Eurodollar — as rates move, or between two related commodities such as **gasoline and heating oil** as crude moves. Rather than taking exposure to one product, the trader exploits the greater sensitivity and reaction of one relative to the other.

## 3.5 Hedging and Portfolio Management

Forwards and futures were created to hedge the future delivery price of a commodity. The same principle hedges or partially hedges a fall in portfolio value.

### 3.5.1 Identifying and Measuring Risk

Hedging reduces risk: an adverse move is contained or profit protected, but a favourable move has capped profit. Hedging does not eliminate price risk — it converts price risk into **basis risk** between the underlying and the hedging instrument, confining the final price to a determinable range.

In portfolio management, hedging is used to:

- **a.** smooth cash flows;
- **b.** simplify financial planning;
- **c.** reduce working capital requirements;
- **d.** allow more efficient product pricing; and
- **e.** manage inventory more efficiently.

Before hedging, evaluate whether the likelihood and impact justify the cost and whether the hedge is dependable. Some subjectivity remains. Six questions structure the decision:

| Factor | Question | Interpretation |
|---|---|---|
| **1. Probability of negative change** | What is the probability of the price or rate change? What is the likelihood of the events that drive greater volatility? | If such events are highly likely, or the historical probability is high, the need to hedge is greater. |
| **2. Probable size of negative change** | What is the likely size of the change? What was the past record? | A small change may need only a small partial hedge, or none. A historically large change may justify a hedge. |
| **3. Overall impact of negative change** | What is the risk value of not hedging — small or large? | If likelihood is small but impact catastrophic, hedging may still be worth it. A **black swan** rarely happens but causes mayhem when it does. |
| **4. Transaction costs** | What are the brokerage, financing, initial and variation margin costs? How does the cost compare with the risk value? | If cost is too high relative to probability or size of loss, do not hedge. Small diversified global portfolios face currency risk that may not be worth fully hedging. |
| **5. Percentage of value to be hedged** | What percentage of principal does the transaction cost represent? | Given the probability, hedging only part of the portfolio may be more cost-efficient. |
| **6. Assumed basis risk** | What is the basis risk for the hedge? | Basis risk is the likelihood the hedge does not fully work, because the asset and the hedge instrument do not offset. Review how well the hedge works and how much basis risk is tolerable. |

The overall assessment is subjective and not fully quantifiable, but traders estimate a **risk value** and a **hedging cost**: if risk value exceeds hedging cost, hedge.

#### Worked risk-value decision

A treasury exposure has a **45%** probability of an adverse change of **10–11.5%**, giving a risk value of **5.18%** of principal (0.45 × 11.5%). The hedge costs, on a principal of **USD 1 million**:

| Cost | Calculation | Amount |
|---|---|---|
| Brokerage | Given | USD 15.00 |
| Initial margin | 1,500 × 12% × 3/12 | USD 45.00 |
| Additional margin | 45 ticks | USD 33.75 |
| **Total hedging cost** | | **USD 93.75** |

As a percentage of principal:

$$ \frac{93.75}{1{,}000{,}000} = 0.009375\% $$

Adding an assumed basis risk of **3.0%**, total cost is **3.009375%**, which is **below** the **5.18%** risk value, so the decision is to **hedge**.

### 3.5.2 Developing an Effective Hedge Program

- **a. Risk exposure.** Evaluate exposure in assets and liabilities by group, maturity or profit centre.
- **b. Objective.** Set the hedge objective as an acceptable risk level or tolerance, measured by beta, volatility, value at risk or another risk unit.
- **c. Hedgeability.** Determine it by price correlation analysis, using **cross hedges** where necessary — hedging a security with a positively correlated instrument with similar price movement.
- **d. Hedge vehicle.** Choose an instrument with a high correlation to the target security.
- **e. Target.** Determine the rate or price to lock in.

### 3.5.3 Determining the Hedge Instrument

Find an instrument highly correlated with the target. Where the target differs from the futures contract, evaluate the yield relationship and correlation between the two, measured by regression. Examples:

- **a.** A long-term government bond is better hedged with **30-year T-bond futures** than 3-month Eurodollar futures, because long-bond rates correlate more highly with 30-year T-bond rates.
- **b.** T-bills are better hedged with **matching T-bill futures** than Eurodollar futures: in distress, T-bill futures prices rise faster than Eurodollar futures and the Eurodollar hedge becomes ineffective.
- **c.** US T-bond futures hedge the **interest-rate** risk of US corporate bond portfolios; **credit quality and sector risk are not hedged**.
- **d.** Economic factors hit sectors differently. In distress, funds switch from corporate to Treasury bonds, widening credit spreads and pushing corporate prices down relative to governments. Basis risk on a Treasury-futures hedge of corporate bonds is therefore greater, and the hedge less effective.

Futures and exchange-traded options carry four limitations as hedges:

- **i.** round numbers of contracts;
- **ii.** margin maintenance;
- **iii.** time horizon and expiry dates; and
- **iv.** no exact hedge instruments.

### 3.5.4 Determining the Target Rate

An investor may want to lock in a currency rate, interest rate or asset price. A **minimum variance hedge** held to the futures delivery date locks in the futures rate. If the hedge is lifted **before** delivery, the hedger cannot be assured of a spot or futures rate, because the basis changes.

$$ \text{Target rate for the hedge} = \text{futures rate} + \text{target-rate basis} $$

For a long cash exposure hedged with a short futures position:

$$ V_t = S_t + (F - F_t) = F + (S_t - F_t) = \text{initial futures price} + \text{ending basis} $$

### 3.5.5 Current and Anticipated Positions

#### 3.5.5.1 For a current cash position

**a. Weak form cash hedge.** The portfolio's time horizon is not known, so the goal is to minimise variance in the rate of return for a specified holding period.

**b. Strong form cash hedge.** The horizon is finite or known; the goal is to protect the portfolio by minimising variance in expected total return for a given investment period. This is **immunisation** — matching asset and liability durations. A cash and futures portfolio is created and maintained with the same interest-rate sensitivity as a **zero-coupon bond whose initial maturity equals the investment period**. The zero-coupon bond's value and rate sensitivity are tracked continuously: whenever the cash portfolio's sensitivity falls below the zero-coupon bond's, futures are **bought** to raise it; whenever it exceeds the zero-coupon bond's, futures are **sold** to reduce it.

#### 3.5.5.2 For an anticipated cash position

**a. Weak form anticipated hedge.** The goal is to minimise variance in the rate of return on an asset for a specified holding period, based on cash flows to be received at an **unknown** date. Futures are bought with the same interest-rate sensitivity as the asset to be acquired. Uncertain timing reduces effectiveness, though futures can still narrow the range of outcomes.

**b. Strong form anticipated hedge.** A known amount of cash will be received on a **certain** date; the goal is to minimise variance of the acquisition price. The hedge requires acquiring future delivery of the anticipated dollars of bonds, and because margin calls on the long futures position must be financed, the appropriate hedge ratio is **not an exact dollar match**.

### 3.5.6 Hedge Ratio

The hedge ratio is the expected movement in the value of the cash instrument given a movement in the futures contract; formally, the ratio of futures to spot that minimises or eliminates risk. Equal dollar exposure does not create an optimum or **delta-neutral** hedge.

$$ h = \frac{\Delta S}{\Delta F} $$

where, for the hedged position,

$$ V = S + h \times F $$

and $$V$$ is the value of the hedged position, $$S$$ the security price and $$F$$ the futures price. For a complete or delta-neutral hedge, $$\Delta V = 0$$:

$$ h = -\frac{\Delta S}{\Delta F} $$

Number of contracts:

$$ \text{contracts} = \frac{-h \times \text{exposure value}}{\text{contract size}} $$

**Worked example.** A **USD 100 million, 180-day** loan. A 1% rate move on a 180-day basis changes value by:

$$ 0.01 \times \frac{180}{360} \times 1{,}000{,}000 = \text{USD } 5{,}000 $$

per million, and a 90-day Eurodollar contract moves by 100bp × USD 25 = **USD 2,500**. So:

$$ h = \frac{5{,}000}{2{,}500} = 2 $$

and the hedge needs:

$$ 2 \times \frac{100\text{m}}{1\text{m}} = \mathbf{200} \text{ contracts} $$

Sell **200** contracts for the 180-day exposure. A 90-day exposure would need 100. Two further points: holding a stack of 90-day contracts against a 180-day exposure creates **basis risk at the roll**, and margin calls arise before the hedge pays off. The ratio must be recalculated when the stack is rolled.

### 3.5.7 Strips and Stacks

A **strip** uses sequential futures delivery months matched to the exposure periods — three-month, six-month, nine-month — so each resets against its own contract. A **stack** concentrates the whole exposure in one or in deferred contracts and rolls them; it is cheaper and more liquid but carries roll and basis risk.

| Structure | Mechanics | Trade-off |
|---|---|---|
| **Strip** | Sequential delivery months matched to exposure periods | Avoids roll risk; more contracts and thinner liquidity per month |
| **Stack** | Whole exposure in one or deferred contracts, rolled | Cheaper and more liquid; basis risk at every roll |

Choose between them by **time horizon**: an **interpolative** hedge uses a contract expiring beyond the exposure and interpolates; an **extrapolative** hedge uses a contract expiring before it.

### 3.5.8 Hedging Long-Term Interest Rate Risk

Compare **dollar interest-rate sensitivity**, not face value:

$$ \text{hedge ratio} = \frac{\text{PVBP of the hedged security}}{\text{PVBP of the cheapest-to-deliver bond}} \times \text{conversion factor of the CTD} $$

where PVBP is the change in price for a one basis point change in yield.

**Worked example.** A fixed-income manager, Alice Tan, hedges a **USD 20 million** bond position with Treasury futures. The CTD conversion factor is **0.91**, the CTD's PVBP at the settlement date is **0.6895**, and the PVBP of the bond to be hedged is **0.5954**. Assuming a fixed yield spread between the two bonds:

$$ \text{hedge ratio} = \frac{0.5954}{0.6895} \times 0.91 = 0.7858071 \approx 0.79 $$

$$ \text{contracts} = -0.7858071 \times \frac{20{,}000{,}000}{100{,}000} = -157.16 $$

so **sell 157 contracts**.

### 3.5.9 Hedging Equity Risks

An equity portfolio carries two risks: **systemic or market risk** and **specific or non-market risk**. Equity index futures hedge only market risk. A manager offsets market exposure by selling futures when long in the market — a **short hedge** — or buying futures when short — a **long hedge**.

Two factors decide the number of contracts:

- **i. Beta.** Measures portfolio risk or volatility relative to the index. The manager must decide whether the portfolio should be more or less volatile than the index, usually through regression on the historical betas of the constituent stocks.
- **ii. Modified Portfolio Value (MPV).** The value of the actual portfolio multiplied by the **weighted beta** — the sum of each stock's beta multiplied by its percentage share of the portfolio. This forms the base hedge.

$$ N = \frac{V_P}{F \times T} \times \beta $$

where $$N$$ is the number of contracts, $$V_P$$ the current portfolio value, $$F$$ the current futures quote, $$T$$ the value per tick and $$\beta$$ the portfolio beta. The formula assumes the futures maturity is close to the hedge maturity.

**Worked example.** John Lim hedges an equity portfolio over three months with 3-month futures. The S&P index is **1,000** in September, December S&P 500 futures are **1,010**, the portfolio is worth **USD 5,050,000**, its beta is **1.50**, and each contract is worth **USD 250**:

$$ N = \frac{5{,}050{,}000}{250 \times 1{,}010} \times 1.50 = 20.0 \times 1.50 = 30.0 $$

so **sell 30 December contracts**.

**December leg.** The index falls to **900**, futures to **902**, and the portfolio falls 15% to **USD 4,292,500**. The futures gain:

$$ (1{,}010 - 902) \times 30 \times 250 = \text{USD } 810{,}000 $$

Total fund value:

$$ 4{,}292{,}500 + 810{,}000 = \text{USD } 5{,}102{,}500 $$

### 3.5.10 Structuring the Hedge

Contract month, timing and maturity sensitivity must be chosen against the exposure before the hedge is executed. Match the futures maturity as closely as the exposure allows, keep margin headroom for variation calls, and decide the lift date in advance.

### 3.5.11 Managing the Hedge

Timing, contract month and maturity sensitivity must be adjusted as the hedge progresses. A hedge with **90% effectiveness leaves 10% residual standard deviation**: with a 10bp standard deviation on the basis, the hedged rate lands within ±10bp about **67%** of the time. Lift-date basis and cross-hedge parameter error are the main sources of that residual. Adjust the contract month as the exposure rolls, re-run the ratio when basis moves, and decide in advance at what level the hedge is lifted.

### 3.5.12 Further Examples of Hedging

| Case | Setup | Result |
|---|---|---|
| **Yankee Trading Co.** | CAD/USD spot 0.9125, April futures 0.9235; on 1 April spot 0.9485 | CAD **1,082,837** hedged vs **1,054,296** unhedged, a difference of **CAD 28,541** |
| **Fixed deposit hedge** | 5 January, USD 25m; Eurodollar March 97.75 (2.25%); 5 March 98.16 (1.84%) | Differential 0.41%, effective rate **2.21%** |
| **LMN Corp.** | 27 July, Eurodollar September 98.62 (+1.38%); 10 September 99.40 (−0.60%) | Differential 0.78%; unhedged interest USD 1,250, hedged USD 1,950 + USD 1,252.44, giving **1.28% p.a.** |
| **Floating-rate note** | USD 10m, 3-month LIBOR + 1%; LIBOR 1.85% rising to 2.25%; Eurodollar 98.15 to 97.75 | Effective **2.85%** vs 3.25% unhedged |
| **Nikkei hedge** | JPY 530m, beta 1, June-18 futures 21,455, contract JPY 500 | **49.40 ≈ 50 contracts**; an 8% fall gives futures value 536,375,000 − 493,375,000 = **JPY 43,000,000** gain; initial margin JPY 495,000 × 50 = **JPY 24,750,000**; fees USD 583.67 + USD 0.90 × 50 = **USD 628.67 = JPY 66,646** |
| **130/30** | Long 130%, short 30% | Net 100% equity exposure, but leverage, borrow, stock-selection and market risk remain |

## 3.6 Portfolio Management Techniques

Futures implement asset allocation, tactical rebalancing, cash equitisation, duration management, synthetic equity and bond exposure, market overlays and loss control. They are cheaper, more liquid and more margin-efficient than trading every cash security, but add basis, roll, leverage, margin and tracking risk. Separate market risk from security-specific risk: an index hedge will not perfectly protect a concentrated portfolio.

### 3.6.1 Examples of Portfolio Management Applications

**a. Asset allocation switch.** A USD 50 million portfolio moving from 50/50 to 40/60 equity/bond is implemented with bond futures, avoiding the cost and disruption of selling 50% of the equity book.

**b. Synthetic money market.** A corporate bond portfolio is converted to synthetic short-term exposure by selling T-bond futures, without liquidating the credit positions.

**c. Jessie Goh.** A USD 50 million portfolio with 10% into a short-term instrument at an 8% coupon. She buys July at 101 with 2.00 accrued, so the price is 103.00. In September the futures are **108 13/32 = 108.406**, conversion factor 1.0, accrued 3.33, giving proceeds of **111.736** and a gain of **8.736**, or **8.48%**. The hedge ratio:

$$ N = \frac{5{,}000{,}000}{108{,}406.25} = 46.12 \rightarrow \text{sell 46 contracts} $$

Loss control also uses futures to defer loss realisation across reporting periods.

## 3.7 Arbitrage

Arbitrage strategies include cash-and-carry, reverse cash-and-carry, bond stripping and reconstitution, futures-versus-IRS, FRA-versus-futures and option parity.

### 3.7.1 Arbitrage Strategies

#### 3.7.1.1 Cash versus Futures

Fifty days at 1.00/1.0625, 91 days, and 141 days at 1.25/1.3125 give $$r_2 = 1.351\%$$. The theoretical futures price is **98.65** against a market **98.72**:

$$ (9{,}872 - 9{,}865) \times 25 = \text{USD } 175 $$

#### 3.7.1.2 FRA versus Futures

The interbank FRA trades at a 1–3bp spread against a 1bp futures spread, and **value-date mismatch** leaves residual basis and fixing risk. Avoid calendar events and data releases falling between the two dates.

#### 3.7.1.3 Futures versus Interest Rate Swaps

IMM-dated, quarterly-fixing swaps align with futures dates. A speculative variant takes only the partial leg to express a curve view.

### 3.7.2 Arbitrage using Options

Put-call parity violations are arbitraged with conversion and reversal strategies, which Chapter 4 covers.

Arbitrage is risk-free only in the idealised model. Value dates, fixing dates, margin, liquidity, bid-ask spread, funding, delivery options, basis and counterparty constraints turn it into **relative-value trading**.

## 3.8 Summary

Know why each participant trades — hedge, speculate, make markets or arbitrage — what each spread isolates, how to compute the hedge ratio, and how margin and mark-to-market change cash needs. A hedge reduces a targeted risk; it does not remove all risk.

## Exam cues

- **Hedge ratio for a rate exposure** is the ratio of dollar sensitivities, then scaled by exposure over contract size. The **180-day** USD 100m case needs **200** contracts; a 90-day exposure needs 100.
- **Bond hedge:** PVBP ratio × conversion factor. **0.5954 / 0.6895 × 0.91 = 0.79**, and 0.79 × 20m/100,000 = **157 contracts to sell**.
- **Equity hedge:** $$N = V_P/(F \times T) \times \beta$$. The John Lim case is 5,050,000/(250 × 1,010) × 1.5 = **sell 30**; with the index at 900 and futures at 902 the hedge recovers USD 810,000.
- **Butterfly weights +1, −2, +1 through three maturities; condor +1, −1, −1, +1 through four.** A double butterfly nets **buy 1 / sell 3 / buy 3 / sell 1**.
- **Eurodollar tick = USD 25**; one basis point is one tick. The sell-butterfly earned 5.5 ticks = **USD 137.50**; the condor 8.5 ticks = **USD 212.50**.
- **Order types:** MTL leaves the unfilled balance at the last execution price; a market order in a non-continuous state takes the **Equilibrium Price**; MIT sells are placed **above** the market while stop sells are **below**; SSOs **cannot be GTC** and vanish at end of day.
- **Packs are four consecutive months; bundles are 2, 3 or 5 years** — there is no 1-year bundle, because that is a pack. Quoted in **¼ basis point** increments.
- **TED spread** is a credit and liquidity indicator, not a pure rate spread. It narrowed in measurement after 3-month T-bill futures were delisted.
- **Trap:** equal dollar exposure does not give a delta-neutral hedge, and an equity index hedge removes **market** risk only — specific risk and credit spread remain.
