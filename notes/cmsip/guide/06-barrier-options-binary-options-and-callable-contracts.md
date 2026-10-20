---
id: '6'
kind: 'chapter'
num: 6
part: null
title: 'Barrier Options, Binary Options and Callable Contracts'
order: 6
slug: 'chapter-6-barrier-options-binary-options-and-callable-contracts'
---

# Barrier Options, Binary Options and Callable Contracts

## 6.1 Introduction

Exotic derivatives add exercise events, path-dependent barriers, binary payoffs, baskets, Quanto conversion, unusual underlyings or callable/maturity features. Before recommending one, explain how payoff is computed, what observation triggers action, whether the option can terminate early, whether the investor can lose the premium, and who bears counterparty risk.

## 6.2 Barrier options

A barrier option depends on whether the underlying touches or crosses a predetermined level during a specified observation period. It is path dependent: two assets with the same expiry price may have different outcomes if one touched the barrier.

- **Knock-out/kick-out:** the option ceases when the barrier is touched; a rebate may be paid.
- **Knock-in/kick-in:** the option only becomes active after the barrier is touched.
- **Up-and-out call:** barrier above current spot; one touch can cancel the call.
- **Down-and-out put:** barrier below current spot; one touch can cancel the put.
- **Double barrier:** one upper and one lower barrier; a touch of either may knock the option out or in.
- **Rebate:** pre-agreed payment after a specified barrier event.

Barrier options are often cheaper than equivalent vanilla options because the investor gives up some payoff or accepts activation uncertainty. They are usually OTC, so counterparty, valuation, liquidity, model and documentation risks are important. If a knock-out occurs, the premium can be substantially or entirely lost.

## 6.3 Knock-out applications

- **Shark’s-fin/barrier capital-preservation structure:** often a zero-coupon principal component plus an up-and-out call. It suits a view of a rise that will not breach the barrier. A sharp rally through the barrier may terminate the participation.
- **Barrier reverse convertible:** typically a funded note plus a short knock-in put. The coupon may be paid but capital can be converted into a falling underlying if the barrier is hit; it suits a neutral/flat view and willingness to own the underlying.
- **Bonus certificate:** a barrier below spot and bonus level above spot; if the barrier is not breached, the investor receives the bonus/underlying-linked amount, but if breached the protection/bonus may disappear. Dividends, issuer risk and downside remain.
- **Barrier straddle:** combines call and put exposure with upper/lower knock-out levels; it can express a volatility view but caps participation through barriers.

Barrier placement creates trade-offs: closer barriers are cheaper but easier to trigger; wider barriers cost more but preserve more vanilla-like participation.

## 6.4 Knock-in applications

Knock-in products may be cheap because the desired payoff exists only after a trigger. A knock-in put may provide protection only after a market fall; a reverse convertible’s short knock-in put may create conversion risk only after a breach. The investor must understand whether the barrier is monitored continuously, at closing, intraday or on observation dates.

## 6.5 Application and summary of barriers

Barriers can implement capital protection, yield enhancement, a conditional hedge or a view that an asset will remain within a range. They are not “free” protection: early termination, path dependence, missed participation, rebate rules, gap risk and issuer failure can dominate the payoff.

## 6.6 Barrier features in structured products

Structured deposits and notes may use knock-out, knock-in, one-touch, no-touch, digital, range and callable features. Read the interaction between the deposit/bond component and the derivative: principal may be preserved only at maturity and only if the issuer pays.

## 6.7 Binary options

A binary/digital/all-or-nothing option pays a fixed amount if a condition is satisfied and zero (or another fixed amount) otherwise. One-touch pays if the barrier is touched; no-touch pays if it is never touched; double-no-touch/range structures pay if neither boundary is breached. Binary payoff is discontinuous and highly sensitive to barrier proximity, volatility, time and monitoring convention.

## 6.8 Basket options

A basket option references several assets. Correlation affects the premium: lower or imperfect correlation may make a basket option cheaper than buying each single-asset option, but it creates correlation, composition, rebalancing, dividend and concentration risk. A “worst-of” basket pays by the weakest constituent and is especially correlation-sensitive.

## 6.9 Knock-out warrants

Knock-out warrants combine exchange-traded warrant-style leverage with a barrier that can terminate the product before the stated expiry. A breach may cause the warrant to be worth zero or a residual amount under the terms. Investors must compare the trigger, settlement, issuer, DMM, ratio and monitoring rules with a standard warrant.

## 6.10 Callable bull/bear contracts (CBBCs)

CBBCs are exchange-traded leveraged long/short products, usually linked to an equity/index. A bull profits from a rise; a bear profits from a fall. Delta is often close to 1 before the call event, and gearing is:

$$
\text{gearing} = \frac{\text{underlying price}}{\text{CBBC price} \times \text{conversion ratio}}
$$

The **mandatory call event (MCE)** is triggered when the underlying reaches the call price: for a bear, spot rises to/above the call price; for a bull, spot falls to/below it.

- **Category N:** after an MCE there is no residual value; the product is terminated.
- **Category R:** residual value may be paid based on the issuer’s post-MCE valuation window and settlement price; it may be zero.
- The call price, strike and conversion ratio are specified in the term sheet; a Category N call price need not be inferred as “always equal” to strike.

Theoretical price (simplified source formula):

- bull = $$\dfrac{(\text{underlying} - \text{strike}) + \text{financial cost}}{\text{conversion ratio}}$$;
- bear = $$\dfrac{(\text{strike} - \text{underlying}) + \text{financial cost}}{\text{conversion ratio}}$$.

Residual value for R-CBBCs:

- bull = $$\dfrac{\text{settlement price} - \text{strike}}{\text{conversion ratio}}$$;
- bear = $$\dfrac{\text{strike} - \text{settlement price}}{\text{conversion ratio}}$$.

The settlement price is subject to the MCE observation rules: a **bull** uses the **minimum** and a **bear** the **maximum** observed price between MCE and the next session, subject to the product terms. At maturity, the same direction-specific formula uses the closing settlement price.

CBBC risks include MCE/early termination, issuer credit, liquidity/DMM spread, gap risk, leverage, financing cost, underlying suspension, currency, market volatility, residual-value uncertainty and no-margin misconception. Common features with warrants include exchange trading, fixed maturity and no initial margin account; the call price/MCE is the important CBBC-specific feature.

## 6.11 Risks

Review path dependence, gap risk through a barrier, premium loss, model and valuation risk, counterparty/issuer risk, liquidity and secondary-market risk, correlation risk, currency risk, leverage and early termination. A barrier hit during a market gap may produce a much worse effective outcome than an investor’s intended level.

## 6.12 Similarities and differences

| Feature | Barrier option | Binary | Warrant/knock-out warrant | CBBC |
|---|---|---|---|---|
| Typical venue | OTC | OTC or exchange | Exchange | Exchange |
| Payoff | conditional vanilla/rebate | fixed/discontinuous | leveraged option | leveraged linear exposure until MCE |
| Main trigger | barrier touch/cross | event/range/touch | product barrier, if any | mandatory call level |
| Key extra risk | path/counterparty | discontinuity/monitoring | issuer/time value | early termination/residual value |

## 6.13 Summary

Exotics exchange a lower premium or higher coupon for conditionality. Barrier level, direction, monitoring, rebate, knock-in/out status and settlement determine the payoff. CBBCs add a mandatory call event and Category N/R distinction; investors can lose all invested capital quickly.

## Chapter 6 appendix

The Chapter 6 appendix provides further barrier/CBBC applications and reinforces that a product’s marketing label is not a risk description. Recalculate the payoff under spot up, spot down, barrier touched, barrier not touched, early termination, maturity and issuer-default scenarios.
