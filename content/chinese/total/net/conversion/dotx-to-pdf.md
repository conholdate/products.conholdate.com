---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "zh/total/net/conversion/dotx-to-pdf/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD FODP JPG"
ad_headline: "将 DOTX 转换为 PDF | 。网"
ad_description: "为您的 .NET 应用程序提供最准确的 DOTX 到 PDF 文档转换解决方案。"

############################# Head ############################
head_title: "在 C# ASP.NET 中将 DOTX 转换为 PDF | .NET Word 文档转换"
head_description: ".NET 文字处理文档转换 API。在 .NET（C#、VB.NET、ASP.NET 和 .NET Core）应用程序中将 DOTX 转换为 PDF 和 100 多种其他图像和文件格式。将转换后的 PDF 文档显示为 HTML 查看器。"

############################# Header ############################
title: "在 C# .NET 中将 Word 文件 (DOTX) 转换为 PDF"
description: "在 C# VB.NET 和 ASP.NET 应用程序中以编程方式将 DOTX（Word 文件）转换为 PDF，使用灵活的文档转换功能，您可以自定义生成的文档外观。将所有流行的文字处理文档格式转换为 Excel 电子表格、PowerPoint 演示文稿、PDF、Photoshop、电子书、Web 和图像文件格式。原生 .NET 转换 API 提供多种文档转换选项，可转换整个文档或根据选择性页码或页面范围选择源文档文件的特定页面，并轻松转换为支持的文档格式。"

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "如何在 C# .NET 中将 DOTX 转换为 PDF"
      content_left: |
          按照这些简单的步骤在 .NET 中将 DOTX 转换为 PDF。按原样查看转换后的 PDF 文档或将其渲染并显示为 HTML，而无需使用任何外部软件。

          -   创建 **Converter** 对象以转换 DOTX 文档
          -   设置 PDF 格式的转换选项
          -   调用**Converter**类实例的**Convert**方法转换为PDF
          -   设置 HTML 查看器的选项
          -   创建 **Viewer** 对象以将转换后的 PDF 查看为 HTML
          
      title_right: "下载和安装说明"
      content_right: |
          您需要 `GroupDocs.Conversion` 和 `GroupDocs.Viewer` 命名空间来将 word 文件格式转换为各种图像和文档类型，例如 PDF、Microsoft Office（Word、Excel、PowerPoint、Project、Outlook）、OpenDocument、HTML 和CAD图。探索 Conholdate.Total 提供的其他 [.NET APIs for Office 文档](https://products.conholdate.com/zh/total/net/)。
          
          从 [downloads](https://downloads.conholdate.com/total/net) 获取相应的程序集文件或从 [Nuget](https://www.nuget.org/packages/Conholdate.Total) 获取整个包/) 直接在您的工作区中添加“Conholdate.Total for .NET”。
          
      gisthash: "4f311c07ae9ee691b8afb7960aa6c806"
      gistfile: "word-to-pdf-conversion.cs"

    - title_left: "在 C# 中将文本或图像水印添加到 PDF"
      content_left: |
          准确地将文档（DOTX 到 PDF）转换为原始文件，并使用 C# .NET 将文本或图像水印应用于转换后的文档页面。

          -   创建 **Converter** 对象以转换 DOTX 文档
          -   创建 **WatermarkOptions** 类的新实例
          -   指定水印属性（颜色、宽度、文本、图像等）
          -   实例化正确的 **ConvertOptions** 类
          -   设置 **ConvertOptions** 实例的 **Watermark** 属性
          -   调用**Converter**类实例的**Convert**方法转换为PDF
        
      title_right: "源文件信息提取"
      content_right: |
          文档信息提取功能不仅可以获取有关源文档文件的基本信息，还支持提取一些有价值的文件格式特定信息，例如 Microsoft Project 文件的项目开始和结束日期、PDF 文档的任何打印限制、 Outlook 数据文件等中包含的文件夹列表。

          在 Windows、Linux 或 macOS 等不同操作系统上转换流行的文档文件格式，同时使用 Windows Azure、Mono 和 Xamarin 等平台。
          
      gisthash: "a15affe15284876ce010a315a09da1f0"
      gistfile: "convert-word-to-pdf-and-add-text-watermark-to-converted-pdf.cs"

    - title_left: "将受密码保护的 Word 转换为 PDF"
      content_left: |
          使用 .NET API 的 Conholdate.Total，现在可以更轻松地在 .NET 中转换受密码保护的文档。只需添加几行 C# 代码，即可将受密码保护的 Microsoft Word 文档精确转换为 PDF 文件，而无需使用任何外部软件。

          -   定义 **LoadOptions** 并从文档特定的加载选项设置密码
          -   创建 **Converter** 对象以转换 Word 文档
          -   实例化 **PdfConvertOptions** 类
          -   调用**Converter**类实例的**Convert**方法转换为PDF
          
      title_right: "加载和转换远程文档"
      content_right: |
          使用 Conholdate.Total for .NET – 开发人员可以从各种远程位置和云文档存储资源（如 Amazon S3、Microsoft Azure Blob、FTP、本地磁盘、流或简单 URL）加载和转换文档。您只需指定获取远程文档流的方法，然后将其作为构造函数传递给 Converter 类。
          
          .NET API 的 Conholdate.Total 原生于 Windows 窗体、ASP.NET、WPF、WCF 或任何类型的基于 .NET Framework 2.0 或更高版本的应用程序。
          
      gisthash: "3b7541492166a47d49ca85c55b531055"
      gistfile: "convert-password-protected-word-to-pdf.cs"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD FODP JPG
############################# Back to top ###############################
back_to_top:
  enable: true
---