/**
 * FMRP extension questions.
 *
 * Emitted in the `### N. **[Type | Subtype]** [FMRP §x.y] stem` shape this bank
 * uses, with `- a.` option lines and a `**Answer:** A. …` / `**Rationale:** …`
 * disclosure block.
 *
 * Shape: { c, t, s, q, o: [4], a, r }
 *   c = chapter number as a string, '1'..'8', or 'appendix-A' / 'appendix-B'
 *   t = Source reference | Original
 *   s = subtype shown after the pipe, e.g. 'Single choice', 'Combination choice'
 *   a = option letter 'A'..'D' (options are emitted upper-case, as in this bank)
 */

export const FMRP = [
  // ---------------------------------------------------------------- Chapter 1
  {
    c: '1', t: 'Original', s: 'Single choice', q: 'The FX Global Code is best described as:', o: ['A global set of principles of good practice for the wholesale FX market that supplements local rules', 'A statute binding on all Singapore dealers', 'A rulebook issued by MAS under the SFA', 'A treaty obligation of central banks'], a: 'A', r: 'The Code is produced by the Global Foreign Exchange Committee and is explicitly a supplement to local law and regulation, not a substitute for it.',
  },
  {
    c: '1', t: 'Original', s: 'Multiple response', q: 'Which of the following are among the leading principles of the FX Global Code?', o: ['Ethics', 'Governance', 'Profit maximisation for the dealing desk', 'Confirmation and settlement processes'], a: 'A,B,D', r: 'The six principles are ethics, governance, information sharing, execution, risk management and compliance, and confirmation and settlement. Profit maximisation is not a principle; the Code is about conduct, not commercial outcome.',
  },
  {
    c: '1', t: 'Original', s: 'Single choice', q: 'The Blue Book is produced by which body?', o: ['The Monetary Authority of Singapore', 'The Singapore Foreign Exchange Market Committee', 'The Association of Banks in Singapore', 'The Bank for International Settlements'], a: 'B', r: 'The Singapore Guide to Conduct and Market Practices for the Wholesale Financial Markets is produced by SFEMC. The BIS produces the FX Global Code; MAS produces notices and guidelines.',
  },
  {
    c: '1', t: 'Original', s: 'Multiple response', q: 'Which statements about the scope of the Blue Book are correct?', o: ['It covers FX, money market, debt securities and derivatives dealing', 'It sets out general dealing principles and market conduct', 'It has the force of statute in Singapore', 'It includes back office practices'], a: 'A,B,D', r: 'The Blue Book covers dealing principles, ethics, governance and risk, back office practice and instrument-specific dealing. It is an industry code, not legislation, so it does not have statutory force.',
  },
  {
    c: '1', t: 'Original', s: 'Single choice', q: 'A Market Participant\u2019s obligations under the FX Global Code are best characterised as:', o: ['Legally binding and enforceable by MAS as a statutory duty', 'Commitments of conduct that a firm adopts and should be able to demonstrate adherence to', 'Optional guidance with no expectation of adherence', 'Applicable only to banks, not to other market participants'], a: 'B', r: 'Adherence is a public commitment rather than a statutory obligation, but a firm that states it adheres should be able to evidence that adherence.',
  },

  // ---------------------------------------------------------------- Chapter 2
  {
    c: '2', t: 'Original', s: 'Single choice', q: 'A client offers a dealing representative an expensive watch shortly after a large trade is executed. The most appropriate response is to:', o: ['Accept it, because the trade is already complete', 'Decline it in line with the firm\u2019s gifts and entertainment policy and record the offer', 'Accept it and share it with the desk', 'Accept it and report it at the next annual attestation'], a: 'B', r: 'A gift offered soon after a trade creates at least the appearance of inducement. Policy compliance plus a record deals with both the substantive and the evidential risk.',
  },
  {
    c: '2', t: 'Original', s: 'Multiple response', q: 'Which of the following are "persons deemed connected" to a dealing staff member for personal account dealing purposes?', o: ['The staff member\u2019s spouse', 'Step-children of the staff member', 'A nephew living in the same household', 'An unrelated friend followed on social media'], a: 'A,B,C', r: 'Connected persons are defined by close family and household relationship. A social media connection does not create the relationship the rules contemplate.',
  },
  {
    c: '2', t: 'Original', s: 'Single choice', q: 'A representative wishes to deal for a personal account. Which control is fundamental?', o: ['Informing a colleague on the desk before dealing', 'Pre-clearance from compliance and a prohibition on dealing ahead of a client order', 'Dealing only through an external broker', 'Dealing only in securities the firm does not cover'], a: 'B', r: 'Pre-clearance plus a front-running prohibition addresses both the conflict and the misuse of client order information. Dealing through an external broker does not remove either risk.',
  },
  {
    c: '2', t: 'Original', s: 'Multiple response', q: 'When must a Market Participant submit a misconduct report to MAS in respect of a representative?', o: ['Where the representative has engaged in market misconduct', 'Where the representative no longer satisfies the fit and proper criteria', 'Where the representative has been fined for a traffic offence', 'Where the representative has breached the firm\u2019s internal expense policy'], a: 'A,B', r: 'The reporting duty attaches to misconduct and to failures of fitness and propriety. A motoring fine and an internal expense breach are employment matters, not reportable misconduct.',
  },
  {
    c: '2', t: 'Original', s: 'Single choice', q: 'Client money received by a Market Participant may be used:', o: ['For any purpose approved by the head of trading', 'Only for the purposes for which the client has provided it', 'To meet the firm\u2019s short-term liquidity needs if repaid within a week', 'To fund margin on the firm\u2019s proprietary positions'], a: 'B', r: 'Client money is held for the client\u2019s purpose. Internal approval and short-term repayment do not create a right to use it, and using it as proprietary margin is a plain misapplication.',
  },
  {
    c: '2', t: 'Original', s: 'Single choice', q: 'A separate written risk disclosure document is required before opening which type of account?', o: ['A leveraged foreign exchange trading account', 'A cash equities account', 'A unit trust account', 'A fixed deposit account'], a: 'A', r: 'The disclosure attaches to leveraged products where the client can lose more than the amount invested. Cash and deposit products do not carry that exposure.',
  },
  {
    c: '2', t: 'Original', s: 'Multiple response', q: 'Which statement about AML and KYC obligations for Market Participants is correct?', o: ['Customer due diligence must be performed for all customers', 'CDD records must be maintained', 'A customer must be told when a suspicious transaction report has been filed', 'Internal procedures and controls must be established to mitigate AML risk'], a: 'A,B,D', r: 'Tipping off a customer that a report has been made is itself an offence, so that statement is false; the other three are core obligations.',
  },
  {
    c: '2', t: 'Original', s: 'Single choice', q: 'A representative is asked by a client to execute a trade that the representative believes is unsuitable. The representative should:', o: ['Execute, because the client has given the instruction', 'Decline to recommend it, explain the concern, and document the client\u2019s decision if the client still wishes to proceed', 'Execute and record nothing, to avoid a dispute', 'Execute and inform other clients of the trade'], a: 'B', r: 'Executing an unsolicited instruction is permissible, but the concern must be raised and the exchange documented. Silent execution and informing third parties are both wrong.',
  },

  // ---------------------------------------------------------------- Chapter 3
  {
    c: '3', t: 'Original', s: 'Single choice', q: 'A Market Participant receives a request from another bank for details of a client\u2019s trades. The correct response is to:', o: ['Provide the information as a professional courtesy', 'Refuse unless a permitted disclosure route applies, such as client consent or a legal requirement', 'Provide the information but ask the recipient to keep it confidential', 'Provide only the client\u2019s name but not the trade details'], a: 'B', r: 'A request from another market participant is not a lawful basis for disclosure. Confidentiality yields only to consent, law, or a specifically permitted route.',
  },
  {
    c: '3', t: 'Original', s: 'Multiple response', q: 'Which circumstances permit disclosure of otherwise confidential customer information?', o: ['Where required under the Income Tax Act', 'Where required under section 47 of the Banking Act and the Third Schedule', 'To investigate or prosecute a suspected offence', 'Where another market participant asks for it to price a trade'], a: 'A,B,C', r: 'Statutory requirement, the Banking Act permitted-disclosure routes and criminal investigation are all lawful bases. A counterparty\u2019s commercial request is not.',
  },
  {
    c: '3', t: 'Original', s: 'Single choice', q: 'Which statement about "market colour" is correct?', o: ['Describing aggregated flows without naming counterparties is generally acceptable', 'Naming the counterparty is acceptable if the flow has already been executed', 'Market colour may never be shared in any form', 'Market colour may be shared if the recipient is a regulated firm'], a: 'A', r: 'Aggregated, anonymous colour conveys market information without identifying a client. Naming a counterparty, even after execution, discloses confidential information.',
  },
  {
    c: '3', t: 'Original', s: 'Multiple response', q: 'Which are appropriate when communicating with clients and counterparties?', o: ['Avoid communicating information known to be false', 'Avoid conveying a misleading impression through selective disclosure', 'Identify opinions as opinions rather than facts', 'Decline to confirm whether an order is for the full quantity when asked'], a: 'A,B,C', r: 'Declining to confirm order size, while sometimes necessary to protect confidentiality, must not be done in a way that leaves a misleading impression; the requirement is to communicate clearly and not mislead.',
  },
  {
    c: '3', t: 'Original', s: 'Single choice', q: 'A firm outsources part of its client onboarding to a third party. Responsibility for confidentiality of the client data remains with:', o: ['The third party alone', 'The Market Participant, which must ensure the arrangement protects the data', 'The client', 'The regulator'], a: 'B', r: 'Outsourcing transfers the activity, not the regulatory responsibility. The firm remains accountable for the protection of client data.',
  },
  {
    c: '3', t: 'Original', s: 'Single choice', q: 'Customer data may be disclosed:', o: ['In accordance with applicable laws and regulations', 'Whenever a colleague in another department asks for it', 'Whenever it would help the firm win a mandate', 'Only with the approval of the head of trading'], a: 'A', r: 'Lawful and regulatory bases govern disclosure. Internal curiosity, commercial advantage and trading-desk approval are none of them.',
  },

  // ---------------------------------------------------------------- Chapter 4
  {
    c: '4', t: 'Original', s: 'Single choice', q: 'Which is the most effective control against a rogue trader concealing losses?', o: ['Requiring dealers to take annual leave of at least one continuous week', 'Requiring front office staff to reconcile their own positions daily', 'Allowing the dealer to settle their own trades for speed', 'Sharing system access across front, middle and back office'], a: 'A', r: 'Mandatory consecutive leave is a recognised detective control precisely because concealment requires continuous presence. Letting a dealer settle their own trades removes the separation that caught Barings.',
  },
  {
    c: '4', t: 'Original', s: 'Multiple response', q: 'Which are elements of an effective segregation of duties?', o: ['Information barriers between trading, risk management and processing', 'Front office having no access rights to process trades in middle office systems', 'The same person approving and reconciling a trade', 'Independent reporting lines for risk and compliance'], a: 'A,B,D', r: 'Approval and reconciliation by the same person defeats the purpose of the control. The other three are standard elements of segregation.',
  },
  {
    c: '4', t: 'Original', s: 'Single choice', q: 'A customer fails to meet a margin call. The action that best minimises loss is to:', o: ['Wait for the customer to make contact', 'Close out the customer\u2019s positions once the margin call remains unanswered within the agreed time', 'Open an offsetting position for the customer', 'Extend further credit to allow time to recover'], a: 'B', r: 'Enforcing the close-out is the contractual remedy and caps the exposure. Extending credit increases it; offsetting without instruction creates a new position.',
  },
  {
    c: '4', t: 'Original', s: 'Single choice', q: 'Which is the most important objective of business continuity planning for a Market Participant?', o: ['Ensuring front office can keep dealing', 'Ensuring treasury operations across front, middle and back office can continue', 'Ensuring staff can work from home', 'Ensuring all payments are withheld during a disruption'], a: 'B', r: 'Continuity has to cover the whole processing chain, because a front office that can trade but cannot settle is worse than one that pauses. Withholding all payments contradicts the prohibition on unilateral suspension.',
  },
  {
    c: '4', t: 'Original', s: 'Multiple response', q: 'Which controls are appropriate for off-premises dealing?', o: ['Recording the trade details promptly and completely', 'Reporting the trade through approved channels so the counterparty receives it promptly', 'Relying on the dealer\u2019s personal mobile phone records as the sole record', 'Including the trade in the normal trade capture process'], a: 'A,B,D', r: 'Off-premises dealing raises the risk of unrecorded or late-booked trades, so the trade must enter the same capture process and reach the counterparty promptly. A personal device as the only record fails record-keeping requirements.',
  },
  {
    c: '4', t: 'Original', s: 'Multiple response', q: 'Which statements about technology and risk management are correct?', o: ['Sufficient capacity should be maintained for normal and peak loads', 'Data confidentiality should be preserved by encrypting messages', 'Representatives should have unrestricted access to all systems', 'System changes should be tested before deployment'], a: 'A,B,D', r: 'Unrestricted access across systems defeats segregation of duties. Capacity planning, encryption and pre-deployment testing are standard technology controls.',
  },
  {
    c: '4', t: 'Original', s: 'Single choice', q: 'Before executing an OTC derivative trade governed by a Master Agreement, a Market Participant should obtain its own legal, tax and accounting advice in order to:', o: ['Establish the credit risk of the counterparty', 'Clarify enforceability, tax treatment and accounting consequences, including on a market disruption', 'Confirm that the counterparty has a licence', 'Set the price of the trade'], a: 'B', r: 'Legal, tax and accounting advice addresses the firm\u2019s own position under the documentation. Credit assessment and pricing are separate disciplines.',
  },
  {
    c: '4', t: 'Original', s: 'Multiple response', q: 'Which are appropriate when appointing an interdealer broker?', o: ['Conducting KYC on the broker', 'Performing a credit evaluation of the broker', 'Determining the position limits assigned to the broker', 'Asking the broker to predict the direction of the market'], a: 'A,B,C', r: 'KYC, credit evaluation and limit-setting are the controls that make the appointment safe. Seeking a market prediction is not an appointment control and invites reliance on unverified opinion.',
  },

  // ---------------------------------------------------------------- Chapter 5
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'An IDB receives an order from a principal subject to special conditions. The IDB must:', o: ['Relay the special conditions accurately to the counterparty', 'Advise the principal not to impose the conditions', 'Strip the conditions to make the order easier to fill', 'Charge more brokerage for the extra work'], a: 'A', r: 'The IDB is a conduit. It must convey the order as given; altering or dropping conditions misrepresents the principal\u2019s instruction.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'Which action must an IDB NOT take?', o: ['Take its own position by executing its own trades', 'Pass settlement instructions to the counterparties', 'Reveal counterparty names once the deal is concluded', 'Relay price quotations on receipt of an order'], a: 'A', r: 'An IDB acts as intermediary, not principal. Taking its own position puts it on the other side of its clients\u2019 trades and destroys the neutrality the role depends on.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'A price maker\u2019s quotation is dealt simultaneously by several IDBs. Subject to its limit, the price maker must:', o: ['Honour the quotation with each IDB, up to its limit', 'Choose which IDB to honour', 'Split the amount equally among the IDBs', 'Honour only the first IDB to deal'], a: 'A', r: 'A firm quotation is a commitment, so the price maker must honour it with each IDB subject to its limit. Choosing counterparties or splitting equally would breach the firmness of the quote.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'Jane, an FX dealer, is asked to transact an off-market rate with a corporate customer. Before doing so she should:', o: ['Obtain the express approval of her own senior management', 'Obtain the approval of the customer\u2019s board', 'Notify MAS in advance', 'Seek the approval of SFEMC'], a: 'A', r: 'An off-market rate transfers value and requires internal senior approval, which also creates the record that the rate was deliberate and authorised.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'A Market Participant lacks the limit to fill a counterparty\u2019s full amount but is trying to raise it. The appropriate response is to:', o: ['Indicate the minimum amount that can be done', 'Ask the IDB to commit the trade and sort out the limit later', 'Execute and seek credit approval afterwards', 'Say nothing until the limit is raised'], a: 'A', r: 'Stating what can be done lets the counterparty decide with accurate information. Committing without limit, or executing first, creates an unauthorised exposure.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'Before dealing as principal with a customer in exchange-traded securities, a Market Participant must:', o: ['Notify the customer that it is acting as counterparty', 'Obtain the customer\u2019s written consent to the trade', 'Disclose the exchange it will use', 'Confirm the customer\u2019s credit rating'], a: 'A', r: 'The customer must know it is dealing with the firm as principal rather than as agent, because that changes the nature of the relationship and the protections that follow.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'In Singapore Government Securities, confirmation of a transaction must be sent:', o: ['No later than the next business day', 'On trade date via MEPS+', 'On trade date via SWIFT', 'Within five business days'], a: 'A', r: 'The standard is confirmation no later than the following business day, which permits end-of-day batch confirmation.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'To avoid misunderstanding when quoting a money market transaction, a Market Participant should clearly state:', o: ['The settlement dates of the transaction', 'The trade date only', 'The precise settlement amount only', 'The counterparty\u2019s credit rating'], a: 'A', r: 'Money market quotes are convention-driven, so the one thing that must be explicit is the value or settlement date, which determines the accrual and the amount.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'Market convention for delta hedging of interest rate options assumes that:', o: ['A simultaneous delta hedge will not be entered into', 'A simultaneous delta hedge will be entered into', 'Delta hedging does not apply to interest rate options', 'No convention exists and the terms must always state it'], a: 'A', r: 'The convention assumes the hedge is not run simultaneously with the trade, which is why the delta quoted differs from a fully hedged economic exposure.',
  },
  {
    c: '5', t: 'Original', s: 'Multiple response', q: 'Which statements about stop-loss orders are correct?', o: ['There is no guarantee of execution at the stop price', 'A gap can produce an execution well beyond the stop level', 'A stop-loss order guarantees a fixed price to the counterparty', 'Once triggered, a stop typically becomes a market order'], a: 'A,B,D', r: 'A stop converts to a market order on triggering, so execution price depends on what the market offers — which a gap can make substantially worse.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'A trade contains a clear pricing error and both parties agree it should be unwound. The appropriate treatment is to:', o: ['Cancel only with the agreement of both parties and record the cancellation', 'Cancel it unilaterally before settlement', 'Leave it in place and adjust the next trade', 'Cancel it and delete the original record'], a: 'A', r: 'Cancellation requires bilateral agreement and a retained record. Deleting the original record would breach record-keeping obligations even where the cancellation is legitimate.',
  },
  {
    c: '5', t: 'Original', s: 'Single choice', q: 'The FX market is conventionally described as trading:', o: ['From 0500 Sydney on Monday to 1700 New York on Friday', 'From 0900 to 1700 each business day', 'Continuously, including the weekend', 'From 0900 Sydney on Monday to 1700 New York on Friday'], a: 'A', r: 'The market opens with Sydney at 0500 and closes with New York at 1700 on Friday, running continuously in between.',
  },

  // ---------------------------------------------------------------- Chapter 6
  {
    c: '6', t: 'Original', s: 'Multiple response', q: 'What are the purposes of a trade confirmation?', o: ['To advise the counterparty of the full economic details of the trade', 'To detect incorrect economic details before settlement', 'To reduce operational risk', 'To obtain senior management approval of the trade'], a: 'A,B,C', r: 'Confirmation is a control on accuracy and a record of the trade. It is not an approval mechanism; approval happens before execution.',
  },
  {
    c: '6', t: 'Original', s: 'Single choice', q: 'A third party payment is requested by a counterparty. A Market Participant may make it:', o: ['Where the counterparty instructs it with a valid reason and supporting documentation', 'Never, under any circumstances', 'Wherever the counterparty verbally requests it', 'Only with MAS approval in each case'], a: 'A', r: 'Third party payments are permitted where there is a genuine commercial reason and documentation supports it; the control is evidence, not a blanket prohibition.',
  },
  {
    c: '6', t: 'Original', s: 'Single choice', q: 'Under the ISDA Master Agreement, on a counterparty default the non-defaulting party may:', o: ['Close out and net all transactions with the defaulting counterparty covered by that Master Agreement', 'Close out and net transactions with all counterparties', 'Apply margin held to reduce the amount owed', 'Demand immediate payment without closing out'], a: 'A', r: 'Close-out netting operates within the single Master Agreement against the defaulting counterparty. It cannot reach transactions with other counterparties or with other agreements.',
  },
  {
    c: '6', t: 'Original', s: 'Single choice', q: 'The core documents of an ISDA Master Agreement structure are:', o: ['The Master Agreement and the Schedule', 'The Credit Support Annex and the confirmation template', 'The Schedule and the Credit Support Annex', 'The Master Agreement and the credit support deed'], a: 'A', r: 'The Master Agreement and the Schedule are the core; the Credit Support Annex and confirmations are supplements that sit on top of that framework.',
  },
  {
    c: '6', t: 'Original', s: 'Multiple response', q: 'Which are benefits of straight-through processing in settlement?', o: ['Fewer manual keying errors', 'Earlier matching of settlement instructions', 'Reduced operational risk', 'Elimination of counterparty credit risk'], a: 'A,B,C', r: 'STP addresses operational error and matching timeliness. Counterparty credit risk remains, because the counterparty can still fail.',
  },
  {
    c: '6', t: 'Original', s: 'Single choice', q: 'A trade is agreed on Monday with no market holiday in the following week. Settlement is due on Wednesday. Confirmation should be issued:', o: ['By the next business day, Tuesday', 'On Wednesday, at settlement', 'Within five business days', 'Only if the counterparty requests it'], a: 'A', r: 'Confirmation is due no later than the next business day after the trade, which gives time to detect and correct errors before settlement.',
  },

  // ---------------------------------------------------------------- Chapter 7
  {
    c: '7', t: 'Original', s: 'Multiple response', q: 'Which actions may the SFEMC take to manage a market disruption?', o: ['Convene a meeting of members', 'Discuss proposals with regulators and other market participants', 'Issue statements on measures and codes of conduct', 'Recommend procedures for determining a fixing rate'], a: 'A,B,C,D', r: 'All four are within the SFEMC\u2019s documented repertoire, with the important limit that it recommends rather than directs.',
  },
  {
    c: '7', t: 'Original', s: 'Single choice', q: 'During a market disruption, the most important action for a Market Participant is to:', o: ['Maintain effective communication with counterparties, settlement agents, customers and MAS', 'Maintain non-stop communication with all parties', 'Record all communications and report them to MAS', 'Switch to multimedia channels'], a: 'A', r: 'The standard is effective communication, not continuous communication, and certainly not blanket reporting to the regulator.',
  },
  {
    c: '7', t: 'Original', s: 'Multiple response', q: 'Which are recognised alternative settlement procedures when an FX value date falls on a disrupted day?', o: ['Extending the value date to the next business day', 'Agreeing value dates that both parties accept, or split delivery where local practice allows', 'Adjusting the exchange rate to the prevailing relevant swap mid-rate', 'Cancelling the trade without reference to the counterparty'], a: 'A,B,C', r: 'Rolling, agreeing dates or split delivery, and adjusting to the swap mid-rate are the documented procedures. Unilateral cancellation is exactly the conduct the guidance prohibits.',
  },
  {
    c: '7', t: 'Original', s: 'Single choice', q: 'A party considers suspending settlement unilaterally because its own systems have failed. It should:', o: ['Not suspend unilaterally, because failed settlements create credit exposure and can cascade into systemic risk', 'Suspend immediately to protect its own position', 'Suspend only for its largest counterparty', 'Suspend and inform the counterparty afterwards'], a: 'A', r: 'The chain effect of failed settlements is why unilateral suspension is to be avoided; the remedy is coordination, not self-protection.',
  },
  {
    c: '7', t: 'Original', s: 'Single choice', q: 'Where Singapore dollar settlement has been disrupted, a Market Participant should:', o: ['Follow the settlement instructions issued by MAS', 'Follow only the SFEMC guidelines', 'Apply its own bilateral arrangements', 'Wait for the counterparty to initiate'], a: 'A', r: 'For SGD settlement the guidance is specific: follow MAS instructions, which take precedence over general SFEMC recommendations.',
  },
  {
    c: '7', t: 'Original', s: 'Single choice', q: 'A representative negotiated a deal during a disruption and now wishes to withdraw, saying he lacked authority. This is:', o: ['Acceptable, because authority is a legal precondition', 'Bad practice; negotiations must be conducted by properly authorised persons in utmost good faith', 'Acceptable if the counterparty is told promptly', 'A matter for the compliance department alone'], a: 'B', r: 'Withdrawing on the ground of a lack of authority is expressly deemed bad practice; the firm must ensure the right people are at the table.',
  },
  {
    c: '7', t: 'Original', s: 'Multiple response', q: 'Which are among the causes of a market disruption contemplated by the guidance?', o: ['An unscheduled non-business day declared by a government', 'An unforeseen market event such as a liquidity squeeze', 'A sudden change of national policy or practice by a government or central bank', 'A scheduled public holiday gazetted a year in advance'], a: 'A,B,C', r: 'Scheduled holidays are not disruptions; the guidance is concerned with events outside normal planning that inhibit or make impossible normal trading or settlement.',
  },
  {
    c: '7', t: 'Original', s: 'Single choice', q: 'Central banks mandated central clearing of long-dated FX forwards and interest rate swaps principally in order to:', o: ['Increase the profitability of clearing houses', 'Reduce pre-settlement risk through a central counterparty backed by margin', 'Eliminate all risk from the market', 'Standardise the pricing of the contracts'], a: 'B', r: 'The objective is to reduce pre-settlement risk by interposing a CCP that collects margin proportionate to exposure. It reduces but does not eliminate risk.',
  },

  // ---------------------------------------------------------------- Chapter 8
  {
    c: '8', t: 'Original', s: 'Single choice', q: 'Which parties are involved in the benchmark rate setting process?', o: ['The benchmark administrator and the benchmark submitter', 'The Association of Banks in Singapore and the Monetary Authority of Singapore', 'The benchmark administrator and the exchange', 'The submitter and the clearing house'], a: 'A', r: 'The process itself involves the administrator, which oversees it, and the submitters, who contribute the inputs. Regulators and industry bodies set the framework rather than producing the rate.',
  },
  {
    c: '8', t: 'Original', s: 'Single choice', q: 'A dealer handling customer fixing orders in relation to a traded benchmark should:', o: ['Collect all customer interest and execute the net amount', 'Buy a larger amount than the customer requires to move the price in the firm\u2019s favour', 'Inform other market participants of a specific customer dealing at the fixing', 'Show large interest during the fixing window'], a: 'A', r: 'Netting genuine customer interest is the accepted practice. The other three are manipulation or a breach of confidentiality.',
  },
  {
    c: '8', t: 'Original', s: 'Single choice', q: 'A dealer is responsible for both benchmark contributions and opinions on benchmarks. To manage the conflict he should:', o: ['Declare the conflict and express opinions only after the benchmark is published', 'Provide opinions freely as long as they are not published', 'Stop providing opinions entirely', 'Ask a colleague to submit the contribution on his behalf'], a: 'A', r: 'Declaring the conflict and waiting until publication removes the possibility of influencing the rate he is contributing to. Delegating the submission does not address the conflict.',
  },
  {
    c: '8', t: 'Original', s: 'Single choice', q: 'Which is the best practice for a dealer who determines a benchmark contribution?', o: ['Not provide information on contributions to anyone outside the benchmark contribution process', 'Retain submission records for 90 days only', 'Avoid attending any economist briefing given within the firm', 'Sit in a separate building from the trading room'], a: 'A', r: 'Contribution information is confidential to the process. Record retention is far longer than 90 days, briefings are legitimate inputs, and physical separation is not the control that matters.',
  },
  {
    c: '8', t: 'Original', s: 'Multiple response', q: 'Which are prohibited behaviours for a benchmark submitter?', o: ['Colluding with other submitters on the level to be submitted', 'Executing transactions designed to move the benchmark input', 'Basing a submission on permitted market data and transactions', 'Adjusting a submission to benefit a proprietary position'], a: 'A,B,D', r: 'Collusion, manipulation of the input and submitting to favour a position are all prohibited. Using permitted market data is the intended basis of a submission.',
  },
  {
    c: '8', t: 'Original', s: 'Single choice', q: 'The hierarchy of evidence for a benchmark with limited liquidity prioritises:', o: ['Transactions that are observable and verifiable, moving progressively to less direct evidence', 'Whatever rate the submitter considers reasonable on the day', 'The rate implied by the firm\u2019s own book', 'The previous day\u2019s submission'], a: 'A', r: 'The hierarchy moves from directly observable transactions down to expert judgement, precisely so that judgement is used only as far down the hierarchy as necessary.',
  },
  {
    c: '8', t: 'Original', s: 'Multiple response', q: 'Which controls support the integrity of a benchmark submission process?', o: ['Record retention covering submissions and the information relied upon', 'Escalation and whistleblowing processes for suspicious rates', 'Independent audit or assurance of the process annually', 'Removing surveillance of electronic communications to protect privacy'], a: 'A,B,C', r: 'Record-keeping, escalation and independent assurance are the documented controls. Surveillance of electronic communications is itself one of them, not something to remove.',
  },
  {
    c: '8', t: 'Original', s: 'Single choice', q: 'A submitter notices that a submitted rate looks wrong. The correct action is to:', o: ['Escalate through the established process, which may include informing the administrator and MAS', 'Correct it quietly in the next submission', 'Leave it, because the administrator will notice', 'Inform a counterparty so that they can trade around it'], a: 'A', r: 'Escalation is the designed route and creates the record. Informing a counterparty would turn a process error into a disclosure of confidential information.',
  },

  // ------------------------------------------------------------------ Appendix A
  {
    c: 'appendix-A', t: 'Original', s: 'Single choice', q: 'A source-reference question asks which two statements are correct and offers four lettered combinations. The most reliable technique is to:', o: ['Judge each statement true or false first, then select the combination that matches', 'Choose the combination containing the longest statements', 'Select the option that repeats wording from the chapter', 'Pick the same letter as the previous question'], a: 'A', r: 'Combination items are constructed from independently true or false statements, so evaluating each statement is the only route that does not rely on test-taking guesswork.',
  },
  {
    c: 'appendix-A', t: 'Original', s: 'Single choice', q: 'In the review questions, a question on which of the following is an action a Market Participant may take in relation to customer money illustrates that:', o: ['External approval does not widen the permitted use of client money', 'Any internal approval suffices', 'Client money may be used if repaid', 'Client money may never be held'], a: 'A', r: 'Client money is applied only as the client directs. Compliance or trading-desk approval does not create a wider power to use it.',
  },

  // ------------------------------------------------------------------ Appendix B
  {
    c: 'appendix-B', t: 'Original', s: 'Single choice', q: 'The SGD lending restriction on non-resident financial institutions is implemented through:', o: ['Separate notices for banks, merchant banks and CMS licence holders', 'A single notice applying to all institution types', 'The FX Global Code', 'The Blue Book'], a: 'A', r: 'There are three instruments — MAS 757 for banks, MAS 1105 for merchant banks and SFA 04-N04 for CMS licence holders — so the applicable notice depends on the institution.',
  },
  {
    c: 'appendix-B', t: 'Original', s: 'Multiple response', q: 'Which documents are essential readings for FMRP?', o: ['The Securities and Futures Act and its subsidiary regulations', 'The Blue Book and the FX Global Code', 'The AML/CFT notices for capital markets intermediaries and for banks', 'The annual report of a single market participant'], a: 'A,B,C', r: 'The readings are statutes, industry codes and MAS notices. A single firm\u2019s annual report is not an essential reading.',
  },
  {
    c: 'appendix-B', t: 'Original', s: 'Single choice', q: 'The FX Global Code differs from the Blue Book principally because the FX Global Code:', o: ['Is a global set of principles for the wholesale FX market, while the Blue Book is Singapore-specific and covers multiple wholesale instruments', 'Is issued by MAS', 'Is legally binding on all Singapore firms', 'Applies only to spot FX'], a: 'A', r: 'Both are industry codes, but the Code is global and FX-focused while the Blue Book is Singapore-specific and spans FX, money markets, debt securities and derivatives.',
  },

  // ------------------------------------------------------- Cross-chapter method
  {
    c: 'cross-chapter-exam-method', t: 'Original', s: 'Single choice', q: 'A question asks what a dealer should do *before* transacting an off-market rate. Reading it as asking what to do *after* the trade is an error of:', o: ['Timing, which changes the control being tested', 'Arithmetic', 'Terminology only', 'Nothing, because the answer is the same'], a: 'A', r: 'Many conduct questions turn on sequencing — before, during or after execution. Substituting one for another selects the wrong control.',
  },
  {
    c: 'cross-chapter-exam-method', t: 'Original', s: 'Multiple response', q: 'Which techniques improve accuracy on FMRP questions that offer four lettered combinations?', o: ['Evaluate each statement independently before looking at the combinations', 'Eliminate combinations containing a statement you know to be false', 'Where two combinations differ by one statement only, decide that statement directly', 'Assume the longest combination is correct'], a: 'A,B,C', r: 'Independent evaluation and elimination are reliable. Option length carries no information about correctness.',
  },
  {
    c: 'cross-chapter-exam-method', t: 'Original', s: 'Single choice', q: 'A question asks which action is "most important" during a disruption. The best approach is to:', o: ['Prefer the option that reflects the stated principle rather than the most dramatic action', 'Prefer the most extreme option', 'Prefer the option mentioning the most parties', 'Prefer the longest option'], a: 'A', r: 'Superlative questions reward the option aligned with the governing principle — here, effective communication — not the most dramatic or widest-ranging response.',
  },

  // ============================================ Second wave: applied revision
  {
    c: '1', t: 'Original', s: 'Multiple response', q: 'Which statements about the relationship between the Blue Book and the FX Global Code are correct?', o: ['Both are industry codes rather than statutes', 'The Blue Book covers wholesale markets including FX, money markets, debt and derivatives', 'The FX Global Code is specific to the wholesale FX market', 'The FX Global Code overrides Singapore legislation where they conflict'], a: 'A,B,C', r: 'Both supplement rather than replace local law, and neither overrides legislation. They differ in geographic scope and in the instruments covered.',
  },
  {
    c: '1', t: 'Original', s: 'Single choice', q: 'Which body is the statutory regulator of Singapore\u2019s capital markets?', o: ['The Monetary Authority of Singapore', 'The Singapore Exchange', 'The Singapore Foreign Exchange Market Committee', 'The Association of Banks in Singapore'], a: 'A', r: 'MAS is the statutory regulator. SGX performs a frontline regulatory role, while SFEMC and ABS are industry bodies.',
  },
  {
    c: '2', t: 'Original', s: 'Multiple response', q: 'Which statements about personal account dealing controls are correct?', o: ['Pre-clearance is normally required before dealing', 'A representative must not deal ahead of a known client order', 'Personal dealing in a security the firm is researching may be restricted', 'Personal dealing is permitted whenever the representative uses a personal broker'], a: 'A,B,C', r: 'Pre-clearance, no front-running and restricted-list controls are standard. Using a personal broker does not remove any of them and may itself breach policy.',
  },
  {
    c: '2', t: 'Original', s: 'Single choice', q: 'A representative is asked to accept a gift from a client that exceeds the firm\u2019s permitted limit. The representative should:', o: ['Decline it and record the offer', 'Accept it and disclose at the next attestation', 'Accept it and share it with the desk', 'Accept it if the client insists'], a: 'A', r: 'Declining and recording protects both the individual and the firm, and creates the evidence that the limit was applied.',
  },
  {
    c: '3', t: 'Original', s: 'Multiple response', q: 'Which statements about handling client information are correct?', o: ['Confidentiality survives the end of the client relationship', 'Information may be shared internally only on a need-to-know basis', 'A regulator\u2019s lawful request is a permitted disclosure route', 'Confidentiality may be waived by the compliance department'], a: 'A,B,C', r: 'The obligation endures and is limited by lawful compulsion rather than internal preference, so an internal waiver does not exist.',
  },
  {
    c: '3', t: 'Original', s: 'Single choice', q: 'A salesperson wants to describe recent flows to a client. The acceptable approach is to:', o: ['Describe aggregated flows without identifying any counterparty', 'Name the counterparties but not the amounts', 'Name the largest counterparty only', 'Describe a single identifiable client trade'], a: 'A', r: 'Aggregated, anonymous colour conveys market information. Any detail that allows a counterparty to be identified breaches confidentiality.',
  },
  {
    c: '4', t: 'Original', s: 'Multiple response', q: 'Which statements about risk management governance are correct?', o: ['The board is responsible for oversight of risk management', 'Senior management must ensure the framework is sound and effective', 'Risk and compliance functions should be independent of the front office', 'The head of trading should approve the risk limits they trade within'], a: 'A,B,C', r: 'Allowing the front office to set and approve its own limits removes the independent check that makes limits meaningful.',
  },
  {
    c: '4', t: 'Original', s: 'Single choice', q: 'A firm discovers that a dealer has been booking fictitious trades. The most important immediate control failure to address is:', o: ['Inadequate segregation between dealing and trade processing or reconciliation', 'The dealer\u2019s level of product knowledge', 'The commission structure alone', 'The firm\u2019s marketing approach'], a: 'A', r: 'Fictitious trades survive only where the same person can both create and confirm them. Segregation and independent reconciliation are the controls that detect them.',
  },
  {
    c: '5', t: 'Original', s: 'Multiple response', q: 'Which statements about an IDB\u2019s obligations are correct?', o: ['An IDB must relay a principal\u2019s special conditions accurately', 'An IDB must not take its own position against a client', 'An IDB may reveal counterparty names before the deal is concluded', 'An IDB must honour confidentiality of principal identities until the deal is done'], a: 'A,B,D', r: 'Revealing counterparty names before the deal is concluded breaches the confidentiality that makes the broking relationship workable.',
  },
  {
    c: '6', t: 'Original', s: 'Single choice', q: 'A confirmation is sent and the counterparty disputes a material term. The correct response is to:', o: ['Investigate and resolve before settlement, escalating through the documentation process', 'Ignore the dispute until settlement', 'Settle and correct the record afterwards', 'Cancel the trade unilaterally'], a: 'A', r: 'The confirmation exists to catch exactly this before settlement. Settling first or cancelling unilaterally both convert a documentation issue into a loss or a dispute.',
  },
  {
    c: '6', t: 'Original', s: 'Multiple response', q: 'Which statements about close-out netting under an ISDA Master Agreement are correct?', o: ['It operates within a single Master Agreement', 'It reduces credit exposure to the defaulting counterparty', 'It requires legal enforceability in the relevant jurisdictions', 'It allows netting against transactions with unrelated counterparties'], a: 'A,B,C', r: 'Netting is confined to the transactions under one agreement with one counterparty, and its benefit depends entirely on enforceability.',
  },
  {
    c: '7', t: 'Original', s: 'Multiple response', q: 'Which statements about SFEMC\u2019s role during a market disruption are correct?', o: ['It may convene members and discuss proposals with regulators', 'It may issue statements on measures and codes of conduct', 'Its recommendations are binding on all market participants', 'Participants are strongly encouraged to adopt its recommendations'], a: 'A,B,D', r: 'The SFEMC recommends rather than directs; participants remain bound by their contractual obligations and are strongly encouraged to follow the recommendations.',
  },
  {
    c: '7', t: 'Original', s: 'Single choice', q: 'A disruption affects one leg of an FX swap value date. The parties should:', o: ['Establish a clear understanding before the value date and agree an adjustment such as rolling to the next business day', 'Cancel the swap', 'Wait for the value date to pass and then decide', 'Suspend all settlement until the market reopens'], a: 'A', r: 'The guidance is to communicate before the value date and agree an adjustment, which may include rolling the date or adjusting to the relevant swap mid-rate.',
  },
  {
    c: '8', t: 'Original', s: 'Multiple response', q: 'Which statements about benchmark submitter conduct are correct?', o: ['Submissions must be based on permitted market data and transactions', 'Collusion with other submitters is prohibited', 'A submitter may adjust a rate to benefit a proprietary position', 'Records of submissions and the information relied upon must be kept'], a: 'A,B,D', r: 'Adjusting a submission to favour a position is manipulation. Basing submissions on permitted evidence, avoiding collusion and retaining records are the core obligations.',
  },
  {
    c: '8', t: 'Original', s: 'Single choice', q: 'A submitter is asked by a colleague on the trading desk for the level they intend to submit. The submitter should:', o: ['Decline, because contribution information is confidential to the benchmark process', 'Provide it, because they are colleagues at the same firm', 'Provide it after the benchmark is published only', 'Provide an approximate figure'], a: 'A', r: 'Contribution information must not be shared with anyone outside the process, including colleagues whose positions could benefit. Publishing it first would still allow the desk to trade on it.',
  },

  // ------------------------------------------------------- Applied scenarios
  {
    c: '7', t: 'Original', s: 'Scenario', q: 'A typhoon closes the exchange for two days and an FX forward matures on the first closed day. What is the most appropriate immediate action?', o: ['Contact the counterparty to agree an adjusted value date under the contract, and record the agreement', 'Wait for the exchange to reopen and settle then without discussion', 'Declare the counterparty in default', 'Settle on the original date regardless'], a: 'A', r: 'A market disruption is not a default. The documented response is to communicate and agree an adjustment, such as rolling to the next business day, and to record what was agreed.',
  },
  {
    c: '5', t: 'Original', s: 'Scenario', q: 'A principal instructs an IDB with an order subject to a maximum price. In relaying it, the IDB omits the maximum. What has gone wrong?', o: ['The IDB failed to relay the principal\u2019s special conditions accurately', 'Nothing, because the maximum is implied by the market', 'The principal should have used a limit order on exchange', 'The IDB acted correctly to make the order fillable'], a: 'A', r: 'An IDB is a conduit for the principal\u2019s terms; dropping a condition changes the order and can cause the principal to trade on terms they never agreed.',
  },
  {
    c: '4', t: 'Original', s: 'Scenario', q: 'A dealer\u2019s daily profit and loss report is produced by the dealer and sent straight to finance. Which control is missing?', o: ['Independent reconciliation of the profit and loss by a function separate from the dealer', 'Nothing, if the dealer is experienced', 'Only a second signature on the report', 'Only an annual audit'], a: 'A', r: 'A self-reported profit and loss is not a control. Independence between the front office and the reporting or reconciliation function is what detects error and concealment.',
  },
  {
    c: '2', t: 'Original', s: 'Scenario', q: 'A client asks a representative to take a large position that would breach the firm\u2019s limit for that counterparty. The representative should:', o: ['Decline the excess, explain the limit, and escalate for a limit decision before trading', 'Execute the full amount and seek approval afterwards', 'Split the order across several days to avoid the limit', 'Execute it under a different client code'], a: 'A', r: 'The limit exists to cap exposure. Splitting the order or using another code circumvents the control and is a serious breach in its own right.',
  },
  {
    c: '1', t: 'Original', s: 'Multiple response', q: 'Which parties contribute to the regulation of Singapore\u2019s capital markets, and in what capacity?', o: ['MAS as statutory regulator', 'SGX and SGX RegCo in a frontline regulatory role', 'Clearing houses in managing counterparty risk under their rulebooks', 'The FX Global Committee as the statutory enforcer in Singapore'], a: 'A,B,C', r: 'The Global Foreign Exchange Committee sets global principles; it has no enforcement role in Singapore. MAS, the exchanges and the clearing houses each hold a distinct regulatory function.',
  },
];
