import { useAuth } from '../../context/AuthContext.tsx';

export const AccountComponent = () => {
  const { isUser } = useAuth();
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4 w-full font-bold text-right text-white-main">
          {isUser && (isUser.first_name || isUser.email)}
        </p>
        <p className="text-4 w-full text-right text-white-main">
          {isUser && isUser.username}
        </p>
      </div>
      <div>
        <span className="block h-12 w-12 bg-yellow-main rounded-full"></span>
      </div>
    </div>
  );
};
