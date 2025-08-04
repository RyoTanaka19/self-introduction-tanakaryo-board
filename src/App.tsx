import React, { useState, useEffect } from 'react';
import PostForm from './components/PostForm';

type Post = {
  id: number;
  title: string;
  body: string;
  career: string;
  portfolio: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingBody, setEditingBody] = useState('');
  const [editingCareer, setEditingCareer] = useState('');
  const [editingPortfolio, setEditingPortfolio] = useState('');

  // ** 追加 **: ローカルストレージから初期値を読み込む
  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // ** 追加 **: postsが変わるたびにローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = (
    title: string,
    body: string,
    career: string,
    portfolio: string
  ) => {
    const newPost: Post = {
      id: Date.now(),
      title,
      body,
      career,
      portfolio,
    };
    setPosts([newPost, ...posts]);
  };

  const handleStartEdit = (post: Post) => {
    setEditingPostId(post.id);
    setEditingTitle(post.title);
    setEditingBody(post.body);
    setEditingCareer(post.career);
    setEditingPortfolio(post.portfolio);
  };

  const handleConfirmEdit = (
    title: string,
    body: string,
    career: string,
    portfolio: string
  ) => {
    if (editingPostId === null) return;

    setPosts(
      posts.map((post) =>
        post.id === editingPostId
          ? { ...post, title, body, career, portfolio }
          : post
      )
    );

    setEditingPostId(null);
    setEditingTitle('');
    setEditingBody('');
    setEditingCareer('');
    setEditingPortfolio('');
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setEditingTitle('');
    setEditingBody('');
    setEditingCareer('');
    setEditingPortfolio('');
  };

  const handleDeletePost = (id: number) => {
    if (!window.confirm('本当にこの投稿を削除しますか？')) return;

    setPosts(posts.filter((post) => post.id !== id));

    if (editingPostId === id) {
      handleCancelEdit();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">自己紹介掲示板</h1>

      {editingPostId === null ? (
        <PostForm onSubmit={handleAddPost} />
      ) : (
        <div className="max-w-md mx-auto mb-6 p-4 bg-yellow-50 rounded border border-yellow-300">
          <h2 className="text-lg font-semibold mb-4 text-yellow-700">
            投稿を編集中
          </h2>
          <PostForm
            onSubmit={handleConfirmEdit}
            initialTitle={editingTitle}
            initialBody={editingBody}
            initialCareer={editingCareer}
            initialPortfolio={editingPortfolio}
            submitLabel="編集を保存"
          />
          <button
            onClick={handleCancelEdit}
            className="mt-2 text-sm text-red-600 hover:underline"
          >
            編集をキャンセル
          </button>
        </div>
      )}

      <div className="max-w-md mx-auto mt-8 space-y-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">まだ投稿がありません。</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>{post.body}</p>

              <div className="mt-2">
                <strong>経歴:</strong>
                <p className="whitespace-pre-line">{post.career || '未登録'}</p>
              </div>

              <div className="mt-2">
                <strong>ポートフォリオ:</strong>
                <p className="whitespace-pre-line">
                  {post.portfolio || '未登録'}
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleStartEdit(post)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  編集
                </button>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  削除
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
