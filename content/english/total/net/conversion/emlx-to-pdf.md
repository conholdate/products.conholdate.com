---
############################# Static ############################
layout: "autogen"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/net/conversion/emlx-to-pdf/"

############################# Head ############################
head_title: "Convert EMLX to PDF via C# & .NET Core"
head_description: ".NET APIs for Email to PDF Conversion with just a few lines of C# code"

############################# Header ############################
title: "Convert EMLX to PDF via C# & .NET Core"
description: "Load & Convert Email Message Files to PDF in Your Apps"

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Convert EMLX to PDF with C#"
      content_left: |
          -   Load the EML file in an instance of [MailMessage](https://apireference.aspose.com/email/net/aspose.email/mailmessage) via `Load` method
          -   Create an instance of [MhtSaveOptions](https://apireference.aspose.com/email/net/aspose.email/mhtsaveoptions) for output customization
          -   Call [MailMessage.Save](https://apireference.aspose.com/email/net/aspose.email/mailmessage/methods/save/index) method to save message in MHTML format
          -   Load MHTML from previous step in an instance of [Document](https://apireference.aspose.com/words/net/aspose.words/document/constructors/main)
          -   Call [Document.Save](https://apireference.aspose.com/words/net/aspose.words/document/methods/save/index) method with `SaveFormat.Pdf` as second parameter
          -   Load the PDF in any application to view complete message as PDF
          
      title_right: "Get Started with .NET Core APIs"
      content_right: |
          You require `Aspose.Email` & `Aspose.Words` namespaces to run the code on Windows, Linux or macOS via Mono and Xamarin or .NET Framework. 
          
          Get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/) via `dotnet add package Conholdate.Total` directly in your workspace.
          
      code: |
          ```cs {linenos=false}
          // load message with an instance of MailMessage
          var mailMsg = Aspose.Email.MailMessage.Load("message.emlx");
          // create object of MhtSaveOptions for MTHML format conversion
          var mhtSaveOptions = Aspose.Email.MhtSaveOptions.DefaultMhtml;
          // convert & save the MTHML in MemoryStream
          using (var stream = new System.IO.MemoryStream())
          {
              mailMsg.Save(stream, mhtSaveOptions);
              // load the MHTML stream in an instance of Document
              var doc = new Aspose.Words.Document(stream);
              // save MHTML to PDF
              doc.Save("output.pdf", SaveFormat.Pdf);
          }
          // load the resultant PDF in default application
          System.Diagnostics.Process.Start("output.pdf");
          ```
    - title_left: "Convert EMLX Headers to PDF via C#"
      content_left: |
          -   Load the EMLX file in an instance of `MailMessage`
          -   Create an instance of [MhtSaveOptions](https://apireference.aspose.com/email/net/aspose.email/mhtsaveoptions) for output customization
          -   Set options to write message header with complete email addresses
          -   Call `MailMessage.Save` method to write the message in MHTML format
          -   Load MHTML in an instance of `Document`
          -   Call `Document.Save` to save result in PDF format
        
      title_right: "Customize MHTML for Email Headers"
      content_right: |
          [MhtSaveOptions.MhtFormatOptions](https://apireference.aspose.com/email/net/aspose.email/mhtsaveoptions/properties/mhtformatoptions) defines additional options when saving in MHTML format. 
          
          It requires a value from [MhtFormatOptions](https://apireference.aspose.com/email/net/aspose.email/mhtformatoptions) enum such as `WriteCompleteEmailAddress` to show complete addresses from email header in MHTML then in resultant PDF.
          
      code: |
          ```cs {linenos=false}
          var mailMsg = Aspose.Email.MailMessage.Load("message.emlx");

          // create an instance of MhtSaveOptions for MTHML customization
          var mhtSaveOptions = Aspose.Email.MhtSaveOptions.DefaultMhtml;
          // set MhtSaveOptions to write headers with complete email addresses
          mhtSaveOptions.MhtFormatOptions = Aspose.Email.MhtFormatOptions.WriteHeader | Aspose.Email.MhtFormatOptions.WriteCompleteEmailAddress;

          // save the MTHML in MemoryStream
          using (var stream = new System.IO.MemoryStream())
          {
              mailMsg.Save(stream, mhtSaveOptions);
              // load the MHTML stream & save as PDF
              var doc = new Aspose.Words.Document(stream);
              doc.Save("output.pdf");
          }
          ```
############################# About Formats ############################
about_formats:
    enable: true
############################# More Formats ############################
more_formats:
    enable: true
    auto: true
    other_out_formats: OST PST MBOX OLM 
############################# Back to top ###############################
back_to_top:
  enable: true
---