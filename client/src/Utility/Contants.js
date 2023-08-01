export const baseUrl = 'http://localhost:3001/';

export const routes = {
           login_route: `${baseUrl}auth/login`,
           signup_route: `${baseUrl}auth/register`,
           patchFriend_route: `${baseUrl}users`,
           getUser_route: `${baseUrl}users`,
           getFriends_route: `${baseUrl}users`,
           getPosts_route: `${baseUrl}posts`,

};