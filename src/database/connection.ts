import { Connection, createConnection } from 'typeorm';

const connect = async () => {
  const connection: Connection = await createConnection();
};

export default connect;
