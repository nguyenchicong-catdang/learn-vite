# rmdir
## Xóa thư mục rỗng
```bash
rmdir ten_thu_muc
```
## Xóa thư mục không rỗng (và tất cả nội dung bên trong)
### tùy chọn: -r (hoặc --recursive)
Viết tắt của recursive (đệ quy), cho phép xóa thư mục và nội dung bên trong nó. Đây là tùy chọn bắt buộc để xóa thư mục không rỗng.
### tùy chọn: -f (hoặc --force)
Viết tắt của force (bắt buộc), sẽ xóa nội dung mà không cần hỏi xác nhận (ngăn chặn lỗi nếu file/thư mục không tồn tại hoặc không thể ghi được).
### Cú pháp khuyến nghị:
```bash
rm -rf ten_thu_muc
```