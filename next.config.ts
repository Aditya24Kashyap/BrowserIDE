// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   images:{
// //     remotePatterns:[
// //       {
// //         protocol:"https",
// //         hostname:"*",
// //         port:'',
// //         pathname:"/**"
// //       }
// //     ]
// //   },
// //   async headers() {
// //     return [
// //       {
// //         // Apply to all routes
// //         source: '/:path*',
// //         headers: [
// //           {
// //             key: 'Cross-Origin-Opener-Policy',
// //             value: 'same-origin',
// //           },
// //           {
// //             key: 'Cross-Origin-Embedder-Policy',
// //             value: 'require-corp',
// //           },
// //         ],
// //       },
// //     ];
// //   },
// //   reactStrictMode:false
// // };

// // export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "*",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },

//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         headers: [
//           {
//             key: "Cross-Origin-Opener-Policy",
//             value: "same-origin",
//           },
//           {
//             key: "Cross-Origin-Embedder-Policy",
//             value: "require-corp",
//           },
//         ],
//       },
//     ];
//   },

//   reactStrictMode: false,
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },

  reactStrictMode: false,
};

export default nextConfig;