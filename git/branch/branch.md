# About branches
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches

https://www.w3schools.com/git/git_branch.asp

## Tạo nhánh mới
git branch hello-world-images
## Tạo mới và chuyển qua nhánh đó làm việc
git checkout -b emergency-fix
## Chỉnh sửa file, sau đó:
```bash
# Giả sử bạn đang ở feature/vite
# Chỉnh sửa file, sau đó:
git add .
git commit -m "Thêm nội dung mới vào feature vite"
git push origin feature/vite
```
## Đổi tên nhánh
git branch -m old-name new-name
## Xóa nhánh
### xóa local
git branch -d hello-world-images
### xóa Remote
git push origin --delete feature/tao-thanh-menu-moi