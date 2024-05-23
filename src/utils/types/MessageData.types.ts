interface MessageData {
  id?: number;
  created_at: string;
  text?: string;
  audion?: string;
  image?: string;
  chat_id: number;
  user_id: number;
}

export default MessageData;
