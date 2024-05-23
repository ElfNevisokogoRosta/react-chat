import ChatDataTypes from './ChatData.types.ts';

interface UserData {
  id: number;
  created_at: string;
  email: string;
  first_name: string;
  last_name: string;
  last_time_active: string;
  online: boolean;
  username: string;
  admin_chats: any[];
  participant_chat: ChatDataTypes[];
  friends: UserData[];
}

export default UserData;
