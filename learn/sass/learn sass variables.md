# learn sass variables.md
## gọi biến
 $abc: red;
## ghi đè biến
### biến ghi đè: !default
 $header-navbar_background-color: #1232e7 !default;
### sử dụng biến ghi đè
```bash
@mixin header-navbar-style {
    .header-navbar {
        background-color: $header-navbar_background-color;
    }
}
```
### sử dụng $: null !default
 $header-navbar_background-color: null !default;

để nếu custom không định nghĩa biến, không bị lỗi

### ghi đè biến qua file khác

```bash
// vite/template/header/_header.scss
@use '../../custom' as *;
$header-navbar_background-color: null !default;
@use './navbar/header-navbar' as navbar with(
    $header-navbar_background-color: $header-navbar_background-color,
);
header {
    @include navbar.header-navbar-style;
}
```
