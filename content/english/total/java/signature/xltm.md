---
############################# Static ############################
layout: "autogen"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/java/signature/xltm/"

############################# Head ############################
head_title: "Sign XLTM File with Text or Image Signatures in Java"
head_description: "Java XLTM Signature API to add, edit, remove, verify and search digital signatures (text, image, metadata, QR-Code, stamp). View the signed XLTM file in HTML."

############################# Header ############################
title: "Sign XLTM File in Java & View in HTML"
description: "Sign & secure XLTM files in Java applications using popular electronic signature types such as text, image, metadata, QR-Code, stamp and form field. Programmatically generate, update, delete, verify and search digital signatures in documents, images and various other file formats without Adobe Reader installed."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Add Image Signatures to XLTM in Java"
      content_left: |
          Insert custom image as an electronic signature to a XLTM document in Java. Add company logo, stamp icon or name using different colors and text effects.

          -   Create a new instance of [Signature](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature) class and pass input document to it
          -   Instantiate the [ImageSignOptions](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature.options.sign/ImageSignOptions) object and specify image signature options
          -   Call [Sign](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature#sign(java.io.OutputStream,%20com.groupdocs.signature.options.sign.SignOptions)) method of **Signature** class instance and pass **ImageSignOptions** to it
          -   Set options to view document as HTML
          -   Instantiate Viewer with output file
          
      title_right: "Inserting Digital Signatures to XLTM"
      content_right: |
          You require `GroupDocs.Signature` & `GroupDocs.Viewer` namespaces to digitally sign documents and generate a display in HTML, image or PDF format. Explore other [Java APIs for Office documents](https://products.conholdate.com/total/java/) as offered by Conholdate.Total.
          
          Get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/java) or fetch the whole package from [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo) to add 'Conholdate.Total` directly in your workspace.
          
      code: |
          ```cs {linenos=false}
          Signature signature = new Signature("input.xltm")

          ImageSignOptions options = new ImageSignOptions("signature.jpg");

          // set signature position
          options.setLeft(100);
          options.setTop(100);

          // set page numbers
          options.setPageNumber(1);

          // sign document to file
          signature.sign("output.xltm", options);

          // Set options to view document as HTML
          HtmlViewOptions options = HtmlViewOptions.forEmbeddedResources("output{0}.html");

          // Instantiate Viewer with output file
          try (Viewer viewer = new Viewer("output.xltm")) {
            viewer.view(options);
            }
          ```
    - title_left: "Add Text Signatures to XLTM in Java"
      content_left: |
          Add customized text signature to a XLTM document using advanced text settings such as font color, size, name, text alignment and border adjustment.

          -   Create a new instance of [Signature](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature) class and pass input document
          -   Instantiate the [TextSignOptions](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature.options.sign/TextSignOptions) object and specify text signature options
          -   Call [sign](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature#sign(java.io.OutputStream,%20com.groupdocs.signature.options.sign.SignOptions)) method of **Signature** class instance and pass **TextSignOptions** to it
        
      title_right: "Image Representation of Document Pages"
      content_right: |
          Apply digital signatures and generate image representation of the signed document pages in PNG, JPG or BMP formats. You can easily preview the complete document as a whole or display some specific pages based on page numbers or page ranges.
          
      code: |
          ```cs {linenos=false}
          Signature signature = new Signature("input.xltm");

          TextSignOptions options = new TextSignOptions("John Smith");

          // set signature position
          options.setLeft(100);
          options.setTop(100);

          // set signature rectangle
          options.setWidth(100);
          options.setHeight(30);

          // set text color and Font
          options.setForeColor(Color.RED);
          SignatureFont signatureFont = new SignatureFont();
          signatureFont.setSize(12);
          signatureFont.setFamilyName("Comic Sans MS");
          options.setFont(signatureFont);

          // sign document to file
          signature.sign("output.xltm", options);
          ```
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