module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      host: env('DATABASE_HOST', 'aws-0-us-east-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', 6543),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.brtlckuprzdtzytcccvh'),
      password: env('DATABASE_PASSWORD', 'Husseinhossam7#'),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
