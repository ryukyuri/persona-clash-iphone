# PERSONA CLASH — TACTICAL MIND (iPhone offline beta)

Stage 30 / v0.9.23 のiPhone実機テスト用サイト。既存サーバー版 `ryukyuri/persona-clash` とは独立。

## GitHub Pages 初回設定

GitHub リポジトリの **Settings → Pages → Build and deployment** で **Deploy from a branch** を選び、`main` / `/(root)` を選んで **Save**。

公開URL: https://ryukyuri.github.io/persona-clash-iphone/

公開後にiPhoneのSafariで上記URLを開き、共有→ホーム画面に追加。ホーム画面から起動して操作・保存・機内モードでの再起動を確認する。

端末診断: https://ryukyuri.github.io/persona-clash-iphone/device-check.html

## 注意

- 初回はネット接続が必要。Service Worker のキャッシュ完了後にオフラインで起動できる。
- iPhone Safariでの実機動作と保存永続性はまだ未検証。
- GitHub Pagesは公開サイト。ゲームコードは誰でも閲覧できる。
- iPhoneのホーム画面アプリアイコンは暫定SVG版。機種によって表示が異なる可能性がある。
- キャッシュやホーム画面アプリの削除、Safariサイトデータ削除で保存データが失われる可能性がある。ゲームのエクスポート機能でバックアップを取る。
