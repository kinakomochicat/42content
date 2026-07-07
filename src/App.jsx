
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const styles = {
    p: {
        color: 'blue',
        fontWeight:'bold',
        marginRight: '25px',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
        padding: '24px',
        borderBottom: '1px solid #ddd',
        backgroundColor: 'lightblue',
        position: 'fixed',
        width: '100%',
    },
    link: {
        color: '#333',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    main: {
        padding: '100px 24px',
        textAlign: 'center',
    },
}

const Home = () => {
    return (
        <>
            <h1>ホームページへようこそ！</h1>
            <p>ここはこのページのトップです。</p>
        </>
    )
}

const Profile = () => {
    return (
        <>
            <h1>プロフィール</h1>
            <p>ようこそ！ここはプロフィールページです。</p>
        </>
    )
}

const Call = () => {
    return (
        <>
            <h1>お問い合わせ</h1>
            <p>ここはお問い合わせページです。</p>
        </>
    )
}

const NotFound = () => {
    return (
        <>
            <h1>ページが見つかりません</h1>
            <p>指定されたページは存在しません。</p>
        </>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <nav style={styles.nav}>
                <p style={styles.p}>My Page</p>
                <Link style={styles.link} to="/">ホーム</Link>
                <Link style={styles.link} to="/profile">プロフィール</Link>
                <Link style={styles.link} to="/call">お問い合わせ</Link>
            </nav>
            <main style={styles.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/call" element={<Call />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
