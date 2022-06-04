---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "zh/total/java/conversion/doc-to-xlsb/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML MHTML HTM MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV FODS DIF SXC PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT ODS ODP OTP TIFF JPEG JPG PNG GIF BMP ICO WMF EMF DCM WEBP JP2 EMZ WMZ SVG SVGZ TGA XPS TEX MD PSD PSB EPUB WEB EXCEL IMAGE FODP DICOM"
ad_headline: "Java DOC 到 XLSB 的轉換"
ad_description: "DOC 到 XLSB 文檔轉換 API for Java |支持 100 多種文件格式"

############################# Head ############################
head_title: "在 Java 中將 DOC 轉換為 XLSB | Java 字轉換庫"
head_description: "Java Word 處理文檔轉換 API。使用 NetBeans、IntelliJ IDEA 和 Eclipse 開發環境在 Java 應用程序中將 DOC 轉換為 XLSB 和 100 多種其他圖像和文件格式。"

############################# Header ############################
title: "用於 DOC 到 XLSB 轉換的 Java 庫"
description: "在 Java 和 J2SE 應用程序中使用靈活的文檔操作選項以編程方式將 DOC 轉換為 XLSB，以自定義生成文檔的外觀。 word文檔轉換庫準確地將Word文檔格式轉換為PDF、Excel電子表格、PowerPoint演示文稿、Photoshop、HTML、電子書、XML、圖像等多種流行文件格式。使用多種文檔轉換功能——轉換整個文檔或根據自選頁碼或頁面範圍選擇源文檔文件的特定頁面，無需使用任何外部軟件即可輕鬆轉換為支持的文檔格式。"

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "如何在 Java 中將 DOC 轉換為 XLSB"
      content_left: |
          使用三個簡單的步驟在 Java 中執行 DOC 到 XLSB 文件的轉換。無需使用任何外部軟件即可按原樣查看轉換後的 MHTML 文檔或將其呈現和顯示為 HTML。

          -   創建 **Converter** 類的新實例並加載 DOC 文件
          -   為 XLSB 文檔類型設置 **ConvertOptions**
          -   調用**Converter**類實例的**Convert**方法轉換為XLSB
          -   設置 HTML 查看器的選項
          -   創建 **Viewer** 對像以將轉換後的 XLSB 視為 HTML
          
      title_right: "下載和安裝說明"
      content_right: |
          您需要 `GroupDocs.Conversion` 和 `GroupDocs.Viewer` 命名空間來將 word 文件格式轉換為各種圖像和文檔類型，例如 PDF、Microsoft Office（Word、Excel、PowerPoint、Project、Outlook）、OpenDocument、HTML 和CAD圖。探索 Conholdate.Total 提供的其他 [Office 文檔 Java API](https://products.conholdate.com/total/java/)。
          
          從 [downloads](https://downloads.conholdate.com/total/java) 獲取相應的程序集文件或從 [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo) 獲取整個包，以將 `Conholdate.Total for Java` 直接添加到您的工作區中。
          
      gisthash: "675fd7fb45acf595fd9f872593eb2899"
      gistfile: "word-to-pdf-conversion.java"

    - title_left: "將水印添加到 Word 並轉換為 PDF"
      content_left: |
          準確地將 Word 文檔轉換為 Java 中的 PDF，與原始源文件完全一樣，並將文本或圖像水印應用於轉換後的文檔頁面。

          -   創建 **Converter** 類的新實例以轉換 Word DOCX 文檔
          -   實例化正確的 **ConvertOptions** 類（PdfConvertOptions、WordProcessingConvertOptions、SpreadsheetConvertOptions）
          -   創建 **WatermarkOptions** 類的新實例
          -   指定水印屬性（顏色、寬度、高度、文本、圖像等）
          -   設置 **ConvertOptions** 實例的 **Watermark** 屬性
          -   調用**Converter**類實例的**Convert**方法進行Word到PDF的轉換
          
      title_right: "加載和轉換遠程文檔"
      content_right: |
          使用 Conholdate.Total for Java – 開發人員可以從各種遠程位置和雲文檔存儲資源（如 Amazon S3、Microsoft Azure Blob、FTP、本地磁盤、流或簡單 URL）加載和轉換文檔。只需指定獲取遠程文檔流的方法，然後將其作為構造函數傳遞給 Converter 類。
          
          Conholdate.Total for Java API 支持不同的操作系統，例如 Windows J2SE、Linux（Ubuntu、OpenSUSE、CentOS 等）、macOS 和任何類型的基於 Eclipse、IntelliJ NetBeans、IntelliJ IDEA 或 Visual Studio Code 開發環境的 Java 應用程序.
          
      gisthash: "6999e55b491eea2906d7fefe2e636e33"
      gistfile: "add-watermark-to-word-and-convert-to-pdf.java"
          
    - title_left: "受密碼保護的 Word 到 PDF 的轉換"
      content_left: |
          在基於 Java 的應用程序中準確加載受密碼保護的文字處理文檔並將其轉換為 PDF——您只需要幾行代碼。開發人員還可以將 Word（DOC 或 DOCX）文檔轉換為其他格式，如 Web（HTML、MHTML）、圖像（JPG、PNG TIFF、BMP）、Markdown 和許多其他格式，而無需安裝 Microsoft Word。

          -   創建 **Converter** 類的新實例並傳遞源文檔路徑
          -   實例化正確的 **ConvertOptions** 類，例如（PdfConvertOptions、WordProcessingConvertOptions、SpreadsheetConvertOptions 等）
          -   調用 **Converter** 類實例的 **convert** 方法並為轉換後的文檔傳遞文件名
        
      title_right: "源文件信息提取"
      content_right: |
          文檔信息提取功能不僅可以獲取有關源文檔文件的基本信息，還支持提取一些有價值的文件格式特定信息。它包括 Microsoft Project 文件的項目開始和結束日期、PDF 文檔的任何打印限制、Outlook 數據文件中包含的文件夾列表以及 CAD 文檔中有關圖層和佈局的信息。

          Conholdate.Total Java API 用於文檔轉換的另一個有用特性是自動檢測以字節流形式傳遞的源文檔的未知文件格式擴展名。
          
      gisthash: "35e23082b8fa43502d6784c38947eef1"
      gistfile: "password-protected-word-document-to-pdf-conversion.java"

    - title_left: "在 Java 中將特定的 Word 頁面轉換為 PDF"
      content_left: |
          Java 文檔轉換 API 允許您從源文檔中選擇選定的頁面，並準確地轉換為支持的文檔格式。下面的代碼示例顯示瞭如何將 Word 文檔的第 1 頁和第 4 頁轉換為生成的 PDF 文件。

          -   創建 **Converter** 類的新實例並加載輸入 (Word) 文檔
          -   實例化正確的 **ConvertOptions** 類，例如（PdfConvertOptions、WordProcessingConvertOptions、SpreadsheetConvertOptions 等）
          -   設置 **ConvertOptions** 實例的 **setPages** 屬性並提及要轉換的特定頁碼
          -   調用 **Converter** 類實例的 **convert** 方法並為轉換後的文檔傳遞文件名（PDF）
        
      title_right: "緩存轉換後的文檔結果"
      content_right: |
          在某些情況下，轉換後的文檔尺寸更大，轉換需要時間。文檔轉換庫提供緩存功能以有效管理此類情況並加快重複轉換過程。啟用 ICache 接口以使用擴展點與自定義緩存實現一起工作，並根據您的喜好控制緩存轉換。

          轉換結果默認保存到本地驅動器，但任何類型的緩存存儲都可以通過實現適當的接口來支持，例如 Amazon S3、Dropbox、Google Drive、Windows Azure、Reddis 或任何其他接口。
          
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