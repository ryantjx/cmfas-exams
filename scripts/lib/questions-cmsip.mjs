/**
 * CM-SIP extension questions.
 *
 * Emitted by `scripts/append-questions.mjs` in the `**N. [Type]** stem / a. … /
 * <details>…` shape this bank uses. Every calculation is worked in the rationale
 * and the correct value is present in the option list.
 *
 * Shape: { c, t, q, o: [4], a: 'b' | 'a,c', r }
 *   c = chapter key as the parser derives it: '1'..'12' or 'appendix-A'..'appendix-G'
 *   t = Single choice | Multiple response | Calculation | Scenario
 *   a = one letter, or several comma-separated for multiple response
 */

export const CMSIP = [
  // ------------------------------------------------------------------ Chapter 1
  {
    c: '1', t: 'Single choice',
    q: 'A derivatives contract discharges its obligation by a payment of the difference rather than by delivering the underlying. Which term describes it?',
    o: ['Cash-settled', 'Physically settled', 'Fully collateralised', 'Freely assignable'],
    a: 'a',
    r: 'Cash settlement pays the value of the position; physical settlement transfers the underlying itself.',
  },
  {
    c: '1', t: 'Multiple response',
    q: 'Which of the following are functions of a central clearing house?',
    o: ['Interposing itself as central counterparty to each trade', 'Mutualising default risk through a default fund', 'Guaranteeing that every cleared trade is profitable', 'Collecting margin from its clearing members'],
    a: 'a,b,d',
    r: 'A clearing house novates the trade, mutualises default risk and collects margin. It cannot guarantee profitability, because prices still move against positions after clearing.',
  },
  {
    c: '1', t: 'Single choice',
    q: 'Which statement best distinguishes an exchange-traded derivative from an OTC derivative?',
    o: ['Exchange-traded contracts are standardised and centrally cleared; OTC contracts are negotiated bilaterally', 'OTC contracts are always clearer than exchange-traded contracts', 'Exchange-traded contracts carry no risk of any kind', 'Only OTC contracts require the posting of margin'],
    a: 'a',
    r: 'Standardisation plus central clearing define the exchange-traded market. Exchange-traded contracts still carry clearing-house exposure, and OTC trades may be cleared voluntarily.',
  },
  {
    c: '1', t: 'Single choice',
    q: 'A company buys a put option over a commodity that it produces and holds as inventory. The purpose of the trade is best described as:',
    o: ['Speculating on implied volatility', 'Hedging a long physical position', 'Arbitraging the futures curve', 'Creating a synthetic bond position'],
    a: 'b',
    r: 'A producer holding the physical commodity is long the underlying, so a put protects the value of that inventory against a price fall.',
  },
  {
    c: '1', t: 'Multiple response',
    q: 'Which risks are present in an OTC derivative and absent or reduced in an exchange-traded equivalent?',
    o: ['Bilateral counterparty credit risk on the other party', 'Documentation and legal-enforceability risk', 'Price risk on the underlying asset', 'Liquidity risk from the absence of a central order book'],
    a: 'a,b,d',
    r: 'Price risk exists in both markets. The OTC market adds bilateral credit exposure and documentation risk, and often offers poorer liquidity.',
  },
  {
    c: '1', t: 'Calculation',
    q: 'An underlying is quoted at 100. A derivative on it has a delta of 0.6. Approximately how much does the derivative price change if the underlying moves to 101?',
    o: ['0.006', '0.06', '0.60', '1.60'],
    a: 'c',
    r: 'Delta is the change in the derivative price per one-unit change in the underlying, so $$0.6 \\times 1 = 0.60$$.',
  },
  {
    c: '1', t: 'Single choice',
    q: 'Which statement about a forward contract is correct?',
    o: ['It is marked to market daily through a clearing house', 'It is a private agreement with settlement deferred to a future date', 'It can always be closed out on an exchange', 'It needs no credit assessment of the counterparty'],
    a: 'b',
    r: 'A forward is bilateral and deferred. It is not cleared and not exchange-tradable, so the counterparty must be assessed for credit.',
  },

  // ------------------------------------------------------------------ Chapter 2
  {
    c: '2', t: 'Calculation',
    q: 'A share trades at SGD 10.00. The six-month risk-free rate is 2% per annum, continuously compounded, and the share pays no dividend. What is the six-month forward price?',
    o: ['SGD 9.90', 'SGD 10.10', 'SGD 10.20', 'SGD 10.40'],
    a: 'b',
    r: '$$F = Se^{rT} = 10.00 \\times e^{0.02 \\times 0.5} \\approx 10.10$$.',
  },
  {
    c: '2', t: 'Calculation',
    q: 'A share trades at SGD 20.00 and will pay a dividend of SGD 0.50 in three months. The risk-free rate is 3% per annum. What is the fair three-month forward price, to the nearest cent?',
    o: ['SGD 19.65', 'SGD 19.85', 'SGD 20.15', 'SGD 20.65'],
    a: 'a',
    r: '$$F = (S - PV(D))e^{rT} = (20.00 - 0.50)e^{0.03 \\times 0.25} \\approx 19.65$$. The dividend lowers the forward price, since the forward holder does not receive it.',
  },
  {
    c: '2', t: 'Single choice',
    q: 'The cost-of-carry model implies that the futures price exceeds the spot price when:',
    o: ['The convenience yield exceeds the financing cost', 'The financing and storage cost exceeds the income from holding the asset', 'The underlying is in permanent backwardation', 'Storage costs are negative'],
    a: 'b',
    r: 'Contango, an upward-sloping curve, arises when the carry costs of financing and storage exceed the dividend or convenience yield.',
  },
  {
    c: '2', t: 'Multiple response',
    q: 'Which factors cause the futures price of a physical commodity to depart from the pure cost-of-carry value?',
    o: ['Storage and insurance costs', 'A convenience yield from holding the physical', 'The credit rating of the clearing member', 'The level of interest rates'],
    a: 'a,b,d',
    r: 'Storage, convenience yield and financing all enter the carry relationship. A clearing member\u2019s credit rating affects its margin, not the futures price.',
  },
  {
    c: '2', t: 'Single choice',
    q: 'In a plain vanilla interest rate swap, the party described as the fixed-rate payer is:',
    o: ['Paying fixed and receiving floating', 'Paying floating and receiving fixed', 'Long a fixed-rate bond and long a floating-rate note', 'Paying fixed with no reference to a notional principal'],
    a: 'a',
    r: 'The fixed-rate payer pays the fixed leg and receives the floating leg. Economically this is short a fixed-rate bond and long a floating-rate note.',
  },
  {
    c: '2', t: 'Calculation',
    q: 'An interest rate swap has a notional of SGD 50 million. The fixed rate is 3.0% and the floating rate fixes at 2.6% for the year. What is the net payment made by the fixed-rate payer?',
    o: ['SGD 150,000', 'SGD 200,000', 'SGD 1,300,000', 'SGD 1,500,000'],
    a: 'b',
    r: '$$50{,}000{,}000 \\times (3.0\\% - 2.6\\%) = 200{,}000$$. The fixed payer pays because fixed exceeds floating.',
  },
  {
    c: '2', t: 'Multiple response',
    q: 'Which statements about a cross-currency swap are correct?',
    o: ['Principal amounts are exchanged at inception and re-exchanged at maturity', 'Interest is paid in each of the two currencies', 'Only the interest differential is ever exchanged', 'It can change the currency exposure of an existing borrowing'],
    a: 'a,b,d',
    r: 'A currency swap exchanges principal at both ends and pays interest in both currencies, so it can transform a borrowing from one currency into another. Exchanging only the differential describes an interest rate swap.',
  },
  {
    c: '2', t: 'Single choice',
    q: 'A non-deliverable forward differs from a deliverable forward because an NDF:',
    o: ['Has no fixing date at all', 'Cash-settles the difference against a published fixing, with no delivery of the restricted currency', 'Is always traded on an exchange', 'Carries no counterparty risk'],
    a: 'b',
    r: 'An NDF settles the difference between the contracted rate and a published fixing, which avoids any need to deliver a non-convertible currency.',
  },
  {
    c: '2', t: 'Calculation',
    q: 'An NDF on USD 5 million is struck at 7.5000 for USD/SGD. The fixing prints at 7.4500. Which party settles, and how much?',
    o: ['The party buying USD at 7.5000 receives SGD 250,000', 'The party buying USD at 7.5000 pays SGD 250,000', 'The party buying USD at 7.5000 receives SGD 2,500,000', 'No settlement occurs because the difference is too small'],
    a: 'b',
    r: 'Buying USD at 7.5000 when the fixing is 7.4500 means overpaying, so that party pays the difference: $$5{,}000{,}000 \\times (7.5000 - 7.4500) = 250{,}000$$.',
  },

  // ------------------------------------------------------------------ Chapter 3
  {
    c: '3', t: 'Calculation',
    q: 'A portfolio is worth SGD 10 million and has a beta of 1.2. A futures contract is priced at 3,000 with a multiplier of SGD 50. How many contracts reduce the beta to zero?',
    o: ['67', '80', '133', '160'],
    a: 'b',
    r: '$$N = \\frac{\\beta V}{F m} = \\frac{1.2 \\times 10{,}000{,}000}{3{,}000 \\times 50} = 80$$.',
  },
  {
    c: '3', t: 'Calculation',
    q: 'Using the same portfolio and contract, how many contracts reduce beta from 1.2 to 0.6?',
    o: ['20', '40', '60', '80'],
    a: 'b',
    r: 'Only half the exposure is removed: $$N = \\frac{(1.2 - 0.6) \\times 10{,}000{,}000}{3{,}000 \\times 50} = 40$$.',
  },
  {
    c: '3', t: 'Single choice',
    q: 'A short hedge in the futures market is appropriate when the hedger:',
    o: ['Will buy the asset in future', 'Holds the asset and will sell it in future', 'Has no exposure to the asset', 'Wants to increase exposure to the asset'],
    a: 'b',
    r: 'A short futures position offsets the risk that the price of an asset already held falls before it is sold.',
  },
  {
    c: '3', t: 'Multiple response',
    q: 'Which of the following make a futures hedge imperfect?',
    o: ['The hedged asset differs from the futures underlying', 'The hedging horizon does not match the contract maturity', 'The contract size cannot be matched exactly to the exposure', 'The futures price converges to the spot price at expiry'],
    a: 'a,b,c',
    r: 'Basis risk arises from asset, maturity and size mismatch. Convergence at expiry is what makes the hedge work rather than a defect in it.',
  },
  {
    c: '3', t: 'Single choice',
    q: 'A trader buys one futures contract and simultaneously sells a further-out contract in the same commodity. This position is:',
    o: ['An outright long position', 'A calendar spread', 'An inter-commodity spread', 'A covered call'],
    a: 'b',
    r: 'A calendar, or intra-commodity, spread holds opposite positions in two delivery months of the same commodity.',
  },
  {
    c: '3', t: 'Calculation',
    q: 'The minimum variance hedge ratio is 0.8. The exposure is SGD 4 million and each contract is worth SGD 100,000. How many contracts should be sold?',
    o: ['25', '32', '40', '80'],
    a: 'b',
    r: '$$N = h \\times \\frac{V}{C} = 0.8 \\times \\frac{4{,}000{,}000}{100{,}000} = 32$$.',
  },
  {
    c: '3', t: 'Single choice',
    q: 'A strip hedge differs from a stack hedge because a strip:',
    o: ['Uses only the nearest contract and rolls it forward', 'Matches contract maturities to each exposure period', 'Requires no margin to be posted', 'Carries no basis risk'],
    a: 'b',
    r: 'A strip lines contracts up with the timing of each exposure. A stack uses bulk short-dated contracts and relies on rolling, which introduces roll risk.',
  },
  {
    c: '3', t: 'Multiple response',
    q: 'Which are legitimate reasons for a corporate to use exchange-traded futures rather than a forward?',
    o: ['Greater liquidity and the ability to exit before maturity', 'Reduced counterparty exposure through central clearing', 'Anonymity of the counterparty on the exchange', 'Freedom from any obligation to post margin'],
    a: 'a,b,c',
    r: 'Futures offer liquidity, central clearing and anonymity. They do not remove the margin obligation, which is the very mechanism that secures them.',
  },

  // ------------------------------------------------------------------ Chapter 4
  {
    c: '4', t: 'Calculation',
    q: 'A call option has a strike of 50 and the underlying is at 56 at expiry. The premium paid was 4. What are the payoff and profit per share?',
    o: ['Payoff 6, profit 2', 'Payoff 6, profit 6', 'Payoff 2, profit 2', 'Payoff 4, profit 0'],
    a: 'a',
    r: 'Payoff $$= \\max(56 - 50, 0) = 6$$ and profit $$= 6 - 4 = 2$$, since the premium is recovered from the payoff.',
  },
  {
    c: '4', t: 'Calculation',
    q: 'A put option has a strike of 80 and the underlying is at 72 at expiry. The premium paid was 5. What is the profit per share?',
    o: ['8', '5', '3', '0'],
    a: 'c',
    r: 'Payoff $$= \\max(80 - 72, 0) = 8$$ and profit $$= 8 - 5 = 3$$.',
  },
  {
    c: '4', t: 'Calculation',
    q: 'A one-year call at strike 100 costs 3 and a one-year put at strike 100 costs 2. The risk-free rate is 2%. By put-call parity, what is the spot price?',
    o: ['SGD 95.00', 'SGD 98.20', 'SGD 99.02', 'SGD 105.00'],
    a: 'c',
    r: '$$C - P = S - Ke^{-rT}$$, so $$S = 3 - 2 + 100e^{-0.02} = 1 + 98.02 = 99.02$$.',
  },
  {
    c: '4', t: 'Multiple response',
    q: 'Which statements about American and European options are correct?',
    o: ['An American option may be exercised at any time up to expiry', 'A European option may be exercised only at expiry', 'An American call on a non-dividend-paying share is worth the same as the equivalent European call', 'An American option is always worth less than the equivalent European option'],
    a: 'a,b,c',
    r: 'Early exercise of an American call on a non-dividend payer is never optimal, so the values coincide. An American option also carries every right a European option has, so it can never be worth less.',
  },
  {
    c: '4', t: 'Single choice',
    q: 'A trader is long a call and short a put with the same strike and expiry. The position replicates:',
    o: ['A long forward struck at the option strike', 'A short forward struck at the option strike', 'A long straddle', 'A covered call'],
    a: 'a',
    r: 'By put-call parity a long call plus a short put replicates a long forward at the strike; the two premiums differ by the financing on the strike.',
  },
  {
    c: '4', t: 'Calculation',
    q: 'A share trades at 40. A one-year call at strike 42 costs 2.00 and a one-year put at strike 42 costs 3.50. What risk-free rate does put-call parity imply?',
    o: ['A negative rate', 'Approximately zero', 'About 1.2%', 'Impossible to infer'],
    a: 'c',
    r: '$$C - P = S - Ke^{-rT}$$ gives $$-1.50 = 40 - 42e^{-r}$$, so $$42e^{-r} = 41.50$$, $$e^{-r} = 0.9881$$ and $$r \\approx 1.2\\%$$.',
  },
  {
    c: '4', t: 'Single choice',
    q: 'Which option position has an unlimited potential loss?',
    o: ['Long call', 'Long put', 'Short call', 'Long straddle'],
    a: 'c',
    r: 'A short call is exposed to unlimited appreciation in the underlying. A long put can lose only the premium, because the underlying cannot fall below zero.',
  },
  {
    c: '4', t: 'Multiple response',
    q: 'Which statements about theta are correct?',
    o: ['It is usually negative for a long option position', 'It measures sensitivity to the passage of time', 'Its magnitude is largest for at-the-money options close to expiry', 'It is unaffected by the option\u2019s moneyness'],
    a: 'a,b,c',
    r: 'Time decay erodes a long option and accelerates at the money as expiry approaches. Theta is strongly dependent on moneyness, so the last statement is false.',
  },
  {
    c: '4', t: 'Calculation',
    q: 'A straddle is bought with a call and a put both struck at 100, costing 4 and 3. What are the two break-even underlying prices?',
    o: ['93 and 107', '96 and 104', '100 and 107', '93 and 100'],
    a: 'a',
    r: 'Total premium is 7, so the position breaks even at $$100 - 7 = 93$$ and $$100 + 7 = 107$$.',
  },

  // ------------------------------------------------------------------ Chapter 5
  {
    c: '5', t: 'Calculation',
    q: 'A structured warrant has a conversion ratio of 5 warrants per share, an exercise price of SGD 2.00 and a warrant price of SGD 0.30. What is the effective cost per share on exercise?',
    o: ['SGD 1.50', 'SGD 2.30', 'SGD 3.50', 'SGD 0.30'],
    a: 'c',
    r: 'Five warrants cost $$5 \\times 0.30 = 1.50$$, plus the exercise price of 2.00, giving SGD 3.50 per share.',
  },
  {
    c: '5', t: 'Calculation',
    q: 'A daily leveraged certificate offers 3x the daily return of an index. The index rises 10% on day one and falls 10% on day two. What is the certificate\u2019s two-day return, ignoring costs?',
    o: ['0%', 'About -1%', 'About -9%', 'About -3%'],
    a: 'c',
    r: 'Day one multiplies the value by 1.30. Day two applies -30% to the new level, so $$1.30 \\times 0.70 = 0.91$$, a return of about -9%. A constant daily multiple does not return to par.',
  },
  {
    c: '5', t: 'Single choice',
    q: 'The key risk of holding a daily leveraged product over several weeks is:',
    o: ['The issuer may call the product at any time', 'Volatility decay from daily rebalancing, so the return can diverge materially from a simple multiple of the underlying return', 'The product is always physically settled', 'The investor loses entitlement to dividends'],
    a: 'b',
    r: 'Because leverage resets daily, returns compound along the day-to-day path rather than the cumulative move, so choppy markets erode value even if the underlying ends flat.',
  },
  {
    c: '5', t: 'Multiple response',
    q: 'Which statements about structured warrants are correct?',
    o: ['They are issued by a third party, usually a bank', 'They are listed and traded on an exchange', 'The creditworthiness of the issuer is a relevant risk', 'They carry no expiry date'],
    a: 'a,b,c',
    r: 'A structured warrant is issuer-created, exchange-listed and has a fixed expiry, so issuer credit and expiry both matter. Absence of an expiry date describes a perpetual instrument.',
  },
  {
    c: '5', t: 'Calculation',
    q: 'A call warrant with a 1:1 ratio is priced at SGD 0.25, has an exercise price of SGD 1.80 and the share trades at SGD 2.00. What is the premium over intrinsic value, as a percentage of the share price?',
    o: ['0%', '2.5%', '12.5%', '25%'],
    a: 'b',
    r: 'Intrinsic value is $$2.00 - 1.80 = 0.20$$, so the premium is 0.05, which is 2.5% of the SGD 2.00 share price.',
  },
  {
    c: '5', t: 'Single choice',
    q: 'Which best describes gearing on a warrant?',
    o: ['The share price divided by the effective warrant cost per share', 'The warrant price divided by the exercise price', 'The exercise price divided by the share price', 'The warrant\u2019s delta'],
    a: 'a',
    r: 'Gearing measures the underlying exposure obtained per dollar of warrant premium, so it scales the share price against the cost of one share\u2019s worth of warrants.',
  },

  // ------------------------------------------------------------------ Chapter 6
  {
    c: '6', t: 'Single choice',
    q: 'A knock-in option differs from a knock-out option because a knock-in:',
    o: ['Begins with no payoff potential and becomes alive when the barrier is touched', 'Is extinguished when the barrier is touched', 'Has no barrier at all', 'Can only be European'],
    a: 'a',
    r: 'A knock-in activates when the barrier is touched; a knock-out is extinguished on the same event.',
  },
  {
    c: '6', t: 'Multiple response',
    q: 'Which statements about a Category-R CBBC are correct?',
    o: ['Its call price is set away from the strike', 'It may leave a residual value after a mandatory call event', 'It leaves no residual value after a mandatory call event', 'It carries no leverage'],
    a: 'a,b',
    r: 'Category-R sets the call price apart from the strike so a residual can remain; Category-N leaves nothing. Both categories are leveraged instruments.',
  },
  {
    c: '6', t: 'Calculation',
    q: 'A Category-N bull CBBC has an underlying at 1,050, a call price of 1,000 and a strike of 1,000. A mandatory call event occurs. What does the holder receive?',
    o: ['Nothing', 'The difference between 1,050 and 1,000', 'The strike amount of 1,000', 'A replacement contract'],
    a: 'a',
    r: 'In a Category-N contract the call price equals the strike, so no residual value remains once the mandatory call event occurs.',
  },
  {
    c: '6', t: 'Single choice',
    q: 'A binary option pays a fixed amount if the underlying finishes above the strike and nothing otherwise. Its payoff profile is:',
    o: ['Linear in the underlying', 'A step function', 'Identical to a vanilla call', 'Unbounded'],
    a: 'b',
    r: 'A binary pays a fixed sum or nothing, so the payoff is discontinuous at the strike rather than linear.',
  },
  {
    c: '6', t: 'Multiple response',
    q: 'Which are genuine disadvantages of barrier options for the buyer?',
    o: ['The option can be extinguished by a move in the underlying', 'The premium is lower than an equivalent vanilla option', 'Secondary-market liquidity is often poorer than for vanilla options', 'Valuation and ongoing risk monitoring are more complex'],
    a: 'a,c,d',
    r: 'A lower premium is the advantage that compensates the buyer, not a disadvantage. The real drawbacks are knock-out risk, poorer liquidity and greater complexity.',
  },
  {
    c: '6', t: 'Single choice',
    q: 'A holder of a Category-N bull CBBC is most exposed to which event?',
    o: ['A small rise in the underlying', 'A fall in the underlying to the call price, triggering a mandatory call and extinguishing the residual', 'A change of the issuer\u2019s auditor', 'A share split by the underlying issuer'],
    a: 'b',
    r: 'The contract is designed to be called away when the underlying reaches the call price, at which point a Category-N holder receives nothing.',
  },

  // ------------------------------------------------------------------ Chapter 7
  {
    c: '7', t: 'Single choice',
    q: 'A structured deposit differs from an ordinary time deposit because a structured deposit:',
    o: ['Has a return that depends on the performance of an underlying', 'Is always fully protected by deposit insurance', 'Has no maturity date', 'Cannot be sold by a bank'],
    a: 'a',
    r: 'The defining feature is a return linked to an underlying. Depending on the structure, the principal itself may be at risk.',
  },
  {
    c: '7', t: 'Multiple response',
    q: 'Which of the following are structured products?',
    o: ['Equity-linked notes', 'Callable range accrual notes', 'A posted-rate fixed deposit taken at the branch counter', 'Accumulators'],
    a: 'a,b,d',
    r: 'A structured product embeds a derivative to shape its return. A posted-rate fixed deposit embeds no derivative, so it is not a structured product.',
  },
  {
    c: '7', t: 'Calculation',
    q: 'An equity-linked note offers 100% principal protection plus 60% participation in any rise in an index. The index rises 25% over the term. What total return does the investor receive?',
    o: ['15%', '25%', '60%', '85%'],
    a: 'a',
    r: '$$60\\% \\times 25\\% = 15\\%$$. The protection returns the principal; the participation rate scales the upside.',
  },
  {
    c: '7', t: 'Single choice',
    q: 'A dual currency investment exposes the investor primarily to:',
    o: ['Interest rate risk only', 'Currency risk, because redemption may occur in the weaker of two currencies', 'Equity price risk only', 'No risk, because the deposit sits with a bank'],
    a: 'b',
    r: 'A DCI pays an enhanced yield in exchange for the investor accepting conversion into an alternative currency at a set rate, so currency exposure is the core risk.',
  },
  {
    c: '7', t: 'Multiple response',
    q: 'Which factors must a representative consider before recommending a structured product?',
    o: ['The client\u2019s risk appetite and investment horizon', 'The client\u2019s liquidity needs', 'The credit risk of the product issuer', 'The visual design of the marketing brochure'],
    a: 'a,b,c',
    r: 'Suitability turns on appetite, horizon, liquidity and issuer credit. Presentation has no bearing on suitability.',
  },
  {
    c: '7', t: 'Single choice',
    q: 'Which structured product typically offers capital protection but limits participation in the upside?',
    o: ['A capital-protected note with a participation rate below 100%', 'A daily leveraged certificate', 'A Category-N CBBC', 'A short call position'],
    a: 'a',
    r: 'Protecting principal consumes optionality, so the investor normally receives a participation rate below 100%, or a capped return.',
  },
  {
    c: '7', t: 'Calculation',
    q: 'A structured product protects 95% of principal and participates at 100% in upside above the initial level. The index falls 10%. What return does the investor receive?',
    o: ['-10%', '-5%', '0%', '+10%'],
    a: 'b',
    r: 'The floor binds at 95% of principal, so a 10% index fall is absorbed down to the floor, a return of -5%.',
  },

  // ------------------------------------------------------------------ Chapter 8
  {
    c: '8', t: 'Single choice',
    q: 'A reverse convertible is best described as:',
    o: ['A bond together with a short put on the underlying', 'A bond together with a long call on the underlying', 'A pure equity position', 'A floating-rate note with no embedded option'],
    a: 'a',
    r: 'The issuer pays an enhanced coupon in return for the investor writing a put: if the underlying falls, the investor receives shares instead of par.',
  },
  {
    c: '8', t: 'Calculation',
    q: 'An equity-linked note has a notional of USD 1,000,000 and a strike of USD 50, with a conversion ratio equal to notional divided by strike. The underlying falls to USD 40 and the note converts. How many shares does the investor receive, and what are they worth?',
    o: ['20,000 shares worth USD 800,000', '25,000 shares worth USD 1,000,000', '20,000 shares worth USD 1,000,000', '25,000 shares worth USD 800,000'],
    a: 'a',
    r: 'Conversion shares $$= 1{,}000{,}000 / 50 = 20{,}000$$, worth $$20{,}000 \\times 40 = 800{,}000$$, a 20% loss of principal.',
  },
  {
    c: '8', t: 'Multiple response',
    q: 'Which statements about a range accrual note are correct?',
    o: ['Coupon accrues only on days the reference rate is inside a defined range', 'It offers a higher potential coupon than a plain note of the same maturity and issuer', 'Coupon accrues on every day regardless of the range', 'The investor bears the risk that the range is not satisfied'],
    a: 'a,b,d',
    r: 'The enhanced coupon compensates the investor for the risk that the range is breached, in which case no coupon accrues for the affected days.',
  },
  {
    c: '8', t: 'Calculation',
    q: 'A range accrual note pays 4% per annum on a 360-day basis and the reference rate is inside the range on 250 of 360 days. What is the annual coupon?',
    o: ['2.78%', '4.00%', '5.76%', '1.39%'],
    a: 'a',
    r: '$$4\\% \\times \\frac{250}{360} = 2.78\\%$$.',
  },
  {
    c: '8', t: 'Single choice',
    q: 'The coupon on an inverse floater rises when:',
    o: ['The reference rate rises', 'The reference rate falls', 'The issuer\u2019s credit rating falls', 'The note is called by the issuer'],
    a: 'b',
    r: 'The coupon moves inversely to the reference rate, so the investor gains when rates fall and loses when rates rise.',
  },
  {
    c: '8', t: 'Calculation',
    q: 'An inverse floater pays 8% minus the three-month rate, floored at zero. If the three-month rate is 5.5%, what coupon does the investor receive?',
    o: ['0%', '2.5%', '5.5%', '8.0%'],
    a: 'b',
    r: '$$8\\% - 5.5\\% = 2.5\\%$$, comfortably above the zero floor.',
  },
  {
    c: '8', t: 'Single choice',
    q: 'Which risk dominates a structured note with a long maturity and no secondary market?',
    o: ['Liquidity risk', 'Reinvestment risk', 'Settlement risk', 'Operational risk'],
    a: 'a',
    r: 'An instrument that cannot readily be sold exposes its holder to liquidity risk, which the issuer prices into the coupon.',
  },

  // ------------------------------------------------------------------ Chapter 9
  {
    c: '9', t: 'Single choice',
    q: 'An exchange-traded fund differs from a unit trust primarily because an ETF:',
    o: ['Trades intraday on an exchange at market-determined prices', 'Is not a collective investment scheme', 'Holds no underlying assets', 'Cannot be sold short under any circumstances'],
    a: 'a',
    r: 'Both are collective schemes. The ETF\u2019s distinguishing feature is intraday exchange trading with creation and redemption by authorised participants.',
  },
  {
    c: '9', t: 'Multiple response',
    q: 'Which statements about constant proportion portfolio insurance (CPPI) are correct?',
    o: ['It allocates between a risky and a safe asset', 'The allocation to the risky asset rises as portfolio value rises above the floor', 'It guarantees the floor under every market condition, including gap moves', 'It can be defeated by a market gap that jumps below the floor'],
    a: 'a,b,d',
    r: 'CPPI scales exposure to the cushion above a floor. It cannot guarantee the floor through a gap, because it can trade only at prices actually available.',
  },
  {
    c: '9', t: 'Calculation',
    q: 'A CPPI portfolio is worth 100 with a floor of 80 and a multiplier of 3. What is the allocation to the risky asset?',
    o: ['20', '40', '60', '80'],
    a: 'c',
    r: 'Cushion $$= 100 - 80 = 20$$, so the risky allocation is $$3 \\times 20 = 60$$.',
  },
  {
    c: '9', t: 'Single choice',
    q: 'A closed-end fund differs from an open-end fund because a closed-end fund:',
    o: ['Issues a fixed number of shares that trade on an exchange', 'Always redeems shares at net asset value on demand', 'Has no net asset value at all', 'May not use leverage under any circumstances'],
    a: 'a',
    r: 'A closed-end fund has a fixed share count, so its market price can diverge from net asset value. An open-end fund issues and redeems at NAV.',
  },
  {
    c: '9', t: 'Multiple response',
    q: 'Which are limitations of using the Sharpe ratio to compare funds?',
    o: ['It assumes returns are normally distributed', 'It penalises upside volatility as well as downside volatility', 'It is entirely independent of the fund\u2019s fees', 'It can be distorted by smoothing of reported returns'],
    a: 'a,b,d',
    r: 'Sharpe treats all dispersion as risk, is sensitive to non-normality and sensitive to return smoothing. Fees reduce the numerator, so the ratio is not independent of them.',
  },
  {
    c: '9', t: 'Single choice',
    q: 'The tracking error of an ETF measures:',
    o: ['The volatility of the difference between fund return and index return', 'The fund\u2019s total expense ratio', 'The prevailing bid-ask spread', 'The fund\u2019s level of leverage'],
    a: 'a',
    r: 'Tracking error is the dispersion of the fund-minus-index return; a low figure indicates close replication of the index.',
  },

  // ------------------------------------------------------------------ Chapter 10
  {
    c: '10', t: 'Calculation',
    q: 'An investor buys 5,000 CFDs at SGD 4.00 with a 10% margin requirement. What initial margin is required?',
    o: ['SGD 200', 'SGD 2,000', 'SGD 20,000', 'SGD 200,000'],
    a: 'b',
    r: 'Position value $$= 5{,}000 \\times 4.00 = 20{,}000$$, so margin $$= 10\\% \\times 20{,}000 = 2{,}000$$.',
  },
  {
    c: '10', t: 'Calculation',
    q: 'The same 5,000 CFDs are closed at SGD 3.80. What is the realised profit or loss, ignoring financing and commission?',
    o: ['A loss of SGD 200', 'A loss of SGD 1,000', 'A gain of SGD 1,000', 'A gain of SGD 200'],
    a: 'b',
    r: '$$5{,}000 \\times (3.80 - 4.00) = -1{,}000$$, a loss of SGD 1,000 on SGD 2,000 of margin — a 50% loss of equity for a 5% adverse move.',
  },
  {
    c: '10', t: 'Single choice',
    q: 'A CFD provider applies an overnight financing charge. The charge is best described as:',
    o: ['A one-off commission charged on opening the position', 'A daily interest adjustment for the leveraged portion of the position', 'A statutory levy collected for the regulator', 'A dividend adjustment made to the account'],
    a: 'b',
    r: 'Because a CFD is leveraged, the provider finances the balance and charges interest daily, usually at a reference rate plus a spread.',
  },
  {
    c: '10', t: 'Multiple response',
    q: 'Which are true differences between a CFD and an exchange-traded futures contract?',
    o: ['CFDs are usually traded OTC; futures are exchange-traded', 'Futures have standardised terms; CFDs are bespoke', 'A CFD carries no counterparty risk at all', 'A CFD position can be held open indefinitely, subject to the provider\u2019s terms'],
    a: 'a,b,d',
    r: 'A CFD is a bilateral contract with the provider, so counterparty risk is present rather than absent. Open-ended duration and bespoke terms are the genuine differences.',
  },
  {
    c: '10', t: 'Calculation',
    q: 'An investor is short 2,000 CFDs from SGD 5.00. A dividend of SGD 0.10 per share goes ex. What adjustment applies?',
    o: ['The investor receives SGD 200', 'The investor pays SGD 200', 'The investor receives SGD 20', 'The investor pays SGD 20'],
    a: 'b',
    r: 'A short CFD holder compensates the provider for the dividend the provider must pay: $$2{,}000 \\times 0.10 = 200$$ paid by the investor.',
  },
  {
    c: '10', t: 'Single choice',
    q: 'Which is the most accurate statement about a guaranteed stop on a CFD?',
    o: ['It is provided free of charge on every position', 'It guarantees the exit price but usually costs a wider spread or an explicit premium', 'It removes all market risk from the position', 'It is available only on exchange-traded futures'],
    a: 'b',
    r: 'The provider absorbs gap risk on a guaranteed stop, so it charges for that protection through a wider spread or a fee.',
  },
  {
    c: '10', t: 'Multiple response',
    q: 'Which risks are specific to trading CFDs rather than holding the underlying shares outright?',
    o: ['Leverage can magnify losses beyond the initial outlay', 'The provider may become insolvent', 'The position may be closed out on a margin call', 'The investor receives dividends directly from the company'],
    a: 'a,b,c',
    r: 'A CFD holder has no direct shareholder entitlement; any dividend reaches the account only as a contractual adjustment from the provider.',
  },
  {
    c: '10', t: 'Calculation',
    q: 'A CFD account has equity of SGD 5,000 and a maintenance margin requirement of SGD 4,000. By how much can the position lose before a margin call is triggered?',
    o: ['SGD 1,000', 'SGD 4,000', 'SGD 5,000', 'SGD 9,000'],
    a: 'a',
    r: 'A margin call follows once equity falls to the maintenance requirement: $$5{,}000 - 4{,}000 = 1{,}000$$ of cushion.',
  },

  // ------------------------------------------------------------------ Chapter 11
  {
    c: '11', t: 'Multiple response',
    q: 'Which are key risks of investing in structured products?',
    o: ['Market risk on the underlying', 'Liquidity risk on the note itself', 'Issuer credit risk', 'Currency risk where the note is denominated in a foreign currency'],
    a: 'a,b,c,d',
    r: 'All four apply: the underlying can move against the investor, the note may be illiquid, the issuer may default, and a foreign-currency note adds currency exposure.',
  },
  {
    c: '11', t: 'Single choice',
    q: 'Which risk is most closely associated with holding a single large bespoke OTC derivative position?',
    o: ['Counterparty credit risk', 'Deposit insurance risk', 'Board composition risk', 'Dividend timing risk'],
    a: 'a',
    r: 'A large bespoke OTC position concentrates exposure on one counterparty, making that counterparty\u2019s creditworthiness the dominant incremental risk.',
  },
  {
    c: '11', t: 'Multiple response',
    q: 'Which statements about basis risk are correct?',
    o: ['It arises when the cash asset differs from the futures underlying', 'It remains if the hedge is lifted before the contract expires', 'It narrows towards zero as the contract approaches expiry', 'It is eliminated by using a larger number of contracts'],
    a: 'a,b,c',
    r: 'Basis converges at expiry, so an early unwind leaves residual basis risk. Adding contracts changes the size of the exposure, not the basis.',
  },
  {
    c: '11', t: 'Single choice',
    q: 'A credit default swap primarily transfers:',
    o: ['Interest rate risk', 'Credit risk on a reference entity', 'Equity price risk', 'Operational risk'],
    a: 'b',
    r: 'The protection buyer pays a premium and receives a payment on a defined credit event affecting the reference entity.',
  },
  {
    c: '11', t: 'Multiple response',
    q: 'Which are ISDA-recognised credit events for a credit default swap?',
    o: ['Failure to pay', 'Restructuring', 'Obligation acceleration', 'A fall in the reference entity\u2019s share price'],
    a: 'a,b,c',
    r: 'Standard credit events include failure to pay, restructuring and obligation acceleration. A share-price fall is not a credit event, although it may reflect deteriorating credit.',
  },
  {
    c: '11', t: 'Single choice',
    q: 'Reinvestment risk is most relevant to which investor?',
    o: ['One holding a long-dated zero-coupon bond to maturity', 'One holding a short-dated coupon bond and intending to roll it over', 'One holding physical gold in a vault', 'One holding a perpetual floating-rate note'],
    a: 'b',
    r: 'Reinvestment risk bites when maturing cash must be placed at unknown future rates, which affects a rolling coupon portfolio.',
  },
  {
    c: '11', t: 'Multiple response',
    q: 'Which risk-management actions are appropriate for a leveraged derivatives portfolio?',
    o: ['Setting and enforcing stop-loss levels', 'Imposing a daily loss limit', 'Measuring exposure with value at risk', 'Removing all position limits so that no forced exit can occur'],
    a: 'a,b,c',
    r: 'Stops, daily loss limits and VaR measurement are the standard controls. Removing limits converts a managed loss into an unmanaged one.',
  },
  {
    c: '11', t: 'Single choice',
    q: 'A position has a one-day 95% value at risk of SGD 50,000. What does this mean?',
    o: ['The maximum possible loss is SGD 50,000', 'Under the model\u2019s assumptions, there is a 5% chance of losing more than SGD 50,000 over one day', 'The position will lose exactly SGD 50,000 on one day in twenty', 'The expected loss over one day is SGD 50,000'],
    a: 'b',
    r: 'VaR is a quantile, not a maximum: it states a loss threshold expected to be exceeded with the stated probability over the stated horizon, conditional on the model.',
  },

  // ------------------------------------------------------------------ Chapter 12
  {
    c: '12', t: 'Single choice',
    q: 'A client with a two-year horizon and low risk tolerance wants exposure to equity upside. The most suitable structure is:',
    o: ['A daily leveraged equity certificate', 'A capital-protected note with a participation rate', 'A Category-N bull CBBC', 'A short equity call position'],
    a: 'b',
    r: 'A capital-protected note delivers upside while respecting a low risk tolerance and a defined horizon. Leveraged and CBBC structures can lose the whole investment.',
  },
  {
    c: '12', t: 'Multiple response',
    q: 'A client must settle a USD 2 million payable in six months. Which are appropriate hedging responses?',
    o: ['Buy a USD/SGD forward', 'Buy a USD call option', 'Buy a USD put option', 'Enter a currency swap where there is a matching USD inflow'],
    a: 'a,b,d',
    r: 'A USD payable is hedged by locking in the purchase of USD, whether by forward or by call. A USD put would add to the exposure, and a swap suits matched two-way flows.',
  },
  {
    c: '12', t: 'Single choice',
    q: 'A client\u2019s portfolio has drifted to 55% equity and 45% bonds against a 70/30 target. Which trade restores the target?',
    o: ['Sell equity and buy bonds', 'Buy equity and sell bonds', 'Sell both equity and bonds', 'Take no action because the target is a long-term aim'],
    a: 'b',
    r: 'The portfolio has drifted defensive relative to target, so equity must be bought and bonds sold to restore 70/30.',
  },
  {
    c: '12', t: 'Calculation',
    q: 'A client invests SGD 100,000 in a note paying a 4% fixed coupon plus 50% participation in any index return above a 10% hurdle. The index returns 20%. What total return does the client receive?',
    o: ['4%', '5%', '9%', '14%'],
    a: 'c',
    r: 'Fixed coupon 4% plus $$50\\% \\times (20\\% - 10\\%) = 5\\%$$, giving 9% in total.',
  },
  {
    c: '12', t: 'Single choice',
    q: 'A representative recommends a structured note without documenting the client\u2019s risk profile. The primary compliance failure is:',
    o: ['Failure to establish a reasonable basis for the recommendation', 'Failure to hold a capital markets services licence', 'Failure to publish a product highlights sheet', 'Failure to notify MAS of the trade'],
    a: 'a',
    r: 'Suitability requires a documented understanding of the client before recommending. Without it there is no reasonable basis for the recommendation.',
  },

  // ---------------------------------------------------------------- Chapter 9
  {
    c: '9', t: 'Single choice',
    q: 'A fund\u2019s net asset value per share is computed as:',
    o: ['Total assets less total liabilities, divided by the number of shares outstanding', 'Total assets divided by the number of shares, ignoring liabilities', 'The market price multiplied by the number of shares', 'The subscription price set at launch'], a: 'A',
    r: 'NAV nets liabilities against assets before dividing by shares. The market price of a closed-end fund can differ from NAV; the launch price is a single historical figure.',
  },
  {
    c: '9', t: 'Multiple response',
    q: 'Which statements about ETFs and their creation and redemption mechanism are correct?',
    o: ['Authorised participants can create new ETF shares by delivering the underlying basket', 'Creation and redemption help keep the market price close to NAV', 'Only institutional investors may hold ETF shares', 'Redemption involves exchanging ETF shares for the underlying assets'], a: 'A,B,D',
    r: 'The creation and redemption arbitrage is what anchors the market price to NAV, and it operates through authorised participants. Retail investors buy ETF shares on exchange like any other listed security.',
  },
  {
    c: '9', t: 'Single choice',
    q: 'A structured fund with capital protection typically achieves that protection by:',
    o: ['Investing a large part of the portfolio in a safe asset and using the remainder to buy derivative exposure', 'Guaranteeing the return by contract with the investor', 'Holding only cash', 'Borrowing to buy more of the risky asset'], a: 'A',
    r: 'Protection is engineered by funding a floor with a safe asset and spending only the residual on optionality. Any guarantee is a credit exposure to the guarantor rather than a free lunch.',
  },
  {
    c: '9', t: 'Calculation',
    q: 'A CPPI structured fund has a value of 1,000, a floor of 800 and a multiplier of 2. The risky asset then falls 50% while the safe asset is flat. What is the new portfolio value?',
    o: ['600', '800', '900', '1,000'], a: 'B',
    r: 'The cushion was $$1{,}000 - 800 = 200$$, so the risky allocation was $$2 \\times 200 = 400$$ and the safe allocation 600. A 50% fall in the risky asset destroys 200, leaving $$600 + 200 = 800$$ — exactly the floor. A larger gap would break through it, because CPPI can only trade at prices actually available.',
  },
  {
    c: '9', t: 'Multiple response',
    q: 'Which are genuine disadvantages of ETFs relative to an index unit trust?',
    o: ['Bid-ask spreads and brokerage are incurred on each purchase', 'The market price can diverge from NAV in stressed markets', 'They cannot be sold during the trading day', 'Small purchases may suffer proportionally higher dealing costs'], a: 'A,B,D',
    r: 'Trading costs and possible NAV divergence are the trade-offs for intraday liquidity. The ability to sell during the day is an advantage of ETFs, so the third statement is false.',
  },
  {
    c: '9', t: 'Single choice',
    q: 'A fund\u2019s returns are smoothed by the manager. Which performance measure is most distorted?',
    o: ['The Sharpe ratio, because measured volatility is understated', 'The total expense ratio', 'The fund\u2019s NAV', 'The fund\u2019s tracking error against a cash benchmark'], a: 'A',
    r: 'Smoothing suppresses measured volatility, which inflates the Sharpe ratio. The expense ratio and NAV are unaffected by smoothing.',
  },

  // ---------------------------------------------------------------- Chapter 7
  {
    c: '7', t: 'Single choice',
    q: 'An accumulator structure obliges the investor to buy the underlying at intervals. Its principal risk is that:',
    o: ['The investor must keep buying as the price falls, magnifying losses', 'The investor may miss upside if the price rises quickly', 'The structure has no maturity', 'The investor receives no dividends under any circumstances'], a: 'A',
    r: 'Accumulators typically have a knock-out that caps the upside while the obligation to buy continues on the downside, so the payoff is asymmetrically against the investor.',
  },
  {
    c: '7', t: 'Multiple response',
    q: 'Which statements about a structured deposit are correct?',
    o: ['The return is linked to an underlying such as an index, a rate or a currency', 'Principal may be at risk depending on the structure', 'It is covered by deposit insurance in full in every case', 'It may restrict early withdrawal'], a: 'A,B,D',
    r: 'A structured deposit links its return to an underlying and may put principal at risk. Deposit insurance treatment depends on the structure, so it cannot be assumed to apply in full.',
  },
  {
    c: '7', t: 'Single choice',
    q: 'A range accrual deposit pays an enhanced coupon conditional on a reference rate staying within a band. The investor is effectively:',
    o: ['Selling a digital or range option on the reference rate to the issuer', 'Buying a call option on the reference rate', 'Taking no market risk', 'Hedging interest rate exposure'], a: 'A',
    r: 'The enhanced coupon is compensation for writing optionality: the investor receives less when the rate leaves the band, which is the payoff of a sold range or digital option.',
  },
  {
    c: '7', t: 'Calculation',
    q: 'A structured deposit offers 100% principal protection after three years plus 40% of any rise in an equity index. The index rises 50%. What is the investor\u2019s total return over the term?',
    o: ['15%', '20%', '40%', '50%'], a: 'B',
    r: '$$40\\% \\times 50\\% = 20\\%$$ over the term, with the principal returned in full.',
  },
  {
    c: '7', t: 'Multiple response',
    q: 'Which are appropriate suitability considerations for an OTC structured product sold to a retail client?',
    o: ['Whether the client understands the payoff profile and the downside scenario', 'Whether the client\u2019s liquidity needs are compatible with the tenor', 'Whether the issuer\u2019s credit standing is acceptable', 'Whether the product has a recent marketing award'], a: 'A,B,C',
    r: 'Understanding, liquidity and issuer credit are the substantive suitability questions. A marketing award has no bearing on whether the product suits the client.',
  },
  {
    c: '7', t: 'Single choice',
    q: 'The principal-protected floor in a structured product is best understood as:',
    o: ['A purchased option or a zero-coupon bond whose cost is financed by giving up some upside', 'A guarantee provided free of charge by the issuer', 'A regulatory requirement for all structured products', 'A form of deposit insurance'], a: 'A',
    r: 'Protection must be funded: either the portfolio is built around a zero-coupon bond that grows to par, or a protective put is purchased. Either way the cost comes out of the upside.',
  },

  // --------------------------------------------------------------- Chapter 6 extra
  {
    c: '6', t: 'Calculation',
    q: 'A down-and-out put has a strike of 100, a barrier of 80 and the underlying trades at 95. The option knocks out when the underlying touches 80. If it touches 80 and then recovers to 90, the holder has:',
    o: ['No payoff, because the option was extinguished at the barrier', 'A payoff of 10', 'A payoff of 5', 'A payoff of 20'], a: 'A',
    r: 'Knock-out is a path-dependent event: once the barrier is touched the option ceases to exist, regardless of where the underlying finishes.',
  },
  {
    c: '6', t: 'Single choice',
    q: 'The issuer of a CBBC protects itself against unlimited loss by:',
    o: ['Imposing a mandatory call event that terminates the contract when the underlying reaches the call price', 'Charging a higher premium than a warrant', 'Requiring the investor to post margin', 'Listing the contract on an exchange'], a: 'A',
    r: 'The mandatory call is the issuer\u2019s protection: it ends the contract before the underlying can move far past the strike, which is why the leverage in a CBBC is bounded by the call feature.',
  },
  {
    c: '6', t: 'Multiple response',
    q: 'Which risks arise specifically from the barrier feature of a knock-out option?',
    o: ['The option can be extinguished before expiry', 'The option may become worthless even though the underlying finishes favourably', 'The option is worth more than an equivalent vanilla option', 'Valuing and hedging it requires monitoring the barrier continuously'], a: 'A,B,D',
    r: 'A knock-out is cheaper than the equivalent vanilla option, not more valuable, which is precisely why the buyer accepts the extinction risk.',
  },

  // --------------------------------------------------------------- Chapter 5 extra
  {
    c: '5', t: 'Calculation',
    q: 'A warrant has a delta of 0.5. An investor wants the same exposure as 2,000 shares. How many warrants are needed?',
    o: ['1,000', '2,000', '3,000', '4,000'], a: 'D',
    r: 'Warrants needed $$= \\text{share exposure} / \\delta = 2{,}000 / 0.5 = 4{,}000$$.',
  },
  {
    c: '5', t: 'Single choice',
    q: 'A daily leveraged certificate is reset each day. An investor holds it for a month in a market that ends exactly where it started but is highly volatile. The most likely outcome is:',
    o: ['A loss caused by volatility decay', 'A gain equal to the leverage multiple', 'No change in value', 'A gain equal to the volatility'], a: 'A',
    r: 'Daily rebalancing compounds along the path. In a round-trip volatile market the product loses value even though the underlying is unchanged.',
  },
  {
    c: '5', t: 'Multiple response',
    q: 'Which statements about the issuer of a structured warrant are correct?',
    o: ['The issuer is typically a bank or a financial institution', 'The investor is exposed to the issuer\u2019s creditworthiness', 'The issuer is the listed company whose shares underlie the warrant', 'The issuer may provide liquidity by quoting bid and offer prices'], a: 'A,B,D',
    r: 'A structured warrant is issued by a third party such as a bank, not by the underlying company, so the issuer\u2019s credit and its liquidity provision both matter.',
  },

  // --------------------------------------------------------------- Chapter 1 extra
  {
    c: '1', t: 'Single choice',
    q: 'Which of the following is not a derivative?',
    o: ['A newly issued ordinary share bought in an initial public offering', 'An exchange-traded futures contract', 'A currency forward', 'A listed structured warrant'], a: 'A',
    r: 'A share is a direct claim on the issuer. A future, a forward and a warrant all derive their value from an underlying.',
  },
  {
    c: '1', t: 'Multiple response',
    q: 'Which statements about the counterparty to an exchange-traded derivative are correct?',
    o: ['The clearing house becomes the counterparty to both sides', 'The original counterparties no longer face each other directly', 'The clearing house is exposed to its clearing members', 'The exchange guarantees the credit of every member to every other member'], a: 'A,B,C',
    r: 'Novation substitutes the clearing house for the original counterparties, so each side faces the clearing house and the clearing house faces its members. It is the clearing house, not the exchange, that carries the credit exposure.',
  },
  {
    c: '1', t: 'Calculation',
    q: 'A derivative position has a notional of SGD 10 million and is quoted at 2% of notional. What is the market value of the position?',
    o: ['SGD 200', 'SGD 20,000', 'SGD 200,000', 'SGD 2,000,000'], a: 'C',
    r: '$$10{,}000{,}000 \\times 2\\% = 200{,}000$$. The notional is a reference amount, not the value of the position.',
  },

  // --------------------------------------------------------------- Chapter 2 extra
  {
    c: '2', t: 'Single choice',
    q: 'In a cross-currency swap, the exchange of principal at maturity means the parties:',
    o: ['Re-exchange the principal amounts at the original rate, eliminating the currency exposure on the principal', 'Re-exchange at the prevailing spot rate, creating a currency gain or loss', 'Do not re-exchange principal', 'Exchange only the interest differential'], a: 'A',
    r: 'Re-exchange at the contractual rate is what strips out currency risk on principal; re-exchanging at spot would leave the exposure in place.',
  },
  {
    c: '2', t: 'Multiple response',
    q: 'Which statements about a forward rate agreement are correct?',
    o: ['It fixes an interest rate for a future period', 'It is cash-settled against a reference rate at the start of the period', 'It requires delivery of a bond', 'It is an OTC contract between two parties'], a: 'A,B,D',
    r: 'An FRA settles the interest differential in cash at the start of the notional period and involves no bond delivery.',
  },
  {
    c: '2', t: 'Calculation',
    q: 'A share trades at SGD 8.00. The one-year rate is 3% and the share pays a continuous dividend yield of 1%. What is the one-year forward price using continuous compounding?',
    o: ['SGD 8.16', 'SGD 8.24', 'SGD 8.32', 'SGD 8.40'], a: 'A',
    r: '$$F = Se^{(r-q)T} = 8.00 \\times e^{0.02} \\approx 8.16$$.',
  },
  {
    c: '2', t: 'Single choice',
    q: 'Backwardation in a commodity futures curve most commonly reflects:',
    o: ['A convenience yield from holding the physical that exceeds the carry cost', 'A permanent decline in demand', 'Negative interest rates only', 'A futures exchange rule'], a: 'A',
    r: 'When holders value the physical more than the futures price implies, the curve slopes down. That premium is the convenience yield.',
  },

  // --------------------------------------------------------------- Chapter 3 extra
  {
    c: '3', t: 'Single choice',
    q: 'A hedge ratio of 1.0 with a contract whose underlying exactly matches the exposure means:',
    o: ['The number of contracts equals the exposure divided by the contract value', 'No contracts are needed', 'Only a fraction of the exposure is hedged', 'The hedge is over-insured'], a: 'A',
    r: 'A ratio of 1.0 means the notional of futures equals the notional of the exposure, so the count is exposure divided by contract value.',
  },
  {
    c: '3', t: 'Calculation',
    q: 'An exposure of SGD 6 million is hedged with futures priced at 1,500 with a multiplier of SGD 100. The hedge ratio is 1.0. How many contracts are required?',
    o: ['40', '45', '60', '90'], a: 'A',
    r: 'Contract value $$= 1{,}500 \\times 100 = 150{,}000$$, so $$6{,}000{,}000 / 150{,}000 = 40$$.',
  },
  {
    c: '3', t: 'Multiple response',
    q: 'Which statements about a tailing-the-hedge adjustment are correct?',
    o: ['It adjusts the number of contracts for the daily settlement of futures', 'It accounts for the interest earned or paid on variation margin', 'It increases the number of contracts relative to the untailed hedge', 'It is unnecessary when the hedge is held to expiry'], a: 'A,B,C',
    r: 'Tailing adjusts the ratio by the discount factor because variation margin is settled daily; for a hedger receiving margin the count rises. It applies while the position is open, including to expiry.',
  },
  {
    c: '3', t: 'Single choice',
    q: 'An inter-commodity spread takes positions in:',
    o: ['Two different but related commodities in the same delivery month', 'The same commodity in two delivery months', 'The cash and futures markets simultaneously', 'Two unrelated asset classes'], a: 'A',
    r: 'An inter-commodity spread pairs related commodities, such as two energy grades; pairing delivery months of one commodity is a calendar spread.',
  },

  // --------------------------------------------------------------- Chapter 4 extra
  {
    c: '4', t: 'Single choice',
    q: 'An increase in the risk-free rate will, other things equal:',
    o: ['Raise the value of a call and lower the value of a put', 'Lower the value of a call and raise the value of a put', 'Raise both', 'Leave both unchanged'], a: 'A',
    r: 'The forward price rises with the rate, which helps the call and hurts the put; the discounting of the strike has the opposite sign and reinforces that direction.',
  },
  {
    c: '4', t: 'Calculation',
    q: 'A call has a delta of 0.4 and a gamma of 0.02. The underlying rises by 2. What is the approximate change in the call price?',
    o: ['0.80', '0.84', '0.88', '1.20'], a: 'B',
    r: '$$\\Delta \\cdot dS + \\tfrac{1}{2}\\Gamma \\cdot dS^2 = 0.4 \\times 2 + 0.5 \\times 0.02 \\times 4 = 0.80 + 0.04 = 0.84$$.',
  },
  {
    c: '4', t: 'Multiple response',
    q: 'Which statements about a butterfly spread are correct?',
    o: ['It combines a bull spread and a bear spread at adjacent strikes', 'It profits most when the underlying finishes near the middle strike', 'It has limited loss and limited profit', 'It has unlimited profit potential'], a: 'A,B,C',
    r: 'A butterfly is bounded on both sides: maximum profit at the middle strike and maximum loss capped at the net premium paid. It has no unlimited upside.',
  },
  {
    c: '4', t: 'Single choice',
    q: 'The buyer of a put option is, in effect:',
    o: ['Insured against a fall in the underlying, having paid a premium for that insurance', 'Obliged to sell the underlying at the strike', 'Exposed to unlimited loss', 'Guaranteed a profit if the underlying falls'], a: 'A',
    r: 'The put is a right rather than an obligation, so the loss is capped at the premium. A profit requires the fall to exceed the premium paid.',
  },

  // -------------------------------------------------------------- Chapter 10 extra
  {
    c: '10', t: 'Single choice',
    q: 'A CFD provider\u2019s terms state that the client is the beneficial owner of the underlying. This is:',
    o: ['A misleading statement, because a CFD confers no beneficial ownership of the underlying', 'Correct, because the CFD is collateralised', 'Correct for long positions only', 'Correct if the provider holds the shares'], a: 'A',
    r: 'A CFD is a contract for the difference: it creates no ownership, no voting rights and no direct dividend entitlement. Any dividend reaches the account only as a contractual adjustment.',
  },
  {
    c: '10', t: 'Multiple response',
    q: 'Which statements about the financing cost of a CFD are correct?',
    o: ['It is charged on the leveraged portion of the position', 'It is usually referenced to an interbank rate plus a spread', 'A long position generally pays financing and a short position may receive it', 'It is a one-off charge at inception'], a: 'A,B,C',
    r: 'Financing accrues daily on the financed amount, referenced to a market rate plus the provider\u2019s spread. A short position may earn a rate reflecting the collateral posted.',
  },
  {
    c: '10', t: 'Calculation',
    q: 'A long CFD position of SGD 50,000 is financed at 4% per annum. What is the approximate daily financing charge, using a 360-day year?',
    o: ['SGD 1.67', 'SGD 5.56', 'SGD 55.60', 'SGD 200.00'], a: 'B',
    r: '$$50{,}000 \\times 4\\% / 360 = 5.56$$ per day.',
  },
  {
    c: '10', t: 'Single choice',
    q: 'Which is the most accurate description of a CFD provider\u2019s conflict of interest with its client?',
    o: ['The provider is typically the counterparty to the client\u2019s trade, so the client\u2019s loss can be the provider\u2019s gain', 'The provider earns only commission and has no directional exposure', 'The provider acts as an exchange and matches clients anonymously', 'There is no conflict because prices come from the underlying market'], a: 'A',
    r: 'Where the provider is the counterparty rather than an agent, the client\u2019s loss is the provider\u2019s gain, which is why hedging, disclosure and conduct rules matter.',
  },

  // -------------------------------------------------------------- Chapter 11 extra
  {
    c: '11', t: 'Single choice',
    q: 'A counterparty to a long-dated OTC swap is downgraded sharply. Which risk has most directly increased?',
    o: ['Credit risk on the position', 'Market risk on the underlying', 'Operational risk', 'Reinvestment risk'], a: 'A',
    r: 'A downgrade raises the probability of default on the exposure, so the credit risk on the in-the-money position rises. The underlying has not moved.',
  },
  {
    c: '11', t: 'Multiple response',
    q: 'Which statements about currency risk in structured products are correct?',
    o: ['A note denominated in a foreign currency exposes the investor to the exchange rate on both coupon and principal', 'Hedging the currency removes the exposure but may cost yield', 'Currency risk is irrelevant if the issuer is highly rated', 'A dual currency structure deliberately embeds currency exposure'], a: 'A,B,D',
    r: 'Issuer creditworthiness has no bearing on exchange-rate movements, so a strong issuer does not remove currency risk.',
  },
  {
    c: '11', t: 'Single choice',
    q: 'Which risk is most relevant to an investor who may need to sell a structured note before maturity?',
    o: ['Liquidity risk, because there may be no secondary market or only at a wide discount', 'Market risk only', 'Operational risk', 'Settlement risk'], a: 'A',
    r: 'Early exit from a bespoke note depends on the issuer quoting a price, so the risk that the exit price is poor is a liquidity risk.',
  },
  {
    c: '11', t: 'Calculation',
    q: 'A portfolio of SGD 1,000,000 has a one-year 99% VaR of 8%. What loss does this indicate?',
    o: ['SGD 8,000', 'SGD 80,000', 'SGD 800,000', 'SGD 8,000,000'], a: 'B',
    r: '$$1{,}000{,}000 \\times 8\\% = 80{,}000$$, exceeded with a 1% probability over one year under the model.',
  },

  // -------------------------------------------------------------- Chapter 12 extra
  {
    c: '12', t: 'Scenario',
    q: 'A client holds a concentrated position in a single listed share and wants to protect it over three months without selling. Which is the most direct solution?',
    o: ['Buy a put option on the share, or sell a futures contract on it', 'Buy a call option on the share', 'Buy more of the share', 'Invest in a money market fund'], a: 'A',
    r: 'Protecting a long position requires a short exposure: a protective put or a short futures position. A long call adds to the exposure rather than hedging it.',
  },
  {
    c: '12', t: 'Scenario',
    q: 'A client wants a fixed, known cost for converting SGD to USD in six months but also wants to benefit if SGD strengthens. Which structure best fits?',
    o: ['A USD call option, which caps the cost while preserving the upside', 'A forward, which locks the rate in both directions', 'A USD put option', 'A currency swap with no optionality'], a: 'A',
    r: 'An option pays for certainty only if it is exercised, so it caps the cost while leaving the client free to transact at a better spot rate. A forward removes that freedom. A put would hedge the wrong direction.',
  },
  {
    c: '12', t: 'Multiple response',
    q: 'A retail client is offered a note with 120% participation and no principal protection. Which concerns are appropriate?',
    o: ['The client can lose part or all of the principal', 'The enhanced participation is funded by the absence of protection', 'The issuer\u2019s credit standing matters', 'The note is suitable for any client because participation exceeds 100%'], a: 'A,B,C',
    r: 'Participation above 100% is paid for by removing the floor, so the client bears full downside. Suitability must be assessed; a high participation rate is not itself an indicator of suitability.',
  },
  {
    c: '12', t: 'Calculation',
    q: 'A client has SGD 200,000 and wants at least SGD 195,000 returned after one year. If a one-year zero-coupon instrument yields 3%, how much is left to spend on optionality?',
    o: ['About SGD 5,000', 'About SGD 10,680', 'About SGD 15,534', 'About SGD 19,417'], a: 'B',
    r: 'The sum needed today to reach the 195,000 floor in one year is $$195{,}000 / 1.03 \\approx 189{,}320$$. The residual available for optionality is $$200{,}000 - 189{,}320 \\approx 10{,}680$$.',
  },

  // ---------------------------------------------------------------- Appendix D
  {
    c: 'appendix-D', t: 'Calculation',
    q: 'Using the cost-of-carry model with continuous compounding, a share trades at 50, the risk-free rate is 4% and the dividend yield is 1%. What is the one-year futures price?',
    o: ['48.51', '51.52', '52.00', '55.20'],
    a: 'b',
    r: '$$F = Se^{(r-q)T} = 50 \\times e^{0.03} \\approx 51.52$$.',
  },
  {
    c: 'appendix-D', t: 'Calculation',
    q: 'An equity index futures contract has a multiplier of SGD 50 and a price of 3,200. How many contracts hedge a SGD 8 million portfolio with a beta of 0.9?',
    o: ['45', '50', '60', '64'],
    a: 'a',
    r: '$$N = \\frac{0.9 \\times 8{,}000{,}000}{3{,}200 \\times 50} = 45$$.',
  },
  {
    c: 'appendix-D', t: 'Calculation',
    q: 'A bond portfolio has a modified duration of 6 and a value of SGD 20 million. The cheapest-to-deliver bond has a modified duration of 7.5 and the futures contract is priced at 110 with a multiplier of SGD 1,000. How many contracts are needed to hedge the portfolio?',
    o: ['145', '150', '160', '175'],
    a: 'a',
    r: 'The contract value is $$110 \\times 1{,}000 = 110{,}000$$, so $$N = \\frac{6 \\times 20{,}000{,}000}{7.5 \\times 110{,}000} \\approx 145.5$$, that is 145 whole contracts.',
  },
  {
    c: 'appendix-D', t: 'Calculation',
    q: 'A CPPI portfolio is worth 500 with a floor of 450 and a multiplier of 4. What is the allocation to the risky asset?',
    o: ['50', '100', '200', '450'],
    a: 'c',
    r: 'Cushion $$= 500 - 450 = 50$$, so the risky allocation is $$4 \\times 50 = 200$$.',
  },
  {
    c: 'appendix-D', t: 'Calculation',
    q: 'A range accrual note pays 6% per annum on a 30/360 basis and accrues on 75% of the days in a 180-day period. What coupon accrues for that period?',
    o: ['2.25%', '3.00%', '4.50%', '6.00%'],
    a: 'a',
    r: '$$6\\% \\times \\frac{180}{360} \\times 75\\% = 2.25\\%$$.',
  },
  {
    c: 'appendix-D', t: 'Calculation',
    q: 'A CBBC has an underlying at 1,100, a strike of 1,000 and a call price of 1,050. What is the theoretical price of the contract?',
    o: ['50', '100', '1,050', '1,100'],
    a: 'a',
    r: 'The theoretical price of a CBBC is the underlying less the call price: $$1{,}100 - 1{,}050 = 50$$.',
  },
  {
    c: 'appendix-D', t: 'Calculation',
    q: 'A warrant has a share price of 3.00, an exercise price of 2.40 and a conversion ratio of two warrants per share. What is the value of one warrant on exercise, ignoring premium?',
    o: ['0.30', '0.60', '1.20', '2.40'],
    a: 'a',
    r: 'Shares received per warrant are $$1/2$$, so value $$= (3.00 - 2.40) \\times \\frac{1}{2} = 0.30$$. Equivalently $$\\frac{3.00}{2} - \\frac{2.40}{2}$$.',
  },

  // ---------------------------------------------------------------- Appendix A
  {
    c: 'appendix-A', t: 'Calculation',
    q: 'A CPPI portfolio is worth 1,000 with a floor of 900 and a multiplier of 4. The risky asset then falls 10% while the safe asset is unchanged. What is the new portfolio value and the new risky allocation?',
    o: ['960 and 240', '980 and 320', '1,000 and 400', '940 and 160'],
    a: 'a',
    r: 'Risky was $$4 \\times 100 = 400$$ and safe was 600. Risky falls to 360, so the portfolio is $$360 + 600 = 960$$. The new cushion is $$960 - 900 = 60$$, giving a risky allocation of $$4 \\times 60 = 240$$.',
  },
  {
    c: 'appendix-A', t: 'Calculation',
    q: 'In the same CPPI example the risky asset instead rises 10%. What is the new portfolio value and the new risky allocation?',
    o: ['1,040 and 440', '1,040 and 560', '1,100 and 400', '1,000 and 400'],
    a: 'a',
    r: 'Risky rises to 440, so the portfolio is $$440 + 600 = 1,040$$. The cushion becomes $$1{,}040 - 900 = 140$$, giving a risky allocation of $$4 \\times 140 = 560$$. The allocation of 560 refers to the next period; the value after the move is 1,040 with 440 currently in the risky asset.',
  },

  // ---------------------------------------------------------------- Appendix B
  {
    c: 'appendix-B', t: 'Single choice',
    q: 'A product highlights sheet for a structured product must present:',
    o: ['The key features, risks and costs in a concise, standardised format', 'Only the historical performance of the product', 'Only the issuer\u2019s credit rating', 'The full text of the prospectus'],
    a: 'a',
    r: 'The highlights sheet is a short, standardised summary supporting comparison across products. It supplements rather than replaces the prospectus.',
  },
  {
    c: 'appendix-B', t: 'Multiple response',
    q: 'Which statements about the product highlights sheet are correct?',
    o: ['It must be fair and balanced', 'It should identify what the product is and its key risks', 'It may omit the risks if the product is capital protected', 'It supports comparison between similar products'],
    a: 'a,b,d',
    r: 'A capital-protected product still carries issuer credit risk and liquidity risk, so risks cannot be omitted; that omission would also breach the fair-and-balanced requirement.',
  },

  // ---------------------------------------------------------------- Appendix C
  {
    c: 'appendix-C', t: 'Calculation',
    q: 'A futures contract has a multiplier of SGD 50 and a tick size of 0.2 index points. What is the value of one tick?',
    o: ['SGD 0.20', 'SGD 10', 'SGD 50', 'SGD 100'],
    a: 'b',
    r: 'Tick value $$= \\text{tick size} \\times \\text{multiplier} = 0.2 \\times 50 = 10$$.',
  },
  {
    c: 'appendix-C', t: 'Calculation',
    q: 'A futures contract with a multiplier of SGD 25 moves from 4,000 to 4,008. What is the gain on one long contract?',
    o: ['SGD 8', 'SGD 200', 'SGD 800', 'SGD 2,000'],
    a: 'b',
    r: '$$(4{,}008 - 4{,}000) \\times 25 = 200$$.',
  },

  // ---------------------------------------------------------------- Appendix E
  {
    c: 'appendix-E', t: 'Single choice',
    q: 'A review question asks which statements are true and then offers four lettered combinations. The question is testing:',
    o: ['Recall of a single definition', 'Whether each statement can be evaluated independently and the results then combined', 'The ability to compute a price', 'Knowledge of the examiner\u2019s identity'],
    a: 'b',
    r: 'Combination questions reward evaluating each statement separately, then choosing the option that matches exactly the set of true statements.',
  },
  {
    c: 'appendix-E', t: 'Multiple response',
    q: 'Which exam techniques help with combination questions?',
    o: ['Mark each statement true or false before reading the options', 'Eliminate options that include a statement you know to be false', 'Look for two options that differ by only one statement and decide that statement', 'Choose the longest option because it is usually correct'],
    a: 'a,b,c',
    r: 'Statement-by-statement marking and elimination are sound. Option length carries no information, and relying on it is a guessing heuristic.',
  },

  // ---------------------------------------------------------------- Appendix F
  {
    c: 'appendix-F', t: 'Single choice',
    q: 'The essential readings listed for CM-SIP are best used:',
    o: ['As a substitute for the study guide', 'As the primary source whenever the guide summarises a detail', 'Only after the examination has been sat', 'As a list to memorise without reading the underlying documents'],
    a: 'b',
    r: 'The readings are the primary sources; the guide summarises them, so they are where ambiguous or examinable detail should be resolved.',
  },
  {
    c: 'appendix-F', t: 'Multiple response',
    q: 'Which are listed as essential readings for CM-SIP?',
    o: ['The Securities and Futures Act', 'The Code on Collective Investment Schemes', 'The MAS product highlights sheet requirements for structured products', 'The internal trading manual of a single bank'],
    a: 'a,b,c',
    r: 'The readings are public legislation, MAS notices and industry codes. One firm\u2019s internal manual is not an essential reading.',
  },

  // ---------------------------------------------------------------- Appendix G
  {
    c: 'appendix-G', t: 'Single choice',
    q: 'Applied to a call option, "in the money" means:',
    o: ['The underlying exceeds the strike', 'The underlying is below the strike', 'The option has already expired', 'The premium exceeds the intrinsic value'],
    a: 'a',
    r: 'A call is in the money when the underlying is above the strike, so exercise would produce a positive payoff.',
  },
  {
    c: 'appendix-G', t: 'Single choice',
    q: '"Contango" describes a futures market in which:',
    o: ['Futures prices fall as maturity lengthens', 'Futures prices rise as maturity lengthens', 'Spot exceeds futures at every maturity', 'All contract months trade at the same price'],
    a: 'b',
    r: 'Contango is an upward-sloping curve; backwardation is the reverse, with spot above futures.',
  },
  {
    c: 'appendix-G', t: 'Single choice',
    q: 'A "covered call" involves:',
    o: ['Buying a call and holding cash', 'Holding the underlying and selling a call against it', 'Selling a put and buying the underlying', 'Buying a put and selling a call'],
    a: 'b',
    r: 'The long underlying covers the short call, capping upside in exchange for the premium received.',
  },
  {
    c: 'appendix-G', t: 'Single choice',
    q: 'The "notional amount" of a derivative is:',
    o: ['The market value of the contract', 'The reference amount on which payments are calculated', 'The premium paid for the contract', 'The margin posted with the clearing house'],
    a: 'b',
    r: 'The notional is a reference principal used to scale payments. It is usually not exchanged, and it is not the contract\u2019s value.',
  },
  {
    c: 'appendix-G', t: 'Single choice',
    q: 'A "mandatory call event" for a CBBC occurs when:',
    o: ['The issuer elects to redeem early', 'The underlying touches the call price', 'The investor fails to meet a margin call', 'The contract reaches its expiry date'],
    a: 'b',
    r: 'The event is triggered by the underlying reaching the call price, after which the contract terminates.',
  },
  {
    c: 'appendix-G', t: 'Single choice',
    q: '"Delta hedging" a short option position involves:',
    o: ['Trading the underlying to offset the option\u2019s delta exposure', 'Buying an identical option to close the position', 'Holding the position untouched until expiry', 'Selling the underlying without regard to the option\u2019s sensitivity'],
    a: 'a',
    r: 'Delta hedging offsets the first-order sensitivity of the option position by trading the underlying in the quantity the delta implies.',
  },
  {
    c: 'appendix-G', t: 'Single choice',
    q: 'A "participation rate" in a structured product expresses:',
    o: ['The share of the underlying\u2019s upside passed to the investor', 'The issuer\u2019s underwriting fee', 'The probability that the issuer defaults', 'The margin required against the position'],
    a: 'a',
    r: 'It is the proportion of an index or asset gain the note delivers, with the remainder funding the structure\u2019s protection or margin.',
  },
  {
    c: 'appendix-G', t: 'Single choice',
    q: 'A "backwardated" futures market is one in which:',
    o: ['Futures prices fall as maturity lengthens', 'Futures prices rise as maturity lengthens', 'The underlying is impossible to deliver', 'All contract months trade at one price'],
    a: 'a',
    r: 'Backwardation is a downward-sloping curve, typically reflecting a convenience yield that exceeds the carry cost.',
  },
];
