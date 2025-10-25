# Tạo khóa SSH mới và thêm nó vào ssh-agent
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
## Tạo khóa SSH mới
ssh-keygen -t ed25519 -C "your_email@example.com"
## Thêm khóa SSH của bạn vào ssh-agent
eval "$(ssh-agent -s)"
## Thêm khóa riêng SSH của bạn vào ssh-agent.
ssh-add ~/.ssh/id_ed25519

# Thêm khóa SSH mới vào tài khoản GitHub của bạn
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
## Thêm Khóa Công Khai vào Tài khoản GitHub
Đăng nhập vào tài khoản GitHub của bạn.

Nhấp vào ảnh profile của bạn ở góc trên bên phải, sau đó chọn Settings (Cài đặt).

Trong thanh bên trái, nhấp vào SSH and GPG keys.

Nhấp vào nút New SSH key hoặc Add SSH key.

Title (Tiêu đề): Đặt tên dễ nhớ (ví dụ: DESKTOP-EN5O26C Linux Key).

Key (Khóa): Dán toàn bộ nội dung Khóa Công Khai (id_ed25519.pub) mà bạn đã sao chép ở bước 3 vào đây.

Nhấn Add SSH key.
# Kiểm tra Kết nối
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection

ssh -T git@github.com

Thoát linux

# FIX
## Kiểm tra các Khóa đã được Tải
ssh-add -l
## Tự động Tải Khóa SSH (Đề xuất)

nano ~/.bashrc

```bash
# ---------------- SSH Agent Configuration ---------------- #
# Kiểm tra xem ssh-agent đã chạy chưa
if [ -z "$SSH_AUTH_SOCK" ]; then
    # Nếu chưa chạy, khởi động nó
    eval "$(ssh-agent -s)"
fi

# Tải Khóa Riêng Tư (Nếu nó chưa được tải)
KEY=~/.ssh/id_ed25519
if [ -f "$KEY" ]; then
    if ! ssh-add -l | grep -q "$KEY"; then
        # Tải khóa. -q để không hiển thị lỗi nếu khóa đã được tải.
        ssh-add "$KEY" 2>/dev/null
    fi
fi
# --------------------------------------------------------- #
```

source ~/.bashrc
