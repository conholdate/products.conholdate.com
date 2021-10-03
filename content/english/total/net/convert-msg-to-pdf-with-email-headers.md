---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Convert MSG to PDF with Headers via C# & .NET Core"
head_description: ".NET APIs for Email to PDF Conversion with just a few lines of C# code"

############################# Header ############################
title: "Convert MSG Headers to PDF with C#"
description: "Email to PDF conversion on all platforms supported by .NET Core"

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
    title_left: ".NET C# Code for MSG to PDF Conversion"
    content_left: |
        -   Load the MSG file in an instance of [MailMessage](https://apireference.aspose.com/email/net/aspose.email/mailmessage) via `Load` method
        -   Create an instance of [MhtSaveOptions](https://apireference.aspose.com/email/net/aspose.email/mhtsaveoptions) for output customization
        -   Set `MhtSaveOptions` to write message header with complete email addresses
        -   Call [MailMessage.Save](https://apireference.aspose.com/email/net/aspose.email/mailmessage/methods/save/index) method to save message in MHTML format
        -   Load MHTML from previous step in an instance of [Document](https://apireference.aspose.com/words/net/aspose.words/document/constructors/main)
        -   Call [Document.Save](https://apireference.aspose.com/words/net/aspose.words/document/methods/save/index) method with `SaveFormat.Pdf` as second parameter
        -   Load the PDF in any application to view complete message as PDF
        
    title_right: "Get Started with .NET Core APIs"
    content_right: |
        The namespaces required for the following piece of code are `Aspose.Email` & `Aspose.Words`. You can get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        MSG to PDF C# source code can be used on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // load message with an instance of MailMessage
        var mailMsg = Aspose.Email.MailMessage.Load("message.msg");
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
          title: " About MSG File Format"
          content: |
            MSG file format is majorly used by Microsoft Outlook and Exchange to store messages, contact, appointment, or other tasks. Such messages may contain one or more email fields, with the sender, recipient, subject, date, and message body, or contact information, appointment particulars, and one or more task specifications. The properties that constitute the Message object, including are also a part of the MSG file.

          link: "https://docs.fileformat.com/email/msg/"

############################# More Formats ############################
more_formats:
    enable: true
    title: "Other Supported Conversions"
    format: 
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
        
        # format loop
        - name: "MBOX TO PDF"
          link: "/total/net/convert-mbox-messages-to-pdf/"
          description: "Email Mailbox File"

############################# Back to top ###############################
back_to_top:
  enable: true
---