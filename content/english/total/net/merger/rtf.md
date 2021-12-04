---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/net/merger/rtf/"

############################# Head ############################
head_title: "Merge & Split RTF Files and Add Watermarks in C# .NET"
head_description: ".NET documents merger library to combine multiple RTF files into a single file by joining selective number of pages or a range of pages from multiple source documents into one."

############################# Header ############################
title: "Merge RTF Files & Add Watermark in .NET"
description: ".NET documents merger API to combine multiple RTF files into a single file by joining selective number of pages or a range of pages from multiple source documents into one. Perform single document operations such as move, remove, rotate, swap and extract pages or split a single RTF document into several resultant documents."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Merge RTF Files & Add Watermark in C#"
      content_left: |
          Join RTF files in C# .NET and add text or image watermarks to the single resultant document in .NET (C#, VB.NET, ASP.NET & .NET Core) applications.

          -   Instantiate **Merger** with input document
          -   Call **Join** method of **Merger** class instance and pass second source document path
          -   Call **Save** method of **Merger** class instance to save merged document
          -   Instantiate **Watermarker** with merged document as created above
          -   Create the **TextWatermark** object & set watermark properties
          -   Add watermark and save watermarked document
          
      title_right: "Source Document Information Extraction"
      content_right: |
          You require `GroupDocs.Merger` & `GroupDocs.Watermark` namespaces to perform single and multiple documents merging operations within PDF, Microsoft Office, HTML, OpenDocument and many other document formats. Explore other [.NET APIs for Office documents](https://products.conholdate.com/total/net/) as offered by Conholdate.Total.
          
          Get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [Nuget](https://www.nuget.org/packages/Conholdate.Total/) to add 'Conholdate.Total` directly in your workspace.
          
      gisthash: "b0bd7c35dc5a889a10fb5b032952710a"
      gistfile: "join-multiple-pdf-documents-into-one-and-add-text-watermark.cs"

    - title_left: "Split RTF File & Add Watermarks in .NET"
      content_left: |
          Split a single RTF document to multiple independent documents and insert image or text watermarks to each of the splitted files using C# .NET.

          -   Instantiate **Watermarker** with splitted document
          -   Instantiate watermark font, create **TextWatermark** object & set watermark properties
          -   Add watermark and save watermarked document
          -   Set output path where files will be saved after splitting
          -   Instantiate **SplitOptions** object with path of splitted file and number of pages to be splitted
          -   Create **Merger** object with input document and split using **SplitOptions**
        
      title_right: "Image Representation of Document Pages"
      content_right: |
          Combine all popular document file formats and generate image representation of the merged document pages in 'PNG', 'JPG' or 'BMP' formats. You can easily preview the complete document as a whole or display some specific pages based on page numbers or page ranges.

          Join popular document file formats on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
          
      gisthash: "d6abb787afd61e25cc82008968907d83"
      gistfile: "add-watermark-to-a-single-document-and-split-the-document-to-multiple-documents.cs"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: true
############################# Back to top ###############################
back_to_top:
  enable: true
---