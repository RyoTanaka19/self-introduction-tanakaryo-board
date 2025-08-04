import React, { useState, useEffect } from 'react';

type PostFormProps = {
  onSubmit: (
    title: string,
    body: string,
    career: string,
    portfolio: string
  ) => void;
  initialTitle?: string;
  initialBody?: string;
  initialCareer?: string;
  initialPortfolio?: string;
  submitLabel?: string;
};

const PostForm: React.FC<PostFormProps> = ({
  onSubmit,
  initialTitle = '',
  initialBody = '',
  initialCareer = '',
  initialPortfolio = '',
  submitLabel = '投稿する',
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const [career, setCareer] = useState(initialCareer);
  const [portfolio, setPortfolio] = useState(initialPortfolio);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setTitle(initialTitle);
    setBody(initialBody);
    setCareer(initialCareer);
    setPortfolio(initialPortfolio);
    setErrors({});
  }, [initialTitle, initialBody, initialCareer, initialPortfolio]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) {
      newErrors.title = 'タイトルは必須です。';
    }
    if (!body.trim()) {
      newErrors.body = '本文は必須です。';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(title, body, career, portfolio);

    setTitle('');
    setBody('');
    setCareer('');
    setPortfolio('');
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
    >
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">
          タイトル
        </label>
        <input
          type="text"
          className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-colors
            ${
              errors.title
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-blue-400'
            }`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="タイトルを入力してください"
          required
        />
        {errors.title && (
          <p className="mt-2 text-sm text-red-600 font-medium">
            {errors.title}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">本文</label>
        <textarea
          className={`w-full px-4 py-3 rounded-md border resize-none focus:outline-none focus:ring-2 transition-colors
            ${
              errors.body
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-blue-400'
            }`}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5}
          placeholder="本文を入力してください"
          required
        />
        {errors.body && (
          <p className="mt-2 text-sm text-red-600 font-medium">{errors.body}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">経歴</label>
        <textarea
          className="w-full px-4 py-3 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          value={career}
          onChange={(e) => setCareer(e.target.value)}
          rows={4}
          placeholder="例: 〇〇大学卒業、〇〇会社勤務など"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">
          ポートフォリオ
        </label>
        <textarea
          className="w-full px-4 py-3 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
          rows={4}
          placeholder="例: GitHubのリンクや作品紹介など"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default PostForm;
