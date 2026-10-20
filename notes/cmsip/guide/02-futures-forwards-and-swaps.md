---
id: '2'
kind: 'chapter'
num: 2
part: null
title: 'Futures, Forwards and Swaps'
order: 2
slug: 'chapter-2-futures-forwards-and-swaps'
---

# Futures, Forwards and Swaps

## 2.1 Introduction to futures and forwards

A futures contract is a standardised exchange-traded agreement to buy or sell an underlying at a future date or to cash-settle the difference. A forward is a customised OTC agreement with the same economic idea. Futures developed from forwards but add exchange rules, clearing, daily settlement and standardisation.

Economic functions are price discovery, hedging and leverage. A futures quote can reveal market expectations, but it is not a guaranteed forecast: financing, dividends, storage, liquidity, risk premia and positioning affect it.

## 2.2 General features of futures

- **Finite life:** contract months and last trading day are specified.
- **Notional exposure:** price × multiplier × number of contracts; the cash margin is much smaller.
- **Initial and maintenance margin:** the initial amount opens a position; if equity falls below maintenance, additional margin is required.
- **Daily mark-to-market:** profits and losses are settled daily; failure to meet a call may lead to forced liquidation.
- **Standardised terms:** contract size, tick, price limits, trading hours, delivery/settlement and eligible assets are fixed.
- **Close-out:** most investors offset rather than make/take delivery.
- **Lower bilateral credit exposure:** the clearing system mutualises and manages counterparty risk, but market, liquidity and clearing risks remain.

### Notional and margin examples

Notional value = futures price × contract multiplier. Examples include E-mini S&P 500 (multiplier 50), Nasdaq futures (20), EUR/USD futures (125,000) and SGX A50 (multiplier 1).

For a Nikkei 225 contract at 22,500 with a JPY500 multiplier, notional = JPY11,250,000. At 6.5% initial margin, margin = JPY731,250. A 7% rise to 24,075 creates a 1,575-point gain × JPY500 = JPY787,500 per contract; a fall creates an equally sized loss. Maintenance margin is a lower threshold; a margin call can arise even if the investor expects the position to recover.

### Contract specifications

The SGX SiMSCI example uses SGD200 × index, a 0.1-point tick worth SGD20, staged ±15% price-limit/cooling mechanisms, a second-last-business-day last trading day, cash settlement and a final settlement price (FSP) defined by the contract. Learn the specification, not just the ticker.

## 2.3 Types of futures

### Commodity futures

Agricultural products, energy, industrial/precious metals, refined products, coal, rubber and petrochemicals are examples. Physical-market storage, transport, quality and delivery-location differences create basis and roll risk. Gold illustrates leverage: 100 contracts × 100 ounces × (USD1,288.50 − USD1,259.10) = USD294,000 before costs.

### Financial futures

They include equity-index, single-stock, bond, short/long interest-rate and currency futures. Other possible underlyings include weather, freight, real estate, crypto and volatility references.

### Interest-rate futures

Short-term futures are often quoted as $$P = 100(1 - R)$$, so a higher implied rate produces a lower price. For long-term forward rates, use:

$$
\left(1 + \frac{d_1 r_1}{360}\right)\left(1 + \frac{d_2 r_2}{360}\right) = \left(1 + \frac{DR}{360}\right)
$$

**Worked example.** Given a 45-day rate of 1.25% and a 135-day rate of 1.75%, the implied 90-day forward rate is approximately **2%** using the stated day-count convention. A Mini-JGB example demonstrates the price/tick and contract-size calculation; US Treasury-note examples show how a tick change translates into P&L.

### Currency futures

Interest-rate parity links spot and forward/futures rates:

$$
F = S \times \frac{1 + R_c\,(n/360)}{1 + R_b\,(n/360)}
$$

where $$R_b$$ is the base-currency rate and $$R_c$$ is the counter-currency rate. With GBP/USD spot 1.2422, UK rate 0.70444% and US rate 1.799%, the one-year theoretical forward is approximately 1.2557.

### Equity-index futures and SSFs

Indices may be price-weighted or capitalisation-weighted. Compared with buying shares, index futures provide cash-settled diversified exposure, daily MTM, leverage, short exposure without borrowing stock, and no direct dividend entitlement. Fair value is:

$$
F = S\left[1 + r\,(t/360)\right] - D
$$

where $$D$$ is dividends before expiry. The difference between futures and spot is the basis; convergence and cash-and-carry/reverse cash-and-carry arbitrage constrain mispricing. Single-stock futures (SSFs) similarly provide transparent, leveraged, exchange-traded long/short exposure, but a short position may add selling pressure and remains exposed to leverage and basis/roll factors.

## 2.4 Settlement, clearing and SGX orders

A futures position can be (1) held to physical delivery, (2) held to cash settlement, (3) closed with an offsetting position, or (4) rolled to a later contract. Know tick value, daily settlement, margin cycles, fees, delivery notices and final settlement.

SGX-DC clears and marks positions; intraday margin cycles may require funds before the end of day. **CME mutual-offset** arrangements apply to certain SGX products (including NK, NU, FEM and FCH), which can facilitate global clearing but are product-specific.

Order types include limit, market-to-limit (MTL), market, stop (stop-limit/MTL/market), market-if-touched and session-state orders. **Packs and bundles** are strategies for consecutive short-rate futures: a pack contains four consecutive contracts; a bundle groups quarterly contracts across a 2–5 year horizon; quotes may show the average net change.

## 2.5 Futures pricing model

The cost-of-carry model is:

$$
F_{0,t} = S_0\left(1 + C_{0,t}\right)
$$

Carry may include financing, storage, insurance and transport, less income or convenience yield. Under no-arbitrage:

- If futures is too high, buy/finance the spot asset and sell futures (cash-and-carry).
- If futures is too low, short/borrow the spot asset and buy futures (reverse cash-and-carry), subject to borrowing, storage and shorting constraints.

**Worked example.** For gold, fair value computes to about **1,303.69** against a market price of 1,305; the arbitrage profit must be adjusted for financing/borrowing and other costs. Reverse arbitrage may fail where gold borrowing is costly or unavailable. Real markets also contain risk premia and expectations, so an apparent difference is not automatically risk-free.

## 2.6 Basis

For hedging, define basis consistently as:

$$
\text{basis} = \text{spot/cash price of the asset being hedged} - \text{futures price}
$$

Basis converges toward zero at expiry when the same deliverable/settlement reference is used. **Contango** means futures above spot; **backwardation** means futures below spot. Basis is affected by carry, storage, income/coupons, convenience yield, time to expiry, yield-curve shape, liquidity, administered versus market rates, expectations and contract/asset mismatch. Basis risk arises because spot and futures do not move in perfect lockstep before expiry.

## 2.7 Swaps

Swaps are customised OTC agreements to exchange cash flows over several periods on a notional amount.

- **Interest-rate swap (IRS):** one party pays fixed and receives floating, or vice versa. The notional is normally not exchanged. The swap rate/spread and benchmark reset dates matter. A 5% fixed-versus-six-month-LIBOR swap pays the net difference on each reset.
- **FX swap:** exchanges currencies on a near/spot leg and reverses the exchange on a forward leg; it manages short-term currency funding.
- **Currency swap:** exchanges principal and interest in two currencies, often to transform borrowing currency and interest exposure.
- **Commodity swap:** fixed price is exchanged for a floating commodity price, allowing a producer/user to lock or transform price exposure without repeated futures rolls.
- **Equity swap:** one party receives total return on an equity/index and pays a fixed or floating rate; it creates synthetic equity exposure without ownership.
- **Credit default swap:** a protection buyer pays a spread (often in basis points quarterly) to a protection seller. On a defined credit event (bankruptcy, failure to pay, restructuring etc.), the seller pays under cash or physical settlement. Naked CDS can create large synthetic credit exposure — the AIG/GFC episode showed how leverage, opacity and counterparty concentration amplify it.

## 2.8 Summary

Futures are standardised, margined, daily-settled and cleared; forwards and swaps are usually customised OTC. Pricing is driven by carry and parity, but basis, liquidity, margin and credit constraints matter. Swaps exchange exposures rather than principal ownership and are powerful but documentation- and counterparty-dependent.
