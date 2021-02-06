# Avatar Generator

Using a simple `GET` request, an avatar in an SVG format will be generated based on criteria you provid. Simply provide a name, username or email address of who you want to display on the avatar

### How to use

Either use the source code provided within your own project, or use the free url 

[https://avatar.reflyui.cc/avatar.svg](https://avatar.reflyui.cc/avatar.svg)
    
### Example

```html

<img src="https://avatar.reflyui.cc/avatar.svg?name=michael" alt="Michael">

```

**Note: Only SVG and PNG file types are accepted**

### Parameters

Query | Value | Description | Default
----- | ----- |  ----------- | -------
name | String |  Name to display on the avatar | Avatar
length | String |  How many letters to include in the avatar | 3
color | String |  Color of the text (any hex colour without the #) | #fff
fontSize | Number | Font size of the text | 90
background | String | Background color of the avatar (any hex colour without the #) | undefined (randomly generated)
bold | Boolean |  Whether the text is bold or not | false
uppercase | Boolean |  Whether the text is capatilized | false
height | Number |  Height of the svg | 260
width | Number |  Width of the svg | 260
