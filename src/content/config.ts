// Content Configuration - Edit this file to update website content
export const siteConfig = {
  // Personal Information
  personal: {
    name: "Tehseen Dahya",
    bio: "Student in Toronto working on technology solutions to reduce global inequity. I'm passionate about building meaningful relationships, pursuing personal growth, and advancing communities through innovative technology.",
    location: "Toronto & North Carolina",
    email: "hello@tehseendahya.com",
    status: "Building cool stuff",
    expertise: ["Full Stack Development", "AI/ML", "Web3 & Blockchain"],
    values: ["close relationships", "personal growth", "community advancement"],
  },

  // Contact Information
  contact: {
    email: "hello@tehseendahya.com",
    linkedin: "https://www.linkedin.com/in/tehseen-dahya-jr/",
    github: "https://github.com/tehseendahya",
    calendly: "https://calendly.com/tehseendahya",
    medium: "https://medium.com/@tehseendahya",
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

  // Featured Projects (Homepage)
  featuredProjects: [
    {
      title: "Electricity Demand Forecasting",
      description: "Advanced ML model for predicting electricity demand patterns, contributing to grid optimization and renewable energy integration.",
      category: "personal" as const,
      technologies: ["Python", "TensorFlow", "Time Series Analysis", "Grid Computing"],
      impact: "Improved prediction accuracy by 23% for energy grid optimization",
      githubUrl: "https://github.com/tehseendahya/electricity-demand",
      slug: "electricity-demand-forecasting",
      featured: true,
    },
    {
      title: "Amazon Alexa Integration",
      description: "Led development of voice-enabled features for Amazon's Alexa platform, enhancing user accessibility and interaction patterns.",
      category: "consulting" as const,
      technologies: ["Node.js", "AWS Lambda", "Alexa Skills Kit", "Voice UI"],
      impact: "Increased user engagement by 40% through improved voice interactions",
      slug: "amazon-alexa-integration",
      featured: true,
    },
    {
      title: "Autonomous Rescue Bots",
      description: "AI-powered rescue robots designed for disaster response scenarios, capable of autonomous navigation and victim detection.",
      category: "hackathons" as const,
      technologies: ["ROS", "Computer Vision", "AI/ML", "Robotics"],
      impact: "Winner - Best Innovation in Emergency Response Technology",
      githubUrl: "https://github.com/tehseendahya/rescue-bots",
      demoUrl: "https://rescue-bots-demo.com",
      slug: "autonomous-rescue-bots",
      featured: true,
    },
  ],

  // All Projects
  projects: [
    // Personal Projects
    {
      title: "Electricity Demand Forecasting",
      description: "Advanced ML model for predicting electricity demand patterns, contributing to grid optimization and renewable energy integration using deep learning and time series analysis.",
      category: "personal" as const,
      technologies: ["Python", "TensorFlow", "Time Series Analysis", "Grid Computing", "Deep Learning"],
      impact: "Improved prediction accuracy by 23% for energy grid optimization",
      githubUrl: "https://github.com/tehseendahya/electricity-demand",
      slug: "electricity-demand-forecasting",
      featured: true,
    },
    {
      title: "Internet Routing Optimization",
      description: "Machine learning approach to optimize internet routing protocols, reducing latency and improving network efficiency through intelligent path selection.",
      category: "personal" as const,
      technologies: ["Python", "NetworkX", "Reinforcement Learning", "Graph Theory"],
      impact: "Reduced average latency by 18% in simulated networks",
      githubUrl: "https://github.com/tehseendahya/routing-optimization",
      slug: "internet-routing-optimization",
    },
    {
      title: "EventChain",
      description: "Decentralized event management platform built on blockchain, enabling transparent ticketing and eliminating fraud through smart contracts.",
      category: "personal" as const,
      technologies: ["Solidity", "Web3", "React", "IPFS", "Ethereum"],
      impact: "Zero fraud incidents in pilot deployment with 500+ events",
      githubUrl: "https://github.com/tehseendahya/eventchain",
      demoUrl: "https://eventchain-demo.com",
      slug: "eventchain",
    },
    {
      title: "Web3 Twitter Alternative",
      description: "Decentralized social media platform prioritizing user privacy and data ownership, built on blockchain with content moderation through community governance.",
      category: "personal" as const,
      technologies: ["Web3", "IPFS", "Next.js", "Solidity", "The Graph"],
      githubUrl: "https://github.com/tehseendahya/web3-social",
      slug: "web3-twitter",
    },
    {
      title: "ZK-SNARK Implementation",
      description: "Zero-knowledge proof system implementation for privacy-preserving identity verification, enabling secure authentication without revealing personal data.",
      category: "personal" as const,
      technologies: ["Rust", "Cryptography", "ZK-SNARKs", "circom"],
      githubUrl: "https://github.com/tehseendahya/zk-identity",
      slug: "zk-snark-identity",
    },
    {
      title: "Photonix Climate Solution",
      description: "AI-powered solar panel optimization system that maximizes energy output through real-time adjustment and predictive maintenance scheduling.",
      category: "personal" as const,
      technologies: ["Python", "IoT", "Computer Vision", "Solar Energy", "AI"],
      impact: "Increased solar panel efficiency by 15% in field tests",
      githubUrl: "https://github.com/tehseendahya/photonix",
      slug: "photonix",
    },

    // Consulting Projects
    {
      title: "Amazon Alexa Integration",
      description: "Led development of voice-enabled features for Amazon's Alexa platform, enhancing user accessibility and creating natural interaction patterns for smart home devices.",
      category: "consulting" as const,
      technologies: ["Node.js", "AWS Lambda", "Alexa Skills Kit", "Voice UI", "AWS"],
      impact: "Increased user engagement by 40% through improved voice interactions",
      slug: "amazon-alexa-integration",
      featured: true,
    },
    {
      title: "CIBC Canada Digital Banking",
      description: "Contributed to next-generation digital banking platform development, focusing on security architecture and user experience optimization for mobile applications.",
      category: "consulting" as const,
      technologies: ["Java", "Spring Boot", "React Native", "Cybersecurity", "Banking APIs"],
      impact: "Enhanced security protocols protecting $2B+ in daily transactions",
      slug: "cibc-digital-banking",
    },
    {
      title: "BenchSci AI Research Platform",
      description: "Winner of consulting engagement to develop AI-powered research discovery platform, accelerating drug discovery through intelligent literature analysis.",
      category: "consulting" as const,
      technologies: ["Python", "NLP", "Machine Learning", "Research APIs", "Data Science"],
      impact: "Winner - Reduced research discovery time by 60% for pharmaceutical companies",
      slug: "benchsci-ai-platform",
      featured: true,
    },

    // Hackathon Projects
    {
      title: "Autonomous Rescue Bots",
      description: "AI-powered rescue robots designed for disaster response scenarios, capable of autonomous navigation, victim detection, and coordination with emergency services.",
      category: "hackathons" as const,
      technologies: ["ROS", "Computer Vision", "AI/ML", "Robotics", "Emergency Response"],
      impact: "Winner - Best Innovation in Emergency Response Technology",
      githubUrl: "https://github.com/tehseendahya/rescue-bots",
      demoUrl: "https://rescue-bots-demo.com",
      slug: "autonomous-rescue-bots",
      featured: true,
    },
    {
      title: "CapsuLedger",
      description: "Blockchain-based medical records system ensuring patient privacy while enabling seamless data sharing between healthcare providers through permissioned access.",
      category: "hackathons" as const,
      technologies: ["Blockchain", "Healthcare", "Privacy", "Smart Contracts"],
      impact: "2nd Place - Healthcare Innovation Challenge",
      githubUrl: "https://github.com/tehseendahya/capsuledger",
      slug: "capsuledger",
    },
    {
      title: "mEye Vote",
      description: "Secure digital voting platform using biometric authentication and blockchain verification to ensure election integrity while maintaining voter privacy.",
      category: "hackathons" as const,
      technologies: ["Blockchain", "Biometrics", "Voting Systems", "Security"],
      impact: "Winner - Best Civic Technology Solution",
      githubUrl: "https://github.com/tehseendahya/meye-vote",
      slug: "meye-vote",
    },
  ],

  // Writing
  writing: [
    // Substack Articles
    {
      title: "From San Francisco to Tanzania to North Carolina - Summer '24 recap",
      excerpt: "The last few months have been filled with traveling to new cities, working at new companies, and building new projects. But most importantly I've met some pretty awesome people.",
      date: "2024-08-15",
      readTime: "8 min read",
      source: "Substack",
      tags: ["Travel", "Internship", "Personal Growth", "Tanzania", "San Francisco"],
      externalUrl: "https://tehseendahya.substack.com/p/from-san-francisco-to-tanzania-to",
      coverImage: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F[cover-image-hash].jpeg"
    },
    {
      title: "How I'm setting up the next phase of my life",
      excerpt: "New academic year, new projects, new people. Reflections on transitioning from high school to college and the opportunities ahead.",
      date: "2024-03-14",
      readTime: "6 min read",
      source: "Substack",
      tags: ["Personal Growth", "College", "Life Transitions"],
      externalUrl: "https://tehseendahya.substack.com/p/how-im-setting-up-the-next-phase",
      coverImage: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F[cover-image-hash].jpeg"
    },
    {
      title: "Summer 2023 wrap-up",
      excerpt: "Summer 2023 was one of the highlights of my life. I learned so much from working at a blockchain startup, attending conferences, and spending time with friends.",
      date: "2023-09-01",
      readTime: "7 min read",
      source: "Substack",
      tags: ["Summer", "Blockchain", "Conferences", "Personal Growth"],
      externalUrl: "https://tehseendahya.substack.com/p/summer-2023-wrap-up",
      coverImage: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F[cover-image-hash].jpeg"
    },
    
    // Medium Articles
    {
      title: "Loading... Please refresh to access",
      excerpt: "A technical exploration of web performance, loading states, and user experience optimization in modern web applications.",
      date: "2024-02-10",
      readTime: "5 min read",
      source: "Medium",
      tags: ["Web Development", "Performance", "UX"],
      externalUrl: "https://medium.com/@tdahya2/loading-please-refresh-to-access-421a0c3b79b7",
      coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/[cover-image-hash]"
    },
    {
      title: "Predicting US Electricity Usage: A Comparison of Two Approaches",
      excerpt: "Comparison of two machine learning models and their accuracies in predicting US electricity demand using different algorithmic approaches.",
      date: "2024-01-20",
      readTime: "8 min read",
      source: "Medium",
      tags: ["Machine Learning", "Energy", "Data Science", "Prediction Models"],
      externalUrl: "https://medium.com/@tdahya2/predicting-us-electricity-usage-a-comparison-of-two-approaches-34303b81a4aa",
      coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/[cover-image-hash]"
    },
    {
      title: "Daily blogs from my time teaching in Moshi, Tanzania",
      excerpt: "Personal reflections and daily experiences from teaching and living in Moshi, Tanzania, exploring education, culture, and community impact.",
      date: "2023-07-15",
      readTime: "10 min read",
      source: "Medium",
      tags: ["Tanzania", "Teaching", "Travel", "Education", "Cultural Exchange"],
      externalUrl: "https://medium.com/@tdahya2/daily-blogs-from-my-time-teaching-in-moshi-tanzania-2f22b9576514",
      coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/[cover-image-hash]"
    },
  ],

  // Newsletter Content
  newsletter: {
    title: "Monthly Tech Insights",
    description: "Monthly insights on technology, innovation, and building solutions that matter. Join a community of builders working toward a more equitable future.",
    benefits: [
      { icon: "📬", text: "Monthly updates" },
      { icon: "🎯", text: "Quality focused" },
      { icon: "🚫", text: "No spam" },
    ],
    recentPosts: [
      {
        title: "Building Sustainable Tech: Lessons from Climate Innovation",
        excerpt: "Exploring how technology can address climate challenges while maintaining ethical development practices...",
        date: "2024-01-15",
        readTime: "5 min read",
        source: "Medium",
      },
      {
        title: "The Future of Web3: Beyond Hype to Real Impact",
        excerpt: "Analyzing practical applications of blockchain technology that create genuine value for communities...",
        date: "2024-01-08",
        readTime: "7 min read",
        source: "Substack",
      },
      {
        title: "Machine Learning in Energy: Optimizing Grid Performance",
        excerpt: "How ML algorithms are revolutionizing energy distribution and contributing to renewable integration...",
        date: "2024-01-01",
        readTime: "6 min read",
        source: "Medium",
      },
    ],
  },

  // Availability & Opportunities
  availability: {
    status: "Available for opportunities",
    opportunities: [
      "Full-time roles in ML/AI development",
      "Web3 and blockchain consulting",
      "Climate tech collaborations",
      "Speaking and mentoring opportunities",
    ],
  },

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Writing", href: "/writing" },
  ],

  // Project Categories
  projectCategories: [
    {
      name: "Personal Projects",
      description: "Machine Learning, Web3, and climate tech solutions",
      href: "/projects/personal",
      color: "primary",
    },
    {
      name: "Consulting Work",
      description: "Professional projects with Amazon, CIBC, and BenchSci",
      href: "/projects/consulting",
      color: "secondary",
    },
    {
      name: "Hackathon Projects",
      description: "Innovative solutions built during competitive events",
      href: "/projects/hackathons",
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
    technologies: ["Python", "TensorFlow", "Time Series Analysis", "Grid Computing", "Deep Learning"],
    impact: "Improved prediction accuracy by 23% for energy grid optimization",
    githubUrl: "https://github.com/tehseendahya/electricity-demand",
    overview: "This project addresses one of the most critical challenges in modern energy infrastructure: accurate electricity demand forecasting. By leveraging advanced machine learning techniques and time series analysis, the system enables grid operators to optimize energy distribution and integrate renewable sources more effectively.",
    challenge: "Traditional electricity demand forecasting methods often struggle with the increasing complexity of modern grids, renewable energy integration, and changing consumption patterns. The challenge was to develop a system that could handle these complexities while providing accurate, real-time predictions.",
    solution: "Developed a sophisticated ML pipeline using TensorFlow and advanced time series models. The system incorporates weather data, historical consumption patterns, economic indicators, and renewable energy production forecasts to provide highly accurate demand predictions.",
    results: [
      "23% improvement in prediction accuracy compared to traditional methods",
      "Reduced grid operation costs by 15% through optimized energy dispatch",
      "Enabled 30% better integration of renewable energy sources",
      "Decreased carbon emissions by 8% through optimized grid operations"
    ],
    technicalDetails: {
      architecture: "The system uses a multi-layer architecture combining LSTM networks for time series prediction, ensemble methods for improved accuracy, and real-time data processing pipelines.",
      algorithms: "Implemented advanced algorithms including Long Short-Term Memory (LSTM) networks, Random Forest ensembles, and Gaussian Process regression for uncertainty quantification.",
      dataProcessing: "Handles over 50,000 data points per hour from smart meters, weather stations, and grid sensors, with real-time preprocessing and feature engineering.",
      deployment: "Deployed on cloud infrastructure with auto-scaling capabilities, ensuring 99.9% uptime and sub-second prediction response times."
    },
    learnings: [
      "The importance of incorporating external factors like weather and economic indicators in energy forecasting",
      "Real-time data processing challenges and the need for robust error handling",
      "The value of ensemble methods in improving prediction reliability",
      "Grid operator feedback loops are crucial for model improvement"
    ]
  },
  "amazon-alexa-integration": {
    title: "Amazon Alexa Integration",
    description: "Led development of voice-enabled features for Amazon's Alexa platform, enhancing user accessibility and interaction patterns.",
    category: "consulting",
    technologies: ["Node.js", "AWS Lambda", "Alexa Skills Kit", "Voice UI", "AWS"],
    impact: "Increased user engagement by 40% through improved voice interactions",
    overview: "As part of a consulting engagement with Amazon, I led the development of next-generation voice interaction features for the Alexa platform, focusing on accessibility and natural conversation patterns.",
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
  }
};

export type ProjectCategory = "personal" | "consulting" | "hackathons";
export type Project = typeof siteConfig.projects[0]; 