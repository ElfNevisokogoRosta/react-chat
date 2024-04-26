const REGISTER_FIELDS = [
  'username',
  'email',
  'password',
  'confirmPassword',
] as const;
export type RegisterFields = (typeof REGISTER_FIELDS)[number];
export { REGISTER_FIELDS };
