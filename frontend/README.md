# フロントエンド

【エイリアン - Figma】https://www.figma.com/file/3LMql0Za6iyR5yBPWFvsIs/Alien---Tornado?type=design&node-id=281-685&mode=design&t=aS78NHygruedqDZ0-0

【公式Tailwind CSSドキュメント】https://tailwindcss.com/docs/installation

## ディレクトリ構成
```
src/
│
├── components/             # 再利用可能なコンポーネント集
│   ├── TextInput.jsx       # テキスト入力コンポーネント
│   ├── BackLink.jsx        # バックリンクコンポーネント
│   ├── HobbiesSelector.jsx # 趣味選択コンポーネント
│   ├── Header.jsx          # ヘッダーコンポーネント
│   ├── RadioButtonGroup.jsx# ラジオボタングループコンポーネント
│   ├── Footer.jsx          # フッターコンポーネント
│   └── DateInput.jsx       # 日付入力コンポーネント
│
├── assets/                 # アセットフォルダ
│   ├── styles/             # スタイルシートフォルダ
│   │   └── tailwind.css    # Tailwind CSSスタイルシート
│   │
│   └── images/             # 画像フォルダ
│       ├── icon_header_UnknownUser.svg # 未知のユーザーアイコン
│       └── icon_header_Alien.svg       # エイリアンアイコン
│
├── pages/                  # 各ページのコンポーネント集
│   ├── EditProfilePage.jsx # プロフィール編集ページ
│   ├── DashboardPage.jsx   # ダッシュボードページ
│   └── AccountSettingsPage.jsx # アカウント設定ページ
│
├── main.jsx                # アプリケーションのエントリーポイント
│
└── App.jsx                 # メインアプリケーションコンポーネント
```

## 使い方

### ローカルでの実行

```bash
// パッケージのインストール
$ yarn 

// ローカルサーバーの起動
$ yarn start
```

### VSCode設定

1. 下記のVSCodeの拡張機能をインストールする
   1. 「Tailwind CSS IntelliSense」
   2. 「Prettier - Code formatter」
   3. 「ESLint」
   4. 「PostCSS Language Support」
2. cmd + shift + pでコマンドパレットを開き、「Preferences: Open Settings (JSON)」を選択する
  ```json
  {
    //　すでにあるものはそのままに、下記を追加する
    // ===== prettier =====
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "liveSassCompile.settings.includeItems": [],

    // ===== tailwindcss =====
    "files.associations": {
        "*.css": "tailwindcss"
    },
    "editor.quickSuggestions": {
        "strings": true
    },
    "javascript.updateImportsOnFileMove.enabled": "always",
  }
```
