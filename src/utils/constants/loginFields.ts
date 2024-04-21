const LOGIN_FIELDS = ['email', 'password'] as const;
export type LoginFields = typeof LOGIN_FIELDS[number]
export {LOGIN_FIELDS}