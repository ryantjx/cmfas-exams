---
id: '3'
kind: 'chapter'
num: 3
part: null
title: 'Futures Strategies'
order: 3
slug: 'chapter-3-futures-strategies'
---

# Futures Strategies

## 3.1 Market participants

- **Hedgers:** offset a cash exposure (e.g., a stock portfolio, borrowing rate, currency receivable or commodity inventory).
- **Speculators:** accept risk for a directional, volatility, curve or relative-value view.
- **Market makers/dealers:** quote two-way prices and provide liquidity while managing inventory and hedge risk.
- **Proprietary trading firms and hedge funds:** trade their own or pooled capital, often with relative-value, statistical or systematic strategies.
- **Arbitrageurs:** align cash, futures, swaps and options when prices diverge.
- **Portfolio managers:** allocate, rebalance, overlay and protect portfolios.
- **Central banks, sovereign funds and regulators:** use or influence markets for reserves, policy, funding and supervision.

Barings is the classic control-failure example. **Delta One** activities use futures, swaps, ETFs and related instruments to deliver linear exposure.

## 3.2 SGX orders and strategy trades

Limit orders specify a maximum buy/minimum sell price. Market orders seek the best available price. MTL orders execute at the prevailing market and leave any unfilled balance at the last execution price. Stop and MIT orders activate when a trigger is reached. Session-state orders control whether orders persist across sessions. Packs and bundles aggregate consecutive short-rate contracts.

## 3.3 Trades and strategies

1. **Outright trade:** a single long or short contract expresses a directional view.
2. **Hedge:** a futures position offsets a cash exposure.
3. **Basis trade:** a relative view on the cash-futures relationship.
4. **Spread trade:** simultaneous long and short related contracts to isolate a relative price, maturity, market or product relationship.

## 3.4 Spread trades

A spread normally requires less margin than two unrelated outright positions but is not risk-free: correlation can break, liquidity can disappear and one leg may fill without the other. Types include:

- **Intra-commodity/intra-delivery:** same commodity/market, different delivery months.
- **Inter-commodity:** related commodities (e.g., crude and refined products).
- **Intra-market:** related contracts on the same exchange.
- **Inter-market:** similar contracts on different exchanges.
- **Calendar/horizontal:** same underlying, different months.

For a calendar spread, long the near month/short the deferred month is generally a bullish view on the near-versus-deferred relationship; short near/long deferred is generally bearish. Profit depends on the change in the spread, not simply whether the underlying rises.

A worked S&P spread example shows a net gain of about **USD11,500** in one scenario and losses when the spread moves the other way. An EUR/USD bearish-calendar example produces about **USD2,750** under its stated contract sizes.

### Butterflies, condors and credit spreads

- **Butterfly:** four legs with weights $$+1,\ -2,\ +1$$ across three maturities; it targets curvature/relative richness and is usually more market-neutral than an outright.
- **Double butterfly:** two butterflies combined to target a broader curve shape.
- **Condor:** four different maturities with $$+1,\ -1,\ -1,\ +1$$; it normally has a wider but flatter profit zone than a butterfly.
- **TED spread:** compares T-bill/Treasury and Eurodollar/LIBOR pricing; it is a credit/liquidity-risk indicator, not merely a pure interest-rate trade.
- **Inter-product spread:** e.g., gasoline versus heating oil, driven by refining economics and seasonal demand.

## 3.5 Hedging and portfolio management

Hedging exchanges an uncertain price for a more predictable basis. It can stabilise cash flow, working capital, inventory values, financing cost, pricing and planning. Decide whether the exposure is material, hedgeable, correlated, liquid and worth the transaction/margin cost.

A disciplined hedge programme specifies:

1. exposure and risk source;
2. objective and acceptable residual risk;
3. hedgeability and correlation;
4. vehicle and contract;
5. hedge horizon/roll schedule; and
6. target hedge ratio, limits, monitoring and close-out.

### Target rate and hedge value

$$
\text{Target rate} = \text{futures rate} + \text{target-rate basis}
$$

For a long cash exposure hedged by a short futures position:

$$
V_t = S_t + (F - F_t) = F + (S_t - F_t) = \text{initial futures price} + \text{ending basis}
$$

### Hedge styles

- **Cash hedge:** exposure already exists.
- **Anticipated hedge:** exposure is expected but not yet created.
- **Weak/strong hedge:** weaker or stronger correlation changes residual basis risk.
- **Immunisation:** match asset and liability duration/sensitivity so rate changes have offsetting effects.

### Hedge ratios

General hedge ratio:

$$
h = \frac{\Delta S}{\Delta F}; \qquad \text{number of contracts} = \frac{-h \times \text{exposure value}}{\text{contract size}}
$$

A **USD100 million 90-day exposure** against USD1 million Eurodollar futures needs **100 contracts** per 90-day period in a stack hedge (a 6-month exposure may require two stacks, subject to the question’s exact convention). A USD50m/6-month example gives 100 contracts under its stated assumptions.

For long-term bonds:

$$
\text{hedge ratio} = \frac{\text{PVBP of hedged security}}{\text{PVBP of CTD bond}} \times \text{conversion factor}
$$

A worked example produces approximately **157 Treasury-futures contracts**. Use DV01/PVBP, not face value alone.

For an equity portfolio:

$$
N = \frac{VP}{F \times T} \times \beta
$$

where $$T$$ is the contract value per index point. A portfolio example results in about 30 S&P contracts and shows that a hedge reduces systematic risk while leaving stock-specific and basis risk.

Other applications include currency receivables, floating-rate deposits/debt, Nikkei exposure and 130/30 portfolios (long 130% and short 30% with net 100% equity exposure).

## 3.6 Portfolio techniques

Futures can implement asset allocation, tactical rebalancing, cash equitisation, duration management, synthetic equity/bond exposure, market overlays and loss control. They can be cheaper, more liquid and more margin-efficient than trading every cash security, but they introduce basis, roll, leverage, margin and tracking risk. Separate market risk from security-specific risk; an index hedge will not perfectly protect a concentrated portfolio.

## 3.7 Arbitrage

Arbitrage strategies include cash-and-carry, reverse cash-and-carry, bond-stripping/reconstitution, futures-versus-IRS, FRA-versus-futures and option parity. A Eurodollar example compares a theoretical price of **98.65** with a market **98.72** and constructs borrow/lend/sell-buy legs for a profit of about **USD175**.

Arbitrage is only risk-free in the idealised model. Value dates, fixing dates, margin, liquidity, bid–ask spread, funding, delivery options, basis and counterparty constraints can turn it into relative-value trading.

## 3.8 Summary

Know why a participant trades (hedge, speculate, make markets or arbitrage), what each spread isolates, how to calculate the hedge ratio and how margin/MTM changes cash needs. A hedge reduces a targeted risk; it does not remove all risks.
