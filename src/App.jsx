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
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    //usernameの値が存在しなかったらerrorsの配列に入れる。
    if(!values.username){
      errors.username = 'ユーザー名を入力してください';
    }
    if(!values.mailAddress){
      errors.mailAddress = 'メールアドレスを入力してください';
    } else if(!regex.test(values.mailAddress)){
      errors.mailAddress = "正しいメールアドレスを入力してくださいい";
    }
    if(!values.password){
      errors.password = 'パスワードを入力してください';
    } else if(values.password.length < 4 ){
      errors.password = '4文字以上15文字以下のパスワードを入力してください';
    } else if(values.password.length> 15 ){
      errors.password = '4文字以上15文字以下のパスワードを入力してください';
    }
    return errors;
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
          <p className="errorMsg">{formErrors.username}</p>
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder="メールアドレス" name="mailAddress" onChange={(e)=>handleChange(e)}/>
          </div>
          <p className="errorMsg">{formErrors.mailAddress}</p>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" placeholder="パスワード" name="password" onChange={(e)=>handleChange(e)}/>
          </div>
          <p className="errorMsg">{formErrors.password}</p>
          <button className="submitButton">ログイン</button>
        </div>


      </form>

    </div>
  );
}

export default App;
