import 'dotenv/config';

export default {
  expo: {
    name: 'Faire',
    slug: 'faire',
    version: '1.0.0',
    githubUrl: 'https://github.com/carlos3g/faire',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    backgroundColor: '#0F0D19',
    userInterfaceStyle: 'dark',
    primaryColor: '#28DF99',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#0F0D19',
    },
    updates: {
      enabled: false,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#0F0D19',
      },
    },
    androidStatusBar: {
      barStyle: 'dark-content',
      translucent: true,
    },
    androidNavigationBar: {
      visible: 'sticky-immersive',
      barStyle: 'light-content',
      backgroundColor: '#0F0D19',
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
  },
};
