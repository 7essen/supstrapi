module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'aws-0-us-west-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', 6543),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.nyyfxfxmqhuuudmaaaql'),
      password: env('DATABASE_PASSWORD', 'Husseinhossam7#'),
      ssl: {
        rejectUnauthorized: false, // تأكد من إعداد SSL بشكل صحيح
      },
    },
    debug: false,
  },
});