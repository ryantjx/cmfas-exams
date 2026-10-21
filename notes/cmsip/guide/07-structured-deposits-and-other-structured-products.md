---
id: '7'
kind: 'chapter'
num: 7
part: null
title: 'Structured Deposits and Other Structured Products'
order: 7
slug: 'chapter-7-structured-deposits-and-other-structured-products'
---

# Chapter 7 — Structured Deposits and Other Structured Products

A structured deposit is a bank deposit whose return is produced by an embedded option. The principal may be preserved, but the yield is not, and the conversion obligation is real. This chapter teaches the decomposition and the suitability test.

## Learning Objectives

The candidate should be able to:

- Explain why structured products are treated as complex investments.
- Apply the seven suitability criteria to a structured product.
- Distinguish capital-preserving from yield-enhancing deposits.
- Decompose a structured deposit into deposit plus option legs.
- Compute a participation rate, a range-accrual payout and an accumulator's obligation.
- Identify the worst case, not only the headline yield.

## 7.1 What are Structured Products?

Structured products combine a deposit, note, fund, warrant, ILP, ETF or ETN with one or more derivatives. They can customise a market view, enhance yield, preserve capital at a stated maturity, provide participation, a discount or leverage, hedge an exposure, change currency, or rebalance without directly buying the underlying.

These are **complex investments**. Their risks and payoff structures are less easily understood and they are usually offered to more experienced investors. Losses from OTC derivatives and structured products have historically been the subject of litigation by retail and high-net-worth individuals against banks, with clients claiming they did not understand, were not informed, or were misinformed about the risks. Verification of a client's risk profile and investment understanding, supported by **documentation and acknowledgement**, has therefore become standard practice.

From the institution's side, the growth of derivatives over 30 years helped offset narrowing trading commissions on traditional asset classes. OTC structured products raised transaction volume and generated higher returns than trading traditional investments would have.

### 7.1.1 Client Suitability for Structured Products

Seven criteria must be considered:

| Criterion | What it requires |
|---|---|
| **a. Risk appetite** | The investor's **ability and willingness** to take risk — both, not either. |
| **b. Investment experience and knowledge** | Confirm the investor can understand the features and risks. The investor must understand how the product works and review the possible outcomes under different market scenarios. |
| **c. Liquidity needs** | Review liquidity needs and **highlight the consequences of early redemption** where products are not held to maturity. |
| **d. Investment horizon** | Value may only be fully realised at maturity. Some products have a horizon longer than the investor is comfortable with; others **decay through time value** and may become worthless at or near expiry. |
| **e. Product risk** | Features can dramatically augment the payoff. Some products offer capital preservation; others carry the possibility of **huge or cumulatively building losses**. |
| **f. Restrictions** | Structured products are complex because they embed derivatives. Only representatives notified under the **MAS Representative Notification Framework (RNF)** may advise investors wishing to trade them; otherwise the investor must have the relevant experience and knowledge. |
| **g. Product disclosure** | Full disclosure of potential risks. Investors must also understand how returns are generated and what they give up to get them. |

### 7.1.2 Risks in Structured Products

| Risk | Description |
|---|---|
| **Market risk** | Adverse movement in the underlying, its rate, its spread or its volatility |
| **Credit and counterparty risk** | Issuer, SPV, swap counterparty or reference entity failure |
| **Liquidity risk** | An illiquid bespoke structure, or a lock-up, forcing a discounted exit |
| **Early termination risk** | Unwinding before maturity incurs break costs; principal preservation may apply only at maturity |
| **Structure risk** | The combination itself can produce losses the investor did not anticipate |
| **Currency risk** | The underlying and the settlement currency may differ |

### 7.1.3 Trade-off between Features

Features are traded against one another. Raising one benefit is paid for elsewhere.

| Feature change | Effect on headline return or yield | Why |
|---|---|---|
| **Sell a call** | Return rises | The investor has sold upside participation |
| **Sell a put** | Return rises | The investor has taken a conditional obligation to buy a falling asset |
| **Buy a call** | Return falls | The investor is paying for upside participation |
| **Buy a put** | Return falls | The investor is paying for downside protection |
| **Longer maturity** | Return rises | More time means more optionality sold, and more issuer and rate exposure |
| **Higher leverage** | Return rises, and so does loss | The exposure is multiplied in both directions |

The strike's **proximity to spot** is the second lever. A strike close to spot makes the sold option more likely to finish in the money, so it is worth more premium — and more likely to cost the investor.

### 7.1.4 Participation Rate

A participation rate states how much of the underlying's upside the investor receives, once the cost of the principal component and the option has been accounted for.

$$ \text{participation rate} = \frac{\text{discount sum}}{\text{call premium}} $$

**Worked example.** An S&P 500 call costs **$24.00**. Two zero-coupon bonds of face **$100.00**, both with **5 years** to maturity:

| Parameter | Bond A | Bond B |
|---|---|---|
| Discount rate | 5.00% | 7.00% |
| Present value | **$78.35** | **$71.30** |
| Discount sum (face − PV) | **$21.65** | **$28.70** |
| Call premium | $24.00 | $24.00 |
| **Participation rate** | $$21.65/24 = \mathbf{90.21\%}$$ | $$28.70/24 = \mathbf{119.58\%}$$ |

The higher-yielding Bond B frees more cash to buy the call, so it buys more participation — but the investor has taken a weaker credit to get it.

### 7.1.5 Purpose and Uses of OTC Structured Products

For investors, OTC structured products offer:

- **a. Customisation.** They meet needs standard investments cannot, and clients can negotiate criteria and trade-offs with the counterparty bank. They can also improve portfolio efficiency where a wide variety of instruments already exists.
- **b. Combining outcomes that cannot be bought separately.** An investor wanting upside participation with some principal preservation cannot achieve it by buying securities directly, because the principal is exposed. A bond plus a call option on the securities preserves capital while retaining the upside — which is exactly the structured product.
- **c. Optimising yield and return.** In low-rate periods investors seek higher yield. Nothing is free: with the promise of higher return come risks and trade-offs.
- **d. Access** to markets, underlyings or structures that are otherwise unavailable or uneconomic.
- **e. A hedge** with a payoff profile tailored to a specific exposure.
- **f. Currency transformation**, producing a return in a different currency.
- **g. A discount entry** into an underlying the investor is willing to own.
- **h. Leverage** where the investor accepts amplified loss.

### 7.1.6 Types of Structured Products

| Capital preservation | Yield optimisation | Capital gain / participation |
|---|---|---|
| **FX and precious metals** — currency deposit with call or put (± knock-out, no-touch/lock-out, call or put spread), knock-out rebate deposit, one-touch, step-up digital, range currency deposit (double-no-touch, digital spread), triple currency investment | **DCIs** — standard, knock-out, knock-in, double-no-touch | — |
| **Equity** | **ELNs** — bull, callable, fixed coupon note; accumulators; decumulators; twin-win certificate | Participation and access notes |
| **Fixed income** | **CDRAN, VMRAN, CSUN, accrual note** | — |
| **Funds, ETFs and others** | — | **CPPI, DPPI** |

## 7.2 Structured Deposits with Capital Preservation

A structured deposit is a bank deposit whose principal is repaid in full at maturity, with or without interest. It is governed by the Banking Act and, after the Deposit Insurance Act 2005 was replaced, by the **Deposit Insurance and Policy Owners' Protection Schemes Act 2011**. MAS has issued the **Guidelines on Structured Deposits (FAA-G09)**. Accredited and institutional investors may be exempt from parts of the regime.

Structured deposits are **not necessarily deposit-insured**, and early withdrawal may cost principal or return. The bank's credit standing matters.

From a risk perspective, structured deposits are generally **less risky than direct investment in the underlying**, because the bank must repay the full principal at maturity, or on early redemption where that feature exists. They are **riskier than ordinary deposits**, because the return depends on another instrument's performance; in some scenarios the investor gets back only the principal with no return.

### 7.2.1 Structured Deposits

| Feature | Detail |
|---|---|
| **Type of client** | Risk-averse, low risk tolerance |
| **Purpose** | Seeking higher yield than a deposit with some capital preservation |
| **Common underlyings** | Foreign-currency investment such as USD/JPY or EUR/USD |
| **Benefits** | Slightly higher yield |
| **Risks and losses** | No capital loss if held to maturity; **loss of interest** (zero or lower rate is possible); counterparty risk; liquidity risk, because the investor relies on the OTC counterparty to liquidate |
| **Obligations** | To provide the specified amount of deposit for the structure |
| **Structure types** | Deposit with standard call or put; deposit with standard option and knock-out; structured deposit with call or put spreads; range accrual deposits |

### 7.2.2 Deposit with Standard Call and Put

A deposit plus a sold option. USD/JPY spot **112.43**, 3 months, strike **113.50**, minimum yield **0.00%**, maximum **unlimited**, money-market rate **1.75%**, minimum **USD 250,000**.

If spot finishes at **115.00**, the payoff on the sold call, in JPY terms, is:

$$ (115.00 - 113.50) \times 250{,}000 = \text{JPY } 375{,}000 $$

At the prevailing rate that is about **USD 3,260.87**, or **1.3% a quarter — 5.2% annualised**. The maximum is described as unlimited because the sold call has no cap; the deposit's principal is preserved but the currency gain is not capped.

### 7.2.3 Standard Option with Knock-Out

Adding a knock-out at **109.50** with a minimum yield of **0.50%** reduces the cost of the option, so the headline yield can rise. The trade-off is that a touch of 109.50 extinguishes the enhancement and leaves the investor with the minimum.

A **step-down** variant shifts the whole payoff down by a stated amount, **2.00%** in the source example, once the barrier is touched. The lock-out or no-touch component is priced off the distance to the strike and the volatility.

### 7.2.4 Bull Call (or Put) Spread

USD/JPY spot **112.00**, 3 months, spread **114.00–118.00**, minimum **1.00%**, maximum **14.50%**, money-market rate **1.75%**, 100% participation. The implied option cost is about **0.75% p.a.**

The spread's theoretical maximum would be 15%; the product offers 14.5%, and the 0.5% difference is the spread capture retained by the bank.

### 7.2.5 One-Touch Lock-in

EUR/USD spot **1.18**, strike **1.12** (about 5% below), 3 months, maximum **12.00%**, minimum **0.75%**, money-market rate **1.75%**, minimum **$200,000**.

As long as **1.12 is reached at any time** during the three months, the 12% return is locked in. The client is **sacrificing 1%** against the money-market rate of 1.75% to buy the one-touch option. The notional capital is guaranteed, and the bank can provide the 12% because it holds or hedges the position as counterparty.

### 7.2.6 Range Currency Deposit (Double Barrier Binary Option)

A range currency deposit suits an investor who believes the pair will stay within a range. Inside the range the investor earns a better yield than the money market; a breach at either end lowers the yield.

**Example.** EUR/USD spot **1.09**, upper barrier **1.10**, lower barrier **1.06**, 3 months, maximum **7.25%**. The client earns 7.25% annualised as long as the pair stays within **1.06–1.10**.

The four levers that raise the yield are: **narrow** the range; **skew** it so spot sits nearer one barrier; **extend** maturity; or rely on **higher volatility**. Each makes the range more likely to be breached.

### 7.2.7 Range Accrual Currency Deposits

Rather than all-or-nothing, a range accrual pays the high rate on the **observations** inside the range and the low rate outside:

$$ \text{payout} = P_1 \frac{n}{N} + P_2 \frac{N - n}{N} $$

**Example.** 88 of 90 days inside, with a 7.25% inside rate and a 2.00% outside rate:

$$ \frac{88}{90} \times 7.25\% + \frac{2}{90} \times 2.00\% = 7.13\% $$

Accrual may be **weekly** or **monthly** rather than daily, which changes the payoff materially.

## 7.3 Yield-Enhancement Deposits

A yield-enhancement deposit gives up some or all capital protection to buy a higher coupon. The investor is selling an option, and the coupon is the premium.

| Feature | Detail |
|---|---|
| **Type of client** | Higher risk tolerance, seeking yield |
| **Purpose** | Maximise yield, accepting conversion or principal risk |
| **Common underlyings** | A currency pair, with the alternate currency as the conversion asset |
| **Benefits** | A materially higher coupon than a deposit |
| **Risks** | Conversion into a weaker currency; loss of principal in the alternate currency; counterparty and liquidity risk |
| **Obligations** | To accept delivery of the alternate currency at the strike if the condition is met |
| **Structure types** | Standard DCI, knock-out DCI, knock-in DCI, accumulators, decumulators |

### 7.3.1 Standard Dual Currency Investments

A DCI has existed in the local market for **20–25 years**. It consists of:

- **a.** a **short** position in a call on the reference currency, or a short position in a put on another currency; and
- **b.** a **long** position in a money-market deposit or bond denominated in the reference currency.

The option premium received lets the DCI offer a higher rate than the money market.

- **a.** If the exchange rate **strengthens or stays flat** and does not cross the strike at expiry, principal plus interest is repaid in the **reference currency**.
- **b.** If the exchange rate **weakens through the strike**, principal plus interest is repaid in the **alternate currency** — a conversion into a weaker currency. The risk is being forced to convert and then watching that currency fall significantly.

**Worked example.** The client holds USD as reference currency and believes GBP/USD will be flat or the USD will strengthen. Invests in a standard GBP/USD DCI: spot **1.37**, strike **1.34**, return **10.00% p.a.** against a money-market rate of **1.75%**.

- If GBP/USD **> 1.3400**, the client receives the initial investment plus 10.00% interest **in USD**.
- If GBP/USD **< 1.3400**, the client receives the initial investment plus interest **converted at 1.3400 into GBP**, and may incur an FX loss.

The headline 10% is roughly 8.25 percentage points above the money market. That gap is the option premium — the price of the conversion obligation.

### 7.3.2 Knock-Out DCI (Disappearing)

Strike **1.1000**, knock-out **1.1500**, spot **1.1200**, 3 months. The knock-out DCI pays **8.50%** against **9.00%** for the standard version, money-market rate **1.75%**.

The knock-out **disappears** the conversion feature if the barrier is touched, which protects the investor — so the yield is **lower** than the standard DCI. The further the barrier from spot, the less likely the protection is triggered, and the closer the yield moves to the standard version.

### 7.3.3 Knock-In DCI (Appearing)

Spot **1.1150**, EUR put / USD call strike **1.1000**, knock-in **1.0900**, 3 months, maximum **9.00%**, money-market rate **1.50%**.

The conversion feature only **appears** once 1.0900 is touched. Until then the investor has an ordinary deposit. Because the conversion risk is conditional, the structure can pay more than a standard DCI with the same strike — the investor is being paid for accepting a risk that may not materialise.

## 7.4 Structured Products

Every structure should be decomposed into a deposit or bond plus long or short option legs. Step-up structures alter the coupon over time, often with a callable feature. Bull and bear spreads cap the maximum payoff. A one-touch may lock in a rate or convert after a touch.

### 7.4.1 Accumulators

An accumulator buys the underlying on a regular schedule at a **discounted** price, and is typically **long in-the-money calls plus short out-of-the-money puts**. Below the strike the investor must keep buying as the price falls; above the strike but below the knock-out they buy at the discount; at or above the knock-out the note terminates.

Because the ITM calls cost more than the OTM puts, an **up-and-out knock-out barrier** is placed to reduce the cost of the calls — which caps the gain. For a **leveraged** accumulator more than one OTM put is sold, which lets the knock-out barrier be pushed further from the strike or the strike reduced further. Those barriers lower the cost but can work against the client.

The risks are high because the investor is **obliged to accumulate at prices above the prevailing market** as it falls. Step-up features multiply the quantity — commonly **2× to 5×** — once the price falls below a level, so the client accumulates more of a falling asset. Some banks offer **margin financing**, which magnifies gains and losses and makes the product riskier for both client and bank. Unwinding or offsetting is costly, and when credit concerns arise a bank may **lower its allowable lending value**, forcing a client to cover or sell at a substantial loss.

There is **no capital guarantee**. Gains are capped by the knock-out while losses continue below the strike.

### 7.4.2 Decumulators

A decumulator is the **reverse** of an accumulator. The investor is a **writer of call options** to the bank, taking on the obligation to **sell** a certain amount of the underlying on a regular basis at the contracted price or exchange rate.

Investors buy decumulators expecting a slightly **bearish** market. There is usually a knock-out level that terminates the obligation to sell once the price reaches it. For currencies, a decumulator is almost the mirror image of an accumulator, since every transaction involves a currency pair, and so decumulators are **less popular** than accumulators.

### 7.4.3 Currency Notes and Baskets

Currency notes and basket structures are covered with the other structured notes in Chapter 8.

## 7.5 Summary

Structured deposits may improve yield or customise currency and market exposure, but they can return less than a plain deposit, convert currency at an unfavourable level, be hard to exit, and expose the investor to bank credit risk. The client must understand the **worst case**, not only the headline yield.

## Exam cues

- **A structured deposit is a bank deposit**, but it is **not necessarily deposit-insured**, and early withdrawal may cost principal or return. Return depends on another instrument; the worst case may be principal back with **zero interest**.
- **Suitability has seven criteria:** risk appetite (ability **and** willingness), experience and knowledge, liquidity needs, horizon, product risk, restrictions (RNF-notified representatives), and disclosure.
- **Feature trade-offs:** selling a call or put raises yield; buying one lowers it; longer maturity raises yield; higher leverage raises both return and loss; a strike closer to spot makes the sold option dearer and more likely to cost the investor.
- **Participation rate = discount sum / call premium.** Bond A: 21.65/24 = **90.21%**; Bond B: 28.70/24 = **119.58%**.
- **DCI is a short call on the reference currency plus a long money-market deposit.** The premium is the yield uplift above the money-market rate — the 10.00% against 1.75% example.
- **Knock-out DCI pays less than the standard** (8.50% vs 9.00%) because the knock-out protects the investor; **knock-in DCI** can pay more because the conversion risk is conditional.
- **Range accrual:** payout = inside rate × days inside/total + outside rate × days outside/total. 88 of 90 days at 7.25%/2.00% gives **7.13%**.
- **Accumulator:** 1× above the strike to the knock-out, and multiplied — commonly **2× to 5×** — below the strike. Gains are capped by the knock-out while losses continue. A decumulator is the mirror, sold as a call writer.
- **Trap:** the discounted strike is compensation for an obligation, not a bargain. Below the strike the investor must keep buying a falling asset, and with step-up gearing must buy **more** of it.
