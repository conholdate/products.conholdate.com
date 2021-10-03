---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Add Watermark to VCF Viewer in C#, ASP.NET, VB.NET, Xamarin"
head_description: "Add image watermark to VCF file viewer applications in C#, ASP.NET, VB.NET, .NET Core, Xamarin and Mono in your desktop, web or mobile applications."

############################# Header ############################
title: "Add Watermark to VCF Viewer in C# .NET"
description: "Add watermark image to VCF document viewer applications in C#, ASP.NET, VB.NET, .NET Core, Xamarin and Mono platforms. Display the watermarked file in HTML, Image or PDF format inside your applications without using any additional software."

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
    title_left: "Insert Watermarks to VCF File in .NET"
    content_left: |
        [Conholdate.Total for .NET](https://products.conholdate.com/total/net/) makes it easy for .NET developers to work with adding image watermarks to their document viewer applications by implementing a few easy steps.

        *   Instantiate **Watermarker** with input VCF document
        *   Use watermark image path as constructor parameter of **ImageWatermark** class
        *   Set the watermark size and alignment
        *   Add watermark to the **watermarker** and create output document
        *   Instantiate **Viewer** with output document
        *   Set options to view document as HTML
        
    title_right: "Get Started with .NET Core APIs"
    content_right: |
        The following piece of code requires `GroupDocs.Watermark` & `GroupDocs.Viewer` namespaces. You can get the respective files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        Insert image watermark to VCF on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // Add image watermark to VCF in C# .NET
        // Instantiate Watermarker with input VCF document
        using (Watermarker watermarker = new Watermarker("input.vcf"))
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
              watermarker.Save("output.vcf");
            }
          }
        
        // View watermarked VCF file using GroupDocs.Viewer API
        // Instantiate Viewer with output document
        using (Viewer viewer = new Viewer("output.vcf"))
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
        - icon: "far fa-envelope-o"
          title: " About VCF File Format"
          content: |
            VCF (Virtual Card Format) or vCard is a digital file format for storing contact information. The format is widely used for data interchange among popular information exchange applications. Most operating systems such as Windows and MacOS come with default applications to create and open these files. A single VCF file can contain contact information for one or multiple contacts. A VCF file usually contains information such as contact’s name, address, phone number, email, birthday, photographs and audio in addition to a number of other fields. Being supported by email clients and services, there is no loss of data during the transfer of contacts via using the vCard format. The media type for VCF file format is text/vcard.

          link: "https://docs.fileformat.com/email/vcf/"

############################# More Formats ############################
more_formats:
    enable: true
    title: "Adding Image Watermarks to Other Document Format Viewers"
    format: 
        # format loop
        - name: "Add Watermark to PDF"
          link: "https://products.conholdate.com/total/net/watermark/add/pdf/"
          description: "Adobe Portable Document Format"

        # format loop
        - name: "Add Watermark to Word"
          link: "https://products.conholdate.com/total/net/watermark/add/word/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add Watermark to Excel"
          link: "https://products.conholdate.com/total/net/watermark/add/excel/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add Watermark to Image"
          link: "https://products.conholdate.com/total/net/watermark/add/image/"
          description: "Image Files"

        # format loop
        - name: "Add Watermark to Visio"
          link: "https://products.conholdate.com/total/net/watermark/add/visio/"
          description: "Microsoft Visio Drawing"

        # format loop
        - name: "Add Watermark to Project"
          link: "https://products.conholdate.com/total/net/watermark/add/project/"
          description: "Microsoft Project Document"

        # format loop
        - name: "Add Watermark to Email"
          link: "https://products.conholdate.com/total/net/watermark/add/email/"
          description: "Email Files"

        # format loop
        - name: "Add Watermark to Web"
          link: "https://products.conholdate.com/total/net/watermark/add/web/"
          description: "Web Files"

        # format loop
        - name: "Add Watermark to One"
          link: "https://products.conholdate.com/total/net/watermark/add/one/"
          description: "Microsoft OneNote"

        # format loop
        - name: "Add Watermark to DOC"
          link: "https://products.conholdate.com/total/net/watermark/add/doc/"
          description: "Microsoft Word 97-2003 Document"

        # format loop
        - name: "Add Watermark to DOCX"
          link: "https://products.conholdate.com/total/net/watermark/add/docx/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add Watermark to DOT"
          link: "https://products.conholdate.com/total/net/watermark/add/dot/"
          description: "Microsoft Word 97-2003 Template"

        # format loop
        - name: "Add Watermark to DOTX"
          link: "https://products.conholdate.com/total/net/watermark/add/dotx/"
          description: "Microsoft Word Template"

        # format loop
        - name: "Add Watermark to RTF"
          link: "https://products.conholdate.com/total/net/watermark/add/rtf/"
          description: "Rich Text Document"

        # format loop
        - name: "Add Watermark to TXT"
          link: "https://products.conholdate.com/total/net/watermark/add/txt/"
          description: "Plain Text Document"

        # format loop
        - name: "Add Watermark to XLS"
          link: "https://products.conholdate.com/total/net/watermark/add/xls/"
          description: "Microsoft Excel 95-2003 Workbook Worksheet"

        # format loop
        - name: "Add Watermark to XLSX"
          link: "https://products.conholdate.com/total/net/watermark/add/xlsx/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add Watermark to XLT"
          link: "https://products.conholdate.com/total/net/watermark/add/xlt/"
          description: "Microsoft Excel 97-2003 Worksheet Template"

        # format loop
        - name: "Add Watermark to XLTX"
          link: "https://products.conholdate.com/total/net/watermark/add/xltx/"
          description: "Excel Open XML Spreadsheet Template"

        # format loop
        - name: "Add Watermark to CSV"
          link: "https://products.conholdate.com/total/net/watermark/add/csv/"
          description: "Comma Separated Values File"

        # format loop
        - name: "Add Watermark to PPT"
          link: "https://products.conholdate.com/total/net/watermark/add/ppt/"
          description: "Microsoft PowerPoint 97-2003 Presentation"

        # format loop
        - name: "Add Watermark to PPTX"
          link: "https://products.conholdate.com/total/net/watermark/add/pptx/"
          description: "Microsoft PowerPoint Presentation"

        # format loop
        - name: "Add Watermark to PPS"
          link: "https://products.conholdate.com/total/net/watermark/add/pps/"
          description: "Microsoft PowerPoint 97-2003 Slide Show"

        # format loop
        - name: "Add Watermark to PPSX"
          link: "https://products.conholdate.com/total/net/watermark/add/ppsx/"
          description: "Microsoft PowerPoint Slide Show"

        # format loop
        - name: "Add Watermark to POT"
          link: "https://products.conholdate.com/total/net/watermark/add/pot/"
          description: "Microsoft PowerPoint Template"
        
        # format loop
        - name: "Add Watermark to POTX"
          link: "https://products.conholdate.com/total/net/watermark/add/potx/"
          description: "Microsoft PowerPoint Presentation"

        # format loop
        - name: "Add Watermark to BMP"
          link: "https://products.conholdate.com/total/net/watermark/add/bmp/"
          description: "Bitmap Picture"

        # format loop
        - name: "Add Watermark to GIF"
          link: "https://products.conholdate.com/total/net/watermark/add/gif/"
          description: "Graphics Interchange Format"

        # format loop
        - name: "Add Watermark to JPEG"
          link: "https://products.conholdate.com/total/net/watermark/add/jpeg/"
          description: "Joint Photographic Experts Group"

        # format loop
        - name: "Add Watermark to PNG"
          link: "https://products.conholdate.com/total/net/watermark/add/png/"
          description: "Portable Network Graphics"

        # format loop
        - name: "Add Watermark to TIFF"
          link: "https://products.conholdate.com/total/net/watermark/add/tiff/"
          description: "Tagged Image File Format"

        # format loop
        - name: "Add Watermark to VSD"
          link: "https://products.conholdate.com/total/net/watermark/add/vsd/"
          description: "Microsoft Visio 2003-2010 Drawing"

        # format loop
        - name: "Add Watermark to VDX"
          link: "https://products.conholdate.com/total/net/watermark/add/vdx/"
          description: "Microsoft Visio 2003-2010 XML Drawing"

        # format loop
        - name: "Add Watermark to VSS"
          link: "https://products.conholdate.com/total/net/watermark/add/vss/"
          description: "Microsoft Visio 2003-2010 Stencil"

        # format loop
        - name: "Add Watermark to VSSX"
          link: "https://products.conholdate.com/total/net/watermark/add/vssx/"
          description: "Microsoft Visio Stencil"

        # format loop
        - name: "Add Watermark to VSDX"
          link: "https://products.conholdate.com/total/net/watermark/add/vsdx/"
          description: "Microsoft Visio Drawing"
        
        # format loop
        - name: "Add Watermark to MPP"
          link: "https://products.conholdate.com/total/net/watermark/add/mpp/"
          description: "Microsoft Project Document"

        # format loop
        - name: "Add Watermark to MPT"
          link: "https://products.conholdate.com/total/net/watermark/add/mpt/"
          description: "Microsoft Project Template"

        # format loop
        - name: "Add Watermark to MPX"
          link: "https://products.conholdate.com/total/net/watermark/add/mpx/"
          description: "Microsoft Project Exchange File"

        # format loop
        - name: "Add Watermark to MSG"
          link: "https://products.conholdate.com/total/net/watermark/add/msg/"
          description: "Microsoft Outlook E-mail Message"

        # format loop
        - name: "Add Watermark to EML"
          link: "https://products.conholdate.com/total/net/watermark/add/eml/"
          description: "E-mail Message"

        # format loop
        - name: "Add Watermark to EMLX"
          link: "https://products.conholdate.com/total/net/watermark/add/emlx/"
          description: "Apple Mail E-mail File"

        # format loop
        - name: "Add Watermark to PST"
          link: "https://products.conholdate.com/total/net/watermark/add/pst/"
          description: "Microsoft Outlook Personal Storage Table"

        # format loop
        - name: "Add Watermark to OST"
          link: "https://products.conholdate.com/total/net/watermark/add/ost/"
          description: "Microsoft Outlook Offline Storage Table"

        # format loop
        - name: "Add Watermark to HTML"
          link: "https://products.conholdate.com/total/net/watermark/add/html/"
          description: "HyperText Markup Language"
        
        # format loop
        - name: "Add Watermark to MHTML"
          link: "https://products.conholdate.com/total/net/watermark/add/mhtml/"
          description: "Mime HTML"

        # format loop
        - name: "Add Watermark to WMF"
          link: "https://products.conholdate.com/total/net/watermark/add/wmf/"
          description: "Windows Metafile"

        # format loop
        - name: "Add Watermark to EMF"
          link: "https://products.conholdate.com/total/net/watermark/add/emf/"
          description: "Windows Enhanced Metafile"

        # format loop
        - name: "Add Watermark to ZIP"
          link: "https://products.conholdate.com/total/net/watermark/add/zip/"
          description: "Archive file format"

        # format loop
        - name: "Add Watermark to RAR"
          link: "https://products.conholdate.com/total/net/watermark/add/rar/"
          description: "WinRAR Compressed Archive"

        # format loop
        - name: "Add Watermark to EPUB"
          link: "https://products.conholdate.com/total/net/watermark/add/epub/"
          description: "Digital E-Book File Format"

        # format loop
        - name: "Add Watermark to MOBI"
          link: "https://products.conholdate.com/total/net/watermark/add/mobi/"
          description: "Mobipocket e-book format"

        # format loop
        - name: "Add Watermark to DjVu"
          link: "https://products.conholdate.com/total/net/watermark/add/djvu/"
          description: "Deja Vu"

        # format loop
        - name: "Add Watermark to XML"
          link: "https://products.conholdate.com/total/net/watermark/add/xml/"
          description: "Text XML document"

        # format loop
        - name: "Add Watermark to PCL"
          link: "https://products.conholdate.com/total/net/watermark/add/pcl/"
          description: "Printer Command Language"
        
        # format loop
        - name: "Add Watermark to PSD"
          link: "https://products.conholdate.com/total/net/watermark/add/psd/"
          description: "Adobe Photoshop Document"

        # format loop
        - name: "Add Watermark to DWG"
          link: "https://products.conholdate.com/total/net/watermark/add/dwg/"
          description: "Autodesk Design Data Formats"

        # format loop
        - name: "Add Watermark to DWF"
          link: "https://products.conholdate.com/total/net/watermark/add/dwf/"
          description: "Autodesk Design Web Format"

        # format loop
        - name: "Add Watermark to DGN"
          link: "https://products.conholdate.com/total/net/watermark/add/dgn/"
          description: "MicroStation Design File"

        # format loop
        - name: "Add Watermark to DWT"
          link: "https://products.conholdate.com/total/net/watermark/add/dwt/"
          description: "AutoCAD Drawing Template"

############################# Back to top ###############################
back_to_top:
  enable: true
---