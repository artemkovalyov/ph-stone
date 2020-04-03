module.exports = {
  someSidebar: {
    "Introduction": [
      'introduction',
      'about',
      {
	type: 'category',
	label: 'Core concepts',
	items: [
	  'core/virtual-data-model',
	  'core/continuous-delivery',
	  'core/cloud-native',
	  {
	    type: 'category',
	    label: 'Cloud Abstractions',
	    items: [
	      'core/sap-cloud-abstractions',
	      'core/app-router',
	      'core/xsuaa-security'
	    ],
	  },
	  {
	    type: 'category',
	    label: 'APIs',
	    items: [
	      'core/odata-api',
	      'core/open-api',
	    ],
	  },
	],
      }
    ],
    "Getting Started": ['getting-started/getting-started'],
    Java: [
      {
	type: 'category',
	label: 'Getting started',
	items: [
	  'java/getting-started/tools-java-sdk',
	  'java/getting-started/getting-java-sdk',
	  'java/getting-started/verify-your-setup',
	  'java/getting-started/generating-vdm',
	  'java/getting-started/hello-odata'
	],
      },
      {
	type: 'link',
	label: 'Tutorials',
	href: 'https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java'
      } 
    ],
    JavaScript: [
      'javascript/javascript'
    ],
    FAQ: [
      'faq/frequently-asked-questions'
    ],
    Support: ['support/support'],
    "Related projects": [
      "related-projects/cloud-application-model",
      "related-projects/sap-cloud-for-realestate",
      "related-projects/sap-s4-hana",
      "related-projects/sap-xsuaa-cf"
    ]
  },
};
