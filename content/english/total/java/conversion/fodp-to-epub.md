---
############################# Static ############################
layout: "autogen"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/java/conversion/fodp-to-epub/"

############################# Head ############################
head_title: "Convert FODP to EPUB in Java - Sample Java Code"
head_description: "Java document conversion library to convert FODP to EPUB and 100+ other file formats in Java & J2SE applications. View the Converted EPUB document as HTML viewer."

############################# Header ############################
title: "Convert FODP to EPUB in Java & View as HTML"
description: "Programmatically convert FODP to EPUB in Java & J2SE platforms using flexible document manipulation options to customize the resultant document. Convert the complete document or some specific pages based on page numbers or selective page ranges using Java document conversion library."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "FODP to EPUB Conversion in Java"
      content_left: |
          Perform FODP to EPUB file conversion in three simple steps using Java. View the converted document as HTML without any external software dependency.

          -   Create a new instance of **Converter** class and load the FODP file
          -   Set **ConvertOptions** for the EPUB document type
          -   Call **Convert** method of **Converter** class instance for conversion to EPUB
          -   Set options for HTML viewer
          -   Create **Viewer** object to view converted EPUB as HTML
          
      title_right: "Convert Remotely Located Documents"
      content_right: |
          You require `GroupDocs.Conversion` & `GroupDocs.Viewer` namespaces to convert between a wide range of popular document types such as PDF, Microsoft Word, Excel, PowerPoint, Project, Outlook, HTML, diagrams and image file formats. Explore other [Java APIs for Office documents](https://products.conholdate.com/total/java/) as offered by Conholdate.Total.
          
          Get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/java) or fetch the whole package from [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo) to add 'Conholdate.Total` directly in your workspace.
          
      code: |
          ```cs {linenos=false}
          // Convert FODP to EPUB using GroupDocs.Conversion API
          // Load the source FODP file to be converted
          Converter converter = new Converter("input.fodp");

          // Get the convert options ready for the target EPUB format
          ConvertOptions convertOptions = new FileType().fromExtension("epub").getConvertOptions();

          // Convert to EPUB format
          converter.convert("output.epub", convertOptions);

          // Create Viewer object to view the converted EPUB as HTML
          try (Viewer viewer = new Viewer("output.epub"))
          {
              // Set options for HTML viewer
              HtmlViewOptions viewOptions = HtmlViewOptions.forEmbeddedResources("output{0}.html");

              // View converted EPUB as HTML
              viewer.view(viewOptions);
          }
          ```
    - title_left: "Convert Password Protected FODP to EPUB"
      content_left: |
          Accurately load and convert documents that are protected with a password within your Java based applications. The file format conversion API also supports rendering remote documents from different sources including S3, Blob, FTP, Stream, URL or a local disk.

          -   Create new instance of **Converter** class and pass source document path
          -   Instantiate the proper **ConvertOptions** class e.g. (**PdfConvertOptions**, **WordProcessingConvertOptions**, **SpreadsheetConvertOptions** etc.)
          -   Call **convert** method of **Converter** class instance and pass filename for the converted document
        
      title_right: "Source Document Information Extraction"
      content_right: |
          The documents information extraction feature not only allows getting the basic information about the source document file but it also supports extracting some valuable file-format specific information such as project start and end dates of a Microsoft Project file, any printing restrictions on a PDF document, list of folders enclosed in an Outlook data file etc. 

          Convert popular document file formats on different operating systems such as Windows, Linux or macOS while using development environments such as NetBeans, IntelliJ IDEA and Eclipse.
          
      code: |
          ```cs {linenos=false}
          // Load and convert password protected documents
          WordProcessingLoadOptions loadOptions = new WordProcessingLoadOptions();
          loadOptions.setPassword("12345");

          // Create an instance of Converter class and pass source document path and the load options delegate as a constructor parameters
          Converter converter = new Converter("input.fodp", loadOptions);

          // Instantiate PdfConvertOptions class
          PdfConvertOptions options = new PdfConvertOptions();

          // Call convert method of Converter class instance and pass filename for the converted document and the instance of ConvertOptions from the previous step
          converter.convert("output.epub, options);
          ```
############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOCX DOT DOTX DOTM TXT RTF HTML MHTML XLS XLSX XLSM XLT XLTX XLTM DIF PPT PPTX PPS PPSX POT POTX POTM ODT OTT EMZ WMZ SVGZ TEX DCM WMF BMP PNG GIF JPEG TIFF
############################# Back to top ###############################
back_to_top:
  enable: true
---