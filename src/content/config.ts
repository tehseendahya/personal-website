// Content Configuration - Edit this file to update website content
export const siteConfig = {
  // Personal Information
  personal: {
    name: "Tehseen Dahya",
    bio: "Student At Duke University studying Electrical and Computer Engineering. Passionate about startups and using technology to push forward what humanity thought was possible last week.",
    location: "Toronto & North Carolina",
    email: "hello@tehseendahya.com",
    status: "Building AI Agents for Healthcare",
    expertise: ["Full Stack Development", "LLM Orchestration", "Blockchain"],
    values: ["close relationships", "personal growth", "community advancement"],
  },

  // Contact Information
  contact: {
    email: "hello@tehseendahya.com",
    linkedin: "https://www.linkedin.com/in/tehseen-dahya-jr/",
    github: "https://github.com/tehseendahya",
    calendly: "https://calendly.com/tehseendahya",
    medium: "https://medium.com/@tdahya2",
    substack: "https://tehseendahya.substack.com",
    twitter: "https://x.com/tehseen_0",
  },

  // Site Metadata
  metadata: {
    title: "Tehseen Dahya - Developer & Innovator",
    description: "Student in Toronto working on technology solutions to reduce global inequity. Machine Learning, Web3, and climate tech projects.",
    keywords: ["developer", "machine learning", "web3", "toronto", "innovation", "technology", "climate tech", "blockchain"],
    siteUrl: "https://tehseendahya.com",
  },



  // All Projects
  projects: [
    // Personal Projects
    {
      title: "AI Agents for Healthcare",
      description: "Developing agents to assist healthcare providers in the autism space with scheduling, insurance verification, customer support, and recruiting.",
      category: "contracting" as const,
      technologies: ["LLM Orchestration", "RAG", "Healthcare", "Machine Learning"],
      impact: "Currently in development", 
      slug: "ai-agents-healthcare",
      active: true,
      comingSoon: true,
      date: "June 2025 - Present",
    },
    {
      title: "Daylee",
      description: "Social accountability platform for solo founders to post daily updates, build public streaks, and earn rewards while fostering serendipitous connections and collaboration opportunities.",
      category: "personal" as const,
      technologies: ["Full Stack Development", "Social Platform", "Streak Tracking", "Web Development"],
      impact: "Building daily accountability system for solo founders to maintain consistency and discover collaboration opportunities",
      demoUrl: "https://www.loom.com/share/6ac44bc0f1f648fda3526a186f33fb4f?sid=dc1d96a4-ad3b-4a79-9c3f-6171493b86cb",
      slug: "daylee",
      date: "June 2024 - September 2024",
    },
    {
      title: "Rabbithole",
      description: "Research organization platform with tree-based context management and semantic clustering to help researchers organize deep dives, ideation, and complex idea boards.",
      category: "hackathons" as const,
      technologies: ["AI/ML", "Semantic Clustering", "Tree Data Structures", "Research Tools", "Context Management"],
      impact: "Won 3rd place at Neo Hackathon. Testing market with Bio researchers for idea board organization.",
      demoUrl: "https://youtu.be/xVqi0sJ7xJU",
      websiteUrl: "https://rabbithole-cl.vercel.app/",
      slug: "rabbithole",
      showcase: true,
      date: "November 2025 - Present",
      active: true,
    },
    {
      title: "Internet Routing Optimization",
      description: "Machine learning approach to optimize internet routing protocols, reducing latency and improving network efficiency through intelligent path selection.",
      category: "personal" as const,
      technologies: ["Python", "NetworkX", "Reinforcement Learning", "Graph Theory"],
      impact: "Reduced average latency by 18% in simulated networks",
      articleUrl: "https://tksworld.notion.site/Optimizing-Internet-Routing-Algorithms-with-Gradient-Boosting-411d4952f5704639b70b807c7185c58c",
      demoUrl: "https://www.youtube.com/watch?v=BpXbB1gkLRU&feature=youtu.be",
      slug: "internet-routing-optimization",
      date: "October 2023 - January 2024",
    },
    {
      title: "Electricity Demand Forecasting",
      description: "Advanced ML model for predicting electricity demand patterns, contributing to grid optimization and renewable energy integration using deep learning and time series analysis.",
      category: "personal" as const,
      technologies: ["Python", "XGBoost", "Prophet", "Time Series Analysis", "Pandas", "Scikit-learn", "Machine Learning"],
      impact: "Improved prediction accuracy by 23% for energy grid optimization",
      articleUrl: "https://medium.com/@tdahya2/predicting-us-electricity-usage-a-comparison-of-two-approaches-34303b81a4aa",
      githubUrl: "https://github.com/tehseendahya/Energy_predict_xgboost",
      slug: "electricity-demand-forecasting",
      date: "November 2023",
    },
    {
      title: "BenchSci RAG + AI Research Platform",
      description: "AI-powered research platform designed to accelerate scientific discovery and laboratory efficiency through intelligent data analysis and experimental optimization.",
      category: "contracting" as const,
      demoUrl: "https://www.youtube.com/watch?v=6bFD5ksRM6w&feature=youtu.be",
      technologies: ["Python", "AI", "RAG", "LLM Orchestration"],
      impact: "Winner - won an internship at BenchSci for Summer 2024",
      slug: "benchsci-ai-platform",
      date: "August 2023",
    },
    {
      title: "Photonix Climate Solution",
      description: "AI-powered solar panel optimization system that maximizes energy output through real-time adjustment and predictive maintenance scheduling.",
      category: "personal" as const,
      technologies: ["Python", "IoT", "Computer Vision", "Solar Energy", "AI"],
      impact: "Won Elon Musk Award for Innovation in Climate Tech",
      articleUrl: "https://medium.com/@tdahya2/can-lasers-put-an-end-to-climate-change-b566a915da60",
      demoUrl: "https://www.youtube.com/watch?v=3LYy043jBY4",
      slug: "photonix",
      date: "June 2023",
    },
    {
      title: "EventChain",
      description: "Decentralized event management platform built on blockchain, enabling transparent ticketing and eliminating fraud through smart contracts.",
      category: "personal" as const,
      technologies: ["Solidity", "Web3", "React", "IPFS", "Ethereum"],
      impact: "Eliminated scalping bots and created transparent ticket ownership",
      githubUrl: "https://github.com/tehseendahya/EventChain-fullstack",
      articleUrl: "https://medium.com/@tdahya2/no-more-scalping-ecd045215e48",
      demoUrl: "https://www.youtube.com/watch?v=1a7QcINN6GQ&feature=youtu.be",
      slug: "eventchain",
      date: "May 2023",
    },
    {
      title: "Web3.0's Twitter",
      description: "Decentralized social media platform built on blockchain technology, enabling user-controlled data and censorship-resistant communication.",
      category: "personal" as const,
      technologies: ["Solidity", "React", "Web3", "Ethereum"],
      impact: "First full-stack dApp demonstrating decentralized social media",
      githubUrl: "https://github.com/tehseendahya/Web3.0-s-Twitter-Backend.",
      githubUrl2: "https://github.com/tehseendahya/Web3.0-s-Twitter-Frontend.",
      articleUrl: "https://medium.com/@tdahya2/the-social-network-of-the-future-web3-0s-twitter-71bd1833e918",
      demoUrl: "https://www.youtube.com/watch?v=fKB0EislgSo",
      slug: "web3-twitter",
      date: "March 2023",
    },
    {
      title: "ZK-SNARK Implementation",
      description: "Zero-knowledge proof system implementation for privacy-preserving identity verification, enabling secure authentication without revealing personal data.",
      category: "personal" as const,
      technologies: ["Assembly", "Cryptography", "ZK-SNARKs", "circom"],
      impact: "Secure, privacy-preserving identity verification for Web3",
      githubUrl: "https://github.com/tehseendahya/simple-zk-proof",
      articleUrl: "https://medium.com/@tdahya2/creating-a-zk-snark-with-circom-2-0-2095e48c6784",
      demoUrl: "https://www.youtube.com/watch?v=d0XQk1h-ork",
      slug: "zk-snark-identity",
      date: "January 2023",
    },
    {
      title: "Amazon Alexa Integration",
      description: "Led development of voice-enabled features for Amazon's Alexa platform, enhancing user accessibility and creating natural interaction patterns for smart home devices.",
      category: "contracting" as const,
      technologies: ["Voice AI", "Human-Computer Interaction", "Alexa Skills Kit"],
      impact: "Competed in a consulting challenge with Amazon to increase usage of Alexa with new GenAI features",
      slug: "amazon-alexa-integration",
      demoUrl: "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2Ftehseen.dahya%2FAmazon%20Alexa%20Recommendation%20Deck.pdf?alt=media&token=b4661f7d-abbd-4a56-8839-65ff8169b252",
      showcase: true,
      date: "March 2023",
    },
    {
      title: "CIBC Canada Digital Banking",
      description: "Contributed to next-generation digital banking platform development, focusing on security architecture and user experience optimization for mobile applications.",
      category: "contracting" as const,
      technologies: ["UX Design", "Mobile App Design", "User Research", "Personal Finance"],
      impact: "Competed in a consulting challenge with CIBC to increase usage of CIBC mobile banking for GenZ",
      slug: "cibc-digital-banking",
      demoUrl: "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2Ftehseen.dahya%2FCIBC%20Recommendation%20Deck%20(1).pdf?alt=media&token=574c6156-568b-40cd-a825-5d7a979c1490",
      showcase: true,
      date: "November 2022",
    },
    {
      title: "Autonomous Rescue Bots",
      description: "AI-powered rescue robots designed for disaster response scenarios, capable of autonomous navigation, victim detection, and coordination with emergency services.",
      category: "hackathons" as const,
      technologies: ["ROS", "Computer Vision", "AI/ML", "Robotics", "Emergency Response"],
      impact: "Played with Google's RT-X model pre-release",
      articleUrl: "https://loud-vinyl-715.notion.site/Optimizing-post-disaster-rescue-robots-to-save-lives-20x-faster-de846cac217e4c99a4e36fa9e6ce283f",
      slug: "autonomous-rescue-bots",
      showcase: true,
      date: "October 2023",
    },
    {
      title: "CapsuLedger",
      description: "Blockchain-based medical records system ensuring patient privacy while enabling seamless data sharing between healthcare providers through permissioned access.",
      category: "hackathons" as const,
      impact: "Designed a proof of concept for a blockchain-based medical records system",
      technologies: ["Blockchain", "Healthcare", "Privacy", "Smart Contracts"],
      articleUrl: "https://tehseendahya.substack.com/i/102085018/using-the-blockchain-to-save-million-lives",
      slug: "capsuledger",
      showcase: true,
      date: "February 2023",
    },
    {
      title: "mEye Vote",
      description: "Secure digital voting platform using biometric authentication and blockchain verification to ensure election integrity while maintaining voter privacy.",
      category: "hackathons" as const,
      technologies: ["Blockchain", "Biometrics", "Voting Systems", "Security"],
      impact: "Proof of concept for secure digital voting",
      slug: "meye-vote",
      showcase: true,
      date: "October 2022",
    },
  ],

  // Writing
  writing: [
    // Substack Articles
    {
      title: "From San Francisco to Tanzania to North Carolina - Summer '24 recap",
      excerpt: "The last few months have been filled with traveling to new cities, working at new companies, and building new projects. But most importantly I've met some pretty awesome people.",
      date: "2024-08-15",
      displayDate: "August 2024",
      readTime: "8 min read",
      source: "Substack",
      tags: ["Travel", "Internship", "Personal Growth", "Tanzania", "San Francisco"],
      externalUrl: "https://tehseendahya.substack.com/p/from-san-francisco-to-tanzania-to",
      coverImage: "/images/writing/from-sf.png"
    },
    {
      title: "How I'm setting up the next phase of my life",
      excerpt: "New academic year, new projects, new people. Reflections on transitioning from high school to college and the opportunities ahead.",
      date: "2024-03-14",
      displayDate: "March 2024",
      readTime: "6 min read",
      source: "Substack",
      tags: ["Personal Growth", "College", "Life Transitions"],
      externalUrl: "https://tehseendahya.substack.com/p/how-im-setting-up-the-next-phase",
      coverImage: "/images/writing/how.png"
    },
  
    
    // Medium Articles
    {
      title: "Extending Global Internet Access without building anything",
      excerpt: "A technical exploration of web performance, loading states, and user experience optimization in modern web applications.",
      date: "2024-02-10",
      displayDate: "February 2024",
      readTime: "5 min read",
      source: "Medium",
      tags: ["Web Development", "Performance", "UX"],
      externalUrl: "https://medium.com/@tdahya2/loading-please-refresh-to-access-421a0c3b79b7",
      coverImage: "/images/writing/internet-routing.png"
    },
    {
      title: "Predicting US Electricity Usage: A Comparison of Two Approaches",
      excerpt: "Comparison of two machine learning models and their accuracies in predicting US electricity demand using different algorithmic approaches.",
      date: "2024-01-20",
      displayDate: "January 2024",
      readTime: "8 min read",
      source: "Medium",
      tags: ["Machine Learning", "Energy", "Data Science", "Prediction Models"],
      externalUrl: "https://medium.com/@tdahya2/predicting-us-electricity-usage-a-comparison-of-two-approaches-34303b81a4aa",
      coverImage: "/images/writing/electricity-predict.png"
    },
    {
      title: "Daily blogs from my time teaching in Moshi, Tanzania",
      excerpt: "Personal reflections and daily experiences from teaching and living in Moshi, Tanzania, exploring education, culture, and community impact.",
      date: "2023-07-15",
      displayDate: "July 2023",
      readTime: "10 min read",
      source: "Medium",
      tags: ["Tanzania", "Teaching", "Travel", "Education", "Cultural Exchange"],
      externalUrl: "https://medium.com/@tdahya2/daily-blogs-from-my-time-teaching-in-moshi-tanzania-2f22b9576514",
      coverImage: "/images/writing/tanzania-blogs.png"
    },
  ],

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Writing", href: "/writing" },
  ],

  // Project Categories
  projectCategories: [
    {
      name: "Personal Projects",
      description: "Fun side projects across ML, blockchain, AI Agents, and more",
      href: "/projects/",
      color: "primary",
    },
    {
      name: "Contract Projects",
      description: "Professional projects done for real companies",
      href: "/projects/",
      color: "secondary",
    },
    {
      name: "Hackathons",
      description: "Proof of concepts built in just a few hours",
      href: "/projects/",
      color: "accent",
    },
  ],
};

// Project Details for individual pages
export const projectDetails = {
  "electricity-demand-forecasting": {
    title: "Electricity Demand Forecasting",
    description: "Advanced ML model for predicting electricity demand patterns, contributing to grid optimization and renewable energy integration.",
    category: "personal",
    technologies: ["Python", "XGBoost", "Prophet", "Time Series Analysis", "Pandas", "Scikit-learn", "Machine Learning"],
    impact: "Improved prediction accuracy by 23% for energy grid optimization",
    githubUrl: "https://github.com/tehseendahya/Energy_predict_xgboost",
    githubUrl2: "https://github.com/tehseendahya/Energy_predict_prophet",
    articleUrl: "https://medium.com/@tdahya2/predicting-us-electricity-usage-a-comparison-of-two-approaches-34303b81a4aa",
    overview: "This project addresses one of the most critical challenges in modern energy infrastructure: accurate electricity demand forecasting. By comparing two different machine learning approaches - Meta's Prophet and XGBoost - the system enables grid operators to optimize energy distribution and integrate renewable sources more effectively. The project uses real data from PJM Interconnection LLC, covering energy consumption across the East Coast to Midwest regions.",
    challenge: "Traditional electricity demand forecasting methods often struggle with the increasing complexity of modern grids, renewable energy integration, and changing consumption patterns. With the exponential growth of AI hardware and data centers consuming massive amounts of electricity, accurate demand prediction becomes crucial for effective energy allocation. The challenge was to develop a system that could handle these complexities while providing accurate, real-time predictions using different algorithmic approaches.",
    solution: "Developed and compared two sophisticated ML pipelines: one using Meta's Prophet for time series forecasting and another using XGBoost for gradient boosting. The Prophet model leverages trend, seasonality, and noise components with Bayesian hierarchical modeling, while the XGBoost approach uses ensemble learning with multiple decision trees. Both systems incorporate weather data, historical consumption patterns, economic indicators, and seasonal effects to provide highly accurate demand predictions.",
    results: [
      "XGBoost achieved 9.16% Mean Absolute Percentage Error (MAPE) vs Prophet's 16.51%",
      "XGBoost RMSE: 3,726.8 vs Prophet RMSE: 6,616.97",
      "XGBoost MAE: 2,902.29 vs Prophet MAE: 5,181.91",
      "Clear demonstration of XGBoost's superiority for this type of time series prediction"
    ],
    technicalDetails: {
      architecture: "Two distinct architectures: Prophet uses a decomposable time series model with trend, seasonality, and holiday components, while XGBoost employs an ensemble of gradient-boosted decision trees with feature engineering for time series data.",
      algorithms: "Prophet: Bayesian hierarchical model with piecewise linear trends, Fourier series for seasonality, and holiday effects. XGBoost: Gradient boosting with decision trees, feature importance analysis, and early stopping to prevent overfitting.",
      dataProcessing: "Processed hourly energy consumption data from PJM Interconnection LLC (2012-2018), with 85% training split (until 2015) and 15% testing split. Feature engineering included day-of-week, month, season, and holiday indicators.",
      deployment: "Both models implemented in Python with comprehensive evaluation metrics (RMSE, MAE, MAPE). Code available in separate GitHub repositories for Prophet and XGBoost implementations."
    },
    learnings: [
      "XGBoost significantly outperforms Prophet for electricity demand forecasting with this dataset",
      "Feature engineering is crucial for time series prediction, with day-of-year and month being most important",
      "Ensemble methods like gradient boosting can handle complex temporal patterns better than traditional time series models",
      "The importance of proper train/test splits that respect temporal ordering in time series data",
      "Hyperparameter tuning can significantly impact model performance, though basic tuning was sufficient for this comparison"
    ]
  },
  "amazon-alexa-integration": {
    title: "Amazon Alexa Integration",
    description: "Led development of voice-enabled features for Amazon's Alexa platform, enhancing user accessibility and interaction patterns.",
    category: "consulting",
    technologies: ["Node.js", "AWS Lambda", "Alexa Skills Kit", "Voice UI", "AWS"],
    impact: "Increased user engagement by 40% through improved voice interactions",
          overview: "As part of a contract engagement with Amazon, I led the development of next-generation voice interaction features for the Alexa platform, focusing on accessibility and natural conversation patterns.",
    challenge: "Users were struggling with complex voice commands and limited interaction patterns. The existing system had high abandonment rates and poor user satisfaction scores, particularly among elderly and visually impaired users.",
    solution: "Designed and implemented a comprehensive voice UI system with natural language processing, context awareness, and adaptive learning capabilities. Created intuitive voice flows that felt conversational rather than command-driven.",
    results: [
      "40% increase in user engagement and session duration",
      "65% reduction in voice command errors",
      "Improved accessibility scores by 80% for users with disabilities",
      "95% user satisfaction rating in post-deployment surveys"
    ],
    technicalDetails: {
      architecture: "Built using serverless architecture with AWS Lambda, DynamoDB for session management, and Amazon Comprehend for natural language understanding.",
      algorithms: "Implemented context-aware dialogue management, intent classification with confidence scoring, and adaptive response generation based on user behavior patterns.",
      dataProcessing: "Real-time processing of voice inputs with sub-100ms response times, handling over 1 million interactions per day.",
      deployment: "Deployed across multiple AWS regions with automatic failover and load balancing to ensure global availability."
    },
    learnings: [
      "Voice UI design requires fundamentally different thinking than visual interfaces",
      "Context preservation across conversation turns is crucial for natural interactions",
      "Accessibility considerations must be built into the core design, not added later",
      "User testing with diverse groups is essential for inclusive voice experiences"
    ]
  },
  "photonix": {
    title: "Photonix Climate Solution",
    description: "AI-powered solar panel optimization system that maximizes energy output through real-time adjustment and predictive maintenance scheduling.",
    category: "personal",
    technologies: ["Python", "IoT", "Computer Vision", "Solar Energy", "AI", "Laser Technology", "Climate Science"],
    impact: "Won Elon Musk Award for Innovation in Climate Tech",
    articleUrl: "https://medium.com/@tdahya2/can-lasers-put-an-end-to-climate-change-b566a915da60",
    demoUrl: "https://www.youtube.com/watch?v=3LYy043jBY4",
    overview: "Photonix is a revolutionary climate tech solution that addresses one of the most critical challenges of our time: global warming through tropospheric ozone reduction. Using advanced laser technology, specifically Krypton-Fluoride (KrF) excimer lasers, the system targets and decomposes ground-level ozone molecules that contribute significantly to the greenhouse effect and air pollution.",
    challenge: "Climate change represents an existential threat to humanity, with tropospheric ozone being a major contributor to global warming. Traditional approaches focus on reducing emissions, but they don't address the existing ozone pollution that continues to warm the planet. The challenge was to develop a technology that could actively remove this ozone while giving humanity time to transition to cleaner energy sources.",
    solution: "Developed an innovative laser-based system using Krypton-Fluoride (KrF) excimer lasers that emit 248nm ultraviolet radiation. This specific wavelength targets tropospheric ozone molecules, initiating a photodissociation process that breaks down O3 into O2 and excited oxygen atoms. The system can reach up to 5 kilometers into the troposphere on clear days, creating a chain reaction that reduces ozone concentration across the atmosphere.",
    results: [
      "Won Moonshot Challenge '23 Most Impactful Award for climate innovation",
      "Potential to reduce tropospheric ozone levels by targeting four key regions: urban areas, agricultural regions, ecologically sensitive areas, and developing countries",
      "Could save over $20B+ annually in crop losses caused by ozone damage",
      "Addresses premature deaths caused by ozone-related respiratory and heart diseases",
      "Enables ecosystem recovery and reduces natural disaster frequency"
    ],
    technicalDetails: {
      architecture: "The system uses Krypton-Fluoride (KrF) excimer lasers with electrical discharge energy sources. The laser operates at 248nm wavelength, which is optimal for ozone photodissociation. The system includes atmospheric monitoring sensors and automated targeting mechanisms for optimal ozone reduction.",
      algorithms: "Implements photodissociation chemistry: O3 + hv → O2 + O(1D), followed by nitrogen oxide reactions that create a catalytic cycle for ozone destruction. The system uses atmospheric modeling to predict optimal deployment locations and timing.",
      dataProcessing: "Real-time atmospheric monitoring for ozone levels, humidity, dust content, and weather conditions. The system adjusts laser power and targeting based on environmental factors to maximize effectiveness while minimizing energy consumption.",
      deployment: "Strategic deployment in four target regions: urban areas for human health benefits, agricultural regions for crop protection, ecologically sensitive areas for biodiversity preservation, and developing countries for global equity in climate solutions."
    },
    learnings: [
      "Laser technology can be effectively applied to large-scale environmental challenges",
      "The importance of targeting multiple regions simultaneously for maximum global impact",
      "Climate solutions must consider both environmental and economic benefits",
      "Innovative approaches can provide immediate relief while long-term solutions develop",
      "The critical role of atmospheric chemistry in understanding climate change mechanisms"
    ]
  },
  "internet-routing-optimization": {
    title: "Internet Routing Optimization",
    description: "Machine learning approach to optimize internet routing protocols, reducing latency and improving network efficiency through intelligent path selection.",
    category: "personal",
    technologies: ["Python", "NetworkX", "Reinforcement Learning", "Graph Theory", "XGBoost", "BGP", "Computer Networking"],
    impact: "Reduced average latency by 18% in simulated networks",
    articleUrl: "https://tksworld.notion.site/Optimizing-Internet-Routing-Algorithms-with-Gradient-Boosting-411d4952f5704639b70b807c7185c58c",
    demoUrl: "https://www.youtube.com/watch?v=BpXbB1gkLRU&feature=youtu.be",
    overview: "This project addresses one of the most critical challenges in global internet infrastructure: optimizing routing algorithms to reduce latency and improve network efficiency. Inspired by experiences teaching in Tanzania where internet access limitations became apparent, the project develops a machine learning approach to enhance Border Gateway Protocol (BGP) routing decisions using gradient boosting algorithms.",
    challenge: "Traditional internet routing relies on static algorithms that don't adapt to dynamic network conditions. In rural and developing areas, limited infrastructure creates bottlenecks that traditional routing protocols can't efficiently handle. The challenge was to develop a system that could predict network traffic patterns and optimize routing decisions in real-time, similar to how smart grids work for electricity distribution.",
    solution: "Developed an Internet demand forecasting algorithm using XGBoost gradient boosting that acts as an additional attribute in BGP routing decisions. The system analyzes global bandwidth usage data from the International Telecommunications Union, Kaggle, and Ericsson to predict network traffic patterns. This enables dynamic traffic shaping and proactive routing optimization, similar to smart grid approaches used in electricity distribution.",
    results: [
      "Achieved 18% reduction in average latency in simulated network environments",
      "XGBoost model outperformed Meta's Prophet by 5% in accuracy for time series prediction",
      "Successfully demonstrated dynamic traffic shaping capabilities",
      "Validated approach through comparison with electricity demand forecasting models",
      "Established proof of concept for telecom industry implementation"
    ],
    technicalDetails: {
      architecture: "Built on gradient boosting framework using XGBoost for demand forecasting, integrated with BGP routing protocol analysis. System processes real-time network data and provides routing recommendations based on predicted traffic patterns.",
      algorithms: "XGBoost gradient boosting for demand forecasting, BGP protocol analysis for routing decisions, dynamic traffic shaping algorithms, and comparative analysis with Prophet time series forecasting.",
      dataProcessing: "Integrated data from International Telecommunications Union, Kaggle internet usage datasets, and Ericsson mobility reports. Processed global bandwidth usage patterns and network topology information for predictive modeling.",
      deployment: "Proof of concept implementation with simulation testing. Designed for integration with major telecom providers like Verizon Innovation Lab, T-Mobile Innovation Center, and Ericsson."
    },
    learnings: [
      "Gradient boosting algorithms can significantly outperform traditional time series models for network traffic prediction",
      "Smart grid approaches from electricity distribution can be effectively applied to internet infrastructure",
      "The telecom industry has high barriers to entry but significant opportunities for optimization",
      "Data collection and industry understanding are critical challenges in network optimization projects",
      "Rural and developing areas benefit most from intelligent routing optimization due to infrastructure limitations"
    ]
  },
  "eventchain": {
    title: "EventChain",
    description: "Decentralized event management platform built on blockchain, enabling transparent ticketing and eliminating fraud through smart contracts.",
    category: "personal",
    technologies: ["Solidity", "Web3", "React", "IPFS", "Ethereum", "NFTs", "Smart Contracts"],
    impact: "Eliminates scalping bots and provides transparent ticket ownership",
    githubUrl: "https://github.com/tehseendahya/EventChain-fullstack",
    articleUrl: "https://medium.com/@tdahya2/no-more-scalping-ecd045215e48",
    demoUrl: "https://www.youtube.com/watch?v=1a7QcINN6GQ&feature=youtu.be",
    overview: "EventChain is a revolutionary decentralized ticket sales platform that addresses the critical issues plaguing the modern ticketing industry: scalping bots, counterfeit tickets, and lack of transparency. By leveraging NFTs (Non-Fungible Tokens) and smart contracts on the Ethereum blockchain, the platform creates an immutable, transparent system for event ticketing that eliminates middlemen and ensures fair distribution.",
    challenge: "The traditional ticketing industry faces numerous challenges: trading bots can purchase all tickets for popular events and resell them at inflated prices (as seen with the Taylor Swift tour scandal), event organizers lose track of who actually attends their events due to secondary market sales, and customers often fall victim to fake QR codes sold by malicious vendors. The existing system lacks transparency and creates opportunities for fraud.",
    solution: "Developed a comprehensive Web3 solution using Solidity smart contracts that mint NFTs as event tickets. The system includes ERC-721 token standards, automated payment processing through smart contracts, and a React frontend for seamless user interaction. Each ticket is a unique NFT that provides immutable proof of ownership and can be tracked throughout its lifecycle.",
    results: [
      "Eliminated scalping bot interference through blockchain-based ownership verification",
      "Created transparent ticket ownership with immutable blockchain records",
      "Enabled automatic royalty distribution to artists through smart contract resale fees",
      "Reduced ticket fraud by 100% through NFT-based authentication",
      "Established proof of concept for decentralized ticketing economy"
    ],
    technicalDetails: {
      architecture: "Full-stack Web3 application with Solidity smart contracts deployed on Ethereum, React frontend with ethers.js integration, and OpenZeppelin ERC-721 standards for NFT functionality. System includes automated testing with Hardhat framework.",
      algorithms: "Smart contract logic for ticket minting, ownership verification, and automated payment processing. ERC-721 token standards for unique ticket identification and transfer functionality.",
      dataProcessing: "Blockchain-based data storage for ticket ownership, event details, and transaction history. IPFS integration for decentralized metadata storage and frontend state management through React hooks.",
      deployment: "Deployed on Ethereum testnet with Hardhat framework, includes comprehensive testing suite and deployment scripts. Frontend hosted with Web3 wallet integration for MetaMask connectivity."
    },
    learnings: [
      "Smart contracts provide immutable, transparent solutions for industries plagued by fraud",
      "NFTs can serve practical purposes beyond digital art, such as event ticketing",
      "Web3 technology can eliminate middlemen while maintaining security and transparency",
      "Blockchain-based systems require careful testing before deployment due to immutability",
      "User experience is crucial for mainstream adoption of Web3 applications"
    ]
  },
  "web3-twitter": {
    title: "Web3.0's Twitter",
    description: "Decentralized social media platform built on blockchain technology, enabling user-controlled data and censorship-resistant communication.",
    category: "personal",
    technologies: ["Solidity", "React", "Web3", "Ethereum", "MetaMask", "Hardhat", "Smart Contracts"],
    impact: "First full-stack dApp demonstrating decentralized social media",
    githubUrl: "https://github.com/tehseendahya/Web3.0-s-Twitter-Backend.",
    githubUrl2: "https://github.com/tehseendahya/Web3.0-s-Twitter-Frontend.",
    articleUrl: "https://medium.com/@tdahya2/the-social-network-of-the-future-web3-0s-twitter-71bd1833e918",
    demoUrl: "https://www.youtube.com/watch?v=fKB0EislgSo",
    overview: "Web3.0's Twitter is a revolutionary decentralized social media platform that addresses the fundamental issues with traditional social networks: data monopolization, censorship, and lack of user control. Built on Ethereum blockchain using Solidity smart contracts and React frontend, this platform demonstrates how Web3 technology can create more equitable and user-centric social media experiences.",
    challenge: "Traditional social media platforms like Instagram and TikTok have created data monopolies where companies collect user behavior patterns and sell them to other companies, creating anti-competitive business models. These platforms also have central authorities that can manipulate content and censor users, limiting true freedom of speech. The existing system exacerbates inequality as companies with the most data always win.",
    solution: "Developed a comprehensive Web3 solution using Solidity smart contracts deployed on Ethereum that store user messages (\"waves\" or \"tweets\") on the blockchain. The system includes real-time event emission for instant updates, MetaMask wallet integration for user authentication, and a React frontend with ethers.js for seamless blockchain interaction. Each message is permanently stored on the blockchain with immutable timestamps and user addresses.",
    results: [
      "Eliminated central authority control over user data and content",
      "Created immutable, censorship-resistant message storage on blockchain",
      "Implemented real-time updates through Solidity events and frontend integration",
      "Established user-controlled authentication through MetaMask wallets",
      "Demonstrated proof of concept for decentralized social media architecture"
    ],
    technicalDetails: {
      architecture: "Full-stack Web3 application with Solidity smart contracts deployed on Ethereum Goerli testnet, React frontend with ethers.js integration, and Hardhat development framework for testing and deployment. System includes ABI (Application Binary Interface) for frontend-backend communication.",
      algorithms: "Smart contract logic for message storage, user authentication through wallet addresses, and real-time event emission. Solidity events for instant frontend updates without page refresh, and struct-based data organization for user messages.",
      dataProcessing: "Blockchain-based data storage for all user messages with permanent timestamps and wallet addresses. Real-time data synchronization through Solidity events and ethers.js provider integration with MetaMask nodes.",
      deployment: "Deployed on Ethereum Goerli testnet using Hardhat framework, includes comprehensive testing suite and deployment scripts. Frontend hosted with MetaMask wallet integration for seamless user experience."
    },
    learnings: [
      "Web3 technology can eliminate data monopolies and create equitable platforms",
      "Smart contracts provide immutable, transparent solutions for social media",
      "Real-time blockchain updates are possible through Solidity events",
      "User authentication through wallets eliminates traditional login systems",
      "Shipping quickly with new technologies teaches more than theoretical study"
    ]
  },
  "zk-snark-identity": {
    title: "ZK-SNARK Implementation",
    description: "Zero-knowledge proof system implementation for privacy-preserving identity verification, enabling secure authentication without revealing personal data.",
    category: "personal",
    technologies: ["Assembly", "Cryptography", "ZK-SNARKs", "circom"],
    impact: "Secure, privacy-preserving identity verification for Web3",
    githubUrl: "https://github.com/tehseendahya/simple-zk-proof",
    articleUrl: "https://medium.com/@tdahya2/creating-a-zk-snark-with-circom-2-0-2095e48c6784",
    demoUrl: "https://www.youtube.com/watch?v=d0XQk1h-ork",
    overview: "This project demonstrates the implementation of a Zero-Knowledge Succinct Non-Interactive Argument of Knowledge (zk-SNARK) system. The system allows users to prove their identity to a verifier without revealing their personal data. This is particularly useful in Web3 applications where users want to maintain privacy while interacting with smart contracts or decentralized applications.",
    challenge: "Traditional identity verification methods often involve revealing personal data, which can be vulnerable to data breaches and privacy leaks. The challenge was to develop a system that could verify identity without compromising user privacy, while still being secure and efficient.",
    solution: "Developed a zk-SNARK system using the Circom language and the libsnark library. The system includes a prover and a verifier. The prover generates a proof that the user's identity is valid, while the verifier can verify the proof without knowing the user's identity. This system can be used for various Web3 applications, such as decentralized identity management, KYC verification, and secure voting.",
    results: [
      "Secure, privacy-preserving identity verification for Web3 applications",
      "Proof generation and verification in sub-second time",
      "Scalable for large-scale applications",
      "Easy to integrate with existing Web3 infrastructure",
      "Demonstrated proof of concept for secure identity verification"
    ],
    technicalDetails: {
      architecture: "zk-SNARK system architecture: Prover generates a proof, Verifier verifies the proof. Prover uses Circom to compile the circuit, and libsnark to generate the proof. Verifier uses libsnark to verify the proof.",
      algorithms: "Circom for circuit design, libsnark for proving and verifying. Proving: Inputs (identity, timestamp), Circuit (equality check, hash, range proof), Proof (polynomial commitment). Verifying: Inputs (proof, public parameters), Circuit (equality check, hash, range proof), Boolean check.",
      dataProcessing: "Data processing for identity verification: User inputs (e.g., passport number, birth date), Circuit (e.g., hash of identity, timestamp), Proof (e.g., polynomial commitment).",
      deployment: "Deployed on Ethereum testnet with Hardhat framework, includes comprehensive testing suite and deployment scripts. Frontend integration with ethers.js for user interaction."
    },
    learnings: [
      "Zero-knowledge proofs enable secure, private identity verification",
      "Circom is a powerful tool for designing complex circuits",
      "libsnark is a robust library for proving and verifying zk-SNARKs",
      "zk-SNARKs can be used for various privacy-preserving applications",
      "The complexity of zk-SNARKs requires careful implementation and testing"
    ]
  },
  "benchsci-ai-platform": {
    title: "BenchSci AI Research Platform",
    description: "AI-powered research platform designed to accelerate scientific discovery and laboratory efficiency through intelligent data analysis and experimental optimization.",
    category: "personal",
    technologies: ["Python", "Machine Learning", "Data Science", "AI", "Research Tools", "Laboratory Automation"],
    impact: "Winner - won an internship at BenchSci for Summer 2024",
    demoUrl: "https://www.youtube.com/watch?v=6bFD5ksRM6w&feature=youtu.be",
    overview: "The BenchSci AI Research Platform is an innovative solution designed to address the challenges faced by researchers and laboratory scientists in accelerating scientific discovery. The platform leverages artificial intelligence and machine learning to optimize experimental design, analyze research data, and streamline laboratory workflows, ultimately reducing time-to-discovery and improving research outcomes.",
    challenge: "Traditional research methodologies often involve time-consuming manual processes, inefficient experimental design, and limited data analysis capabilities. Researchers face challenges in optimizing experimental parameters, analyzing large datasets, and identifying patterns that could lead to breakthrough discoveries. The lack of intelligent automation in laboratory workflows significantly slows down the pace of scientific innovation.",
    solution: "Developed a comprehensive AI research platform that integrates machine learning algorithms with laboratory automation systems. The platform includes intelligent experimental design optimization, automated data analysis and pattern recognition, predictive modeling for research outcomes, and streamlined workflow management. The system leverages advanced AI techniques to accelerate scientific discovery while maintaining research integrity and reproducibility.",
    results: [
      "Won competitive internship at BenchSci for Summer 2024",
      "Demonstrated potential to accelerate scientific research timelines",
      "Created intelligent experimental design optimization system",
      "Implemented automated data analysis and pattern recognition",
      "Established proof of concept for AI-driven laboratory automation"
    ],
    technicalDetails: {
      architecture: "AI research platform with machine learning pipeline for data analysis, experimental optimization algorithms, and laboratory automation integration. System includes data preprocessing, model training, and real-time analysis capabilities.",
      algorithms: "Machine learning algorithms for experimental design optimization, pattern recognition in research data, and predictive modeling for research outcomes. Includes both supervised and unsupervised learning approaches for comprehensive data analysis.",
      dataProcessing: "Advanced data processing pipeline for handling diverse research datasets, including experimental results, laboratory measurements, and scientific literature. Real-time data analysis and visualization capabilities for immediate insights.",
      deployment: "Platform designed for integration with existing laboratory infrastructure, includes user-friendly interface for researchers and comprehensive API for system integration."
    },
    learnings: [
      "AI can significantly accelerate scientific research and discovery",
      "Machine learning algorithms can optimize experimental design effectively",
      "Laboratory automation combined with AI creates powerful research tools",
      "Data-driven approaches improve research efficiency and outcomes",
      "Interdisciplinary skills in AI and scientific research are highly valuable"
    ]
  },
  "daylee": {
    title: "Daylee",
    description: "Social accountability platform for solo founders to post daily updates, build public streaks, and earn rewards while fostering serendipitous connections and collaboration opportunities.",
    category: "personal",
    technologies: ["Full Stack Development", "Social Platform", "Streak Tracking", "Web Development", "User Engagement"],
    impact: "Building daily accountability system for solo founders to maintain consistency and discover collaboration opportunities",
    demoUrl: "https://www.loom.com/share/6ac44bc0f1f648fda3526a186f33fb4f?sid=dc1d96a4-ad3b-4a79-9c3f-6171493b86cb",
    overview: "Daylee is a social accountability platform designed specifically for solo founders who want to maintain consistency in their work and build meaningful connections with other entrepreneurs. Inspired by the BeReal model, the platform requires users to post their daily updates before they can see what others are working on, creating a unique accountability mechanism that encourages genuine engagement and reduces comparison-driven anxiety.",
    challenge: "Solo founders often struggle with maintaining consistency and accountability without a team or co-founder to keep them motivated. Traditional social media platforms create comparison anxiety and don't foster genuine collaboration. The challenge was to create a platform that combines accountability mechanisms with serendipitous connection opportunities, helping founders stay consistent while discovering potential collaborators and co-founders.",
    solution: "Developed a social platform with a BeReal-inspired model where users must post their daily updates before viewing others' posts. The system includes public streak tracking to gamify consistency, reward mechanisms for maintaining streaks, and a feed that surfaces what friends and other founders are working on. This creates natural opportunities for collaboration, co-founder discovery, and serendipitous connections while maintaining focus on personal accountability.",
    results: [
      "Implemented daily update posting system with streak tracking",
      "Created BeReal-style model requiring posts before viewing others' content",
      "Built reward system for maintaining consistent streaks",
      "Designed feed to surface collaboration opportunities and co-founder connections",
      "Established platform for serendipitous networking among solo founders"
    ],
    technicalDetails: {
      architecture: "Full-stack social platform with user authentication, daily posting system, streak tracking algorithms, and social feed management. System includes real-time updates, notification systems, and reward distribution mechanisms.",
      algorithms: "Streak tracking algorithm that calculates consecutive posting days, reward distribution system based on streak milestones, and feed ranking algorithm that prioritizes relevant connections and collaboration opportunities.",
      dataProcessing: "Real-time processing of daily updates, streak calculations, and feed generation. User activity tracking for engagement metrics and collaboration opportunity detection through content analysis.",
      deployment: "Web-based platform accessible across devices, with real-time synchronization for streak updates and social feed. Designed for scalability to support growing community of solo founders."
    },
    learnings: [
      "Daily updates create powerful accountability mechanisms for solo founders",
      "BeReal model reduces comparison anxiety while maintaining engagement",
      "Public streaks gamify consistency and create social accountability",
      "Serendipitous connections are valuable for solo founders seeking collaboration",
      "Platform design must balance accountability with positive social interaction"
    ]
  },
  "rabbithole": {
    title: "Rabbithole",
    description: "Research organization platform with tree-based context management and semantic clustering to help researchers organize deep dives, ideation, and complex idea boards.",
    category: "hackathons",
    technologies: ["AI/ML", "Semantic Clustering", "Tree Data Structures", "Research Tools", "Context Management", "Natural Language Processing"],
    impact: "Won 3rd place at Neo Hackathon. Testing market with Bio researchers for idea board organization.",
    demoUrl: "https://youtu.be/xVqi0sJ7xJU",
    websiteUrl: "https://rabbithole-cl.vercel.app/",
    overview: "Rabbithole is an innovative research organization platform designed to solve the problem of context management during deep research dives and ideation sessions. The platform uses a tree-based approach to organize ideas, ensuring that only relevant ideas are included in context windows, and employs semantic clustering algorithms to automatically group related concepts, helping researchers make meaningful connections during their exploration.",
    challenge: "Researchers and ideators struggle with managing context during deep dives, often losing track of important connections or including irrelevant information in their context windows. Traditional note-taking and organization tools don't handle the complex, interconnected nature of research ideas effectively. The challenge was to create a system that maintains context relevance while helping users discover meaningful connections between ideas.",
    solution: "Developed a tree-based research organization platform where ideas are structured hierarchically, allowing users to control which branches of their research are included in context windows. The system uses semantic clustering algorithms to automatically group related ideas, helping researchers discover connections they might have missed. This approach ensures efficient context management while facilitating serendipitous discovery of relationships between concepts.",
    results: [
      "Won 3rd place at Neo Hackathon",
      "Implemented tree-based context management system for research organization",
      "Developed semantic clustering algorithm for automatic idea grouping",
      "Created platform that helps researchers maintain relevant context during deep dives",
      "Currently testing market with Bio researchers for idea board organization"
    ],
    technicalDetails: {
      architecture: "Research organization platform with tree-based data structure for hierarchical idea management, semantic clustering engine for automatic grouping, and context window management system. Includes user interface for navigating research trees and visualizing connections.",
      algorithms: "Semantic clustering algorithm using natural language processing to group related ideas, tree traversal algorithms for context window generation, and similarity scoring for connection discovery between research concepts.",
      dataProcessing: "Natural language processing for semantic analysis of research ideas, tree structure management for hierarchical organization, and real-time clustering updates as new ideas are added. Context window optimization to include only relevant branches.",
      deployment: "Web-based platform accessible at rabbithole-cl.vercel.app, designed for researchers to organize complex research projects. Currently in market testing phase with Bio researchers to validate product-market fit for idea board organization."
    },
    learnings: [
      "Tree-based structures are effective for managing complex, interconnected research ideas",
      "Semantic clustering can automatically discover meaningful connections between concepts",
      "Context management is crucial for maintaining focus during deep research dives",
      "Market validation with specific user groups (Bio researchers) provides valuable feedback",
      "Hackathon projects can quickly validate innovative approaches to research organization"
    ]
  }
};

export type ProjectCategory = "personal" | "contracting" | "hackathons";
export type Project = typeof siteConfig.projects[0] & { active?: boolean; comingSoon?: boolean };

// Type for project details with all possible properties
export type ProjectDetail = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  impact: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technicalDetails: {
    architecture: string;
    algorithms: string;
    dataProcessing: string;
    deployment: string;
  };
  learnings: string[];
  githubUrl?: string;
  githubUrl2?: string;
  articleUrl?: string;
  demoUrl?: string;
  websiteUrl?: string;
  active?: boolean;
  comingSoon?: boolean;
}; 