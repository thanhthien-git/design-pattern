# 🏭 Bài tập: Shape Factory Pattern

## 📋 Mô tả

Bạn cần thiết kế một hệ thống để tạo các hình học: **Circle, Square, Rectangle**.

- Tất cả shape đều có method `draw()` trả về tên shape đó
- Phải dùng **Factory Method Pattern** để tạo các shape
- Client code không được dùng `new Circle()`, `new Square()` trực tiếp

---

## ✅ Yêu cầu

### 1. Tạo interface `Shape`

Gợi ý: định nghĩa các method cần thiết để vẽ hình

### 2. Tạo các class Shape

Triển khai các class: `Circle`, `Square`, `Rectangle` implement từ `Shape`

### 3. Tạo abstract class `ShapeFactory`

Định nghĩa method abstract để tạo shape

### 4. Tạo class `ConcreteShapeFactory` 

Kế thừa từ `ShapeFactory` và override method tạo shape dựa vào type

---

## 🧪 Test

Viết test code sau:

```typescript
const factory = new ConcreteShapeFactory();

const shapes = ["Circle", "Square", "Rectangle", "Triangle"];
for (const s of shapes) {
  try {
    const shape = fctory.createShape(s);
    console.log(shape.draw());
  } catch (err) {
    console.log(err.message);
  }
}
```

### 📤 Output kỳ vọng

```
Drawing Circle
Drawing Square
Drawing Rectangle
Invalid shape type
```

---

## ⚠️ Điểm cần lưu ý

1. **Factory Method Pattern**: Sử dụng factory để tạo object, không dùng `new` trực tiếp
2. **Error Handling**: Ném lỗi nếu type không hợp lệ
3. **Separation of Concerns**: Tách création logic ra khỏi client code
