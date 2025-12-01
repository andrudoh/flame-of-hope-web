import type { StaticImageData } from "next/image";
import gbvImage1 from "@/assets/news-page/oct-16/image_1.jpg";
import gbvImage2 from "@/assets/news-page/oct-16/image_2.jpg";
import gbvImage3 from "@/assets/news-page/oct-16/image_3.jpg";
import gbvImage4 from "@/assets/news-page/oct-16/image_4.jpg";
import nyangoGelImage1 from "@/assets/news-page/aug-19/image_1.jpg";
import nyangoGelImage2 from "@/assets/news-page/aug-19/image_2.jpg";
import nyangoGelImage3 from "@/assets/news-page/aug-19/image_3.jpg";
import nyangoGelImage4 from "@/assets/news-page/aug-19/image_4.jpg";
import nyangoGelImage5 from "@/assets/news-page/aug-19/image_5.jpg";
import nyangoGelImage6 from "@/assets/news-page/aug-19/image_6.jpg";
import securityTrainingImage1 from "@/assets/news-page/jul-30/image_1.jpg";
import securityTrainingImage2 from "@/assets/news-page/jul-30/image_2.jpg";
import securityTrainingImage3 from "@/assets/news-page/jul-30/image_3.jpg";
import securityTrainingImage4 from "@/assets/news-page/jul-30/image_4.jpg";
import securityTrainingImage5 from "@/assets/news-page/jul-30/image_5.jpg";
import health9jaImage1 from "@/assets/news-page/jun-17/image_1.jpg";
import health9jaImage2 from "@/assets/news-page/jun-17/image_2.jpg";
import health9jaImage3 from "@/assets/news-page/jun-17/image_3.jpg";
import health9jaImage4 from "@/assets/news-page/jun-17/image_4.jpg";
import shendamImage1 from "@/assets/news-page/may-17/image_1.jpg";
import shendamImage2 from "@/assets/news-page/may-17/image_2.jpg";
import shendamImage3 from "@/assets/news-page/may-17/image_3.jpg";
import shendamImage4 from "@/assets/news-page/may-17/image_4.jpg";
import shendamImage5 from "@/assets/news-page/may-17/image_5.jpg";
import shendamImage6 from "@/assets/news-page/may-17/image_6.jpg";
import plasgeocImage1 from "@/assets/news-page/may-7/image_1.jpg";
import plasgeocImage2 from "@/assets/news-page/may-7/image_2.jpg";

export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  date: string;
  content: string;
  images: StaticImageData[];
  facebookUrl?: string;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "gbv-m-e-framework-oct-2025",
    title:
      "Flame of Hope Partners Develop GBV Monitoring and Evaluation Framework for Plateau State",
    summary:
      "Flame of Hope, with sponsorship from the Nigerian Women Trust Fund, convened M&E officers from across Plateau State for a two-day intensive training to develop a comprehensive framework for tracking and responding to Gender-Based Violence cases.",
    date: "Oct 16, 2025",
    content: `Jos, Plateau State – August 27, 2025

In a bid to strengthen the fight against Gender-Based Violence (GBV) in Plateau State, Flame of Hope, with sponsorship from the Nigerian Women Trust Fund, convened seasoned Monitoring and Evaluation (M&E) officers from various organizations across the state for a two-day intensive training.

The workshop, which held in Jos from Monday 25th to Tuesday 26th August 2025, was aimed at brainstorming and developing a comprehensive Monitoring and Evaluation framework to guide GBV interventions across the state.

The training was designed as a hands-on session, blending lectures, group discussions, and practical exercises with simulations of real-life GBV cases. Participants were taken through step-by-step scenarios on how to respond to incidents — from the initial report made by victims, to referrals and linkages with relevant support services.

According to the organizers, the goal of the meeting was to provide Plateau State with a unified system for tracking GBV cases, improving accountability, and ensuring that interventions are survivor-centered. They noted that the framework would serve as a tool for generating reliable data, harmonizing the work of different organizations, and guiding evidence-based decision-making by policymakers.

Participants described the training as timely and impactful, stressing that the framework will close gaps in case reporting, strengthen coordination among stakeholders, and ensure that survivors of GBV receive timely and adequate support.

One of the participants remarked, "This framework is a breakthrough. It gives us a clear structure to monitor progress, evaluate impact, and above all, ensure that survivors' voices are not lost in the process."

The Nigerian Women Trust Fund, sponsors of the program, reaffirmed their commitment to supporting initiatives that promote gender justice, women's empowerment, and the protection of vulnerable groups in Nigeria.

With the successful conclusion of the workshop, stakeholders are optimistic that the Plateau State GBV M&E framework will not only improve response mechanisms but also contribute significantly to reducing incidences of gender-based violence, ultimately creating safer communities for women and girls across the state.`,
    images: [gbvImage2, gbvImage3, gbvImage4],
    facebookUrl: "#",
    // facebookUrl:
    //   "https://m.facebook.com/story.php?story_fbid=pfbid02rVVk2iagKZa2hXBLg83dS7uD9Qzx5pTFywLD1MrHzyQA4y2gAfRze1JSnDnE6SVPl&id=100025685483494",
  },
  {
    id: "gbv-sensitization-nyango-gel-aug-2025",
    title:
      "No to GBV, Yes to Equality! – Flame of Hope Storms Nyango Gel with Sensitization Drive",
    summary:
      "Flame of Hope took the message of ending Gender-Based Violence to Nyango Gel community in Jos South, where traditional rulers, ward heads, women leaders, men leaders, youth leaders, and community development associations gathered for a powerful Town Hall meeting.",
    date: "Aug 19, 2025",
    content: `"No to GBV, Yes to Equality!" – FLAME-OF-HOPE Storms Nyango Gel with Sensitization Drive

FLAME-OF-HOPE took the message of ending Gender-Based Violence (GBV) to Nyango Gel community in Jos South, where traditional rulers, ward heads, women leaders, men leaders, youth leaders, and community development associations gathered for a powerful Town Hall meeting.

The event, hosted by the District Head of Nyango Gel, opened with a warm welcome from the community spokesperson who applauded Flame of Hope for bringing such an important conversation to the grassroots.

Speaking at the meeting, the Flame of Hope team lead explained what GBV is, its different forms, the dangers it poses, and how communities can work together to prevent it.

In his closing remarks, the District Head thanked Flame of Hope for the awareness campaign and urged his people to shun practices like child marriage, wife battering, denying women inheritance, child trafficking, and discrimination against girls.

The community leaders pledged to strengthen their commitment to protect women, girls, and all vulnerable persons from abuse. They also promised to carry the message to their various communities to say NO to GBV.`,
    images: [
      nyangoGelImage1,
      nyangoGelImage2,
      nyangoGelImage3,
      nyangoGelImage4,
      nyangoGelImage5,
      nyangoGelImage6,
    ],
    facebookUrl:
      "https://m.facebook.com/story.php?story_fbid=pfbid02BkHC4RQBFt7kizuYoPc8zhA4TXrzZmyXC923SETjeD1TtURdGmcqZMDFtUk4kqi8l&id=100025685483494",
  },
  {
    id: "gbv-training-security-personnel-jul-2025",
    title:
      "Flame of Hope Hosts One-Day GBV Training for Security Personnel in Plateau State",
    summary:
      "Flame of Hope organized a one-day capacity-building training for security personnel in Jos, bringing together officers from NSCDC, DSS, NDLEA, Vigilante Groups, and the Hunters Association to strengthen their role in GBV prevention and response.",
    date: "Jul 30, 2025",
    content: `FLAME-OF-HOPE Hosts One-Day GBV Training for Security Personnel in Plateau State

In a bold step toward tackling the rising cases of Gender-Based Violence (GBV) in Plateau State, FLAME-OF-HOPE, on 29th July 2025, organized a one-day capacity-building training for security personnel in Jos. Themed "The Role of Security Personnel in GBV Prevention and Response," the workshop brought together officers from the NSCDC, DSS, NDLEA, Vigilante Groups, and the Hunters Association of Nigeria for an impactful learning experience.

The training was conceived in recognition of the critical role that security agencies play in both preventing and responding to GBV within communities. As frontline responders, their actions—when grounded in empathy, legal knowledge, and ethical standards—can make a life-saving difference for survivors.

Throughout the day, participants were taken through key topics such as understanding the dynamics and root causes of GBV, legal and institutional frameworks guiding GBV response in Nigeria, and survivor-centered approaches to handling cases. Practical sessions encouraged inter-agency collaboration and emphasized the importance of confidentiality, documentation, and appropriate referrals in line with human rights standards.

Representatives from the Nigerian Women Trust Fund (NWTF), Susan Imohosen and Innocent Adoh, were present at the workshop to observe and support the training process. Their presence reinforced the importance of cross-sector partnerships in combating GBV.

Security leaders who attended expressed their gratitude to FLAME-OF-HOPE for what they described as a "timely and much-needed initiative," especially as GBV cases continue to rise across communities in Plateau State. They commended the organizers for bringing different security outfits together to discuss and learn about such a critical issue.

This workshop is one of many steps FLAME-OF-HOPE is taking to promote gender-sensitive policing and to build stronger, safer communities through informed and compassionate security practices.

Together, we can end gender-based violence—one trained officer, one informed response, one survivor-centered action at a time.`,
    images: [
      securityTrainingImage1,
      securityTrainingImage2,
      securityTrainingImage3,
      securityTrainingImage4,
      securityTrainingImage5,
    ],
    facebookUrl:
      "https://m.facebook.com/story.php?story_fbid=pfbid02ex9YFoT6BS1WUf4qJs9duk4eJhwKNa8YGzHJLBdVYU6iegAaM4xbuMgPzJ6Khk6Al&id=100025685483494",
  },
  {
    id: "health9ja-launch-nysc-camp-jun-2025",
    title: "Official Launching of HEALTH9JA at NYSC Camp, Plateau State",
    summary:
      "Flame of Hope team launched their HIV prevention mobile app HEALTH9JA at NYSC Camp, Plateau State. The feature-rich app provides timely information about HIV, STIs, and other health challenges, along with details of PEPFAR-supported facilities in Plateau State.",
    date: "Jun 17, 2025",
    content: `OFFICIAL LAUNCHING OF HEALTH9JA AT NYSC CAMP, PLATEAU STATE

FLAME-OF-HOPE Team was live yesterday for the official launching of our HIV prevention mobile app: HEALTH9JA. During the unveiling, the Program Manager Mr. Andrew Henry briefly introduced the mobile app to all the corners and explained the interesting features of the app. He encouraged those present to take advantage of the features of the app to learn more about HIV and other STIs and to try their knowledge on the Trivia challenges.

HEALTH9JA is a feature rich mobile application that gives timely information about HIV, STIs and other health challenges. You can also have details of all the PEPFAR supported facilities in Plateau State and have a one-on-one contact with our health counselors.

HEALTH9JA - Your Body, your Health, your Rights.`,
    images: [
      health9jaImage1,
      health9jaImage2,
      health9jaImage3,
      health9jaImage4,
    ],
    facebookUrl:
      "https://www.facebook.com/groups/flameofhope/permalink/683719514562908/",
  },
  {
    id: "gbv-community-voices-shendam-may-2025",
    title:
      "Flame of Hope Empowers Community Voices in Shendam LGA to Combat GBV in Plateau State",
    summary:
      "Flame of Hope organized a one-day capacity-building training for selected community voices across the Southern Senatorial Zone in Shendam, equipping local media, religious groups, women leaders, and youth influencers with knowledge and tools to combat Gender-Based Violence.",
    date: "May 17, 2025",
    content: `FLAME OF HOPE EMPOWERS COMMUNITY VOICES IN SHENDAM LGA TO COMBAT GBV IN PLATEAU STATE

Shendam, Plateau State – In a concerted effort to curb the rising tide of Gender-Based Violence (GBV) against women in Plateau State, FLAME OF HOPE, a non-governmental organization based in Jos, successfully organized a one-day capacity-building training for selected community voices across the Southern Senatorial Zone. The event, sponsored by The Nigerian Women Trust Fund, was held in Shendam, a strategic central hub within the zone, known for its diversity and accessibility to surrounding local government areas.

Plateau State, like many parts of Nigeria, continues to grapple with incidents of GBV, particularly in rural communities where cultural norms, limited awareness, and weak reporting systems allow such violence to persist unchecked. Recognizing the urgent need to reverse this trend, FLAME OF HOPE identified the critical role of community voices—local media, religious groups, women leaders, and youth influencers—in shaping social behavior and fostering safer environments. By equipping these leaders with practical knowledge, legal understanding, and advocacy tools, the training sought to create a ripple effect that reaches households, streets, and institutions across the southern zone.

The training held in Shendam drew enthusiastic participation from representatives of Shendam, Qua'an Pan, Mikang, Langtang North, Langtang South, and Wase LGAs. FLAME OF HOPE facilitated an interactive session that included:

• Understanding the root causes and types of GBV
• Identifying signs and early intervention strategies
• Legal frameworks protecting women and girls in Nigeria
• Community-based approaches to prevention and survivor support
• Group work and scenario-based role-plays

Facilitators included legal practitioners, gender experts, and survivors who shared powerful testimonies that highlighted the urgent need for proactive leadership at the grassroots level.

The training concluded with the adoption of a Community Action Commitment Charter, in which participants pledged to:

• Speak out and act against all forms of violence
• Sensitize their communities using culturally appropriate methods
• Collaborate with local authorities and NGOs to support survivors
• Establish community watch groups to detect and report GBV cases early

With local champions now trained and committed, FLAME OF HOPE expects a strengthened community-led GBV prevention and response structure that can significantly reduce cases of violence against women in the southern zone and Plateau State as a whole.

The organization affirmed its commitment to sustaining this momentum through continuous engagement, follow-up support, and collaboration with key stakeholders across the state. As the Executive Director of FLAME OF HOPE aptly put it, "When we empower the community voices with knowledge and tools, we empower entire communities. Shendam LGA is just the beginning."`,
    images: [
      shendamImage1,
      shendamImage2,
      shendamImage3,
      shendamImage4,
      shendamImage5,
      shendamImage6,
    ],
    facebookUrl:
      "https://m.facebook.com/story.php?story_fbid=pfbid02q9dVXT6UEQ57mxYxXqpfE1o3FM9krYFhT8cBXC8Ws5CHABAXZJWFAcZ6Kh9XY4f3l&id=100025685483494",
  },
  {
    id: "plasgeoc-collaboration-may-2025",
    title:
      "Plateau State Gender and Equal Opportunity Commission to Collaborate with Flame of Hope to Fight GBV in Plateau State",
    summary:
      "Flame of Hope paid an advocacy visit to the Plateau State Gender and Equal Opportunity Commission (PLASGEOC) to inform them of their current GBV project and foster partnership and collaboration in the fight against Gender-Based Violence.",
    date: "May 7, 2025",
    content: `PLATEAU STATE GENDER AND EQUAL OPPORTUNITY COMMISSION TO COLLABORATE WITH FLAME-OF-HOPE TO FIGHT GBV IN PLATEAU STATE

FLAME-OF-HOPE on Monday 5th of May 2025 paid an advocacy visit to the Plateau State Gender and Equal Opportunity Commission (PLASGEOC). The visit was to inform the commission of the current project being carried out by our organisation on Gender-Based Violence, sponsored by The Nigerian Women Trust Fund. Our team was received by the Secretary of the commission and other executive members of the commission on behalf of the chairperson who was on official assignment.

The secretary while welcoming our team took time to explain the functions of the commission which includes among others:

1. Implementation of gender-based violence prevention interventions
2. Responsible for the protection of women and children (vulnerable) against violence.
3. Mediating on domestic violence issues
4. Being in partnership/collaboration with other organizations with same purpose to fight against GBV
5. Monitor and evaluate gender-based program 
6. Advocacies
7. Engagement with stakeholders to reach out to grassroot
8. Sensitization/Campaign to create awareness on GBV

The Program Officer spoke on behalf of the Coordinator of FLAME-OF-HOPE, stating the reason for the visit. He explained that the meeting was to inform the commission about the project and foster partnership and collaboration with the commission being an organ of the government saddled with the responsibility to handle GBV issues in the state. He also made some suggestions that will help to make the work easier towards the achievement of our common goals. These included:

1. Provision of a short code or toll-free line in the state to call to report GBV incidences
2. The need for Witness protection for whistle blowers or GBV crime reporters.

Responding the secretary of the commission revealed that work is in progress to create an emergency center (a one stop shop) and the provision of a toll-free line in the state. She also appreciated FLAME-OF-HOPE for the visit and acknowledged their support in the fight against Gender Based violence. 

FLAME-OF-HOPE also appreciated PLASGEOC for their acknowledgment and thanked the commission for agreeing to partner with FLAME-OF-HOPE towards ensuring the success of the fight against GBV in Plateau State.`,
    images: [plasgeocImage1, plasgeocImage2],
    facebookUrl:
      "https://m.facebook.com/story.php?story_fbid=pfbid027jLNY8Yu3Z7zRpUmKtX5DaLYfEKLz7vhyvmPP9yGiMVYJoPRFpY7vNUMY7QAMzfBl&id=100025685483494",
  },
];

export const getNewsArticleById = (id: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id);
};
