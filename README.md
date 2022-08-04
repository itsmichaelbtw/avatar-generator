# Avatar Generator

Using a simple `GET` request, an avatar in an SVG format will be generated based on criteria you provide. Simply provide a name, username or email address of who you want to display on the avatar.

### How to use

Either use the source code provided within your own project, or use the free url.

[https://avatar.reflyui.cc/avatar.svg](https://avatar.reflyui.cc/avatar.svg)
    
### Example

```html

<img src="https://avatar.reflyui.cc/avatar.svg?name=michael" alt="Michael">

```

**Note: Only SVG and PNG file types are accepted**

### Parameters

Parameter | Value | Description | Default
----- | ----- |  ----------- | -------
background | String | Background color | random
color | String | Text color | #fff
fontSize | Number | Font size | 90
length | Number | Length of the name | 3
name | String | Name to display | Avatar
initials | String | Initials to display | null (will override name parameter)
bold | Boolean | If text should be bolded | false
uppercase | Boolean | If text should be uppercase | false (this will capitalize the first letter of the name)
height | Number | Height of the avatar | 260
width | Number | Width of the avatar | 260
