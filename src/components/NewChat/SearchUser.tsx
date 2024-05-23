import { ChangeEvent, FC, useEffect, useState } from 'react';
import UserData from '../../utils/types/UserData.ts';
import { useQuery } from '@tanstack/react-query';
import getUserByUsername from '../../query/api/queries/getUserByUsername.ts';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { useAuth } from '../../context/AuthContext.tsx';

interface SearchUserProps {
  setUser: (user: UserData | null) => void;
}

const SearchUser: FC<SearchUserProps> = ({ setUser }) => {
  const { isUser } = useAuth();
  const userId = isUser?.id;
  const [searchQ, setSearchQ] = useState<string>('');
  const [queryRes, setQueryRes] = useState<UserData[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const handleChange = (user: UserData) => {
    setSelectedUser(user);
    setUser(user);
  };

  //TODO REFACTOR QUERY
  const { data, refetch } = useQuery<UserData[]>({
    queryFn: async () => await getUserByUsername(searchQ),
    queryKey: ['users', searchQ],
    enabled: !!searchQ,
  });

  useEffect(() => {
    if (data) {
      const filteredData = data.filter((user) => user.id !== userId);
      setQueryRes(filteredData);
    }
  }, [data, userId]);

  const handleSearchQ = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQ(e.target.value);
    if (e.target.value) {
      refetch().then((res) => {
        if (res.data) {
          const filteredData = res.data.filter((user) => user.id !== userId);
          setQueryRes(filteredData);
        }
      });
    } else {
      setQueryRes([]);
      setUser(null);
    }
  };

  return (
    <Combobox value={selectedUser} onChange={handleChange}>
      <ComboboxInput
        aria-label="Assignee"
        value={searchQ}
        onChange={handleSearchQ}
        displayValue={(user: UserData) => user?.username || ''}
      />
      <ComboboxOptions>
        {queryRes.map((user) => (
          <ComboboxOption key={user.email} value={user} as="div">
            {user.username}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};

export default SearchUser;
