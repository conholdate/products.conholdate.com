---
############################# Static ############################
layout: "auto-gen"
date: 2021-06-29T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Add Digital Signatures to CMX File Viewer in C#, VB.NET"
head_description: "Digitally add signatures to CMX Viewer documents and 170+ other file formats in C# .NET. View the signed file in HTML using Conholdate.Total for .NET APIs."

############################# Header ############################
title: "Digitally Add Signatures to CMX Viewer"
description: "Digitally sign and verify signatures in CMX Viewer documents within your C#, ASP.NET, VB.NET & Xamarin applications. Implement Barcode, Text, Image, Metadata, QR Code, Form Field and stamp signatures in multiple forms by setting up customized text, font style, colors and adjusting advanced e-signatures properties in the document."
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
    title_left: "C# Code to Digitally Sign a CMX File"
    content_left: |
        [Conholdate.Total for .NET](https://products.conholdate.com/total/net/) supports signing CMX Viewer applications with digital signatures using a few lines of C# .NET code.

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
        // Add digital e-signatures to CMX file using GroupDocs.Signature API
        // Instantiate Signature with input CMX document
        using (Signature signature = new Signature("input.cmx"))
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
          signature.Sign("output.cmx", options);

          // Set options to view signed document as HTML
          HtmlViewOptions viewOptions = HtmlViewOptions.forEmbeddedResources("output{0}.html");
          try (Viewer viewer = new Viewer("output.cmx")) {
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
        - icon: "far fa-file-image-o"
          title: " About CMX File Format"
          content: |
            Files with .cmx extension are Corel Exchange image file format (also known as Corel Metafile Exchange) that is used as presentation by CorelSuite applications. It contains image data as vector graphics as well as metadata that describes the image. CMX files can be opened by CorelDraw, Corel Presentations, Paint Shop Pro and some versions of Adobe Illustrator. CMX files can be converted to other formats such as JPG and EPS.

          link: "https://docs.fileformat.com/image/cmx/"
    
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
        - name: "Add eSignatures to DjVu"
          link: "https://products.conholdate.com/total/net/signature/djvu/"
          description: "Deja Vu"

############################# Back to top ###############################
back_to_top:
  enable: true
---