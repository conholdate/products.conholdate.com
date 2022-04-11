---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "zh/total/net/merger/vtx/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTM DOTX RTF TXT XLS XLSB XLSM XLSX XLT XLTM XLTX XLAM CSV TSV PPT PPTX PPS PPSX VDX VSDM VSDX VSSM VSSX VSTM VSTX VSX VTX ONE HTML MHT MHTML ODP ODS ODT OTP OTT EPUB ERR PS TEX XPS"
ad_headline: "合并和拆分 VTX 文件 | C＃"
ad_description: "在 .NET 中高效地合并、拆分、移动、删除、交换、旋转和提取 VTX 文件页面"

############################# Head ############################
head_title: "在 C# .NET 中合并和拆分 VTX 文件并添加水印"
head_description: "C# .NET 文档合并库可将多个 VTX 文件合并为一个或将单个 VTX 文件拆分为多个文件。还可以从文档中移动、删除、旋转、交换和提取页面。"

############################# Header ############################
title: "在 .NET 中合并 VTX 文件并添加水印"
description: "C# .NET 文档合并 API 将多个 VTX 文件合并为一个文件，方法是将多个源文档中的选择数量的页面或一系列页面合并为一个文件。执行单个文档操作操作，例如移动、删除、旋转、交换和提取页面或将单个 VTX 文档拆分为多个结果文档。"

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "在 C# 中合并 VTX 文件并添加水印"
      content_left: |
          在 C# .NET 中加入 VTX 文件，并将文本或图像水印添加到 .NET（C#、VB.NET、ASP.NET 和 .NET Core）应用程序中的单个结果文档。

          -   使用输入文档实例化 **Merger**
          -   调用**Merger**类实例的**Join**方法并传递第二个源文档路径
          -   调用**Merger**类实例的**Save**方法保存合并文档
          -   使用上面创建的合并文档实例化 **Watermarker**
          -   创建 **TextWatermark** 对象并设置水印属性
          -   添加水印并保存带水印的文档
          
      title_right: "API 下载和安装说明"
      content_right: |
          您需要 `GroupDocs.Merger` 和 `GroupDocs.Watermark` 命名空间来执行 PDF、Microsoft Office、HTML、OpenDocument 和许多其他文档格式中的单个和多个文档合并操作。探索 Conholdate.Total 提供的其他 [.NET APIs for Office 文档](https://products.conholdate.com/zh/total/net/)。
          
          从 [downloads](https://downloads.conholdate.com/total/net) 获取相应的程序集文件或从 [Nuget](https://www.nuget.org/packages/Conholdate.Total) 获取整个包/) 直接在您的工作区中添加“Conholdate.Total”。
          
      gisthash: "b0bd7c35dc5a889a10fb5b032952710a"
      gistfile: "join-multiple-pdf-documents-into-one-and-add-text-watermark.cs"

    - title_left: "在 .NET 中拆分 VTX 文件并添加水印"
      content_left: |
          将单个 VTX 文档拆分为多个独立文档，并使用 C# .NET 将图像或文本水印插入到每个拆分的文件中。

          -   使用拆分文档实例化 **Watermarker**
          -   实例化水印字体，创建 **TextWatermark** 对象并设置水印属性
          -   添加水印并保存带水印的文档
          -   设置分割后保存文件的输出路径
          -   使用拆分文件的路径和要拆分的页数实例化 **SplitOptions** 对象
          -   使用输入文档创建 **Merger** 对象并使用 **SplitOptions** 拆分
        
      title_right: "单文档修改操作"
      content_right: |
          只需添加几行 C# 代码，即可在各种文档格式中执行多功能文档操作功能，例如 Word、Excel 电子表格、演示文稿、RTF、PDF、Visio、HTML、OneNote、XPS 等。

          主要的单个文档操作包括将文档中的页面移动到新位置、删除单个页面或集合或选定页面、交换页面位置、从文档中提取特定页面、将页面方向更改为纵向或横向模式以及旋转将源文档的页面调整为 90、180 或 270 度角。
          
      gisthash: "d6abb787afd61e25cc82008968907d83"
      gistfile: "add-watermark-to-a-single-document-and-split-the-document-to-multiple-documents.cs"

    - title_left: "如何将 Word、Excel、PPTX 合并为 PDF？"
      content_left: |
          在 C# .NET 中以编程方式将 **Word** (DOC/DOCX)、**Excel** (XLS/XLSX) 和 **PowerPoint** (PPT/PPTX) 等多种类型的文档组合成一个紧凑的 PDF 文件应用程序，在生成的文档中保持相同的文本、格式和布局结构。

          -   使用输入 PDF 文档实例化 **Merger**
          -   调用**Merger**类实例的**Join**方法，并一一传递文档路径
          -   调用**Save**方法将所有文档合并为一个PDF文件
        
      title_right: "文档页面的图像表示"
      content_right: |
          结合所有流行的文档文件格式，并以 **PNG**、**JPG** 或 **BMP** 格式生成合并文档页面的图像表示。您可以轻松地预览整个文档，也可以根据页码或页面范围显示某些特定页面。

          在使用 Windows Azure、Mono 和 Xamarin 等平台的同时，加入不同操作系统（如 Windows、Linux 或 macOS）上的流行文档文件格式。
          
      gisthash: "a00735d92095357e41ebffd51ac75abb"
      gistfile: "merge-word-excel-powerpoint-documents-into-one-pdf-file.cs"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTM DOTX RTF TXT XLS XLSB XLSM XLSX XLT XLTM XLTX XLAM CSV TSV PPT PPTX PPS PPSX VDX VSDM VSDX VSSM VSSX VSTM VSTX VSX VTX ONE HTML MHT MHTML ODP ODS ODT OTP OTT EPUB ERR PS TEX XPS
############################# Back to top ###############################
back_to_top:
  enable: true
---