---
############################# Static ############################
layout: "autogen"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/net/conversion/cf2-to-xlsm/"

############################# Head ############################
head_title: "Convert CF2 to XLSM in C# VB.NET & View as HTML"
head_description: "Code example to convert CF2 to XLSM and 100+ other file formats in .NET (C#, VB.NET, ASP.NET & .NET Core) applications. Display the Converted XLSM document as HTML viewer."

############################# Header ############################
title: "Convert CF2 to XLSM & View as HTML"
description: "Programmatically convert CF2 to XLSM in .NET applications using flexible options to customize the resultant document. Convert the complete document or specific pages based on page numbers or selective page ranges using the .NET document conversion library."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "CF2 to XLSM Conversion in C# .NET"
      content_left: |
          CF2 to XLSM file conversion using C#. Add watermark and view the converted document as HTML without using any external software.

          -   Create **Converter** object to convert CF2 document
          -   Set the convert options for XLSM format
          -   Call **Convert** method of **Converter** class instance for conversion to XLSM
          -   Set options for HTML viewer
          -   Create **Viewer** object to view converted XLSM as HTML
          
      title_right: "Convert Whole Document or Specific Pages"
      content_right: |
          You require `GroupDocs.Conversion` & `GroupDocs.Viewer` namespaces to convert between a wide range of popular document types such as PDF, Microsoft Word, Excel, PowerPoint, Project, Outlook, HTML, diagrams and image file formats. Explore other [.NET APIs for Office documents](https://products.conholdate.com/total/net/) as offered by Conholdate.Total.
          
          Get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [Nuget](https://www.nuget.org/packages/Conholdate.Total/) to add 'Conholdate.Total` directly in your workspace.
          
      code: |
          ```cs {linenos=false}
          // Convert CF2 to XLSM using GroupDocs.Conversion API
          // Create Converter object to convert CF2 document
          using (Converter converter = new Converter("input.cf2"))
          {
              // set the convert options for XLSM format
              var convertOptions = converter.GetPossibleConversions()["xlsm"].ConvertOptions;

              // convert to XLSM format
              converter.Convert("output.xlsm", convertOptions);
          }

          // Set options for HTML viewer
          HtmlViewOptions viewOptions = HtmlViewOptions.ForEmbeddedResources("output{0}.html");

          // Create Viewer object to view converted XLSM as HTML
          using (Viewer viewer = new Viewer("output.xlsm"))
          {
              viewer.View(viewOptions);
          }
          ```
    - title_left: "Add Watermark to Converted XLSM in C#"
      content_left: |
          Accurately convert documents (CF2 to XLSM) exactly as the original file and apply text or image watermarks to the converted document pages using C# .NET.

          -   Create **Converter** object to convert CF2 document
          -   Create new instance of **WatermarkOptions** class
          -   Specify watermark properties (color, width, text, image etc)
          -   Instantiate the proper **ConvertOptions** class
          -   Set **Watermark** property of the **ConvertOptions** instance
          -   Call **Convert** method of **Converter** class instance for conversion to XLSM
        
      title_right: "Source Document Information Extraction"
      content_right: |
          The documents information extraction feature not only allows getting the basic information about the source document file but it also supports extracting some valuable file-format specific information such as project start and end dates of a Microsoft Project file, any printing restrictions on a PDF document, list of folders enclosed in an Outlook data file etc. 

          Convert popular document file formats on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
          
      code: |
          ```cs {linenos=false}
          // Create Converter object to convert CF2 document
          using (Converter converter = new Converter("input.cf2"))
          {
              // Create new instance of WatermarkOptions class
              WatermarkOptions watermark = new WatermarkOptions
              {
                  Text = "Sample watermark",
                  Color = Color.Red,
                  Width = 100,
                  Height = 100,
                  Background = true
              };

              // Instantiate the proper ConvertOptions class
              PdfConvertOptions options = new PdfConvertOptions
              {
                  Watermark = watermark
              };

              // convert to XLSM format
              converter.Convert("output.xlsm", options);
          }
          ```
############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOCX DOT DOTX DOTM TXT RTF HTML MHTML XLS XLSX XLSM XLT XLTX XLTM CSV DIF PPT PPTX PPS PPSX POT POTX POTM ODT OTT OTP ODP ODS EMZ WMZ SVGZ TEX DCM WMF BMP PNG GIF JPEG TIFF
############################# Back to top ###############################
back_to_top:
  enable: true
---