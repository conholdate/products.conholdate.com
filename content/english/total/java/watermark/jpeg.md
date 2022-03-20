---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/java/watermark/jpeg/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTM DOTX RTF XLS XLSM XLSX XLT XLTM XLTX PPT PPTX PPTM PPS PPSX PPSM POT POTX POTM EML EMLX OFT MSG ODT BMP GIF JPEG JP2 PNG TIFF WEBP VSD VDX VSDM VSDX VSS VSSM VSSX VST VSTM VSTX VSX VTX JPG Word Excel Image Visio"
ad_headline: "Watermark JPEG File | Java"
ad_description: "Add, search, modify & remove watermarks from JPEG file in Java"

############################# Head ############################
head_title: "Watermark JPEG File in Java – Add, Edit, Search, Remove Watermark"
head_description: "Watermark a JPEG document in Java. Add, edit, search and delete text or image watermark from a JPEG, Word, Excel, PowerPoint, diagram or image file within Java and J2SE in your desktop, web or mobile applications."

############################# Header ############################
title: "Add Text & Image Watermark to JPEG in Java"
description: "Add an image or text watermark to a JPEG document viewer application, built on Java and J2SE platforms. Display the watermarked file in HTML, Image or PDF format inside the applications without using any additional software. Use a smart set of watermarks management and manipulation methods to add, edit, search and delete all popular watermark types from PDF, Microsoft Word documents, Excel spreadsheets, PowerPoint presentations, diagrams, email attachments and image file formats. The .NET watermark API also allows viewing the watermarked file as HTML, Image or a PDF file inside any Java based application."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "How to Add Image Watermark to JPEG in Java"
      content_left: |
          [Conholdate.Total for Java](https://products.conholdate.com/total/java/) makes it easier for java programmers to add image watermarks to their JPEG document viewer applications by adding a few easy steps.

          -   Instantiate **FileInputStream** Object with input JPEG document
          -   Instantiate **Watermarker** object using the stream object created above
          -   Use watermark image path as constructor parameter of **ImageWatermark** class
          -   Set the watermark size and alignment
          -   Add watermark to the **watermarker** and create output file
          -   Set options to view document as HTML
          -   Instantiate **Viewer** with output document
          
      title_right: "APIs Download & Installation Instructions"
      content_right: |
          The below Java code example requires `GroupDocs.Watermark` & `GroupDocs.Viewer` namespaces to insert, modify, find and remove image watermarks from the supported file formats. You can add document viewer capabilities within your applications to display the watermarked document as an HTML file on different operating systems such as Windows, Linux (Ubuntu, OpenSUSE, CentOS and others) or macOS while using platforms such as Microsoft Windows and Azure.
          
          Get the respective files from [downloads](https://downloads.conholdate.com/total/java) or fetch the whole package from [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo/com/conholdate/conholdate-total) to add 'Conholdate.Total` directly in your workspace. Explore other [Java APIs for Office documents](https://products.conholdate.com/total/java/) as offered by Conholdate.Total.
          
      gisthash: "9fa88c2b755cc9ff8944cd0c4005b889"
      gistfile: "insert-image-watermark-to-pdf.java"

    - title_left: "How to Add Text Watermark to JPEG in Java"
      content_left: |
          This Java code example demonstrates how to add text watermark to a JPEG document using a few simple lines of Java code. The watermark will be added to all the pages of the source document.

          -   Instantiate **Watermarker** with input JPEG document
          -   Initialize **TextWatermarker** with watermark text, font size and style
          -   Set watermark properties (alignment, color etc)
          -   Add watermark to the **watermarker** and generate output document
        
      title_right: "Add, Find, Edit & Delete Custom Watermarks"
      content_right: |
          Conholdate.Total for Java offers a unique set of features to add custom watermarks to supported images and document formats. Perform watermark search operation to find all possible types of watermarks that are already added to the source document by any third party tool or software. You can easily modify the text or image within the found watermarks and remove all or any particular watermark of your choice from the document.

          The supported watermark types include XObject, Artifact, Annotation, Shape, text, image, header and footer.
          
      gisthash: "ecd2c1b6a7134033ed8e79ef1ec3a327"
      gistfile: "insert-text-watermark-to-pdf.java"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTM DOTX RTF XLS XLSM XLSX XLT XLTM XLTX PPT PPTX PPTM PPS PPSX PPSM POT POTX POTM EML EMLX OFT MSG ODT BMP GIF JPEG JP2 PNG TIFF WEBP VSD VDX VSDM VSDX VSS VSSM VSSX VST VSTM VSTX VSX VTX JPG Word Excel Image Visio
############################# Back to top ###############################
back_to_top:
  enable: true
---