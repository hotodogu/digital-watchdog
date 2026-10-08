export const disclaimer =
  "Digital Watchdog was created solely for a group educational project. It is not a real organisation, government agency, charity or professional support service. It is not affiliated with, sponsored by or endorsed by any organisation mentioned or linked here. Content is for general education and does not replace professional advice. We do not investigate reports, recover funds or guarantee that a message, website or transaction is safe.";
export const resources = [
  {
    name: "Scamwatch",
    category: "Recognise & report",
    description:
      "Learn about scam tactics, find current warnings and report suspicious activity.",
    url: "https://www.scamwatch.gov.au/",
  },
  {
    name: "Cyber.gov.au",
    category: "Protect & recover",
    description:
      "Australian Government guidance on account security, device protection and cybercrime reporting.",
    url: "https://www.cyber.gov.au/",
  },
  {
    name: "Scam Safe Check",
    category: "Check warning signs",
    description:
      "Service Victoria’s guided questions for suspicious texts, emails, calls, websites and social media.",
    url: "https://service.vic.gov.au/scamcheck",
  },
  {
    name: "eSafety Commissioner",
    category: "Learn",
    description: "Practical information about scams and staying safer online.",
    url: "https://www.esafety.gov.au/key-topics/staying-safe/online-scams",
  },
  {
    name: "Be Connected",
    category: "Build confidence",
    description:
      "Free Australian Government learning resources for older Australians developing digital skills.",
    url: "https://beconnected.esafety.gov.au/",
  },
  {
    name: "IDCARE",
    category: "Identity support",
    description:
      "Independent identity and cyber support to help people respond to scams and identity misuse.",
    url: "https://www.idcare.org/",
  },
  {
    name: "National Debt Helpline",
    category: "Financial wellbeing",
    description:
      "Free financial counselling information for people experiencing debt or financial hardship.",
    url: "https://ndh.org.au/",
  },
];
export const guides = [
  {
    slug: "phishing",
    title: "Phishing emails & texts",
    category: "Messages & links",
    icon: "mail",
    summary: "When a familiar-looking message asks for something it shouldn’t.",
    intro:
      "Phishing uses messages, calls or fake websites to trick you into revealing personal information, passwords or payment details. A message may look like it came from a business you use every day.",
    example:
      "Your account will be suspended in 30 minutes. Verify your details at account-check.example to keep access.",
    signs: [
      "An unexpected deadline pressures you to act before checking.",
      "A link leads you to sign in or provide personal information.",
      "The address does not match the organisation’s official website.",
    ],
    why: "Familiar branding and an urgent problem can make a request feel routine. Sender names and logos can be copied, and a scam can use polished language.",
    actions: [
      "Pause. Do not use the message’s links, attachments or phone number.",
      "Open the organisation’s official app or type a known website address yourself.",
      "Contact the organisation using details you independently find.",
      "Never share passwords or one-time codes with someone who contacts you unexpectedly.",
    ],
    source: "https://www.scamwatch.gov.au/types-of-scams/phishing-scams",
  },
  {
    slug: "impersonation",
    title: "Impersonation scams",
    category: "Calls & trusted names",
    icon: "phone",
    summary:
      "A caller or message pretends to be your bank, the government or family.",
    intro:
      "Scammers borrow a trusted identity to ask for money, account access or sensitive information. A caller ID or a message in an existing text thread is not proof of who is contacting you.",
    example:
      "This is your bank’s security team. Your savings are at risk. Transfer them to our safe account immediately.",
    signs: [
      "Someone asks you to move money to a ‘safe’ account.",
      "You are told to keep the conversation secret or stay on the line.",
      "The caller asks for codes, remote device access or urgent payment.",
    ],
    why: "A claim of authority or a story about a family emergency can make you feel that acting quickly will protect someone.",
    actions: [
      "Hang up and take time to check independently.",
      "Contact your bank through its official app or the number on your card.",
      "For family requests, call the number you already have saved.",
      "Do not install software or move money at an unexpected caller’s request.",
    ],
    source: "https://www.scamwatch.gov.au/types-of-scams/phishing-scams",
  },
  {
    slug: "shopping",
    title: "Fake shops & marketplaces",
    category: "Shopping & payments",
    icon: "shopping",
    summary:
      "Convincing stores and listings can hide a seller who never delivers.",
    intro:
      "Buying and selling scams can use fake retail websites, copied listings and misleading payment requests. A professional design or social media advertisement does not establish that a seller is genuine.",
    example:
      "Today only: 90% off. Pay by bank transfer now to reserve your item. Buyer protection is not available for this deal.",
    signs: [
      "The offer is unusually cheap and there is pressure to pay immediately.",
      "The seller pushes you away from the marketplace’s payment system.",
      "Contact details, returns information or independent reviews are missing or inconsistent.",
    ],
    why: "A bargain, limited stock and copied product photos can make an unfamiliar shop feel credible.",
    actions: [
      "Check the seller using independent sources, not just reviews on its own site.",
      "Read delivery, refund and contact information before paying.",
      "Use payment options with buyer protection where available and understand their limits.",
      "Be cautious about requests to leave a platform or pay through hard-to-recover methods.",
    ],
    source: "https://www.scamwatch.gov.au/types-of-scams",
  },
  {
    slug: "social-media",
    title: "Social media & relationship scams",
    category: "People & persuasion",
    icon: "users",
    summary:
      "Fake profiles, ads and friendships can be used to build your trust.",
    intro:
      "Scammers can create fake profiles or take over real accounts. They may build a relationship over time, promote a fake opportunity or contact you through a friend’s compromised account.",
    example:
      "We’ve become so close, but I need emergency money before we can meet. Please don’t tell anyone about this.",
    signs: [
      "Someone you know only online asks for money or financial information.",
      "Excuses repeatedly prevent meeting or independently checking their story.",
      "A new relationship leads to a secret investment or urgent financial request.",
    ],
    why: "Attention, friendship and apparent shared interests can build trust gradually. Anyone can be manipulated; being scammed is not a personal failure.",
    actions: [
      "Pause financial requests, even from someone you feel close to.",
      "Check unexpected requests from friends through another contact method.",
      "Talk with someone you trust before sending money.",
      "Use the platform’s reporting tools and seek help if you have already shared money or details.",
    ],
    source: "https://www.scamwatch.gov.au/types-of-scams",
  },
];
export const safetyTips = [
  {
    title: "Make every password unique",
    text: "Use a strong, unique password or passphrase for each account. A reputable password manager can help you create and store them.",
    icon: "key",
  },
  {
    title: "Add another layer of protection",
    text: "Turn on multi-factor authentication (MFA). Use passkeys where supported. Never share a sign-in code with an unexpected caller.",
    icon: "shield",
  },
  {
    title: "Keep devices up to date",
    text: "Enable automatic updates for your operating system, browser and apps so security fixes are installed promptly.",
    icon: "refresh",
  },
  {
    title: "Back up what matters",
    text: "Keep regular backups of important files and photos. Check that you can recover them if a device is lost or compromised.",
    icon: "folder",
  },
  {
    title: "Check through another channel",
    text: "Use an official app, a saved number or a website address you already know. Do not rely on contact details supplied in a suspicious message.",
    icon: "phone",
  },
  {
    title: "Share less personal information",
    text: "Review privacy settings and be thoughtful about what you post. Personal details can help someone impersonate you or make a scam more convincing.",
    icon: "lock",
  },
];
