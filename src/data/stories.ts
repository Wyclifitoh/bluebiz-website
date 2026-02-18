export interface Story {
  slug: string;
  type: "blog" | "newsletter";
  category: "Impact Story" | "Newsletter";
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  author?: string;
  coverImage: string;
  content?: string; // HTML string for blog posts
  downloadUrl?: string; // PDF path for newsletters
  issueNumber?: number;
}

export const stories: Story[] = [
  {
    slug: "geoffrey-ombati-waste-to-opportunity",
    type: "blog",
    category: "Impact Story",
    title: "Turning Waste into Opportunity: The Geoffrey Ombati Story",
    excerpt:
      "Where others saw trash, Geoffrey saw potential. From the streets of Mombasa, a youth-led recycling enterprise now processes 10–12 tons of recyclables monthly and employs over 60 people.",
    date: "February 2025",
    readTime: "5 min read",
    author: "BlueBiz Program Team",
    coverImage:
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    content: `
      <p>The streets of Mombasa are alive with movement, noise, and color — but for many, the piles of waste scattered across neighborhoods are just part of the backdrop. For Geoffrey Ombati, they were the beginning of an idea that would change his life. Where others saw trash, he saw potential. Where society saw limitations — especially for someone with a disability — he saw possibilities. Geoffrey didn't just dream of a business; he imagined a future where environmental conservation and youth empowerment could go hand in hand.</p>

      <p>Today, that vision is no longer just an idea. Geoffrey is the founder of <strong>Royal World Waste Managers</strong>, a youth-led enterprise that aggregates plastics, paper, and cartons from households, institutions, and informal waste collectors, linking them to formal recycling markets. What began as a small initiative has grown into a thriving business that now processes <strong>10–12 tons of recyclables monthly</strong>, employs 10 full-time staff, supports over 60 casual laborers, and has mentored more than 200 youth across the coastal region.</p>

      <h2>The Early Challenges</h2>
      <p>But the road to this success was far from smooth. In the early days, Geoffrey faced limited capital, minimal value addition, and volatile scrap prices that threatened the sustainability of his enterprise. He worked tirelessly, balancing operational challenges with the ambition to scale — often putting in long hours and creative problem-solving just to keep the idea alive. The reality was clear: without external support, his dream risked remaining just a dream.</p>

      <p>Geoffrey's enterprise had always carried potential, but in its early days, Royal World Waste Managers was held back by the realities of running a small recycling business in Mombasa. Limited capital made it difficult to invest in equipment, value addition was minimal, and fluctuating scrap prices threatened the business's sustainability. Geoffrey often found himself juggling multiple roles — collecting recyclables, coordinating with informal waste collectors, negotiating with buyers, and mentoring youth — all while trying to grow an idea that was still finding its footing.</p>

      <h2>The BlueBiz Turning Point</h2>
      <p>That support came when Geoffrey joined the <strong>BlueBiz Program</strong>. Through this platform, his ideas met the resources, guidance, and networks necessary to scale. The <strong>Bahari Boost Challenge Fund (BBCF)</strong> awarded him <strong>KES 330,000</strong>, enabling the purchase of a plastic crusher and molding machine — a critical investment that would allow him to move beyond simple collection into recycling value addition. Suddenly, what had been an operational challenge became an opportunity to innovate and expand.</p>

      <p>But the program's impact went far beyond funding. Geoffrey received <strong>technical training in waste management</strong>, learning how to optimize operations, improve efficiency, and manage the quality of materials. Financial literacy coaching gave him tools to make informed decisions on cash flow, pricing, and profit margins, strengthening the backbone of the business. Through market linkage support, he connected with reliable buyers, reducing the uncertainty and instability that had previously threatened his enterprise. Mentorship in customer engagement and public speaking helped him articulate his business vision confidently, pitch to partners, and build stronger relationships with clients and stakeholders.</p>

      <h2>Impact Beyond Business</h2>
      <p>The transformation has been remarkable. Today, Royal World Waste Managers stands as a model for what youth-led enterprise can achieve when vision meets structured support. Geoffrey has not only built a profitable, scalable business — he has created a ripple effect of impact across his community. Youth who once had no economic opportunities are now employed, trained, and inspired by what they see every day at the Royal World Waste Managers yard.</p>

      <p>Geoffrey's story is a testament to what becomes possible when resilience meets opportunity. It is a reminder that the Blue Economy — and the broader entrepreneurial ecosystem — thrives when young people like Geoffrey are given the tools, trust, and support they need to lead.</p>

      <blockquote>"BlueBiz didn't just give me funding — it gave me a vision, a network, and the confidence to build something that truly matters for my community and the environment." — Geoffrey Ombati</blockquote>
    `,
  },
  {
    slug: "bluebiz-newsletter-issue-1",
    type: "newsletter",
    category: "Newsletter",
    title: "BlueBiz Wave Newsletter — Issue 1",
    excerpt:
      "Welcome aboard the BlueBiz Wave! This inaugural issue covers September–December 2024 events, including the Cohort II Co-Design Workshop, Mombasa Youth Dialogue, and the Blue Economy Summit.",
    date: "January 2025",
    issueNumber: 1,
    coverImage: "/newsletters/bluebizwave2.png",
    downloadUrl: "/newsletters/BlueBiz_NewsLetter_Issue_1.pdf",
  },
  {
    slug: "bluebiz-newsletter-issue-2",
    type: "newsletter",
    category: "Newsletter",
    title: "BlueBiz Wave Newsletter — Issue 2",
    excerpt:
      "January–March 2025 edition. Meet new BlueBiz team members, explore market linkage partnerships in Lamu County, and discover how we're building stronger institutions for coastal youth entrepreneurs.",
    date: "March 2025",
    issueNumber: 2,
    coverImage: "/newsletters/bluebizwave.png",
    downloadUrl: "/newsletters/BlueBiz_Newsletter_Issue_2.pdf",
  },
  {
    slug: "bluebiz-newsletter-issue-3",
    type: "newsletter",
    category: "Newsletter",
    title: "BlueBiz Wave Newsletter — Issue 3",
    excerpt:
      "April–June 2025 edition celebrating 1.5 years of impact. Featuring Cohort III training highlights, the Bahari Boost Challenge Fund Chatbot launch, coastal changemaker stories, and blue economy partnerships.",
    date: "June 2025",
    issueNumber: 3,
    coverImage: "/newsletters/bluebizwave3.png",
    downloadUrl: "/newsletters/BlueBiz_Newsletter_Issue_3.pdf",
  },
];
