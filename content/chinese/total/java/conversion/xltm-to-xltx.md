---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "zh/total/java/conversion/xltm-to-xltx/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD XML JSON DICOM FODP JPG"
ad_headline: "Java XLTM 到 XLTX 的轉換"
ad_description: "XLTM 到 XLTX 文檔轉換 API for Java |支持 100 多種文件格式"

############################# Head ############################
head_title: "通過 Java 電子表格轉換 API 將 Excel XLTM 轉換為 XLTX"
head_description: "100% 原生 Java 文檔轉換庫，可將 Excel 電子表格 XLTM 轉換為 XLTX 以及 Java 應用程序中的 100 多種其他圖像和文檔文件格式。"

############################# Header ############################
title: "在 Java 中將 Excel XLTM 轉換為 XLTX"
description: "使用本機 Excel 文檔轉換庫 - 在任何類型的基於 Java 的應用程序中以最高精度將 XLTM 轉換為 XLTX 和 100 多種其他文件格式。使用一組先進的文檔轉換功能來保持掌控，並根據自己的喜好自定義轉換後文檔的外觀。無需使用任何外部 API 或軟件，以編程方式將所有流行的 Excel 工作表格式與 Word 文檔、PowerPoint 演示文稿、PDF、Photoshop、電子書、Web 和圖像文件格式相互轉換。使用 Java Excel 轉換 API，可以輕鬆地一次轉換整個文檔，或者根據選擇性的頁面範圍或不同的頁碼選擇源文檔的特定頁面，以輕鬆轉換為支持的文檔格式。"

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "如何在 Java 中將 XLTM 轉換為 XLTX"
      content_left: |
          使用三個簡單的步驟在 Java 中執行 XLTM 到 XLTX 文件的轉換。按原樣查看轉換後的文檔或將其呈現為 HTML，而無需任何外部軟件依賴。

          -   創建 **Converter** 類的新實例並加載 XLTM 文件
          -   為 XLTX 文檔類型設置 **ConvertOptions**
          -   調用**Converter**類實例的**Convert**方法轉換為XLTX
          -   設置 HTML 查看器的選項
          -   創建 **Viewer** 對像以將轉換後的 XLTX 視為 HTML
          
      title_right: "下載和安裝說明"
      content_right: |
          您需要 `GroupDocs.Conversion` 和 `GroupDocs.Viewer` 命名空間來在 100 多種文檔和圖像文件格式之間進行轉換，例如 PDF、Microsoft Word、Excel、PowerPoint、Project、Visio、Outlook、HTML 和圖表。探索 Conholdate.Total 提供的其他 [Office 文檔 Java API](https://products.conholdate.com/total/java/)。
          
          從 [下載](https://downloads.conholdate.com/total/java) 獲取相應的程序集文件或從 [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo) 獲取整個包，以將 `Conholdate.Total for Java` 直接添加到您的工作區中。
          
      gisthash: "675fd7fb45acf595fd9f872593eb2899"
      gistfile: "excel-worksheet-to-pdf-conversion.java"

    - title_left: "將 Excel 轉換為 PDF/Word/HTML/PPTX"
      content_left: |
          將您的 Excel 工作表轉換為其他流行的文檔格式，例如 PDF、HTML、PowerPoint 演示文稿和 Java 中的文字處理文件格式。加載源 Excel 電子表格（XLS、XLSX）文件並將其另存為各種受支持文件格式的轉換文檔。

          -   創建 **Converter** 對象並將源 Excel 文件傳遞給它
          -   實例化正確的 **ConvertOptions** 類，例如（**PdfConvertOptions** 用於轉換為 PDF，**WordProcessingConvertOptions** 用於轉換為 Word 格式，**MarkupConvertOptions** 用於轉換為 HTML，**PresentationConvertOptions** 用於轉換為 PowerPoint 格式）
          -   調用**Converter**類實例的**Convert**方法轉換為PDF/HTML/PPTX或DOCX文檔格式
          
      title_right: "轉換整個文檔或特定頁面"
      content_right: |
          使用 Java 文檔轉換 API 非常簡單且獨立於平台，因為它不需要安裝任何外部應用程序（例如 Microsoft Office）來執行從 Excel 到其他文件格式的轉換。根據不同的頁碼選擇所需頁面的列表，或將連續的頁面範圍轉換為一種受支持的文檔格式。
          
          使用擴展選項加載源文檔，以在文件轉換過程中管理受保護文檔中的註釋、註釋、水印和密碼。您還可以使用一組靈活的文檔操作功能自定義轉換後文檔的外觀。
          
      gisthash: "675fd7fb45acf595fd9f872593eb2899"
      gistfile: "excel-to-pdf-word-html-powerpoint-conversion.java"
          
    - title_left: "將受密碼保護的 XLTM 轉換為 XLTX"
      content_left: |
          在基於 Java 的應用程序中準確加載和轉換受密碼保護的文檔。文件格式轉換 API 還支持渲染來自不同來源的遠程文檔，包括 S3、Blob、FTP、Stream、URL 或本地磁盤。

          -   創建 **Converter** 類的新實例並傳遞源文檔路徑
          -   實例化正確的 **ConvertOptions** 類，例如（PdfConvertOptions、WordProcessingConvertOptions、SpreadsheetConvertOptions 等）
          -   調用 **Converter** 類實例的 **Convert** 方法並為轉換後的文檔傳遞文件名
        
      title_right: "源文件信息提取"
      content_right: |
          文檔信息提取功能不僅可以獲取有關源文檔文件的基本信息，還支持提取一些有價值的文件格式特定信息，例如 Microsoft Project 文件的項目開始和結束日期、PDF 文檔的任何打印限制、包含在 Outlook 數據文件等中的文件夾列表。

          在使用 NetBeans、IntelliJ IDEA 和 Eclipse 等開發環境的同時，在 Windows、Linux 或 macOS 等不同操作系統上轉換流行的文檔文件格式。
          
      gisthash: "35e23082b8fa43502d6784c38947eef1"
      gistfile: "password-protected-word-document-to-pdf-conversion.java"

    - title_left: "將水印添加到 Excel 並轉換為 PDF"
      content_left: |
          Java 文檔轉換 API 允許您準確地將 Excel 工作表文檔與原始文件完全一樣地轉換，並將文本水印應用於轉換後的文檔頁面。使用字體、顏色、寬度、高度、背景和旋轉角度等水印選項，同時將文本水印添加到 Excel 文檔並轉換為 PDF 文件。

          -   創建 **Converter** 類的新實例並加載輸入文檔
          -   實例化正確的 **ConvertOptions** 類，例如（PdfConvertOptions、WordProcessingConvertOptions、SpreadsheetConvertOptions 等）
          -   設置 **ConvertOptions** 實例的 **Watermark** 屬性
          -   指定水印屬性（顏色、寬度、文本、高度等）
          -   調用**Converter**類實例的**Convert**方法轉換為PDF
        
      title_right: "緩存轉換後的文檔結果"
      content_right: |
          在某些情況下，轉換後的文檔尺寸更大，轉換需要時間。文檔轉換庫提供緩存功能以有效管理此類情況並加快重複轉換過程。啟用 ICache 接口以使用擴展點與自定義緩存實現一起工作，並根據您的喜好控制緩存轉換。

          轉換結果默認保存到本地驅動器，但任何類型的緩存存儲都可以通過實現適當的接口來支持，例如 Amazon S3、Dropbox、Google Drive、Windows Azure、Reddis 或任何其他接口。
          
      gisthash: "6999e55b491eea2906d7fefe2e636e33"
      gistfile: "add-watermark-to-excel-worksheet-and-convert-to-pdf.java"
############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD XML JSON DICOM FODP JPG
############################# Back to top ###############################
back_to_top:
  enable: true
---