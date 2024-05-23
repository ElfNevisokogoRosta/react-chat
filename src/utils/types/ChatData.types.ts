import UserData from './UserData.ts';

const chatType = ['private', 'group'] as const;
type CHATTYPE = typeof chatType;

export { chatType };
export type { CHATTYPE };

interface ChatDataTypes {
  archived: boolean;
  chat_name: string[];
  created_at: string;
  type: CHATTYPE;
  id: number;
  created_by: UserData;
  members: UserData[];
  messages: any[];
}

export default ChatDataTypes;
