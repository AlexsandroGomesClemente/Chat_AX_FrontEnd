import { io, Socket } from "socket.io-client";

export class SocketService {
  private socket: Socket;

  constructor() {
    //@ts-ignore
    this.socket = io("https://chat-ax-backend.onrender.com");
  }

  public getSocket(): Socket {
    return this.socket;
  }
}
