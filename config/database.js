module.exports = {
  connection: {
    client: 'pg',
    connection: {
      host: 'aws-0-us-east-1.pooler.supabase.com',
      user: 'postgres.brtlckuprzdtzytcccvh',
      password: 'Husseinhossam7#', // تأكد من أن علامات مثل # مشفرة إذا لزم الأمر
      database: 'postgres',
      port: 6543,
    },
    pool: {
      min: 2,
      max: 10,
    },
    acquireConnectionTimeout: 10000,
  },
};
