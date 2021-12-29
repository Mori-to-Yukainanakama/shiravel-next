export default () => (
  <div>
    <main className="">
      <div className="content">
        <form>
          <ul>
            <li>
              <span className="inputTitle">メールアドレス</span>
              <input type="email" name="email" className="email" required />
            </li>
            <li>
              <span className="inputTitle">パスワード</span>
              <input
                type="password"
                name="password"
                className="password"
                required
                minLength={8}
              />
            </li>
          </ul>
          <button type="submit">ログイン</button>
        </form>
      </div>
    </main>
  </div>
);
