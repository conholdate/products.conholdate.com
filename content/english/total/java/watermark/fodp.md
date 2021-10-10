---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: java

############################# Head ############################
head_title: "Add Watermark to FODG Viewer in Java & J2SE"
head_description: "Add image watermark to FODG file viewer applications using Java & J2SE in your desktop, web or mobile applications."

############################# Header ############################
title: "Add Watermark to FODG Viewer in Java"
description: "Add watermark image to FODG document viewer applications in Java and J2SE platforms. Display the watermarked file in HTML, Image or PDF format inside your applications without using any additional software."

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
    title_left: "Insert Watermarks to FODG File in Java"
    content_left: |
        [Conholdate.Total for Java](https://products.conholdate.com/total/java/) makes it easy for Java developers to work with adding image watermarks to their document viewer applications by implementing a few easy steps.

        *   Instantiate **FileInputStream** Object with input FODG document
        *   Instantiate **Watermarker** object using the stream object created above
        *   Use watermark image path as constructor parameter of **ImageWatermark** class
        *   Set the watermark size and alignment
        *   Add watermark to the **watermarker** and create output file
        *   Set options to view document as HTML
        *   Instantiate **Viewer** with output document
        
    title_right: "System Requirements"
    content_right: |
        The following piece of code requires `GroupDocs.Watermark` & `GroupDocs.Viewer` namespaces. You can get the respective files from the [downloads](https://downloads.conholdate.com/total/java) or fetch the whole package from [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo/com/conholdate/conholdate-total).

        Insert image watermark to FODG on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // Add image watermark to FODP in Java
        // Instantiate FileInputStream Object with input file
        FileInputStream stream = new FileInputStream("input.fodp");

        // Instantiate Watermarker object using the stream object created above
        Watermarker watermarker = new Watermarker(stream);

        // Use watermark image path as constructor parameter of ImageWatermark class
        ImageWatermark watermark = new ImageWatermark("watermark.png");

        // Set image watermark alignment 
        watermark.setHorizontalAlignment(HorizontalAlignment.Center);
        watermark.setVerticalAlignment(VerticalAlignment.Center);

        //Add watermark to the watermarker and generate output file
        watermarker.add(watermark);
        watermarker.save("output.fodp");

        // Close Watermark, Watermarker and FileInputStream objects
        watermark.close();
        watermarker.close();
        stream.close();

        // View watermarked FODP file using GroupDocs.Viewer API
        // Set options to view document as HTML
        HtmlViewOptions options = HtmlViewOptions.forEmbeddedResources("output{0}.html");

        // Instantiate Viewer with output file
        try (Viewer viewer = new Viewer("output.fodp")) {
          viewer.view(options);
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
          title: " About FODG File Format"
          content: |
            A file with .fodg extension is an Apache OpenOffice Drawing file format for storing drawing elements. It is based on the file format specifications outlined by Advancement of Structural Information Standards (OASIS). Another similar file format for OpenOffice graphics is ODG that stores drawing elements as a vector image. FODG files can be opened with OpenOffice as well as LibreOffice. Other file formats supported by OpenOffice, for example, include ODT, ODF, ODP and ODS.

          link: "https://docs.fileformat.com/image/fodg/"

############################# More Formats ############################
more_formats:
    enable: true
    title: "Adding Image Watermarks to Other Document Format Viewers"
    format: 
        # format loop
        - name: "Add Watermark to PDF"
          link: "https://products.conholdate.com/total/java/watermark/pdf/"
          description: "Adobe Portable Document Format"

        # format loop
        - name: "Add Watermark to Word"
          link: "https://products.conholdate.com/total/java/watermark/word/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add Watermark to Excel"
          link: "https://products.conholdate.com/total/java/watermark/excel/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add Watermark to Image"
          link: "https://products.conholdate.com/total/java/watermark/image/"
          description: "Image Files"

        # format loop
        - name: "Add Watermark to Visio"
          link: "https://products.conholdate.com/total/java/watermark/visio/"
          description: "Microsoft Visio Drawing"

        # format loop
        - name: "Add Watermark to Project"
          link: "https://products.conholdate.com/total/java/watermark/project/"
          description: "Microsoft Project Document"

        # format loop
        - name: "Add Watermark to Email"
          link: "https://products.conholdate.com/total/java/watermark/email/"
          description: "Email Files"

        # format loop
        - name: "Add Watermark to Web"
          link: "https://products.conholdate.com/total/java/watermark/web/"
          description: "Web Files"

        # format loop
        - name: "Add Watermark to One"
          link: "https://products.conholdate.com/total/java/watermark/one/"
          description: "Microsoft OneNote"

        # format loop
        - name: "Add Watermark to DOC"
          link: "https://products.conholdate.com/total/java/watermark/doc/"
          description: "Microsoft Word 97-2003 Document"

        # format loop
        - name: "Add Watermark to DOCX"
          link: "https://products.conholdate.com/total/java/watermark/docx/"
          description: "Microsoft Word Document"

        # format loop
        - name: "Add Watermark to DOT"
          link: "https://products.conholdate.com/total/java/watermark/dot/"
          description: "Microsoft Word 97-2003 Template"

        # format loop
        - name: "Add Watermark to DOTX"
          link: "https://products.conholdate.com/total/java/watermark/dotx/"
          description: "Microsoft Word Template"

        # format loop
        - name: "Add Watermark to RTF"
          link: "https://products.conholdate.com/total/java/watermark/rtf/"
          description: "Rich Text Document"

        # format loop
        - name: "Add Watermark to TXT"
          link: "https://products.conholdate.com/total/java/watermark/txt/"
          description: "Plain Text Document"

        # format loop
        - name: "Add Watermark to XLS"
          link: "https://products.conholdate.com/total/java/watermark/xls/"
          description: "Microsoft Excel 95-2003 Workbook Worksheet"

        # format loop
        - name: "Add Watermark to XLSX"
          link: "https://products.conholdate.com/total/java/watermark/xlsx/"
          description: "Microsoft Excel Worksheet"

        # format loop
        - name: "Add Watermark to XLT"
          link: "https://products.conholdate.com/total/java/watermark/xlt/"
          description: "Microsoft Excel 97-2003 Worksheet Template"

        # format loop
        - name: "Add Watermark to XLTX"
          link: "https://products.conholdate.com/total/java/watermark/xltx/"
          description: "Excel Open XML Spreadsheet Template"

        # format loop
        - name: "Add Watermark to CSV"
          link: "https://products.conholdate.com/total/java/watermark/csv/"
          description: "Comma Separated Values File"

        # format loop
        - name: "Add Watermark to PPT"
          link: "https://products.conholdate.com/total/java/watermark/ppt/"
          description: "Microsoft PowerPoint 97-2003 Presentation"

        # format loop
        - name: "Add Watermark to PPTX"
          link: "https://products.conholdate.com/total/java/watermark/pptx/"
          description: "Microsoft PowerPoint Presentation"

        # format loop
        - name: "Add Watermark to PPS"
          link: "https://products.conholdate.com/total/java/watermark/pps/"
          description: "Microsoft PowerPoint 97-2003 Slide Show"

        # format loop
        - name: "Add Watermark to PPSX"
          link: "https://products.conholdate.com/total/java/watermark/ppsx/"
          description: "Microsoft PowerPoint Slide Show"

        # format loop
        - name: "Add Watermark to POT"
          link: "https://products.conholdate.com/total/java/watermark/pot/"
          description: "Microsoft PowerPoint Template"
        
        # format loop
        - name: "Add Watermark to POTX"
          link: "https://products.conholdate.com/total/java/watermark/potx/"
          description: "Microsoft PowerPoint Presentation"

        # format loop
        - name: "Add Watermark to BMP"
          link: "https://products.conholdate.com/total/java/watermark/bmp/"
          description: "Bitmap Picture"

        # format loop
        - name: "Add Watermark to GIF"
          link: "https://products.conholdate.com/total/java/watermark/gif/"
          description: "Graphics Interchange Format"

        # format loop
        - name: "Add Watermark to JPEG"
          link: "https://products.conholdate.com/total/java/watermark/jpeg/"
          description: "Joint Photographic Experts Group"

        # format loop
        - name: "Add Watermark to PNG"
          link: "https://products.conholdate.com/total/java/watermark/png/"
          description: "Portable Network Graphics"

        # format loop
        - name: "Add Watermark to TIFF"
          link: "https://products.conholdate.com/total/java/watermark/tiff/"
          description: "Tagged Image File Format"

        # format loop
        - name: "Add Watermark to VSD"
          link: "https://products.conholdate.com/total/java/watermark/vsd/"
          description: "Microsoft Visio 2003-2010 Drawing"

        # format loop
        - name: "Add Watermark to VDX"
          link: "https://products.conholdate.com/total/java/watermark/vdx/"
          description: "Microsoft Visio 2003-2010 XML Drawing"

        # format loop
        - name: "Add Watermark to VSS"
          link: "https://products.conholdate.com/total/java/watermark/vss/"
          description: "Microsoft Visio 2003-2010 Stencil"

        # format loop
        - name: "Add Watermark to VSSX"
          link: "https://products.conholdate.com/total/java/watermark/vssx/"
          description: "Microsoft Visio Stencil"

        # format loop
        - name: "Add Watermark to VSDX"
          link: "https://products.conholdate.com/total/java/watermark/vsdx/"
          description: "Microsoft Visio Drawing"
        
        # format loop
        - name: "Add Watermark to MPP"
          link: "https://products.conholdate.com/total/java/watermark/mpp/"
          description: "Microsoft Project Document"

        # format loop
        - name: "Add Watermark to MPT"
          link: "https://products.conholdate.com/total/java/watermark/mpt/"
          description: "Microsoft Project Template"

        # format loop
        - name: "Add Watermark to MPX"
          link: "https://products.conholdate.com/total/java/watermark/mpx/"
          description: "Microsoft Project Exchange File"

        # format loop
        - name: "Add Watermark to MSG"
          link: "https://products.conholdate.com/total/java/watermark/msg/"
          description: "Microsoft Outlook E-mail Message"

        # format loop
        - name: "Add Watermark to EML"
          link: "https://products.conholdate.com/total/java/watermark/eml/"
          description: "E-mail Message"

        # format loop
        - name: "Add Watermark to EMLX"
          link: "https://products.conholdate.com/total/java/watermark/emlx/"
          description: "Apple Mail E-mail File"

        # format loop
        - name: "Add Watermark to PST"
          link: "https://products.conholdate.com/total/java/watermark/pst/"
          description: "Microsoft Outlook Personal Storage Table"

        # format loop
        - name: "Add Watermark to OST"
          link: "https://products.conholdate.com/total/java/watermark/ost/"
          description: "Microsoft Outlook Offline Storage Table"

        # format loop
        - name: "Add Watermark to HTML"
          link: "https://products.conholdate.com/total/java/watermark/html/"
          description: "HyperText Markup Language"
        
        # format loop
        - name: "Add Watermark to MHTML"
          link: "https://products.conholdate.com/total/java/watermark/mhtml/"
          description: "Mime HTML"

        # format loop
        - name: "Add Watermark to WMF"
          link: "https://products.conholdate.com/total/java/watermark/wmf/"
          description: "Windows Metafile"

        # format loop
        - name: "Add Watermark to EMF"
          link: "https://products.conholdate.com/total/java/watermark/emf/"
          description: "Windows Enhanced Metafile"

        # format loop
        - name: "Add Watermark to ZIP"
          link: "https://products.conholdate.com/total/java/watermark/zip/"
          description: "Archive file format"

        # format loop
        - name: "Add Watermark to RAR"
          link: "https://products.conholdate.com/total/java/watermark/rar/"
          description: "WinRAR Compressed Archive"

        # format loop
        - name: "Add Watermark to EPUB"
          link: "https://products.conholdate.com/total/java/watermark/epub/"
          description: "Digital E-Book File Format"

        # format loop
        - name: "Add Watermark to MOBI"
          link: "https://products.conholdate.com/total/java/watermark/mobi/"
          description: "Mobipocket e-book format"

        # format loop
        - name: "Add Watermark to DjVu"
          link: "https://products.conholdate.com/total/java/watermark/djvu/"
          description: "Deja Vu"

        # format loop
        - name: "Add Watermark to XML"
          link: "https://products.conholdate.com/total/java/watermark/xml/"
          description: "Text XML document"

        # format loop
        - name: "Add Watermark to PCL"
          link: "https://products.conholdate.com/total/java/watermark/pcl/"
          description: "Printer Command Language"
        
        # format loop
        - name: "Add Watermark to PSD"
          link: "https://products.conholdate.com/total/java/watermark/psd/"
          description: "Adobe Photoshop Document"

        # format loop
        - name: "Add Watermark to DWG"
          link: "https://products.conholdate.com/total/java/watermark/dwg/"
          description: "Autodesk Design Data Formats"

        # format loop
        - name: "Add Watermark to DWF"
          link: "https://products.conholdate.com/total/java/watermark/dwf/"
          description: "Autodesk Design Web Format"

        # format loop
        - name: "Add Watermark to DGN"
          link: "https://products.conholdate.com/total/java/watermark/dgn/"
          description: "MicroStation Design File"

        # format loop
        - name: "Add Watermark to DWT"
          link: "https://products.conholdate.com/total/java/watermark/dwt/"
          description: "AutoCAD Drawing Template"

############################# Back to top ###############################
back_to_top:
  enable: true
---