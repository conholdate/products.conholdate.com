---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Add Watermark to POT Viewer in C#, ASP.NET, VB.NET, Xamarin"
head_description: "Add image watermark to POT file viewer applications in C#, ASP.NET, VB.NET, .NET Core, Xamarin and Mono in your desktop, web or mobile applications."

############################# Header ############################
title: "Add Watermark to POT Viewer in C# .NET"
description: "Add watermark image to POT document viewer applications in C#, ASP.NET, VB.NET, .NET Core, Xamarin and Mono platforms. Display the watermarked file in HTML, Image or PDF format inside your applications without using any additional software."

############################# SubMenu ############################
submenu:
    enable: false

############################# About ############################
about:
    enable: false
    title: "About GroupDocs.Total for .NET"
    content: |
        GroupDocs.Total for .NET is a suite of document manipulation APIs to perform powerful documents manipulation & automation features within your desktop solutions and web apps without requiring any other commercial application. It enables developers to add the functionalities (view, edit, annotate, convert, compare, e-sign, assemble, search, parse, merge, redact and classify) within PDF, Microsoft Office Word, Excel, PowerPoint, OneNote, Visio, Outlook, HTML, images, graphics, diagrams and 90+ other popular document formats.

        GroupDocs.Total APIs are well supported on all major operating systems and platforms including .NET Framework, .NET Standard, .NET Core, Mono and Xamarin.

############################# Steps ############################
steps:
    enable: true
    title_left: "Insert Watermarks to POT File in .NET"
    content_left: |
        [Conholdate.Total for .NET](https://products.conholdate.com/total/net/) makes it easy for .NET developers to work with adding image watermarks to their document viewer applications by implementing a few easy steps.

        *   Instantiate **Watermarker** with input POT document
        *   Use watermark image path as constructor parameter of **ImageWatermark** class
        *   Set the watermark size and alignment
        *   Add watermark to the **watermarker** and create output document
        *   Instantiate **Viewer** with output document
        *   Set options to view document as HTML
        
    title_right: "Get Started with .NET Core APIs"
    content_right: |
        The following piece of code requires `GroupDocs.Watermark` & `GroupDocs.Viewer` namespaces. You can get the respective files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        Insert image watermark to POT on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // Add image watermark to POT in C# .NET
        // Instantiate Watermarker with input POT document
        using (Watermarker watermarker = new Watermarker("input.pot"))
          {
            // Use watermark image path as constructor parameter of ImageWatermark class
            using (ImageWatermark watermark = new ImageWatermark("watermark.png"))
            {
              // Set watermark size and alignment
              watermark.Width = 150;
              watermark.Height = 150;
              watermark.HorizontalAlignment = HorizontalAlignment.Right;
              watermark.VerticalAlignment = VerticalAlignment.Top;

              //Add watermark to the watermarker and generate output document
              watermarker.Add(watermark);
              watermarker.Save("output.pot");
            }
          }
        
        // View watermarked POT file using GroupDocs.Viewer API
        // Instantiate Viewer with output document
        using (Viewer viewer = new Viewer("output.pot"))
          {
            // Set options to view document as HTML
            HtmlViewOptions options = HtmlViewOptions.ForEmbeddedResources("output{0}.html");
            viewer.View(options);
          }
        ```
        
############################# Demos ############################
demos:
    enable: false
    title: "Free Document Automation Apps"
    content: |
        Offline [GroupDocs.Total Apps](https://products.groupdocs.app/total) to view, convert, annotate, compare, sign, assemble, parse, classify, redact and search documents.  
        The live demo has the following benefits
        
############################# About Formats ############################
about_formats:
    enable: true
    format:
        # format loop
        - icon: "far fa-file-powerpoint-o"
          title: " About POT File Format"
          content: |
            Files with .POT extension represent Microsoft PowerPoint template files created by PowerPoint 97-2003 versions. Files created with these versions of Microsoft PowerPoint are in binary format as compared to those created in Office OpenXML file formats using the higher versions of PowerPoint. The files, hence, generated can be used to create presentations that have same layout and other settings required to be applied to new files. These settings can include styles, backgrounds, colour palette, fonts and defaults. Such files are generated in order to create ready-to-use template files for official use.

          link: "https://docs.fileformat.com/presentation/pot/"

############################# More Formats ############################
more_formats:
    enable: true
    title: "Adding Image Watermarks to Other Document Format Viewers"
    format: 
        # format loop
        - name: "Add Watermark to PDF"
          link: "https://products.conholdate.com/total/net/watermark/pdf/"
          description: "Adobe Portable Document Format"

        # format loop
        - name: "Add Watermark to Word"
          link: "https://products.conholdate.com/total/net/watermark/word/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add Watermark to Excel"
          link: "https://products.conholdate.com/total/net/watermark/excel/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add Watermark to Image"
          link: "https://products.conholdate.com/total/net/watermark/image/"
          description: "Image Files"

        # format loop
        - name: "Add Watermark to DOC"
          link: "https://products.conholdate.com/total/net/watermark/doc/"
          description: "Microsoft Word 97-2003 Document"

        # format loop
        - name: "Add Watermark to DOCX"
          link: "https://products.conholdate.com/total/net/watermark/docx/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add Watermark to DOT"
          link: "https://products.conholdate.com/total/net/watermark/dot/"
          description: "Microsoft Word 97-2003 Template"

        # format loop
        - name: "Add Watermark to DOTX"
          link: "https://products.conholdate.com/total/net/watermark/dotx/"
          description: "Microsoft Word Template"

        # format loop
        - name: "Add Watermark to RTF"
          link: "https://products.conholdate.com/total/net/watermark/rtf/"
          description: "Rich Text Document"

        # format loop
        - name: "Add Watermark to XLS"
          link: "https://products.conholdate.com/total/net/watermark/xls/"
          description: "Microsoft Excel 95-2003 Workbook Worksheet"

        # format loop
        - name: "Add Watermark to XLSX"
          link: "https://products.conholdate.com/total/net/watermark/xlsx/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add Watermark to XLT"
          link: "https://products.conholdate.com/total/net/watermark/xlt/"
          description: "Microsoft Excel 97-2003 Worksheet Template"

        # format loop
        - name: "Add Watermark to XLTX"
          link: "https://products.conholdate.com/total/net/watermark/xltx/"
          description: "Excel Open XML Spreadsheet Template"

        # format loop
        - name: "Add Watermark to PPT"
          link: "https://products.conholdate.com/total/net/watermark/ppt/"
          description: "Microsoft PowerPoint 97-2003 Presentation"

        # format loop
        - name: "Add Watermark to PPTX"
          link: "https://products.conholdate.com/total/net/watermark/pptx/"
          description: "Microsoft PowerPoint Presentation"

        # format loop
        - name: "Add Watermark to PPS"
          link: "https://products.conholdate.com/total/net/watermark/pps/"
          description: "Microsoft PowerPoint 97-2003 Slide Show"

        # format loop
        - name: "Add Watermark to PPSX"
          link: "https://products.conholdate.com/total/net/watermark/ppsx/"
          description: "Microsoft PowerPoint Slide Show"

        # format loop
        - name: "Add Watermark to POT"
          link: "https://products.conholdate.com/total/net/watermark/pot/"
          description: "Microsoft PowerPoint Template"
        
        # format loop
        - name: "Add Watermark to POTX"
          link: "https://products.conholdate.com/total/net/watermark/potx/"
          description: "Microsoft PowerPoint Presentation"

        # format loop
        - name: "Add Watermark to BMP"
          link: "https://products.conholdate.com/total/net/watermark/bmp/"
          description: "Bitmap Picture"

        # format loop
        - name: "Add Watermark to GIF"
          link: "https://products.conholdate.com/total/net/watermark/gif/"
          description: "Graphics Interchange Format"

        # format loop
        - name: "Add Watermark to JPEG"
          link: "https://products.conholdate.com/total/net/watermark/jpeg/"
          description: "Joint Photographic Experts Group"

        # format loop
        - name: "Add Watermark to PNG"
          link: "https://products.conholdate.com/total/net/watermark/png/"
          description: "Portable Network Graphics"

        # format loop
        - name: "Add Watermark to TIFF"
          link: "https://products.conholdate.com/total/net/watermark/tiff/"
          description: "Tagged Image File Format"

        # format loop
        - name: "Add Watermark to VSD"
          link: "https://products.conholdate.com/total/net/watermark/vsd/"
          description: "Microsoft Visio 2003-2010 Drawing"

        # format loop
        - name: "Add Watermark to VDX"
          link: "https://products.conholdate.com/total/net/watermark/vdx/"
          description: "Microsoft Visio 2003-2010 XML Drawing"

        # format loop
        - name: "Add Watermark to VSS"
          link: "https://products.conholdate.com/total/net/watermark/vss/"
          description: "Microsoft Visio 2003-2010 Stencil"

        # format loop
        - name: "Add Watermark to VSSX"
          link: "https://products.conholdate.com/total/net/watermark/vssx/"
          description: "Microsoft Visio Stencil"

        # format loop
        - name: "Add Watermark to VSDX"
          link: "https://products.conholdate.com/total/net/watermark/vsdx/"
          description: "Microsoft Visio Drawing"

############################# Back to top ###############################
back_to_top:
  enable: true
---