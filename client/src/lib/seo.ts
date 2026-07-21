// SEO Metadata for all pages
// Each page has a unique title tag and meta description

export const seoMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'AI Business Intelligence Systems India | Wellbeeng Technologies',
    description: 'Transform how your business thinks, decides and operates. AI automation, smart eCommerce, and business intelligence systems for Indian companies.'
  },
  '/ai-automation': {
    title: 'AI Automation Services India | Custom AI Workflows | Wellbeeng Technologies',
    description: 'We identify your pain point and build the AI solution. Process automation, AI agents, catalogue automation. Results in 2-4 weeks.'
  },
  '/ai-automation/process-automation': {
    title: 'Business Process Automation India | Eliminate Manual Workflows | Wellbeeng',
    description: 'Eliminate manual workflows with custom AI. Built for Indian B2B companies. Results in 2-4 weeks.'
  },
  '/ai-automation/ai-agents': {
    title: 'AI Chatbots & Agents India | WhatsApp Automation | Wellbeeng Technologies',
    description: '24/7 AI customer service, WhatsApp automation and lead qualification. Custom-built for Indian businesses.'
  },
  '/ai-automation/catalogue-automation': {
    title: 'AI Product Catalogue Automation India | Auto-Generate Descriptions | Wellbeeng',
    description: 'Auto-generate product titles and descriptions from images using AI. Launch a complete catalogue in hours.'
  },
  '/ai-automation/custom-integrations': {
    title: 'Custom AI CRM ERP Integration India | Connect Business Tools | Wellbeeng',
    description: 'Connect CRM, ERP, WhatsApp and business tools with intelligent AI workflows.'
  },
  '/smart-commerce': {
    title: 'Custom eCommerce Website Development India | AI-Powered | Wellbeeng',
    description: 'AI-powered eCommerce with AI-generated catalogues and intelligence dashboards. No Shopify. Full ownership. Live in 2 weeks.'
  },
  '/smart-commerce/how-it-works': {
    title: 'How We Build eCommerce Sites in 2 Weeks | Smart Commerce | Wellbeeng',
    description: 'Our Smart Commerce build: AI catalogue, custom backend, intelligence dashboard. Full eCommerce live fast.'
  },
  '/intelligence-systems': {
    title: 'Business Intelligence Systems India | Revenue, Operations & Market | Wellbeeng',
    description: 'Complete business intelligence — Revenue, Operations and Market intelligence. Premium, strategic, enterprise-grade.'
  },
  '/intelligence-systems/revenue': {
    title: 'Revenue Intelligence System India | AI-Powered Sales Intelligence | Wellbeeng',
    description: 'Predict churn, optimise sales, identify growth. 15-25% revenue growth. Built for Indian B2B companies.'
  },
  '/intelligence-systems/operations': {
    title: 'Operational Excellence Intelligence India | Cost Reduction | Wellbeeng',
    description: 'Identify cost leaks, eliminate bottlenecks with AI. Built for Indian B2B. 10-20% cost reduction.'
  },
  '/intelligence-systems/market': {
    title: 'Market & Competitive Intelligence India | Strategic Positioning | Wellbeeng',
    description: 'AI-powered market intelligence. Early warning on threats, new opportunities, strategic positioning.'
  },
  '/solutions/manufacturing': {
    title: 'AI Intelligence for Indian Manufacturers | Machine Optimization | Wellbeeng',
    description: 'AI automation and intelligence for Indian manufacturing Rs 50-500 Cr. Machine optimization, operational excellence.'
  },
  '/solutions/fmcg': {
    title: 'AI Intelligence for FMCG India | Demand Forecasting | Wellbeeng Technologies',
    description: 'Demand forecasting, channel analytics and consumer intelligence for Indian FMCG companies.'
  },
  '/solutions/retail': {
    title: 'AI Intelligence for Retail & QSR India | Smart Commerce | Wellbeeng',
    description: 'Smart commerce and intelligence for Indian retail and QSR. Grow revenue and optimize operations.'
  },
  '/solutions/b2b-services': {
    title: 'AI Intelligence for B2B Services India | Revenue Intelligence | Wellbeeng',
    description: 'Revenue intelligence and operational excellence for Indian B2B service companies.'
  },
  '/how-it-works': {
    title: 'How Wellbeeng Works | AI Implementation 30-90 Days | Wellbeeng',
    description: 'Discovery to go-live in 30-90 days. Connect your systems, build AI intelligence, deliver results.'
  },
  '/about': {
    title: 'About Wellbeeng Technologies | 50+ Years Experience | Founders',
    description: 'Built by entrepreneurs with 50+ years of combined experience. Meet the founders of Wellbeeng Technologies.'
  },
  '/case-studies': {
    title: 'AI Transformation Case Studies India | Real Problems Solved | Wellbeeng',
    description: 'Real problems solved with AI. Manufacturing automation, eCommerce intelligence, business transformation.'
  },
  '/case-studies/manufacturing-machine-optimization': {
    title: 'Laser Plasma Cutter Optimization AI Case Study | Manufacturing | Wellbeeng',
    description: '20 Laser Plasma Cutters on one AI dashboard. Full RFQ to delivery automation. Manufacturing case study.'
  },
  '/case-studies/jewel-gallery-ecommerce': {
    title: 'eCommerce in 7 Days with AI Catalogue | Jewel Gallery Case Study | Wellbeeng',
    description: 'Full eCommerce from product images in 7 days. AI catalogue, custom backend, intelligence dashboard.'
  },
  '/consultation': {
    title: 'Book Free AI Consultation | Wellbeeng Technologies India',
    description: 'Free 30-min consultation with Wellbeeng founders. Tell us your challenge. Get a clear AI roadmap.'
  },
  '/resources': {
    title: 'AI Resources & Guides India | Articles & Case Studies | Wellbeeng',
    description: 'Insights, guides and case studies for Indian businesses exploring AI transformation.'
  },
  '/contact': {
    title: 'Contact Wellbeeng Technologies | Get in Touch',
    description: 'Contact Wellbeeng Technologies. Reach out to our team for inquiries and support.'
  },
  '/privacy': {
    title: 'Privacy Policy | Wellbeeng Technologies',
    description: 'Privacy Policy for Wellbeeng Technologies. Learn how we protect your data.'
  },
  '/terms': {
    title: 'Terms of Service | Wellbeeng Technologies',
    description: 'Terms of Service for Wellbeeng Technologies. Read our terms and conditions.'
  }
};

// Hook to update SEO metadata for a page
export function usePageSEO(path: string) {
  const metadata = seoMetadata[path] || seoMetadata['/'];
  
  // Update document title
  if (typeof document !== 'undefined') {
    document.title = metadata.title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);
  }
  
  return metadata;
}
