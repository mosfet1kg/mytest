const thrift = require('thrift');

export class Hbase {

  private host: string;
  private port: string;
  private client;
  private connection;

  constructor({ host, port }) {
    this.host = host;
    this.port = port;

    this.connection = thrift.createConnection(this.host, this.port);

    this.connection.on('connect', () => {
      this.client = thrift.createClient();
    });

    this.connection.on('error', (evt) => {
      console.log( arguments );
      callback(evt);
    });

  }
  // https://gist.github.com/blmarket/7333706
  public on(callback) {



  }

}

export function createClient({ host, port }) {
  return new Hbase({ host, port });
}
