---
id: '4'
kind: 'chapter'
num: 4
part: null
title: 'Options'
order: 4
slug: 'chapter-4-options'
---

# Options

## 4.1 What is an option?

An option is a contract in which the buyer pays a premium for a right and the seller/writer accepts an obligation. A call gives the holder the right to buy; a put gives the holder the right to sell. The buyer may exercise or allow the option to expire. The writer must perform if exercised.

European options are exercisable only at expiry; American options can be exercised any time up to expiry. OTC contracts may use other exercise conventions, including Bermudan or event-dependent exercise. The strike/exercise price, expiry, underlying, contract size, settlement and style define the option.

## 4.2 Features and definitions

$$
\text{option price/premium} = \text{intrinsic value} + \text{time value}
$$

For a call, $$IV = \max(0,\ S - X)$$; for a put, $$IV = \max(0,\ X - S)$$. Time value = premium − intrinsic value.

- **ITM:** immediate exercise has positive value.
- **ATM:** immediate exercise has approximately zero value.
- **OTM:** immediate exercise has no positive value.
- **Strike:** contractual exercise price.
- **Expiry:** last exercise/trading date; time value decays toward zero.
- **Class/series:** all options on the same underlying, with a particular strike and expiry, form a series.

Exchange option cycles use month codes such as JAJO, FMAN and MJSD; contract specifications determine the actual listed series.

## 4.3 Option price/payoff

At expiry, ignoring costs:

- long call payoff = $$\max(0,\ S - X)$$; profit = payoff − premium;
- long put payoff = $$\max(0,\ X - S)$$; profit = payoff − premium;
- short call profit = premium − call payoff;
- short put profit = premium − put payoff.

Long-call breakeven = $$X + \text{premium}$$; maximum loss is premium and upside is theoretically unlimited. Long-put maximum loss is premium; maximum payoff before premium is $$X$$ if the underlying falls to zero. Naked short calls can have unlimited losses; naked short puts can lose substantially down to zero. Covered calls and spreads limit some risk.

## 4.4 Factors affecting premiums

| Change | Call value | Put value |
|---|---:|---:|
| Underlying price rises | rises | falls |
| Strike rises | falls | rises |
| Time to expiry rises | generally rises | generally rises |
| Volatility rises | rises | rises |
| Risk-free rate rises | rises | falls |
| Dividends rise | falls | rises |

These are ceteris paribus relationships. Implied volatility is the market’s volatility estimate embedded in the premium; it can change independently of realised volatility.

## 4.5 Payoff and strategy logic

The option holder has limited loss and optionality; the writer receives premium but accepts contingent obligations. A strategy’s payoff must be analysed at expiry and before expiry because time value, implied volatility, rates, dividends, liquidity and early exercise matter.

## 4.6 Put-call parity

For European options on the same underlying, strike and expiry, with consistent units and no dividends (or dividends correctly discounted):

$$
C + \text{PV}(X) = P + S
$$

This creates synthetic positions:

- long stock = long call + short put;
- short stock = long put + short call;
- long call = long stock + long put − bond/PV(strike) as expressed through parity;
- long put = short stock + long call + bond/PV(strike);
- short call and short put are the corresponding reversals.

Parity supports arbitrage, conversion/reversal and pricing checks, but funding, dividends, exercise style, transaction costs and borrow constraints matter.

## 4.7 Valuation and Greeks

Black–Scholes-type models use spot, strike, time, interest rate, dividends and volatility. Binomial trees handle early exercise and American features. The examination does not require model calculations but expects conceptual understanding.

- **Delta:** change in option value per unit change in underlying; used for directional exposure and dynamic hedging.
- **Gamma:** change in delta per unit change in underlying; largest around ATM and close to expiry; makes delta change rapidly.
- **Theta:** time decay; normally negative for long options and positive for short options.
- **Vega:** sensitivity to implied volatility; generally positive for long calls and puts.
- **Rho:** sensitivity to interest rates; generally positive for calls and negative for puts.

Delta hedging is dynamic and imperfect: rebalancing costs, jumps, liquidity, volatility changes, discrete monitoring and model error remain. A market maker manages the whole Greek book, not only delta.

## 4.8 Exchange versus OTC options

Exchange options provide standardisation, clearing, transparency and secondary liquidity. OTC options permit tailored strikes, dates, notionals, barriers, settlement and currencies but add bilateral counterparty, documentation, valuation and liquidity risk. Read the confirmation and collateral/CSA terms.

## 4.9 Contract specifications

Check ticker, underlying, contract size/multiplier, listed months, trading hours, last trading day, tick size, strike intervals, exercise style, price limits, settlement (physical/cash), delivery terms, margin and corporate-action adjustments.

## 4.10 Options on other underlyings

- **Equity-index options:** usually cash-settled; multiply index payoff by the contract multiplier.
- **Bond options:** expose the investor to rates, credit, liquidity and embedded-option risk.
- **Interest-rate options:** caps are call-like protection against rising rates; floors are put-like protection against falling rates; collars combine buying one and selling another.
- **Eurodollar/short-rate options:** often quoted on $$100 - \text{yield}$$; the tick value converts price changes into dollars.
- **Currency options:** involve two currencies, not just a single share price; large notionals and 24-hour markets heighten monitoring and counterparty risk.
- **Options on futures:** the option gives the right to enter a futures position at the strike.
- **Swaptions:** options to enter swaps; a payer swaption protects against rising rates, while a receiver swaption protects against falling rates. Exercise date, swap tenor, fixed rate, notional and settlement are key.

## 4.11 Basic option strategies

- **Long call:** bullish, limited loss, unlimited upside.
- **Short/naked call:** bearish/neutral income, potentially unlimited loss.
- **Covered call:** long underlying + short call; earns premium but caps upside.
- **Long put:** bearish or insurance, limited loss.
- **Uncovered short put:** bullish/neutral income, large downside.
- **Protective put:** long underlying + long put; floors downside at the strike after the premium.
- **Put writing/yield enhancement:** premium income in exchange for a conditional obligation to buy the underlying.
- **Bull ELN:** generally embeds a short put; it may deliver the stock at the strike if the stock falls.

## 4.12 Market-outlook strategies

| View | Typical structure | Main exposure |
|---|---|---|
| Strong bullish | long call, bull call spread, bull put spread | rise; spread limits gain/loss |
| Strong bearish | long put, bear put spread, bear call spread | fall; spread limits gain/loss |
| Large move, direction uncertain | long straddle/strangle | long volatility; time decay |
| Range-bound, volatility expected low | short strangle/iron-type range structure | short volatility; tail risk |
| Moderate rise/fall | vertical spreads | defined-risk directional view |
| Neutral around a central strike | butterfly | limited central profit zone |
| Wider neutral profit zone | condor | wider zone, lower maximum profit |

Debit spreads pay a net premium (e.g., bull call/bear put); credit spreads receive a net premium (e.g., bull put/bear call). A long straddle buys call and put at the same strike; a strangle uses different OTM strikes and is cheaper but needs a larger move. Short volatility strategies have potentially severe losses if the underlying breaks out.

## 4.13 Hedging

Protective puts insure long shares. Covered calls generate income but sell away upside. Importers may buy calls or call spreads; exporters may buy puts or put spreads. A zero-cost/costless collar buys a put and sells an OTM covered call where premiums approximately offset; it limits both downside and upside and is not risk-free. A currency collar can similarly reduce premium cash outlay while creating participation limits.

## 4.14 Summary

Options separate rights from obligations. Price is intrinsic plus time value, and volatility/time/rates/dividends drive the premium. Learn payoff, breakeven and maximum loss for each leg before combining legs. Parity and Greeks explain synthetic positions and risk management.

## Chapter 4 non-exam appendix: additional spreads

Additional spreads include long call/put butterflies, vertical spreads (same expiry, different strikes), horizontal/calendar spreads (same strike, different expiries), diagonal spreads (different strikes and expiries), condors, ratio hedges, seagulls, and protecting/re-centering a short strangle. These extend the same principles: identify the market view, volatility view, time exposure, maximum loss, margin, and adjustment/roll rules.
