# Lesson 04: Key takeaways (JavaScript nâng cao + Test #1)

> Mục tiêu buổi học: **nâng cấp kỹ năng JavaScript để dùng trực tiếp trong Automation QA**, và làm quen cách “tự chạy & debug nhanh” bằng **Chrome DevTools Console**.

---

## 0) Meta “cách học” trong buổi này
- **Học để dùng**: thầy liên tục gắn ví dụ vào tình huống Automation (DOM, giỏ hàng, lọc sản phẩm, đọc CSV…).
- **Thói quen tốt**: luôn cố gắng **giới hạn phạm vi biến nhỏ nhất có thể** để tránh đụng độ tên biến và khó maintain.
- **Làm quen công cụ**: nếu không có VS Code/IDE trên máy, vẫn test code được bằng **Chrome → Inspect → Console**.

---

## 1) Chạy code bằng Chrome DevTools Console (rất hay dùng khi học DOM)
### 1.1. Cách mở & chạy nhanh
- Mở tab Chrome bất kỳ → **chuột phải → Inspect** → tab **Console**.
- Paste code vào Console → **Enter** để chạy.
- Muốn xuống dòng mà chưa chạy ngay: **Shift + Enter**.

### 1.2. Cơ chế bảo vệ “Allow pasting”
- Một số máy/phiên bản Chrome sẽ chặn paste để chống “paste lệnh độc”.
- Làm theo hướng dẫn hiện trên Console: gõ **allow pasting** rồi Enter → sau đó mới paste được.

### 1.3. Lưu ý quan trọng khi debug trên Console
- Code chạy **đến dòng lỗi thì dừng** (ví dụ dòng 1 chạy ok, dòng 2 lỗi → chương trình stop).
- Console có thể hiển thị “khó hiểu” với mảng/object do cơ chế tham chiếu (xem thêm mục 6.4).

---

## 2) Scope (phạm vi biến) — 3 loại quan trọng
**Scope = nơi biến có thể truy cập được.**

### 2.1. Block scope (phạm vi theo khối `{ }`)
- `var`: **KHÔNG bị giới hạn** bởi block → khai báo trong `{}` vẫn dùng được bên ngoài.
- `let`, `const`: **BỊ giới hạn** trong block → ra ngoài sẽ bị “not defined”.

**Ý nghĩa thực tế**
- `let/const` giúp code an toàn hơn vì biến “không chạy lung tung” ra ngoài khối.

### 2.2. Function scope (phạm vi theo hàm)
- Biến khai báo **trong hàm** chỉ dùng được **trong hàm**, ra ngoài là “not defined”.
- Áp dụng cho cả `var/let/const` (đều bị chặn bởi function scope).

### 2.3. Global scope (phạm vi toàn cục)
- Biến khai báo “tự do” ngoài block/hàm → có thể dùng ở mọi nơi phía dưới (kể cả trong hàm).

### 2.4. Quy tắc vàng thầy nhấn mạnh
- **Khai báo biến ở phạm vi hẹp nhất có thể**:
  - Chỉ dùng trong 1 block → để trong block.
  - Chỉ dùng trong 1 hàm → để trong hàm.
  - Dùng nhiều nơi thật sự mới dùng global.
- Tránh thói quen “để tất cả global” → sau này rename/mở rộng cực mệt và dễ lỗi.

---

## 3) Điều khiển vòng lặp: `break` và `continue`
### 3.1. `break`
- **Thoát khỏi vòng lặp ngay lập tức.**
- Hữu ích khi:
  - Tìm thấy thứ mình cần (ví dụ: **số chẵn đầu tiên**, **item đầu tiên thỏa điều kiện**) → dừng để tiết kiệm tài nguyên.

**Ví dụ tư duy**
- Duyệt mảng → gặp phần tử thỏa điều kiện → in ra → `break` → khỏi duyệt tiếp.

**Liên hệ Automation QA**
- Test giỏ hàng/discount: cứ thêm sản phẩm, kiểm tra tổng, **đủ ngưỡng thì dừng** (dùng `break`).

### 3.2. `continue`
- **Bỏ qua phần còn lại của vòng lặp hiện tại**, chuyển sang lần lặp tiếp theo.
- Hữu ích khi:
  - Có nhiều logic phía dưới nhưng chỉ cần xử lý một số trường hợp.
  - Ví dụ: chỉ xử lý “hàng tiêu dùng” để tính thuế, còn “virtual product” thì bỏ qua.

**Điểm dễ nhầm (thầy giải thích rất kỹ)**
- `continue` bỏ qua **toàn bộ logic bên dưới**, dù nằm trong hay ngoài `if` (miễn là còn trong cùng vòng lặp).

---

## 4) Câu điều kiện nâng cao
### 4.1. `if ... else`
- Nếu điều kiện đúng → làm A.
- Ngược lại → làm B.

### 4.2. `if ... else if ... else`
- Dùng khi có **nhiều tầng điều kiện** (ví dụ phân loại điểm: xuất sắc/giỏi/khá/trung bình/yếu).
- Mẹo thiết kế điều kiện (giống tư duy test case):
  - Xét theo “vùng” từ cao xuống thấp (>=90, >=80, >=70, >=60, còn lại…)
  - Giúp code dễ đọc, dễ cover, ít bỏ sót.

### 4.3. Ternary operator (toán tử điều kiện) `condition ? A : B`
- Viết ngắn gọn cho `if/else` đơn giản.
- **Con dao hai lưỡi**:
  - Đơn giản thì gọn.
  - Điều kiện phức tạp mà lạm dụng → 1 tháng sau đọc lại “đau đầu”.

**Khuyến nghị**
- Chủ yếu dùng ternary **một tầng** thôi.
- Ternary lồng nhau: biết để đọc, **hạn chế dùng** trong code thật.

---

## 5) Vòng lặp “nâng cao”: `for...in` và `forEach`
### 5.1. `for...in` (duyệt key của object)
- Duyệt qua **tên thuộc tính (key)** của object.
- Mỗi lần lặp, `key` nhận lần lượt các thuộc tính như: `name`, `age`, `city`, …

**Ghi nhớ**
- Dùng rất nhiều khi:
  - Cần kiểm tra object (đặc biệt là payload API) có đủ key/value đúng không.
- Nếu object có object lồng nhau (nested object) → muốn duyệt sâu phải:
  - Lấy object con ra rồi duyệt tiếp (thường cần vòng lặp lồng nhau).

### 5.2. `forEach` (chạy function cho từng phần tử mảng)
- Mỗi phần tử sẽ được “ném vào” callback function để xử lý.
- **Cực gọn** nhưng có 1 hạn chế quan trọng:

**Không dùng được `break` / `continue` với `forEach`**
- Nếu cố dùng sẽ gặp lỗi kiểu “Illegal break statement”.
- Quy tắc dùng:
  - Cần `break/continue` → dùng `for` hoặc `for...of`/`while` (tùy bài).
  - Không cần `break/continue` → `forEach` rất tiện.

---

## 6) Utility functions — STRING (rất thực tế trong Automation)
> Khi lấy text từ DOM thường dư khoảng trắng, khác hoa/thường… nên phải “normalize” trước khi assert.

### 6.1. Bỏ khoảng trắng dư: `trim`, `trimStart`, `trimEnd`
- `trim()` : bỏ khoảng trắng **hai đầu**
- `trimStart()` : bỏ **đầu**
- `trimEnd()` : bỏ **cuối**

### 6.2. Đổi hoa/thường: `toUpperCase`, `toLowerCase`
- Dùng để chuẩn hóa dữ liệu trước khi so sánh.

### 6.3. Kiểm tra chứa chuỗi con: `includes`
- Trả về **true/false**.
- **Phân biệt hoa/thường**.
- Nếu muốn “không phân biệt hoa/thường” (với kiến thức hiện tại):
  - Chuyển cả chuỗi gốc + chuỗi cần tìm về cùng lower-case rồi `includes`.

### 6.4. Tách chuỗi: `split`
- Tách theo “ký tự phân cách” mong muốn, trả về **mảng**.
- Ứng dụng hay gặp:
  - Tách email theo `@` → lấy username + domain.
  - Tách ngày tháng `YYYY-MM-DD` theo `-`.
  - Đọc CSV: tách theo dòng, rồi tách theo dấu phẩy.

### 6.5. Thay thế: `replace`
- Thay một chuỗi con bằng chuỗi khác.
- Nếu không tìm thấy chuỗi con → **không lỗi**, trả về chuỗi gốc.
- Có thể thay “cụm nhiều từ” miễn là khớp chính xác.

---

## 7) Utility functions — ARRAY (cực quan trọng cho bài test & automation)
### 7.1. Thêm phần tử
- Thêm cuối: `push`
- Thêm đầu: `unshift`
- Thêm vào giữa (insert): `splice(index, 0, ...items)`

**Ghi nhớ logic `splice`**
- Tham số 1: vị trí (index) bắt đầu
- Tham số 2: số lượng phần tử cần xóa
- Các tham số sau: phần tử muốn thêm vào

=> Insert nghĩa là: **xóa 0 phần tử**, rồi thêm mới vào vị trí đó.

### 7.2. Xóa phần tử
- Xóa cuối: `pop`
- Xóa đầu: `shift`
- Xóa vị trí bất kỳ: `splice(index, deleteCount)`

### 7.3. Tìm kiếm phần tử
- `find`: tìm **phần tử đầu tiên** thỏa điều kiện (trả về 1 value).
- `filter`: tìm **tất cả** phần tử thỏa điều kiện (trả về 1 mảng).

**Rule nhớ nhanh**
- 1 thằng đầu tiên → `find`
- Nhiều thằng hợp lệ → `filter`

### 7.4. Biến đổi dữ liệu
- `map`: tạo mảng mới, **cùng độ dài**, mỗi phần tử được biến đổi theo rule.

Ứng dụng Automation:
- Convert dữ liệu CSV/raw → object chuẩn để test.
- Build list sản phẩm, tính giá, gắn id, normalize dữ liệu…

### 7.5. Sắp xếp (dễ sai nhất): `sort`
- Với số: phải dùng comparator.
- Quy tắc comparator:
  - Trả về **âm** → `a` đứng trước `b`
  - Trả về **dương** → `b` đứng trước `a`
  - Trả về **0** → giữ nguyên

Mẹo theo buổi học:
- Tăng dần: `a - b`
- Giảm dần: `b - a`

### 7.6. Lưu ý “Console hiển thị mảng” gây hiểu nhầm (tham chiếu)
- Khi bạn `console.log(array)` rồi sau đó lại thay đổi array:
  - Console có thể hiển thị “mở rộng ra” thấy giá trị **mới nhất**, vì nó tham chiếu tới vùng nhớ.
- Đây là “cách Chrome DevTools hiển thị”, không phải logic mảng bị sai.
- Trong VS Code chạy file thường sẽ “dễ nhìn” hơn.

---

## 8) Liên hệ trực tiếp với Automation QA 
- **break**: dừng vòng lặp khi đã đạt mục tiêu (ví dụ đủ điều kiện discount, tìm được element phù hợp…).
- **continue**: bỏ qua các trường hợp không cần xử lý (ví dụ sản phẩm không tính thuế, item không match filter…).
- **String utils**: normalize text từ DOM (trim, upper/lower, includes…).
- **Array utils**:
  - Build danh sách item/selector/result.
  - Lọc dữ liệu test (filter/find).
  - Transform dữ liệu (map).
  - Sort để so sánh output hoặc validate ranking.

---

## 9) Lỗi & bẫy hay gặp trong buổi này (nên note riêng)
1. Nhầm `var` có block scope (không có), còn `let/const` thì có.
2. Khai báo trong hàm nhưng lại log ở ngoài → “not defined”.
3. Quên gọi hàm nên tưởng code “lỗi” (thực ra chưa chạy function).
4. Dùng `forEach` mà muốn `break/continue` → lỗi ngay.
5. `includes` phân biệt hoa/thường → hay ra `false` ngoài ý muốn.
6. `sort` số mà không dùng comparator → rất dễ ra sai (vì sort mặc định theo chuỗi).
7. Console DevTools hiển thị array/object theo tham chiếu → nhìn “không khớp” nếu expand sau khi đã mutate.

---