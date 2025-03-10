import happy from './assets/emotions/happy.png';
import veryhappy from './assets/emotions/very-happy.png';
import sad from './assets/emotions/sad.png';

export const journeySteps = [
  {
    chapter: "Chapter 1",
    title: "Your First Paycheck – Where Does It Go?",
    question:
      "You just received your first paycheck, and you want to make a smart money move.",
    answers: [
      {
        emoji: "💰",
        heading: "Keep it in a savings account",
        text: "Safe, but money won’t grow much over time.",
        points: 5,
        add: true,
        feedback: {
          outcome: "You’ve chosen safety, but is it the best move?",
          lesson: "Keeping money in a savings account is safe, but over time, inflation erodes its value. The average interest rate on savings accounts is often lower than inflation, meaning your money loses purchasing power over time.",
          tip: "Learn More:",
          linkText: "Learn about investing",
          url: "https://www.scottishwidows.co.uk/investments/learn.html",
        },
        image: sad,
      },
      {
        emoji: "📈",
        heading: "Invest in the stock market",
        text: "Potentially high reward, but also risky if not diversified.",
        points: 10,
        add: true,
        feedback: {
          outcome: "You’ve taken a step into the investing world, but is it the best strategy?",
          lesson: "Investing in individual stocks can lead to high returns, but it’s also high risk. If you put all your money in one company and it fails, you lose everything. Professional investors spread their money across different assets (diversification) to reduce risk.",
          tip: "Learn More:",
          linkText: "Investing basics",
          url: "https://www.scottishwidowsbemoneywell.co.uk/financial-essentials/investing-basics.html",
        },
        image: happy, 
      },
      {
        emoji: "🏦",
        heading: "Open a Scottish Widows Stocks & Shares ISA",
        text: "A tax-efficient way to invest, but market risk still applies.",
        points: 15,
        add: true,
        feedback: {
          outcome: "Great choice! You’re investing tax-efficiently and thinking long-term",
          lesson: "A Stocks & Shares ISA lets you invest in a mix of stocks, bonds, and funds, while shielding your profits from tax. Unlike a regular savings account, it protects your money from inflation and allows it to grow over time.",
          tip: "Learn More:",
          linkText: "Stocks and Shares ISA",
          url: "https://platform.scottishwidows.co.uk/products-and-services/stock-and-shares-isa/",
        },
        image: veryhappy, 
      },
    ],
  },
  {
    chapter: "Chapter 2",
    title: "Diversifying Investments – Where Do You Put Your Money?",
    question: "You’ve started investing, but diversification is key. What’s your next move?",
    answers: [
      {
        emoji: "📈",
        heading: "Put everything in a single stock",
        text: "Potentially high returns, but very risky!",
        points: 5,
        add: true,
        feedback: {
          outcome: "You’re taking a big risk—will it pay off?",
          lesson: "Betting everything on a single stock could lead to huge rewards if it performs well, but if it drops, you lose everything, making diversification a much safer strategy.",
          tip: "Learn How to Diversify Your Investments:",
          linkText: "Scottish Widows Guide to Multi-Asset Funds",
          url: "https://adviser.scottishwidows.co.uk/expertise/individual-retirement-centre/multi-asset/customer-guide.html",
        },
        image: sad, 
      },
      {
        emoji: "📊",
        heading: "Invest in Scottish Widows Pension Fund",
        text: "Long-term security, but money is locked until retirement.",
        points: 15,
        add: true,
        feedback: {
          outcome: "Smart choice! You’re securing your future, but keep in mind pensions are long-term!",
          lesson: "A pension fund is one of the best long-term investments. You get tax benefits, employer contributions (if applicable), and compounding growth over decades. However, the trade-off is that you can’t access your pension until later in life.",
          tip: "Learn More & Plan Your Pension:",
          linkText: "What is a pension?",
          url: "https://www.scottishwidows.co.uk/retirement/retirement-explained/basics/pensions-guide.html",
        },
        image: veryhappy, 
      },
      {
        emoji: "💼",
        heading: "Open a Scottish Widows General Investment Account (GIA)",
        text: "More flexible than a pension, but no tax relief.",
        points: 10,
        add: true,
        feedback: {
          outcome: "Good move! You get more flexibility, but there are no tax benefits.",
          lesson: "A General Investment Account (GIA) is a good option if you’ve maxed out your ISA contributions or need more access to your investments. Unlike a pension, there are no restrictions on when you can withdraw, but you might pay tax on your gains.",
          tip: "Compare GIAs & ISAs:",
          linkText: "Scottish Widows GIA",
          url: "https://platform.scottishwidows.co.uk/client/products-and-services/general-investment-account/?accept=client",
        },
        image: happy, 
      },
    ],
  },
  {
    chapter: "Chapter 3",
    title: "Market Volatility – What’s Your Next Move?",
    question:
      "You’re finally feeling financially secure… until an unexpected expense hits you—a surprise home repair! How do you handle it?",
    answers: [
      {
        emoji: "💼",
        heading: "Stick with a diversified investment portfolio",
        text: "Long-term stability reduces short-term panic.",
        points: 15,
        add: true,
        feedback: {
          outcome: "Great move! Investing is a long game—patience pays off.",
          lesson: "Staying invested in a diversified portfolio allows you to ride out market fluctuations and benefit from long-term growth, rather than reacting to short-term drops.",
          tip: "Learn How to Handle Market Ups & Downs:",
          linkText: "Investing in the stock market",
          url: "https://www.scottishwidows.co.uk/investments/learn/investing-in-the-stock-market.html",
        },
        image: veryhappy, 
      },
      {
        emoji: "📉",
        heading: "Panic and sell everything",
        text: "Selling in a crash locks in losses!",
        points: 10,
        add: false,
        feedback: {
          outcome: "Selling when prices drop locks in your losses!",
          lesson: "Selling during a market crash turns a temporary paper loss into a real loss, preventing you from benefiting when the market recovers over time.",
          tip: "Understanding Risk & Emotional Investing:",
          linkText: "What is investing?",
          url: "https://www.scottishwidows.co.uk/investments/learn.html",
        },
        image: happy, 
      },
      {
        emoji: "💰",
        heading: "Shift everything to a savings account",
        text: "Safe, but you miss potential market recovery.",
        points: 5,
        add: true,
        feedback: {
          outcome: "You avoided risk, but you also locked in lower returns.",
          lesson: "Moving everything to cash protects against losses, but it also limits potential growth since savings accounts often fail to keep up with inflation.",
          tip: "When to Save vs. When to Invest:",
          linkText: "Scottish Widows Investment & Savings Guide",
          url: "https://www.scottishwidows.co.uk/investments/learn/savings-and-investments.html",
        },
        image: sad, 
      },
    ],
  },
  {
    chapter: "Chapter 4",
    title: "You want to secure your future. What’s your strategy?",
    question:
      "You want to secure your future. What’s your strategy?",
    answers: [
      {
        emoji: "💼",
        heading: "Open a Scottish Widows Workplace Pension or Personal Pension",
        text: "Tax benefits, employer contributions, but money is locked away.",
        points: 15,
        add: true,
        feedback: {
          outcome: "Fantastic! You’re maximizing tax benefits and employer contributions.",
          lesson: "A pension is one of the most tax-efficient ways to invest, with added employer contributions and government tax relief helping your money grow faster over time.",
          tip: "Plan for Your Retirement:",
          linkText: "Scottish Widows Pension Calculator",
          url: "https://www.scottishwidows.co.uk/retirement/calculators-tools.html",
        },
        image: veryhappy, 
      },
      {
        emoji: "📈",
        heading: "Invest through a Scottish Widows General Investment Account (GIA)",
        text: "Good flexibility, but lacks pension tax benefits.",
        points: 10,
        add: true,
        feedback: {
          outcome: "Good move, but a pension gives better tax benefits.",
          lesson: "A GIA lets you invest flexibly and withdraw anytime, but it lacks the tax advantages of a pension, meaning you might pay capital gains tax on your returns.",
          tip: "Compare Pensions vs. GIAs:",
          linkText: "Your Options",
          url: "https://www.scottishwidows.co.uk/investments/options.html",
        },
        image: happy, 
      },
      {
        emoji: "🕰",
        heading: "Delay investing for retirement",
        text: "Waiting makes it harder later!",
        points: 5,
        add: false,
        feedback: {
          outcome: "The later you start, the harder it is to save!",
          lesson: "The earlier you start saving for retirement, the less you need to save each month, thanks to the power of compound interest working over decades.",
          tip: "Why Starting Early Matters:",
          linkText: "Scottish Widows Funds",
          url: "https://www.scottishwidows.co.uk/investments/options/pip/scottish-widows.html",
        },
        image: sad, 
      },
    ],
  },
  {
    chapter: "Chapter 5",
    title: "Investing in Property – What’s the Best Move?",
    question:
      "You want to buy a home in the future. What’s your strategy?",
    answers: [
      {
        emoji: "🏦",
        heading: "Open a Scottish Widows Lifetime ISA (LISA).",
        text: "Gov bonus helps, but limited annual contributions.",
        points: 15,
        add: true,
        feedback: {
          outcome: "Great strategy! The government helps boost your savings.",
          lesson: "A Lifetime ISA helps first-time homebuyers save faster by offering a 25% government bonus, but it has an annual contribution limit.",
          tip: "Learn More:",
          linkText: "Scottish Widows Guide to Saving for a Home",
          url: "https://www.scottishwidowsbemoneywell.co.uk/life-money-moments/home-purchase.htm",
        },
        image: veryhappy, 
      },
      {
        emoji: "💳",
        heading: "Use most of your investments to buy ASAP",
        text: "Gets you in a home, but might not be the best timing.",
        points: 5,
        add: true,
        feedback: {
          outcome: "You got your home, but was the timing right",
          lesson: "Buying property is a long-term investment, but if you cash out stocks at the wrong time, you may miss out on future gains.",
          tip: "Plan Your Home Purchase Wisely:",
          linkText: "Scottish Widows Guide to Saving for a Home",
          url: "https://www.scottishwidowsbemoneywell.co.uk/life-money-moments/home-purchase.htm",
        },
        image: sad, 
      },
      {
        emoji: "🚀",
        heading: "Invest in cryptocurrency hoping to afford a home faster",
        text: "High volatility makes this risky!",
        points: 10,
        add: false,
        feedback: {
          outcome: "Exciting, but extremely risky!",
          lesson: "While crypto has created quick gains for some, it remains highly volatile, meaning you could lose most of your investment overnight.",
          tip: "Understanding Investment Risk:",
          linkText: "Guide to Investment Risks",
          url: "https://platform.scottishwidows.co.uk/wp-content/uploads/Guide-to-investment-risks.pdf",
        },
        image: happy, 
      },
    ],
  },
];

export const endings = [ {
  investorType: "The Financial Guru 🏆",
  endStory: "After years of smart investing, you retire early, mortgage-free, and travel the world stress-free. Your investments continue to grow, providing you a luxurious and secure lifestyle. Congratulations—you’ve mastered financial independence!"
},
{
  investorType: "The Balanced Investor 📊",
  endStory: "You built a strong, diversified portfolio and secured your future. You might not retire early, but you’ll enjoy a comfortable life with financial stability. You own a home, have a well-funded pension, and can afford occasional luxuries. Smart moves!"
},
{
  investorType: "The Learning Investor 🤔",
  endStory:"You’ve made decent financial choices, but a few missteps held you back. You’ll retire eventually, but you might have to work a few extra years to maintain your lifestyle. You have savings, but wish you had invested sooner!"
},
{
  investorType: "The Struggling Investor 😬	",
  endStory:"You took some risky bets or ignored key investment opportunities. You’re living paycheck to paycheck, with little in savings, and your retirement plans are looking shaky. You now realize the importance of financial planning and vow to turn things around before it’s too late!"
},
{
  investorType: "The Financially Lost 💸",
  endStory:"Your financial decisions were reckless or nonexistent. Without savings, investments, or a pension, retirement is not an option, and financial stress dominates your life. You now wish you had started learning about money management earlier… but it's never too late to start!"
}
]
