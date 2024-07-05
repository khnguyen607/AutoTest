# Kịch Bản Kiểm Thử cho Giỏ Hàng Amazon

## 1. Kiểm thử giao diện người dùng (UI)
**UI_ShoppingCart.spec.js**
| Stt | Kiểm tra                                                         | Kết quả mong đợi                                                                   | Tiêu chí chấp nhận                                      |
|-----|-------------------------------------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------|
| 1   | Kiểm tra xem biểu tượng giỏ hàng có hiển thị như mong đợi hay không | Biểu tượng giỏ hàng hiển thị đúng                                                | Biểu tượng giỏ hàng xuất hiện và có thể nhìn thấy được |
| 2   | Xác minh xem giao diện trang giỏ hàng có đúng như mong đợi hay không | Giao diện trang giỏ hàng hiển thị đầy đủ các thành phần cần thiết                    | Tất cả các thành phần (sản phẩm, giá, nút, v.v.) đều hiển thị |
| 3   | Kiểm tra vị trí thiết kế                           | Thiết kế, vị trí các vùng hiển thị đúng                                    | Các thành phần được đặt ở đúng vị trí |
| 4   | Kiểm tra nút số lượng có hiển thị như mong đợi hay không          | Nút số lượng hiển thị đầy đủ và rõ ràng                                             | Nút số lượng xuất hiện và hoạt động                    |
| 5   | Kiểm tra chọn số lượng tùy ý có hiển thị trên trang giỏ hàng hay không | Chọn số lượng tùy ý hiển thị và hoạt động đúng                                           | Chọn số lượng tùy ý xuất hiện và có thể sử dụng được         |
| 6   | Kiểm tra trang giỏ hàng có các tùy chọn xóa, lưu, so sánh, chia sẻ hay không | Các tùy chọn xóa, lưu, so sánh, chia sẻ hiển thị đầy đủ                  | Các tùy chọn hoạt động đúng chức năng                  |
| 7   | Sản phẩm hiển thị đầy đủ các liên kết và thông tin cần thiết | Sản phẩm hiển thị đầy đủ thông tin và liên kết                       | Tất cả thông tin và liên kết xuất hiện và hoạt động    |
| 8   | Kiểm tra nút Tiếp theo và Hủy có sẵn trên trang giỏ hàng hay không | Nút Tiếp theo và Hủy hiển thị đầy đủ và hoạt động đúng                              | Nút Tiếp theo và Hủy xuất hiện và có thể nhấn được     |

## 2. Kiểm thử tính năng thêm vào giỏ hàng
**AddToCart.spec.js** 
| Stt | Kiểm tra                                                         | Kết quả mong đợi                                                                   | Tiêu chí chấp nhận                                      |
|-----|-------------------------------------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------|
| 1   | Kiểm tra biểu tượng Thêm vào giỏ hàng có hiển thị trên trang chi tiết sản phẩm hay không | Biểu tượng Thêm vào giỏ hàng hiển thị đúng vị trí trên trang chi tiết sản phẩm      | Biểu tượng Thêm vào giỏ hàng xuất hiện                 |
| 2   | Kiểm tra tính phản hồi của nút Thêm vào giỏ hàng                 | Nút Thêm vào giỏ hàng phản hồi khi nhấp vào                                         | Nút Thêm vào giỏ hàng có thể nhấn và phản hồi đúng     |
| 3   | Kiểm tra xem sản phẩm có được thêm vào giỏ hàng khi nhấp vào nút Thêm vào giỏ hàng hay không | Sản phẩm được thêm vào giỏ hàng                                                     | Sản phẩm xuất hiện trong giỏ hàng sau khi nhấn         |
| 4   | Kiểm tra xem sản phẩm đã thêm vào giỏ hàng có hiển thị đúng như khi nhấp vào Thêm vào giỏ hàng hay không | Sản phẩm hiển thị trong giỏ hàng đúng như đã chọn                                   | Thông tin sản phẩm trong giỏ hàng khớp với sản phẩm đã chọn |
| 5   | Kiểm tra nút Thêm vào giỏ hàng có hiển thị dưới sản phẩm trong danh sách yêu thích hay không | Nút Thêm vào giỏ hàng hiển thị dưới sản phẩm trong danh sách yêu thích              | Nút Thêm vào giỏ hàng xuất hiện trong danh sách yêu thích |

## 3. Kiểm thử xử lý số lượng sản phẩm trong giỏ hàng
**CartQuantity.spec.js**
| Stt | Kiểm tra                                                         | Kết quả mong đợi                                                                   | Tiêu chí chấp nhận                                      |
|-----|-------------------------------------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------|
| 1   | Kiểm tra tăng số lượng sản phẩm                                   | Sản phẩm được thêm vào giỏ hàng, tổng giá tăng tương ứng                           | Số lượng sản phẩm và tổng giá tăng đúng khi nhấn nút ‘+’ |
| 2   | Kiểm tra giảm số lượng sản phẩm                                   | Sản phẩm bị giảm trong giỏ hàng, tổng giá giảm tương ứng                           | Số lượng sản phẩm và tổng giá giảm đúng khi nhấn nút ‘-‘ |
| 3   | Kiểm tra giỏ hàng rỗng khi giảm sản phẩm cuối cùng               | Giỏ hàng trở nên trống rỗng khi sản phẩm cuối cùng bị giảm                         | Giỏ hàng trống rỗng khi sản phẩm cuối cùng bị giảm hết  |

## 4. Kiểm thử tính năng giỏ hàng và thanh toán
**CartAndCheckout.spec.js**
| Stt | Kiểm tra                                                         | Kết quả mong đợi                                                                   | Tiêu chí chấp nhận                                      |
|-----|-------------------------------------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------|
| 1   | Kiểm tra tính năng đánh dấu đơn hàng là quà tặng                  | Người dùng có thể đánh dấu đơn hàng là quà tặng                                     | Tùy chọn đánh dấu đơn hàng là quà tặng hoạt động        |
| 2   | Kiểm tra tính năng thêm tin nhắn quà tặng                        | Người dùng có thể thêm tin nhắn quà tặng                                            | Tùy chọn thêm tin nhắn quà tặng hoạt động               |
| 3   | Kiểm tra chuyển hướng đến trang thanh toán                       | Người dùng được chuyển hướng đến trang thanh toán sau khi nhấp vào nút thanh toán   | Chuyển hướng đến trang thanh toán hoạt động đúng       |
| 4   | Kiểm tra chi tiết sản phẩm trên trang địa chỉ thanh toán         | Trang Địa chỉ thanh toán chứa đầy đủ chi tiết sản phẩm như Tên, Số lượng, Giá tiền   | Tất cả thông tin sản phẩm xuất hiện đầy đủ trên trang  |
| 5   | Kiểm tra hoạt động của nút Tiếp tục                              | Nút Tiếp tục hoạt động đúng khi nhấp vào                                            | Nút Tiếp tục hoạt động và chuyển hướng đúng            |
