import { Connection, createConnection } from 'typeorm';

const connect = async (): Promise<Connection> => await createConnection();

export default connect;
