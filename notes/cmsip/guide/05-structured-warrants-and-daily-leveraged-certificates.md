---
id: '5'
kind: 'chapter'
num: 5
part: null
title: 'Structured Warrants and Daily Leveraged Certificates'
order: 5
slug: 'chapter-5-structured-warrants-and-daily-leveraged-certificates'
---

# Structured Warrants and Daily Leveraged Certificates

## 5.1 Introduction

Structured warrants and daily leveraged certificates (DLCs) are exchange-traded SIPs. They give leveraged exposure with a smaller cash outlay, but leverage magnifies losses. Under Singapore’s SIP/CAR framework, the representative must consider the client’s knowledge, experience, financial situation, risk tolerance, objectives, horizon, liquidity and ability to understand the product, and document the customer-account review, education/work/investment experience.

## 5.2 Structured warrants

A structured warrant is issued by a third-party financial institution and references a stock, index, fund, commodity, currency or basket. It is normally shorter-dated than a company warrant; SGX warrants are generally European style unless the product terms say otherwise. A call warrant gives leveraged upside exposure; a put warrant gives leveraged downside exposure. A zero-strike warrant is economically close to a synthetic share exposure because its strike is zero.

Cash settlement per warrant is:

- call: $$\dfrac{S - X}{n}$$ if positive;
- put: $$\dfrac{X - S}{n}$$ if positive;

where $$n$$ is the conversion ratio (number of warrants per one underlying unit). Physical settlement, if offered, follows the product terms.

Compared with company-issued warrants, structured warrants are issued by an unrelated financial institution and normally do not dilute the underlying company. Both can expire worthless and provide no ordinary voting/dividend rights.

Benefits include leverage, limited loss to the purchase price (subject to issuer failure), no initial margin in the normal exchange-traded purchase, transparent exchange trading, and access to multiple markets. Risks include time decay, implied-volatility changes, spread/market-maker liquidity, issuer credit, currency and corporate actions.

## 5.3 Key terms

- **Conversion ratio ($$n$$):** warrants needed for one underlying unit.
- **Strike/exercise price ($$X$$):** price at which the underlying is bought/sold.
- **Expiry:** final life/exercise date.
- **Issue/market price:** amount paid for the warrant.
- **Settlement:** physical or cash.
- **Gearing:** underlying price divided by $$\text{warrant price} \times n$$.
- **Effective gearing:** $$\text{delta} \times \text{gearing}$$; a better approximation of short-term percentage sensitivity than gearing alone.

The SGX code normally identifies underlying, issuer, call/put or style and maturity. Always confirm the current term sheet rather than inferring from a ticker.

## 5.4 Factors affecting warrant value

Life to expiry, underlying price, strike, implied volatility, dividends, interest rates, conversion ratio, liquidity, issuer credit and gearing affect price. A call rises with underlying and volatility and generally falls with dividends; a put behaves in the opposite direction for spot/dividends. Time value normally decays faster close to expiry and is not linear.

Warrant delta is $$n \times \dfrac{\text{change in warrant price}}{\text{change in underlying}}$$. Implied volatility is backed out from the observed price; it is not a guaranteed prediction.

## 5.5 Trading structured warrants

Calls and puts may be bought to express bullish/bearish views, hedge a portfolio or construct spreads. The investor pays the warrant price up front and normally has no daily margin call like a futures trader, but may lose the whole premium. Gearing makes the percentage movement in the warrant much larger than in the underlying. Effective gearing changes with moneyness and expiry.

## 5.6 Valuation

Intrinsic value:

- call: $$\max\left[0,\ (S - X)/n\right]$$;
- put: $$\max\left[0,\ (X - S)/n\right]$$.

Conversion price:

- call: $$X + n \times WP$$;
- put: $$X - n \times WP$$.

The warrant premium is its price above intrinsic value. The formula sheet also expresses dollar premium as:

- call: $$nWP + X - S$$;
- put: $$nWP - X + S$$.

Premium percentage may be calculated against the relevant conversion value; state the convention used. A call with $$X = \text{\$}1$$, $$WP = \text{\$}1.20$$, $$n = 1$$ has conversion price \$2.20. A warrant at \$0.40 on a \$2.40 share has 6× gearing when $$n = 1$$.

## 5.7 Roles in the market

The issuer designs, funds and bears issuer risk. A designated market maker (DMM) supplies quotes and liquidity subject to product/exchange conditions, but may not quote continuously or in unlimited size in every market condition. Investors should not treat a DMM quote as a guarantee of an exit price during a suspension, extreme movement, corporate action or market disruption.

## 5.8 Designated market makers

The DMM normally provides bid/offer quotes and minimum quantities under the exchange’s rules. Quote obligations can be suspended or adjusted for events such as underlying-market closure, price limits, trading halt, technical failure, abnormal volatility, corporate actions or insufficient information. The spread and quote size are part of the investor’s liquidity risk.

## 5.9 Settlement

Cash-settled warrants pay the in-the-money amount according to the final settlement reference. SGX Asian-style expiry may use a five-day average or other stated observation method; the last trading day may precede expiry. Physical settlement requires delivery/payment under the contract. Do not assume the final expiry spot is one closing print.

## 5.10 Corporate actions

Dividends, special dividends, buybacks/cancellations, rights, bonus issues and splits can adjust strike and conversion ratio so that the product remains economically comparable. The formula sheet gives:

- dividend adjustment factor $$\dfrac{P - SD - ND}{P - ND}$$;
- buyback/cancellation factors $$\dfrac{A}{B}$$ and $$\dfrac{P - CD}{P}$$;
- split factor $$\dfrac{A}{B}$$;

with the new strike = old strike × factors and new conversion ratio = old conversion ratio × factors. Read the issuer’s adjustment announcement.

## 5.11 Exotic warrants

Exotic warrants include index warrants, currency-translated warrants, yield-enhanced/discount/capped warrants, basket warrants, commodity warrants and FX warrants. A discount/capped certificate lets the investor buy exposure at a discount but caps upside; basket/index products add correlation, composition and rebalancing risk; translated warrants add FX exposure between settlement and underlying currencies.

## 5.12 Daily leveraged certificates (DLCs)

DLCs are exchange-traded, short-term, high-risk products designed to deliver a daily multiple of an underlying index or asset’s movement. Products include long and short certificates, commonly **3× or 5×**, with product terms allowing leverage up to **7×**; the current term sheet controls the exact multiple. They are SGD-denominated, commonly T+2, with a maximum tenor up to **three years**, and fees may include brokerage, clearing and management fees.

Daily reset/compounding means a DLC is not a simple multiple of the total return over a long period. In a volatile or mean-reverting market, repeated daily losses can erode capital even if the index ends near its starting level. It is generally unsuitable as a buy-and-hold investment.

The airbag feature may trigger when the underlying moves adversely by a stated threshold — **20% for a 3× example and 10% for a 5× example** — followed by a **30-minute suspension** and an observed reset level. The exact term sheet controls. Expiry or a zero value can terminate the investment. A DMM may quote subject to conditions.

Compared with CFDs, DLCs are exchange traded and have no OTC financing/margin account in the same form, but reset/airbag/issuer and liquidity features matter. Compared with warrants, DLCs have daily leverage targeting and usually closer-to-one directional exposure before the reset; compared with leveraged ETFs, their structure, issuer and daily reset terms differ.

## 5.13 Summary

Warrants embed options issued by a bank; price equals intrinsic plus time value and is shaped by conversion ratio, gearing, volatility, dividends, rates, time, liquidity and issuer credit. DLCs amplify daily returns and reset, making path dependency and compounding central risks. SIP/CAR suitability and disclosure are part of the product analysis.
