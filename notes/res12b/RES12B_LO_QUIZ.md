# RES 12B — 60-question mock quiz (learning-objective mapped)

**In this repo:** the 60 questions below also live in the question bank
(`notes/res12b/RES12B_QUESTIONS.md`, RES 12B bank numbers 409–439 for Q1–Q31
and 523–551 for Q32–Q60), so they can be drawn in mock exams, and as the
interactive quiz at `/practice/res12b/?type=lo` ("Learning-objective quiz")
on the study site.

**Source:** `ryantjx/cmfas-exams`, guide files fetched fresh from GitHub raw on 2026-11-11
(`notes/res12b/guide/`, main branch). Exam format verified in `scripts/lib/exams.mjs` and
`notes/res12b/RES12B.md`: **60 MCQ, 90 minutes, 75% to pass (45/60)**. Combined paper
(RES 1B + RES 2B); **failing either part fails the whole paper**. Penalty amounts are not
tested (guide intro). Law current at 30 September 2023 per the official guide.

**Status: FINAL — checked 2026-11-11: 60 questions, 60 answer lines, answer-key table cross-checked mechanically against the question bodies with zero mismatches (A ×15, B ×15, C ×15, D ×15).** Added to the repo 2026-11-11 as `notes/res12b/RES12B_LO_QUIZ.md`; the questions are in the bank (`RES12B_QUESTIONS.md` 409–439 and 523–551) and served as the interactive learning-objective quiz. Written for Ryan's RES 12B sitting Thu 12 Nov 2026, 09:30 SGT.

**Split:** 31 questions RES 1B (Q1–Q31) + 29 questions RES 2B (Q32–Q60).
**Answer key:** A ×15, B ×15, C ×15, D ×15. "All of the above" is never the correct answer
(and is not used at all in this draft).

**How this draft was built:** every explicit "Learning Objectives" block was extracted
verbatim; chapters without one (1B-02, 1B-07) have DERIVED objectives labelled as such.
Note a premise correction: contrary to the brief, the 2B chapters **do** contain LO blocks
(2B-01, 2B-02, 2B-03, 2B-04, 2B-05, 2B-06 all have them), so those are quoted as stated,
with a few DERIVED splits added where one stated LO covers several testable topics
(2B-01, 2B-03). 2B-05's ten LOs substantially repeat 1B-04's five, so several 1B-04
questions are cross-mapped to the matching 2B-05 LOs — flagged with † in the coverage table.
The existing 499-question bank (`RES12B_QUESTIONS.md`) was used only for de-duplication:
no stem or option set was copied from it. Standard threshold questions (BCR, CPFIS limits,
CAR/CKA) necessarily test the same numbers, but every stem, scenario, name and figure set
here is original (e.g. the Appendix G review questions' "Athena" and "Zenia" scenarios and
the guide's gold-futures bucketing and NK225 cross-trade worked examples were NOT reused).

**Appendix note (corrected 2026-11-11):** the appendix files **do** exist in the repo
(`notes/res12b/guide/1b-90-appendix-a…h` and `2b-90-appendix-a…g`, verified HTTP 200 from
raw.githubusercontent.com and listed in the repo tree). Appendix objectives (CAR vs CKA,
fit-and-proper, EIP vs SIP, overseas-listed warning, suspicious transactions) are sourced
from the chapters plus those appendices and the two review-questions appendices
(`1b-90-appendix-g-review-questions.md`, `2b-90-appendix-f-review-questions.md`).

---

## PART A — LEARNING-OBJECTIVE COVERAGE MAP

"Stated" = verbatim LO block in the chapter file. "Derived" = inferred from chapter
headings + the chapter's "Exam cues" section + the final revision checklist.

### RES 1B

| LO | Objective | Source | Tested by |
|---|---|---|---|
| LO1.1 | Distinguish primary and secondary markets and the intermediation each needs | 1B-01, stated | Q4 |
| LO1.2 | Identify each institutional participant and the activity it may lawfully conduct | 1B-01, stated | Q3 |
| LO1.3 | Explain the role, powers and rule-making authority of MAS, SGX, SGX RegCo, SGX-ST, CDP, SGX-DT, SGX-DC | 1B-01, stated | Q4 |
| LO1.4 | Compare Mainboard and Catalist admission requirements | 1B-01, stated | Q1 |
| LO1.5 | Explain listing methods, GDRs, the IPO and introduction routes, and continuing obligations | 1B-01, stated | Q2 |
| LO2.1 | (Derived) CMS licence grant: base capital requirements, applicant and management criteria, lapse/revocation/suspension | 1B-02, derived | Q5 |
| LO2.2 | (Derived) Appointed / provisional / temporary representatives, one-principal rule, RNF, notification clocks | 1B-02, derived | Q8 |
| LO2.3 | (Derived) Advertising rules, incl. mandatory MAS non-review statement and prior written approval | 1B-02, derived | Q9 |
| LO2.4 | (Derived) Which assessment applies to a SIP account (CAR for listed, CKA for unlisted), validity, failure consequences | 1B-02, derived | Q6, Q7 |
| LO2.5 | (Derived) Privacy/confidentiality duties (Banking Act s.47, PDPA, Do Not Call Registry) | 1B-02, derived | Q9 |
| LO2.6 | (Derived) Contract notes, statements, books/records retention, audit, customer money vs customer assets segregation | 1B-02, derived | Q10 |
| LO3.1 | State the territorial and extraterritorial scope of the market-conduct provisions | 1B-03, stated | Q11 |
| LO3.2 | Identify which provision catches a described behaviour, and the mental element it requires | 1B-03, stated | Q12 |
| LO3.3 | Apply the insider-trading definitions to connected and non-connected persons | 1B-03, stated | Q13 |
| LO3.4 | Distinguish false trading, manipulation, false statements and deceptive devices | 1B-03, stated | Q12 |
| LO3.5 | Explain hawking, short selling, marking and specified-product lending rules | 1B-03, stated | Q14 |
| LO4.1 | Define ethics and explain why it matters to market integrity | 1B-04, stated | Q15 |
| LO4.2 | Apply the four-component ethical framework to a securities-dealing situation | 1B-04, stated | Q15 |
| LO4.3 | Identify the threats that create an ethical dilemma | 1B-04, stated | Q19 |
| LO4.4 | Recall the six code-of-ethics principles and the six standards of professional conduct | 1B-04, stated | Q17, Q18 |
| LO4.5 | Apply the six-step process to resolve a dilemma, and document it | 1B-04, stated | Q16 |
| LO5.1 | Run the client on-boarding process, including KYC and risk profiling | 1B-05, stated | Q21 |
| LO5.2 | Classify a client as retail, AI, II or EI and state the consequence | 1B-05, stated | Q20 |
| LO5.3 | Present a coherent investment or trading strategy matched to the risk profile | 1B-05, stated | Q21 |
| LO5.4 | Apply best execution to agent, principal and cross-trade situations | 1B-05, stated | Q23 |
| LO5.5 | Explain the internal controls and credit-risk disciplines that surround dealing | 1B-05, stated | Q22 |
| LO6.1 | Distinguish CPFIS-OA from CPFIS-SA and their permitted products | 1B-06, stated | Q24 |
| LO6.2 | Explain the account-opening and operating process, including the agent bank's role | 1B-06, stated | Q24 (setup) |
| LO6.3 | Apply the investible-balance and instrument limits | 1B-06, stated | Q24 |
| LO6.4 | State how dividends, losses and charges are treated | 1B-06, stated | Q25 |
| LO6.5 | Explain release at 55, and the treatment of bankruptcy and death | 1B-06, stated | Q26, Q27 |
| LO7.1 | (Derived) Distinguish placement, layering and integration; identify the applicable statute (CDSA / TSOFA / MACMA / Penal Code) | 1B-07, derived | Q28 |
| LO7.2 | (Derived) Apply the risk-based approach, the three lines of defence, board/senior-management accountability | 1B-07, derived | Q31 |
| LO7.3 | (Derived) Perform CDD/KYC: beneficial owners (>25%), simplified CDD vs EDD, PEP controls, ongoing monitoring | 1B-07, derived | Q29 |
| LO7.4 | (Derived) Apply the S$20,000 verification/screening threshold, 5-year record retention, STR duty (STRO/CAD, copy to MAS, within 15 business days of referral), no tipping-off | 1B-07, derived | Q30 |
| LO7.5 | (Derived) Apply sanctions screening / freezing / reporting and enterprise-wide risk assessment and training refresh | 1B-07, derived | Q31 |

### RES 2B

| LO | Objective | Source | Tested by |
|---|---|---|---|
| LO2B1.1 | Understand the basic features of the capital markets, incl. primary/secondary markets, exchanges (OTC and regulated) and financial intermediaries | 2B-01, stated | Q4 † (shared 1B/2B material per guide intro) |
| LO2B1.2 | Understand the different business activities undertaken by institutional participants | 2B-01, stated | Q35 |
| LO2B1.3 | Understand the roles of each regulatory body and SRO: MAS, SGX, SGX RegCo, SGX-ST, CDP, SGX-DT, SGX-DC, IFSG, ICE Clear Singapore, APEX, APEX Clear | 2B-01, stated | Q33, Q34 |
| LO2B1.4 | Understand the origin of the rules governing trading/clearing of derivatives (SFA, SFR, SGX-ST Mainboard/Catalist/Trading Rules, CDP Clearing/DVP/Depository Rules, SGX-DT Futures Trading Rules, SGX-DC Clearing Rules, IFSG/ICE Clear/APEX/APEX Clear rules) | 2B-01, stated | Q33 |
| LO2B1.5 | (Derived) Compare bank licence types; remote trading/clearing member exemption conditions; CDP settlement (T+2, bare trustee, DVP vs FOP); Mainboard vs Catalist | 2B-01, derived | Q32 |
| LO2B2.1 | Understand the regulatory requirements for the grant of a CMS licence | 2B-02, stated | Q36, Q37 |
| LO2B2.2 | Understand the requirements for registration and the obligations of CMS licence holders and their representatives | 2B-02, stated | Q40, Q41 |
| LO2B2.3 | Understand the requirements for notification of appointed representatives under MAS's Representative Notification Framework | 2B-02, stated | Q41 (secondary) |
| LO2B2.4 | Conform to the rules on client identification through account opening, information/documentation required, maintaining customer confidentiality | 2B-02, stated | Q38 (secondary) |
| LO2B2.5 | Manage customer accounts properly: receiving instructions, execution, records of orders, documentation requirements | 2B-02, stated | Q38 |
| LO2B2.6 | Report positions and keep records as required | 2B-02, stated | Q39 |
| LO2B2.7 | Adhere to the rules on customers' asset protection | 2B-02, stated | Q39 |
| LO2B3.1 | Understand what constitutes market conduct and prohibited conduct | 2B-03, stated | Q42 |
| LO2B3.2 | Understand prohibited conduct in the capital markets, particularly in relation to derivatives trading | 2B-03, stated | Q42, Q43 |
| LO2B3.3 | Understand the various types of market conduct requirements and trading misconduct under the SFA and SFR(LCB) | 2B-03, stated | Q43, Q46 |
| LO2B3.4 | (Derived) Define false trading/market rigging (four limbs), wash trades, hunting for stops, price manipulation and cornering | 2B-03, derived | Q42, Q44 |
| LO2B3.5 | (Derived) Apply bucketing, front running (SFR(LCB) 44), cross-trade exposure rules, churning, overtrading and pre-arranged trades | 2B-03, derived | Q43, Q45 |
| LO2B3.6 | (Derived) Apply insider-trading definitions, exceptions (ss 222–225, 228, 229) and defences (s.231) | 2B-03, derived | Q46 |
| LO2B4.1 | Understand what OTC derivatives are | 2B-04, stated | Q47 |
| LO2B4.2 | Describe the regulatory regime for dealing in OTC derivatives | 2B-04, stated | Q47, Q48, Q49 |
| LO2B4.3 | Understand general practices for dealing in OTC derivatives | 2B-04, stated | Q49, Q50 |
| LO2B5.1 | Define ethical behaviour in the context of derivatives trading | 2B-05, stated | Q15 † |
| LO2B5.2 | Explain the importance of ethical behaviour | 2B-05, stated | Q15 †, Q19 † |
| LO2B5.3 | Recognise and interpret ethical issues arising from ethical dilemmas | 2B-05, stated | Q19 † |
| LO2B5.4 | Apply the ethical framework to resolve ethical dilemmas | 2B-05, stated | Q15 † |
| LO2B5.5 | Define and describe professional ethics and ethical expectations for derivatives representatives | 2B-05, stated | Q17 †, Q18 † |
| LO2B5.6 | Recognise and use the codes of ethics and standards of professional conduct as guidelines to best practice | 2B-05, stated | Q52, Q54 |
| LO2B5.7 | Recognise and use the Blue Book (SFEMC) and the FX Global Code (BIS) | 2B-05, stated | Q53 |
| LO2B5.8 | Demonstrate the professional ethical standards expected of derivatives trading representatives | 2B-05, stated | Q51, Q54 |
| LO2B5.9 | Recognise and demonstrate recommended procedures for compliance in derivatives trading | 2B-05, stated | Q17 † (secondary) |
| LO2B5.10 | Recognise and apply best execution practices in derivatives trading | 2B-05, stated | Q51 |
| LO2B6.1 | Understand the trading strategy process: formulation and implementation | 2B-06, stated | Q60 (secondary) |
| LO2B6.2 | Understand client servicing practices recommended by industry standards | 2B-06, stated | Q57 (secondary) |
| LO2B6.3 | Understand the processes for CAR, CKA and SIP trading account opening | 2B-06, stated | Q55, Q56, Q57, Q58 |
| LO2B6.4 | Understand the different types of risk (institutional and individual) and appropriate risk management actions | 2B-06, stated | Q59, Q60 |

† Cross-mapped: the 2B-05 ethics LOs repeat the 1B-04 syllabus (the guide states the
market-participants, licensing, market-conduct and ethics material is shared), so the
1B-04 questions are the test vehicle; Q51–Q54 add derivatives-specific ethics items
(PFOF, suitability, Blue Book/FX Global Code, priority of transactions).

**Appendix objectives** (sourced from the appendix files and the
two review-questions appendices): CAR vs CKA → Q6, Q7, Q21, Q55, Q56; fit-and-proper →
Q5 (management criteria, via BCR question's distractors) and Q41; EIP vs SIP → Q58;
overseas-listed risk warning → Q38 (Form 14 distractor) and Q58; suspicious-transaction
recognition → Q28, Q29, Q30.

---

## PART B — THE 60 QUESTIONS

**Instructions to the candidate:** 60 questions, 90 minutes, one best answer each.
Pass mark 45/60 (75%). Both parts must be passed — failing either the RES 1B half or
the RES 2B half fails the whole paper.

### RES 1B — Questions 1–31

**Q1. [LO1.4 | RES 1B §1.4]**
A Singapore company with a three-year operating track record reports consolidated
pre-tax profit of S$28 million for its latest financial year and applies for a Mainboard
listing. Which statement is correct?
A. It meets the Mainboard profit test, because the threshold is S$25 million.
B. It does not meet the profit test, which requires at least S$30 million; it could instead
qualify under a market-capitalisation route if it meets that route's conditions.
C. It must list on Catalist, because Catalist is the only board for companies below
S$30 million profit.
D. It meets the profit test, because a three-year track record substitutes for the profit
threshold.
**Answer: B.** The Mainboard profit test requires at least S$30 million consolidated
pre-tax profit in the latest financial year plus three years' operating track record; the
other routes require market capitalisation of at least S$150 million (with profit) or
S$300 million (with operating revenue).

**Q2. [LO1.5 | RES 1B §1.4]**
A company already listed on its home exchange seeks a secondary listing on the SGX
Mainboard. It also plans to raise funds in Singapore through GDRs. Which statement is
correct?
A. A secondary listing takes on SGX-ST's continuing listing obligations in full.
B. The company need not inform SGX-ST of disclosures made to its home exchange.
C. GDRs may be offered to retail investors in Singapore, provided the offer document
is in English.
D. The company must announce information to SGX-ST at the same time as it releases
it to its home exchange, and GDRs may be offered only to institutional and accredited
investors.
**Answer: D.** A secondary listing does not take on SGX-ST continuing obligations, but
disclosure to SGX-ST must be simultaneous with disclosure to the home exchange; GDRs
are institutional and accredited investors only, with disclosure in English.

**Q3. [LO1.2 | RES 1B §1.2]**
A Wholesale Bank in Singapore offers a Singapore-resident individual a SGD fixed deposit
of S$100,000 and an interest-bearing SGD savings account, without MAS approval. Which
statement is correct?
A. The bank may not accept the S$100,000 fixed deposit, because Wholesale Banks may
accept SGD fixed deposits of at least S$250,000, and may not pay interest on a SGD
savings account for a Singapore-resident natural person without MAS approval.
B. The bank may accept the fixed deposit but must pay interest on the savings account.
C. The bank may accept both, because Wholesale Banks may take deposits of any amount
in any currency.
D. The bank may not accept either, because Wholesale Banks may not take SGD deposits
at all.
**Answer: A.** Wholesale Banks may accept SGD fixed deposits of at least S$250,000, and a
SGD savings/current account for a Singapore-resident natural person should not be
interest-bearing without MAS's prior approval. (Unrestricted any-amount deposit-taking
is a Full Bank power; a ban on all SGD deposits is the Merchant Bank rule.)

**Q4. [LO1.1, LO1.3 | RES 1B §1.1]**
A company raises new capital by issuing shares to the public through an issue manager.
The shares then trade daily on SGX-ST, and a trade executed on Monday settles on
Wednesday. Which statement best describes this?
A. Both the issue and the daily trading are primary-market activity, and settlement is
T+1.
B. The issue is secondary-market activity because the public supplies the capital.
C. The issue is primary-market activity (capital raising, intermediated by the issue
manager); the daily trading is secondary-market activity, and settlement is T+2, with
CDP holding the book-entry securities as bare trustee.
D. The issue is primary-market activity, but CDP holds the securities as legal owner
for its own account.
**Answer: C.** The primary market is where businesses raise capital by issuing securities;
the secondary market is trading thereafter, letting investors manage and transfer risk.
All SGX trades settle T+2, and CDP holds immobilised book-entry securities as bare
trustee for depositors.

**Q5. [LO2.1 | RES 1B §2.2]**
A CMS licence holder is both a Trading Member (base capital requirement S$1 million)
and an Introducing Broker (S$500,000) for securities dealing. What is its base capital
requirement?
A. S$1 million — where more than one BCR applies, the highest applicable amount is
required.
B. S$500,000 — the lower requirement applies where the firm is an Introducing Broker.
C. S$1.5 million — the two requirements are added together.
D. S$50,000 — the "other eligible firms" tier applies to all dual-capacity firms.
**Answer: A.** The five BCR tiers are S$5m (clearing member), S$1m (trading member),
S$1m (non-member), S$500k (introducing broker), S$50k (other eligible firms); where more
than one applies, the highest is required.

**Q6. [LO2.4 | RES 1B §2.5]**
A retail client with no relevant diploma or professional finance qualification has
executed five qualifying transactions in listed SIPs in the preceding three years and
now wants to open a listed SIP trading account. What is the position?
A. No assessment is needed, because five transactions show sufficient experience.
B. A CKA is required, because a CKA applies to all SIP accounts.
C. A CAR is required, and the five transactions do not satisfy the substitute test,
which requires six qualifying transactions in the preceding three years; a CAR is
valid for three years.
D. A CAR is required, but it is valid for only one year.
**Answer: C.** A listed SIP account requires a Customer Account Review (CAR), valid for
three years; the transaction substitute is six qualifying transactions in the preceding
three years (or three consecutive years' relevant experience in the preceding ten).
CKA is for unlisted SIPs and is valid for one year.

**Q7. [LO2.4 | RES 1B §2.5]**
A retail client is assessed as lacking the knowledge and experience to transact in an
unlisted SIP and insists on trading it without receiving any advice. What must the firm
do?
A. Refuse to transact unless the firm is also an exempt financial adviser providing
the required advisory service; for an unlisted SIP the firm should offer advice, and
if declined, obtain written confirmation and explain that suitability is the
customer's responsibility.
B. Allow the trade after obtaining the client's written confirmation of intent to
proceed — that is sufficient for both listed and unlisted SIPs.
C. Allow the trade, because a written disclaimer removes the firm's liability.
D. Allow the trade after a senior manager approves the account, regardless of the
CKA outcome.
**Answer: A.** Where a customer fails the CKA for an unlisted SIP, the firm cannot
transact unless it is also an exempt financial adviser providing the required advisory
service. (Written confirmation plus a written explanation of features and risks is the
route for a failed CAR on a *listed* SIP.) A disclaimer does not remove SFA/FAA
liability.

**Q8. [LO2.2 | RES 1B §2.3]**
A CMS licence holder changes its principal place of business and informs MAS 20 days
later. In the same month, an appointed representative changes his residential address
and informs his principal 10 days later, and the principal notifies MAS 20 days after
the change. Which statement is correct?
A. Only the firm's notification was late; the representative's notifications were in
time.
B. Only the representative's notification to the principal was late.
C. Neither notification was late, because both clocks run for 21 days.
D. Both deadlines were breached: a holder must inform MAS within 14 days of a change
in its particulars, a representative must inform the principal within 7 days, and the
principal must then notify MAS within 14 days.
**Answer: D.** MAS must be informed within 14 days of changes to the holder's name,
principal place of business, regulated activities/products or other prescribed
particulars; a representative reports changes to the principal within seven days, and
the principal reports to MAS within 14 days.

**Q9. [LO2.3, LO2.5 | RES 1B §2.4]**
A CMS licence holder launches a telemarketing campaign for a new product. Its
advertisement omits the statement "This advertisement has not been reviewed by the
Monetary Authority of Singapore", and its callers telephone numbers from a purchased
list without checking the Do Not Call Registry. Which statement is correct?
A. Only the advertisement breaches the rules; telephone marketing has no registry
check requirement.
B. Both the advertisement and the calling breach the rules: product advertisements
must carry the MAS non-review statement and receive documented written approval
before publication, and the Do Not Call Registry must be checked before marketing
calls.
C. Only the calling breaches the rules; the MAS statement is required only for
non-product advertisements.
D. Neither breaches the rules, because the statement is voluntary and purchased lists
are exempt from the registry check.
**Answer: B.** Product advertisements must not be false or misleading, must be fair and
balanced, must carry the statement "This advertisement has not been reviewed by the
Monetary Authority of Singapore", and must have documented written approval before
publication. The Do Not Call Registry must be checked before marketing calls, and
clear, unambiguous consent obtained.

**Q10. [LO2.6 | RES 1B §2.9]**
A CMS licence holder receives money from a retail client as margin for OTC derivatives
trading and deposits it into the firm's own operating account, to be moved to a trust
account the following week. What is the position?
A. This is acceptable, provided the money is moved within five business days.
B. This is acceptable, because customer money may be commingled with firm money
where the client is a retail client.
C. This breaches the rules: retail customer money for OTC derivatives must be
segregated in a trust account, deposited by the next business day, and must not be
commingled with firm money or used for another person's margin, guarantee or credit.
D. This is acceptable, because the segregation requirement applies only to customer
assets, not customer money.
**Answer: C.** Customer money must be deposited in a trust/segregated account by the
next business day; retail OTC-derivatives money must be segregated in trust, never
commingled with firm money, and never used as margin, guarantee or credit for any other
person. (Customer *assets* sit separately in a custody account on trust.)

**Q11. [LO3.1 | RES 1B §3.1]**
A trader physically in Singapore manipulates the price of a stock that is listed only
on a foreign exchange. Has he breached the SFA market-conduct provisions?
A. Yes — the provisions apply to acts in Singapore involving products listed or quoted
inside or outside Singapore, and to acts outside Singapore involving products listed
or quoted on a Singapore organised market.
B. No — the provisions apply only to products listed on SGX-ST.
C. No — the provisions apply only where the trade is settled in Singapore dollars.
D. Yes, but only if the manipulation also affects a Singapore-listed product.
**Answer: A.** The market-conduct provisions have extraterritorial reach in both
directions: acts in Singapore on foreign-listed products, and acts abroad on
Singapore-listed products, are both caught.

**Q12. [LO3.2, LO3.4 | RES 1B §3.4]**
A dealer effects two transactions that maintain the price of a security, intending to
induce others to trade in it. A colleague argues this is only "false trading" because
no false statement was made. Which statement is correct?
A. The colleague is right: maintaining a price can never be manipulation.
B. The colleague is right, because manipulation requires at least three transactions.
C. The colleague is wrong about the label but right that intention is irrelevant.
D. This is securities market manipulation, which requires two or more transactions
with the intention of inducing others to trade; false trading, by contrast, may be
satisfied by recklessness, such as creating a false or misleading appearance of
active trading.
**Answer: D.** Manipulation is effecting two or more transactions that raise, lower,
maintain or stabilise a price with the intention of inducing others to trade. False
trading covers creating a false or misleading appearance of active trading or price,
and may be satisfied by recklessness.

**Q13. [LO3.3 | RES 1B §3.9]**
A person who is not connected to a listed company overhears non-public, price-sensitive
information about it, knows the information is non-public and price-sensitive, and
buys the company's shares, claiming he had no intention to use the information and did
not receive it from an insider. What is the position?
A. He is not liable, because only connected persons can commit insider trading.
B. He is not liable, because liability depends on the source of the information.
C. He is liable only if he also communicates the information to someone else.
D. He can be liable: a non-connected person may be liable merely for knowing the
information is non-public and price-sensitive, regardless of the source and
regardless of any intention not to use it.
**Answer: D.** Inside information is information that is not generally available, is
likely to materially affect price or value, and would influence persons who commonly
invest. A non-connected person can be liable merely knowing it is non-public and
price-sensitive — the private or public nature of the information, not its source,
decides liability.

**Q14. [LO3.5 | RES 1B §3.11]**
A firm lends a client's specified products to a borrower, taking collateral equal to
90% of the market value of the lent products, revalued weekly, with no written
understanding from the retail client. What is the position?
A. This breaches the rules: collateral must generally be at least 100% of market
value, marked to market daily, and the risks must be explained with a written
understanding obtained for non-exempt customers.
B. This is acceptable, because 90% collateral is sufficient where the borrower is a
retail client.
C. This is acceptable, because weekly revaluation is the required standard.
D. This breaches the rules only because the collateral exceeds 85% of market value.
**Answer: A.** For specified-product borrowing and lending, collateral must generally be
at least 100% of market value, marked to market daily; the agreement must cover
capacity, title transfer, collateral, corporate actions, valuation and margin
shortfalls, return, termination, default, fees and governing law, and risks must be
explained with written understanding obtained for non-exempt customers.

**Q15. [LO4.1, LO4.2 | RES 1B §4.2]**
Ethics is defined as "a set of moral principles or rules of conduct that provide
guidance for behaviour when it affects others", and it goes beyond regulation and law.
A dealer applies the ethical framework to a client situation. What is the correct order
of the framework's four components?
A. Serve customers → execute solutions → analyse risks → understand products.
B. Analyse risks → understand products → serve customers → execute solutions.
C. Execute solutions → understand products → serve customers → analyse risks.
D. Understand products and services → analyse risks → execute solutions → serve
customers, all aimed at serving the client's best interests with integrity.
**Answer: D.** The framework has four components, all aimed at serving the client's best
interests with integrity: (1) understand products and services, (2) analyse risks,
(3) execute solutions smoothly, efficiently, transparently and fairly, (4) serve
customers with honesty and integrity.

**Q16. [LO4.5 | RES 1B §4.5]**
A representative discovers a possible ethical breach and wants to resolve it using the
six-step process. What is the correct FIRST step?
A. Evaluate the alternatives.
B. Consult the internal reporting and whistleblowing procedures.
C. Identify the affected parties and the conflicts.
D. Gather the facts, separating fact from assumption.
**Answer: D.** The six-step process is: (1) gather the facts, (2) identify the ethical
and regulatory issues, (3) identify the affected parties and the conflicts, (4) consult
internal reporting and whistleblowing procedures, (5) evaluate the alternatives,
(6) implement the best action, monitor it and document the reasoning.

**Q17. [LO4.4 | RES 1B §4.4]**
A representative has a personal position in a stock he is recommending. He discloses
the conflict in small print at the end of a long document, then proceeds to decide on
the recommendation himself. What is the position?
A. This is acceptable, because any disclosure, however made, discharges the duty.
B. This breaches the standards: conflicts must be avoided or disclosed fully, fairly,
prominently and in plain language, and the representative must refrain from deciding
while conflicted and escalate independently — disclosure is not a licence.
C. This is acceptable, because disclosure is only required for conflicts involving
family members.
D. This breaches the standards only if the client loses money on the recommendation.
**Answer: B.** Conflicts of interest must be avoided, or full, fair, prominent and
plain-language disclosure made; the representative must refrain from deciding while
conflicted. Disclosure does not licence the conflict, and a sales target never converts
an unsuitable product into a recommendation.

**Q18. [LO4.4 | RES 1B §4.4]**
A client offers a representative an expensive gift, and a colleague suggests the
representative help conceal a pricing irregularity. What must the representative do?
A. Decline the gift, because a representative must not offer, solicit or accept any
gift, benefit, compensation or consideration that could reasonably be expected to
compromise independence and objectivity; and dissociate from any violation of the law
rather than knowingly participate in or assist it.
B. Accept the gift if it is declared to the employer, and help conceal the
irregularity if the client asks.
C. Accept the gift, because gifts are prohibited only when given by issuers.
D. Decline the gift but help conceal the irregularity, because loyalty to colleagues
outranks the law.
**Answer: A.** Under independence and objectivity, gifts or benefits that could
reasonably compromise independence or objectivity must not be offered, solicited or
accepted, and internal gifts/entertainment guidelines must be complied with. Under
knowledge of the law, a representative must not knowingly participate in or assist a
violation, and must dissociate from it.

**Q19. [LO4.3 | RES 1B §4.3]**
A representative recommends products he knows are unsuitable for a client, in terms of
risk, because he is under pressure to meet a commission target. Which threat creates
this ethical dilemma?
A. Self-review — he is judging his own recommendation.
B. Influence — the pressure comes from the client.
C. Self-review — he is reviewing the client's portfolio.
D. Self-interest — his own pay, target or position is driving the recommendation.
**Answer: D.** The three threats are self-interest (the representative's own pay, target
or position), self-review (judging one's own work or recommendation) and influence
(pressure from a client, senior, peer or issuer). A sales target never converts an
unsuitable product into a recommendation.

**Q20. [LO5.2 | RES 1B §5.2]**
A retail client meets the prescribed tests to be treated as an accredited investor and
opts in to that classification. What is the main consequence of the reclassification?
A. Nothing changes: accredited investors receive exactly the same protection as
retail investors.
B. She is assumed to be knowledgeable, experienced and financially strong and able to
obtain information, so disclosure, product access, SIP rules and exemptions are
relaxed compared with retail investors, who receive the highest protection.
C. She loses access to all Specified Investment Products.
D. The firm no longer needs to conduct KYC on her.
**Answer: B.** Singapore law accords the highest protection to retail investors, because
accredited, institutional and expert investors are assumed knowledgeable, experienced,
financially strong and able to obtain information. Categorisation changes the
exemptions available, including exemptions from disclosure of certain interests in
underwriting agreements, specified-product borrowing and lending, and dealing in SIPs
or overseas-listed investment products — and it drives product choice, the risks to be
explained and the documentation standard.

**Q21. [LO5.1, LO5.3 | RES 1B §5.2]**
A representative presents a client with a portfolio mix of asset classes, products and
geographies, with reasons for each holding, but has not yet gathered the client's
background, financial objectives, experience, means or investment horizon. The client's
profile was last refreshed two years ago and the representative gives ongoing
execution-related advice. What is the position?
A. This is acceptable, because a portfolio mix with reasons is all that is required.
B. This is acceptable, because risk profiling is required only for accredited
investors.
C. This breaches the process: advice cannot properly precede profiling — sufficient
knowledge of the client's objectives, financial situation and needs must come first —
and where execution-related advice is provided on an ongoing basis the profile and
needs analysis should be refreshed at least once a year.
D. This breaches the process only because the profile is two years old; presenting a
strategy before profiling is permitted.
**Answer: C.** On-boarding must include KYC (for AML/CFT risk and for investment
suitability) and risk profiling covering background, objectives, experience and means,
economic activity, structure and horizon. Advice requires sufficient knowledge of the
client first, and ongoing execution-related advice requires a profile refresh at least
once a year.

**Q22. [LO5.5 | RES 1B §5.5]**
In a dealing firm, the same individual both executes client trades and settles them,
with no independent check, and open trading positions are revalued only monthly. Which
internal-control requirement is breached?
A. Segregation of duties — for example, separating trade execution from settlement —
and the requirement that open positions be marked to market daily with losses
recognised promptly.
B. No requirement is breached, because segregation of duties applies only to
back-office staff.
C. Only the monthly revaluation breaches the rules; combining execution and
settlement is permitted.
D. Only the combined execution and settlement breaches the rules; monthly
revaluation is the required standard.
**Answer: A.** MAS's internal-control guidelines require segregation of duties to prevent
unauthorised or fraudulent transactions (e.g. separating trade execution from
settlement), periodic independent checks, conservative and consistent accounting with
open positions marked to market daily and losses recognised promptly, and management
information systems reporting exposures and P&L at least daily.

**Q23. [LO5.4 | RES 1B §5.4]**
A representative must execute a very large order in an illiquid share for a client.
Which statement best reflects best execution?
A. Best execution means obtaining the lowest price, regardless of any other factor.
B. Best execution means executing as slowly as possible to avoid market impact.
C. Best execution is satisfied by pricing a CIS order received after the dealing
deadline at that deadline's price.
D. Best execution means taking reasonable steps to obtain the most advantageous
overall result, weighing price, costs, speed, likelihood of execution and settlement,
size, execution quality and the client's instruction — and speed or likelihood may
take priority over immediate price or cost for a large order in an illiquid share or
where a stop-loss has been triggered. The firm must not receive Payment for Order
Flow.
**Answer: D.** Best execution is the most advantageous overall result across price,
costs, speed, likelihood of execution and settlement, size, execution quality and the
client's instruction, with comparable orders prioritised by time of receipt; speed or
likelihood may take priority over immediate price for large illiquid orders or
triggered stop-losses. Late trading — subscribing, switching, cancelling or redeeming
CIS units after the dealing deadline yet receiving the deadline's price — is always
prohibited.

**Q24. [LO6.1, LO6.2, LO6.3 | RES 1B §6.2]**
Mei opens her single CPF Investment Account with OCBC, one of the three CPFIS agent
banks. Her CPF Ordinary Account balance is S$45,000 and her Special Account balance is
S$55,000. She wants to invest her SA savings in a fund management account and in
shares. Which statement is correct?
A. Her investible balance is S$100,000, and SA savings may be invested in a fund
management account.
B. Her investible balance is S$40,000 — only OA above S$20,000 and SA above S$40,000
is investible — and a fund management account is a CPFIS-OA product, not a CPFIS-SA
product; shares, property funds and corporate bonds are subject to a 35% cap on
investable savings under CPFIS-OA.
C. Her investible balance is S$40,000, and she may invest all of it in shares.
D. She may hold a second CPF Investment Account at DBS to invest the SA savings.
**Answer: B.** Only money above S$20,000 in the OA and above S$40,000 in the SA is
investible (preserving extra interest on the first S$60,000 combined); a member may hold
only one CPF Investment Account, at DBS, OCBC or UOB. Fund management accounts are
CPFIS-OA only (SA offers selected ILPs, unit trusts and ETFs), and up to 35% of
investable savings may go into shares, property funds (REITs) and corporate bonds under
CPFIS-OA.

**Q25. [LO6.4 | RES 1B §6.10]**
A CPFIS member's investments pay dividends and one holding makes a loss. The member
asks to withdraw the dividends as cash and asks whether the loss must be made good.
He also asks what sales charges now apply. Which statement is correct?
A. Dividends may be withdrawn as cash, losses must be made good, and sales charges
are capped at 3%.
B. Dividends cannot be withdrawn as cash, because the purpose is to grow retirement
savings; losses do not need to be made good; and since October 2020 sales charges
have been removed and the wrap-fee cap cut to 0.4%.
C. Dividends cannot be withdrawn as cash, losses must be made good from OA savings,
and the wrap-fee cap is 1%.
D. Dividends may be used only for new share purchases, and sales charges are capped
at 1.5%.
**Answer: B.** Dividends and profits from CPFIS-OA and CPFIS-SA investments cannot be
withdrawn as cash (they may be used for other CPF schemes subject to those schemes'
terms); losses do not need to be made good. Charges moved from 3% sales / 1% wrap
(pre-October 2018) to 1.5% / 0.7% (October 2018) to sales charges removed / 0.4% wrap
(October 2020).

**Q26. [LO6.5 | RES 1B §6.12]**
A CPFIS member turns 55 but has not set aside the Full Retirement Sum, nor the Basic
Retirement Sum with sufficient property charged or pledged in the Retirement Account,
and asks for his CPFIS investments to be transferred into his own name. What happens?
A. The investments are transferred into his own name, and he may liquidate and
receive the proceeds directly.
B. The investments are transferred into his own name only for CPFIS-SA holdings.
C. The investments are not transferred: liquidation proceeds are credited to the CPF
Investment Account (for OA) or to the Special Account (for SA).
D. The investments are transferred into his own name, but only after a six-month
waiting period.
**Answer: C.** At 55 a member may apply to withdraw CPFIS investments only if the Full
Retirement Sum has been set aside, or the Basic Retirement Sum with sufficient property
charged or pledged; if not, the investments are not transferred and liquidation proceeds
are credited to the CPF Investment Account or the Special Account.

**Q27. [LO6.5 | RES 1B §6.14]**
A CPFIS member dies. His family claims his CPFIS investments under his CPF nomination
and asks the agent bank to release them without probate documents. Which statement is
correct?
A. CPFIS investments are covered by CPF nomination and are released on the nomination
alone.
B. CPFIS investments are not covered by CPF nomination; they form part of the estate,
and the administrator or executor must produce Letters of Administration or a Grant of
Probate — although a CPFIS insurance policy with a revocable nomination made with the
insurer pays the nominated beneficiaries directly, and irrevocable nomination is not
allowed for CPFIS insurance policies.
C. CPFIS investments form part of the estate, but creditor protection continues after
death.
D. The family may claim the investments with an Option to Administer.
**Answer: B.** CPFIS investments and investment-account cash are outside CPF nomination
and inside the estate; Letters of Administration or a Grant of Probate is required to
claim them. Only a revocable insurer nomination bypasses probate for CPFIS insurance
policies; irrevocable nomination is not allowed; and on death the assets cease to be
protected and may satisfy the deceased's creditors.

**Q28. [LO7.1 | RES 1B §7.1]**
A client rapidly buys and sells shares through several brokers, moving the proceeds
between multiple accounts, to obscure the trail of funds that originated from a fraud.
Which stage of money laundering is this, and which statute governs money laundering in
Singapore?
A. Placement, governed by the Terrorism (Suppression of Financing) Act.
B. Layering, governed by the Corruption, Drug Trafficking and Other Serious Crimes
(Confiscation of Benefits) Act (CDSA).
C. Integration, governed by the Mutual Assistance in Criminal Matters Act.
D. Placement, governed by the Penal Code.
**Answer: B.** Layering is creating transactions and asset conversions that obscure the
trail; capital markets attract layering because assets are liquid, transferable and
easily converted. The CDSA governs money laundering; TSOFA governs terrorism financing,
MACMA cross-border assistance, and the Penal Code general offences.

**Q29. [LO7.3 | RES 1B §7.9]**
A client owns 30% of a company through layered entities. The firm is identifying the
beneficial owners. Which statement is correct?
A. Only shareholders owning more than 50% are beneficial owners.
B. Beneficial-owner identification is required only for listed companies.
C. A 30% owner is a beneficial owner only if he is also a director.
D. A person owning more than 25% is generally a beneficial owner; if ownership is
unclear, the person exercising ultimate control is identified, and if none, the
natural persons with executive authority — and for trusts, the settlor, trustee,
protector and beneficiaries must be identified.
**Answer: D.** The beneficial owner is generally an individual owning more than 25%; if unclear, persons exercising ultimate control, and if none, natural persons with executive authority. For trusts and legal arrangements, identify the settlor, trustee, protector, beneficiaries and persons with ultimate ownership or control.

**Q30. [LO7.4 | RES 1B §7.9]**
A compliance officer receives an internal referral about a suspicious transaction and
files the Suspicious Transaction Report 20 business days after the referral. The firm argues that
reasonable grounds for suspicion are enough and that no crime needs to be proved. Which
statement is correct?
A. The firm is right that reasonable grounds suffice, but the filing was late: an STR
should be filed as soon as practicable and generally no later than 15 business days
after referral, to STRO/CAD with a copy to MAS — and the client must never be tipped
off.
B. The filing was in time, because STRs must be filed within 30 business days of
referral.
C. The filing was in time, but the firm must prove the crime before filing.
D. The STR should have been filed with the SGX, not STRO/CAD.
**Answer: A.** Suspicious transactions, including attempts, must be reported regardless
of amount to STRO/CAD with a copy to MAS; the firm need not prove the crime, reasonable
grounds for suspicion are enough; the internal process should refer cases to a single
compliance point, investigate and file as soon as practicable and generally no later
than 15 business days after referral. Tipping off is itself an offence.

**Q31. [LO7.2, LO7.5 | RES 1B §7.5]**
A dealer learns that a client is on a sanctions list. The dealer proposes to keep
monitoring the account, arguing that identifying sanctions hits is compliance's job,
not the business unit's. What is the correct action?
A. Continue monitoring the account and report it at the next quarterly review.
B. Allow the client to withdraw the funds first, then close the account quietly.
C. Transfer the account to another broker so the firm is no longer involved.
D. Immediately freeze the designated funds and assets, avoid prohibited transactions
or assistance, and notify MAS — identifying and controlling the risk is the first
line of defence (the business units), with compliance/AML-CFT as the second line and
independent internal audit as the third, and the board and senior management retain
final accountability.
**Answer: D.** A positive sanctions hit requires freezing and reporting, not merely
monitoring: financial institutions must immediately freeze designated funds, assets and
economic resources, avoid financial transactions or assistance involving designated
persons, and notify MAS. The three lines of defence are business (1st), compliance/
AML-CFT (2nd) and independent internal audit (3rd); the board and senior management
retain final accountability.

### RES 2B — Questions 32–60

**Q32. [LO2B1.5 | RES 2B §1.2]**
An overseas firm incorporated outside Singapore wishes to trade derivatives on SGX-DT
without a CMS licence. It is a member of an approved exchange, serves no customer
resident in Singapore, is not a regulated financial institution in Singapore, is
regulated in its home jurisdiction, and its home regulator has an information-sharing
arrangement with MAS for derivatives supervision. It also has a MAS-regulated financial
institution as an affiliate and wishes to be a remote *clearing* member. Which statement
is correct?
A. It is exempt from the CMS licence as a remote trading member, because all six
exemption conditions are met.
B. It is exempt as a remote clearing member, because the affiliate condition applies
only to remote trading members.
C. It is not exempt as a remote clearing member: all six conditions must hold, and
additionally an SGX remote clearing member cannot have an MAS-regulated FI affiliate
— that extra condition does not apply to a remote trading member.
D. It is not exempt, because remote membership is available only to firms incorporated
in Singapore.
**Answer: C.** Remote trading and clearing members are exempt from the CMS licence only
if all six conditions hold (incorporated outside Singapore; member of an approved
exchange/clearing house or recognised market operator/clearing house; does not serve
Singapore residents; not a Singapore-regulated FI; home regulator has a suitable MAS
information-sharing arrangement; regulated at home). Additionally, an SGX remote
clearing member cannot have an MAS-regulated FI affiliate; that extra condition does
not apply to a remote trading member.

**Q33. [LO2B1.3, LO2B1.4 | RES 2B §1.3]**
An OTC commodity derivative is registered for clearing through the SGX Titan OTC
platform. Which entity clears it, and under which rulebook?
A. SGX-DT, under the Futures Trading Rules.
B. SGX-DC, under the SGX-DC Clearing Rules — SGX-DC clears SGX-DT products and OTC
trades registered via Titan OTC, and is a Qualifying Central Counterparty (QCCP),
which lowers bank members' capital requirements for trade and default-fund exposures
under Basel III.
C. CDP, under the CDP Clearing Rules.
D. ICE Clear Singapore, under the ICE Clear Singapore Clearing Rules and Procedures.
**Answer: B.** SGX-DC is the clearing house for SGX-DT products and for OTC commodity
and financial derivatives registered via the SGX Titan OTC platform, governed by the
SGX-DC Clearing Rules. Its QCCP status gives bank members lower Basel III capital
requirements for trade and default-fund exposures. (SGX-DT runs the futures market;
CDP clears securities; ICE Clear Singapore clears IFSG trades.)

**Q34. [LO2B1.3 | RES 2B §1.3]**
Which statement about Singapore's other approved derivatives venues is correct?
A. APEX is the third approved exchange, and IFSG was established when ICE acquired
the Singapore Mercantile Exchange in February 2014 for US$150 million.
B. APEX is the only approved derivatives exchange, and IFSG was established in 2000.
C. IFSG acquired the Singapore Mercantile Exchange for US$150 million in 2017, when
SGX RegCo was established.
D. APEX clears its products through SGX-DC.
**Answer: A.** IFSG was established when ICE acquired the Singapore Mercantile Exchange
in February 2014 for US$150 million; APEX is the third approved exchange (with APEX
Clear as its approved clearing house). SGX-ST is the securities exchange; SGX-DT is
the derivatives exchange.

**Q35. [LO2B1.2 | RES 2B §1.2]**
Which statement correctly distinguishes broker/dealers from fund managers in
Singapore's capital markets?
A. Broker/dealers take deposits from the public; fund managers do not.
B. Broker/dealers do not take deposits — they specialise in matching buyers and
sellers and are Trading/Clearing Members — while fund managers have been required to
be registered or licensed since 2012 and manage segregated mandates and CIS/unit
trusts.
C. Fund managers must be Trading Members of SGX-ST; broker/dealers need not be.
D. Broker/dealers manage unit trusts for retail investors; fund managers only trade
on their own account.
**Answer: B.** Broker/dealer companies do not take deposits; they match buyers and
sellers and are Trading/Clearing Members. Since 2012 MAS requires all fund management
companies to be registered or licensed; they manage segregated mandates and CIS/unit
trusts for institutions and individuals via distributors.

**Q36. [LO2B2.1 | RES 2B §2.2]**
A firm deals in OTC derivatives contracts as a non-clearing member and has one retail
client among its customers. What is its base capital requirement?
A. S$1 million, because it is a non-clearing member.
B. S$500,000, because that is the "others" tier for OTC derivatives.
C. S$5 million, because a non-clearing member dealing in OTC derivatives with retail
clients needs S$5 million — the same as a clearing member.
D. S$1 million, because the retail client is only one of many customers.
**Answer: C.** The OTC derivatives BCR table is: clearing
member S$5m; non-clearing member with retail clients S$5m; non-clearing member with
non-retail clients S$1m; others S$500k. The "with retail clients" distinction is the
exam trap — even one retail client puts the firm in the S$5m tier.

**Q37. [LO2B2.1 | RES 2B §2.2]**
A firm deals only in specified commodity futures contracts, as a clearing member. What
is its base capital requirement?
A. S$5 million, the same as a clearing member for exchange-traded derivatives.
B. S$500,000, the non-clearing member tier for commodity futures.
C. S$1 million — the clearing-member tier for specified commodity futures only,
against S$5 million for a clearing member dealing in exchange-traded derivatives
generally.
D. S$250,000, the introducing-broker tier for commodity futures.
**Answer: C.** The commodity-futures-only BCR table is: clearing member S$1m;
non-clearing member S$500k; non-member S$500k; introducing broker S$250k; restricted
broker S$250k. Base capital is classification-driven — the same "clearing member"
label carries different amounts in different tables.

**Q38. [LO2B2.5, LO2B2.4 | RES 2B §2.6]**
A client buys exchange-traded futures on Monday. The contract note requires a fixing
price that only becomes available on Wednesday. By when must the contract note be
issued, and what is Form 13?
A. By Thursday — the next business day after the detail becomes available — and
Form 13 is the MAS-prescribed risk disclosure document that must be furnished and
acknowledged by the client before a trading account is opened, not a substitute for
a contract note.
B. By Tuesday, regardless of when the fixing price becomes available.
C. By Thursday, and Form 13 is the contract note itself.
D. No contract note is needed, because an OTC confirmation with five elements
suffices for exchange-traded futures.
**Answer: A.** Contract notes must be issued no later than the next business day
following the transaction, or by the next business day after a required detail (such
as a fixing price) becomes available. Form 13 is the risk disclosure statement under
Reg 47E, furnished with a signed client acknowledgement before account opening; the
five-element confirmation is for OTC derivatives where no contract note is given.

**Q39. [LO2B2.6, LO2B2.7 | RES 2B §2.8]**
A CMS licence holder computes its trust-account and custody-account totals each
business day, finishing the computation at 2 p.m., and keeps the supporting data for
three years. What is the position?
A. The timing is correct, but the retention period is too short.
B. The computation must be completed before noon of every business day, covering the
trust and custody totals, the amounts required to be deposited and the holder's own
residual interest as at the end of the previous business day, and the computation
with all supporting data must be kept for at least five years.
C. The computation must be completed before noon, but the retention period is three
years.
D. The computation may be done weekly, provided it is completed before noon.
**Answer: B.** The daily computation must be done at least once a day, completed before
noon of every business day, and kept with all supporting data for at least five years.
Customer moneys and assets must be deposited no later than the next business day and
must not be commingled with the holder's own funds.

**Q40. [LO2B2.2 | RES 2B §2.3]**
An overseas employee of a related entity of a CMS licence holder is appointed as a
temporary representative. She has already served two separate three-month temporary
appointments in the past 18 months. What is the position?
A. She may serve a third three-month appointment immediately, because temporary
appointments are unlimited.
B. She may serve only as a provisional representative instead.
C. She may not serve a further temporary appointment now: temporary representatives
may be appointed for a total of six months within any 24-month period, with each
appointment lasting not more than three months.
D. She may serve a further six-month appointment, because the 24-month window has
not yet expired.
**Answer: C.** Temporary representatives may be appointed
for a total of six months within any 24-month period, each appointment not more than
three months, and must be an employee of a related entity (and currently regulated
overseas in a comparable regime).

**Q41. [LO2B2.2, LO2B2.3 | RES 2B §2.3]**
An overseas hire with two years of relevant work experience, currently regulated in a
comparable overseas regime, wants to start dealing for a CMS licence holder before
passing the CMFAS examinations. Can she be appointed as a provisional representative?
A. Yes — provisional status is available to any overseas hire.
B. Yes — two years of experience is sufficient.
C. No — provisional representatives need three years of relevant work experience and
must be currently or previously regulated for a continuous period of at least 12
months in an overseas jurisdiction with a comparable regime; provisional status is a
three-month grace period to complete the examinations, valid for a maximum of three
months from entry in the Register.
D. No — provisional representatives must have five years of relevant work experience.
**Answer: C.** Provisional representatives get a three-month grace period to complete
the requisite examinations, need three years of relevant work experience, and must be
currently or previously licensed, authorised or otherwise regulated for a continuous
period of at least 12 months (and not more than 12 months before) in an overseas
jurisdiction with a comparable regime. (The RNF number stays with the individual even
if they change principals.)

**Q42. [LO2B3.1, LO2B3.2, LO2B3.4 | RES 2B §3.7]**
A broker receives an order to buy one contract of December silver futures at $25.50.
The market is $25.20 offer. Instead of placing the order, the broker withholds it,
buys at $25.20 himself, tells the customer the order was filled at $25.50 and pockets
the $0.30 difference. What is this?
A. Bucketing — executing, or holding oneself out as having executed, a customer's
order without a bona fide market transaction; the customer's order never reaches
competitive bids and offers, so no best price is obtained.
B. A lawful cross trade, because the broker matched the buy and sell himself.
C. Front running, because the broker traded before the customer's order.
D. A lawful principal trade, because the broker disclosed the price to the customer.
**Answer: A.** Bucketing is knowingly executing, or holding oneself out as having
executed, an order for a customer without having effected a bona fide purchase or sale
— the broker takes the opposite side of the customer's order. A cross trade, by
contrast, is a real match of two genuine orders that must comply with the exposure
rules; front running is trading ahead of an unexecuted client order on the market.

**Q43. [LO2B3.3, LO2B3.5 | RES 2B §3.15]**
A trading representative receives a client's instruction to buy a class of futures
contracts on an approved exchange. Before executing it, the representative buys the
same class of contracts for his own account. What is this, and which rule is engaged?
A. Permitted principal trading, because the representative acted before the client's
order was executed.
B. Front running, prohibited under SFR(LCB) Regulation 44 — a holder or
representative must not trade the same class of product on an approved exchange or
recognised market operator where an unassociated customer has instructed them to buy
or sell that class and the instruction has not been complied with; client order
information is non-public, so it is treated as a form of trading on insider
information.
C. Churning, because the representative increased trading volume.
D. Bucketing, because the representative did not execute the client's order.
**Answer: B.** Front running rests on priority of customers' orders (SFR(LCB) 44):
client order information is non-public and known only to the respective traders, so
trading ahead of it is a form of trading on insider information. (Churning is volume
for commissions with no sound market opportunity; bucketing involves no bona fide
market transaction at all.)

**Q44. [LO2B3.4 | RES 2B §3.4]**
A trader buys up the underlying commodity in such volume that he gains a monopoly over
it, so that short sellers must pay an inflated price to cover their positions. What is
this, and how does it differ from price manipulation?
A. Price manipulation, because both involve influencing the price.
B. Wash trading, because the trades have no real economic value.
C. Hunting for stops, because the trader is triggering stop-loss orders.
D. Cornering — acquiring a monopoly over the underlying thing so shorts must pay an
inflated price to cover — which is distinct from price manipulation, the manipulation
or attempted manipulation of the price of a derivatives contract or its underlying
away from fair value.
**Answer: D.** Cornering is purchasing the underlying in such volumes as to gain a
monopoly, leaving short sellers to pay an inflated price to cover. Price manipulation
is manipulating or attempting to manipulate the price of a derivatives contract or its
underlying away from fair value (for example, engineering a new "day high" to trigger
stops in instruments using that contract as a reference).

**Q45. [LO2B3.5 | RES 2B §3.16]**
An Approved Trader on an electronic futures trading system receives a buy order and a
sell order at the same time, both at 25,130. The existing bid is 25,100, the existing
offer is 25,130, and the last traded price is 25,130. Which order must be exposed
first?
A. Either order may be exposed first, because both are at the same price.
B. The sell order, because there is no existing bid.
C. The buy order, because the buy order is more attractive than the sell order —
there is an existing 25,130 offer waiting to be lifted.
D. The sell order, because the sell price equals the last traded price.
**Answer: C.** Where both orders are at the existing offer price, the buy order is
exposed first, because the buy is more attractive — there is an existing offer waiting
to be lifted. (Where both orders are better than the prevailing quotes, either may be
exposed first; where there is no bid or offer and both are below the last traded price,
the sell is exposed first.)

**Q46. [LO2B3.3, LO2B3.6 | RES 2B §3.10]**
An underwriter, acting in its underwriting role, buys shares of the issuer while in
possession of price-sensitive information that is not generally available. Which
statement is correct?
A. This falls within a statutory exception to insider trading (SFA s.223, underwriters
acting in that role) — one of the six statutory exceptions (ss 222–225, 228, 229),
which are distinct from the two defences in s.231; knowledge of one's own
transactions (ss 228–229) is likewise an exception rather than a defence.
B. This is insider trading with no available exception, because the information was
not generally available.
C. This is a defence under s.231, not an exception.
D. This is lawful only if the counterparty knew of the information before transacting.
**Answer: A.** The six statutory exceptions are: CIS trustee/manager redemptions (s.222),
underwriters (s.223), transactions pursuant to legal requirements (s.224), information
communicated pursuant to legal requirements (s.225), and knowledge by virtue of one's
own transactions — natural person (s.228) and corporation (s.229). The s.231 defences
are that the information had been made known in a manner likely to reach persons who
commonly invest, or that the counterparty knew or ought reasonably to have known of it.

**Q47. [LO2B4.1, LO2B4.2 | RES 2B §4.2]**
A bank and a retail client enter into a Singapore-dollar interest rate swap (IRS), an
OTC derivative traded in Singapore. Who must report the contract under Part 6A of the
SFA and the SFR(RDC)?
A. Both parties, because every party to a specified derivatives contract must report.
B. The bank, because a "specified person" is a closed list — banks, bank subsidiaries,
merchant banks, finance companies, insurers and CMS licence holders — and a retail
client is not a specified person. The contract must be reported to a licensed local
or foreign trade repository because it is a specified derivatives contract traded in
Singapore.
C. Neither party, because interest rate derivatives are not a prescribed asset class.
D. The retail client only, because the bank is exempt as a regulated institution.
**Answer: B.** Under Part 6A of the SFA, a "specified person" who is a party to a
specified derivatives contract must report prescribed information to a licensed local
or foreign trade repository. "Specified person" is a closed list: banks, bank
subsidiaries, merchant banks, finance companies, insurers and CMS licence holders.
Retail clients are not specified persons. The five prescribed asset classes — interest
rate, credit, foreign exchange, commodity and equity derivatives — report only if
traded or booked in Singapore.

**Q48. [LO2B4.2 | RES 2B §4.2]**
A firm reports all of its OTC derivatives contracts to DTCC Data Repository (Singapore),
a licensed trade repository, and tells its client that this satisfies its clearing
obligation. Which statement is correct?
A. The firm is correct: reporting and clearing are the same obligation.
B. The firm is correct, because a licensed trade repository is also an approved
clearing house.
C. The firm is correct for interest rate derivatives but not for commodity
derivatives.
D. The firm is wrong: reporting under Part 6A of the SFA and the SFR(RDC) goes to a
trade repository, while clearing under section 129C goes to an approved or recognised
clearing house — they are different obligations.
**Answer: D.** Reporting versus clearing are different obligations. Reporting under Part
6A of the SFA and the SFR(RDC) goes to a trade repository (DTCC Data Repository
(Singapore) was the first local licensed trade repository); clearing under section
129C goes to an approved or recognised clearing house.

**Q49. [LO2B4.2, LO2B4.3 | RES 2B §4.3]**
An SGX-DC clearing member sets its customer margin rates below the rates prescribed by
SGX-DC, to win business, and reviews its internal margin rates only once a year. What
is the position?
A. This is acceptable, because members set their own margin rates freely.
B. This is acceptable, provided the lower rates apply only to proprietary trades.
C. This breaches the rules: clearing members must post margin at rates prescribed by
SGX-DC, must procure initial margin from customers and ensure customers comply with
maintenance margin, and may set higher margin rates at their discretion — but must
review their internal rates and requirements on a continual basis.
D. This is acceptable, because the same margin requirements do not apply to
proprietary trades.
**Answer: C.** Under the SGX-DC Clearing Rules, members must post margin on contracts
at rates prescribed by SGX-DC, procure initial margin from customers and ensure
customers comply with maintenance margin; variation margin may be payable for
mark-to-market differences. The same requirements apply to proprietary trades. Members
may set higher margin rates at their discretion, but must review their internal rates
and requirements on a continual basis. A CCP reduces bilateral counterparty risk but
replaces it with clearing-house credit risk — it does not eliminate risk.

**Q50. [LO2B4.3 | RES 2B §4.5]**
A broker quotes a price for an OTC derivative, the principal deals on it, and the
broker then cannot substantiate the quotation. The broker offers simply to cancel the
trade. What should happen?
A. The trade is cancelled, because an unsubstantiated quotation voids the transaction.
B. The broker should close the OTC derivatives product at the next available price
and settle the difference with the principal — for example by issuing a cheque for
that amount.
C. The principal must bear the difference, because he accepted the quotation.
D. The broker should re-quote at the original price and re-execute the trade.
**Answer: B.** Under the Blue Book (Chapter IX, OTC Derivatives Dealing Practices), where
a broker is unable to substantiate its quotation and a difference is payable to the
principal, the broker should close the product at the next available price and settle
the difference with the principal. The Blue Book is guidance on dealing practice, not
a statute.

**Q51. [LO2B5.10, LO2B5.8 | RES 2B §5.5]**
A CMS licence holder routes its customers' derivatives orders to a broker that pays it
a commission for the order flow. The holder argues this is acceptable because the
execution prices were reasonable. What is the position?
A. This is prohibited: a CMS licence holder should not receive Payment for Order Flow
(PFOF) — commission or other payment from another broker or counterparty in return
for routing customer orders to it — because routing may be driven by the payment
rather than best execution, under the MAS Notice on Execution of Customers' Orders
(SFA 04-N16).
B. This is acceptable, provided the execution prices were reasonable.
C. This is acceptable, because PFOF is prohibited only for securities, not
derivatives.
D. This is acceptable if the payment is disclosed to the customer.
**Answer: A.** Under SFA 04-N16 (with guidance SFA 04-G10), a CMS licence holder should
not receive PFOF: the conflict is that routing may be driven by payment rather than
best execution. Best execution requires reasonable steps to obtain the most
advantageous trade result, considering price, costs, speed, likelihood of execution
and settlement, size and execution quality holistically.

**Q52. [LO2B5.6 | RES 2B §5.4]**
A representative gives advice on derivatives to a client. Which statement best
describes the suitability requirement in an advisory relationship?
A. Suitability requires only that the product matches the client's stated return
objective.
B. Suitability requires a reasonable basis for the recommendation, judged against the
single product in isolation.
C. Suitability requires only that the client has passed a CAR or CKA.
D. Suitability requires three things: reasonable inquiries into the client's
investment objectives, financial situation and particular needs, reassessed and
updated regularly; a determination that the recommendation is suitable to the
client's risk appetite and financial situation and consistent with the client's
written objectives, mandates and constraints; and judgement in the context of the
client's total portfolio.
**Answer: D.** In an advisory relationship, suitability requires reasonable inquiries
into objectives, financial situation and needs (updated regularly), a determination of
suitability to risk appetite and consistency with written objectives, mandates and
constraints, and judgement in the context of the total portfolio. (A CAR/CKA assesses
knowledge and experience to transact in SIPs; it is not a suitability determination.)

**Q53. [LO2B5.7 | RES 2B §5.4]**
Which statement correctly distinguishes the two professional codes of conduct relevant
to derivatives trading?
A. The Blue Book is issued by the Bank for International Settlements and has six
principles; the FX Global Code is issued by the Singapore Foreign Exchange Market
Committee and has five codes.
B. The Blue Book is issued by MAS and has six principles; the FX Global Code is
issued by SGX and has five codes.
C. The Blue Book is the Singapore Foreign Exchange Market Committee's Singapore Guide
to Conduct and Market Practices for the Wholesale Financial Markets, covering five
codes of conduct; the FX Global Code is the Bank for International Settlements' code
of global principles of good practice for the wholesale FX market, with six
principles (ethics, governance, information sharing, execution, risk management and
compliance, confirmation and settlement).
D. Both codes are issued by MAS, and both have six principles.
**Answer: C.** The Blue Book (SFEMC) covers five codes: general dealing principles and
market conduct; ethics and behavioural standards; governance, risk management and
compliance; back-office practices; and dealing practices of different instruments. The
FX Global Code (BIS — established 17 May 1930, 63 member central banks) has six
principles: ethics, governance, information sharing, execution, risk management and
compliance, and confirmation and settlement processes.

**Q54. [LO2B5.6, LO2B5.8 | RES 2B §5.4]**
A representative learns that a large client sell order is about to be executed, and
first sells his own shares in the same company, then executes the client's order. What
is the position?
A. This is acceptable, because the representative's own trades are a private matter.
B. This breaches the standards: investment transactions for clients and employers must
have priority over transactions in which a representative is the beneficial owner —
selling ahead of a client's sell order is self-dealing, and a representative must not
act on material non-public information or trade against the client's interest.
C. This is acceptable if the representative discloses the sale to the client
afterwards.
D. This is acceptable, because priority applies only to buy orders.
**Answer: B.** Priority of transactions: clients and employers rank above the
representative's beneficial ownership. The representative must place the client's
interest before the employer's or their own, carry out client transactions prior to
their own, and not engage in self-dealing. (Front running the client's order is also
prohibited under SFR(LCB) 44.)

**Q55. [LO2B6.3 | RES 2B §6.6]**
A retail customer passed a CAR three years ago and opened a listed SIP trading account.
Since then she has transacted in a listed SIP through that account only once. She now
wants to trade another listed SIP. What is the position?
A. The firm must not allow her to transact in a listed SIP after three years from the
CAR unless it has checked and is satisfied that she transacted in a listed SIP
through the account more than once during the preceding three-year period and more
than once during each subsequent three-year period, or it has conducted a new CAR.
B. The CAR remains valid indefinitely once passed.
C. The firm may allow her to trade because she transacted once in the three-year
period.
D. The firm must conduct a new CKA, because the CAR has expired.
**Answer: A.** CAR validity is three years, extended only if the customer transacted
more than once in each three-year period; otherwise a new CAR is required. (CKA
validity is one year, with a fresh CKA required after that — CKA is for unlisted SIPs.)

**Q56. [LO2B6.3 | RES 2B §6.6]**
A retail customer has invested in unlisted collective investment schemes (CIS) at least
six times in the preceding three years and now wants to trade listed SIPs, including
futures. He argues his six transactions qualify him. Which statement is correct?
A. He is deemed to have sufficient knowledge for listed SIPs, because six
transactions in three years qualifies for both CAR and CKA.
B. He may trade listed SIPs, because unlisted CIS transactions count towards the CAR.
C. He is not qualified for listed SIPs on this basis: the six-transactions route for
CAR requires transacting in SIPs listed or quoted on an exchange at least six times
in the preceding three years, whereas his six transactions were in unlisted CIS —
which is the CKA route for unlisted SIPs. CAR and CKA are not interchangeable.
D. He may trade listed SIPs, because a positive CKA is valid for three years.
**Answer: C.** The sufficient-knowledge routes differ: for CAR, at least six transactions
in SIPs listed or quoted on an exchange in the preceding three years; for CKA, at
least six transactions in unlisted CIS or ILPs (or in other unlisted SIPs) in the
preceding three years. Other routes are a qualifying diploma or higher in a listed
discipline, a professional qualification such as CFA or ACCA, or three consecutive
years of relevant work experience in the past ten years.

**Q57. [LO2B6.3, LO2B6.2 | RES 2B §6.6]**
A firm is about to open a SIP trading account for a retail customer who has passed the
relevant assessment. Who must approve the opening?
A. Any representative involved in opening the account.
B. The customer's remisier, acting alone.
C. The customer's connected person, if one is available.
D. Senior management who is not involved in that particular account opening process
and not a connected person of the customer, satisfied on the outcome of the CAR or
CKA that the customer has the knowledge or experience and having approved the opening.
**Answer: D.** A firm must not open a SIP trading account unless senior management who
is not involved in that particular account opening process and not a connected person
of the customer is satisfied, based on the outcome of the CAR or CKA, that the customer
has knowledge or experience, and has approved the opening. Regardless of the CAR
outcome, the account opening form must state that the customer can at any time request
advice.

**Q58. [LO2B6.3 | RES 2B §6.6]**
A firm outsources the identification and classification of overseas-listed products as
Excluded Investment Products (EIPs) to a vendor. The vendor misclassifies a product as
an EIP when it is in fact a SIP, and the firm allows a retail client to transact
without a CAR. What is the position?
A. The firm is not responsible, because classification was outsourced.
B. The firm is not responsible, because the product was classified as an EIP.
C. The firm is responsible, because the product is a SIP and CAR applies.
D. The firm remains responsible for implementation of the classification system,
including the accuracy of the classification — outsourcing does not transfer
responsibility — and where a firm does not implement a system to identify and
classify a product as an EIP, the product is classified as a SIP and the CAR
requirements apply.
**Answer: D.** A firm may outsource identification and classification, but it remains
responsible for implementation of the classification system, including the accuracy of
the classification. If it does not implement such a system, the overseas-listed product
is classified as a SIP and the CAR requirements apply. (Before a retail customer's
first transaction in an overseas-listed product, the firm must also provide the risk
warning statement in Annex 4 of the MAS Notice on Sales of Investment Products and
obtain the customer's acknowledgement, retained for not less than five years.)

**Q59. [LO2B6.4 | RES 2B §6.7]**
A firm's critical IT system suffers unscheduled downtime totalling five hours in a
12-month period, and the firm notifies MAS two hours after discovering a severe system
malfunction that materially impacts service to customers. Which statement is correct?
A. Both limits were breached: the maximum unscheduled downtime for critical IT
systems must not exceed four hours within any 12-month period, and MAS must be
notified as soon as possible and not later than one hour after discovering a relevant
incident (a system malfunction or IT security incident with severe and widespread
impact, or that materially impacts service to customers).
B. Only the downtime limit was breached; MAS notification within two hours is
acceptable.
C. Only the notification limit was breached; five hours of downtime is acceptable.
D. Neither limit was breached, because the limits are four hours' downtime and two
hours' notification.
**Answer: A.** Under the MAS technology risk management guidelines, maximum unscheduled
downtime for critical IT systems must not exceed four hours within any 12-month period,
and firms must notify MAS as soon as possible and not later than one hour after
discovering a relevant incident with severe and widespread impact or that materially
impacts service to customers.

**Q60. [LO2B6.4, LO2B6.1 | RES 2B §6.7]**
A client trades futures on margin. He sets a stop-loss on his position. Overnight news
gaps the price well below his stop level, the position is liquidated far below the stop,
and his loss exceeds the amount he deposited. Which statement is correct?
A. The loss cannot exceed the deposit, because margin accounts cap losses at the
principal invested.
B. The stop-loss guaranteed liquidation at the stop level, so the firm must make good
the excess loss.
C. The loss can exceed the principal invested, because the account uses borrowed
capital — capital risk in margin accounts can exceed the principal — and gap risk
means prices can jump from one level to another with no trading in between, so a
position may be liquidated well below the stop-loss level.
D. Gap risk applies only to equities, not to futures.
**Answer: C.** Capital risk is the risk that a client's account can lose part or all of
the principal, and in margin accounts the loss may exceed the principal invested
because the representative relies on borrowed capital. Gap risk is the risk that prices
change from one level to another with no trading in between; gaps can fall below
stop-loss levels, so positions must be liquidated possibly well below the stop-loss.
The stop-loss is the most basic and most important dealing risk tool, but it does not
protect against a gap.

---

## PART C — ANSWER KEY

| Q | Ans | LO | Q | Ans | LO | Q | Ans | LO |
|---|---|---|---|---|---|---|---|---|
| 1 | B | LO1.4 | 21 | C | LO5.1, LO5.3 | 41 | C | LO2B2.2, LO2B2.3 |
| 2 | D | LO1.5 | 22 | A | LO5.5 | 42 | A | LO2B3.1, LO2B3.2, LO2B3.4 |
| 3 | A | LO1.2 | 23 | D | LO5.4 | 43 | B | LO2B3.3, LO2B3.5 |
| 4 | C | LO1.1, LO1.3 | 24 | B | LO6.1, LO6.2, LO6.3 | 44 | D | LO2B3.4 |
| 5 | A | LO2.1 | 25 | B | LO6.4 | 45 | C | LO2B3.5 |
| 6 | C | LO2.4 | 26 | C | LO6.5 | 46 | A | LO2B3.3, LO2B3.6 |
| 7 | A | LO2.4 | 27 | B | LO6.5 | 47 | B | LO2B4.1, LO2B4.2 |
| 8 | D | LO2.2 | 28 | B | LO7.1 | 48 | D | LO2B4.2 |
| 9 | B | LO2.3, LO2.5 | 29 | D | LO7.3 | 49 | C | LO2B4.2, LO2B4.3 |
| 10 | C | LO2.6 | 30 | A | LO7.4 | 50 | B | LO2B4.3 |
| 11 | A | LO3.1 | 31 | D | LO7.2, LO7.5 | 51 | A | LO2B5.10, LO2B5.8 |
| 12 | D | LO3.2, LO3.4 | 32 | C | LO2B1.5 | 52 | D | LO2B5.6 |
| 13 | D | LO3.3 | 33 | B | LO2B1.3, LO2B1.4 | 53 | C | LO2B5.7 |
| 14 | A | LO3.5 | 34 | A | LO2B1.3 | 54 | B | LO2B5.6, LO2B5.8 |
| 15 | D | LO4.1, LO4.2 | 35 | B | LO2B1.2 | 55 | A | LO2B6.3 |
| 16 | D | LO4.5 | 36 | C | LO2B2.1 | 56 | C | LO2B6.3 |
| 17 | B | LO4.4 | 37 | C | LO2B2.1 | 57 | D | LO2B6.3, LO2B6.2 |
| 18 | A | LO4.4 | 38 | A | LO2B2.5, LO2B2.4 | 58 | D | LO2B6.3 |
| 19 | D | LO4.3 | 39 | B | LO2B2.6, LO2B2.7 | 59 | A | LO2B6.4 |
| 20 | B | LO5.2 | 40 | C | LO2B2.2 | 60 | C | LO2B6.4, LO2B6.1 |

**Distribution check: A ×15, B ×15, C ×15, D ×15. Pass mark: 45/60 (75%).**

Answer-key table verified mechanically against the question bodies (see Part E, note 1).

---

## PART D — COVERAGE PROOF (every LO tested at least once)

All 71 LO rows from Part A appear in the table below with their testing question(s).
Rows marked "setup/secondary" are tested only as a secondary element of the question
(the discriminating point is another LO); rows marked † are cross-mapped from the
shared 1B/2B ethics syllabus.

| LO rows | Questions | LO rows | Questions |
|---|---|---|---|
| LO1.1 | Q4 | LO2B1.1 | Q4 † |
| LO1.2 | Q3 | LO2B1.2 | Q35 |
| LO1.3 | Q4 | LO2B1.3 | Q33, Q34 |
| LO1.4 | Q1 | LO2B1.4 | Q33 |
| LO1.5 | Q2 | LO2B1.5 | Q32 |
| LO2.1 | Q5 | LO2B2.1 | Q36, Q37 |
| LO2.2 | Q8 | LO2B2.2 | Q40, Q41 |
| LO2.3 | Q9 | LO2B2.3 | Q41 (secondary) |
| LO2.4 | Q6, Q7 | LO2B2.4 | Q38 (secondary) |
| LO2.5 | Q9 | LO2B2.5 | Q38 |
| LO2.6 | Q10 | LO2B2.6 | Q39 |
| LO3.1 | Q11 | LO2B2.7 | Q39 |
| LO3.2 | Q12 | LO2B3.1 | Q42 |
| LO3.3 | Q13 | LO2B3.2 | Q42, Q43 |
| LO3.4 | Q12 | LO2B3.3 | Q43, Q46 |
| LO3.5 | Q14 | LO2B3.4 | Q42, Q44 |
| LO4.1 | Q15 | LO2B3.5 | Q43, Q45 |
| LO4.2 | Q15 | LO2B3.6 | Q46 |
| LO4.3 | Q19 | LO2B4.1 | Q47 |
| LO4.4 | Q17, Q18 | LO2B4.2 | Q47, Q48, Q49 |
| LO4.5 | Q16 | LO2B4.3 | Q49, Q50 |
| LO5.1 | Q21 | LO2B5.1 | Q15 † |
| LO5.2 | Q20 | LO2B5.2 | Q15 †, Q19 † |
| LO5.3 | Q21 | LO2B5.3 | Q19 † |
| LO5.4 | Q23 | LO2B5.4 | Q15 † |
| LO5.5 | Q22 | LO2B5.5 | Q17 †, Q18 † |
| LO6.1 | Q24 | LO2B5.6 | Q52, Q54 |
| LO6.2 | Q24 (setup) | LO2B5.7 | Q53 |
| LO6.3 | Q24 | LO2B5.8 | Q51, Q54 |
| LO6.4 | Q25 | LO2B5.9 | Q17 † (secondary) |
| LO6.5 | Q26, Q27 | LO2B5.10 | Q51 |
| LO7.1 | Q28 | LO2B6.1 | Q60 (secondary) |
| LO7.2 | Q31 | LO2B6.2 | Q57 (secondary) |
| LO7.3 | Q29 | LO2B6.3 | Q55, Q56, Q57, Q58 |
| LO7.4 | Q30 | LO2B6.4 | Q59, Q60 |
| LO7.5 | Q31 | — | — |

**High-weight areas (2–3 questions each):** licensing/BCR (Q5, Q36, Q37); market
conduct/insider trading (Q11–Q14, Q42–Q46); CAR/CKA + client classification (Q6, Q7,
Q20, Q21, Q55–Q58); CPFIS limits (Q24, Q25); AML/CFT (Q28–Q31); OTC derivatives
reporting/clearing (Q47–Q49); best execution (Q23, Q51); ethics framework (Q15–Q19,
Q51–Q54).

---

## PART E — COULD NOT VERIFY / GAPS / THINGS NOT TESTED

**Numbers or distinctions NOT verifiable in the guide (not used in the quiz):**
- MAS short-position reporting threshold amount — the guide says only "the MAS
threshold" (1B-03 §3.11); no value stated. Not used.
- AI net-asset / financial-asset / income threshold amounts — the guide says only
"prescribed … thresholds" (1B-05 §5.2.2); no amounts stated. Not used (Q20 uses the
S$50m designated-market-maker fact, which is stated in Appendix G Q17, not a
threshold for AI generally).
- Penalty amounts (fines / imprisonment terms) — the guide states expressly that the
amount of a penalty is not tested (intro; 1B-03 §3.12). Not used.
- CDP buying-in penalty amount — only "purchase cost plus the applicable penalty"
(1B-03 §3.11). Not used.
- OTC reporting deadline (e.g. T+1/T+2), clearing thresholds and notional thresholds —
no deadline or threshold is stated anywhere in 2B-04. Not used; Q47–Q49 test only the
regime structure (who reports, to whom, reporting vs clearing).
- Margin rates / position-limit figures — none stated in 2B-01–2B-03 (only the
qualitative overtrading rule). Not used.
- FRS / BRS dollar amounts — the guide names the Full Retirement Sum and Basic
Retirement Sum but gives no figures (1B-06 §6.12). Not used.
- Credit-risk collateral threshold amount — only "agreed threshold" (1B-05 §5.8).
Not used.
- CAR/CKA pass marks or scores — none stated. Not used.

**Appendix files (corrected 2026-11-11):** the appendix files `1b-90-appendix-a…h` and
`2b-90-appendix-a…g` exist in the repo (verified HTTP 200); an earlier draft note claiming
404s was wrong. The 2B-02 file skips section §2.6.3 (numbering jumps §2.6.2.2 → §2.6.4).

**Verified in the guide but NOT tested in this 60-question draft (candidates for a
second paper):** Mainboard vs Catalist OPERA exposure (7 vs 14 days) and 14/21-day
meeting notices; 500 vs 200 shareholders and 25%/15% public float (tested only
indirectly — Q1 tests the profit test, not the float/shareholder numbers); hawking
(LO3.5 tested via lending only); short-sale marking/split rule; the six code-of-ethics
principles by name (LO4.4 tested via standards/conflicts/gifts, not a principles
list-recall item); late trading as a primary question (appears only as a distractor
in Q23); fundamental vs technical analysis matching; the five-step risk-management
framework; the 30/120-business-day CDD deferral milestones; EDD triggers and PEP
controls beyond the Q29 beneficial-owner item; the eight investment-management-agreement
heads; the six ISDA Master Agreement heads of term.

**Verification notes (to fix before use):**
1. **Answer-key distribution was verified mechanically** (script counted the
`**Answer: X.**` line of every question body and cross-checked Part C — zero
mismatches): A ×15, B ×15, C ×15, D ×15. Two rounds of option reordering (not answer
changes) were needed: Q15 (C→D), Q23 (C→D), Q29 (B→D), Q30 (B→A), then Q7 (B→A)
and Q13 (B→D). The Part C table initially also mismatched the written bodies at Q25,
Q26 and Q28 (the bodies' correct options differed from the planned letters); the table
was corrected to match the bodies.
2. The header claim "A ×15, B ×15, C ×15, D ×15" is now true — see note 1.
3. Q36 and Q40 originally carried a duplicated "Answer: D is wrong…" line; both were
cleaned to a single "Answer: C." line — confirmed clean in the final check (exactly 60
"Answer:" lines in the file, one per question).
4. Q24's 35% cap is stated qualitatively ("subject to a 35% cap on investable
savings") without a dollar computation, to avoid ambiguity about whether the base is
investable savings or total CPF balances; the guide says "35% of investable savings".
5. Q20 originally used the S$50m designated-market-maker fact from Appendix G Q17;
it was replaced with a reclassification-consequence question, because that App G Q17
item also appears in the existing bank file — the S$50m fact is therefore not tested
in this draft.
