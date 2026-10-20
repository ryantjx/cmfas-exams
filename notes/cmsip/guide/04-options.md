---
id: '4'
kind: 'chapter'
num: 4
part: null
title: 'Options'
order: 4
slug: 'chapter-4-options'
---

# Chapter 4 — Options

Options separate rights from obligations, which is why they can be priced, hedged and combined far more finely than futures. This chapter builds from payoff arithmetic through the Greeks to the strategy matrix the examination tests.

## Learning Objectives

The candidate should be able to:

- Understand the basic concepts of options and how they are traded.
- Explain the features of call and put options.
- Describe the major factors affecting the price sensitivity of options.
- Explain the rights, obligations, benefits and risks of using options.
- Calculate breakeven, profit and loss from an option contract.
- Explain how traders use options strategies.
- Explain neutral, bullish and bearish strategies based on the investor's outlook.
- Explain how to use options to hedge an underlying position.
- Describe options on equities, bonds, interest rates, currencies, futures and swaps.

## 4.1 What is an Option?

An option is a contract between the **option writer** (seller/issuer) and the **option holder** (buyer) giving the holder the right to buy from, or sell to, the writer at a contracted strike price within a specific period. There are two types: **calls** and **puts**.

The exchange-listed market dates from **1973**, when the Chicago Board Options Exchange listed calls on **16 stocks**; before that, options were OTC only. Singapore's options market remains largely OTC, which makes counterparty scrutiny important.

**Call option:**

- **a. Buyer.** Has the right but not the obligation to buy the underlying at the strike within the period. On exercise the holder pays the strike and takes possession.
- **b. Writer.** Receives the premium and must deliver the underlying if assigned.

**Put option:**

- **a. Buyer.** Has the right but not the obligation to sell the underlying at the strike.
- **b. Writer.** Receives the premium and must take delivery at the strike if assigned.

Exotic features include compound options, and underlyings extend to real estate, weather, volatility and ETFs.

## 4.2 Style of Option

### 4.2.1 Style of Option

**European** options are exercisable only at expiry; **American** options at any time up to expiry. OTC contracts may use **Bermudan** or event-dependent exercise. US listed equity options conventionally expire on the **third Friday** of the month, moving to the Thursday if that Friday is a holiday.

### 4.2.2 Strike Price

The contractual price at which the underlying is bought or sold on exercise.

### 4.2.3 Expiration Date

The last date on which the option may be exercised. Listed series follow monthly cycles coded **JAJO** (January, April, July, October), **FMAN** (February, May, August, November) and **MJSD** (March, June, September, December).

### 4.2.4 Class and Series

A **class** is all options of the same type on the same underlying; a **series** is all options of the same class with the same strike and expiry.

## 4.3 Option Price

$$ \text{option price (premium)} = \text{intrinsic value} + \text{time value} $$

### 4.3.1 Intrinsic Value

For a call, exercise has value when the market price exceeds the strike; for a put, when the strike exceeds the market price.

$$ IV_{\text{call}} = \max(0,\ S - X) \qquad IV_{\text{put}} = \max(0,\ X - S) $$

| Moneyness | Call | Put |
|---|---|---|
| **In-the-money (ITM)** | $$S > X$$, positive intrinsic value | $$X > S$$, positive intrinsic value |
| **At-the-money (ATM)** | $$S = X$$, zero intrinsic value | $$X = S$$, zero intrinsic value |
| **Out-of-the-money (OTM)** | $$S < X$$, zero intrinsic value | $$X < S$$, zero intrinsic value |

**Call example.** Strike $$X = 50$$, premium $$P = 6$$, underlying $$S = 54$$. Intrinsic value is **4** and time value **2**. If the underlying is 48 at expiry, intrinsic value is 0.

**Put example.** Strike $$X = 50$$, premium $$P = 9$$, underlying $$S = 44$$. Intrinsic value is **6** and time value **3**. If the underlying is 53 at expiry, intrinsic value is 0.

### 4.3.2 Time Value of Options

Time value is generally positive and falls to zero at expiry, so at expiration the option is worth exactly its intrinsic value:

$$ \text{option price} = \text{intrinsic value as time value} \to 0 $$

The longer the time to expiry, the greater the time value. An option that looks worthless today — ATM or OTM, zero intrinsic value — may be in the money by expiry.

### 4.3.3 Comparison of Call versus Put

| Criterion | Call buyer | Call seller | Put buyer | Put seller |
|---|---|---|---|---|
| **Obligation** | Pays the premium | Delivers the underlying if assigned | Pays the premium | Takes delivery of the underlying at the strike |
| **Right** | May buy at the strike | — | May sell at the strike | — |
| **Maximum gain** | $$U_{Mkt} - U_{Strike} - \text{premium}$$, theoretically unlimited | The premium | $$U_{Strike} - \text{premium}$$, at an underlying of zero | The premium |
| **Maximum loss** | The premium | Theoretically unlimited | The premium | $$U_{Strike} - \text{premium}$$ |
| **Counterparty risk** | Bears the writer's | Bears the buyer's | Bears the writer's | Bears the buyer's |
| **Opportunity cost** | — | Forgone upside on a covered call | — | Forgone premium on a rally |

## 4.4 Factors Influencing Premiums

| Change, all else constant | Call value | Put value |
|---|---|---|
| Underlying price rises | Rises | Falls |
| Strike rises | Falls | Rises |
| Time to expiry rises | Generally rises | Generally rises |
| Volatility rises | Rises | Rises |
| Risk-free rate rises | Rises | Falls |
| Dividends rise | Falls | Rises |

### 4.4.1 Underlying Price

A call gains as the underlying rises; a put loses.

### 4.4.2 Strike Price

A higher strike makes a call cheaper and a put dearer.

### 4.4.3 Time to Expiration

More time means more chance of finishing in the money, so both calls and puts carry more time value.

### 4.4.4 Volatility of the Underlying

Higher volatility widens the distribution of outcomes and raises the value of both calls and puts, because the holder's loss is floored at the premium while the upside is open.

### 4.4.5 Interest Rates

The interest forgone on the cash needed to buy the underlying — the opportunity cost, measured against a risk-free alternative such as Treasury bills — is embedded in the option. The higher the rate, the greater that opportunity cost, so there is a **positive relationship between interest rates and call value**; puts move inversely.

### 4.4.6 Expected Dividends

For equity options, a dividend reduces the share price when it goes ex-dividend, which lowers call value and raises put value.

## 4.5 Payoff Profiles

A payoff profile shows maximum gain, maximum loss and breakeven as a function of the underlying at expiry.

### 4.5.1 Buying a Call

An investor bought a call a month ago with premium **USD 4**, strike **USD 100**, and the share is now **USD 110**.

Payoff to the call buyer:

$$ C_T = S_T - X \ \text{if } S_T > X \ (\text{ITM}); \quad C_T = 0 \ \text{if } S_T \le X $$

| Item | Result |
|---|---|
| **i. Payoff and profit** | Payoff is **USD 10** (110 − 100); profit after premium is **USD 6** |
| **ii. Breakeven** | The share must rise above the strike by the premium: **USD 104** |
| **iii. Maximum gain** | Theoretically unlimited |
| **iv. Maximum loss** | The premium paid, **USD 4**; if $$S_T < X$$ exercise does not occur and the option expires worthless |
| **v. Obligations** | Apart from paying the premium, none unless the buyer exercises, and then to pay the strike |

### 4.5.2 Selling a Call

An investor sells a call with premium **USD 4**, strike **USD 100**, share at **USD 90**.

Payoff to the writer:

$$ C_T = -(S_T - X) \ \text{if } S_T > X; \quad C_T = 0 \ \text{if } S_T \le X $$

| Item | Result |
|---|---|
| **i. Payoff and profit** | Below USD 100 there is no reason to exercise, so payoff is zero and profit is the **USD 4 premium**. Above the strike the profit erodes and becomes a loss beyond **USD 104** |
| **ii. Breakeven** | **USD 104** — identical to the buyer's |
| **iii. Maximum gain** | The **USD 4** premium, when the share is at or below the strike |
| **iv. Maximum loss** | Theoretically unlimited |
| **v. Obligations** | Must deliver if assigned |

### 4.5.3 Buying a Put

An investor buys a put with premium **USD 4**, strike **USD 130**, share at **USD 120**.

| Item | Result |
|---|---|
| **i. Payoff and profit** | Payoff **USD 10** (130 − 120); profit **USD 6** |
| **ii. Breakeven** | **USD 126** (130 − 4) |
| **iii. Maximum gain** | **USD 126** at an underlying of zero, being the strike less the premium |
| **iv. Maximum loss** | The premium, **USD 4** |
| **v. Obligation** | None except on exercise |

### 4.5.4 Selling a Put

An investor sells a put with premium **USD 4**, strike **USD 130**, underlying at **USD 140** initially and **USD 120** at expiry.

Payoff to the writer is the mirror image of the holder:

$$ P_T = -(X - S_T) \ \text{if } S_T < X; \quad P_T = 0 \ \text{if } S_T \ge X $$

| Item | Result |
|---|---|
| **i. Payoff and profit** | Zero above USD 130, with the **USD 4** premium as maximum profit; below the strike the profit erodes and turns to loss |
| **ii. Breakeven** | **USD 126** |
| **iii. Maximum gain** | The **USD 4** premium |
| **iv. Maximum loss** | **USD 126**, when the underlying falls to zero |
| **v. Obligation** | Must take delivery at the strike if assigned |

## 4.6 Put-Call Parity

### 4.6.1 Definition

For European options on the same underlying, strike and expiry, with consistent units and dividends correctly treated:

$$ C + \text{PV}(X) = P + S $$

The relationship assumes no arbitrage, a frictionless market, known dividends, the same exercise style and no early exercise.

### 4.6.2 Arbitrage

A violation is traded as a **conversion** or **reversal**. If $$C + \text{PV}(X) > P + S$$, sell the call, buy the put and buy the stock. If the left side is cheaper, reverse the trade. Funding, dividends, exercise style, transaction costs and short-sale constraints determine whether the arbitrage is real.

### 4.6.3 Synthetic Securities

| Synthetic position | Built from |
|---|---|
| **Long stock** | Long call + short put at the same strike (plus the parity bond) |
| **Short stock** | Long put + short call |
| **Long call** | Long underlying + long put |
| **Long put** | Short underlying + long call |
| **Short call** | Short underlying + short put |
| **Short put** | Long underlying + short call |

Each synthetic reproduces the cash flows of the position on the left, so a trader can choose whichever route is cheaper after funding and transaction cost.

## 4.7 Valuation

### 4.7.1 Black-Scholes

The model takes six inputs — spot, strike, time to expiry, interest rate, dividends and volatility — and returns a theoretical premium. **Binomial trees** handle early exercise and American features. The examination does **not** require model calculations, but does require explanation.

### 4.7.2 Volatility

Volatility is the annualised standard deviation of daily price changes. **Historical** volatility is measured from past prices; **implied** volatility is backed out of the observed option price and represents the market's forward-looking estimate. The two can diverge.

### 4.7.3 The Option Greeks

The Greeks measure sensitivity of the premium to each input.

| Greek | Measures | Typical sign for a long option |
|---|---|---|
| **Delta** | Change in option price per unit change in underlying | Positive for calls, negative for puts |
| **Gamma** | Change in delta per unit change in underlying | Positive |
| **Theta** | Time decay | Negative |
| **Vega** | Sensitivity to implied volatility | Positive |
| **Rho** | Sensitivity to the interest rate | Positive for calls, negative for puts |

### 4.7.4 Delta

$$ \delta = \frac{\partial V}{\partial S} $$

A delta of **0.50** means a **USD 2** move in the underlying changes the option price by **USD 1.00**. Delta approaches **1** for deep in-the-money options near expiry and **0** for deep out-of-the-money options.

**Delta hedging.** A writer short **1,000 calls** with delta **0.642** loses **USD 642** on a one-unit rise; hedging requires buying **642 units** of the underlying.

### 4.7.5 Gamma

$$ \Gamma = \frac{\partial^2 V}{\partial S^2} = \frac{\partial \delta}{\partial S} $$

Gamma is largest at-the-money and close to expiry, when delta changes fastest. A high-gamma book requires frequent rebalancing.

### 4.7.6 Theta

Time decay, normally negative for a long option. At-the-money options lose the most dollar value per day: a one-day theta of **−0.0250** is **−2.5 cents a day**.

### 4.7.7 Vega

Sensitivity to a one-percentage-point change in implied volatility; a vega of **0.090** means the premium changes by 9 cents per volatility point. Vega is larger at-the-money and for longer-dated options. Implied volatility is obtained by inverting the pricing model against the observed price.

### 4.7.8 Rho

Sensitivity to a one-percentage-point change in the interest rate; a rho of **0.060** means the premium changes by 6 cents per point. Call rho is positive and put rho negative, because higher rates raise the opportunity cost of holding the underlying.

### 4.7.9 Practical Hedging Problems

Delta hedging is dynamic and imperfect. Rebalancing costs, jumps through levels, liquidity, changing volatility, discrete monitoring and model error all remain. A market maker manages the whole Greek book, not just delta.

## 4.8 Exchange versus OTC Options

| Exchange options | OTC options |
|---|---|
| Standardised strikes, expiries and sizes | Tailored strike, date, notional, barrier, settlement currency |
| Clearing house counterparty | Bilateral counterparty and documentation risk |
| Transparent prices and secondary liquidity | Valuation and liquidity risk; CSA collateral terms matter |

## 4.9 Option Contract Specifications

Read the whole term sheet, not just the ticker. An SGX equity index option specification illustrates what to check:

| Term | Specification |
|---|---|
| Ticker | `CS — Calls` |
| Contract size | One MSCI Singapore index future |
| Contract months | 2 nearest serial months plus the quarterly cycle (Mar/Jun/Sep/Dec) |
| Trading hours | T session 8.15–8.30 opening (cancel/match), 8.30–17.15; T+1 18.00–18.15 opening, 18.15–02.00; last trading day 8.30–17.15 |
| Last trading day | Second-last business day of the expiring month |
| Tick size | 0.1 index point, worth **SGD 20** |
| Strike intervals | **5 index points** |
| Exercise style | European or American, per the series |
| Settlement | Cash settled; in-the-money options **auto-exercised** |
| Price limits | Daily limit of **5%** up or down, with circuit breakers |
| Position limit | **10,000 contracts** net on the same side, all months combined |

## 4.10 Options on Other Underlyings

### 4.10.1 Equity Index Options

Index options were listed on the **CBOE in 1983**. They are usually cash settled, and the payoff is multiplied by the contract multiplier.

| Contract | Index value | Multiplier | Style |
|---|---|---|---|
| **SPX** (S&P 500 options) | Full index value | **USD 100** | European |
| **XSP** (Mini-SPX) | 1/10th of the index | **USD 100** | European |

### 4.10.2 Bond Options

Bond options are mostly OTC, with expiries set well before bond maturity. A bank buying a call at a strike of **USD 102** with the bond at **USD 101** gains protection against a rise in price — that is, a fall in yield.

### 4.10.3 Interest Rate Options

Caps, floors and collars are the interest-rate equivalents of calls, puts and combinations. CME lists options on US Treasuries and Eurodollar; ICE on Euribor; SGX on the 10-year Mini-JGB and Euroyen (TIBOR).

#### 4.10.3.1 Options on Eurodollar Futures

Options on short-rate futures are quoted on **100 − yield**. One tick is:

$$ \text{USD } 1{,}000{,}000 \times \frac{1}{10{,}000} \times \frac{90}{360} = \text{USD } 25 $$

A quarter tick is **USD 6.25** in the spot month and a half tick **USD 12.50** in other months.

**Mid-curve example.** A 1-year Eurodollar mid-curve option on the Dec-2019 futures at **96.93**, American style, tick value USD 25, expiry June 2019, is struck on a ladder from 9,637.50 to 9,750.00. Call prices run 51.50, 42.00, 33.25, 26.25, 20.25, 15.50, 12.00, 9.25, 7.25 and 5.75; put prices 4.00, 6.75, 10.50, 15.75, 22.50, 29.75, 38.75, 48.25, 58.75 and 69.75.

**Hedge arithmetic.** A borrower wanting to cap the rate at 2.75% buys the strike-97.250 option (that is, 100 − 2.750) at a cost of **9.25bp**, so the realised rate is:

$$ 2.7500\% - 0.0925\% = 2.6575\% $$

A lender buying the put at **48.25bp** achieves:

$$ 2.7500\% + 0.4825\% = 3.2325\% $$

#### 4.10.3.2 Interest Rate Caps

A cap is a series of call-like options on a reference rate, setting a maximum. A **SGD 200 million 3-year cap at 2.00%** on 3-month SIBOR, struck in March 2018 when SIBOR was 1.375%, pays when SIBOR fixes at **2.125%** in June 2019:

$$ \frac{90}{360} \times (2.125\% - 2.00\%) \times 200{,}000{,}000 = \text{SGD } 62{,}500 $$

#### 4.10.3.3 Interest Rate Floors

A floor is a series of put-like options setting a minimum rate, protecting a lender or depositor against falling rates.

#### 4.10.3.4 Interest Rate Collars

A collar buys one option and sells another, reducing or eliminating premium at the cost of capping the benefit. A borrower buys a cap and sells a floor; the sold floor funds the bought cap.

### 4.10.4 Currency Options

A currency option involves **two** currencies, not one price. A USD/JPY call is economically the same exposure as a JPY/USD put. Large notionals and a 24-hour market heighten monitoring and counterparty risk.

### 4.10.5 Options on Futures

An option on a futures contract confers the right to enter a futures position at the strike. Such options are typically more liquid than options on the cash instrument, but they introduce a **delivery problem** when cross-hedging. All SGX options are futures options, American style, with in-the-money positions auto-exercised. The **SGX Nifty 50** option covers 50 large, liquid NSE stocks representing about 70% of free float, is cash settled on the average weighted prices of the components, and benefits from the CME mutual-offset arrangement.

### 4.10.6 Swaptions

A **swaption** is an option to enter a swap at a fixed rate on a future date. A **payer** swaption gives the right to pay fixed — it protects against rising rates. A **receiver** swaption gives the right to receive fixed — it protects against falling rates. The terms that matter are premium, expiry, notional, the fixed rate and floating index, payment frequency and day count.

## 4.11 Basic Option Strategies

### 4.11.1 Call Buying Strategies

Calls are bought for four reasons: capital investment, taking risk exposure, extracting cash from a position, and hedging.

**Hedging a short.** An investor is short at **USD 12.00** and buys a call at strike **12.40** for **0.80**. Breakeven is **11.20**; maximum loss **USD 1.20**; maximum gain **USD 11.20** if the share falls to zero.

### 4.11.2 Call Writing Strategies

**Covered call.** Buy the stock at $$S_0 = 12.00$$, write a call at $$X = 12.40$$ for $$C_0 = 0.80$$.

$$ \text{Profit} = S_T - \max(0, S_T - X) - S_0 + C_0 $$

| Item | Calculation | Result |
|---|---|---|
| Breakeven | $$S_0 - C_0 = 12.00 - 0.80$$ | **11.20** |
| Maximum gain | If $$S_T > X$$: $$X - S_0 + C_0 = 12.40 - 12.00 + 0.80$$ | **1.20** |
| Maximum loss | If $$S_T = 0$$: $$0 - 12.00 + 0.80$$ | **−11.20** |

The call will not be exercised once the shares have fallen, so the writer keeps the premium but bears the full fall in the stock.

### 4.11.3 Put Buying Strategies

**Protective put.** Stock at **USD 12.00**, put at strike **11.60** for **0.80**. Breakeven **12.80**; maximum loss **USD 1.20**; upside retained without limit above the breakeven.

### 4.11.4 Put Writing Strategies

A put writer earns premium in exchange for a conditional obligation to buy the underlying. A **bull ELN** works this way: a one-month note issued at **USD 9,900** against USD 10,000 face, a vanilla yield of 5% p.a., ABC spot **USD 10** and a put struck at **USD 9**.

- If $$S_T \ge 9$$, the note returns USD 10,000: a gain of 1.01% for the month, or **12.82% p.a.**
- If $$S_T < 9$$, the note delivers **1,111 shares**. At **USD 8.80** those are worth USD 9,776.80, a loss of **1.24%**.

The uplift over the vanilla note — **7.82% p.a.** — is exactly the premium on the embedded short put.

## 4.12 Market Driven Strategies

### 4.12.1 Neutral Strategies

Used when the investor expects little movement. Premium is collected by selling options, and the risk is a break out of the range.

### 4.12.2 Bullish Strategies

Long call, bull call spread, bull put spread. The spread versions cap both gain and loss.

### 4.12.3 Bearish Strategies

Long put, bear put spread, bear call spread.

### 4.12.4 Creating Spreads

A spread pairs a long and a short option of the same type, differing in strike or expiry. **Debit** spreads pay premium — bull call, bear put. **Credit** spreads receive premium — bull put, bear call.

### 4.12.5 Straddle

A long straddle buys a call and a put at the **same strike**. With ABC at **USD 20** in September, buying the October 20 call and the October 20 put produces three outcomes at expiry:

| Outcome | Result |
|---|---|
| $$S_T = 20$$ | Both expire worthless; the loss is the whole cash outlay |
| $$S_T > 20$$ | The call is in the money; profit is $$S_T - 20 - \text{outlay}$$, potentially unlimited |
| $$S_T < 20$$ | The put is in the money; profit is $$20 - S_T - \text{outlay}$$, with a maximum payout of USD 20 at zero |

The strategy is neutral on direction and **long volatility**. Maximum loss is the cash outlay, occurring precisely at the strike.

### 4.12.6 Strangle

A strangle buys a call and a put at **different** out-of-the-money strikes. With ABC at USD 20, buy the October 25 call and the October 15 put. It costs less than a straddle but needs a larger move. The **short** strangle does the reverse: selling the call for USD 2 and the put for USD 1 collects **USD 3**. At an underlying of 14 the put loses USD 1 while the call gains USD 2; at 26 the call loses USD 1.

### 4.12.7 Bull Call Spread

ABC at **USD 21**. Buy the October 20 call at **1.50** and sell the October 25 call at **0.75**, for a net debit of **0.75**.

| Item | Result |
|---|---|
| Breakeven | **20.75** |
| Maximum profit | **4.25** (the 5-point strike gap less the 0.75 debit) |

### 4.12.8 Bull Put Spread

ABC at **USD 24**. Buy the October 20 put at **0.75** and sell the October 25 put at **1.25**, for a net credit of **0.50**. Maximum loss is **4.50**; at an underlying of 23 the result is **−1.50**.

### 4.12.9 Bear Call Spread

ABC at **USD 18**. Buy the October 20 call at **1.50** and sell the October 15 call at **3.50**, for a net credit of **2.00**. Maximum loss is **3.00**.

### 4.12.10 Bear Put Spread

ABC at **USD 18**. Buy the October 15 put at **1.00** and sell the October 20 put at **3.00**, for a net debit of **2.00**. Maximum gain is **3.00**.

### 4.12.11 Other Market Driven Strategies

A three-by-three matrix of outlook against expected volatility selects the structure: the direction (bullish, neutral, bearish) fixes which legs to hold, and the volatility view fixes whether to be long or short premium.

| View | Structure | Exposure |
|---|---|---|
| Strongly bullish | Long call, bull call spread | Rise |
| Strongly bearish | Long put, bear put spread | Fall |
| Large move, direction unknown | Long straddle or strangle | Long volatility |
| Range-bound, low volatility | Short strangle, iron condor | Short volatility, tail risk |
| Neutral at one strike | Butterfly | Limited central profit |
| Neutral over a wider zone | Condor | Wider zone, lower maximum |

## 4.13 Hedging

### 4.13.1 Protect an Equity Portfolio

A protective put floors the downside at the strike after the premium. With ABC at USD 20, selling the USD 30 call for 1.50 is a **covered call**: the premium is earned but the upside above 30 is surrendered — the opportunity cost of the strategy.

### 4.13.2 Manage Currency Exposure

An importer with USD 2 million payable, USD/JPY at 100, buys a USD call / JPY put struck at 105. The exporter's mirror position is set out below.

| Spot at expiry | Unhedged proceeds | Hedged with a 105 put at JPY 1 premium |
|---|---|---|
| 100 | 100 | **99** |
| 110 | 110 | **109** |
| 90 | 90 | **94** |

The hedge floors the rate at 94 while retaining the upside above 105, less the JPY 1 premium.

### 4.13.3 Zero-Cost Options

A **zero-cost collar** buys a put and sells an out-of-the-money call so the premiums roughly offset.

**NVDA costless collar.** Spot **USD 156.00**. Sell 1,000 January-2020 **USD 160** calls at **USD 15.30**; buy 1,000 January-2020 **USD 155** puts at **USD 15.30**. Net outlay is zero.

- Below 155, say 125: the put pays USD 30 against a stock loss of USD 31 per share, so a residual loss of **USD 1,000** across the position.
- Between 155 and 160: neither option pays.
- Above 160: the stock is called away; upside is capped at the call strike.

The collar is not free of risk — the residual USD 1,000 is the gap between the two strikes — and it assumes no dividends and no interest over the life.

### 4.13.4 Summary of Options Strategies

The full strategy map crosses the market view — yield, bullish, neutral, protective, bearish — against the structure, and records whether each is a debit or credit, its maximum gain and its maximum loss. Learn the payoff of every single leg before combining them; the combination is only the sum of the legs.

## 4.14 Summary

Options separate rights from obligations. Price is intrinsic plus time value, and volatility, time, rates and dividends drive the premium. Learn payoff, breakeven and maximum loss for each leg before combining legs. Parity explains synthetic positions and the Greeks explain risk management.

## Chapter 4 Appendix — Additional Spreads (non-examinable)

### Long Call Butterfly

With strikes at **USD 10, 20 and 30**, buy one in-the-money call, sell two at-the-money calls and buy one out-of-the-money call. Maximum gain is USD 10 less the net outlay; maximum loss is the outlay.

### Long Put Butterfly

Strikes at **USD 15, 25 and 35**, the mirror construction. Maximum gain is USD 10 less the outlay.

### Vertical, Horizontal and Diagonal Spreads

A **vertical** spread uses the same expiry with different strikes. A **horizontal** or calendar spread uses the same strike with different expiries. A **diagonal** spread differs in both strike and expiry.

### Condor Spread

| | Long | Short |
|---|---|---|
| **Calls** | Buy the low strike, buy the high strike | Sell the two middle strikes |
| **Puts** | Buy the low strike, buy the high strike | Sell the two middle strikes |

### Ratio Hedge

A 2:1 spread: two options sold against one bought. Upside is limited while downside can become very large.

### Seagull Strategy

A three-legged structure with zero net outlay. With USD/JPY at **113**, sell the 109 put, sell the 115 call and buy the 111 put. At a spot of 110 the position can be closed for a profit.

To **re-centre**, buy back the 115 call and 109 put for **−1.50%**, then sell the 112 call and 107 put for **+1.35%**, for a net **−0.15%**, while retaining the in-the-money 111 put.

### Protecting or Re-centring a Short Strangle

A three-month roll and adjustment sequence: as the market moves against one leg, buy back the threatened option and sell a further out-of-the-money option to fund it, keeping the position short premium but re-centred on the new range.

### Appendix Strategy Summary

The appendix closes with a grid recording, for each structure, the market view, debit or credit, maximum gain and maximum loss.

## Exam cues

- **Premium = intrinsic + time value.** Call IV = max(0, S − X); put IV = max(0, X − S). Time value is zero at expiry.
- **Breakeven:** long call **X + premium**; long put **X − premium**. Buyer and writer share the same breakeven.
- **Maximum loss:** long call and long put lose the premium. A naked short call is unlimited; a short put loses down to a zero underlying, so its maximum loss is X − premium.
- **Payoff arithmetic to memorise:** call premium 4, strike 100, share 110 → payoff 10, profit 6, breakeven 104. Put premium 4, strike 130, share 120 → payoff 10, profit 6, breakeven 126, maximum gain 126.
- **Parity** $$C + \text{PV}(X) = P + S$$; long stock = long call + short put.
- **Greeks:** delta 0.50 → USD 1 move per USD 2 underlying; short 1,000 calls at delta 0.642 needs 642 units to hedge; gamma peaks ATM near expiry; theta −0.0250 is −2.5 cents a day; vega 0.090 and rho 0.060 are per one-point moves.
- **Eurodollar option tick = USD 25** (1,000,000 × 1/10,000 × 90/360). The 2.75% cap costing 9.25bp realises 2.6575%; the 48.25bp put realises 3.2325%.
- **Strategies:** bull call ABC 21 → long 20 @ 1.50, short 25 @ 0.75, debit 0.75, breakeven 20.75, max profit 4.25. Covered call 12.00/12.40/0.80 → breakeven 11.20, max gain 1.20, max loss −11.20.
- **Trap:** shorting a put is not a hedge — it is a bullish obligation. A collar is not riskless, and a covered call sells away the upside above the strike.
