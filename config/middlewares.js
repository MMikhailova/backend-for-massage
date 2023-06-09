module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

  // {
  //   name: "strapi::cors",
  //   config: {
  //     origin: [
  //       "https://phenomenal-cactus-95e326.netlify.app",
  //       "http://localhost:3000/"
  //     ],
  //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
  //     headers: ["Content-Type", "Authorization", "Origin", "Accept"],
  //     keepHeaderOnError: true,
  //   },
  // },