---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "ja/total/java/conversion/doc-to-odp/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML MHTML HTM MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV FODS DIF SXC PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT ODS ODP OTP TIFF JPEG JPG PNG GIF BMP ICO WMF EMF DCM WEBP JP2 EMZ WMZ SVG SVGZ TGA XPS TEX MD PSD PSB EPUB WEB EXCEL IMAGE FODP DICOM"
ad_headline: "JavaDOCからODPへの変換"
ad_description: "DOCからODPへのJava用ドキュメント変換API| 100以上のファイル形式がサポートされています"

############################# Head ############################
head_title: "JavaでDOCをODPに変換する| JavaWord変換ライブラリ"
head_description: "Javaワードプロセッシングドキュメント変換API。 NetBeans、IntelliJ IDEA、およびEclipse開発環境を使用して、JavaアプリケーションでDOCをODPおよび100以上の他の画像とファイル形式に変換します。"

############################# Header ############################
title: "DOCからODPへの変換用のJavaライブラリ"
description: "柔軟なドキュメント操作オプションを使用して、JavaおよびJ2SEアプリケーションでDOCをODPにプログラムで変換し、結果のドキュメントの外観をカスタマイズします。 Word文書変換ライブラリは、Word文書形式をPDF、Excelスプレッドシート、PowerPointプレゼンテーション、Photoshop、HTML、eBook、XML、画像、およびその他の多くの一般的なファイル形式に正確に変換します。複数のドキュメント変換機能の使用–ドキュメント全体を変換するか、自己選択したページ番号またはページ範囲に基づいてソースドキュメントファイルの特定のページを選択し、外部ソフトウェアを使用せずにサポートされているドキュメント形式に簡単に変換します。"

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "JavaでDOCをODPに変換する方法"
      content_left: |
          3つの簡単な手順を使用して、JavaでDOCからODPファイルへの変換を実行します。変換されたMHTMLドキュメントをそのまま表示するか、外部ソフトウェアを使用せずにレンダリングしてHTMLとして表示します。

          -   **Converter**クラスの新しいインスタンスを作成し、DOCファイルをロードします
          -   ODPドキュメントタイプに**ConvertOptions**を設定します
          -   ODPに変換するには、**Converter**クラスインスタンスの**Convert**メソッドを呼び出します
          -   HTMLビューアのオプションを設定する
          -   変換されたODPをHTMLとして表示する**Viewer**オブジェクトを作成します
          
      title_right: "ダウンロードとインストール手順"
      content_right: |
          Wordファイル形式をさまざまな画像やドキュメントタイプに変換するには、`GroupDocs.Conversion`および`GroupDocs.Viewer`名前空間が必要です。これには、PDF、Microsoft Office（Word、Excel、PowerPoint、Project、Outlook）、OpenDocument、HTML、およびCAD図が含まれます。 Conholdate.Totalが提供する他の [Officeドキュメント用のJava API](https://products.conholdate.com/total/java/)を調べてください。
          
          [ダウンロード](https://downloads.conholdate.com/total/java)からそれぞれのアセンブリファイルを取得するか、[Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo)からパッケージ全体をフェッチして、ワークスペースに直接`Conholdate.Total for Java`を追加します。
          
      gisthash: "675fd7fb45acf595fd9f872593eb2899"
      gistfile: "word-to-pdf-conversion.java"

    - title_left: "Wordに透かしを追加してPDFに変換"
      content_left: |
          元のソースファイルとまったく同じように、JavaでWord文書をPDFに正確に変換し、変換された文書ページにテキストまたは画像の透かしを適用します。

          -   **Converter**クラスの新しいインスタンスを作成して、WordDOCXドキュメントを変換します
          -   適切な**ConvertOptions**クラス（PdfConvertOptions、WordProcessingConvertOptions、SpreadsheetConvertOptions）をインスタンス化します
          -   **WatermarkOptions**クラスの新しいインスタンスを作成します
          -   透かしのプロパティ（色、幅、高さ、テキスト、画像など）を指定します
          -   **ConvertOptions**インスタンスの**Watermark**プロパティを設定します
          -   WordからPDFへの変換のために**Converter**クラスインスタンスの**Convert**メソッドを呼び出します
          
      title_right: "離れた場所にあるドキュメントの読み込みと変換"
      content_right: |
          Conholdate.Total for Javaの使用–開発者は、Amazon S3、Microsoft Azure Blob、FTP、ローカルディスク、ストリーム、単純なURLなどのさまざまなリモートロケーションおよびクラウドドキュメントストレージリソースからドキュメントをロードおよび変換できます。リモートに配置されたドキュメントストリームを取得するメソッドを指定し、それをコンストラクターとしてConverterクラスに渡すだけです。
          
          Conholdate.Total for Java APIは、Windows J2SE、Linux（Ubuntu、OpenSUSE、CentOSなど）、macOS、およびEclipse、IntelliJ NetBeans、IntelliJ IDEA、またはVisualStudioCode開発環境に基づくあらゆるタイプのJavaアプリケーションなどのさまざまなオペレーティングシステムでサポートされます。
          
      gisthash: "6999e55b491eea2906d7fefe2e636e33"
      gistfile: "add-watermark-to-word-and-convert-to-pdf.java"
          
    - title_left: "パスワードで保護されたWordからPDFへの変換"
      content_left: |
          パスワードで保護されたワードプロセッシングドキュメントをJavaベースのアプリケーション内で正確にロードしてPDFに変換します。必要なのは、ほんの数行のコードだけです。開発者は、Microsoft Wordをインストールしなくても、Word（DOCまたはDOCX）ドキュメントをWeb（HTML、MHTML）、画像（JPG、PNG TIFF、BMP）、Markdownなどの他の形式に変換することもできます。

          -   **Converter**クラスの新しいインスタンスを作成し、ソースドキュメントパスを渡します
          -   適切な**ConvertOptions**クラスをインスタンス化します。 （PdfConvertOptions、WordProcessingConvertOptions、SpreadsheetConvertOptionsなど）
          -   **Converter**クラスインスタンスの**convert**メソッドを呼び出し、変換されたドキュメントのファイル名を渡します
        
      title_right: "ソースドキュメント情報の抽出"
      content_right: |
          ドキュメント情報抽出機能を使用すると、ソースドキュメントファイルに関する基本情報を取得できるだけでなく、貴重なファイル形式固有の情報を抽出することもできます。これには、Microsoft Projectファイルのプロジェクトの開始日と終了日、PDFドキュメントの印刷制限、Outlookデータファイルに含まれるフォルダーのリスト、およびCADドキュメントのレイヤーとレイアウトに関する情報が含まれます。

          ドキュメント変換のためのConholdate.TotalJavaAPIのもう1つの便利な機能は、バイトストリームの形式で配信されるソースドキュメントの不明なファイル形式拡張子の自動検出です。
          
      gisthash: "35e23082b8fa43502d6784c38947eef1"
      gistfile: "password-protected-word-document-to-pdf-conversion.java"

    - title_left: "Javaで特定の単語ページをPDFに変換する"
      content_left: |
          Javaドキュメント変換APIを使用すると、ソースドキュメントから選択したページを選択し、サポートされているドキュメント形式に正確に変換できます。以下のコード例は、Word文書の1ページ目と4ページ目を結果のPDFファイルに変換する方法を示しています。

          -   **Converter**クラスの新しいインスタンスを作成し、入力（Word）ドキュメントを読み込みます
          -   適切な**ConvertOptions**クラスをインスタンス化します。 （PdfConvertOptions、WordProcessingConvertOptions、SpreadsheetConvertOptionsなど）
          -   **ConvertOptions**インスタンスの**setPages**プロパティを設定し、変換する特定のページ番号を指定します
          -   **Converter**クラスインスタンスの**convert**メソッドを呼び出し、変換されたドキュメントのファイル名（PDF）を渡します
        
      title_right: "変換されたドキュメントの結果をキャッシュする"
      content_right: |
          場合によっては、変換されたドキュメントサイズが大きくなり、変換に時間がかかることがあります。ドキュメント変換ライブラリは、このような状況を効率的に管理し、反復的な変換プロセスを高速化するためのキャッシュ機能を提供します。必要に応じて、ICacheインターフェイスが拡張ポイントを使用してカスタムキャッシュ実装と連携し、キャッシュ変換を制御できるようにします。

          変換結果はデフォルトでローカルドライブに保存されますが、Amazon S3、Dropbox、Googleドライブ、Windows Azure、Reddisなどの適切なインターフェイスを実装することで、あらゆるタイプのキャッシュストレージをサポートできます。
          
      gisthash: "98e5756c4d2150212f5abd2eb2067059"
      gistfile: "convert-specific-word-document-pages-to-pdf.java"
############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML MHTML HTM MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV FODS DIF SXC PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT ODS ODP OTP TIFF JPEG JPG PNG GIF BMP ICO WMF EMF DCM WEBP JP2 EMZ WMZ SVG SVGZ TGA XPS TEX MD PSD PSB EPUB WEB EXCEL IMAGE FODP DICOM
############################# Back to top ###############################
back_to_top:
  enable: true
---