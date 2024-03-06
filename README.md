# otakaraya-sitemap
おたからやサイトマップ

## 構造
```html
<li>
    <!-- カテゴリ -->
    <a href="https://www.otakaraya.jp/xxx">カテゴリ(/slug)</a>
    <!-- カテゴリ下ページ一覧 -->
    <ul data-include="xxx"></ul>
</li>
```

## categories/xxx.html
カテゴリ名でhtmlファイルを作成する
```html
<li>
    <a href="https://www.otakaraya.jp/xxx">カテゴリ下子ページ</a>
    <a href="https://www.otakaraya.jp/xxx">カテゴリ下子ページ</a>
    <!-- 更に子カテゴリがある場合 -->
    <ul>
      <li><a href=“https://www.otakaraya.jp/xxx/xxx”>孫ページ</a></li>
      <li><a href=“https://www.otakaraya.jp/xxx/xxx”>孫ページ</a></li>
      <li><a href=“https://www.otakaraya.jp/xxx/xxx”>孫ページ</a></li>
    　<li><a href=“https://www.otakaraya.jp/xxx/xxx”>孫ページ</a></li>
    </ul>
</li>
```

## アコーディオン
クラス名を追加する
```html
<li class="accordion-item">
    <a class="accordion-header">カテゴリ名</a>
    <ul class="accordion-content">
        <li><a href="https://www.otakaraya.jp/xxx/xxx/">子ページ</a></li>
        <li><a href="https://www.otakaraya.jp/xxx/xxx/">子ページ</a></li>
        <li><a href="https://www.otakaraya.jp/xxx/xxx/">子ページ</a></li>
    </ul>
</li>
```