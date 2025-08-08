// src/App.tsx
import React from 'react';
import tanakaRyoImg from './images/tanaka_ryo.jpg';
import programRoutinMateImg from './images/program_routin_mate.jpg';

function App() {
  return (
    <div className="p-4 sm:p-6 bg-orange-100 max-w-screen-lg mx-auto">
      {/* 一番上のタイトル */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        <span className="text-blue-600">田中諒</span>の自己紹介
      </h1>

      {/* 横並びコンテナ（折り返し対応） */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* プロフィール欄 */}
        <div className="flex-1 min-w-[280px] max-w-md bg-blue-200 text-blue-900 p-6 rounded shadow text-center flex flex-col items-center w-full sm:w-auto">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">田中諒</h2>
          <img
            src={tanakaRyoImg}
            alt="田中諒のプロフィール画像"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-4"
          />
          <div className="text-left w-full max-w-xs space-y-2 text-sm sm:text-base">
            <p>
              <strong>生年月日:</strong> 1998年8月8日
            </p>
            <p>
              <strong>年齢:</strong> 27歳
            </p>
            <p>
              <strong>趣味:</strong>{' '}
              ランニング、カラオケ、プログラミング、魚釣り
            </p>
            <p>
              <strong>好きな食べ物:</strong> 寿司、しゃぶ、野菜など
            </p>
            <p>
              <strong>好きな曲:</strong>{' '}
              3月9日、シングルベッド、猫、シュガーソングとビターステップなど
            </p>
            <p className="mt-4 font-semibold">これからやりたいこと</p>
            <ul className="list-disc list-inside">
              <li>ReactやTypescriptなどの学習</li>
              <li>ダンス</li>
              <li>ボイトレなど</li>
            </ul>
          </div>
        </div>

        {/* 経歴一覧 */}
        <div className="flex-1 min-w-[280px] max-w-md bg-green-200 text-green-900 p-6 rounded shadow text-left max-h-[600px] overflow-y-auto w-full sm:w-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            経歴一覧
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed">
            <li>2018年4月 - 広島修道大学 法学部・法律学科入学</li>
            <li>2020年まで - 公務員を目指し、公務員試験の学習</li>
            <li>
              2021年頃 -
              初めてHTML/CSSを独学で学び、書籍を用いて「Webサイト」作成
            </li>
            <li>2022年4月 - IT業界のSES企業にシステムエンジニアとして入社</li>
            <li>2024年3月 - 退職</li>
            <li>2024年6月 - RUNTEQスクールに入学</li>
            <li>2025年3月 - RUNTEQスクール卒業</li>
            <li>
              2025年5月 -
              卒業制作の本リリース完成・ブラッシュアップ・企業研究・転職活動
            </li>
          </ul>
        </div>

        {/* 資格一覧 */}
        <div className="flex-1 min-w-[280px] max-w-md bg-yellow-200 text-yellow-900 p-6 rounded shadow text-left w-full sm:w-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            資格一覧
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>
              Oracle Certified Java Programmer, Silver SE11 (2023年3月合格)
            </li>
            <li>ITパスポート試験 (2023年11月合格)</li>
            <li>情報セキリュティマネジメント試験 (2024年1月合格)</li>
            <li>
              Ruby Association Certified Ruby Programmer Silver Version 3
              (2025年6月合格)
            </li>
          </ul>
        </div>

        {/* スキル一覧 */}
        <div className="flex-1 min-w-[280px] max-w-md bg-purple-200 text-purple-900 p-6 rounded shadow text-left w-full sm:w-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            スキル一覧
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>HTML・CSS (独学・スクール)</li>
            <li>Bootstrap (独学・スクール)</li>
            <li>TailwindCSS (卒業制作)</li>
            <li>JavaScript (独学・スクール)</li>
            <li>TypeScript (現在学習中)</li>
            <li>Ruby (スクール)</li>
            <li>PHP (就職する前に少し独学)</li>
            <li>Java (実務)</li>
            <li>VB.NET (実務)</li>
            <li>MySQL (独学・スクール)</li>
            <li>PostgresSQL (実務・卒業制作)</li>
            <li>Oracle SQL (実務)</li>
            <li>Ruby on Rails (スクール・卒業制作)</li>
            <li>SpringFramework (実務)</li>
            <li>.NET Framework (実務)</li>
            <li>React (現在学習中)</li>
            <li>Docker (スクール・卒業制作)</li>
            <li>Git・GitHub (独学・スクール・卒業制作)</li>
            <li>GitBucket (実務)</li>
            <li>SVN (実務)</li>
            <li>VisualStudioCode (独学・スクール・卒業制作)</li>
            <li>NetBeans (実務)</li>
            <li>VisualStudio (実務)</li>
            <li>A5;SQL Mk-2 (実務)</li>
            <li>Oracle SQL Developer (実務)</li>
            <li>AWS (スクール・卒業制作でS3使用)</li>
            <li>Render (卒業制作)</li>
            <li>Vercel (独学)</li>
          </ul>
        </div>

        {/* ポートフォリオ欄 */}
        <div className="flex-1 min-w-[280px] max-w-md bg-indigo-200 text-indigo-900 p-6 rounded shadow text-left w-full sm:w-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            ポートフォリオ
          </h3>

          <img
            src={programRoutinMateImg}
            alt="Program Routin Mate"
            className="w-full rounded mb-2"
          />

          <div className="text-center">
            <a
              href="https://program-routine-mate.com/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-700 underline font-semibold"
            >
              proguram-routine-mate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
