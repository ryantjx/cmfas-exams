---
id: '6'
kind: 'chapter'
num: 6
part: null
title: 'Barrier Options, Binary Options and Callable Contracts'
order: 6
slug: 'chapter-6-barrier-options-binary-options-and-callable-contracts'
---

# Chapter 6 — Barrier Options, Binary Options and Callable Contracts

Exotic features are sold as cheaper or higher-yielding alternatives to vanilla exposure. They are not cheaper — the cost is displaced into a condition, a path dependency or a termination right. This chapter is about locating that displacement.

## Learning Objectives

The candidate should be able to:

- Explain how an exotic option differs from a vanilla option.
- Distinguish knock-out from knock-in barriers and single from double barriers.
- Explain the effect of a barrier on the premium and on the path dependence of the payoff.
- Explain binary and basket payoffs.
- Explain the mandatory call event and the Category N / Category R distinction for CBBCs.
- Compute a CBBC's theoretical price, gearing and residual value.

## 6.1 Introduction

Exotic derivatives extend a vanilla option by changing one or more of its features:

- **a. Exercise events** — conditions under which the option lives or dies.
- **b. Path dependency** — the payoff depends on the route the price took, not just the level at expiry.
- **c. Payoff shape** — digital, range, or otherwise discontinuous rather than linear.
- **d. Conditional events or trigger points** — if the price touches or crosses a trigger, validity is affected and the final payoff changes.
- **e. Underlying assets** — extending beyond traditional classes and indices to alternative investments such as real estate, and to market indicators such as volatility.
- **f. Currency features** — producing a payoff in a different currency, as in a Quanto structure.

Before recommending one, explain how the payoff is computed, what observation triggers action, whether the option can terminate early, whether the premium can be lost, and who bears counterparty risk.

## 6.2 Barrier Options

Barrier options are among the most popular exotic structures banks sell. Clients find them easy to understand because the concept is "game-like", following an **if-then-or-else** pattern.

The payoff depends not only on whether and by how much the option is in the money at exercise, but also on whether the underlying has:

- **a.** touched the barrier at any time during the option's life;
- **b.** been above or below the barrier at expiry, or throughout the life; or
- **c.** stayed within two barriers, or outside two barriers, at expiry or throughout.

In a **knock-out** (or kick-out) option, touching the barrier **deactivates** the features and rights. In a **knock-in** (or kick-in) option, touching the barrier **activates** them.

Investment professionals must review the terms to establish exactly how the payoff is calculated, what is payable once the barrier event occurs, and what happens if it does not — because the payoffs differ depending on the price path. Features and payoffs of the options inside structured products are frequently **negotiable and customisable**.

A **barrier** is a price trigger level which, when reached, produces an event: a payment of interest, a higher interest rate, a currency conversion, a sale or purchase of stock. Depending on the underlying, the trigger may reference a stock price, an index level, an FX rate, a money-market or bond interest rate, or a weighted average of a basket.

Barrier options are **path dependent**, because they are activated or cancelled when a set trigger is reached. Intuitively they are **cheaper than their vanilla counterparts**, because the investor risks being knocked out, or never knocked in.

## 6.3 Knock-Out Barrier Options

A knock-out option ceases to exist when the barrier is touched. Two barrier configurations matter.

### 6.3.1 Single Barrier Knock-Out

| Investor | Position | Consequence |
|---|---|---|
| **A** | Call with strike **$8.00**, knock-out **$9.00**, spot **$7.00** | Maximum payoff $$8.99 - 8.00 - \text{price}$$, breakeven **$0.99** |
| **B** | Put with strike **$13.50**, knock-out **$12.00**, spot **$15.00** | Maximum payoff $$13.50 - 12.01 - \text{price}$$, breakeven **$1.49** |

The economic decomposition is a **visible vanilla call plus an embedded sold call at the barrier**. That is why the option is cheaper: the investor has sold the issuer the payoff beyond the barrier.

Contrast this with a bull or bear **spread**. In a spread the distant leg is a separately priced short option. In a knock-out, breaching the barrier **extinguishes the whole option**, so the investor loses the **full intrinsic value** accumulated to that point, not merely the capped excess.

### 6.3.2 Double Barrier Option

A **double knock-out call** carries two barriers. With strike **$8.00**, spot **$7.80**, lower knock-out **$7.00** and upper knock-out **$9.00**, there are three outcomes:

- the underlying stays inside **$7.00–$9.00** and the call pays at expiry, with a maximum of $$8.99 - 8.00 = \$0.99$$;
- the underlying touches **$7.00** and the option is extinguished;
- the underlying touches **$9.00** and the option is extinguished.

Because it can be knocked out at **both** ends, a double barrier option is **cheaper than a straight call and put combined** with the same specifications. Note that launching the option in the money — spot at or above the strike — is the more popular configuration.

## 6.4 Knock-In Barrier Options

For knock-ins the reverse applies: the option becomes **activated** if the price touches the knock-in barrier. The terms become active from the moment of the touch **through to expiry, even if the price falls back**. A **rebate** is usually paid to the buyer at expiry if the knock-in barrier is **never** reached — compensation for the option never coming to life.

## 6.5 Summary and Application of Barrier Options

Unlike regular European calls and puts, barrier options are **path dependent**.

- **Knock-in.** The option only comes into existence when the condition is met, typically when the barrier is touched at any time. Once breached, the underlying call or put becomes live and then behaves as an ordinary European option.
- **Knock-out.** The underlying European option is **extinguished** when the barrier is touched. Once breached, the entire structure expires worthless.

| Type of barrier option | When the barrier is exceeded |
|---|---|
| **Knock-out** | Deactivates the option; the underlying option is extinguished |
| **Knock-in** | Activates the option; the underlying option becomes live |

### 6.5.1 Advantages of Barrier Options

- **a.** **Cheaper premium** than standard options, because the knock-out may terminate early, or the knock-in may never activate. A **double** knock-in has a **higher** knock-in probability than a single knock-in.
- **b.** Leverage on capital for a given view.
- **c.** A **wider selection** of option products for diverse market views.
- **d.** Knock-in barriers suit **large** expected moves; knock-out barriers suit **small sideways** moves.

### 6.5.2 Disadvantages of Barrier Options

- **a.** **High risk of losing the premium**, either because a knock-out occurred or because no knock-in ever occurred.
- **b.** They are **OTC** products. The investor pays upfront and does not trade on an exchange, so bears **issuer counterparty risk**.

Barrier features are used heavily by banks in FX structures. A typical structured product embeds a knock-out option:

| Term | Value |
|---|---|
| Current spot | **112.00** |
| Strike price | **112.00** |
| Knock-out barrier | **119.00** |
| Minimum yield | **0%** |
| Knock-out rebate | **2%** |
| Money-market rate | **1.5%** |
| Maturity | **3 months** |
| Participation rate | **100%** |
| Minimum size | **USD 500,000** |

The client has money-market deposits, and the interest is invested in a knock-out barrier option with a **2% rebate** to make the downside more attractive. The option is active at inception. As long as spot trades **below 119**, the client participates in the movement from 112 to 118.99; at or above 119 the structure knocks out and the rebate applies.

## 6.6 Barrier Features in Structured Products

### 6.6.1 Barrier Capital Preservation Certificates

Often called a **shark's fin**, the structure combines a zero-coupon principal component with an **up-and-out call**. It suits an investor expecting a rise that will not breach the barrier.

Six characteristics define it:

- **a.** Capital preservation is defined as a percentage of **nominal**, for example 100%.
- **b.** Capital preservation refers to the nominal **only at maturity**, and **not to the purchase price**.
- **c.** The product's value may fall **below** its capital-preservation level during its life.
- **d.** Participation in positive underlying performance continues **until knock-out**.
- **e.** A **rebate** may be paid following knock-out.
- **f.** Upside is **capped**.

### 6.6.2 Barrier Reverse Convertibles

The barrier reverse convertible enhances yield when the underlying is expected to be flat or to move slightly. It offers **conditional** capital preservation through a **kick-in barrier** set a specific percentage below the share price at issue. It is commonly called a reverse convertible note and comprises a note, money-market instrument or bond, plus a **put option sold by the investor to the issuer**.

**Investment view:**

- **a.** neutral on the underlying's direction;
- **b.** expects flat to very slightly moving prices with **falling volatility**;
- **c.** expects the underlying **not** to breach the barrier during the life; and
- **d.** is looking for income or enhanced yield.

**Characteristics.** By selling the knock-in put the investor takes **downside risk**: if the underlying finishes **below the strike at expiry and the kick-in level was breached**, the investor **loses capital**. Principal is at risk once the barrier is touched.

The payout, with the strike and finish expressed as levels, is:

$$ \text{Payout} = \min\left\{100\%,\ 100\% - \frac{1}{\text{Strike}} \times \max\left[0,\ \text{Strike} - \frac{S_T}{S_0}\right]\right\} $$

The **coupon is paid regardless**; what changes is whether principal is returned in full or converted into a devalued underlying.

### 6.6.3 Bonus Certificates

A bonus certificate sets a barrier below spot and a bonus level above it. If the barrier is not breached, the investor receives at least the bonus; if it is, protection and bonus disappear.

**Investment view:**

- **a.** neutral or generally bullish that the underlying will not trade below the barrier.

**Characteristics:**

- **i.** Exposure similar to direct investment, with a **minimum return (the bonus)** if performance is flat or slightly negative — available **so long as the underlying stays above the barrier**.
- **ii.** If the underlying is **below the barrier**, the investor has **1:1 downside exposure**.
- **iii.** The barrier is usually observed **continuously** throughout the term.
- **iv.** Investors **forgo dividends**, which partly fund the issuer's purchase of the put.
- **v.** If caps are introduced to limit upside, the certificate prices cheaper or the bonus can be increased.

**Risks:** a loss equal to the negative performance of the underlying; surrendered dividends; and issuer credit risk.

The issuer has four levers: the level of participation and any cap; the strike or bonus level; the knock-out barrier level; and maturity. The trade-offs are real. Lowering participation and capping upside allows a **higher bonus** or a **further** barrier. Lowering the bonus towards the initial price may allow a **closer** barrier or **shorter** maturity. Lengthening maturity raises investor risk, so a **higher bonus** may be required to sell it.

### 6.6.4 Barrier Capital Preservation Certificates (Straddle)

This product contains **two knock-out options** — a barrier call and a barrier put. The investor receives a **capped** return at maturity if **no knock-out event occurs**. There are two possible knock-out events, one for each option; if either occurs, the investor receives the agreed capital amount instead.

### 6.6.5 Positioning of the Barriers

Barrier placement sets the economics. A **closer** barrier is **cheaper** but **easier to trigger**; a **wider** barrier costs more but preserves more vanilla-like participation. The investor must be told which side of spot the barrier sits on, whether it is monitored continuously or on observation dates, and whether a rebate applies.

## 6.7 Binary Options

A **binary** or digital option pays a fixed amount if a condition is satisfied and zero, or another fixed amount, otherwise. **One-touch** pays if the barrier is touched; **no-touch** pays if it is never touched; **double-no-touch** or range structures pay if neither boundary is breached.

Binary payoffs are **discontinuous** and highly sensitive to barrier proximity, volatility, time and the **monitoring convention**.

A **one-touch** example: EUR/USD spot **1.08**, strike **1.04**, 3 months, maximum **10%**, minimum **1%**, money-market rate **2.00%**, minimum **USD 100,000**.

A **range currency deposit**: range **1.06–1.10**, 3 months, maximum **8.25%**, minimum **2.00%**, money-market rate **1.50%**, minimum **USD 100,000**.

A **range accrual** paying on observations inside the range:

$$ \frac{60}{90} \times 8.25\% + \frac{30}{90} \times 2.00\% = 6.17\% $$

The trap is that **88 of 90 days** inside the range with **one** day outside does not deliver close to 8.25% if the terms count day by day — read whether the condition is observed **at expiry or throughout**.

## 6.8 Basket Options

A basket option references several assets. **Correlation** drives the premium: imperfect correlation can make a basket cheaper than buying each single-asset option, but it creates correlation, composition, rebalancing, dividend and concentration risk. A **worst-of** basket pays on the weakest constituent and is especially correlation-sensitive.

## 6.9 Knock-Out Warrants

Knock-out warrants combine exchange-traded warrant leverage with a barrier that can terminate the product before its stated expiry. A breach may leave the warrant worth zero or a residual amount under the terms.

Six characteristics matter: exchange trading; a barrier that terminates early; delta close to one before termination; a **flattening skew** in pricing; issuer and DMM dependence; and settlement on the terms rather than on the expiry date. Compare the trigger, settlement, issuer, DMM, ratio and monitoring rules against a standard warrant.

## 6.10 Callable Bull/Bear Contracts

CBBCs are exchange-traded leveraged long or short products, usually linked to an equity or index. A **bull** profits from a rise; a **bear** from a fall. Delta is often close to 1 before the call event.

### 6.10.1 Price Movement

A bull CBBC moves with the underlying, up or down, until the call event. Because delta is near 1 and the conversion ratio is fixed, the percentage move in the CBBC is a multiple of the percentage move in the underlying.

### 6.10.2 Mandatory Call Event

The **mandatory call event (MCE)** is triggered when the underlying reaches the **call price**:

- for a **bear**, spot rises to or above the call price;
- for a **bull**, spot falls to or below the call price.

On an MCE the product terminates immediately. It is not a stop-loss the investor controls.

### 6.10.3 Gearing

$$ \text{gearing} = \frac{\text{underlying price}}{\text{CBBC price} \times \text{conversion ratio}} $$

A conversion ratio of **10:1** means **10 CBBCs per share**.

### 6.10.4 Hedging

The issuer hedges the CBBC by trading the underlying. Because delta is close to 1, the hedge ratio is close to the conversion ratio, and the issuer's hedge must be unwound on an MCE.

### 6.10.5 Category N and Category R CBBCs

| Category | Call price relative to strike | Residual value after MCE |
|---|---|---|
| **Category N** | Call price **equals** the strike | **No residual value** — the product is terminated |
| **Category R** | Call price is **above** the strike for a bull (in the money) | Residual value **may** be paid, but **may be zero** |

Category R is not a guarantee of a positive residual. The call price, strike and conversion ratio are all specified in the term sheet.

### 6.10.6 Theoretical and Market Pricing

$$ \text{bull CBBC} = \frac{(\text{underlying} - \text{strike}) + \text{financial cost}}{\text{conversion ratio}} $$

$$ \text{bear CBBC} = \frac{(\text{strike} - \text{underlying}) + \text{financial cost}}{\text{conversion ratio}} $$

The **financial cost** comprises funding cost, the dividend adjustment and the issuer's margin.

### 6.10.7 Residual Value on MCE

For a Category R CBBC the residual value is direction-specific:

$$ \text{bull residual} = \frac{\text{settlement price} - \text{strike}}{\text{conversion ratio}} \qquad \text{bear residual} = \frac{\text{strike} - \text{settlement price}}{\text{conversion ratio}} $$

The **settlement price** follows the MCE observation rules: a **bull** uses the **minimum** and a **bear** the **maximum** traded price between the MCE and the next session, subject to the product terms.

### 6.10.8 Valuation at Maturity

At maturity the same direction-specific formula applies, using the **closing** settlement price rather than the post-MCE observation.

### 6.10.9 Capital Adjustments

Corporate actions adjust the strike, call price and conversion ratio to keep the product economically comparable. **Regular dividends do not** require adjustment, because they are already reflected in the financial cost.

### 6.10.10 Other SGX Issues

The issuer publishes a **listing document** stating the terms, including the call price and the observation method. Read it rather than inferring from the ticker.

### 6.10.11 CBBC Examples

**Category R bull.** Strike **$10.00**, call price **$11.00**, conversion ratio **10:1**, financial cost **10% p.a.**, 12 months, spot **$12.00**.

$$ \text{price} = \frac{(12.00 - 10.00) + \text{financial cost}}{10} = \$0.30 $$

| Scenario | Outcome | CBBC price | Return |
|---|---|---|---|
| 1 — after 6 months the underlying is **$15.00** | Residual rises with the underlying | **$0.55** | The underlying gained 25% while the CBBC gained **83.33%** |
| 2 — MCE at **$10.50** | Residual $$(10.50 - 10.00)/10 = \$0.05$$ | **$0.05** | A loss of **$0.25**, or **−83.33%** |
| 3 — at maturity the underlying is **$15.00** | $$(15.00 - 10.00)/10$$ | **$0.50** | **+66.67%** |

The size of scenario 2's loss is the point. The underlying fell only 12.5% from 12.00 to 10.50, but the CBBC lost 83% of its value — that is the leverage, and the MCE removed any chance of recovery. Recompute the percentage against the **purchase price of $0.30** and state your base.

**Category R bear.** Strike **$11.00**, call price **$10.00**, conversion ratio **1:1**, spot **$9.00**.

$$ \text{price} = \frac{(11.00 - 9.00) + \text{financial cost}}{1} = \$3.10 $$

| Scenario | Outcome | CBBC price | Return |
|---|---|---|---|
| 1 — after 6 months the underlying is **$7.50** | Residual falls as the underlying falls | **$4.05** | The underlying fell 16.67% while the CBBC gained **+30.65%** |
| 2 — MCE at **$10.50** | Residual $$(11.00 - 10.50)/1 = \$0.50$$ | **$0.50** | A loss of **$2.60**, or **−83.87%** |
| 3 — at maturity the underlying is **$6.50** | $$(11.00 - 6.50)/1$$ | **$4.50** | **+45.16%** |

## 6.11 Risks of CBBCs

- **MCE and early termination** — the product can end before the investor's view plays out.
- **Residual-value uncertainty** — a Category R residual may be zero.
- **Issuer credit risk.**
- **Liquidity and DMM spread** — quote obligations can stand down.
- **Gap risk** — the underlying can jump through the call price.
- **Leverage** — magnifies both directions.
- **Financing cost** — accrues against the position.
- **Underlying suspension** — trading halts suspend the product.
- **No margin misconception** — there is no margin account, but the capital at risk is the whole purchase price.

## 6.12 Similarities and Differences

| Feature | Barrier option | Binary | Warrant / knock-out warrant | CBBC |
|---|---|---|---|---|
| Typical venue | OTC | OTC or exchange | Exchange | Exchange |
| Payoff | Conditional vanilla or rebate | Fixed, discontinuous | Leveraged option | Leveraged linear exposure until MCE |
| Main trigger | Barrier touch or cross | Event, range or touch | Product barrier, if any | Mandatory call level |
| Path dependent | **Yes** | **Yes** | Only with a barrier | **Yes** |
| Key extra risk | Path and counterparty | Discontinuity and monitoring | Issuer and time value | Early termination and residual value |

## 6.13 Summary

Exotics exchange a lower premium or a higher coupon for **conditionality**. The barrier level, its direction, the monitoring convention, any rebate, knock-in or knock-out status and the settlement basis determine the payoff. CBBCs add a mandatory call event and the Category N / Category R distinction; an investor can lose most or all of the capital quickly.

## Chapter 6 Appendix — Average Price (Rate) Options (non-examinable)

An **average price** or **Asian** option settles against the arithmetic mean of the underlying over a stated sampling period rather than a single point:

$$ \text{Payoff}_{\text{call}} = \max\left\{S_{\text{avg}} - X,\ 0\right\} \qquad \text{Payoff}_{\text{put}} = \max\left\{X - S_{\text{avg}},\ 0\right\} $$

Averaging **reduces** the option's sensitivity to a spike near expiry, so an average price option is **cheaper than the equivalent vanilla**. The longer the averaging window, the larger the discount. Sampling may be daily, monthly or quarterly.

Structured products use them to neutralise **tail-end spikes**: an underlying that gaps on the observation date cannot move the settlement as much when that date is one of many in the average. The trade-off is that the investor also gives up the benefit of a favourable spike.

## Exam cues

- **Path dependence is the defining feature.** A barrier does not change the final level; it changes whether the option is alive at that level. Two assets finishing at the same price can produce different outcomes.
- **Knock-out kills, knock-in births.** Knock-out extinguishes the option and can lose the **full intrinsic value** already accumulated — a sharper loss than a spread's capped excess. Knock-in activates the terms from the touch **through expiry even if price falls back**, and pays a **rebate** if never activated.
- **Double barriers are cheaper** than a straight call plus put, because they can be knocked out at both ends. A **double knock-in** has a **higher** probability of activation than a single.
- **Barrier capital preservation is nominal at maturity only** — not the purchase price — and the product's market value may fall below that level during its life.
- **BRC payout:** min(100%, 100% − (1/Strike) × max[0, Strike − S_T/S_0]). The coupon is paid regardless; only principal is at risk once the kick-in is breached.
- **Bonus certificate:** bonus applies only while above the barrier; below it, **1:1 downside**; dividends are forgone.
- **CBBC:** call price is where the MCE fires — bull falls to it, bear rises to it. **Category N** has **no** residual; **Category R** may have residual but may be zero.
- **CBBC arithmetic:** bull price = ((underlying − strike) + financial cost)/ratio. R-bull at 12.00 strike 10.00 ratio 10 = **$0.30**; after an MCE at 10.50 the residual is **$0.05**.
- **Binary trap:** a range accrual observes **days**, so 88 of 90 days inside does not pay the maximum.
- **Trap:** an investor can lose 83% on a CBBC when the underlying moves only 12.5%, and there is no margin call to warn them — the whole purchase price is at risk from the outset.
