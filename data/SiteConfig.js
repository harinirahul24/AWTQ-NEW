
const environment = "production"; //production
const configuration = {
    staging: {
        pathPrefix: "/a-word-a-thought-a-question",
        adminUserName: "admin@heartfulnessmagazine.com",
        adminPass: "admin@#$2021",
        siteUrl: "https://a-word-a-thought-a-question-qa.web.app/",
        serviceUrl: "https://scheduled-content-service.qa.heartfulnessinstitute.in",
        serviceHeader: {
            headers: {
                'Content-Type': 'application/json',
            }
        },
        deeplinkingUrl: 'https://heartsappqa.page.link/weakly-inpiration',
        shareWithSocailMedia: {
            fb: 'https://www.facebook.com/sharer.php?u=',
            twitter: 'https://twitter.com/intent/tweet?text=',
            whatsApp: 'https://api.whatsapp.com/send?text=',
            linkedIn: 'https://www.linkedin.com/sharing/share-offsite/?url='
        },
        heartsappSiteUrl: "https://heartsapp.org/",
        heartMaga: "https://www.heartfulnessmagazine.com",
        hfmTerms: "https://www.heartfulnessmagazine.com/terms-of-use/",
        hfmPolicy: "https://www.heartfulnessmagazine.com/privacy-policy/",
        captchaPublicKey: "6LfIazQbAAAAAOO9T5a42tvnqtYdKrqhlOy6kpWF",
        googleAnalyticsID: "UA-61002286-2",
    },
    production: {
        pathPrefix: "/a-word-a-thought-a-question",
        adminUserName: "admin@heartfulnessmagazine.com",
        adminPass: "admin@#$2021",
        siteUrl: "https://heartfulnessmagazine.com/a-word-a-thought-a-question",
        serviceUrl: "https://scheduled-content-service.heartfulnessinstitute.in",
        serviceHeader: {
            headers: {
                'Content-Type': 'application/json',
            }
        },
        deeplinkingUrl: 'https://heartsappprod.page.link/weekly-inspiration',
        shareWithSocailMedia: {
            fb: 'https://www.facebook.com/sharer.php?u=',
            twitter: 'https://twitter.com/intent/tweet?text=',
            whatsApp: 'https://api.whatsapp.com/send?text=',
            linkedIn: 'https://www.linkedin.com/sharing/share-offsite/?url='
        },
        heartsappSiteUrl: "https://heartsapp.org/",
        heartMaga: "https://www.heartfulnessmagazine.com",
        hfmTerms: "https://www.heartfulnessmagazine.com/terms-of-use/",
        hfmPolicy: "https://www.heartfulnessmagazine.com/privacy-policy/",
        captchaPublicKey: "6LcGspMaAAAAABd0FcE5BzA2na54LbyRvrfCJmwb",
        googleAnalyticsID: "UA-61002286-2",
    }
}

const config = configuration[environment]

module.exports = config;
