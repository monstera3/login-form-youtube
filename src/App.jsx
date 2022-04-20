import './App.css';
import {useState} from "react";

function App() {
  const initialValues  = {username:"",mailAddress:"",password:""};
  const [formValues,setFromValues] = useState(initialValues);

  const handleChange = (e) => {
    //e.target とは、ユーザー名のインプット属性にアクセスしているのかメールアドレスなのか識別するために要素を取得している
    // targetの中にname属性やvalue属性が入っている
    //分割代入↓
    const { name,value } = e.target;
    setFromValues({...formValues, [name]: value});
    console.log(formValues);
  }


  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr/>
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input type="text" placeholder="ユーザー名" name="username" onChange={(e)=>handleChange(e)}/>
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder="メールアドレス" name="mailAddress" onChange={(e)=>handleChange(e)}/>
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" placeholder="パスワード" name="password" onChange={(e)=>handleChange(e)}/>
          </div>
        </div>
        <button className="submitButton">ログイン</button>
      </form>

    </div>
  );
}

export default App;
