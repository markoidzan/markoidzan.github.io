// Klaro Consent Manager
var klaroConfig = {
    elementID: 'klaro',
    klaroStorage: 'localStorage',
    //klaroStorage: 'cookies',
    cookieName: 'idzanBlog',
    cookieExpiresAfterDays: 120,
    privacyPolicy: '/privacy',
    default: true,
    mustConsent: false,

    translations: {
        en: {
            consentModal: {
                description:
                    'Here you can see and customize the information that we collect about you. Entries marked as "Required" are important to use on our web site to work properly.',
            },
            netlify: {
                description: 'Protection against DDoS attacks, CDN and Web Hosting Provider (Required)',
            },
            cloudflare: {
                description: 'Protection against DDoS attacks and DNS provider (Required)',
            },
            purposes: {
                security: 'Security',
                hosting: 'Hosting',
                serviceProvider: 'Service Provider',
            },
        },
    },

    apps: [
        {
            name: 'netlify',
            title: 'Netlify',
            purposes: ['security', 'hosting'],
            required: true,
        },
        {
            name: 'cloudflare',
            title: 'Cloudflare',
            purposes: ['serviceProvider'],
            required: true,
        },
    ],
};
