import { io, Socket } from 'socket.io-client';

export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3002');
  }

  public getSocket(): Socket {
    return this.socket;
  }
}