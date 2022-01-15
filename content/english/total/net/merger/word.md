---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/net/merger/word/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTM DOTX RTF TXT XLS XLSB XLSM XLSX XLT XLTM XLTX XLAM CSV TSV PPT PPTX PPS PPSX VDX VSDM VSDX VSSM VSSX VSTM VSTX VSX VTX ONE HTML MHT MHTML ODP ODS ODT OTP OTT EPUB ERR PS TEX XPS"
ad_headline: "Merge & Split WORD Files | C#"
ad_description: "Efficiently Merge, Split, Move, Remove, Swap, Rotate & Extract WORD file pages in .NET"

############################# Head ############################
head_title: "Merge & Split WORD Files in C# .NET & Add Watermarks"
head_description: "C# .NET documents merger library to combine multiple WORD files into one or split a single WORD file into several files. Also move, remove, rotate, swap and extract pages from documents."

############################# Header ############################
title: "Merge WORD Files & Add Watermark in .NET"
description: "C# .NET documents merger API to combine multiple WORD files into a single file by joining selective number of pages or a range of pages from multiple source documents into one. Perform single document manipulation operations such as move, remove, rotate, swap and extract pages or split a single WORD document into several resultant documents."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Merge WORD Files & Add Watermark in C#"
      content_left: |
          Join WORD files in C# .NET and add text or image watermarks to the single resultant document in .NET (C#, VB.NET, ASP.NET & .NET Core) applications.

          -   Instantiate **Merger** with input document
          -   Call **Join** method of **Merger** class instance and pass second source document path
          -   Call **Save** method of **Merger** class instance to save merged document
          -   Instantiate **Watermarker** with merged document as created above
          -   Create the **TextWatermark** object & set watermark properties
          -   Add watermark and save watermarked document
          
      title_right: "APIs Download & Installation Instructions"
      content_right: |
          You require `GroupDocs.Merger` & `GroupDocs.Watermark` namespaces to perform single and multiple documents merging operations within PDF, Microsoft Office, HTML, OpenDocument and many other document formats. Explore other [.NET APIs for Office documents](https://products.conholdate.com/total/net/) as offered by Conholdate.Total.
          
          Get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [Nuget](https://www.nuget.org/packages/Conholdate.Total/) to add 'Conholdate.Total` directly in your workspace.
          
      gisthash: "b0bd7c35dc5a889a10fb5b032952710a"
      gistfile: "join-multiple-pdf-documents-into-one-and-add-text-watermark.cs"

    - title_left: "Split WORD File & Add Watermarks in .NET"
      content_left: |
          Split a single WORD document to multiple independent documents and insert image or text watermarks to each of the splitted files using C# .NET.

          -   Instantiate **Watermarker** with splitted document
          -   Instantiate watermark font, create **TextWatermark** object & set watermark properties
          -   Add watermark and save watermarked document
          -   Set output path where files will be saved after splitting
          -   Instantiate **SplitOptions** object with path of splitted file and number of pages to be splitted
          -   Create **Merger** object with input document and split using **SplitOptions**
        
      title_right: "Single Document Modification Operations"
      content_right: |
          Perform multi-functional document manipulation features in a variety of document formats such as Word, Excel spreadsheet, Presentations, RTF, PDF, Visio, HTML, OneNote, XPS and many others by adding just a few lines of C# code.

          The major single document operations include moving pages within a document to a new position, removing a single page or a collection or selected pages, swapping the page positions, extracting specific pages from the document, changing the page orientation to portrait or landscape mode and rotating the pages of the source document to 90, 180 or 270 degree angle.
          
      gisthash: "d6abb787afd61e25cc82008968907d83"
      gistfile: "add-watermark-to-a-single-document-and-split-the-document-to-multiple-documents.cs"

    - title_left: "How to Merge Word, Excel, PPTX to PDF?"
      content_left: |
          Programmatically combine multiple types of documents such as **Word** (DOC/DOCX), **Excel** (XLS/XLSX) and **PowerPoint** (PPT/PPTX) into a single compact PDF file in C# .NET Applications, keeping the same text, formatting and layout structure in the resultant document.

          -   Instantiate **Merger** with input PDF document
          -   Call **Join** method of **Merger** class instance and pass document paths one by one
          -   Call **Save** method to merge all documents as one PDF file
        
      title_right: "Image Representation of Document Pages"
      content_right: |
          Combine all popular document file formats and generate image representation of the merged document pages in **PNG**, **JPG** or **BMP** formats. You can easily preview the complete document as a whole or display some specific pages based on page numbers or page ranges.

          Join popular document file formats on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
          
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