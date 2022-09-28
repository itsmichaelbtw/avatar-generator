# Avatar Generator

Using a simple `GET` request, an avatar in an SVG format will be generated based on criteria you provide. Simply provide a name, username or email address of who you want to display on the avatar.

### How to use

#### Self-hosted

Clone this repository and run `npm install` to install the dependencies. Then run `npm run start:http` or `npm run start:express` to start the server. The server will be running on port 3000 by default.
To change the port, set the `PORT` environment variable.

Running the server will be executed with the `node` command. If you wish to run a 24/7 server, you can use a process manager like [PM2](https://pm2.keymetrics.io/). Ensure you have `pm2` installed globally and run `pm2 start npm --name "avatar-generator" -- start:express` to start the server.

#### Using the hosted version

A free version of this project is hosted on the url below. You can use this version to generate avatars without having to host the project yourself.

[https://avatar.reflyui.cc/avatar.svg](https://avatar.reflyui.cc/avatar.svg)

### Example

```html
<img src="https://avatar.reflyui.cc/avatar.svg?name=michael" alt="Michael" />
```

**Note: Only SVG and PNG file types are accepted**

### Parameters

| Parameter  | Value   | Description                 | Default                                                   |
| ---------- | ------- | --------------------------- | --------------------------------------------------------- |
| background | String  | Background color            | random                                                    |
| color      | String  | Text color                  | #fff                                                      |
| fontSize   | Number  | Font size                   | 90                                                        |
| length     | Number  | Length of the name          | 3                                                         |
| name       | String  | Name to display             | Avatar                                                    |
| initials   | String  | Initials to display         | null (will override name parameter)                       |
| bold       | Boolean | If text should be bolded    | false                                                     |
| uppercase  | Boolean | If text should be uppercase | false (this will capitalize the first letter of the name) |
| height     | Number  | Height of the avatar        | 260                                                       |
| width      | Number  | Width of the avatar         | 260                                                       |
