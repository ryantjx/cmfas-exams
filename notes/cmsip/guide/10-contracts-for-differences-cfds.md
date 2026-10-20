---
id: '10'
kind: 'chapter'
num: 10
part: null
title: 'Contracts for Differences (CFDs)'
order: 10
slug: 'chapter-10-contracts-for-differences-cfds'
---

# Chapter 10 — Contracts for Differences (CFDs)

A CFD is a leveraged, cash-settled agreement on the price difference of an underlying the investor never owns. This chapter covers the provider models, the margin mechanics, the cost arithmetic and the strategies traders run.

## Learning Objectives

The candidate should be able to:

- Define a CFD and distinguish it from ownership of the underlying.
- Distinguish the market-maker, direct-market-access and exchange-traded provider models.
- Explain initial margin, maintenance margin, margin calls and liquidation.
- Compute commission, GST and financing costs and the resulting ROI on margin.
- Explain stop-loss, stop-entry and guaranteed stops, and the gap risk they leave.
- Explain dividend capture, pairs trading and merger arbitrage.

## 10.1 History and Origin

CFDs emerged in **London in the early 1990s** from the OTC equity-swap market, originally for institutional hedging. They reached retail markets in the late 1990s and were **not available in the US retail market** in the same way. That history explains their OTC, leveraged and cash-settled character.

## 10.2 What are CFDs?

A CFD is an agreement to exchange in cash the difference between the opening and closing value of an underlying position — or the reverse for a loss. The investor does **not** own the share or asset, normally has **no voting rights**, and does not take physical delivery.

A long equity CFD may receive a dividend adjustment; a short position may be debited. Corporate-action adjustments follow the provider's terms.

Five contract terms define a CFD: the **underlying**; the **opening and closing price**; the **number of units**; the **direction**; and the **currency**. Alongside those sit margin, financing rate, expiry or rollover, and corporate-action treatment.

## 10.3 Characteristics and Features

Leverage; flexibility; a relatively low initial outlay; a transparent reference price; simplicity of long and short exposure; no fixed expiry in some provider models; global access; cash settlement; and corporate-action adjustments.

Countervailing risks: margin calls, forced liquidation, financing, commission and GST, rollover, spread, provider credit and market liquidity.

Singapore **charges no stamp duty** on CFDs.

## 10.4 Business Models

| Model | Description |
|---|---|
| **Market maker** | The provider quotes the CFD and may internalise or hedge the flow. Price and spread depend on its ability and discretion, so pricing is less transparent than DMA. |
| **Direct market access (DMA)** | Orders route through the provider into the underlying market. **DMA is predominant in Singapore.** |
| **Exchange-traded CFD** | Exchange and clearing structure can reduce bilateral counterparty risk, but the terms remain product-specific. |

## 10.5 Advantages over Other Instruments

A CFD trades like a share in many respects but differs in nine:

| Feature | Shares | CFDs | Options | Warrants |
|---|---|---|---|---|
| Ease of trading | Standard | Yes — one account, global access | Requires an options-approved account | Yes |
| Profit from price movement | Up only, unless borrowed | **Both directions** | Both directions | Both directions |
| Margin | Full consideration | **Percentage of notional** | Premium only | Premium only |
| Short selling | Needs a stock borrow | **Direct** | Via puts or calls | Via puts |
| Dividends | Received as owner | Adjustment only | None | None |
| Expiry | None | None in some models | **Fixed** | **Fixed** |
| Stop-loss | Manual | Available and often required | Manual | Manual |
| Spread | Exchange spread | Provider spread | Bid-ask | Bid-ask |
| Number of instruments | Listed universe | Very wide, provider dependent | Listed series | Issuer dependent |

## 10.6 Mechanisms

### 10.6.1 Margin

Initial margin is a percentage of contract value. The investor controls a larger notional than the cash posted, so return on margin can be high while losses are based on the **full exposure**.

**Example 1.** At **10%** margin, 10,000 shares at **$2** give a contract value of $20,000 and an initial margin of **$2,000** — **10× leverage**.

**Example 2.** Crude at **$105** × **100 barrels** is $10,500; at **20%** margin the initial margin is **$2,100** — **5× leverage**.

The Risk Disclosure Statement should explain margin, liquidation and the client's liability for any shortfall.

### 10.6.2 Mark-to-Market

Positions are revalued as the underlying moves, continuously during the trading day, and the account's equity is compared with the maintenance requirement.

### 10.6.3 Margin Call

A margin call requires additional funds. It is triggered when equity falls below the **maintenance margin**. The provider may then:

- **partially liquidate**, selling enough positions to restore margin; or
- **fully liquidate**, closing everything;

and the investor remains **liable for the shortfall**, loss and expenses after liquidation.

### 10.6.4 Liquidation

Liquidation converts the position to cash without the investor's consent. It is the mechanism that turns a temporary adverse move into a realised loss — and why a margin buffer matters more than a view.

### 10.6.5 Orders

All orders are **day orders** unless stated otherwise, and use the **underlying's bid and ask**.

- **Limit order.** A limit buy at **$10.00** when the ask is **$10.02** will not execute at 10.02; it queues at 10.00 or better.
- **Market-to-limit (MTL).** Executes at the market and leaves any unfilled balance at the prior execution price. A buy filling partially at **$10.02** stays at 10.02; it is cancellable and valid only during market hours.
- **Market order.** Matched to the **lowest ask** for a buy, or the **highest bid** for a sell.

#### 10.6.5.2 Contingent Orders

- **Stop-loss.** Long 1,000 CFDs at **$10.00** with a sell stop at **$9.50** and a limit at **$9.45**.
- **Stop entry.** Market at **$20.80**; place 1,000 at **$21.00** with a stop sell at **$20.50** and a limit at **$20.46**. The limit must be within **10 ticks ($20.40)** of the stop.
- **Guaranteed stop-loss.** A distinct paid service. Where offered, the provider fills at the stop price regardless of slippage; where not, a fast market can gap straight through the stop.

### 10.6.6 Financing, Commission and GST

- **Financing.** Long CFDs normally incur interest on the **full notional**; short CFDs may receive interest on deferred sale proceeds but can incur **stock-borrow costs**.
- **Commission.** Commonly a percentage of notional, subject to a minimum.
- **GST** applies to the commission.
- **Rollover** depends on the provider and the asset.

**Worked example — long.** Buy 10,000 at **$2.00**, sell after 10 days at **$2.20**. Commission **0.4%**, GST on commission **8%**, financing **5% p.a.**

| Component | Calculation | Amount |
|---|---|---|
| Buy commission + GST | $$20{,}000 \times 0.4\% \times 1.08$$ | **$86.40** |
| Sell commission + GST | $$22{,}000 \times 0.4\% \times 1.08$$ | **$95.04** |
| Financing, 10 days | $$20{,}000 \times 5\% \times 10/365$$ | **$27.78** |
| **Total expense** | | **$209.22** |
| Gross gain | $$(2.20 - 2.00) \times 10{,}000$$ | $2,000.00 |
| **Net profit** | | **$1,790.78** |

#### 10.6.6.4 Rollover Charges

A CFD with no fixed expiry is rolled periodically, and the provider charges or credits a rollover adjustment reflecting the financing and dividend differential between the contract periods.

#### 10.6.7 Going Short

Sell 10,000 at **$3.30**, cover at **$3.10**, commission **0.4%**, GST **8%**, **20%** margin and **6%** financing over five days.

| Scenario | Total expense | Net profit / loss | Capital posted | ROI on margin |
|---|---|---|---|---|
| Cover at **$3.10** | $303.98 | **+$1,696.02** | $6,600 | **+25.70%** |
| Cover at **$3.45** (price rises) | $319.10 | **−$1,819.10** | $6,600 | **−27.56%** |

The second row is the point: a 4.5% adverse move in the underlying produced a **27.56%** loss on the margin.

#### 10.6.8 Corporate Actions

- **Dividends.** Long equity positions may **receive** cash dividends; short positions **pay** them.
- **Splits and reverse splits** adjust quantity and price.
- **Scrip dividends, bonus issues and rights** may differ or require close-out, because the CFD cannot deliver the actual entitlement.

#### 10.6.9 CFDs versus Futures

| Feature | CFDs | Equity futures |
|---|---|---|
| Venue | Mostly **OTC** | **Exchange** |
| Expiry | Can be extended or rolled, subject to provider policy | **Fixed expiry** |
| Financing | Charged **explicitly** | **Embedded** in the price |
| Dividends | Passed as adjustments | Normally **no entitlement** |
| Counterparty | **Provider** | Clearing house |
| Margin | Yes | Yes |

## 10.7 Global Trading Opportunities

Underlyings include Singapore **STI and SiMSCI**; global equity and sector indices (S&P 500, DJIA, FTSE 100, CAC 40, DAX, Nikkei 225, ASX 200, Hang Seng, China A50); currencies (AUD, CAD, EUR, CNH, JPY, CHF, GBP, USD); energy, industrial, precious metal and agricultural commodities; US, UK, Japan and Euro government bonds; ETFs such as SPDR Gold; and volatility and real-estate references. Availability is **provider-specific**.

## 10.8 CFD Trading Strategies

### 10.8.1 Dividend Capture

Buy before the ex-dividend date and close after, seeking to profit if the price does not fall by the full dividend. Costs, tax, timing and price behaviour can defeat the trade. Traders generally screen for shares with **strong earnings and high payout potential**.

### 10.8.2 Pairs Trading

Long an undervalued or stronger asset and short an overvalued or weaker related asset, aiming for mean reversion and market neutrality. Correlation can break and costs are **doubled**.

**Industry-sector pairs** compare companies in the same sector — CapitaLand against City Developments, for instance — leaving stock-specific and sector risk.

**Statistical arbitrage** uses historical correlation and quantitative signals; the relationship may not revert.

**Merger arbitrage** goes long the target and short the acquirer, or the reverse. **Deal risk** — a failed transaction — can hurt both legs.

**Index pairs** trade correlated indices such as the **S&P 500 against the Nikkei 225** when their relationship diverges. Index liquidity is usually deeper than single-stock liquidity.

## 10.9 Summary

CFDs are leveraged cash-settled contracts, not ownership. Their flexibility conceals financing, margin, liquidation, counterparty, liquidity, currency, corporate-action and short-sale risk. Know the provider model, the order mechanics, the total cost and the worst-case liability.

## Exam cues

- **A CFD is not ownership** — no voting rights, no delivery, and no fixed expiry in some provider models. **DMA is the predominant model in Singapore.**
- **Margin examples:** 10% on $20,000 is **$2,000** (10× leverage); 20% on $10,500 is **$2,100** (5× leverage).
- **Cost arithmetic must include GST on commission and daily financing on full notional.** Long: $86.40 + $95.04 + $27.78 = **$209.22**, net **$1,790.78**. Short: expense **$303.98**, net **$1,696.02**, ROI **25.70%**; at $3.45 it is **−$1,819.10**, ROI **−27.56%**.
- **Long CFDs pay financing on the full notional**; shorts may receive interest but can incur stock-borrow cost. **GST applies to commission.**
- **Orders:** limit queues at the stated price or better; MTL leaves the unfilled balance at the prior execution price and is market-hours only; market fills at the best opposite quote.
- **A plain stop is not guaranteed.** A gap can fill well below the stop; only a **guaranteed stop**, a paid service, removes that risk.
- **CFD versus futures:** OTC vs exchange, rollable vs fixed expiry, explicit vs embedded financing, dividend adjustment vs no entitlement, provider vs clearing-house counterparty.
- **Pairs and merger arbitrage are not risk-free:** correlation can break, both legs can lose, and costs double.
- **Trap:** the smaller initial outlay does **not** cap the loss. Liquidation converts a temporary move into a realised one, and the investor remains liable for any shortfall.
