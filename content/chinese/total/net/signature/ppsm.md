---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "zh/total/net/signature/ppsm/"
other_out_formats: "PDF WORD EXCEL DOC DOCX DOCM DOT DOTM DOTX XLS XLSB XLSM XLSX XLTM XLTX PPT PPTX PPS PPSX POTX POTM CMX BMP JPEG GIF PNG WEBP TIFF WMF PSD SVG ODP OTP ODS OTS ODT OTT"
ad_headline: "数字签名 PPSM | 。网"
ad_description: "在 C# .NET 中从 PPSM 添加、编辑、搜索、验证和删除数字签名"

############################# Head ############################
head_title: "在 C#、VB.NET 中将数字签名添加到 PPSM 文件查看器"
head_description: "C# .NET 数字签名 API，用于添加、编辑、搜索、验证和删除 PPSM 文件中的数字签名。使用条形码、图像、文本、图章、元数据、QR 码和表单域签名对文档进行数字签名。"

############################# Header ############################
title: "在 .NET 中使用数字签名对 PPSM 文件进行签名"
description: "在 C#、ASP.NET、VB.NET 和 Xamarin 应用程序中对 PPSM 文件和各种其他文档格式进行数字签名和验证签名。通过设置自定义文本、字体样式、颜色和调整文档中的高级电子签名属性，以多种形式实现条码、文本、图像、元数据、二维码、表单域和图章签名。"

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "如何在 C# 中对 PPSM 文件进行数字签名"
      content_left: |
          [Conholdate.Total for .NET](https://products.conholdate.com/zh/total/net/) 支持使用几行 C# .NET 代码对带有数字签名的 PPSM 文档进行签名。

          -   使用输入文档实例化 **Signature**
          -   使用证书详细信息实例化 **DigitalSignOptions** 对象
          -   调用 **Signature** 类的 **Sign** 方法并将 **DigitalSignOptions** 传递给它
          -   设置选项以将签名文档查看为 HTML
          
      title_right: "API 下载和安装说明"
      content_right: |
          以下代码需要 `GroupDocs.Signature` 和 `GroupDocs.Viewer` 命名空间。您可以从 [downloads](https://downloads.conholdate.com/total/net) 获取相应的文件，或从 [NuGet](https://www.nuget.org/packages/Conholdate.Total/).
          
          在使用 Windows Azure、Mono 和 Xamarin 等平台时，在 Windows、Linux 或 macOS 等操作系统上使用条形码、文本、图像、元数据、二维码、表单域和印章签名为您的数字文档签名。
          
      gisthash: "95d923d0c843df75412574e6571f9534"
      gistfile: "add-digital-signatures-to-pdf.cs"

    - title_left: "在 C# 中搜索 PDF 文件中的条码签名"
      content_left: |
          通过设置高级签名操作选项和搜索过滤器，从数字签名的 PDF 文档中搜索各种电子签名类型，以获取与搜索条件匹配的电子签名列表。

          -   使用输入文档实例化 **Signature**
          -   根据要求和指定的搜索选项实例化 **DigitalSearchOptions** 对象
          -   调用 **Signature** 类实例的 **Search** 方法并将 **DigitalSearchOptions** 传递给它
        
      title_right: "签名、验证、更新和删除签名"
      content_right: |
          使用 Conholdate.com APIs ——开发人员可以实施不同的签名自定义选项，以添加和查看来自各种流行文档文件格式的电子签名。
          
          用户还可以从已经签名的数字文档中搜索和验证一些特定的签名；根据大小或文本内容操纵签名，并从同一文档中删除任何签名。
          
      gisthash: "89f71572ba0f6f90697aa9a661ebcab0"
      gistfile: "search-barcode-signatures-in-pdf-file.cs"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF WORD EXCEL DOC DOCX DOCM DOT DOTM DOTX XLS XLSB XLSM XLSX XLTM XLTX PPT PPTX PPS PPSX POTX POTM CDR BMP JPEG GIF PNG WEBP TIFF WMF PSD SVG ODP OTP ODS OTS ODT OTT
############################# Back to top ###############################
back_to_top:
  enable: true
---