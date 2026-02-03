# Lesson 01 — Key Takeaways

> Mục tiêu buổi 1: **onboard lớp + cài tool + hiểu “Playwright là gì/why” + chạy test đầu tiên + đẩy code lên GitHub để nộp bài**.

---

## 1) Cấu trúc buổi học (6 phần chính)
1. **Giới thiệu lớp & team hỗ trợ** (mentor, trợ giảng, kênh hỏi đáp).
2. **Cách học hiệu quả trong khóa** (3 nguyên tắc: chủ động – chăm chỉ – thông minh).
3. **Công cụ học tập & cách dùng** (Google Classroom, Zoom, chat community/private).
4. **Playwright là gì? so sánh/ưu điểm** (cross-browser, auto-wait, report, codegen…).
5. **Cài đặt & kết nối tool** (NVM/Node, Git/GitHub, VS Code, Playwright extension, terminal).
6. **Thực hành**: tạo project Playwright, chạy test mẫu, push repo GitHub, add mentor làm collaborator.

---

## 2) “Cách học” của khóa — 3 nguyên tắc (rất quan trọng)
### A. Học **chủ động**
- Khi gặp vấn đề: **Google trước → AI sau → Mentor cuối**  
  (Google giúp hiểu sâu hơn vì đọc được nhiều ngữ cảnh/giải thích; AI dùng để giải thích/định nghĩa/ví dụ).
- Có thắc mắc: **note lại** để mở rộng sau.

### B. Học **chăm chỉ**
- **Làm đầy đủ bài tập** trước buổi học sau.
- Bài tập = phần quan trọng nhất để:
  - Củng cố lý thuyết
  - Rèn tư duy
  - “Gặp lỗi thật” và tích lũy kinh nghiệm debug

### C. Học **thông minh**
- Trước khi làm bài: **tự hệ thống** kiến thức đã học vào một file: **Key Takeaway**  
  (để sau này ôn phỏng vấn cực nhanh).
- **Không dùng AI làm bài hộ**  
  (AI được phép: giải thích định nghĩa, đưa ví dụ, hướng dẫn tư duy; không được “copy/paste bài hoàn chỉnh”).

---

## 3) Tài nguyên & quy định
- Có: **slide + bài tập + recording** và được **truy cập trọn đời**.
- **Không share** tài liệu/recording dưới mọi hình thức (vi phạm policy: bị remove access, không hoàn tiền).

---

## 4) Tổng quan lộ trình 15 buổi (5 giai đoạn)
> “15 buổi nhưng học nghiêm túc ~ tương đương 6 tháng kinh nghiệm entry-level thực chiến” (theo mentor nói).

1. **Khởi động** (buổi 1): setup tool + làm quen Playwright.
2. **Chậm và chắc** (buổi 1–4): Git + JavaScript nền tảng (giai đoạn “khó nhất”).
3. **Vượt chướng ngại** (buổi 5–9): nền tảng Automation (web structure, locator, Playwright actions).
4. **Tăng tốc** (buổi 10–13): tối ưu, kỹ thuật nâng cao (form, API testing, patterns…).
5. **Về đích** (buổi 14–15): advanced concepts (screenshot/video, codegen), **CI/CD**, setup project chuẩn.

---

## 5) Tooling — “dùng để làm gì?”
### Nhóm giao tiếp / học liệu
- **Google Classroom**: nơi xem slide/bài tập/recording + nộp bài.
- **Zoom**: học live, share screen để mentor debug.
- **Messenger**: chat community + chat riêng.

### Nhóm coding / quản lý code
- **Git**: quản lý source code trên máy (local).
- **GitHub**: đưa code lên online để làm việc nhóm + nộp bài.
- **VS Code**: IDE để code, cài extension, chạy test.

---

## 6) Google Classroom — xem tài liệu & nộp bài đúng cách
### A. Xem tài liệu
- Ưu tiên tab **Classwork** (dễ tìm slide/bài tập/recording theo từng buổi), hạn chế xem ở Stream.

### B. Nộp bài
1. Vào bài tập → **View instructions**
2. Bên phải: **Add or create**
3. Dán **link GitHub repo** vào
4. Bấm **Turn in**
5. Muốn nộp lại: **Unsubmit → Submit lại**

---

## 7) Zoom — quy tắc thao tác để debug dễ
- Bình thường: **tắt mic/cam** (đỡ ồn, giữ riêng tư).
- Khi cần hỗ trợ: bật mic hoặc chat.
- Khi share: ưu tiên **Entire Screen (Full screen)**  
  (mentor nhìn được cả VS Code + browser popup khi chạy automation).
- Dừng share: bấm **Stop Share**.

---

## 8) Playwright — định nghĩa & “vì sao chọn?”
### A. Playwright là gì?
- Một **framework automation** (nguồn gốc từ Puppeteer; Microsoft phát triển mạnh).
- Logo “mặt nạ” → “play” = kịch → “kịch bản” (script) để tự động hóa.
- Có bản phát hành từ 2020; phiên bản mới theo mentor nói trong buổi là **1.56**.

### B. Ưu điểm chính (đi phỏng vấn hay hỏi)
1. **Cross-browser**: viết 1 lần chạy nhiều browser (Chromium/Firefox/WebKit…).
2. **Cross-platform**: chạy trên Windows / Linux / macOS.
3. **Auto-waiting**: tự chờ element/page state → giảm flakiness (test “lúc pass lúc fail”).
4. **Report mạnh**: timeline, step-by-step, browser, log… dễ debug.
5. **Codegen**: thao tác → sinh code (học sau, vì cần hiểu bản chất trước).

### C. Vì sao học Playwright + TypeScript?
- **Dễ cài** (Node + vài lệnh).
- **Cú pháp dễ** (ít OOP hơn so với Java/Selenium truyền thống).
- **Trending / nhiều job** (mentor nói tỷ lệ JD có Playwright rất cao).
- Học để **hiểu bản chất + tư duy**, tool khác cũng “chuyển” được.

---

## 9) Git config ban đầu (bắt buộc trước khi commit/push)
> Làm 1 lần là đủ.

### 3 lệnh cần chạy
- `git config --global user.name "TEN"` (đặt tên hiển thị khi commit)
- `git config --global user.email "EMAIL"` (đặt email gắn với commit)
- `git config --global init.defaultBranch main` (mặc định nhánh mới là `main`)

**Lưu ý quan trọng**
- `--global` phải đúng chính tả (không phải “trobal”).
- Dùng **Git Bash** trên Windows (PowerShell/Command Prompt dễ lỗi lặt vặt).

---

## 10) VS Code setup tối thiểu
### A. Cài extension Playwright (đúng nguồn)
- Vào **Extensions** → search `Playwright`
- Chọn bản **có tích xanh + Microsoft** → Install  
  (tránh cài extension “linh tinh” dễ lỗi)

### B. Đổi terminal mặc định trên Windows → Git Bash
1. `Ctrl + Shift + P` (mở Command Palette)
2. gõ `Terminal: Select Default Profile`
3. chọn **Git Bash**
4. kiểm tra: Terminal → New Terminal, thấy terminal kiểu bash (màu mè) + chữ “bash”.

---

## 11) SSH key — kết nối local ↔ GitHub (cách hiện đại)
### A. Khái niệm
- SSH dùng **cặp khóa**:
  - **private key**: `id_rsa` (giữ bí mật)
  - **public key**: `id_rsa.pub` (được phép chia sẻ/đưa lên GitHub)

### B. Tạo key
- Lệnh tạo: `ssh-keygen -t rsa -C "email_cua_em"` (tạo key + gắn email)
- Khi hỏi passphrase: **bỏ trống** (Enter 2 lần) để khỏi phải nhập đi nhập lại.
- Nếu báo key **đã tồn tại** (already exists): **gõ `n`** để không ghi đè.

### C. Lấy public key
- Dùng lệnh đọc file public key: `cat ~/.ssh/id_rsa.pub` (in nội dung public key ra terminal)

### D. Add lên GitHub
- GitHub → **Settings** → **SSH and GPG keys** → **New SSH key**
- Title: đặt tên dễ nhớ (vd: `home-pc`, `company-laptop`)
- Paste nội dung public key vào → Add key.
---

## 12) Khởi tạo project Playwright và chạy test đầu tiên
### A. Tổ chức thư mục
- Tạo folder chung: `K20/`
- Trong đó tạo project: `demo1/`, `demo2/`… (đỡ rối, dễ tra cứu).

### B. Khởi tạo
- Chạy lệnh trong đúng thư mục project:  
  `npm init playwright@latest` (khởi tạo Playwright project)

**Trong quá trình init**
- Hệ thống hỏi chọn TS/JS…: buổi này chủ yếu “Enter theo mặc định” (mentor hướng dẫn enter hết).
- Lần đầu sẽ tải browser: **Chromium + Firefox + WebKit** → có thể lâu do mạng.
- Khi xong thường thấy thông báo kiểu “happy hacking” (mentor nhắc: coi như thành công).

### C. Các file/thư mục sinh ra (cần nhớ)
- `node_modules/` (chứa thư viện)
- `tests/`  
  - `example.spec.ts` (test mẫu)
- `playwright.config.ts` (file cấu hình: screenshot/video, workers, timeout…)

### D. Chạy test trong VS Code
- Mở `tests/example.spec.ts`
- Thấy nút **Run** màu xanh ở từng test.
- Nếu không thấy Run:
  1. Click tab **Testing** (icon ống nghiệm)
  2. **Refresh**
  3. Chọn **Chromium**
  4. Bật **Show Browser**

---

## 13) Push code lên GitHub (để nộp bài)
### A. Tạo repo
- GitHub → New repository (vd: `demo1`) → Public → Create

### B. Copy SSH URL (không dùng HTTPS trong flow này)
- Trong repo → tab **SSH** → copy URL.

### C. Chạy các lệnh push (theo đúng thứ tự)
1. `git init` (khởi tạo git trong thư mục)
2. `git remote add origin <SSH_URL>` (gắn remote)
3. `git add .` (add toàn bộ file vào staging)
4. `git commit -m "init project"` (tạo commit đầu tiên)
5. `git push origin main` (đẩy lên GitHub)

**Lưu ý**
- Khi hỏi “authenticity of host …”: gõ **`yes`** đầy đủ (không chỉ gõ `y`).
- Paste trong Git Bash: ưu tiên **chuột phải** (Ctrl+V có thể không hoạt động tùy terminal).

---

## 14) Add mentor làm Collaborator (để chấm bài)
- Vào **repo** (không phải setting tài khoản) → **Settings**
- **Collaborators** → **Add people**
- Nhập username mentor: `MinhPhong306` 
- Add to repository.

---

## 15) Lỗi thường gặp & cách xử lý nhanh
1. **Init sai thư mục** (mở VS Code thấy trắng tinh)
   - Fix: mở Terminal ngay trong VS Code ở đúng folder project → chạy lại `npm init playwright@latest`.
2. **Windows dùng PowerShell/Command Prompt bị lỗi**
   - Fix: dùng **Git Bash**, và set terminal mặc định trong VS Code.
3. **Node/NPM không chạy** (`node -v` không ra)
   - Fix: cài lại theo hướng dẫn buổi 0 (NVM/Node), rồi thử lại.
4. **SSH prompt kẹt/loạn ký tự**
   - Fix: `Ctrl + C` để hủy, gõ lại lệnh chuẩn, và gõ `yes` khi hỏi host.
5. **Install browser rất lâu**
   - Fix: kiên nhẫn chờ (tùy tốc độ mạng). Khi tải được browser là đúng tiến trình.

---




