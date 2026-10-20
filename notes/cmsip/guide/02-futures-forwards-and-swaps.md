---
id: '2'
kind: 'chapter'
num: 2
part: null
title: 'Futures, Forwards & Swaps'
order: 2
slug: 'chapter-2-futures-forwards-and-swaps'
---

# Chapter 2 — Futures, Forwards & Swaps

Futures and forwards are the oldest derivatives, and swaps are built from repeated forwards. This chapter covers their mechanics, pricing, settlement and the four swap families the examination tests.

## Learning Objectives

The candidate should be able to:

- Discuss the origins and evolution of futures and futures exchanges.
- Explain the economic importance of futures markets.
- Know the difference between futures and other assets and financial instruments.
- Describe the general features of futures contracts.
- Explain the differences between futures and forward contracts.
- Explain specific items within the contract specification of a futures contract.
- Explain and carry out basic calculations on notional value and margin requirements.
- Describe the different types of financial and commodity futures.
- Explain the role of futures exchanges and how they operate.
- Describe the settlement process of futures exchanges, including SGX-DT.
- Show how leverage can impact the performance returns of futures.
- Explain futures pricing models and how arbitrage opportunities arise.
- Explain and apply the concept of basis in futures contracts.
- Explain how to use interest rate swaps, FX swaps, currency swaps, equity swaps and credit default swaps.

## 2.1 Introduction — Futures and Forwards

Futures are standardised contracts for the purchase and sale of financial instruments or physical commodities on regulated futures exchanges, with the price determined for future delivery. Originally these were non-homogeneous contracts made directly between buyers and sellers — **forward contracts**. As particular specifications of quality, size and delivery time became widely used, the more popular terms standardised. With the desire for a credit-worthy market-maker or counterparty, margin requirements were set in and the futures exchange was born.

A futures exchange is a marketplace for standardised financial and commodity derivatives where buying and selling is contracted for future delivery.

| Exchange | Position |
|---|---|
| **CME Group** | The world's largest and most diverse derivatives exchange: **3 billion contracts worth approximately USD 1 quadrillion annually**. Formed by the merger of CME with the Chicago Board of Trade (CBOT). Includes CBOT, CME, NYMEX and COMEX, plus the Kansas City Board of Trade. |
| **ICE (Intercontinental Exchange)** | Second largest, built through mergers and acquisitions among exchanges and clearing houses across the US and Europe to create more competitive entities with global reach. Supported by large Wall Street investment banks that needed ICE as the clearing house for credit default swaps. Its edge is technology integration across platforms and clearing houses in different locations, which funded acquisitions such as NYSE and the spin-off of Euronext in an IPO. |
| **ICE Futures Singapore (IFSG)** | Created from ICE's acquisition of the **Singapore Mercantile Exchange (SMX)**. |
| **APEX** | Asia Pacific Exchange Pte Ltd, a Chinese-investor-backed exchange, granted MAS approval in **2018** to offer commodity and financial derivatives. |
| **Eurex** | The biggest futures exchange in Europe, owned by Deutsche Börse. |
| **Euronext** | The second largest in Europe, offering access to Belgium, France, the Netherlands, Portugal and the UK. |
| **B3 S.A.** | Formerly BM&F Bovespa, of São Paulo — the largest futures market serving South America. |
| **SGX** | Operates Asia's largest derivatives market in futures, swaps and options, benefiting from Singapore's position as Asia's largest FX centre. Offers futures on all the major equity indices of the major Asian markets. |
| **HKEX** | In addition to its equity and futures exchange, Hong Kong Exchanges and Clearing Limited owns the **London Metal Exchange**. |
| **Chinese exchanges** | The Shanghai Futures Exchange, Dalian Commodities Exchange and Zhengzhou Commodities Exchange began as non-profit pure commodities exchanges serving Chinese agriculture and manufacturing. Together, as a joint venture, they started the **China Financial Futures Exchange**. The Chinese yuan was approved by the IMF as a world reserve currency only in **2015**, and new financial products are being introduced gradually; given the size of the economy, growth potential is enormous. |
| **Others** | Japan Exchange Group, Korea Exchange, National Stock Exchange of India, Moscow Exchange, Guangzhou Futures Exchange. |

Given the interconnectivity of today's markets, investors reach futures through multiple platforms and service providers — banks, broking firms and internet-based brokers.

### 2.1.1 Futures versus Forwards

Forward contracts preceded futures. The differences decide which instrument fits a given exposure.

| Futures | Forwards |
|---|---|
| Standardised as to quality, quantity, delivery time and place. | Usually bilaterally negotiated between buyer and seller; terms are not standardised. |
| The exchange is counterparty, so there is **no counterparty risk between the actual buyer and seller** — it is realised only if the exchange itself fails. Counterparty risk is therefore lower than for forwards. | Each party is exposed to the other. Bilateral risk can be eliminated where the forward is **cleared by a central counterparty**. |
| Marked to market at the end of each trading day; participants must cover margin shortfalls under exchange rules. | Typically not subject to mark-to-market adjustment and with no interim partial settlement requirement. |
| Usually offset (closed out) on the exchange before maturity; live contracts settle on the settlement price and procedures at maturity. | Settled by physical delivery or by cash settlement on the difference between the contracted price and the market price at maturity; traded OTC with **no guarantee of an active secondary market**, and settlement terms vary by contract. |
| Globally, most trading now occurs on electronic platforms linked to the exchanges, with pit trading phased out. | — |

Forwards remain more useful where a player needs a customised solution — a position or hedge in an exotic currency, or a delivery period not readily available on futures. Those needs are met through a customised contract with a financial institution or another commercial counterparty.

Understanding both matters because the directional and leverage effects of futures let an investor express the degree of bullishness or bearishness they hold.

### 2.1.2 Economic Importance and Impact of the Futures Market

The futures market is highly active and central to the global financial marketplace. It is an important source of market information and often indicates market sentiment.

#### 2.1.2.1 Price Discovery

The futures market reflects the current price of a contract for a product to be delivered in the future, providing a platform for ongoing **price discovery** — buyers and sellers contracting and influencing prices now, for future delivery, given available information and predictions. How participants absorb and react to information constantly changes prices. That information includes future economic performance, potential political developments, and forecasts of environmental and climatic change that may or may not come about.

#### 2.1.2.2 Risk Management

The futures market is where investors manage risk. Because market prices are transparent and readily available, investors know how much they need to buy or sell. For consumers and buyers of commodities, hedging lowers the eventual cost to consumers by reducing the risk that manufacturers raise prices for key supplies because of spot-market volatility. Business managers and financial investors use suitable futures as part of planning to reach their objectives.

#### 2.1.2.3 Augmenting Volatility

Participants use futures to leverage long or short positions. In major financial distress in equity, bond or commodity markets, the leveraging impact of futures and options can significantly augment volatility. The downward pricing pressure from shorting futures usually adds selling pressure on the spot market and underlying assets; hedge funds and traders exploit such situations, and the value of underlying assets can fall faster than normal, destroying market value over a very short time.

Computer-driven trading and electronic platforms have quickened the pace of wealth destruction during shocks and extended its ripple into other asset classes and the economy, so governments have had to intervene in both futures and spot markets in extreme situations to dampen that ripple.

## 2.2 General Features of Futures Contracts

- **a. Standardised.** Futures are standardised contracts for the purchase and sale of financial instruments or physical commodities on a regulated futures exchange, for future delivery on the delivery date.
- **b. Price driven by the underlying.** Price movement is directly influenced by the underlying asset's price and value. The futures price is set by current demand and supply, which are in turn shaped by composite information and market expectations about the future.
- **c. Finite life.** A contract ends on the expiration date, so market direction and time horizon are central considerations.
- **d. Notional value.** Futures carry a notional value depending on contract size or multiple and the market price at any time. At expiration the parties must fulfil their obligations — one to deliver, the other to receive. Unlike out-of-the-money options or warrants, which go to zero at expiry, a futures contract **retains a notional value** at expiration.
- **e. Lower counterparty risk.** The counterparty is the futures exchange, backed by margin requirements.
- **f. Leverage.** The investor posts only a fraction of contract value as initial margin to gain exposure to the whole position, augmenting both gains and losses.
- **g. Daily mark-to-market.** The value is marked at the end of each trading session and any margin shortfall must be covered.
- **h. Close-out usual.** In most executions buyers and sellers do not deliver or receive the underlying, but square off with the exchange to realise gain or loss.
- **i. Contract-specific terms.** Contract size and units depend on the type of futures; they appear in the contract specification or term sheet. Traders combine futures characteristics with the underlying and other derivatives to craft strategies with different payoff and risk profiles.

### 2.2.1 Calculating Notional Value for Different Types of Futures Contracts

Notional value depends on the futures price and the multiplier for that contract:

$$ \text{Notional value} = \text{futures price} \times \text{multiplier (contract size)} $$

The multiplier differs by contract, and by exchange for the same underlying index.

| Contract | Setting | Calculation |
|---|---|---|
| E-mini S&P 500, Jun 2020 | Index at 2,358.50 on 31 March 2020; bid/ask 2,361.00 / 2,361.25; multiplier 50 | Purchase at 2,361.25 → $$50 \times 2{,}361.25 = \text{USD } 118{,}062.50$$ |
| E-mini Nasdaq 100, Jun 2020 | Contract done at 5,429.25 on 4 April; multiple 20 | $$20 \times 5{,}429.25 = \text{USD } 108{,}585$$ |
| SGX FTSE China A50, Sep 2020 | Trading at 10,300 on 4 April; multiple 1 | $$1 \times 10{,}300 = \text{USD } 10{,}300$$ |
| EUR/USD futures, Jun 2020 | Last traded at 1.07045; contract unit EUR 125,000 | EUR 125,000, or **USD 133,806.25** |

### 2.2.2 Leverage

- **a. Initial margin.** The small upfront payment that initiates a position; the investor does not pay for the whole contract at trade initiation.
- **b. Maintenance margin.** The minimum the customer must keep on deposit at all times. While net equity is above it, no request for additional funds arises even after an adverse move.
- **c. Additional margin.** Each account is credited or debited at the end of each trading day and checked against the appropriate margin for all open positions. If the balance falls below maintenance level, additional margin is required and the account must be restored to the **initial** margin level immediately or within a stipulated time.

In Singapore, **SGX** publishes maintenance and initial margin for every futures contract on a daily margin schedule. Margins vary when market conditions change significantly — for example, in extreme volatility.

#### How margins are used: SGX Nikkei 225

The contract is worth **JPY 500 × the Nikkei level**. At 22,500 the contract value is:

$$ 500 \times 22{,}500 = \text{JPY } 11{,}250{,}000 $$

At an initial margin of **6.5%**:

$$ 0.065 \times 11{,}250{,}000 = \text{JPY } 731{,}250 $$

**If the index rallies 7% to 24,075**, the contract is worth JPY 12,037,500. The profit is:

$$ 500 \times (24{,}075 - 22{,}500) = \text{JPY } 787{,}500 $$

That is more than **100% of the initial margin** — the leverage effect, and one reason futures appeal.

**If the index falls 160 points to 22,340**, the contract is worth JPY 11,170,000 and the loss is:

$$ 500 \times (22{,}340 - 22{,}500) = -\text{JPY } 80{,}000 $$

The exchange compares contract value to the account daily and adds profits or subtracts losses. The balance must stay above the maintenance margin — **5%**, or:

$$ 0.05 \times 11{,}250{,}000 = \text{JPY } 562{,}500 $$

Here the balance becomes JPY 651,250, still above the JPY 562,500 maintenance level.

### 2.2.3 Contract Specifications and Term Sheets

A contract specification sets the basic terms and conditions of the investment. It should state:

- description and standard size or denomination of the underlying;
- contract size and value;
- tick size;
- trading hours;
- price limits;
- last trading day;
- settlement basis;
- final settlement price;
- mark-to-market procedures;
- margin call procedures.

Appendix C lists the main SGX-DT contract specifications.

| Term | Meaning |
|---|---|
| **Contract standardisation** | Each contract has a standardised size fixed in currency and contract size relative to the underlying. The E-mini S&P 500 is denominated in USD and is always USD 50 × the S&P 500 index. |
| **Contract value** | Contract size × current price. At an index level of 1,850, one E-mini contract is USD 50 × 1,850 = USD 92,500. |
| **Tick size** | The smallest amount the contract price can move; it varies by contract. An E-mini tick is ¼ index point; since a point is USD 50, one tick is **USD 12.50**. |
| **Price limits** | The maximum the price may move in one day from the previous settlement. Set by the exchange to regulate dramatic swings. When a contract settles at its limit bid or offer, the limit may be **widened** for the next session so prices can return to a level reflecting the market. |
| **Mark-to-market** | Contracts are marked daily as a safety measure. At the end of each day the exchange sets a settlement price from the day's closing range. |
| **Margin call** | Accounts are credited/debited on the day's profit/loss and checked against open positions. Failure to meet the requirement triggers a call from the Licensed Representative to add funds or reduce positions. Firms may suspend privileges or close accounts. |

#### The SiMSCI futures contract

| Term | Specification |
|---|---|
| Contract size | SGD 200 × Singapore MSCI (SiMSCI) futures price |
| Contract months | 2 nearest serial months and 4 quarterly contract months |
| Trading hours | 8.30 am – 5.15 pm (T session); 6.15 pm – 10.55 pm (T+1 session) |
| Minimum price fluctuation | 0.1 index point, worth **SGD 20** |
| Daily price limits | On a **15%** move either way from the previous settlement, trading at or within ±15% is allowed for the next **10 minutes**; after that cooling-off there are **no price limits** for the rest of the day. No limits on the last trading day of the expiring contract. |
| Last trading day | The **second-last business day** of the contract month. A business day is one on which the Singapore equity market is open. |
| Settlement basis | Cash settlement |
| Final settlement price | The SiMSCI value computed on the **Special Quotation** methodology applied to each component stock on the day after the last trading day (FSP Day) |

## 2.3 Types of Futures

Growth in futures began with farmers, miners, manufacturers and businesses needing to manage risk and uncertainty: a futures contract fixes a price for a period, which makes planning easier. The categories are:

- **a. Commodity futures** — agriculture, energy, metals.
- **b. Financial futures** — equity, interest rates, foreign exchange.
- **c. Others** — innovation has created futures in new areas such as weather.

### 2.3.1 Interest Rates Futures

Banks lending or borrowing over a period are exposed to rate movements and can partially or fully hedge through interest-rate futures or options on them. More broadly, these contracts let investors and traders take positions on how short-term or long-term rates may move across the yield curve, given fiscal and monetary policy and their view of economic statistics. Interest-rate futures are available on most exchanges, especially in the US, UK and Singapore.

#### 2.3.1.1 Short-Term Interest Rates Futures

The most popular short-term contracts are **US Treasury bill futures, Eurodollar futures and Euroyen futures**. The underlying is typically:

- **a.** A time deposit in a **Eurocurrency** — a currency lent or borrowed outside its country of origin — where the rate offered for a specified period to a first-class bank determines the futures price for the same period; or
- **b.** A government treasury bill, where the rate at which an investor is willing to invest for the period forms the basis of the futures price.

$$ P = 100 \times (1 - R) $$

where $$R$$ is the annualised interest rate for the period. At $$R = 3.50\%$$:

$$ P = 100 \times (1 - 0.035) = 96.50 $$

#### 2.3.1.2 Long-Term Interest Rates Futures

Used to manage rate exposure or to take a market view. A borrower with outstanding debt may protect against rising rates; a fixed-income manager may sell interest-rate futures to protect a bond portfolio. If rates rise, futures prices fall — rates and bond prices move in opposite directions — and the profit on closing the futures offsets the portfolio decline.

$$ \left(1 + \frac{d_1 r_1}{360}\right)\left(1 + \frac{d_2 r_2}{360}\right) = \left(1 + \frac{DR}{360}\right) $$

Rearranged to solve for the second-period rate:

$$ r_2 = \frac{360}{d_2} \left( \frac{360 + DR}{360 + d_1 r_1} - 1 \right) $$

where $$d_1$$ is days in the first period, $$d_2$$ days in the second, $$D$$ days for the entire period, $$r_1$$ the first-period rate, $$r_2$$ the second-period rate and $$R$$ the rate for the whole period.

**Worked example.** Spot date to 15 September is 45 days; to 15 December is 135 days. The 45-day rate is 1.25% and the 135-day rate is 1.75%. The implied 90-day forward rate is:

$$ \left(1 + \frac{45 \times 0.0125}{360}\right)\left(1 + \frac{90 \times r_2}{360}\right) = \left(1 + \frac{135 \times 0.0175}{360}\right) = 1.006563 $$

Solving gives $$r_2 = 2.00\%$$.

#### 2.3.1.3 US Treasury Futures

US Treasuries are among the most liquid financial products in the world, and Treasury futures and options support hedging, income enhancement, duration adjustment, rate speculation and spread trades. CME contracts mirror the **2, 5, 10 and 30-year** tenures. On SGX, **mini-Japanese Government Bond futures** are the popular long-bond contract.

Each US Treasury futures contract has a face value at maturity of **USD 100,000**, except the **2-year and 3-year** contracts at **USD 200,000**. Prices are quoted in points per **USD 2,000** for 2- and 3-year contracts and per **USD 1,000** for all others.

**Profit example.** A fund manager expects Treasury yields to rise. He sells 10 contracts of Jun 2017 5-year Treasury Note futures at 117.245 and buys them back at 116.000:

$$ 10 \times (117.245 - 116.000) \times 1{,}000 = \text{USD } 12{,}450 \text{ profit} $$

The 5-year tick is **¼ of 1/32** of a point, worth:

$$ 0.25 \times 0.03125 \times 0.01 \times 100{,}000 = \text{USD } 7.8125 $$

so the gain is $$(117.245 - 116.000) \times 1{,}000 / 7.8125 = 159.36$$ ticks, and $$10 \times 159.36 \times 7.8125 = \text{USD } 12{,}450$$.

**Loss example.** On Thursday 7 April 2017 a surprise US missile strike on Syrian air bases pushed yields down and bond prices up; the 10-year yield fell to 2.31%, the lowest since the March rate hike when it was 2.6%. A trader reads the June 2017 10-year T-Note futures as having risen only modestly, from 125 8/32 to 125 12/32, and buys 10 contracts at 125 12/32 expecting more buyers. Prices reverse and the contract ends the day at 124 8/32:

$$ 10 \times (124\,\tfrac{8}{32} - 125\,\tfrac{12}{32}) \times 1{,}000 = -\text{USD } 11{,}250 \text{ loss} $$

The 10-year tick is **½ of 1/32**, worth USD 15.625, so the loss is **−72 ticks**, and $$10 \times -72 \times 15.625 = -\text{USD } 11{,}250$$.

### 2.3.2 Currency Futures

Currency futures are contracts to buy or sell a specified amount of one currency against another at a set price and future date. Financial institutions, investment managers, corporations and private investors use them to manage currency risk or to profit from rate movements. They were first introduced at the **Chicago Mercantile Exchange in 1972**, after the fixed exchange-rate system and gold standard were discarded.

Currency futures volume tracks the underlying spot market. The BIS Triennial Survey reported global FX turnover of **USD 5.1 trillion per day** in 2016, **5.5% below** USD 5.4 trillion in 2013 (the source text prints "5.1 billon"; read trillion). Part of the decline reflected lower growth in global trade and capital flows, still below pre-crisis levels.

More significant was a structural shift towards using FX for hedging rather than risk-taking, a consequence of reduced proprietary trading and tighter risk controls. Banks consolidated and cut costs over the decade. The number of dealer banks willing to warehouse risk declined while **non-bank market-makers** gained a stronger foothold as liquidity providers, sometimes bypassing traditional bank intermediaries. Despite the overall decline, trading in most FX derivatives — particularly FX swaps — kept growing, and emerging-market currencies, especially the **renminbi**, gained share. Singapore kept the top spot for FX trading, which supports FX-derivative business here.

#### 2.3.2.1 Types of Foreign Exchange Futures Contracts Offered

Futures activity mirrors demand in the underlying currency market, so major pairs dominate. On the **CME**, currency futures are grouped into majors against the USD, emerging-market currencies against the USD, cross-rates not involving the USD, and **E-Micro** contracts trading at **1/10th** the size of the regular contract. On **Euronext**, trading concentrates on the more active majors — **EUR/USD, GBP/USD and GBP/EUR**.

On **SGX-DT**, Asian currencies trade against the USD, among themselves, and against the non-deliverable forward for the **renminbi (CNY), Indonesian rupiah (IDR), Taiwan dollar (TWD), Indian rupee (INR), Korean won (KRW), Malaysian ringgit (MYR) and Philippine peso (PHP)**. SGX remains one of few venues offering hedging, trading and investment exposure in these currencies, and Singapore's FX derivatives market benefits from demand for emerging Asian currencies as China, Indonesia and India expand.

#### 2.3.2.2 Interest Rate Parity Theory

The theory holds that the forward (futures) premium or discount between two currencies should equal the difference in domestic interest rates for securities of the same maturity, ignoring small transaction costs. Where the relationship is violated, arbitrageurs can earn risk-free profit and their actions force futures and spot rates back into line.

$$ F = S \times \frac{1 + R_c \left(\dfrac{n}{360}\right)}{1 + R_b \left(\dfrac{n}{360}\right)} $$

where $$F$$ is the forward (futures) rate, $$S$$ the spot rate, $$R_b$$ the annualised base-currency rate, $$R_c$$ the annualised counter-currency rate and $$n$$ the number of days.

**Worked example.** Base currency GBP, counter currency USD. Spot GBP/USD = 1.2422; $$R_b$$ = 1-year GBP LIBOR = 0.70444%; $$R_c$$ = 1-year USD LIBOR = 1.79900%.

$$ F = 1.2422 \times \frac{1 + 0.01799 \left(\dfrac{360}{360}\right)}{1 + 0.00704 \left(\dfrac{360}{360}\right)} = 1.2557 $$

So GBP 1 = USD 1.2557, a forward price of GBP/USD 1.2557.

### 2.3.3 Equity Index Futures

Equity index futures replicate the future performance of an underlying equity market index, letting investors capitalise on broad market movements without changing their dollar investment in stocks. An index is a representative basket or portfolio of stocks or commodities; an equity index measures the performance of a selected basket representing the whole market. Indices may be **price-weighted** (DJIA) or **market-capitalisation weighted** (MSCI).

Buying the index raises or lowers exposure to specific markets or sectors and is a cost-effective way to gain equity exposure. Most exchanges list futures on their own indices, while some position themselves regionally or globally. SGX has consolidated its position as a regional platform for futures, options and structured warrants on Asian markets, and offers index futures relevant to managers benchmarked to indices such as MSCI, so they can rebalance rapidly, hedge positions and exploit country-specific opportunities. The most successful launch has been the **SGX FTSE China A50 Futures**, which continues to trade heavily.

SGX equity index futures include **MSCI Singapore, Straits Times Index, FTSE China A50, FTSE China H50, FTSE Malaysia, FTSE Philippines, FTSE Taiwan, FTSE Thailand, Nikkei 225, USD Nikkei 225, Mini Nikkei 225 and Nifty 50**.

#### 2.3.3.1 Differences between Equity Index Futures and Stocks

| Feature | Equity index futures | Stocks |
|---|---|---|
| What is owned | A cash-settled contract on the index | Legal ownership of shares |
| Settlement | Daily mark-to-market; cash settlement at expiry | T+2 settlement; no daily margin |
| Leverage | Margin only | Full consideration, or margin financing |
| Short selling | Direct, without borrowing stock or an uptick rule | Requires stock borrow, with recall and cost risk |
| Income | No dividend entitlement | Dividends and voting rights |

#### 2.3.3.2 Pricing Equity Index Futures

$$ F = S \left[ 1 + r \left(\frac{t}{360}\right) \right] - D $$

where $$S$$ is the spot index, $$r$$ the short-term rate, $$t$$ days to expiry and $$D$$ dividends paid before expiry.

Index futures do not trade precisely at fair value all the time; the difference between futures and spot is the **basis**. Fair value is normally expected to be positive — futures above spot — because under normal conditions financing costs, reflected in rates such as LIBOR or SIBOR, exceed dividend yields. Loose post-2008 monetary policy has at times reversed this.

If futures rally much above fair value, an arbitrageur buys the equity portfolio and sells index futures, trading a basket or subset of constituents or using electronic systems to trade all or nearly all of them. Buying stocks and selling futures bids stocks up or pushes futures down until equilibrium returns.

### 2.3.4 Single Stock Futures

A **Single Stock Futures (SSF)** contract tracks the price of the underlying stock. On SGX the buyer agrees to pay a specified price at a predetermined date and the seller is obligated to deliver the value of the stock at that date; SGX SSFs are **cash settled**, with no physical delivery. Portfolio managers use them to protect against adverse moves and to diversify risk using margin financing. SSFs carry **no shareholder privileges**.

Advantages:

- **a.** Leveraged, based on several thousand shares, so the leverage effect amplifies gains and losses.
- **b.** Lower transaction cost than buying the stock, because the outlay is only the margin.
- **c.** For the same reason, offshore investors bear less currency exposure — they invest only the margin, not the full underlying value.
- **d.** Ease of short selling lets investors participate in and profit from market downturns.
- **e.** Once an exchange admits a contract it must ensure liquidity, transparency, fairness and timeliness in market-making with reasonable bid-offer spreads, and investors must be able to close out, typically electronically. The exchange guarantees clearing-house support from designated market-makers.

The main disadvantage is that SSFs can invite short selling of the stock, reducing underlying prices and causing downward spirals in uncertainty and shocks. The market's ability to absorb increased downward volatility is an important consideration before a new contract is introduced.

### 2.3.5 Commodity Futures

Physical-market storage, transport, quality and delivery-location differences create basis and roll risk. Commodity contracts are grouped as agriculture, energy and metals.

#### 2.3.5.1 Gold and Other Precious Metal Futures

In potential military conflicts involving major powers there is a tendency to **flight to safety**. In early April 2017, tension escalated between the US and Syria–Russia over banned chemical weapons and the US missile response, while US–North Korean nuclear-testing tension also rose. Gold futures moved up **4% to USD 1,290.70/ounce** just before Easter; when tension eased the price retraced.

##### Calculating notional profit for gold futures

On 10 April 2017, with US military tension involving Syria, North Korea and Russia, June gold gained 0.39% on escalating concern. At the start of European trading, Jun 2017 gold futures on ICE traded at **USD 1,259.10/Troy ounce**. A trader expecting escalation bought **100 contracts**, each **100 Troy ounces**. Gold rose to USD 1,288.50/ounce before Good Friday, 13 April.

$$ 100 \times (1{,}288.50 - 1{,}259.10) \times 100 = \text{USD } 294{,}000 $$

Conversely, when interest rates rise, gold and other precious metals come under pressure because they yield no interest or dividend; when perceived risk is low, investors prefer risky assets and safe havens fall. Gold is also increasingly intertwined with **gold ETFs**: according to the World Gold Council the largest growth in gold demand in **2016 (+660%)** came from ETFs.

Beyond financial markets, gold has jewellery demand: **China and India** are the largest sources, and more than half of physical gold trading is estimated to come from Asia. Interruption of precious-metal imports creates underlying downward pressure.

Gold futures on the **CME and ICE** are quoted in **100 troy ounces**. In Singapore the **SGX Gold contract is dormant** and not traded.

#### 2.3.5.2 Base Metal and Ferrous Metal Futures

Demand and prices depend on economic growth, with underlying demand from major traders, miners and manufacturers wanting physical delivery. Base and ferrous metals rose significantly during China's infrastructure expansion, especially **2002–2012**; China's slowdown **2012–2016** amid overcapacity produced a sharp fall. Expected demand from proposed US infrastructure fiscal spending in **2017–2018** lifted prices again.

Steel pricing is not uniform and US–China trade disputes and anti-dumping allegations disrupt price discovery. The US announced **steel and aluminium tariffs** to protect local manufacturers, which widens the difference between US and non-US exchange prices. Steel comes in different types and grades, and SGX steel quotes from China differ from CME quotes featuring US steel.

Iron ore and steel are key SGX contracts. The **London Metal Exchange** is the largest global metal exchange and remains a main venue for iron ore and steel futures, while Chinese exchanges have grown strongly. Singapore is positioned as a key **clearing centre for iron ore** traded elsewhere, especially China.

SGX iron ore and steel contracts:

- **a.** SGX TSI Iron Ore CFR China (62% FE Fines) Index
- **b.** SGX HRC CFR ASEAN Steel
- **c.** SGX Platts Iron Ore CFR China (Lump Premium) Index
- **d.** SGX MB Iron Ore CFR China (58% FE Fines) Index
- **e.** SGX TSI Iron Ore CFR China (58% FE Fines) Index

#### 2.3.5.3 Crude Oil Futures

Crude oil futures remain a focal point for investors because of dramatic price volatility: a high of **USD 155/barrel** just before the Global Financial Crisis, a plunge to **USD 48** in 2009, a rebound above **USD 100** for most of 2010–2013, then new lows of **USD 29.60** in 2015 amid structural change and competition from fracking. Futures may have helped producers lock in higher prices on some occasions, but extended declines offer producers little protection. An **OPEC** agreement to limit supply eventually held crude in a **USD 55–65** range in the later part of 2018, ahead of the Saudi Aramco listing. Crude remains one of the most actively traded instruments.

#### 2.3.5.4 Energy — Natural Gas, Other Refined Products and Coal Futures

The volatility of energy futures is relatively well correlated. Like crude, other traditional energy products — **LNG, jet fuel, gas oil, kerosene, coal** — have been volatile over the decade. For downstream refined products there may be a **lag effect** before the full impact of price changes works through inventory. Coal, though environmentally unattractive, remains a viable substitute in many developing economies.

Singapore is a major petrochemical refining base, and SGX lists futures on diverse petrochemical and refined products from regional players, plus **Indonesian coal** futures.

#### 2.3.5.5 Energy — Electricity Futures

Energy futures have been available in the US for many years. Multiple production sources (LNG, coal, hydroelectricity) across regions, many users (towns, cities, industries), and the need to optimise non-peak hours against fluctuating demand drove the development of electricity futures.

On **SGX** there are monthly and quarterly electricity futures, still relatively new and serving specific needs of Singapore industrial users. The local market is thermal, with **more than 90% dependent on natural gas**. Generating companies offer to sell into the spot market **every half-hour**, matching prevailing demand, but prices fluctuate during tight supply from plant outages or network constraints. Consumers buying directly from the spot market are exposed to those fluctuations. Electricity futures offset expensive electricity for consumers or secure higher proceeds against cheaper off-peak electricity.

#### 2.3.5.6 Agriculture Futures

A wide range of agriculture contracts — **grain, soft commodities, livestock, dairy and forest products** — has existed for decades, driven mainly by the supply and business needs of farmers, producers, wholesale consumers, investors and speculators.

## 2.4 Contract Settlement and Clearing Process and Orders on the SGX

### 2.4.1 Modes of Settlement

A buyer or seller can settle a futures position in three ways.

#### 2.4.1.1 Delivery or Hold to Expiry

Every contract has an expiry date. On that date the buyer accepts delivery of the underlying and the seller liquidates by delivering at the agreed price. Commodity contracts state physical delivery to an approved warehouse; currencies and some financial instruments such as the S&P 500 call for **cash settlement**. Every contract specifies the last trading day before expiry.

Investors must know the expiry dates, because as expiry approaches **liquidity decreases** as traders roll to the next contract month.

#### 2.4.1.2 Offset Position

The simplest and most common route for financial futures. Buying two S&P 500 contracts is offset by selling two; selling two is offset by buying two. To limit overnight risk, many traders exit all positions and are **flat** at the end of each trading day.

#### 2.4.1.3 Roll Position

Rather than closing out, the investor closes the expiring contract and simultaneously opens a position in a later month, maintaining exposure and deferring settlement.

### 2.4.2 Minimum Price Movement for Contracts on SGX-DT — Understanding Tick Sizes

The tick size is three things at once: the minimum movement in the quoted price, the minimum increment between bid and offer, and a dollar amount per contract. Convert between them using the contract multiplier.

### 2.4.3 Listing of Derivatives Contracts on SGX-DT

SGX-DT lists five categories:

| Category | Contracts |
|---|---|
| **FX** | USD/SGD, AUD/USD |
| **Equity indices** | SiMSCI, Nikkei 225 and the wider Asian roster |
| **Interest rates** | Eurodollar, Euroyen LIBOR |
| **Commodities** | PLATTS Singapore Fuel Oil 380cst, SICOM TSR20 Rubber |
| **Dividend indices** | Nikkei Stock Average Dividend Point Index |

### 2.4.4 Derivatives Clearing Process on SGX-DT

**SGX-DC** clears:

- **a.** SGX-DT products;
- **b.** OTC commodity trades; and
- **c.** OTC financial derivatives, through trade registration.

Margin cycles run **three times intraday** — late morning, afternoon and post-end-of-day. Settlement covers variation settlement, option premiums, OTC coupons, price alignment interest and clearing fees. **ICE Clear Singapore** clears IFSG products.

### 2.4.5 Mutual Offset System

Since **1984**, the CME mutual-offset arrangement lets positions opened on one exchange be closed on the other, facilitating global clearing. It applies to specific SGX products — **NK, NU, FEM and FCH** — and is product-specific, not general.

### 2.4.6 Potential Role of Singapore as a Global Clearing Centre

SGX-DC is a **CFTC-designated clearing organisation**, has been assessed for EU equivalence, and **ESMA** recognises SGX-DC and CDP. Combined with the CME mutual-offset links, this positions Singapore as a high-quality global clearing centre for futures and derivatives; as technology changes how transactions are performed, the clearing process must continue to adapt.

## 2.5 Futures Pricing Model

### 2.5.1 Spot Price

The spot price is the current market price of the underlying asset or commodity.

### 2.5.2 Cost of Carry Model

The relationship between futures and spot prices is summarised by **cost of carry**. Carry includes financial costs — interest on bonds, interest on margin accounts, interest on money borrowed to buy a security — and economic costs such as the opportunity cost of taking the initial position. The **net** cost of carry is all costs of holding the equivalent cash position less the returns that position would have generated: financing at prevailing rates, and dividends or bonuses from shares, or the average return of an index in the case of index futures. In futures the investor deposits only a fraction of position value as margin.

The model assumes arbitrage between cash and futures eliminates all pricing imperfections. For simplicity it assumes:

- **a.** the contract is held to maturity, so a fair price can be derived;
- **b.** there are no transaction costs or margin requirements;
- **c.** there are no restrictions on short selling; and
- **d.** investors can borrow and lend at the same rate.

Once arbitrage has removed distortions, the fair futures price is spot plus the net cost of carry from today to expiry:

$$ F_{0,t} = S_0 (1 + C_{0,t}) $$

### 2.5.3 Cash-and-Carry Arbitrage

| Position | Cash-and-carry (futures too high) | Reverse cash-and-carry (futures too low) |
|---|---|---|
| Debt | Borrow to buy the spot asset | Lend the proceeds of a short sale |
| Physical | Buy and hold the spot asset | Short or borrow the spot asset and deliver |
| Futures | Sell futures | Buy futures |

**Forward case.** Gold spot is USD 1,275/oz, carry is 2.25% for the year, and the futures price is USD 1,305.

$$ F_{0,t} = 1{,}275 \times (1 + 0.0225) = 1{,}303.69 $$

Futures at USD 1,305 exceed fair value of USD 1,303.69, so the arbitrage is to sell futures and buy spot. Borrow to buy 100 oz:

$$ 1 \times 1{,}275 \times 100 = \text{USD } 127{,}500 $$

Sell one 100 oz contract at USD 1,305 for USD 130,500. Repay principal plus interest:

$$ 127{,}500 + (0.0225 \times 127{,}500) = \text{USD } 130{,}368.75 $$

Profit:

$$ 130{,}500.00 - 130{,}368.75 = \text{USD } 131.25 $$

— a negligible **0.1%** opportunity. To improve it, the futures price must be higher, the spot lower, and the borrowing cost materially lower.

**Reverse case.** Spot gold is USD 1,285.

$$ F_{0,t} = 1{,}285 \times (1 + 0.0225) = 1{,}313.91 $$

Futures at USD 1,305 are below fair value of USD 1,313.91, so buy futures and short spot. Borrow 100 oz of gold at **1.00%** for a year and sell it at spot for:

$$ 100 \times 1{,}285 = \text{USD } 128{,}500 $$

Lend the proceeds at **2.25%**, earning USD 2,891.25, so after a year:

$$ 128{,}500 + 2{,}891.25 = \text{USD } 131{,}391.25 $$

Buy 100 oz one-year futures at USD 1,305 for USD 130,500 to cover the borrowed gold. Surplus:

$$ 131{,}391.25 - 130{,}500.00 = \text{USD } 891.25 $$

Cost of borrowing the gold:

$$ 128{,}500 \times 0.01 = \text{USD } 1{,}285.00 $$

Overall:

$$ 891.25 - 1{,}285 = -\text{USD } 393.75 \quad (-\mathbf{0.306\%}) $$

So there was **no arbitrage**. To create one, the gold borrowing cost must be much lower or free while the lending rate rises, or the futures price must fall or spot rise.

Arbitrage rarely exists or lasts more than milliseconds: computer-based trading has pushed efficiency past human levels and any differential disappears.

### 2.5.4 Expectancy Model

Futures prices are expected future spot prices. If more traders expect the futures price to rise than to fall, the current futures price is bid up. What matters is not the cash-futures relationship but the relationship between the **expected spot price at expiry** and the futures price. Both the cost-of-carry and expectations models explain part of futures price movement.

## 2.6 Basis in Futures Contracts

The difference between futures and spot is the **basis**.

When markets are in **contango** — typically stable or bullish conditions — the basis is usually positive, with futures above spot because of carrying costs such as financing and storage. In **backwardation** — often bearish or stressed conditions — the basis can be negative, with futures below spot.

Because a contract settles at the cash price on expiry, **futures and spot converge as expiry approaches**.

> **Convention warning.** The official guide states on page 46 that contango gives a *positive* basis with futures above spot, and then on page 47 defines and uses basis as *spot minus futures*, which makes contango's basis negative. The two are the same economic relationship described with opposite signs. This guide uses **basis = spot − futures** throughout, so contango produces a negative basis. State your convention in any answer.

### 2.6.1 Factors Affecting Basis

- **a.** Cost or return of carry.
- **b.** Time to maturity.
- **c.** Yield-curve changes.
- **d.** Relative liquidity of cash and futures markets.
- **e.** Market rates versus administered rates.
- **f.** Expectations of market participants.
- **g.** Coupon or income differences between the hedged asset and the deliverable.

### 2.6.2 Basis, Contango and Backwardation

Basis risk persists for three reasons: the cash and futures markets are not perfectly correlated, the exposure being hedged may not match the deliverable, and the hedge may be closed before expiry, so convergence is incomplete. A short hedger's effective price is the futures price plus the ending basis:

$$ V_t = S_t + (F - F_t) = F + (S_t - F_t) $$

Roll yield arises when a position is rolled from an expiring contract to a later one; under contango the roll costs money, under backwardation it earns.

## 2.7 Swaps

Swaps are customised OTC agreements to exchange cash flows over several periods on a notional amount. Singapore's FX market is heavily swap-based: forex forwards and swaps were **70–75% of FX turnover in 2016–17**, and currency interest-rate swaps **60–66% of FX derivatives**.

### 2.7.1 Interest Rate Swaps

One party pays fixed and receives floating, or the reverse. The notional is normally **not exchanged**; the swap rate or spread and the benchmark reset dates matter.

Plain-vanilla example: USD 100 million, paying 5% fixed against six-month LIBOR. With LIBOR at 4.2% in September 2014, the fixed payer's net receipt is:

$$ 0.5 \times (0.042 - 0.05) \times 100\text{m} = -\text{USD } 0.4\text{m} $$

so Bank B receives USD 2.1m on the fixed leg and pays USD 2.5m floating. With LIBOR at 4.8% in March 2015 the floating leg is USD 2.4m and the net position reverses.

$$ \text{fixed payment} = \text{notional} \times \text{swap rate} \times \frac{\text{days}}{360} $$

The **swap spread** is the swap rate less the yield on the government bond of matching maturity. The **LIBOR swap curve** plots swap rates by tenor. A party with an existing swap can enter an **offsetting swap** to reduce or cancel the exposure.

### 2.7.2 FX Swaps

An FX swap exchanges currencies on a near leg and reverses the exchange on a far leg, managing short-term currency funding. The near-leg rate is the spot rate and the far leg is set by the swap points for the value dates. Example: a firm needing EUR 5 million for six months sells USD for EUR spot and agrees to reverse the exchange in six months at the forward rate, locking the funding cost.

### 2.7.3 Currency Swaps

A currency swap exchanges **principal and interest** in two currencies. A Singapore bank needing USD swaps SGD principal with a US bank needing SGD, each paying the other's interest, transforming both the currency and the interest exposure for the life of the deal.

### 2.7.4 Commodity Swaps

A fixed price is exchanged for a floating commodity price, letting a producer or user lock or transform price exposure without repeatedly rolling futures. SGX lists standardised commodity swaps.

### 2.7.5 Equity Swaps

One party receives the **total return** of an equity or index and pays a fixed or floating rate, creating synthetic equity exposure without ownership.

Four-period example on a notional of USD 200 million against the S&P 500, where the manager pays the index total return plus 2% and receives 4% fixed:

| Period | Index level | Index return | Swap cash flow (USD m) | Portfolio value (USD m) | Reported return |
|---|---|---|---|---|---|
| 31 Jul 2017 | 2,470.20 | — | — | 400.00 | — |
| Period 1 | 2,569.00 | +4% | −2.00 | 414.00 | +3.50% |
| Period 2 | 2,363.48 | −8% | +10.00 | 390.88 | −5.58% |
| Period 3 | 2,623.47 | +11% | −9.00 | 424.88 | +8.70% |
| Period 4 | 2,754.64 | +5% | −3.00 | 443.12 | +4.28% |

The manager's realised return each period is the portfolio return plus the swap cash flow, which is why a falling index produces a positive swap flow.

### 2.7.6 Credit Default Swaps

A protection buyer pays a spread, usually in basis points quarterly, to a protection seller. On a defined **credit event** the seller pays under cash or physical settlement. Typical notionals are **USD 10–20 million**.

Premium arithmetic: at **160bp** on **USD 20 million**, quarterly:

$$ 160\text{bp} = 1.60\% \;\Rightarrow\; 20\text{m} \times 1.60\% = \text{USD } 320{,}000 \text{ p.a.} $$

so each quarter is one quarter of the annual amount, **USD 80,000** — equivalently 40bp of notional per quarter.

#### 2.7.6.1 CDS Spreads

The CDS "spread" is not the same as a benchmark spread; it is the premium for credit protection on the reference entity. Spreads widen with credit deterioration — the PIIGS (Portugal, Ireland, Italy, Greece, Spain) episode is the standard example.

#### 2.7.6.2 Credit Event

The ISDA-defined events are bankruptcy, failure to pay, restructuring, obligation acceleration, obligation default, repudiation/moratorium and (in some definitions) government intervention. Debt restructuring is the most negotiated of these.

#### 2.7.6.3 Cash Settlement

The protection seller pays the difference between par and the market price of the deliverable obligation after the event.

#### 2.7.6.4 Physical Settlement

The protection seller pays par and receives the deliverable obligation, so the buyer delivers the defaulted bond and receives face value.

Naked CDS creates large synthetic credit exposure. The AIG episode during the Global Financial Crisis showed how leverage, opacity and counterparty concentration amplify credit risk: AIG had sold protection far in excess of its capital and required a public rescue.

## 2.8 Summary

Futures are standardised, margined, daily-settled and cleared; forwards and swaps are usually customised OTC. Pricing is driven by carry and parity, but basis, liquidity, margin and credit constraints matter. Swaps exchange exposures rather than principal ownership and are powerful but documentation- and counterparty-dependent.

## Exam cues

- **Notional** = price × multiplier. **Margin** = initial margin % × notional. Learn the Nikkei example: 22,500 × JPY 500 = JPY 11,250,000; 6.5% = JPY 731,250; a 7% index rise is a 107% return on margin.
- **Short-rate quote** $$P = 100(1-R)$$, so rates up → price down. Long-rate pricing chains the two periods to the whole period and solves for $$r_2$$ (the 45/135/90-day example gives **2.00%**).
- **US Treasury:** face **USD 100,000** except 2- and 3-year at **USD 200,000**; 5-year tick **USD 7.8125** (¼ of 1/32), 10-year tick **USD 15.625** (½ of 1/32).
- **Interest-rate parity:** $$F = S \times (1+R_c n/360)/(1+R_b n/360)$$; the GBP/USD example gives **1.2557**.
- **Arbitrage:** cash-and-carry when futures is **too high**, reverse when **too low**. The reverse gold case loses **USD 393.75 (−0.306%)** once gold borrowing at 1% is counted.
- **Basis = spot − futures.** Contango puts futures above spot, so under this definition contango gives a **negative** basis. Some texts define basis the other way round; state your convention before using it. Convergence forces basis to zero at expiry.
- **CDS:** 160bp on USD 20m is USD 80,000 a quarter, USD 320,000 a year.
- **Trap:** a futures contract retains notional value at expiry; an out-of-the-money option or warrant goes to zero. And the notional is never exchanged in an interest-rate swap.
