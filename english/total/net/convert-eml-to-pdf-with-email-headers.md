---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Convert EML to PDF with Headers via C# .NET"
head_description: ".NET APIs for Email to PDF Conversion with just a few lines of C# code"

############################# Header ############################
title: "Convert EML Headers to PDF via .NET Core"
description: "Load EML Message Files and Convert to PDF using C#"

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
    title_left: "C# Code to Convert EML to PDF"
    content_left: |
        -   Load the EML file in an instance of [MailMessage](https://apireference.aspose.com/email/net/aspose.email/mailmessage) via `Load` method
        -   Create an instance of [MhtSaveOptions](https://apireference.aspose.com/email/net/aspose.email/mhtsaveoptions) for output customization
        -   Set `MhtSaveOptions` to write message header with complete email addresses
        -   Call [MailMessage.Save](https://apireference.aspose.com/email/net/aspose.email/mailmessage/methods/save/index) method to save message in MHTML format
        -   Load MHTML from previous step in an instance of [Document](https://apireference.aspose.com/words/net/aspose.words/document/constructors/main)
        -   Call [Document.Save](https://apireference.aspose.com/words/net/aspose.words/document/methods/save/index) method with `SaveFormat.Pdf` as second parameter
        -   Load the PDF in any application to view complete message as PDF
        
    title_right: "EML Conversion with .NET Core"
    content_right: |
        The following piece of code requires `Aspose.Email` & `Aspose.Words` namespaces. You can get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        EML to PDF conversion can be used on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // load message with an instance of MailMessage
        var mailMsg = Aspose.Email.MailMessage.Load("message.eml");
        // create an instance of MhtSaveOptions for MTHML customization
        var mhtSaveOptions = Aspose.Email.MhtSaveOptions.DefaultMhtml;
        // set MhtSaveOptions to write headers with complete email addresses
        mhtSaveOptions.MhtFormatOptions = Aspose.Email.MhtFormatOptions.WriteHeader | Aspose.Email.MhtFormatOptions.WriteCompleteEmailAddress;
        // temporarily save the MTHML in MemoryStream
        using (var stream = new System.IO.MemoryStream())
        {
            mailMsg.Save(stream, mhtSaveOptions);

            // load the MHTML stream in an instance of Document
            var doc = new Aspose.Words.Document(stream);
            doc.Save("output.pdf");
        }
        // load the resultant PDF in default application
        System.Diagnostics.Process.Start("output.pdf");
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
        - icon: "far fa-file-email-o"
          title: " About EML File Format"
          content: |
            EML, aka Electronic Mail, is a file extension for message saved to a file by Microsoft Outlook Express as well as some other email programs. EML files comprise of two sections. Headers usually contain email addresses of sender & recipient as well as subject of the message and timestamp. As the name suggests, Message Body is the main content of the message which may also contain hyperlinks, images or simply the plain text.

          link: "https://docs.fileformat.com/email/eml/"

############################# More Formats ############################
more_formats:
    enable: true
    title: "Other Supported Conversions"
    format: 
        # format loop
        - name: "MSG TO PDF"
          link: "/total/net/convert-msg-to-pdf-with-email-headers/"
          description: "Outlook Message Item File"

        # format loop
        - name: "EMLX TO PDF"
          link: "/total/net/convert-emlx-to-pdf-with-email-headers/"
          description: "Apple Mail Message"

        # format loop
        - name: "OFT TO PDF"
          link: "/total/net/convert-oft-to-pdf-with-email-headers/"
          description: "Outlook File Template"

          # format loop
        - name: "PST TO PDF"
          link: "/total/net/convert-pst-messages-to-pdf/"
          description: "Outlook Personal Storage"

############################# Back to top ###############################
back_to_top:
  enable: true
---