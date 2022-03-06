---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/java/signature/xls/"
other_out_formats: "PDF WORD EXCEL DOC DOCX DOCM DOT DOTM DOTX XLS XLSB XLSM XLSX XLTM XLTX PPT PPTX PPS PPSX POTX POTM BMP JPEG GIF PNG WEBP TIFF WMF PSD SVG ODP OTP ODS OTS ODT OTT"
ad_headline: "Digitally Sign XLS | Java"
ad_description: "Add, edit, search, verify & delete digital signatures from XLS in Java"

############################# Head ############################
head_title: "Sign XLS File with Text or Image Signatures in Java"
head_description: "Java XLS Signature API to add, edit, remove, verify and search digital signatures (text, image, metadata, QR-Code, stamp). View the signed BMP file in HTML."

############################# Header ############################
title: "Sign XLS File in Java & View in HTML"
description: "Sign & secure XLS files in Java applications using popular electronic signature types such as text, image, metadata, QR-Code, stamp and form field. Programmatically generate, update, delete, verify and search digital signatures in XLS documents, images and various other file formats without Adobe Reader installed."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "How to Add Image Signatures to XLS"
      content_left: |
          Using [Conholdate.Total for Java](https://products.conholdate.com/total/java/) - insert custom image as an electronic signature to a XLS document in Java. Add company logo, stamp icon or name using different colors and text effects.

          -   Create a new instance of [Signature](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature) class and pass input document to it
          -   Instantiate the [ImageSignOptions](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature.options.sign/ImageSignOptions) object and specify image signature options
          -   Call [Sign](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature#sign(java.io.OutputStream,%20com.groupdocs.signature.options.sign.SignOptions)) method of **Signature** class instance and pass **ImageSignOptions** to it
          -   Set options to view document as HTML
          -   Instantiate Viewer with output file
          
      title_right: "APIs Download & Installation Instructions"
      content_right: |
          You require `GroupDocs.Signature` & `GroupDocs.Viewer` namespaces to digitally sign documents in Java and view as HTML, image or in a PDF format. Explore other [Java APIs for Office documents](https://products.conholdate.com/total/java/) as offered by Conholdate.Total.
          
          Get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/java) or fetch the whole package from [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo) to add 'Conholdate.Total` directly in your workspace.
          
      gisthash: "5683d8243aa8c95ea15ab0e5763e0dcd"
      gistfile: "add-image-signatures-to-pdf-files.java"

    - title_left: "Add Text Signatures to XLS in Java"
      content_left: |
          Add customized text signature to a XLS document in Java using advanced text settings such as font color, size, name, text alignment and border adjustment.

          -   Create a new instance of [Signature](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature) class and pass input document
          -   Instantiate the [TextSignOptions](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature.options.sign/TextSignOptions) object and specify text signature options
          -   Call [sign](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature#sign(java.io.OutputStream,%20com.groupdocs.signature.options.sign.SignOptions)) method of **Signature** class instance and pass **TextSignOptions** to it
        
      title_right: "Image Representation of Document Pages"
      content_right: |
          Apply digital signatures to a wide range of document formats and generate the image representation of the already signed document pages in PNG, JPG or BMP formats. You can easily preview the complete document as a whole or choose to display some specific pages based on page numbers or page ranges.
          
      gisthash: "9d0efb4c5571e50b2a088b3ab054192d"
      gistfile: "add-text-signatures-to-pdf-files.java"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF WORD EXCEL DOC DOCX DOCM DOT DOTM DOTX XLS XLSB XLSM XLSX XLTM XLTX PPT PPTX PPS PPSX POTX POTM BMP JPEG GIF PNG WEBP TIFF WMF PSD SVG ODP OTP ODS OTS ODT OTT
############################# Back to top ###############################
back_to_top:
  enable: true
---