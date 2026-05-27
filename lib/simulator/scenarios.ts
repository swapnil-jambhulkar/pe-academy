import type { BriefingEmail, ScenarioDefinition } from "./types";

export const BRIEFING_EMAIL: BriefingEmail = {
  fromName: "Swapnil Jambhulkar",
  fromEmail: "s.jambhulkar@norlandcapital.co.uk",
  subject: "Urgent: Preliminary VDR Review - Project Apex (UK Healthcare Asset)",
  body: `We just received access to the Virtual Data Room for a lower-middle market healthcare group in the UK generating a management-reported £6.5M EBITDA. The seller wants an initial indication of interest (IOI) by Friday. Take a look at the preliminary teasers and financial summaries attached. I need your eyes on the quality of earnings before I hop into a partner meeting.`,
};

export const SCENARIOS: ScenarioDefinition[] = [
  {
    id: "ebitda-trap",
    title: "Workstream 1 - Quality of earnings",
    deskTask:
      "Using the management EBITDA bridge in 02_Financials, decide how you will treat the £1.2m \"Normalized pandemic-related efficiency gains\" line in the LBO baseline you will later defend in front of the IC.",
    introEmail: {
      subject: "RE: Project Apex - start with QoE, not the teaser headlines",
      body: `Thanks for jumping on this quickly.

Before you touch the LBO template, I want you living in the VDR like you would on day one: read the teaser for tone, then cross-read 02_Financials (EBITDA bridge + management accounts) and 03_QoE_&_VDD (vendor pack - sell-side, so read for gaps).

The seller is anchoring value on £6.5m "normalized" EBITDA. Your job in the next hour is not to be clever - it is to be forensic. Every add-back needs a primary-document anchor. If you cannot explain it to a partner in one sentence, it does not go in the base case.

When you are ready, reply to this thread with how you want to treat the single largest judgment call in the bridge: the £1.2m pandemic "efficiency" line. I will be in a partner meeting - write like you mean it.


- Swapnil`,
    },
    followUpCorrect: {
      subject: "RE: Project Apex - QoE judgment (good instincts)",
      body: `This is exactly the level of conservatism we need on a sponsor-backed healthcare file.

You correctly treated the pandemic "efficiency" line as non-recurring and highly judgmental. In practice, that means we do not give management credit in the entry multiple until a QoE vendor (buy-side) reconciles payroll, agency hours, and clinic-level margins against that narrative. That is how we avoid paying eight turns for a policy artefact.

Next workstream: capital structure. Banks are tightening; brokers are optimistic. I need your read on what we can actually underwrite vs. what looks good in a process deck.

Open 04_Capital_Structure when you are ready, then reply to my next note with your IC recommendation.


- Swapnil`,
    },
    followUpWrong: {
      subject: "RE: Project Apex - QoE judgment (let's recalibrate)",
      body: `Thanks for sending your reply - I read it carefully, and I want to be direct but fair.

The judgment you described is a very common day-one mistake: giving management partial credit for a line that is essentially a story about temporary operating conditions, not a durable run-rate cost structure. In PE, "we took cost out during the pandemic" is not automatically an EBITDA add-back - it can be a mix of one-offs, mix shift, and under-accrued opex that unwinds the moment volumes normalise.

What this workstream is really about is quality of earnings discipline: every pound in the bridge must be defensible under buyer-side diligence, not just plausible in a management workbook. If we leak even £1m of fake run-rate into the entry multiple, we can overpay by a multiple of that pound once debt capacity and exit assumptions bite.

Please re-open the EBITDA bridge in the VDR and re-read the footnotes in management accounts on agency spend and hours worked - then continue to the next email when you are ready. I will walk you through debt sizing next.


- Swapnil`,
    },
    attachment: {
      title: "Management EBITDA bridge (excerpt)",
      rows: [
        { label: "Reported EBITDA", value: "£5.2M" },
        { label: "Run-rate cost saves (audited)", value: "£0.4M" },
        { label: "Normalized pandemic-related efficiency gains", value: "£1.2M", highlight: true },
        { label: "Management \"normalized\" EBITDA", value: "£6.5M" },
      ],
    },
    options: [
      {
        id: "s1-a",
        letter: "A",
        label: "Accept it fully. Management knows their operational changes best.",
        replyDraft:
          "Hi Swapnil, I've reviewed the bridge. I'm comfortable accepting the full £1.2m pandemic efficiency add-back in our LBO baseline; management has the best visibility into operational changes.",
        isCorrect: false,
        wrongFeedback: {
          headline: "Multiple leakage on entry",
          body: "You just overpaid for the asset by up to £9.6M based on a generic 8x entry multiple. The LPs are wiped out.",
          severity: "high",
        },
      },
      {
        id: "s1-b",
        letter: "B",
        label: "Haircut it by 50% to be conservative.",
        replyDraft:
          "Hi Swapnil, I'd propose we haircut the £1.2m pandemic line by 50% for conservatism and hold the rest in the base case pending QoE.",
        isCorrect: false,
        wrongFeedback: {
          headline: "Still paying for non-recurring fiction",
          body: "You just overpaid for the asset by up to £9.6M based on a generic 8x entry multiple. The LPs are wiped out.",
          severity: "high",
        },
      },
      {
        id: "s1-c",
        letter: "C",
        label:
          "Completely reject the add-back. It’s highly speculative, non-recurring, and artificially inflates the entry multiple.",
        replyDraft:
          "Hi Swapnil, I would zero out the £1.2m pandemic \"efficiency\" add-back from the LBO baseline until buy-side QoE proves it is durable run-rate. It's too narrative-heavy to price today.",
        isCorrect: true,
      },
    ],
  },
  {
    id: "debt-sizing",
    title: "Workstream 2 - Debt capacity & IC credibility",
    deskTask:
      "Local UK clearing banks are capping senior debt at 3.5x Net Debt/EBITDA. The broker is anchoring the process at 5.5x. Decide what leverage stack you will put in front of the IC as the bankable base case.",
    introEmail: {
      subject: "RE: Project Apex - capital structure (read broker vs. lenders)",
      body: `Before you model anything aggressive, read 04_Capital_Structure/Broker_Leverage_Commentary.pdf - then sanity-check it against what we are hearing from relationship banks on UK healthcare exposure.

The IC does not reward "IRR theatre." It rewards a base case we can actually execute: a debt number we can defend in a lender meeting, with explicit risks flagged when the market is tightening.

Reply to this thread with the structure you want in the pack for tomorrow's internal huddle. Be explicit about what is base vs. sensitivity.


- Swapnil`,
    },
    followUpCorrect: {
      subject: "RE: Project Apex - leverage view (this is bankable)",
      body: `Agree with your approach.

Sizing senior at the 3.5x lender cap and carrying a realistic equity cheque - while flagging macro tightening as a first-class risk - is how we keep credibility with both the IC and the syndicate desk. If the deal only "works" at 5.5x senior, it does not work; it becomes a refinancing bet disguised as a valuation thesis.

Next workstream is commercial triage before modelling. There is a revenue export in 05_Commercial that should change how you think about growth assumptions.

Read the customer_accounts.csv preview and come back to me with what you would do before you build the revenue build.


- Swapnil`,
    },
    followUpWrong: {
      subject: "RE: Project Apex - leverage view (let's tighten the frame)",
      body: `Thanks for the note - I appreciate the intent to optimise returns, but I want to steer you gently on what this workstream is actually testing.

In live processes, brokers will always show you the "market" leverage number. Your job as the analyst is not to repeat that number in the IC pack; it is to translate it into what lenders will underwrite today, with documentation and covenants that survive confirmatory diligence. If we present a stack we cannot bank, we waste everyone's time and we burn credibility.

Please re-read the broker commentary alongside the clearing-bank guidance in my prior email. When you are ready, continue to the commercial triage thread - we will focus on concentration before any revenue growth story.


- Swapnil`,
    },
    options: [
      {
        id: "s2-a",
        letter: "A",
        label:
          "Model at 5.5x leverage using expensive mezzanine or third-party debt to minimize our equity check and boost gross IRR.",
        replyDraft:
          "Hi Swapnil, I'd take the process leverage seriously: model 5.5x with mezz to minimise equity and show gross IRR upside, with senior flex in sensitivities.",
        isCorrect: false,
        wrongFeedback: {
          headline: "IC credibility loss",
          body: "Senior lenders and the IC will challenge a stack that ignores clearing bank covenants. You’ve buried a refinancing cliff the deal may not survive.",
          severity: "medium",
        },
      },
      {
        id: "s2-b",
        letter: "B",
        label:
          "Size the senior debt strictly at 3.5x, model a realistic equity check, and flag macro debt tightening as a core deal risk.",
        replyDraft:
          "Hi Swapnil, base case should size senior at 3.5x per lender cap, hold a realistic equity cheque, and elevate rate/tightening as a core risk in the IC narrative (not a footnote).",
        isCorrect: true,
      },
      {
        id: "s2-c",
        letter: "C",
        label:
          "Show 5.5x in the IC deck for “upside IRR” but footnote that banks will probably land at 3.5x.",
        replyDraft:
          "Hi Swapnil, headline 5.5x for IRR optics in the deck, with a footnote that banks likely land at 3.5x so the IC sees upside and downside.",
        isCorrect: false,
        wrongFeedback: {
          headline: "Two base cases, zero accountability",
          body: "Sandbagging lender reality inside a footnote trains the IC on fiction. Debt capacity is a go / no-go gate, not a narrative flex.",
          severity: "medium",
        },
      },
    ],
  },
  {
    id: "cdd-triage",
    title: "Workstream 3 - Commercial diligence before the model",
    deskTask:
      "The customer_accounts.csv export shows the top two clinic clusters at ~48% of revenue. Decide your immediate next step before you touch revenue growth in the model.",
    introEmail: {
      subject: "RE: Project Apex - commercial triage before you model revenue",
      body: `We are in the final stretch before I need a coherent desk view for the partner meeting.

Before anyone opens a revenue build, I want a commercial diligence posture: concentration, referral risk, payer mix, and what evidence we still need from the VDR. The export in 05_Commercial is intentionally raw - treat it like a working session, not a chart for marketing.

Skim the teaser for positioning language, then read the CSV preview and the supporting notes in the VDR body text. When you are ready, reply with your next step - not your final answer, your next step.


- Swapnil`,
    },
    followUpCorrect: {
      subject: "RE: Project Apex - commercial triage (strong process sense)",
      body: `Yes - that is the right sequencing.

Flagging concentration and asking for cohort / retention workpapers before modelling growth is what separates execution-ready analysts from people who "build beautiful wrong models." We will not defend a growth case until we understand whether revenue is durable or fragile at the clinic cluster level.

That concludes the three desk checks for this simulation. You will see a post-mortem summary next - use it honestly. If this felt uncomfortable, good: live PE is uncomfortable in exactly these places.


- Swapnil`,
    },
    followUpWrong: {
      subject: "RE: Project Apex - commercial triage (small course correction)",
      body: `Thanks for the reply - and thank you for engaging seriously with the file.

What this workstream is testing is triage under concentration: when two clusters dominate revenue, the model is not the first tool you reach for. The first tool is evidence - retention, referrals, key clinicians, payer behaviour - because a spreadsheet will happily let you assume 10% growth forever while the commercial reality is a cliff.

I'm not trying to embarrass you - I am trying to mirror what a good VP will do on day one: redirect you quickly before you waste cycles building a base case that dies in diligence.

Read the CSV preview again and note the cluster names and share - then continue to your post-mortem summary.


- Swapnil`,
    },
    attachment: {
      title: "customer_accounts.csv (preview · revenue share)",
      rows: [
        { label: "Clinic cluster - Royal Devon sites", value: "26%", highlight: true },
        { label: "Clinic cluster - Midlands specialty", value: "22%", highlight: true },
        { label: "Remaining clinics (n=14)", value: "52%" },
      ],
    },
    options: [
      {
        id: "s3-a",
        letter: "A",
        label: "Project a 10% year-on-year growth rate across all clinics to show a strong base case.",
        replyDraft:
          "Hi Swapnil, given the platform quality, I'd move to a base case with 10% YoY revenue growth across clinics while we wait for fuller VDR data.",
        isCorrect: false,
        wrongFeedback: {
          headline: "Modeling past the red flag",
          body: "You’ve baked revenue concentration into an optimistic forecast without evidence. That’s how diligence surprises become write-downs.",
          severity: "medium",
        },
      },
      {
        id: "s3-b",
        letter: "B",
        label:
          "Flag severe customer/geographic concentration risk and request a localized cohort retention analysis from the VDR.",
        replyDraft:
          "Hi Swapnil, before any revenue build, I'd formally flag concentration (top two clusters ~48%) and request cohort / retention and referral analysis by cluster from the VDR.",
        isCorrect: true,
      },
      {
        id: "s3-c",
        letter: "C",
        label: "Assume top clinics are “sticky” and move straight to synergy assumptions.",
        replyDraft:
          "Hi Swapnil, I'd treat the top clusters as sticky anchors and proceed to synergy case work while diligence fills in.",
        isCorrect: false,
        wrongFeedback: {
          headline: "Commercial blind spot",
          body: "Key-man and referral concentration can unwind post-close. Triaging evidence before the model is non-optional.",
          severity: "medium",
        },
      },
    ],
  },
];
