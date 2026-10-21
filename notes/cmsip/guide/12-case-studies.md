---
id: '12'
kind: 'chapter'
num: 12
part: null
title: 'Case Studies'
order: 12
slug: 'chapter-12-case-studies'
---

# Chapter 12 — Case Studies

These cases are decision exercises, not product endorsements. A representative should establish suitability, knowledge, risk willingness, financial capacity, external exposure, internal limits, buffers, leverage, stop/offset discipline, profit targets and current market information before recommending a trade.

The examination weights this chapter heavily: **6 case studies carry 18 questions**, about a fifth of the paper. Each case is worked end to end, and the question normally turns on one number or one obligation.

## Learning Objectives

The candidate should be able to:

- Compute the payoff, conversion or accrual outcome in each case.
- Identify the embedded option and the investor's obligation in each structure.
- State the worst-case loss and what triggers it.
- Match a market view to the structure that expresses it.
- Recognise the product-specific trap in each case.

## 12.1 Enhanced yield with currency investments — Mrs Goh

Mrs Goh holds USD, GBP and SGD. She expects a short-term USD rebound but longer-term USD weakness and accepts conversion into SGD/GBP. A USD/SGD DCI invests USD1m for three months at 11% p.a., strike 1.3800, spot 1.3569.

- If expiry spot is 1.3300, no conversion at strike; USD proceeds = 1,000,000 + 1,000,000 × 11% × 3/12 = USD1,027,500. Converted at 1.33 = SGD1,366,575.
- If spot is **1.3800**, proceeds remain USD1,027,500.
- If spot is **1.4100** and conversion applies, USD1,027,500 is converted at 1.3800 = SGD1,417,950.

From the bank’s perspective, fund the deposit at 1.3919% and sell the option at 0.0250, giving about **USD1,028,566.74** after three months — annualised around **11.43–11.44%**, above the 11% client return. DCI yield is option premium plus deposit interest and conversion risk.

The GBP/USD DCI example at 10% p.a., strike 1.3000 shows that if spot is 1.2800, the conversion calculation yields about USD1,009,230.76; if spot is 1.2600, proceeds about USD993,461.54 imply annualised return around −2.62%. A high headline yield does not prevent capital loss in the base currency.

## 12.2 Short-term downside volatility — Brian

Brian expects a two-month equity correction, higher volatility and longer-term recovery. Before trading, verify risk willingness/understanding, capacity and external positions, experience, internal limits, buffers, leverage, stop/offset plans, profit taking and market information. Limits, margin buffers and education help; maximising leverage does not.

Possible tools:

- long index/futures puts: limited premium loss, direct downside insurance, time decay and expiry risk;
- put warrants: similar limited-premium downside exposure, time decay/issuer risk;
- short index futures: direct daily-settled exposure, margin and potentially large losses if the market rises;
- short or long inverse/leveraged DLCs: daily reset and amplified risk;
- inverse ETFs/ETNs: exchange access but tracking, cost, roll and leverage risk;
- long volatility futures ETF: benefits from a volatility spike but suffers from leverage and contango/roll decay; long-term holding can trend toward zero.

Timing is difficult; short products are costly to maintain and should be closed/rolled with discipline.

## 12.3 Portfolio protection — William

William holds OCBC, DBS and CapitaLand worth SGD92.72m and wants protection beyond a 7% fall. Compare put-warrant strikes, breakeven, expiry and stock coverage. In the 7% scenario, DBS/OCBC put warrants B and D are in-the-money; CapitaLand E is selected because it is the only available CapitaLand protection and is less OTM than alternatives. A and D offer more time protection; E covers CapitaLand.

Higher volatility raises warrant prices because the strike is more likely to be reached. OTC alternatives are lending the shares for a 4–5% fee, buying tailored protective puts 3–4% below spot, or shorting MSCI Singapore futures. The futures hedge is imperfect because the three stocks represent only about 31% of the index. Futures have immediate daily MTM obligations; a long put has a right, not an obligation; a share loan earns a fee.

## 12.4 ELN yield and discounted blue-chip purchase — Mr Sunjoyo

OCBC spot = SGD13.30; ELN purchase = SGD975,000; notional = SGD1m; strike = SGD12.50; 80,000 shares; three months; annualised headline yield = 10.66%.

- At expiry SGD12.40, shares are worth SGD992,000; return over three months = 1.7435%; annualised compound return ≈7.16%.
- At SGD12.00, shares are worth SGD960,000; return = −1.5385% over three months; annualised ≈−6.29%.
- Breakeven = 975,000/80,000 = SGD12.1875 ≈ SGD12.19.

The client is effectively short a put: below the strike, he owns the falling stock and can lose up to almost the entire investment if the stock goes to zero.

## 12.5 Range accrual note — Robert

AUD/USD range = 0.7600–0.8200, maturity three months, maximum yield 6%, minimum 1%, MMR 2.75%. If inside for two months and outside for one, annualised payout is $$6\% \times \tfrac{2}{3} + 1\% \times \tfrac{1}{3} = 4.33\%$$ (the answer text displays approximately 4.32% due to rounding).

To make the digital spread cheaper or raise maximum yield: narrow the range, skew it so spot is nearer a barrier, extend maturity, or lower the minimum yield. Widening the range makes inside outcomes more likely and the option more expensive; shortening maturity can increase cost. A double-no-touch version observes the path: touching either barrier terminates the enhanced payout and leaves only the minimum return.

## 12.6 Equity accumulator — Harry

ABC spot SGD1.10; strike SGD1.00; knock-out SGD1.30; one year/250 business days; 10,000 shares per observation; monthly settlement. An accumulator combines long call and short put economics and can be funded or margin/unfunded. Below strike under a 1×2 arrangement, the client may have to buy 2×; above strike but below the knock-out, 1×; at/above the barrier, the note terminates.

- If the barrier is touched on day 13, days 1–12 accumulate: 120,000 shares.
- Twenty days in month 1 plus 12 days in month 2 before day-13 knock-out = 320,000 shares; cost = SGD320,000.
- If marked at SGD1.30, value = SGD416,000 and gain = SGD96,000.

**Worst case:** price zero for 250 days, 2.5m shares purchased at SGD1 = **SGD2.5m loss**. There is no capital preservation; the bank may margin-call/liquidate; gains are capped by the knock-out while losses continue below strike; early-break costs can be large.

## 12.7 Gold, silver and USD volatility — Brandon

Rising US rates may strengthen USD and weaken gold/silver, while political/equity uncertainty may support safe-haven gold. Gold’s widening premium to silver and different USD sensitivities create relative-value ideas. If the direction is uncertain but a large move is expected, buy a gold straddle: long call and long put at the same strike. A strangle uses different OTM strikes and is cheaper but needs a larger move. Combine a bull call spread with a bear put spread, or a bull call with a bear call, to express two-sided volatility; do not use two bearish or two bullish structures if the view is genuinely two-sided.

## 12.8 Yield-curve movement — Tracy

Tracy expects the US yield curve to flatten/invert: short rates rise faster than long rates. A constant maturity swap (CMS) resets a floating leg against a long-term constant-maturity rate; unlike a vanilla IRS, the reference maturity/duration remains constant. It can express steepening/flattening views. To benefit from short rates rising faster, swap the long end for the short end — pay the long-end rate and receive the short-end rate — subject to the exact swap convention and market quotation.

## Exam cues

The case studies test the same method, not the products. For each, work the numbers and identify the embedded option and the investor's obligation.

- **DCI (Goh):** yield = option premium + deposit interest; conversion risk is the real exposure. A high headline yield does not prevent a base-currency loss.
- **Downside volatility (Brian):** puts / put warrants cap loss at premium but decay; short futures and inverse/leveraged products add margin, daily reset and compounding risk.
- **Portfolio protection (William):** compare put-warrant strikes, breakeven and coverage; a futures hedge is imperfect when the basket is only part of the index; a long put is a right, a futures position is an obligation.
- **ELN (Sunjoyo):** effectively short a put — breakeven = purchase / shares; below strike the investor owns the falling stock and can lose almost everything.
- **Range accrual (Robert):** payout = max × (days inside / total) + min × (days outside / total); a double-no-touch observes the path and a barrier touch leaves only the minimum.
- **Accumulator (Harry):** 1× above strike to the knock-out, 2× below strike; gains capped by the knock-out while losses continue — worst case is multiples of the notional.
- **Two-sided volatility (Brandon):** a straddle/strangle for a large move; combine a bull call spread with a bear put spread — never two structures on the same side.
- **CMS (Tracy):** pay the long end and receive the short end to profit from short rates rising faster than long rates.
