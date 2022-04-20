import './App.css';
import {useState} from "react";

function App() {
  const initialValues  = {username:"",mailAddress:"",password:""};
  const [formValues,setFromValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});

  const handleChange = (e) => {
    //e.target とは、ユーザー名のインプット属性にアクセスしているのかメールアドレスなのか識別するために要素を取得している
    // targetの中にname属性やvalue属性が入っている
    //分割代入↓
    const { name,value } = e.target;
    setFromValues({...formValues, [name]: value});
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    //eを受け取る理由： e.preventDefault()を呼ぶため
    // useStateでもった値を送信ボタン押したら勝手に画面がリロードしないように妨げる（APIをたたく時の値としてなど）
    e.preventDefault();
  //  ログイン情報を送信する。
  //  バリテーションチェック(エラー用の空のオブジェクトを用意する)
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    //
    const errors = {};
    //usernameの値が存在しなかったら
    if(!values.username){
      errors.username = 'ユーザー名を入力してください';
    }
    if(!values.mailAddress){
      errors.username = 'ユーザー名を入力してください';
    }
    if(!values.password){
      errors.username = 'ユーザー名を入力してください';
    }else if(values.password.length> 4 ){
      errors.username = '4文字以上15文字以下のパスワードを入力してください';
    } else if(values.password.length> 15 ){
      errors.username = '4文字以上15文字以下のパスワードを入力してください';
    }
  }

  return (
    <div className="formContainer">
      <form onSubmit={(e)=> handleSubmit(e)}>
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
