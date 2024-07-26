module.exports = ({ env }) => ({
  auth: {
    secret:'kaghS5b4ztCuH5sz9ohdKg==',
  },
  apiToken: {
    salt: '8sdxf+8V6RAkw5ntFhcJcg==',  // Use the environment variable for the salt value
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
