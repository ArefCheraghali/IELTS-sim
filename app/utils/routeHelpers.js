export const isExamRoute = (pathname) => {
  const examRoutes = [
    "/tests/test1ac",
    "/tests/test1ge",
    "/tests/test2ac",
    "/tests/test2ge",
    "/tests/test3ac",
    "/tests/test3ge",
    "/tests/sound-check",
  ];

  return examRoutes.some((route) => pathname.startsWith(route));
};
