---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "zh/total/net/conversion/xltm-to-dot/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD XML JSON DICOM FODP JPG"
ad_headline: "將 XLTM 轉換為 DOT | .NET"
ad_description: "為您的 .NET 應用程序提供最準確的 XLTM 到 DOT 文檔轉換解決方案。"

############################# Head ############################
head_title: "在 C# ASP.NET 中將 Excel XLTM 轉換為 DOT | .NET 文檔轉換"
head_description: ".NET Excel 電子表格文檔格式轉換 API。在 .NET（C#、VB.NET、ASP.NET 和 .NET Core）應用程序中將 XLTM 轉換為 DOT 和 100 多種其他圖像和文檔文件格式。"

############################# Header ############################
title: "在 C# .NET 中將 Excel (XLTM) 文件轉換為 DOT"
description: "在 C# VB.NET & ASP.NET 應用程序中使用原生 Excel 文檔轉換器 API 將 XLTM 轉換為 DOT。使用靈活的文檔轉換功能來自定義生成的文檔外觀。準確地將所有流行的 Excel 工作表格式與 Word 文檔、PowerPoint 演示文稿、PDF、Photoshop、電子書、Web 和圖像文件格式相互轉換。轉換整個文檔或根據選擇性頁碼或頁面範圍選擇源文檔文件的特定頁面，並輕鬆轉換為支持的文檔格式。"

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "如何在 C# .NET 中將 XLTM 轉換為 DOT"
      content_left: |
          按照這些簡單的步驟在 .NET 中將 XLTM 轉換為 DOT。無需使用任何外部軟件即可按原樣查看轉換後的 DOT 文檔或將其呈現並顯示為 HTML。

          -   創建 **Converter** 對像以轉換 XLTM 文檔
          -   設置 DOT 格式的轉換選項
          -   調用**Converter**類實例的**Convert**方法轉換為DOT
          -   設置 HTML 查看器的選項
          -   創建 **Viewer** 對像以將轉換後的 DOT 查看為 HTML
          
      title_right: "下载和安装说明"
      content_right: |
          您需要 `GroupDocs.Conversion` 和 `GroupDocs.Viewer` 命名空间来将 word 文件格式转换为各种图像和文档类型，例如 PDF、Microsoft Office（Word、Excel、PowerPoint、Project、Outlook）、OpenDocument、HTML 和CAD图。探索 Conholdate.Total 提供的其他 [.NET APIs for Office 文档](https://products.conholdate.com/zh/total/net/)。
          
          从 [downloads](https://downloads.conholdate.com/total/net) 获取相应的程序集文件或从 [Nuget](https://www.nuget.org/packages/Conholdate.Total) 获取整个包/) 直接在您的工作区中添加“Conholdate.Total for .NET”。
          
      gisthash: "4f311c07ae9ee691b8afb7960aa6c806"
      gistfile: "excel-to-pdf-conversion.cs"

    - title_left: "在 C# 中將 Excel 轉換為 PDF/Word/HTML/PPTX"
      content_left: |
          使用 C# .NET 代碼將您的 Excel 電子表格轉換為其他流行的文檔格式，例如 PDF、HTML、PowerPoint 演示文稿和文字處理文件格式。加載源 Excel 工作簿並將其另存為其他文檔格式的轉換文檔。

          -   創建 **Converter** 對象並將源 Excel 文件傳遞給它
          -   實例化正確的 **ConvertOptions** 類，例如（**PdfConvertOptions** 用於轉換為 PDF，**WordProcessingConvertOptions** 用於轉換為 Word 格式，**MarkupConvertOptions** 用於轉換為 HTML，**PresentationConvertOptions** 用於轉換為 PowerPoint 格式）
          -   調用**Converter**類實例的**Convert**方法轉換為PDF/HTML/PPTX或Word文檔格式
          
      title_right: "轉換受密碼保護的檔案"
      content_right: |
          在某些情況下，轉換後的文檔尺寸更大，轉換需要時間。默認情況下，緩存轉換後的文檔保存到本地驅動器，但是[Conholdate.Total for .NET](https://products.conholdate.com/total/net/)提供了使用iCache接口的自定義緩存實現功能，以有效管理以您自己的方式緩存轉換結果。它加快了整個重複轉換過程。
          
          [.NET Excel 轉換庫](https://products.groupdocs.com/conversion/net/) 還支持與受密碼保護的檔案相互轉換，並將轉換結果壓縮為 ZIP、RAR、7Z、TAR、GZ 和 BZ2存檔格式。
          
      gisthash: "4f311c07ae9ee691b8afb7960aa6c806"
      gistfile: "excel-to-pdf-word-html-powerpoint-conversion.cs"

    - title_left: "在 C# 中將文本或圖像水印添加到 DOT"
      content_left: |
          準確地將文檔（XLTM 到 DOT）轉換為原始文件，並使用 C# .NET 將文本或圖像水印應用於轉換後的文檔頁面。

          -   創建 **Converter** 對像以轉換 XLTM 文檔
          -   創建 **WatermarkOptions** 類的新實例
          -   指定水印屬性（顏色、寬度、文本、圖像等）
          -   實例化正確的 **ConvertOptions** 類
          -   設置 **ConvertOptions** 實例的 **Watermark** 屬性
          -   調用**Converter**類實例的**Convert**方法轉換為DOT
        
      title_right: "源文件信息提取"
      content_right: |
          文檔信息提取功能不僅可以獲取有關源文檔文件的基本信息，還支持提取一些有價值的文件格式特定信息，例如 Microsoft Project 文件的項目開始和結束日期、PDF 文檔的任何打印限制、 Outlook 數據文件等中包含的文件夾列表。

          在 Windows、Linux 或 macOS 等不同操作系統上轉換流行的文檔文件格式，同時使用 Windows Azure、Mono 和 Xamarin 等平台。
          
      gisthash: "a15affe15284876ce010a315a09da1f0"
      gistfile: "convert-word-to-pdf-and-add-text-watermark-to-converted-pdf.cs"

    - title_left: "在 C# .NET 中將 JSON 文件轉換為 Excel"
      content_left: |
          現在，使用 Conholdate.Total for .NET API 可以更輕鬆地將 JSON 文件轉換為 .NET 中的 Excel。使用 JSON 文件作為數據源，通過添加幾行 C#code 將其精確轉換為 Excel 電子表格文件格式，無需使用任何外部軟件。

          -   創建 **Converter** 對像以轉換 JSON 文件
          -   實例化 **SpreadsheetConvertOptions** 類
          -   調用**Converter**類實例的**Convert**方法轉換為XLSX
          
      title_right: "加載和轉換遠程文檔"
      content_right: |
          使用 Conholdate.Total for .NET – 開發人員可以從各種遠程位置和雲文檔存儲資源（如 Amazon S3、Microsoft Azure Blob、FTP、本地磁盤、流或簡單 URL）加載和轉換文檔。您只需指定獲取遠程文檔流的方法，然後將其作為構造函數傳遞給 Converter 類。
          
          .NET API 的 Conholdate.Total 原生於 Windows 窗體、ASP.NET、WPF、WCF 或任何類型的基於 .NET Framework 2.0 或更高版本的應用程序。
          
      gisthash: "7864dd1c0c16ca647722d18664d5c84a"
      gistfile: "json-to-excel-spreadsheet-conversion.cs"

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