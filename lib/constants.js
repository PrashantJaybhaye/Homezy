export const ADMIN_EMAILS = [
  "mahtiinay@gmail.com",
  "poonamshirsat2004@gmail.com",
];

export const checkIsAdmin = (user) => {
  if (!user) return false;

  const email = user?.primaryEmailAddress?.emailAddress;
  return email ? ADMIN_EMAILS.includes(email) : false;
};
