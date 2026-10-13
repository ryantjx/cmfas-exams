# CM-SIP Teacher’s Study Guide

## Capital Markets – Specified Investment Products (SIP): Derivatives and Collective Investment Schemes

**Source reviewed:** *CM-SIP Study Guide v1.1 – January 2026 (FINAL)*, IBF. The source states that its regulatory information is correct/current/applicable as at 30 September 2023; always check the latest MAS, SFA, SGX and product terms before relying on a rule or specification.

This is a teaching companion, not a replacement for the source guide, prospectus, Product Highlights Sheet (PHS), term sheet, risk disclosure statement or current law. It reorganises the entire source into learning objectives, mechanisms, calculations, risks, applications and exam cues.

## How to use this guide

1. Learn the product mechanism before memorising the payoff.
2. For every product, ask: what is the underlying, what is the investor’s position, what triggers payment/conversion/termination, what can be lost, and who is the counterparty?
3. Practise the formulas in Appendix D and the application cases in Chapter 12.
4. Use `CMSIP_QUESTIONS.md` only after reading the relevant section; its answers explain the reasoning rather than merely naming a letter.

## Examination orientation

- The CM-SIP examination tests knowledge, understanding and application of SIPs.
- The source describes 80 multiple-choice/multiple-response questions in 2 hours 30 minutes, plus 6 case studies containing 18 questions (3 per case study); the passing mark is 70%.
- Unless a question says otherwise, use a 365-day convention for Singapore Government Securities and a 360-day convention for other products.
- A non-programmable financial calculator may be used and a formula sheet is provided.
- The guide covers exchange-traded and OTC derivatives, structured products and collective investment schemes. Candidates who will conduct regulated activity must also satisfy the relevant MAS representative-notification and competency requirements.

## Master mental model

Every derivative or structured product transfers one or more of these exposures:

| Exposure | Typical instrument or feature | Main question |
|---|---|---|
| Direction | Futures, forwards, calls, puts, CFDs, warrants | Does the investor profit from a rise or fall? |
| Volatility | Straddles, strangles, barrier options, volatility ETFs | Does the investor need movement or stability? |
| Time | Option time value, calendars, rollovers, callable notes | How does time decay, maturity or early termination matter? |
| Carry/yield | Interest-rate futures, swaps, structured deposits/notes | What is paid or received while the position is open? |
| Credit | CDS, CLNs, issuer/SPV obligations | Who may fail to pay? |
| Liquidity | OTC customisation, lock-ups, exotic derivatives | Can the position be closed at a fair price? |
| Currency | FX forwards/options/swaps, translated warrants, DCIs | Which currency is invested, settled and exposed? |
| Leverage | Margin, futures, CFDs, DLCs, warrants, accumulators | Can a small move create a large loss or margin call? |

# Chapter 1 — Overview of Derivatives

## Learning objectives

Understand what derivatives and structured products are, identify their underlying asset classes and uses, distinguish exchange-traded from OTC products, and place Singapore’s derivatives market in context.

## 1.1 Introduction

A derivative is a contract whose value is derived from an underlying asset, reference rate, index, basket, event or outcome. The underlying may be physical (commodity), financial (share, bond, currency), an index or a rate. Core families are futures, forwards, swaps and options. Products may combine these into exotic derivatives or structured investments.

The derivative itself normally does not give ownership of the underlying. It can instead create a synthetic exposure, alter cash-flow timing or currency, separate a desired risk from an unwanted one, or transfer risk between parties. Main uses are:

- **Hedging:** reduce the effect of adverse price, rate, currency or credit movements; the residual is basis or other hedge risk.
- **Speculation:** take a view on direction, volatility, yield curve, correlation or credit with leverage.
- **Arbitrage:** exploit a temporary pricing inconsistency between markets or instruments.
- **Repackaging/customisation:** combine debt, deposits, options or swaps to produce a specified yield, participation, protection, conversion or maturity.

## 1.2 Underlying asset classes for derivatives and their uses

### Foreign exchange

FX derivatives include spot/forward contracts, currency futures, FX swaps, currency options and non-deliverable forwards (NDFs). NDFs are particularly useful where a currency is restricted: the notional is not physically exchanged and the difference between the contracted rate and fixing rate is cash-settled. FX instruments hedge import/export receipts, foreign debt, investment currency and translation risk; they also allow views on relative currency strength.

### Money-market and short-term interest rates

Underlying instruments include Treasury bills, interbank deposits, commercial paper, negotiable certificates of deposit and repos. Derivatives reference benchmark rates such as SIBOR and (historically) LIBOR; the source notes LIBOR’s phase-out and the use of replacement benchmarks such as SOFR for USD. Short-rate futures, FRAs, caps, floors, collars and swaps manage or speculate on short-term rates.

### Fixed income and credit

Underlying instruments include government and corporate bonds, stripped/zero-coupon bonds, mortgage-backed securities (MBS), collateralised debt obligations (CDOs) and credit default swaps (CDS). Credit quality, liquidity, maturity, embedded options and sovereign conditions matter. A CDS separates credit protection from ownership of the bond; the global financial crisis illustrated how leverage, opacity and counterparty concentration can amplify credit risk.

### Equities and equity indices

Equity derivatives include single-stock and index futures, options, warrants, swaps and CFDs. They provide upside or downside exposure, portfolio hedging, index/sector allocation, dividend or volatility strategies and synthetic long/short positions without direct ownership. Index construction matters: an index may be price-weighted, capitalisation-weighted or based on another methodology.

### Commodities

Agriculture, energy and metals are traded through futures, forwards, options, swaps, warrants, ETFs and CFDs. Prices are affected by supply/demand, storage, transport, seasonality, weather, geopolitical events, the USD and interest rates. Precious metals may act as safe-haven assets. A commodity derivative may be cash-settled even though the underlying market is physical; storage and convenience yield are therefore relevant to pricing.

## 1.3 Exchange-traded derivatives

Exchange-traded derivatives have standardised contract terms, transparent quotes, a central clearing house, published margin rules and an organised secondary market. Standardisation improves liquidity and price discovery. Daily mark-to-market and margining reduce the build-up of unsecured exposure. The clearing house becomes the buyer to every seller and seller to every buyer, reducing bilateral counterparty risk but not eliminating market, liquidity, margin or clearing-system risk.

Typical characteristics are fixed contract size, multiplier, tick size, contract months, trading hours, price limits, last trading day, settlement method, delivery/eligible asset and position limits. Positions are usually closed by an offsetting trade; a product may instead be cash-settled or physically delivered.

## 1.4 OTC-traded derivatives

OTC products are negotiated bilaterally or through dealers. They can be tailored by notional, maturity, strike, barrier, observation dates, settlement currency, underlying, collateral and exercise terms. Customisation is valuable when an exchange contract does not match the exposure, but it creates counterparty, liquidity, valuation/model, documentation, legal, operational and close-out risks.

Post-global-financial-crisis reforms described in the guide include moving standardised OTC derivatives to exchanges or electronic platforms where appropriate, central clearing, trade reporting to repositories and higher capital requirements for uncleared trades. A CCP reduces bilateral counterparty exposure but introduces clearing-member, collateral and default-management considerations.

## 1.5 Structured products

Structured products combine a principal component (deposit, bond, fund or other instrument) with one or more derivatives. They can offer yield enhancement, capital preservation at maturity, participation, a discount, a range payout, leverage, currency conversion, market access or a hedge. The apparent benefit is paid for through capped upside, conditional principal, issuer exposure, illiquidity, complexity or an obligation to buy/sell an underlying.

Do not infer that “structured” means “safe”. Read the payoff formula, trigger, barrier, settlement currency, early termination clause, issuer/SPV, collateral, fees, tax and maximum loss. Ownership of the underlying normally does not pass to the investor merely because the product references it.

## 1.6 Singapore derivatives market

The source discusses SGX-DT, ICE Futures Singapore and APEX as Singapore venues/marketplaces, and highlights Singapore’s role as an Asian hub for equity indices, commodities, interest rates and FX. SGX products include Asian index futures, commodity contracts, FX and rates products; exchange and clearing specifications determine the multiplier, trading hours, tick, margin, settlement and final price.

Singapore’s OTC FX market is material. The source cites SFEMC October 2020 average daily OTC FX swaps/options of approximately US$91 billion and notes the impact of COVID-era market conditions. Use current market statistics for present-day decisions.

The source also uses a MiFID II/regulatory scenario as a non-core application discussion: product governance requires a defined target market, product approval and review; KIDs/PHSs and risk disclosures must be available; transaction reporting and trading-venue obligations may apply; market makers may have obligations; distributors must understand the product, perform KYC/knowledge/suitability work, manage inducements and conflicts, and coordinate branch/head-office responsibilities. A Singapore/APAC distributor should not assume that a foreign regime replaces Singapore obligations.

## 1.7 Summary and exam cues

Derivatives transfer rather than eliminate risk. The most examinable contrasts are standardised exchange versus customised OTC, CCP versus bilateral credit exposure, physical versus cash settlement, ownership versus synthetic exposure, and hedging versus speculation. Always identify the underlying, the direction of exposure, leverage/margin, settlement, liquidity and counterparty.

# Chapter 2 — Futures, Forwards and Swaps

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

Notional value = futures price × contract multiplier. Examples in the source include E-mini S&P 500 (multiplier 50), Nasdaq futures (20), EUR/USD futures (125,000) and SGX A50 (multiplier 1).

For a Nikkei 225 contract at 22,500 with a JPY500 multiplier, notional = JPY11,250,000. At 6.5% initial margin, margin = JPY731,250. A 7% rise to 24,075 creates a 1,575-point gain × JPY500 = JPY787,500 per contract; a fall creates an equally sized loss. Maintenance margin is a lower threshold; a margin call can arise even if the investor expects the position to recover.

### Contract specifications

The SGX SiMSCI example uses SGD200 × index, a 0.1-point tick worth SGD20, staged ±15% price-limit/cooling mechanisms, a second-last-business-day last trading day, cash settlement and a final settlement price (FSP) defined by the contract. Learn the specification, not just the ticker.

## 2.3 Types of futures

### Commodity futures

Agricultural products, energy, industrial/precious metals, refined products, coal, rubber and petrochemicals are examples. Physical-market storage, transport, quality and delivery-location differences create basis and roll risk. Gold illustrates leverage: 100 contracts × 100 ounces × (USD1,288.50 − USD1,259.10) = USD294,000 before costs.

### Financial futures

They include equity-index, single-stock, bond, short/long interest-rate and currency futures. Other possible underlyings include weather, freight, real estate, crypto and volatility references.

### Interest-rate futures

Short-term futures are often quoted as `P = 100 × (1 − R)`, so a higher implied rate produces a lower price. For long-term forward rates, use:

`(1 + d1 r1/360)(1 + d2 r2/360) = (1 + D R/360)`.

The source’s 45-day 1.25% and 135-day 1.75% example implies a 90-day forward rate of approximately 2% (using the stated day-count convention). A Mini-JGB example demonstrates the price/tick and contract-size calculation; US Treasury-note examples show how a tick change translates into P&L.

### Currency futures

Interest-rate parity links spot and forward/futures rates:

`F = S × [1 + Rc(n/360)] / [1 + Rb(n/360)]`,

where `Rb` is the base-currency rate and `Rc` is the counter-currency rate. With GBP/USD spot 1.2422, UK rate 0.70444% and US rate 1.799%, the one-year theoretical forward is approximately 1.2557.

### Equity-index futures and SSFs

Indices may be price-weighted or capitalisation-weighted. Compared with buying shares, index futures provide cash-settled diversified exposure, daily MTM, leverage, short exposure without borrowing stock, and no direct dividend entitlement. Fair value is:

`F = S[1 + r(t/360)] − D`,

where `D` is dividends before expiry. The difference between futures and spot is the basis; convergence and cash-and-carry/reverse cash-and-carry arbitrage constrain mispricing. Single-stock futures (SSFs) similarly provide transparent, leveraged, exchange-traded long/short exposure, but a short position may add selling pressure and remains exposed to leverage and basis/roll factors.

## 2.4 Settlement, clearing and SGX orders

A futures position can be (1) held to physical delivery, (2) held to cash settlement, (3) closed with an offsetting position, or (4) rolled to a later contract. Know tick value, daily settlement, margin cycles, fees, delivery notices and final settlement.

SGX-DC clears and marks positions; intraday margin cycles may require funds before the end of day. The guide mentions CME mutual-offset arrangements for certain SGX products (including NK, NU, FEM and FCH), which can facilitate global clearing but are product-specific.

Order types in the guide include limit, market-to-limit (MTL), market, stop (stop-limit/MTL/market), market-if-touched and session-state orders. Packs and bundles are strategies for consecutive short-rate futures: a pack contains four consecutive contracts; a bundle groups quarterly contracts across a 2–5 year horizon; quotes may show the average net change.

## 2.5 Futures pricing model

The cost-of-carry model is:

`F0,t = S0(1 + C0,t)`.

Carry may include financing, storage, insurance and transport, less income or convenience yield. Under no-arbitrage:

- If futures is too high, buy/finance the spot asset and sell futures (cash-and-carry).
- If futures is too low, short/borrow the spot asset and buy futures (reverse cash-and-carry), subject to borrowing, storage and shorting constraints.

The source’s gold fair-value example computes fair value around 1,303.69 against a market price of 1,305; the arbitrage profit must be adjusted for financing/borrowing and other costs. Reverse arbitrage may fail where gold borrowing is costly or unavailable. Real markets also contain risk premia and expectations, so an apparent difference is not automatically risk-free.

## 2.6 Basis

For hedging, define basis consistently as:

`basis = spot/cash price of the asset being hedged − futures price`.

Basis converges toward zero at expiry when the same deliverable/settlement reference is used. **Contango** means futures above spot; **backwardation** means futures below spot. Basis is affected by carry, storage, income/coupons, convenience yield, time to expiry, yield-curve shape, liquidity, administered versus market rates, expectations and contract/asset mismatch. Basis risk arises because spot and futures do not move in perfect lockstep before expiry.

## 2.7 Swaps

Swaps are customised OTC agreements to exchange cash flows over several periods on a notional amount.

- **Interest-rate swap (IRS):** one party pays fixed and receives floating, or vice versa. The notional is normally not exchanged. The swap rate/spread and benchmark reset dates matter. A 5% fixed-versus-six-month-LIBOR swap pays the net difference on each reset.
- **FX swap:** exchanges currencies on a near/spot leg and reverses the exchange on a forward leg; it manages short-term currency funding.
- **Currency swap:** exchanges principal and interest in two currencies, often to transform borrowing currency and interest exposure.
- **Commodity swap:** fixed price is exchanged for a floating commodity price, allowing a producer/user to lock or transform price exposure without repeated futures rolls.
- **Equity swap:** one party receives total return on an equity/index and pays a fixed or floating rate; it creates synthetic equity exposure without ownership.
- **Credit default swap:** a protection buyer pays a spread (often in basis points quarterly) to a protection seller. On a defined credit event (bankruptcy, failure to pay, restructuring etc.), the seller pays under cash or physical settlement. Naked CDS can create large synthetic credit exposure; the source discusses AIG/GFC lessons.

## 2.8 Summary

Futures are standardised, margined, daily-settled and cleared; forwards and swaps are usually customised OTC. Pricing is driven by carry and parity, but basis, liquidity, margin and credit constraints matter. Swaps exchange exposures rather than principal ownership and are powerful but documentation- and counterparty-dependent.

# Chapter 3 — Futures Strategies

## 3.1 Market participants

- **Hedgers:** offset a cash exposure (e.g., a stock portfolio, borrowing rate, currency receivable or commodity inventory).
- **Speculators:** accept risk for a directional, volatility, curve or relative-value view.
- **Market makers/dealers:** quote two-way prices and provide liquidity while managing inventory and hedge risk.
- **Proprietary trading firms and hedge funds:** trade their own or pooled capital, often with relative-value, statistical or systematic strategies.
- **Arbitrageurs:** align cash, futures, swaps and options when prices diverge.
- **Portfolio managers:** allocate, rebalance, overlay and protect portfolios.
- **Central banks, sovereign funds and regulators:** use or influence markets for reserves, policy, funding and supervision.

The source uses Barings as a control failure example and discusses Delta One activities, where futures, swaps, ETFs and related instruments deliver linear exposure.

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

The source’s S&P example demonstrates a net spread gain of about USD11,500 in one scenario and losses when the spread moves the other way. An EUR/USD bearish-calendar example produces about USD2,750 under its stated contract sizes.

### Butterflies, condors and credit spreads

- **Butterfly:** four legs with weights `+1, −2, +1` across three maturities; it targets curvature/relative richness and is usually more market-neutral than an outright.
- **Double butterfly:** two butterflies combined to target a broader curve shape.
- **Condor:** four different maturities with `+1, −1, −1, +1`; it normally has a wider but flatter profit zone than a butterfly.
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

`Target rate = futures rate + target-rate basis`.

For a long cash exposure hedged by a short futures position:

`Vt = St + (F − Ft) = F + (St − Ft) = initial futures price + ending basis`.

### Hedge styles

- **Cash hedge:** exposure already exists.
- **Anticipated hedge:** exposure is expected but not yet created.
- **Weak/strong hedge:** weaker or stronger correlation changes residual basis risk.
- **Immunisation:** match asset and liability duration/sensitivity so rate changes have offsetting effects.

### Hedge ratios

General hedge ratio:

`h = ΔS/ΔF`; number of contracts = `−h × exposure value / contract size`.

For a USD100 million 90-day exposure against USD1 million Eurodollar futures, a stack hedge uses 100 contracts per 90-day period (and a 6-month exposure may require two stacks, subject to the question’s exact convention). The source’s USD50m/6-month example gives 100 contracts under its stated assumptions.

For long-term bonds:

`hedge ratio = PVBP of hedged security / PVBP of CTD bond × conversion factor`.

The source’s example produces approximately 157 Treasury-futures contracts. Use DV01/PVBP, not face value alone.

For an equity portfolio:

`N = VP/(F × T) × beta`,

where `T` is the contract value per index point. The guide’s portfolio example results in about 30 S&P contracts and demonstrates that a hedge reduces systematic risk while leaving stock-specific and basis risk.

Other applications include currency receivables, floating-rate deposits/debt, Nikkei exposure and 130/30 portfolios (long 130% and short 30% with net 100% equity exposure).

## 3.6 Portfolio techniques

Futures can implement asset allocation, tactical rebalancing, cash equitisation, duration management, synthetic equity/bond exposure, market overlays and loss control. They can be cheaper, more liquid and more margin-efficient than trading every cash security, but they introduce basis, roll, leverage, margin and tracking risk. Separate market risk from security-specific risk; an index hedge will not perfectly protect a concentrated portfolio.

## 3.7 Arbitrage

Arbitrage strategies include cash-and-carry, reverse cash-and-carry, bond-stripping/reconstitution, futures-versus-IRS, FRA-versus-futures and option parity. The source’s Eurodollar example compares a theoretical price of 98.65 with market 98.72 and constructs borrow/lend/sell-buy legs for a stated profit of about USD175.

Arbitrage is only risk-free in the idealised model. Value dates, fixing dates, margin, liquidity, bid–ask spread, funding, delivery options, basis and counterparty constraints can turn it into relative-value trading.

## 3.8 Summary

Know why a participant trades (hedge, speculate, make markets or arbitrage), what each spread isolates, how to calculate the hedge ratio and how margin/MTM changes cash needs. A hedge reduces a targeted risk; it does not remove all risks.

# Chapter 4 — Options

## 4.1 What is an option?

An option is a contract in which the buyer pays a premium for a right and the seller/writer accepts an obligation. A call gives the holder the right to buy; a put gives the holder the right to sell. The buyer may exercise or allow the option to expire. The writer must perform if exercised.

European options are exercisable only at expiry; American options can be exercised any time up to expiry. OTC contracts may use other exercise conventions, including Bermudan or event-dependent exercise. The strike/exercise price, expiry, underlying, contract size, settlement and style define the option.

## 4.2 Features and definitions

`option price/premium = intrinsic value + time value`.

For a call, `IV = max(0, S − X)`; for a put, `IV = max(0, X − S)`. Time value = premium − intrinsic value.

- **ITM:** immediate exercise has positive value.
- **ATM:** immediate exercise has approximately zero value.
- **OTM:** immediate exercise has no positive value.
- **Strike:** contractual exercise price.
- **Expiry:** last exercise/trading date; time value decays toward zero.
- **Class/series:** all options on the same underlying, with a particular strike and expiry, form a series.

Exchange option cycles in the source use month codes such as JAJO, FMAN and MJSD; contract specifications determine the actual listed series.

## 4.3 Option price/payoff

At expiry, ignoring costs:

- long call payoff = `max(0, S − X)`; profit = payoff − premium;
- long put payoff = `max(0, X − S)`; profit = payoff − premium;
- short call profit = premium − call payoff;
- short put profit = premium − put payoff.

Long-call breakeven = `X + premium`; maximum loss is premium and upside is theoretically unlimited. Long-put maximum loss is premium; maximum payoff before premium is `X` if the underlying falls to zero. Naked short calls can have unlimited losses; naked short puts can lose substantially down to zero. Covered calls and spreads limit some risk.

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

`C + PV(X) = P + S`.

This creates synthetic positions:

- long stock = long call + short put;
- short stock = long put + short call;
- long call = long stock + long put − bond/PV(strike) as expressed through parity;
- long put = short stock + long call + bond/PV(strike);
- short call and short put are the corresponding reversals.

Parity supports arbitrage, conversion/reversal and pricing checks, but funding, dividends, exercise style, transaction costs and borrow constraints matter.

## 4.7 Valuation and Greeks

Black–Scholes-type models use spot, strike, time, interest rate, dividends and volatility. Binomial trees handle early exercise and American features. The source does not require model calculations but expects conceptual understanding.

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
- **Eurodollar/short-rate options:** often quoted on `100 − yield`; the tick value converts price changes into dollars.
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

The source also covers long call/put butterflies, vertical spreads (same expiry/different strikes), horizontal/calendar spreads (same strike/different expiries), diagonal spreads (different strikes and expiries), condors, ratio hedges, seagulls, and protecting/re-centering a short strangle. These are extensions of the same principles: identify the market view, volatility view, time exposure, maximum loss, margin and adjustment/roll rules.

# Chapter 5 — Structured Warrants and Daily Leveraged Certificates

## 5.1 Introduction

Structured warrants and daily leveraged certificates (DLCs) are exchange-traded SIPs. They can give leveraged exposure with a smaller cash outlay, but leverage magnifies losses. Under Singapore’s SIP/CAR framework, the representative must consider the client’s knowledge, experience, financial situation, risk tolerance, objectives, horizon, liquidity and ability to understand the product. The source highlights customer-account review, education/work/investment experience and investment experience documentation.

## 5.2 Structured warrants

A structured warrant is issued by a third-party financial institution and references a stock, index, fund, commodity, currency or basket. It is normally shorter-dated than a company warrant; SGX warrants in the guide are generally European style unless the product terms say otherwise. A call warrant gives leveraged upside exposure; a put warrant gives leveraged downside exposure. A zero-strike warrant is economically close to a synthetic share exposure because its strike is zero.

Cash settlement per warrant is:

- call: `(S − X)/n` if positive;
- put: `(X − S)/n` if positive;

where `n` is the conversion ratio (number of warrants per one underlying unit). Physical settlement, if offered, follows the product terms.

Compared with company-issued warrants, structured warrants are issued by an unrelated financial institution and normally do not dilute the underlying company. Both can expire worthless and provide no ordinary voting/dividend rights.

Benefits include leverage, limited loss to the purchase price (subject to issuer failure), no initial margin in the normal exchange-traded purchase, transparent exchange trading, and access to multiple markets. Risks include time decay, implied-volatility changes, spread/market-maker liquidity, issuer credit, currency and corporate actions.

## 5.3 Key terms

- **Conversion ratio (`n`):** warrants needed for one underlying unit.
- **Strike/exercise price (`X`):** price at which the underlying is bought/sold.
- **Expiry:** final life/exercise date.
- **Issue/market price:** amount paid for the warrant.
- **Settlement:** physical or cash.
- **Gearing:** underlying price divided by `warrant price × n`.
- **Effective gearing:** `delta × gearing`; a better approximation of short-term percentage sensitivity than gearing alone.

The SGX code normally identifies underlying, issuer, call/put or style and maturity. Always confirm the current term sheet rather than inferring from a ticker.

## 5.4 Factors affecting warrant value

Life to expiry, underlying price, strike, implied volatility, dividends, interest rates, conversion ratio, liquidity, issuer credit and gearing affect price. A call rises with underlying and volatility and generally falls with dividends; a put behaves in the opposite direction for spot/dividends. Time value normally decays faster close to expiry and is not linear.

Warrant delta is `n × (change in warrant price / change in underlying)` under the source’s convention. Implied volatility is backed out from the observed price; it is not a guaranteed prediction.

## 5.5 Trading structured warrants

Calls and puts may be bought to express bullish/bearish views, hedge a portfolio or construct spreads. The investor pays the warrant price up front and normally has no daily margin call like a futures trader, but may lose the whole premium. Gearing makes the percentage movement in the warrant much larger than in the underlying. Effective gearing changes with moneyness and expiry.

## 5.6 Valuation

Intrinsic value:

- call: `max[0, (S − X)/n]`;
- put: `max[0, (X − S)/n]`.

Conversion price:

- call: `X + n × WP`;
- put: `X − n × WP`.

The warrant premium is its price above intrinsic value. The source’s formula sheet also expresses dollar premium as:

- call: `nWP + X − S`;
- put: `nWP − X + S`.

Premium percentage may be calculated against the relevant conversion value; state the convention used. A call with `X=$1`, `WP=$1.20`, `n=1` has conversion price $2.20. A warrant at $0.40 on a $2.40 share has 6× gearing when `n=1`.

## 5.7 Roles in the market

The issuer designs, funds and bears issuer risk. A designated market maker (DMM) supplies quotes and liquidity subject to product/exchange conditions, but may not quote continuously or in unlimited size in every market condition. Investors should not treat a DMM quote as a guarantee of an exit price during a suspension, extreme movement, corporate action or market disruption.

## 5.8 Designated market makers

The DMM normally provides bid/offer quotes and minimum quantities under the exchange’s rules. Quote obligations can be suspended or adjusted for events such as underlying-market closure, price limits, trading halt, technical failure, abnormal volatility, corporate actions or insufficient information. The spread and quote size are part of the investor’s liquidity risk.

## 5.9 Settlement

Cash-settled warrants pay the in-the-money amount according to the final settlement reference. SGX Asian-style expiry may use a five-day average or other stated observation method; the last trading day may precede expiry. Physical settlement requires delivery/payment under the contract. Do not assume the final expiry spot is one closing print.

## 5.10 Corporate actions

Dividends, special dividends, buybacks/cancellations, rights, bonus issues and splits can adjust strike and conversion ratio so that the product remains economically comparable. The formula sheet gives:

- dividend adjustment factor `=(P − SD − ND)/(P − ND)`;
- buyback/cancellation factors `A/B` and `(P − CD)/P`;
- split factor `A/B`;

with the new strike = old strike × factors and new conversion ratio = old conversion ratio × factors. Read the issuer’s adjustment announcement.

## 5.11 Exotic warrants

The source discusses index warrants, currency-translated warrants, yield-enhanced/discount/capped warrants, basket warrants, commodity warrants and FX warrants. A discount/capped certificate lets the investor buy exposure at a discount but caps upside; basket/index products add correlation, composition and rebalancing risk; translated warrants add FX exposure between settlement and underlying currencies.

## 5.12 Daily leveraged certificates (DLCs)

DLCs are exchange-traded, short-term, high-risk products designed to deliver a daily multiple of an underlying index or asset’s movement. The source describes long and short certificates, commonly 3× or 5× examples and a product table allowing leverage up to 7×; the current product terms control the exact multiple. They are SGD-denominated, commonly T+2, with a maximum tenor up to three years, and fees may include brokerage, clearing and management fees.

Daily reset/compounding means a DLC is not a simple multiple of the total return over a long period. In a volatile or mean-reverting market, repeated daily losses can erode capital even if the index ends near its starting level. It is generally unsuitable as a buy-and-hold investment.

The airbag feature may trigger when the underlying moves adversely by a stated threshold; the source gives 20% for a 3× example and 10% for a 5× example, followed by a 30-minute suspension and an observed reset level. The exact term sheet controls. Expiry or a zero value can terminate the investment. A DMM may quote subject to conditions.

Compared with CFDs, DLCs are exchange traded and have no OTC financing/margin account in the same form, but reset/airbag/issuer and liquidity features matter. Compared with warrants, DLCs have daily leverage targeting and usually closer-to-one directional exposure before the reset; compared with leveraged ETFs, their structure, issuer and daily reset terms differ.

## 5.13 Summary

Warrants embed options issued by a bank; price equals intrinsic plus time value and is shaped by conversion ratio, gearing, volatility, dividends, rates, time, liquidity and issuer credit. DLCs amplify daily returns and reset, making path dependency and compounding central risks. SIP/CAR suitability and disclosure are part of the product analysis.

# Chapter 6 — Barrier Options, Binary Options and Callable Contracts

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

`underlying price / (CBBC price × conversion ratio)`.

The **mandatory call event (MCE)** is triggered when the underlying reaches the call price: for a bear, spot rises to/above the call price; for a bull, spot falls to/below it.

- **Category N:** after an MCE there is no residual value; the product is terminated.
- **Category R:** residual value may be paid based on the issuer’s post-MCE valuation window and settlement price; it may be zero.
- The call price, strike and conversion ratio are specified in the term sheet; a Category N call price need not be inferred as “always equal” to strike.

Theoretical price (simplified source formula):

- bull = `[(underlying − strike) + financial cost] / conversion ratio`;
- bear = `[(strike − underlying) + financial cost] / conversion ratio`.

Residual value for R-CBBCs:

- bull = `(settlement price − strike)/conversion ratio`;
- bear = `(strike − settlement price)/conversion ratio`.

The settlement price is subject to the MCE observation rules; the source describes a bull using the minimum and a bear the maximum observed price between MCE and the next session, subject to the product terms. At maturity, the same direction-specific formula uses the closing settlement price.

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

The source’s appendix provides further barrier/CBBC applications and reinforces that a product’s marketing label is not a risk description. Recalculate the payoff under spot up, spot down, barrier touched, barrier not touched, early termination, maturity and issuer-default scenarios.

# Chapter 7 — Structured Deposits and Other Structured Products

## 7.1 Structured products: purpose and suitability

Structured products combine a deposit, note, fund, warrant, ILP, ETF/ETN or other wrapper with derivatives. They can customise a market view, enhance yield, preserve capital at a stated maturity, provide participation/discount/leverage, hedge an exposure, change currency or rebalance without directly buying the underlying.

Suitability requires understanding risk appetite, knowledge/experience, liquidity needs, investment horizon, currency, concentration, principal-loss potential, leverage, counterparty, early-exit rules, fees, tax, restrictions and the client’s actual objective. Product features are trade-offs: higher coupon commonly means selling protection or accepting conversion/conditional principal.

## 7.2 Capital-preservation deposits

In Singapore, the source describes structured deposits as bank deposit obligations with principal paid in full at maturity, with or without interest, but they are not necessarily covered by deposit insurance and early withdrawal may incur loss of principal/return. The bank’s credit standing still matters. “Capital preservation” normally means at maturity and subject to the stated currency and issuer, not a guarantee of mark-to-market value.

Principal component plus derivative strategies include:

- standard call/put conversion;
- knock-out deposits (feature disappears after a trigger);
- knock-in/appearing features;
- bull call/bull put spreads;
- one-touch lock-in;
- double-no-touch/range currency deposits;
- range accrual.

## 7.3 Yield-enhancement deposits

A standard dual-currency investment (DCI) is economically a money-market deposit plus a short currency call/put. The bank pays a higher return but can convert principal and interest into an alternate currency at the strike if the trigger condition is met. The investor must be willing to own the alternate currency and bear its value falling against the base currency.

- **KO DCI/disappearing:** the option feature terminates if a knock-out occurs.
- **KI DCI/appearing:** the conversion feature activates only after a barrier is hit.
- **Accumulator:** often long calls plus short puts, regular discounted purchases, a knock-out barrier and sometimes 1×2 gearing; downside loss can be very large.
- **Decumulator:** reverse economics; the investor may sell/accumulate the underlying through short calls and can be forced to deliver/sell when price rises.

## 7.4 Structured products

Range currency deposits/range accruals pay a high rate for observations inside a range and a lower rate outside it. A one-touch may lock in a rate or terminate/convert after a touch. Bull/bear spreads cap the maximum payoff. Step-up structures alter the coupon over time, often with a callable feature. Every structure should be decomposed into deposit/bond plus long or short option legs.

## 7.5 Summary

Structured deposits may improve yield or customise currency/market exposure but can return less than a plain deposit, convert currency at an unfavourable level, be hard to exit and expose the investor to bank credit risk. The client must understand the worst case, not only the headline yield.

## Chapter 7 appendix

The non-exam appendix expands deposit strategies and demonstrates that yield enhancement is commonly the premium received for selling an option. It reinforces early withdrawal, currency conversion, barrier and suitability issues.

# Chapter 8 — Structured Notes

## 8.1 Notes

A structured note is a debt/debenture obligation whose return is linked to an underlying equity, index, currency, commodity, rate, credit reference or basket. The investor owns a claim on the issuer (or an SPV), not the underlying asset. The note can be distributed directly by a bank or issued through an SPV; an SPV may be off-balance-sheet and may give only the legal/asset claim described in its documents.

Under Singapore offering rules described in the source, a prospectus may be required unless an exemption applies (for example accredited/institutional investors or a stated minimum investment such as S$200,000). Read the prospectus, PHS and term sheet.

## 8.2 Issuing structured notes

The principal component can be a zero-coupon bond, corporate/AAA bond or deposit-like instrument. The return component can be a long or short option, digital, range, swap, CDS or other derivative. Issuance, hedging, funding, collateral, valuation, fees, tax, maturity mismatch and issuer/SPV recourse determine the investor’s actual risk.

## 8.3 Types

- yield with full or partial capital preservation;
- yield enhancement without capital preservation;
- capital-gain/participation notes without preservation;
- callable, inverse-floater, range, credit-linked, equity-linked, worst-of and access notes;
- ETNs and index-linked notes for exchange access.

## 8.4 Yield enhancement and capital preservation

### Range accrual notes (RAN)

A RAN pays a high rate on observations inside a stated range and a lower rate outside. If `n` of `N` observations are inside:

`payout = P1(n/N) + P2((N − n)/N)`.

The term sheet defines reference index, range, observation frequency, payout rates, minimum/maximum, call rights, settlement and whether the condition is observed at expiry or throughout life.

### Callable RANs / CDRAN / VMRAN

The issuer may call after a lockout/observation period. Calling creates reinvestment risk: the investor loses the attractive coupon and may only reinvest at lower rates. A callable deposit/return is not the same as a bond held to maturity.

### Inverse floater

Coupon typically follows `max[X% − leverage × floating-rate index, minimum coupon]`. It benefits from falling rates but can fall to the floor when rates rise; leverage makes rate risk nonlinear.

### Step-up callable note (CSUN-type)

Coupons step up on a schedule, but the issuer may call; investors bear issuer call/reinvestment risk, rates risk and the risk that the product’s “step-up” is never received.

## 8.5 Yield without capital preservation

### Equity-linked notes (ELNs)

An ELN is generally a funded bond/deposit plus a short put (bull ELN) or short call (bear ELN), and can include a strangle/worst-of structure. A bull ELN pays a higher yield if the equity stays above the strike; if below, the investor may receive shares/cash at the strike and bear equity downside. The principal can fall to zero if the underlying collapses. Cash versus physical settlement, knock-in/out, conversion ratio, observation and issuer terms matter.

Worst-of ELNs are driven by the weakest underlying and are highly sensitive to correlation, volatility and the weakest name’s liquidity.

## 8.6 Credit-linked notes (CLNs)

An investor in a CLN effectively sells credit protection through a CDS on a reference entity or basket and receives an enhanced coupon. On a credit event—bankruptcy, failure to pay, restructuring, obligation default/acceleration or repudiation/moratorium as defined—the payout may be reduced, securities delivered or principal lost. The investor bears both issuer/SPV credit risk and reference-entity credit risk. First-to-default baskets amplify correlation/concentration risk.

A bond-linked note (BLN) embeds a short put on a bond and has issuer/bond price risk; it is not identical to a CLN’s CDS credit-event mechanics.

## 8.7 Market access

- **ETN:** unsecured listed debt tracking an index; no ordinary ownership and no coupon necessarily; issuer credit risk is central.
- **ETF:** pooled fund with assets/custody and creation/redemption; it can still have market, tracking, liquidity and counterparty risks.
- **Index-linked note:** participation/minimum/cap linked to an index, normally subject to issuer claim.
- **Participation/access note (PN):** gives exposure to a market or asset through a note rather than direct ownership; terms and issuer recourse control.

## 8.8 Investors and suitability

Assess liquidity and lock-up, risk/return, capital protection conditions, underlying scenario, term, fees/charges, currency, issuer/SPV, collateral, secondary market, early termination, taxes and concentration. Explain that a high coupon can be compensation for selling a put/call/credit protection.

## 8.9 Summary

Structured notes are debt plus derivatives. Ask whether principal is actually protected, when, in which currency and by whom. Callable, range, inverse-floater, ELN and CLN products shift market, rate, equity or credit risk into the investor’s return; issuer/SPV and liquidity are as important as the reference asset.

## Chapter 8 appendix

The source’s appendix covers spread CDRANs, RAN variations, documentation and PHS content. A PHS should make the product understandable through a product summary, suitability, key features, key risks, prominent/clear disclosure of possible loss of all principal, definitions, contact information, readable layout and simple language. Appendix B reproduces a MAS practice-note excerpt: the PHS is prepared under the SFA framework, submitted with the prospectus at lodgement, made available with/alongside the prospectus (including online), and follows the prescribed format/headings as a minimum while adding material information needed for investor understanding.

# Chapter 9 — Structured Funds

## 9.1 Structured funds

A structured fund combines securities and/or derivatives to create a specified risk-return profile, capital-preservation objective, participation formula, yield or cost structure. Capital preservation normally applies only at maturity and is subject to fund/issuer/strategy performance; it is not the same as deposit insurance or a guaranteed NAV. Funds are governed by the applicable Code on Collective Investment Schemes, offering documents and licensing/custody requirements.

Key fund governance points are a licensed manager, fiduciary trustee/custodian, NAV calculation/reporting, valuation and pricing policies, disclosure of fees/risks, audit and investor dealing terms. Conflicts may arise where the manager, issuer, swap counterparty, custodian or distributor is affiliated.

### Core fund vocabulary

Know the source glossary terms: asset allocation, AUM, closed/open-ended fund, CIS, CPPI, cushion, custodian, drawdown, excess return, index fund, ISIN, management fee, minimum subscription, multiplier, NAV, option, share class, Sharpe ratio, SICAV, TER, total return, total return swap (TRS), tracker, trailer/upfront sales charge, UCITS, umbrella fund, underlying, VaR, volatility and zero-coupon bond.

### Traditional, tracker and structured funds

Traditional active funds seek to select assets; trackers seek to replicate an index; structured funds use formulae/derivatives to transform the distribution. Evaluate the underlying, maturity, payout, market outlook, fees, liquidity, counterparty and tax—not only the fund label.

### Total return swap (TRS) and option structures

A TRS fund receives the total return of a reference asset/index and pays financing to a swap counterparty. It provides efficient exposure but adds counterparty, collateral, reset, liquidity and termination risk. A “zero-plus” structure typically combines a fixed-income/zero-coupon component with a call, offering a floor-like maturity outcome and upside participation subject to costs and issuer/fund risk.

### CPPI

Constant proportion portfolio insurance allocates between risky and risk-free assets:

`cushion = portfolio value − floor value`;

`multiplier = 1 / crash size`;

`risky allocation = multiplier × cushion`;

`risk-free allocation = portfolio value − risky allocation`.

As the portfolio rises, risky allocation normally rises; as it falls, the manager sells risky assets and moves into the risk-free asset. The floor may increase over time and the risky allocation may be capped at 100% or allowed to be leveraged depending on the terms. A sharp fall can force the fund entirely into the risk-free asset, after which it may miss a later recovery: this is the “cash-lock” or gap-to-floor risk. In a range-bound market CPPI may buy high and sell low. DPPI varies the multiplier and has similar path, fee, gap, liquidity and manager risks.

### Other structured-fund arrangements

Common forms are capital-preservation funds, formula funds, capitalised/distribution classes and direct/indirect swap-based structures. Commodity-linked funds must consider futures roll yield: backwardation can help roll return; contango can hurt it. Option-based funds must explain the premium, strike, cap, barrier and issuer/counterparty.

### Roles, controls and after-sales

The manager implements the mandate; trustee/custodian safeguards assets and oversight; administrators calculate NAV; auditors review; distributors provide information/suitability. Controls include operational, financial, legal, independent trustee, valuation, liquidity and conflict controls. Documents include prospectus, PHS and trust deed. Investor service includes dealing/NAV, factsheets, monthly reports, tax and corporate-action information.

Investors may be retail, accredited or institutional. Core-satellite allocation, rebalancing, liquidity management and cash investment are common uses. Assess tracking error, leverage, derivative counterparty, concentration and redemption gates.

## 9.2 Structured ETFs

An ETF is typically an open-ended listed fund that trades intraday and uses authorised participants to create/redeem units. Types include equity, fixed-income, cash, currency, commodity, index, alternative, leveraged, inverse and protective ETFs.

- **Physical/direct replication:** holds all or a representative sample of securities.
- **Synthetic replication:** uses swaps/derivatives; the source discusses collateral and a 10% net counterparty-exposure concept subject to applicable rules and documentation.

Pricing risks include bid–ask spread, NAV discount/premium, tracking error, TER, roll yield, cash drag, FX, market liquidity and counterparty collateral. Creation/redemption arbitrage helps keep price near NAV but can fail in stressed markets. ETFs provide intraday liquidity, diversification, transparency, short/leveraged/inverse exposure and core-satellite tools, but are not risk-free. Compare ETFs with ETNs (unsecured debt), mutual funds (usually NAV dealing) and listed derivatives.

Investors should understand index methodology, rebalancing, distributions, securities lending, swap/collateral, leverage reset and closure/merger risk. After-sales monitoring includes NAV, tracking difference, corporate actions and factsheets.

## 9.3 Summary

Structured funds are CIS vehicles whose payoff depends on assets, formulae and sometimes derivatives or swaps. CPPI preserves a floor only subject to path and issuer/fund risks. ETFs trade intraday but have NAV, tracking, market, liquidity, FX and counterparty exposures. Governance, custody, disclosure and suitability are part of the product.

# Chapter 10 — Contracts for Differences (CFDs)

## 10.1 History

CFDs emerged in the UK in the 1990s from equity-swap style products and reached retail markets in the late 1990s. The source notes that CFDs were not available in the US retail market in the same way. The historical development explains their OTC, leveraged and cash-settled character.

## 10.2 Definition

A CFD is an agreement to exchange in cash the difference between the opening and closing value of an underlying position (or the reverse for a loss). The investor does not own the share/asset, normally has no voting rights, and does not take physical delivery. Long equity CFDs may receive a dividend adjustment; short positions may be debited. Corporate-action adjustments follow the provider’s terms.

## 10.3 Characteristics

Leverage, flexibility, relatively low initial outlay, transparent reference price, simplicity of long/short exposure, no fixed expiry in some provider models, global access, cash settlement and corporate-action adjustments are key features. Countervailing risks are margin calls, forced liquidation, financing, commission/GST, rollover, spread, provider credit and market liquidity.

CFD terms include underlying, opening/closing price, number of units, direction, currency, margin, financing rate, expiry/rollover and corporate-action treatment.

## 10.4 Business models

- **Market maker:** provider quotes the CFD and may internalise/hedge flow; price and spread depend on its ability and discretion.
- **Direct market access (DMA):** orders route through the provider to the underlying market; the source identifies DMA as predominant in Singapore.
- **Exchange-traded CFD:** exchange/clearing structure can reduce bilateral counterparty risk but remains product-specific.

## 10.5 Advantages

CFDs allow long or short access to shares, indices, sectors, FX, commodities, government treasuries, ETFs, VIX/volatility references, real estate and other global instruments from one account, with a smaller initial cash outlay and no need to own/borrow the underlying in the same way as a cash trade. They can be used for hedging, tactical exposure, pairs trading and dividend capture.

## 10.6 Mechanisms

### 10.6.1 Opening and margin

Initial margin is a percentage of contract value. The investor controls a larger notional than the cash posted; return on margin can be high but losses are based on the full exposure. Maintenance margin and provider limits apply. The Risk Disclosure Statement (RDS) should explain margin, liquidation and the client’s liability.

### 10.6.2 Mark-to-market and margin calls

Positions are revalued as the underlying moves. A margin call requires additional funds; if not received, the provider may sell some or all positions. The investor remains liable for a shortfall, loss and expenses after liquidation. A stop-loss is not a guarantee against gap/slippage.

### 10.6.3 Financing and corporate actions

Long CFDs normally incur interest on the full notional; short CFDs may receive interest on deferred sale proceeds but can incur stock-borrow costs. Commissions are commonly a percentage of notional subject to a minimum; GST may apply. Rollover fees depend on provider and asset. Long equity positions may receive cash dividends; short positions pay them. Splits/reverse splits adjust quantity/price; scrip dividends, bonus and rights entitlements may differ or require close-out.

### 10.6.4 Orders and stops

All orders are day orders unless otherwise stated and use the underlying bid/ask. Limit orders transact at the stated price or better. MTL orders execute at the market and leave an unfilled balance at the prior execution price. Market orders execute at the best available bid/ask. Stop-loss and stop-entry orders activate at a trigger; fast markets can gap through the stop. A guaranteed stop, if offered, is a distinct paid service.

### 10.6.5 Cost examples

The source’s long example: buy 10,000 shares at $2, sell after 10 days at $2.20, 0.4% commission, 8% GST on commission and 5% annual financing. Buy commission/GST = $86.40; sell = $95.04; ten-day financing = $27.78; total expense = $209.22; net profit = $1,790.78.

Short example: sell 10,000 at $3.30, cover at $3.10, 0.4% commission, 8% GST, 20% margin and 6% financing for five days. Total expense = $303.98; net profit = $1,696.02; capital posted = $6,600; ROI ≈25.70%. If the price rises to $3.45, expense = $319.10; net loss = $1,819.10; ROI ≈−27.56%.

### 10.6.6 CFD versus futures

CFDs are mostly OTC, can be extended/rolled subject to provider policy, explicitly charge financing, may pass dividend adjustments and carry provider counterparty risk. Equity futures are exchange-traded, have fixed expiry, embed financing in the price, normally have no dividend entitlement and are also margined/leverage products.

## 10.7 Global trading opportunities

The source lists Singapore STI/SiMSCI and global equity/sector indices (S&P 500, DJIA, FTSE100, CAC40, DAX, Nikkei225, ASX200, Hang Seng, China A50), currencies (AUD, CAD, EUR, CNH, JPY, CHF, GBP, USD), energy/industrial/precious metals/agricultural commodities, US/UK/Japan/Euro government bonds, ETFs such as SPDR Gold and volatility/real-estate references. Availability is provider-specific.

## 10.8 CFD trading strategies

- **Dividend capture/stripping:** buy before ex-dividend and close after, seeking to benefit if the price does not fall by the full dividend; costs, tax, timing and price behaviour can defeat the trade.
- **Pairs trading:** long an undervalued/stronger asset and short an overvalued/weaker related asset. It aims for mean reversion and market neutrality but correlation can break and costs double.
- **Industry-sector pairs:** compare companies such as property stocks; stock-specific and sector risks remain.
- **Statistical arbitrage:** use historical correlation/quantitative signals; a relationship may not revert.
- **Merger arbitrage:** long target/short acquirer or the reverse; deal failure can hurt both legs.
- **Index pairs:** trade correlated indices such as S&P500 and Nikkei225 when their relationship diverges; index liquidity is usually deeper than single stocks.

## 10.9 Summary

CFDs are leveraged cash-settled contracts, not ownership. Their flexibility hides financing, margin, liquidation, counterparty, liquidity, currency, corporate-action and short-sale risks. Learn the provider model, order mechanics, total cost and worst-case liability.

# Chapter 11 — Key Products and Investment Risks

## 11.1 Investment risks for derivatives

### Futures

- **Basis risk:** cash and futures are not identical or do not move together; causes include asset mismatch, uncertain exposure date, early close-out and contract-size mismatch/under- or over-hedging.
- **Liquidity risk:** volume/open interest may be low; price limits/lock-limit markets or near-expiry conditions may prevent offsetting.
- **Leverage/margin risk:** loss can exceed initial margin; a call may force liquidation and a shortfall remains payable.

### Options

Holders can lose the entire premium, especially when OTM and near expiry; European options may be difficult to monetise before expiry, and OTC exercise provisions may be unusual. Naked writers can face unlimited/large losses, and American writers do not control exercise timing. Both sides face volatility, complex-strategy, trading-halt, foreign-market timing and currency risks.

Equity-index options may reference illiquid/niche indices and OTC options add counterparty risk. Bond options inherit bond rates, credit-spread, liquidity, embedded-option and sovereign risks. Currency options involve huge notionals, round-the-clock market movements, currency delivery and OTC counterparty risk.

### Warrants

Company warrants can expire worthless, give no voting/dividend rights and dilute shareholders if exercised. Structured warrants add issuer credit risk, underlying market risk, leverage, time decay, volatility, liquidity and currency exposure.

### CFDs

Leverage, market volatility, counterparty, liquidity, currency, financing, commission/GST, rollover, corporate actions and provider-model risk apply. Foreign markets may have weaker protections and exchange controls. Market-maker pricing may be less transparent than DMA.

## 11.2 Key risks of structured products

Structured products combine risks that are not obvious from a headline yield:

1. **Market risk:** macro rates, inflation, employment, recession, earnings and political change affect underlying/payoff. Selling a call sells protection against a rise; selling a put sells protection against a fall; a short receiver/payer swaption sells protection against a rate move.
2. **CPPI risk:** buys more risky assets as they rise and sells as they fall; a sharp fall can lock the fund at its floor.
3. **Credit/counterparty risk:** issuer, SPV, swap counterparty, reference obligor or collateral may fail. An SPV may not be guaranteed by its parent.
4. **Credit-event risk:** bankruptcy, obligation acceleration/default, failure to pay, repudiation/moratorium and restructuring can trigger CDS/CLN losses.
5. **Liquidity/secondary-market risk:** customised options/CDS may be illiquid; lock-up and maturity mismatch may force a discount sale.
6. **Early-termination risk:** unwinding the bond and derivative before maturity incurs discount and break costs; full principal preservation may exist only at maturity.
7. **Structure risk:** combinations vary; loss may be unlimited or principal may be fully exposed despite a familiar wrapper.
8. **Reinvestment risk:** coupons/principal returned early or through calls may be reinvested at lower rates; large coupons, frequent payments, long maturities and premium bonds increase it; zero-coupon bonds reduce interim reinvestment risk.
9. **Volatility risk:** embedded options change value with volatility; a callable bond can fall when the call option becomes more valuable.
10. **Correlation risk:** basket/worst-of/credit-pool constituents may fall/default together.
11. **FX risk:** underlying and note currencies may differ.
12. **Legal risk:** investors own the note/claim, not necessarily underlying assets; creditor priority/recourse depends on documents.
13. **Transactional risk:** pricing/contract commencement and settlement timing, especially across currencies, can create exposure.
14. **Mis-selling/incongruence:** the product may not meet the client’s objective; PHS/prospectus/private-placement documents and advice must explain the real payoff.

## 11.3 Trading risk control and management

The front office, middle office and back office manage market, credit and settlement risks.

### Futures controls

- **Open-contract limit:** smaller for volatile/illiquid products and restricted relative to gross open interest; separate outright/spread limits may apply.
- **Maximum-loss limit:** weekly/monthly trader or desk loss triggers squaring-off and suspension/escalation.
- **Maturity limit:** restricts illiquid deferred contracts.
- **Stress-test limit:** measures portfolio under adverse scenarios.

For fixed income: 1 bp = 0.01%; DV01/PVBP is dollar price change per 1 bp; duration is a weighted cash-flow time measure; modified duration measures price sensitivity. `ΔP/P ≈ −modified duration × ΔYTM`. A modified duration of 2 and a 100 bp yield rise implies about a 2% price fall. If price $980 has PVBP $1, a 5 bp yield rise reduces it to $975.

VaR combines volatility/correlation into a loss threshold. A 1-day 95% VaR of SGD1m means a 5% probability that loss exceeds SGD1m over one day, under the model’s assumptions. VaR has confidence, horizon and loss-estimate components; it is not a guarantee or stress-test substitute.

### Options controls

Set limits for delta (currency exposure), gamma (delta change for a spot move), vega (premium change per 1% volatility), theta (time decay) and rho (rate sensitivity). Gamma is especially volatile near ATM and expiry. Maturity concentration, total book size, premium payment and intraday limits complement Greek limits. Gamma, vega and theta may be managed together for short-option books.

### Credit and settlement controls

OTC counterparty limits depend on credit rating, settlement amount and tenor. A Credit Support Annex (CSA) specifies collateral. Clearing-broker risk arises because margin is held with the broker; exchange/CCP risk remains despite default resources. Back-office settlement controls require timely, accurate confirmations including option style, expiry/date/time, premium payment date, settlement date, strike, currencies and amounts.

## 11.4 Summary

Risk management must match the product: basis/liquidity/leverage for futures; premium/exercise/volatility/Greek risk for options; issuer/gearing for warrants; margin/financing/provider risk for CFDs; and layered market, credit, liquidity, legal, structure, correlation, FX and reinvestment risk for structured products.

# Chapter 12 — Case Studies

These cases are decision exercises, not product endorsements. A representative should establish suitability, knowledge, risk willingness, financial capacity, external exposure, internal limits, buffers, leverage, stop/offset discipline, profit targets and current market information before recommending a trade.

## 12.1 Enhanced yield with currency investments — Mrs Goh

Mrs Goh holds USD, GBP and SGD. She expects a short-term USD rebound but longer-term USD weakness and accepts conversion into SGD/GBP. A USD/SGD DCI invests USD1m for three months at 11% p.a., strike 1.3800, spot 1.3569.

- If expiry spot is 1.3300, no conversion at strike; USD proceeds = 1,000,000 + 1,000,000 × 11% × 3/12 = USD1,027,500. Converted at 1.33 = SGD1,366,575.
- If spot is 1.3800 under the source’s scenario, proceeds remain USD1,027,500.
- If spot is 1.4100 and conversion applies, USD1,027,500 is converted at 1.3800 = SGD1,417,950.

From the bank’s perspective, fund the deposit at USD 1.3919% and sell the option at 0.0250; the source computes about USD1,028,566.74 after three months, annualised around 11.43–11.44%, above the 11% client return. The lesson is that DCI yield is option premium plus deposit interest and conversion risk.

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

William holds OCBC, DBS and CapitaLand worth SGD92.72m and wants protection beyond a 7% fall. Compare put-warrant strikes, breakeven, expiry and stock coverage. Under the source’s 7% scenario, DBS/OCBC put warrants B and D are in-the-money; CapitaLand E is selected because it is the only available CapitaLand protection and is less OTM than alternatives. A and D offer more time protection; E covers CapitaLand.

Higher volatility raises warrant prices because the strike is more likely to be reached. OTC alternatives are lending the shares for a 4–5% fee, buying tailored protective puts 3–4% below spot, or shorting MSCI Singapore futures. The futures hedge is imperfect because the three stocks represent only about 31% of the index. Futures have immediate daily MTM obligations; a long put has a right, not an obligation; a share loan earns a fee.

## 12.4 ELN yield and discounted blue-chip purchase — Mr Sunjoyo

OCBC spot = SGD13.30; ELN purchase = SGD975,000; notional = SGD1m; strike = SGD12.50; 80,000 shares; three months; annualised headline yield = 10.66%.

- At expiry SGD12.40, shares are worth SGD992,000; return over three months = 1.7435%; annualised compound return ≈7.16%.
- At SGD12.00, shares are worth SGD960,000; return = −1.5385% over three months; annualised ≈−6.29%.
- Breakeven = 975,000/80,000 = SGD12.1875 ≈ SGD12.19.

The client is effectively short a put: below the strike, he owns the falling stock and can lose up to almost the entire investment if the stock goes to zero.

## 12.5 Range accrual note — Robert

AUD/USD range = 0.7600–0.8200, maturity three months, maximum yield 6%, minimum 1%, MMR 2.75%. If inside for two months and outside for one, annualised payout under the source’s convention is `6%×2/3 + 1%×1/3 = 4.33%` (the source’s answer text displays approximately 4.32% due rounding).

To make the digital spread cheaper or raise maximum yield: narrow the range, skew it so spot is nearer a barrier, extend maturity, or lower the minimum yield. Widening the range makes inside outcomes more likely and the option more expensive; shortening maturity can increase cost. A double-no-touch version observes the path: touching either barrier terminates the enhanced payout and leaves only the minimum return.

## 12.6 Equity accumulator — Harry

ABC spot SGD1.10; strike SGD1.00; knock-out SGD1.30; one year/250 business days; 10,000 shares per observation; monthly settlement. An accumulator combines long call and short put economics and can be funded or margin/unfunded. Below strike under a 1×2 arrangement, the client may have to buy 2×; above strike but below the knock-out, 1×; at/above the barrier, the note terminates.

- If the barrier is touched on day 13, days 1–12 accumulate: 120,000 shares.
- Twenty days in month 1 plus 12 days in month 2 before day-13 knock-out = 320,000 shares; cost = SGD320,000.
- If marked at SGD1.30, value = SGD416,000 and gain = SGD96,000.

Worst case in the source: price zero for 250 days, 2.5m shares purchased at SGD1 = SGD2.5m loss. There is no capital preservation; the bank may margin-call/liquidate; gains are capped by knock-out while losses continue below strike; early break costs can be large.

## 12.7 Gold, silver and USD volatility — Brandon

Rising US rates may strengthen USD and weaken gold/silver, while political/equity uncertainty may support safe-haven gold. Gold’s widening premium to silver and different USD sensitivities create relative-value ideas. If the direction is uncertain but a large move is expected, buy a gold straddle: long call and long put at the same strike. A strangle uses different OTM strikes and is cheaper but needs a larger move. Combine a bull call spread with a bear put spread, or a bull call with a bear call, to express two-sided volatility; do not use two bearish or two bullish structures if the view is genuinely two-sided.

## 12.8 Yield-curve movement — Tracy

Tracy expects the US yield curve to flatten/invert: short rates rise faster than long rates. A constant maturity swap (CMS) resets a floating leg against a long-term constant-maturity rate; unlike a vanilla IRS, the reference maturity/duration remains constant. It can express steepening/flattening views. To benefit from short rates rising faster, the source’s answer is to swap the long end for the short end—pay the long-end rate and receive the short-end rate—subject to the exact swap convention and market quotation.

# Appendix A — CPPI strategy worked examples

Parameters: initial $100; crash size 20%; multiplier `1/20%=5`; risky asset S&P index fund; five-year tenor.

- Day 1 floor 85%: cushion 15; risky = 5×15 = $75; risk-free = $25.
- New floor 86% with total still $100: cushion 14; risky = $70; risk-free = $30.
- Portfolio at $86 after risky asset falls 20%: risky falls $70→$56; plus $30 risk-free = $86; liquidate all risky into risk-free, so later equity appreciation is missed.
- Portfolio at $96: risky value $66, required risky allocation `5×(96−86)%=$50`; sell $16 risky and hold $46 risk-free.
- Portfolio at $110: required allocation `5×(110−86)%=$120`; if capped, put all $110 in risky; if leverage permitted, borrow $10 and hold $120 risky.
- If leveraged risky value falls 20% from $120 to $96, repay $10 and move remaining $86 to risk-free. The crash has again locked the floor.

The reallocation repeats periodically. CPPI assumes an appreciating, relatively low-volatility asset with limited drawdown; a range-bound or gap-down market can cause buy-high/sell-low behaviour.

# Appendix B — MAS Product Highlights Sheet practice note

The source reproduces an excerpt of MAS Practice Note SFA PN-02 (issue date 8 June 2018) and references SFA 13-G13. Key teaching points:

- the note guides issuers and professional advisers in preparing a PHS under the SFA framework and is read with the relevant offers regulations;
- the PHS is submitted to MAS at prospectus lodgement;
- it is made available with the prospectus, including online if the prospectus is online;
- the prescribed format, tabular structure, headings/subheadings and yellow Pantone 109C right-edge feature are minimum presentation requirements;
- additional headings and material information should be added where needed so investors understand the product;
- a PHS should plainly state product summary, suitability, key features, risks, fees/charges, definitions and contacts, and prominently disclose possible loss of all principal where applicable.

# Appendix C — Futures contract specifications

The source states that these specifications were updated as at April 2022 and directs candidates to current SGX specifications.

| Contract | Main terms to remember |
|---|---|
| SGX EUR/CNH FX futures (`EC`) | EUR100,000; tick CNH10; minimum fluctuation CNH0.0001; cash-settled in CNH; last trading day two business days before the third Wednesday; final price cross-calculates EUR/USD and USD/CNH WM/Reuters rates; no stated position limit but accountability above 5,000 net contracts; negotiated large trade minimum 20. |
| SGX 10-year full-size JGB (`JG`) | JPY100m notional, 10-year 6% coupon; quarterly March/June/September/December months; JPY0.01 per JPY100 notional tick (JPY10,000); cash-settled; final price from OSE 10-year JGB opening price; position accountability above 2,500 combined with mini-JGB; 1 JG offsets 10 mini-JGB. |
| SGX Nikkei 225 (`NK`) | JPY500 × index; 6 serial + 32 quarterly months; outright tick 5 points/JPY2,500, strategy 1/JPY500, TAIC 0.25/JPY125; 10% then 15% cooling limits; cash-settled; last day before second Friday; final special Nikkei quotation; accountability above 10,000 delta-combined contracts; CME mutual offset for eligible trades. |
| SGX FTSE Taiwan (`TWN`) | USD40 × index; 2 serial + 12 quarterly months; 0.25-point/US$10 standard tick; 10% then 15% cooling limits; cash-settled; last day second-last Taiwan business day; final price uses an average of index values/closing value; large trade minimum 50. |
| SGX MSCI Singapore (`SGP`) | SGD100 × index; 2 serial + 4 quarterly months; 0.05 point/SGD5 tick; ±10%/±15% cooling; cash-settled at official closing MSCI Singapore Free Index; last day second-last Singapore business day; accountability above 5,000; large trade minimum 50. |
| SGX STI (`ST`) | SGD10 × index; 2 serial + 4 quarterly months; 1 point/SGD10 tick; +10%/+15% cooling; cash-settled at official closing STI; last day second-last Singapore business day; accountability above 5,000; large trade minimum 50. |

Exam habit: identify contract size, tick value, trading hours/session, price limits, last trading day, settlement basis, final settlement reference and position-accountability threshold before calculating.

# Appendix D — Formulae sheet (consolidated)

## Futures

`F0,t = S0(1 + C0,t)`

`P = 100(1 − R)` for short-rate futures.

`(1 + d1r1/360)(1 + d2r2/360) = (1 + DR/360)` for long-rate futures.

`F = S × [1 + Rc(n/360)]/[1 + Rb(n/360)]` for interest-rate parity.

`F = S[1 + r(t/360)] − D` for equity-index futures.

`target hedge rate = futures rate + target-rate basis`.

`Vt = St + (F − Ft) = F + (St − Ft)`.

`bond hedge ratio = PVBP(hedged security)/PVBP(CTD) × conversion factor`.

`h = ΔS/ΔF`; contracts for a delta-neutral loan = `−h × loan value/contract size`.

`N = VP/(F × T) × β` for equity futures hedging.

## Options

`option price = intrinsic value + time value`.

`call IV = max(0,S−X)`; `put IV = max(0,X−S)`.

`C + PV(X) = P + S`.

`delta = change in option price/change in underlying`; `gamma = change in delta/change in underlying`.

## Warrants and CBBCs

`gearing = share price/(warrant price × n)`; `effective gearing = delta × gearing`.

`call IV=max[0,(S−X)/n]`; `put IV=max[0,(X−S)/n]`.

`call conversion price=X+nWP`; `put conversion price=X−nWP`.

`call cash settlement=(S−X)/n`; `put cash settlement=(X−S)/n`.

`bull CBBC=[(underlying−strike)+financial cost]/conversion ratio`.

`bear CBBC=[(strike−underlying)+financial cost]/conversion ratio`.

R-CBBC residual: bull `(settlement−strike)/n`; bear `(strike−settlement)/n`; N-CBBC residual is zero at MCE.

## Structured products

`CPPI cushion=portfolio−floor`; `multiplier=1/crash size`; `risky=M×cushion`; `risk-free=portfolio−risky`.

`RAN payout=P1(n/N)+P2((N−n)/N)`.

`inverse floater coupon=max[X%−leverage×floating index, minimum coupon]`.

`participation rate = discount sum/call premium` under the source’s structured-product convention.

# Appendix E — Review Questions: what they test

The source warns that Appendix E is for familiarisation with exam scope and format, not a complete study resource. Its 50 questions cover futures (1–5), futures strategies (6–10), options (11–15), structured warrants/DLCs (16–21), barriers/binaries/CBBCs (22–26), structured deposits/products (27–31), structured notes (32–36), structured funds (37–40), CFDs (41–45) and risks (46–50). The expanded bank in `CMSIP_QUESTIONS.md` follows this order, adds Chapters 1 and 12, and covers every subsection in this guide.

# Appendix F — Essential readings

The source recommends: Bodie, Kane & Marcus, *Investments*; Hicks, *Managing Currency Risk Using Foreign Exchange Options*; Walmsley, *Foreign Exchange and Money Markets Guide*; Fabozzi & Leibowitz, *Fixed Income Analysis*; the CME Group *Risk Management Handbook*; Chance, *Analysis of Derivatives*; Hull, *Options, Futures & Other Derivatives*; Kolb & Overdahl, *Financial Derivatives: Pricing and Risk Management* and *Futures, Options, and Swaps*; Wilmott, *Derivatives*; Blumke, *How To Invest in Structured Products*; Lancaster, Schultz & Fabozzi, *Structured Products and Related Credit Derivatives*; Swiss Structured Products Association; Fabozzi, Davis & Choudhry, *Introduction to Structured Finance*; and current MAS, MoneySense and SGX materials.

# Appendix G — Glossary and cross-reference

The source glossary supplies general finance language used throughout the chapters. The most important terms are defined in context above. Use this compact cross-reference when revising:

- **Market basics:** absolute/relative return, alpha, benchmark, beta, bid/ask, blue chip, asset class, asset allocation, diversification, position, portfolio, risk appetite, risk tolerance, systematic/specific risk, spot market/rate, primary/secondary market, supply/demand and price discovery.
- **Accounting/economics:** accounts payable/receivable, balance sheet, cash-flow statement, current assets/liabilities, equity, book value, net income/profit margin, ROA/ROE, EBITDA, GDP, inflation/deflation, recession, fiscal/monetary policy, business cycle, balance of payments, current/capital account, exports/imports, trade balance, goodwill, amortisation, depreciation, fixed/variable costs, WACC, DCF/NPV, EPS, P/E/P/B/P/S/P/CF, enterprise value and EV/S.
- **Derivatives:** derivative, forward, futures, options, premium, strike/exercise, call, put, American/European, ITM/ATM/OTM/moneyness, intrinsic/time value, delta, gamma, theta, vega, rho, compound/exotic/plain-vanilla option, options on futures, warrant, structured warrant, conversion ratio, gearing, effective gearing, CBBC, DLC, CFD, swap, swaption, IRS, currency/commodity/equity swap, CDS, cap, floor, collar, basis, basis point, carry, mark-to-market, initial/maintenance/additional margin, notional, delivery, settlement, contract specification, hedge/hedge ratio, stack/strip, spread, calendar/horizontal, vertical, diagonal, butterfly, condor, ratio and seagull.
- **Structured products/funds:** structured product, structured deposit, structured note, ELN, CLN, BLN, RAN, CDRAN/VMRAN, inverse floater, zero-plus, accumulator/decumulator, discount/capped certificate, participation rate, basket/worst-of, barrier, knock-in/knock-out, one-touch/no-touch, CPPI, cushion/multiplier, DPPI, TRS, zero-coupon bond, ETN, ETF, NAV, AUM, TER/expense ratio, Sharpe/Treynor/information ratio, tracking error, UCITS, CIS, SICAV, umbrella, open/closed-ended fund, custodian, trustee, prospectus, PHS, trust deed, accredited/institutional/retail investor.
- **Risk/control:** market, basis, leverage, liquidity, credit/counterparty, settlement, operational, legal, transaction, structure, correlation, volatility, currency, financing, reinvestment, early termination, mis-selling, sovereign, political, model, gap and roll risk; VaR, stress test, open-contract/maturity/maximum-loss/Greek/book/intraday limits, CSA, front/middle/back office, DMM and authorised participant.
- **Corporate/market terms:** dividend/stock dividend, bonus/rights issue, share split/reverse split/buyback, conversion value, straight value, convertible bond, current yield/YTM, credit spread/rating, default/credit event, repo, T-bill/T-bond, MBS/ABS/CDO, dark pool, ECN, dealer/market maker, brokerage, proprietary trading, hedge fund, private equity, venture/growth/buyout/distressed funds, REIT, real estate, alternative investment, index/price-weighted/capitalisation-weighted, index fund, passive manager, technical analysis, EMH, APT, CAPM, efficient frontier, GIPS and information ratio.

The less product-specific entries in the source glossary—annuity, appraisal, appreciation/depreciation, assets, banks, board, foundations, fraud, insurance, legal/regulatory terms, policies/procedures/processes, reserve currency/requirement, retained earnings, shareholders/voting rights, tariffs, underwriters, trade bills, trust deed and similar general terms—should be treated as ordinary definitions supporting the product chapters. When an exam question uses one, translate it back to the underlying cash flow, risk or legal relationship.
