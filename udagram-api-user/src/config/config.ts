export const config = {
  'username': 'postgres', //process.env.POSTGRES_USERNAME,
  'password': 'postgres', //process.env.POSTGRES_PASSWORD,
  'database':  'postgres', // process.env.POSTGRES_DB,
  'host': 'udagramdb.cbodx2adoh5f.us-east-1.rds.amazonaws.com', // process.env.POSTGRES_HOST,,
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': 'default',
  'aws_media_bucket': 'udagram-basti-dev',
  'url': 'http://localhost:8100', //process.env.URL,
  'jwt': {
    'secret': 'hello', // process.env.JWT_SECRET,
  },
};
