const utRoute = (route: string): string => `${process.env.BK_API_URL}${route}`;
export default utRoute;
