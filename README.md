### Tổng quan
- Angular, React, Vue là các thư viện và framework giúp xây dựng trang web theo hướng Single page application
Tham khảo: https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering

### React:
- https://reactjs.org/
- Là một thư viện javascript dùng để xây dựng giao diện người dùng
- VSCode extensions:
  - https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
  - https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx
- Browser extensions:
  - https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en


### Create react app:
- https://create-react-app.dev/
- Câu lệnh: npx create-react-app `project-name`
- CRA cung cấp bộ công cụ khởi tạo ứng dụng React, vì vậy bạn có thể đi vào xây dựng ứng dụng của mình mà không cần phải xử lý các cấu hình Webpack và Babel.

### Component:
- Components giúp phân chia các UI (giao diện người dùng) thành các phần nhỏ để dễ dàng quản lý và tái sử dụng.
- Về cơ bản, component cũng giống một javascript function return về những phần tử React mô tả những gì sẽ xuất hiện trên giao diện.
- Luôn luôn bắt đầu component name với chữ cái in hoa React sẽ coi những component bắt đầu với chữ cái in thường là DOM tags. Ví dụ, `<div />` đại diện cho 1 thẻ div HTML, nhưng `<Welcome />` đại diện cho 1 component
- Có 2 loại component
  - Function component (nên sử dụng)
  ```
  function App() {
    return (
      <div>
        Hello World!!!
      </div>
    );
  }
  ```
  - Class component
  ```
  class App extends React.Component {
    render() {
      return (
        <div>
          Hello World!!!
        </div>
      );
    }
  }
  ```

### JSX:

- JSX = Javascript + XML
- React sử dụng JSX để biểu thị UI components
- JSX cho phép viết các phần tử HTML bằng JavaScript và đặt chúng trong DOM mà không cần bất kỳ phương thức như createElement() hoặc appendChild().
- Cú pháp JSX:
```
const title = "BC22 - React"
const jsx = (
  <section className="app">
    <h1>{title}</h1>
  </section>
)
```

- Code JSX nếu được viết bằng JS thuần
```
const title = "BC22 - React";
const jsx = React.createElement("section", {
  className: "app"
}, React.createElement("h1", null, title));
```
- Vì JSX gần với JavaScript hơn là so với HTML, React sử dụng chuẩn quy tắc đặt tên camelCase cho thuộc tính thay vì dùng tên thuộc tính gốc của HTML.
  - className thay cho class
  - htmlFor thay cho for
  - tabIndex thay cho tabindex
  - ...

### Props:

- Props là viết tắt của Properties. Là một object được truyền vào trong một components, mỗi components sẽ nhận vào props và trả về react element.
- Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components.
- Cách truyền một props cũng giống như cách mà bạn thêm một attributes cho một element HTML.
- Không thể thay đổi dữ liệu của props .

```
// Truyền props cho component Welcome
<Welcome name="Jack" age={18} />
```
```
// Nhận giá trị của props trong class component bằng this.props
import React, { Component } from "react";
class Welcome extends Component {
  render() {
    console.log(this.props) //Giá trị của props
    return (
      <div>
        <h1>Xin chào {this.props.name} !</h1>
      </div>
    );
  }
}
export default Welcome;
```
```
// Nhận props trong functional components bằng params
import React from "react";
const Welcome = (props) => {
  console.log(props) //Giá trị của props
  return (
    <div>
      <h1>Xin chào {props.name} !</h1>
    </div>
  );
};
export default Welcome;
```
- Khi components cha truyền cho component con một props thì components con chỉ có thể đọc và không có quyền chỉnh sửa nó
- Mỗi khi dữ liệu trong props thay đổi thì component đó sẽ được render lại.


### State

- State là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components. State có thể được thay đổi bất cứ khi nào mong muốn. Khác với props bạn có thể truyền props sang các components khác nhau thì state chỉ tồn tại trong phạm vi của components chứa nó, mỗi khi state thay đổi thì components đó sẽ được render lại.
- Trong các dự án React, state được dùng để phản hồi các yêu cầu từ người dùng, hay lưu trữ một dữ liệu nào đó trong components.
```
// Tạo state trong constructor
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Tạo state
    this.state = {
      message: "Cybersoft Academy"
    };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.message}</h1>
      </div>
    );
  }
}
export default App;
```
- Mỗi khi state thay đổi thì component sẽ được re-render.
- Để cập nhật state ta không thay đổi trực tiếp state mà phải thông qua hàm this.setState
- Lưu ý: setState là hàm bất đồng bộ, nếu cần lấy kết qua sau khi setState ta sẽ lấy trong tham số thứ 2 của hàm setState là 1 callback function
```
this.setState({message: 'Hello'}, () => { console.log(this.state.message) })
```
