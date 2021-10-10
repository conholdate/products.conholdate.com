---
############################# Static ############################
layout: "auto-gen"
date: 2021-06-29T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Add Digital Signatures to PPTM File Viewer in C#, VB.NET"
head_description: "Digitally add signatures to PowerPoint presentation (PPTM) and 100+ other file formats in C# .NET. View the signed file in HTML using Conholdate.Total for .NET APIs."

############################# Header ############################
title: "Digitally Add Signatures to PPTM Viewer"
description: "Digitally sign and verify signatures in PowerPoint PowerPoint presentation (PPTM) files within your C#, ASP.NET, VB.NET & Xamarin applications. Implement Barcode, Text, Image, Metadata, QR Code, Form Field and stamp signatures in multiple forms by setting up customized text, font style, colors and adjusting advanced e-signatures properties in the document."
bg_image: "https://cms.admin.containerize.com/templates/aspose/App_Themes/V3/images/bg/header1.png"
bg_overlay: false
button:
    enable: true
    icon: "fas fa-arrow-down"
    label: "Download Free Trial"
    link: "https://downloads.groupdocs.com/total"

############################# SubMenu ############################
submenu:
    enable: false

    left:
        img_alt: "GroupDocs.Total for .NET"
        image: "https://cms.admin.containerize.com/templates/groupdocs/images/product-logos/90x90-noborder/groupdocs-total-net.png"
        product: "GroupDocs.Total"
        platform: ".NET"

    middle:
        button:

            # button loop
            - link: "https://apireference.groupdocs.com"
              text: "API Reference"

            # button loop
            - link: "https://github.com/groupdocs-total"
              text: "Code Examples"

            # button loop
            - link: "https://products.groupdocs.app/total"
              text: "Live Demos"

            # button loop
            - link: "https://purchase.groupdocs.com/buy"
              text: "Pricing"

    right:
        link_download: "https://downloads.groupdocs.com"
        link_learn: "https://docs.groupdocs.com/total/net/"
        link_buy: "https://purchase.groupdocs.com"

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
    title_left: "C# Code to Digitally Sign a PPTM File"
    content_left: |
        [Conholdate.Total for .NET](https://products.conholdate.com/total/net/) supports signing PowerPoint presentation (PPTM) files with digital signatures using a few lines of C# .NET code.

        *   Instantiate **Signature** with input document
        *   Instantiate **DigitalSignOptions** object with certificate details
        *   Call **Sign** method of **Signature** class and pass **DigitalSignOptions** to it
        *   Set options to view signed document as HTML
        
    title_right: "System Requirements"
    content_right: |
        The following piece of code requires `GroupDocs.Signature` & `GroupDocs.Viewer` namespaces. You can get the respective files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        Sign your digtial documents with Barcode, Text, Image, Metadata, QR Code, Form Field and stamp signatures on operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs
        // Add digital e-signatures to PPTM file using GroupDocs.Signature API
        // Instantiate Signature with input PPTM document
        using (Signature signature = new Signature("input.pptm"))
          {
            // initialize digital option with certificate file path
            DigitalSignOptions options = new DigitalSignOptions("certificate.pfx")
            {
              // certifiate password
              Password = "1234567890",

              // digital certificate details
              Reason = "Sign",
              Contact = "JohnSmith",
              Location = "Office1",

              // image appearance as digital certificate on document pages
              ImageFilePath = "sample.jpg",

              // Set signature size and alignmnet details
              AllPages = true,
              Width = 80,
              Height = 60,
              VerticalAlignment = VerticalAlignment.Bottom,
              HorizontalAlignment = HorizontalAlignment.Right,
              Margin = new Padding() {  Bottom = 10, Right = 10},
            };

          // Sign document to file
          signature.Sign("output.pptm", options);

          // Set options to view signed document as HTML
          HtmlViewOptions viewOptions = HtmlViewOptions.forEmbeddedResources("output{0}.html");
          try (Viewer viewer = new Viewer("output.pptm")) {
          viewer.view(viewOptions);
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
          title: " About PPTM File Format"
          content: |
            Files with PPTM extension are Macro-enabled Presentation files that are created with Microsoft PowerPoint 2007 or higher versions. They are similar to PPTX files with the difference that the lateral can’t execute macros though they can contain macros. PPTM files can be edited by opening them in Microsoft PowerPoint and updating the contents. Another similar format is PPSM but it is read-only by default and starts the slideshow when opened. PPTM, like PPTX, contains slides for different presentation elements like text, images, videos, graphs and other related material.

          link: "https://docs.fileformat.com/presentation/pptm/"
    
############################# More Formats ############################
more_formats:
    enable: true
    title: "Insert Electronic Signatures to Other Document Format Viewers"
    format: 
        # format loop
        - name: "Add eSignatures to PDF"
          link: "https://products.conholdate.com/total/net/signature/pdf/"
          description: "Adobe Portable Document Format"

        # format loop
        - name: "Add eSignatures to Word"
          link: "https://products.conholdate.com/total/net/signature/word/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add eSignatures to Excel"
          link: "https://products.conholdate.com/total/net/signature/excel/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add eSignatures to Image"
          link: "https://products.conholdate.com/total/net/signature/image/"
          description: "Image Files"

        # format loop
        - name: "Add eSignatures to Visio"
          link: "https://products.conholdate.com/total/net/signature/visio/"
          description: "Microsoft Visio Drawing"

        # format loop
        - name: "Add eSignatures to Project"
          link: "https://products.conholdate.com/total/net/signature/project/"
          description: "Microsoft Project Document"

        # format loop
        - name: "Add eSignatures to Email"
          link: "https://products.conholdate.com/total/net/signature/email/"
          description: "Email Files"

        # format loop
        - name: "Add eSignatures to Web"
          link: "https://products.conholdate.com/total/net/signature/web/"
          description: "Web Files"

        # format loop
        - name: "Add eSignatures to One"
          link: "https://products.conholdate.com/total/net/signature/one/"
          description: "Microsoft OneNote"

        # format loop
        - name: "Add eSignatures to DOC"
          link: "https://products.conholdate.com/total/net/signature/doc/"
          description: "Microsoft Word 97-2003 Document"

        # format loop
        - name: "Add eSignatures to DOCX"
          link: "https://products.conholdate.com/total/net/signature/docx/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add eSignatures to DOT"
          link: "https://products.conholdate.com/total/net/signature/dot/"
          description: "Microsoft Word 97-2003 Template"

        # format loop
        - name: "Add eSignatures to DOTX"
          link: "https://products.conholdate.com/total/net/signature/dotx/"
          description: "Microsoft Word Template"

        # format loop
        - name: "Add eSignatures to RTF"
          link: "https://products.conholdate.com/total/net/signature/rtf/"
          description: "Rich Text Document"

        # format loop
        - name: "Add eSignatures to TXT"
          link: "https://products.conholdate.com/total/net/signature/txt/"
          description: "Plain Text Document"

        # format loop
        - name: "Add eSignatures to XLS"
          link: "https://products.conholdate.com/total/net/signature/xls/"
          description: "Microsoft Excel 95-2003 Workbook Worksheet"

        # format loop
        - name: "Add eSignatures to XLSX"
          link: "https://products.conholdate.com/total/net/signature/xlsx/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add eSignatures to XLT"
          link: "https://products.conholdate.com/total/net/signature/xlt/"
          description: "Microsoft Excel 97-2003 Worksheet Template"

        # format loop
        - name: "Add eSignatures to XLTX"
          link: "https://products.conholdate.com/total/net/signature/xltx/"
          description: "Excel Open XML Spreadsheet Template"

        # format loop
        - name: "Add eSignatures to CSV"
          link: "https://products.conholdate.com/total/net/signature/csv/"
          description: "Comma Separated Values File"

        # format loop
        - name: "Add eSignatures to PPT"
          link: "https://products.conholdate.com/total/net/signature/ppt/"
          description: "Microsoft PowerPoint 97-2003 Presentation"

        # format loop
        - name: "Add eSignatures to PPTX"
          link: "https://products.conholdate.com/total/net/signature/pptx/"
          description: "Microsoft PowerPoint Presentation"

        # format loop
        - name: "Add eSignatures to PPS"
          link: "https://products.conholdate.com/total/net/signature/pps/"
          description: "Microsoft PowerPoint 97-2003 Slide Show"

        # format loop
        - name: "Add eSignatures to PPSX"
          link: "https://products.conholdate.com/total/net/signature/ppsx/"
          description: "Microsoft PowerPoint Slide Show"

        # format loop
        - name: "Add eSignatures to POT"
          link: "https://products.conholdate.com/total/net/signature/pot/"
          description: "Microsoft PowerPoint Template"
        
        # format loop
        - name: "Add eSignatures to POTX"
          link: "https://products.conholdate.com/total/net/signature/potx/"
          description: "Microsoft PowerPoint Presentation"

        # format loop
        - name: "Add eSignatures to BMP"
          link: "https://products.conholdate.com/total/net/signature/bmp/"
          description: "Bitmap Picture"

        # format loop
        - name: "Add eSignatures to GIF"
          link: "https://products.conholdate.com/total/net/signature/gif/"
          description: "Graphics Interchange Format"

        # format loop
        - name: "Add eSignatures to JPEG"
          link: "https://products.conholdate.com/total/net/signature/jpeg/"
          description: "Joint Photographic Experts Group"

        # format loop
        - name: "Add eSignatures to PNG"
          link: "https://products.conholdate.com/total/net/signature/png/"
          description: "Portable Network Graphics"

        # format loop
        - name: "Add eSignatures to TIFF"
          link: "https://products.conholdate.com/total/net/signature/tiff/"
          description: "Tagged Image File Format"

        # format loop
        - name: "Add eSignatures to VSD"
          link: "https://products.conholdate.com/total/net/signature/vsd/"
          description: "Microsoft Visio 2003-2010 Drawing"

        # format loop
        - name: "Add eSignatures to VDX"
          link: "https://products.conholdate.com/total/net/signature/vdx/"
          description: "Microsoft Visio 2003-2010 XML Drawing"

        # format loop
        - name: "Add eSignatures to VSS"
          link: "https://products.conholdate.com/total/net/signature/vss/"
          description: "Microsoft Visio 2003-2010 Stencil"

        # format loop
        - name: "Add eSignatures to VSSX"
          link: "https://products.conholdate.com/total/net/signature/vssx/"
          description: "Microsoft Visio Stencil"

        # format loop
        - name: "Add eSignatures to VSDX"
          link: "https://products.conholdate.com/total/net/signature/vsdx/"
          description: "Microsoft Visio Drawing"
        
        # format loop
        - name: "Add eSignatures to MPP"
          link: "https://products.conholdate.com/total/net/signature/mpp/"
          description: "Microsoft Project Document"

        # format loop
        - name: "Add eSignatures to MPT"
          link: "https://products.conholdate.com/total/net/signature/mpt/"
          description: "Microsoft Project Template"

        # format loop
        - name: "Add eSignatures to MPX"
          link: "https://products.conholdate.com/total/net/signature/mpx/"
          description: "Microsoft Project Exchange File"

        # format loop
        - name: "Add eSignatures to MSG"
          link: "https://products.conholdate.com/total/net/signature/msg/"
          description: "Microsoft Outlook E-mail Message"

        # format loop
        - name: "Add eSignatures to EML"
          link: "https://products.conholdate.com/total/net/signature/eml/"
          description: "E-mail Message"

        # format loop
        - name: "Add eSignatures to EMLX"
          link: "https://products.conholdate.com/total/net/signature/emlx/"
          description: "Apple Mail E-mail File"

        # format loop
        - name: "Add eSignatures to PST"
          link: "https://products.conholdate.com/total/net/signature/pst/"
          description: "Microsoft Outlook Personal Storage Table"

        # format loop
        - name: "Add eSignatures to OST"
          link: "https://products.conholdate.com/total/net/signature/ost/"
          description: "Microsoft Outlook Offline Storage Table"

        # format loop
        - name: "Add eSignatures to HTML"
          link: "https://products.conholdate.com/total/net/signature/html/"
          description: "HyperText Markup Language"
        
        # format loop
        - name: "Add eSignatures to MHTML"
          link: "https://products.conholdate.com/total/net/signature/mhtml/"
          description: "Mime HTML"

        # format loop
        - name: "Add eSignatures to WMF"
          link: "https://products.conholdate.com/total/net/signature/wmf/"
          description: "Windows Metafile"

        # format loop
        - name: "Add eSignatures to EMF"
          link: "https://products.conholdate.com/total/net/signature/emf/"
          description: "Windows Enhanced Metafile"

        # format loop
        - name: "Add eSignatures to ZIP"
          link: "https://products.conholdate.com/total/net/signature/zip/"
          description: "Archive file format"

        # format loop
        - name: "Add eSignatures to RAR"
          link: "https://products.conholdate.com/total/net/signature/rar/"
          description: "WinRAR Compressed Archive"

        # format loop
        - name: "Add eSignatures to EPUB"
          link: "https://products.conholdate.com/total/net/signature/epub/"
          description: "Digital E-Book File Format"

        # format loop
        - name: "Add eSignatures to MOBI"
          link: "https://products.conholdate.com/total/net/signature/mobi/"
          description: "Mobipocket e-book format"

        # format loop
        - name: "Add eSignatures to DjVu"
          link: "https://products.conholdate.com/total/net/signature/djvu/"
          description: "Deja Vu"

        # format loop
        - name: "Add eSignatures to XML"
          link: "https://products.conholdate.com/total/net/signature/xml/"
          description: "Text XML document"

        # format loop
        - name: "Add eSignatures to PCL"
          link: "https://products.conholdate.com/total/net/signature/pcl/"
          description: "Printer Command Language"
        
        # format loop
        - name: "Add eSignatures to PSD"
          link: "https://products.conholdate.com/total/net/signature/psd/"
          description: "Adobe Photoshop Document"

        # format loop
        - name: "Add eSignatures to DWG"
          link: "https://products.conholdate.com/total/net/signature/dwg/"
          description: "Autodesk Design Data Formats"

        # format loop
        - name: "Add eSignatures to DWF"
          link: "https://products.conholdate.com/total/net/signature/dwf/"
          description: "Autodesk Design Web Format"

        # format loop
        - name: "Add eSignatures to DGN"
          link: "https://products.conholdate.com/total/net/signature/dgn/"
          description: "MicroStation Design File"

        # format loop
        - name: "Add eSignatures to DWT"
          link: "https://products.conholdate.com/total/net/signature/dwt/"
          description: "AutoCAD Drawing Template"

############################# Back to top ###############################
back_to_top:
  enable: true
---