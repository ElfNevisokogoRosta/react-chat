import { Socket } from 'socket.io-client';
import { createContext } from 'react';
import { socket } from '../utils/socket.ts';

export const WebSocketContext = createContext<Socket>(socket);
export const WebSocketProvider = WebSocketContext.Provider;
