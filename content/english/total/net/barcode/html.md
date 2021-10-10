---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Add Barcodes to HTML in C# ASP.NET VB.NET"
head_description: "Add 65+ barcode images to HTML file formats in C#, ASP.NET, VB.NET, .NET Core, Xamarin and Mono in your desktop, web or mobile applications."

############################# Header ############################
title: "Add Barcodes to HTML Files File in C# .NET"
description: "Add 1D & 2D Barcode images to HTML file formats in C#, ASP.NET, VB.NET, WPF, WinForms & .NET Core applications. Programmatically integrate 65+ popular barcode symbologies including QR Code, PDF 417, GS1 DataBar, Data Matrix, ISBN, MSI, Postal, UPCA, Aztec etc in your documents with the capabilities to control the barcode size and formatting settings by adding a few line of code."

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
    title_left: ".NET Code to Add Barcodes to HTML"
    content_left: |
        [Conholdate.Total for .NET](https://products.conholdate.com/total/net/) makes it easy for .NET developers to generate a customized barcode image based on provided text, and dynamically add it to the HTML document by implementing a few easy steps.

        *   Create a Word document object with Aspose.Words
        *   Instantiate **BarcodeGenerator** to set the barcode text & type
        *   Instantiate **DocumentBuilder** to create document object
        *   Insert the barcode image into document
        *   Save the Word document
        
    title_right: "System Requirements"
    content_right: |
        The following piece of code requires `Aspose.Words` & `Aspose.BarCode` namespaces. You can get the respective files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        Insert barcodes to a HTML file on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // Create a Word document object with Aspose.Words
        Document doc = new Document();
        
        // Instantiate linear barcode object, Set the Code text and symbology type for the barcode
        BarcodeGenerator generator = new BarcodeGenerator(EncodeTypes.Code39Standard, "1234567");

        // Create builder for document object
        DocumentBuilder builder = new DocumentBuilder(doc);

        // Insert the barCode image into the document
        builder.InsertImage(generator.GenerateBarCodeImage());

        // Save the Word document
        doc.Save("output.html");
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
        - icon: "far fa-html5"
          title: " About HTML File Format"
          content: |
            HTML (Hyper Text Markup Language) is the extension for web pages created for display in browsers. Known as language of the web, HTML has evolved with requirements of new information requirements to be displayed as part of web pages. The latest variant is known as HTML 5 that gives a lot of flexibility for working with the language. HTML pages are either received from server, where these are hosted, or can be loaded from local system as well. Each HTML page is made up of HTML elements such as forms, text, images, animations, links, etc. These elements are represented by tags and several others where each tag has start and end. It can also embed applications written in scripting languages such as JavaScript and Style Sheets (CSS) for overall layout representation.

          link: "https://docs.fileformat.com/web/html/"

############################# More Formats ############################
more_formats:
    enable: true
    title: "Insert barcodes to Other Documents"
    format: 
        # format loop
        - name: "Add Barcode to PDF"
          link: "https://products.conholdate.com/total/net/barcode/pdf/"
          description: "Adobe Portable Document Format"

        # format loop
        - name: "Add Barcode to Word"
          link: "https://products.conholdate.com/total/net/barcode/word/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add Barcode to Excel"
          link: "https://products.conholdate.com/total/net/barcode/excel/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add Barcode to DOC"
          link: "https://products.conholdate.com/total/net/barcode/doc/"
          description: "Microsoft Word 97 – 2007 Document"

        # format loop
        - name: "Add Barcode to DOT"
          link: "https://products.conholdate.com/total/net/barcode/dot/"
          description: "Microsoft Word 97 – 2007 Template"

        # format loop
        - name: "Add Barcode to DOCX"
          link: "https://products.conholdate.com/total/net/barcode/docx/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add Barcode to DOCM"
          link: "https://products.conholdate.com/total/net/barcode/docm/"
          description: "XML Macro-Enabled Document"

        # format loop
        - name: "Add Barcode to DOTX"
          link: "https://products.conholdate.com/total/net/barcode/dotx/"
          description: "Microsoft Word Template"

        # format loop
        - name: "Add Barcode to DOTM"
          link: "https://products.conholdate.com/total/net/barcode/dotm/"
          description: "XML Macro-Enabled Template"

        # format loop
        - name: "Add Barcode to ODT"
          link: "https://products.conholdate.com/total/net/barcode/odt/"
          description: "OpenDocument Text File"

        # format loop
        - name: "Add Barcode to OTT"
          link: "https://products.conholdate.com/total/net/barcode/ott/"
          description: "OpenDocument Text Template"

        # format loop
        - name: "Add Barcode to XLS"
          link: "https://products.conholdate.com/total/net/barcode/xls/"
          description: "Microsoft Excel 95-2003 Worksheet"

        # format loop
        - name: "Add Barcode to XLSX"
          link: "https://products.conholdate.com/total/net/barcode/xlsx/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add Barcode to XLSB"
          link: "https://products.conholdate.com/total/net/barcode/xlsb/"
          description: "Excel Binary Workbook"

        # format loop
        - name: "Add Barcode to XLSM"
          link: "https://products.conholdate.com/total/net/barcode/xlsm/"
          description: "Excel Macro-Enabled Workbook"

        # format loop
        - name: "Add Barcode to XLTM"
          link: "https://products.conholdate.com/total/net/barcode/xltm/"
          description: "Excel Macro-Enabled Template"

        # format loop
        - name: "Add Barcode to XLT"
          link: "https://products.conholdate.com/total/net/barcode/xlt/"
          description: "Microsoft Excel 97-2003 Template"

        # format loop
        - name: "Add Barcode to XLTX"
          link: "https://products.conholdate.com/total/net/barcode/xltx/"
          description: "Excel Open XML Spreadsheet Template"

        # format loop
        - name: "Add Barcode to CSV"
          link: "https://products.conholdate.com/total/net/barcode/csv/"
          description: "Comma Separated Values File"

        # format loop
        - name: "Add Barcode to TSV"
          link: "https://products.conholdate.com/total/net/barcode/tsv/"
          description: "Tab-separated Values File"

        # format loop
        - name: "Add Barcode to ODS"
          link: "https://products.conholdate.com/total/net/barcode/ods/"
          description: "OpenDocument Spreadsheet"

        # format loop
        - name: "Add Barcode to HTML"
          link: "https://products.conholdate.com/total/net/barcode/html/"
          description: "HyperText Markup Language"

        # format loop
        - name: "Add Barcode to MOBI"
          link: "https://products.conholdate.com/total/net/barcode/mobi/"
          description: "Mobipocket e-book format"

        # format loop
        - name: "Add Barcode to EPUB"
          link: "https://products.conholdate.com/total/net/barcode/epub/"
          description: "Digital E-Book File Format"

        # format loop
        - name: "Add Barcode to TIFF"
          link: "https://products.conholdate.com/total/net/barcode/tiff/"
          description: "Tagged Image File Format"

        # format loop
        - name: "Add Barcode to JPEG"
          link: "https://products.conholdate.com/total/net/barcode/jpeg/"
          description: "Joint Photographic Experts Group"

        # format loop
        - name: "Add Barcode to PNG"
          link: "https://products.conholdate.com/total/net/barcode/png/"
          description: "Portable Network Graphics"

        # format loop
        - name: "Add Barcode to BMP"
          link: "https://products.conholdate.com/total/net/barcode/bmp/"
          description: "Bitmap Picture"

        # format loop
        - name: "Add Barcode to SVG"
          link: "https://products.conholdate.com/total/net/barcode/svg/"
          description: "Scalable Vector Graphics Format"

        # format loop
        - name: "Add Barcode to GIF"
          link: "https://products.conholdate.com/total/net/barcode/gif/"
          description: "Graphics Interchange Format"

        # format loop
        - name: "Add Barcode to EMF"
          link: "https://products.conholdate.com/total/net/barcode/emf/"
          description: "Windows Enhanced Metafile"

        # format loop
        - name: "Add Barcode to PCL"
          link: "https://products.conholdate.com/total/net/barcode/pcl/"
          description: "Printer Control Language"

############################# Back to top ###############################
back_to_top:
  enable: true
---