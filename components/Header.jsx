import Link from 'next/link';

 function Header() {
     return <header>
             <h1>サイト名</h1>
             <menu>
                 <Link href="/"><a>質問一覧へ</a></Link>｜
                 <Link href="/"><a>ユーザー一覧へ</a></Link>｜
                 <Link href="/"><a>ログアウト</a></Link>
             </menu>
            </header>;
   }

   export default Header;
