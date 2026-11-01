/* ==========================================================================
   Charmine Yang — Portfolio
   projects-data.js
   --------------------------------------------------------------------------
   Content for the pop-up that opens when a project / event card is clicked.

   HOW TO EDIT
   - The key (e.g. "proj-villagelink") must match the card's data-id in
     index.html. It is the same as the card's thumbnail file name.
   - images: list as many as you like. They are laid out 3 per row,
     with as many rows as needed. Put the files in images/details/.
   - text:   one string per paragraph, shown below the images.
             Leave the list empty [] to show no text.
   ========================================================================== */

const PROJECT_DETAILS = {
  'proj-villagelink': {
    title: "VillageLink Web Application",
    images: [
      'images/details/proj-villagelink-1.jpeg',
      'images/details/proj-villagelink-2.jpeg',
      'images/details/proj-villagelink-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'proj-threat-intel-visualisation': {
    title: "Threat Intelligence Visualisation",
    images: [
      'images/details/proj-threat-intel-visualisation-1.jpeg',
      'images/details/proj-threat-intel-visualisation-2.jpeg',
      'images/details/proj-threat-intel-visualisation-3.jpeg'
    ],
    text: [
      "This page provides a macro-view of the threat landscape, using Ribbon Charts and Bubble Maps to track the financial impact of attack vectors across global industries over time . It enables data-driven decisions regarding regional cybersecurity insurance and resource allocation.",
      "This diagnostic dashboard ranks assets by Weighted Asset Risk and uses Scatter Plots to isolate high-severity outliers. A Decomposition Tree allows technical managers to drill down into \"Ignored\" incidents to justify immediate firewall policy changes."
    ]
  },
  'proj-ai-phishing-scc2025': {
    title: "AI-Augmented Phishing Framework SCC 2025",
    images: [
      'images/details/proj-ai-phishing-scc2025-1.jpeg',
      'images/details/proj-ai-phishing-scc2025-2.jpeg',
      'images/details/proj-ai-phishing-scc2025-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'proj-ux-design': {
    title: "UX Design in Web Development",
    images: [
      'images/details/proj-ux-design-1.jpeg',
      'images/details/proj-ux-design-2.jpeg',
      'images/details/proj-ux-design-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'proj-nus-illustratum': {
    title: "NUS Illustratum Physics Competition",
    images: [
      'images/details/proj-nus-illustratum-1.jpeg',
      'images/details/proj-nus-illustratum-2.jpeg',
      'images/details/proj-nus-illustratum-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'proj-eng-business-internship': {
    title: "Engineering w Business Internship @ NYP 2023",
    images: [
      'images/details/proj-eng-business-internship-1.jpeg',
      'images/details/proj-eng-business-internship-2.jpeg',
      'images/details/proj-eng-business-internship-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'contrib-csa-volunteer': {
    title: "CSA Volunteer - SG Cyber Safe Youth Network",
    images: [
      'images/details/contrib-csa-volunteer-1.jpeg',
      'images/details/contrib-csa-volunteer-2.jpeg',
      'images/details/contrib-csa-volunteer-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'contrib-sct25-game-facilitator': {
    title: "Game Facilitator - Social Cohesion Training (SCT '25)",
    images: [
      'images/details/contrib-sct25-game-facilitator-1.jpeg',
      'images/details/contrib-sct25-game-facilitator-2.jpeg',
      'images/details/contrib-sct25-game-facilitator-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'contrib-nyp-ai-eae-festival': {
    title: "NYP AI EAE Festival 2025 + Open House 2026",
    images: [
      'images/details/contrib-nyp-ai-eae-festival-1.jpeg',
      'images/details/contrib-nyp-ai-eae-festival-2.jpeg',
      'images/details/contrib-nyp-ai-eae-festival-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-cyber-sports-day-ctf': {
    title: "Cyber Sports Day CTF",
    images: [
      'images/details/event-cyber-sports-day-ctf-1.jpeg',
      'images/details/event-cyber-sports-day-ctf-2.jpeg',
      'images/details/event-cyber-sports-day-ctf-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-exercise-cyber-star-2025': {
    title: "Exercise Cyber Star 2025 - SANS Learning Journey",
    images: [
      'images/details/event-exercise-cyber-star-2025-1.jpeg',
      'images/details/event-exercise-cyber-star-2025-2.jpeg',
      'images/details/event-exercise-cyber-star-2025-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-aisp-devsecops-sig': {
    title: "AiSP AI + DevSecOps SIG Meeting",
    images: [
      'images/details/event-aisp-devsecops-sig-1.jpeg',
      'images/details/event-aisp-devsecops-sig-2.jpeg',
      'images/details/event-aisp-devsecops-sig-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-web-hosting-fundamentals': {
    title: "Web Hosting Fundamentals",
    images: [
      'images/details/event-web-hosting-fundamentals-1.jpeg',
      'images/details/event-web-hosting-fundamentals-2.jpeg',
      'images/details/event-web-hosting-fundamentals-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-sg-youth-ai-meetup': {
    title: "SG Youth AI x CYS Monthly AI Meetup",
    images: [
      'images/details/event-sg-youth-ai-meetup-1.jpeg',
      'images/details/event-sg-youth-ai-meetup-2.jpeg',
      'images/details/event-sg-youth-ai-meetup-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-cybersecurity-101': {
    title: "Cybersecurity 101 Workshop",
    images: [
      'images/details/event-cybersecurity-101-1.jpeg',
      'images/details/event-cybersecurity-101-2.jpeg',
      'images/details/event-cybersecurity-101-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-cloud-quest-tournament': {
    title: "Cloud Quest Tournament",
    images: [
      'images/details/event-cloud-quest-tournament-1.jpeg',
      'images/details/event-cloud-quest-tournament-2.jpeg',
      'images/details/event-cloud-quest-tournament-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-ai-code-of-ancients': {
    title: "AI Code of Ancients",
    images: [
      'images/details/event-ai-code-of-ancients-1.jpeg',
      'images/details/event-ai-code-of-ancients-2.jpeg',
      'images/details/event-ai-code-of-ancients-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-aws-genai-cloudquest': {
    title: "AWS GenAI CloudQuest Tournament",
    images: [
      'images/details/event-aws-genai-cloudquest-1.jpeg',
      'images/details/event-aws-genai-cloudquest-2.jpeg',
      'images/details/event-aws-genai-cloudquest-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-nyp-infosec-dec-ctf': {
    title: "NYP Infosec Dec CTF",
    images: [
      'images/details/event-nyp-infosec-dec-ctf-1.jpeg',
      'images/details/event-nyp-infosec-dec-ctf-2.jpeg',
      'images/details/event-nyp-infosec-dec-ctf-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-sitxscs-career-mentoring': {
    title: "SITxSCS Career Mentoring Session",
    images: [
      'images/details/event-sitxscs-career-mentoring-1.jpeg',
      'images/details/event-sitxscs-career-mentoring-2.jpeg',
      'images/details/event-sitxscs-career-mentoring-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  },
  'event-sicw': {
    title: "Singapore International Cybersecurity Week",
    images: [
      'images/details/event-sicw-1.jpeg',
      'images/details/event-sicw-2.jpeg',
      'images/details/event-sicw-3.jpeg'
    ],
    text: [
      "Add a description of this project / event here.",
      "Add another paragraph here, or delete this line."
    ]
  }
};
