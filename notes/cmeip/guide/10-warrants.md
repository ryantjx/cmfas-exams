---
id: '10'
kind: 'chapter'
num: 10
part: null
title: 'Warrants'
order: 10
slug: 'chapter-10-warrants'
---

# Chapter 10 — Warrants

Warrants are the smallest chapter in the syllabus but one of the most calculation-heavy per page. This chapter covers what a warrant is, how company warrants differ from structured warrants, and the four valuation measures the examination tests: intrinsic value, conversion price, warrant premium and gearing ratio.

## Learning Objectives

The candidate should be able to:

- Describe the features of stock warrants.
- Explain the valuation of warrants using intrinsic value, conversion price and warrant premium.
- Describe the gearing ratio in the context of warrant pricing.
- Understand the determinants of the minimum and maximum values of warrants.
- Illustrate how the warrant premium is influenced by the underlying stock price, the life of the warrant, exercise price, price volatility of the underlying stock, dividend on the underlying stock, leverage, interest rates and size of the warrant issue.

## 10.1 Definition and Terminology

### 10.1.1 Definition of Warrants

A **warrant** is a derivative instrument giving the holder (buyer) the right, but **not the obligation**, to buy or sell a specified number of securities — usually the issuer's common share — at a **fixed price** (the exercise or strike price) within a **specified time period**.

Warrants issued by companies trade on the **Singapore Exchange Securities Trading Ltd (SGX-ST)** platform and are known as **company warrants**. They may be considered **long-dated equity call options**: while call options expire within a few months, warrants typically have maturities of **a few years**.

Warrants are generally issued by corporations as a **sweetener**, attached to an offering of bonds or rights issues. This lets the issuer obtain financing at a **lower interest rate**, reducing its financing cost. Warrants can be **detached** from the host security and traded separately. Because they are issued as an incentive, there is **no price paid per se** for the warrant by the buyer of the host security.

When warrants are exercised, **new shares are issued**, increasing shares outstanding and **diluting** the issuer's earnings among shareholders. This differs from equity call options, which cause **no dilution** because no new shares are issued on exercise.

### 10.1.2 Company Warrants versus Structured Warrants

Two types of warrant are available on SGX.

**Company warrant.** Issued by companies to their shareholders. Maturity is usually measured in **years** from the issue date. If exercised, the company **issues new shares**, so the number of shares in the market increases.

**Structured warrant.** Issued by a **bank, financial institution or other investment entity** — usually a third-party issuer, not the underlying company. The issuer is effectively selling the holder an option to buy or sell the underlying company's shares at a predetermined price at a later date. The **underlying company does not endorse or guarantee** such warrants.

The terminology for structured warrants is more complex. The example **CapitalaMBeCW181009 (COWW)**, issued by Macquarie Bank, decomposes as:

| Term or code | Attribute | Detail |
|---|---|---|
| **Capitala** | Underlying asset (security) | CapitaLand Limited shares |
| **MB** | Issuer | Macquarie Bank Limited |
| **e** | Exercise style | **European** style warrant |
| **CW** | Type of warrant | **Call Warrant** (**PW** represents a Put Warrant) |
| **181009** | Expiry date (YYMMDD) | Expires **9 October 2018** |
| **COWW** | Warrant code or symbol | A unique 4-digit identification code ending with the letter **"W"**, assigned by SGX |

| Company-issued warrants | Structured warrants |
|---|---|
| Issued by the company on its **own shares** | Issued by a **third party** such as a financial institution |
| **Less** liquidity | **More** liquidity |
| **One direction only** — call warrant | **Both call and put** warrants can be issued |
| Usually **one** exercise price | Can have warrants on the **same underlying** with **different exercise prices** |
| Maturity typically measured in **years** | Shorter-term maturity, usually **6–12 months** |
| **New shares issued** upon exercise | **No new shares** issued upon exercise |

### 10.1.3 Basic Features of Warrants

- **Underlying security** — the security that can be purchased on conversion of the warrant.
- **Exercise price** — the price at which the holder can buy the underlying security. Typically, when warrants are issued, the exercise price is set **above** the prevailing share price.
- **Conversion ratio** — the number of warrants required for conversion to **one** share.
- **Expiration date** — the last date a warrant can be exercised.

When warrants are **not** converted into the underlying shares, holders **do not receive dividends**.

## 10.2 Warrant Valuation

The worked example throughout is **Duty Free International Limited (DF Int'l)**. One DF Int'l warrant converts into **one** DF Int'l share by paying an exercise price of **$0.430**. On the date the warrants were listed (**18 May 2017**), the stock traded at **$0.38**. By **17 January 2018**, the share price had fallen to **$0.26** and the warrants traded at **$0.030**.

### 10.2.1 Intrinsic Value

When the share price is **greater** than the exercise price, the warrant is **in-the-money** and intrinsic value is the difference between the current share price and the exercise price:

$$\text{Intrinsic Value} = \frac{SP - EP}{n}$$

where $$SP$$ is the share price, $$EP$$ the exercise price, and $$n$$ the conversion ratio.

When the share price is **below** the exercise price, the warrant is **out-of-the-money** and intrinsic value is **zero**.

Since issuance, DF Int'l's share price has remained below the **$0.430** exercise price, so intrinsic value is **zero** because the difference is negative.

**Worked example.** If the share price rises to **$0.48**, the warrant is in-the-money and intrinsic value is:

$$\frac{0.480 - 0.430}{1} = \$0.05$$

### 10.2.2 Conversion Price

The **total price** the investor must pay to convert warrants into one underlying share:

$$\text{Conversion price} = n \times WP + EP$$

where $$WP$$ is the warrant price. With a warrant price of **$0.03**:

$$\text{Conversion price} = 0.030 + 0.430 = \$0.46$$

### 10.2.3 Warrant Price and Warrant Premium

The **warrant premium** is the additional amount spent by purchasing warrants and paying the exercise price to convert to one share, as opposed to buying the share outright in the market. The term "premium" here does **not** carry the same meaning as in conventional options, where the premium is the option price.

$$\text{Warrant premium (\$)} = n \times WP + EP - SP$$

In percentage terms:

$$\text{Warrant Premium (\%)} = \frac{n \times WP + EP - SP}{SP} \times 100$$

**Worked example — two scenarios.**

| | Scenario 1 (17 January 2018) | Scenario 2 (today) |
|---|---|---|
| Underlying stock price | $0.26 | $0.480 |
| Intrinsic value | **Zero** per warrant | (0.480 − 0.430)/1 = **$0.05** per warrant |
| Warrant price | $0.03 per warrant | **$0.08** per warrant (assumed price rise) |
| **Warrant premium ($)** | 0.030 + 0.430 − 0.26 = **$0.20** | 0.080 + 0.430 − 0.480 = **$0.030** |
| **Warrant premium (%)** | 0.20 / 0.26 × 100 = **76.92%** | 0.030 / 0.480 × 100 = **6.25%** |

**Leverage.** Investors are interested in warrants mainly because of the **leverage effect**: the potential for greater percentage gains and losses than the underlying share for a given change in the underlying's price. Comparing the two scenarios, the DF Int'l share price rose **85%** from $0.26 to $0.480, but the warrant price rose **167%** from $0.03 to $0.08.

### 10.2.4 Gearing Ratio

The **gearing ratio** compares the price of warrants needed to convert to one share relative to the share price at a point in time. Gearing gives investors the ability to participate in the underlying share's performance at a **lower price**.

$$\text{Gearing ratio} = \frac{SP}{n \times WP} = \frac{0.265}{0.030} = 8.8x \text{ (approximately)}$$

### 10.2.5 Minimum Value and Maximum Value

Warrants should trade within well-specified price bounds in an **arbitrage-free** market.

For a warrant with a conversion ratio of **1**:

- The **maximum value** is the **underlying share price**. Most warrant prices do not trade at their maximum, and prices fall as warrants approach expiration.
- The **minimum value** is the **intrinsic value**:

$$\text{Minimum value} = SP - EP \text{ if } SP > EP; \qquad = 0 \text{ if } SP \le EP$$

In the DF Int'l example, with a share price of **$0.26** and exercise price of **$0.43**, the share price is below the exercise price and the warrant is **out-of-the-money**. If the share price rises to **$0.48**, the warrant is **in-the-money**. If the share price **equals** the exercise price, the warrant trades **at-the-money**.

**Reading the price bounds.** When the share price is below the exercise price, the minimum value is **zero**, represented by the horizontal line. As the share price rises above the exercise price, the minimum price becomes positive and rises.

As the underlying share price increases beyond a point, the **premium of the warrant price over intrinsic value decreases**, because the leverage potential declines — a given share price increase becomes an increasingly smaller percentage of the share price.

The line representing the **maximum price** is at a **45-degree angle** to the x-axis, meaning the maximum price of a warrant equals its underlying share price.

## 10.3 Factors Affecting the Price of a Company Warrant

Company warrants are typically attached to bonds or rights issues as a sweetener but can be detached and traded independently. Once detached, the price is directly influenced by eight factors.

**a. Underlying share price.** Warrants are affected by the underlying share price. Unlike structured warrants, which may be call or put, **company warrants are all call warrants**, so they are worth **more** if the underlying share price rises.

**b. Life of the warrant.** Other things equal, the **longer** before expiry, the **greater** the warrant price. An out-of-the-money warrant may become attractive later as the share price appreciates. As the life shortens, the warrant **loses its speculative value**. On the day of expiration, warrants are worth their **intrinsic value**, after which they are **worthless**.

**c. Exercise price.** The **lower** the exercise price, the **greater** the warrant price. The ability to convert by paying a lower exercise price increases intrinsic value and hence the warrant's price.

**d. Price volatility of the underlying share.** The **more volatile** the underlying share, the **higher** the warrant price, because warrants benefit from price upside but limit price downside. Volatility can change over time.

**e. Dividend on the underlying share.** Because warrant holders are **not entitled to dividends**, the declaration of dividends **reduces** the call warrant's price slightly, since call warrants "lose out".

**f. Leverage.** Warrants with **greater leverage** opportunities command **higher** prices.

**g. Interest rates.** The **higher** the interest rate, the **higher** the call warrant price, because of interest savings from the lower capital needed to buy warrants compared with an equivalent long stock position. For completeness, the higher the interest rate, the **lower** the **put** warrant price, because more interest must be paid to buy warrants whereas an equivalent short stock position gains more interest on the short-sale proceeds.

**h. Size of warrant issue.** The more warrants outstanding, the larger the potential **earnings dilution** of existing shares. If the warrants were deep in-the-money, conversion would increase shares outstanding and reduce the value of each share. There is therefore a **negative** relation between the size of the warrant issue and the warrant price.

| Factor | Effect on warrant price |
|---|---|
| Remaining life of warrant ↑ | **↑** |
| Exercise price ↑ | **↓** |
| Underlying share price ↑ | **↑** |
| Volatility ↑ | **↑** |
| Dividend expectations ↑ | **↓** |
| Leverage opportunities ↑ | **↑** |
| Interest rates ↑ | **↑** |
| Issue size of warrant ↑ | **↓** |

## 10.4 Summary

- Company warrants are **call** warrants issued only by the company. Both call and put structured warrants are issued by a third party, usually a bank. Company warrants are settled by **delivery of shares**; structured warrants are **cash-settled**, with no delivery of shares.
- A company warrant gives the investor an option to buy a stated number of common shares at a specified price within a specified period. Unlike common shares, warrants **expire**, and warrant holders are **not entitled to dividends**.
- Beyond the fundamental value of the underlying share, the warrant investor must consider **intrinsic value, warrant premium, gearing ratio and expiration date**.
- The **maximum value** of a warrant is the underlying share price. The **minimum value** is the intrinsic value — zero or the difference between the share price and exercise price, whichever is larger.
- The price investors will pay depends on the underlying share price, the life of the warrant, the exercise price, the price volatility of the underlying share, dividend expectations, leverage opportunity, the interest rate level, and the size of the warrant issue.

## Exam cues

- **A warrant is a right, not an obligation**, to buy or sell at a fixed price within a specified period. Company warrants are **long-dated equity call options** — maturities of **years**, not months.
- **Warrants are issued as a sweetener** on bonds or rights issues, letting the issuer finance at a **lower interest rate**. There is **no price paid per se** by the buyer of the host security.
- **Exercise dilutes earnings** because **new shares are issued** — unlike equity call options, which cause no dilution.
- **Company vs structured warrants:** company = own shares, less liquid, **call only**, one exercise price, **years**, **new shares issued**. Structured = third party, more liquid, **call and put**, multiple exercise prices on the same underlying, **6–12 months**, **no new shares**.
- **Structured warrant code decomposition:** CapitalaMBeCW181009 = underlying **CapitaLand**, issuer **Macquarie Bank**, **e** = European style, **CW** = call warrant (**PW** = put), **181009** = expiry **9 October 2018**, **COWW** = SGX code ending in **W**.
- **Four basic features:** underlying security, exercise price (set **above** the prevailing share price at issue), conversion ratio (warrants per **one** share), expiration date.
- **Warrant holders receive no dividends.**
- **Intrinsic value** $$= (SP - EP)/n$$ when in-the-money; **zero** when out-of-the-money. DF Int'l at $0.48 with EP $0.43 and n = 1 → **$0.05**.
- **Conversion price** $$= n \times WP + EP$$. DF Int'l: 0.030 + 0.430 = **$0.46**.
- **Warrant premium ($)** $$= n \times WP + EP - SP$$; **premium (%)** divides by $$SP$$. Scenario 1: **$0.20 / 76.92%**. Scenario 2: **$0.030 / 6.25%**.
- **Gearing ratio** $$= SP/(n \times WP)$$. DF Int'l: 0.265/0.030 = **8.8x**.
- **Leverage worked example:** share price rose **85%** ($0.26 → $0.480) while the warrant rose **167%** ($0.03 → $0.08).
- **Maximum value = underlying share price** (the 45-degree line). **Minimum value = intrinsic value** (zero or SP − EP).
- **Premium over intrinsic value falls** as the share price rises well above the exercise price, because leverage potential declines.
- **Eight price factors:** underlying share price ↑ → price ↑; life ↑ → ↑; exercise price ↑ → ↓; volatility ↑ → ↑; dividends ↑ → ↓; leverage ↑ → ↑; interest rates ↑ → ↑; issue size ↑ → ↓.
- **Interest rates raise call warrant prices** (interest saved on the smaller capital outlay) but **lower put warrant prices**.
- **Issue size has a negative relation** to warrant price because of potential dilution.
- **On expiry day** a warrant is worth its intrinsic value; afterwards it is **worthless**.
- **Trap:** the "premium" in **warrant premium** is not the option price — it is the extra cost of the warrant route versus buying the share outright.
- **Trap:** company warrants are **call only**. Only structured warrants can be puts.
- **Trap:** a warrant's **maximum** value is the share price, not the intrinsic value — the intrinsic value is the **minimum**.
