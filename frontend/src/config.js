const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51MWSROJuf94BP7knDEg4wtACRrczwzFcgguI1wlDzzjAl8U2gyjAahx76v3HA17ZiAaJIyX7y5jR1BDzUAVZutxn00CloRk03Q",

  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
