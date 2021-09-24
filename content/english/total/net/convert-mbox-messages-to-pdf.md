---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Convert MBOX to PDF with .NET Core & C#"
head_description: "Save every MBOX message as PDF with just a few lines of code"

############################# Header ############################
title: "Convert MBOX Messages to PDF via .NET Core"
description: "Read MBOX file to convert each message to a separate PDF file"

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
    title_left: "Convert MBOX Messages to PDF C# .NET"
    content_left: |
        -   Load MBOX file with [MboxStorageReader.CreateReader](https://apireference.aspose.com/email/net/aspose.email.storage.mbox/mboxstoragereader/methods/createreader) method
        -   Call [MboxStorageReader.ReadNextMessage](https://apireference.aspose.com/email/net/aspose.email.storage.mbox/mboxstoragereader/methods/readnextmessage) to start reading messages
        -   Save each message in MHTML format into a Stream. Use [MailMessage.Save](https://apireference.aspose.com/email/net/aspose.email.mailmessage/save/methods/1)
        -   Load MHTML from previous step in an instance of [Document](https://apireference.aspose.com/words/net/aspose.words/document) for conversion
        -   Call [Document.Save](https://apireference.aspose.com/words/net/aspose.words/document/methods/save) method with [SaveFormat.Pdf](https://apireference.aspose.com/words/net/aspose.words/saveformat) as second parameter
        -   Load PDF files in any supporting application
        
    title_right: "MBOX Conversion with .NET Core APIs"
    content_right: |
        The namespaces required for the following piece of code are `Aspose.Email` & `Aspose.Words`. You can get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        MBOX to PDF Conversion can be done on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // load the MBOX file 
        var loadOptions = new Aspose.Email.Storage.Mbox.MboxLoadOptions();
        loadOptions.LeaveOpen = true;
        using (var reader = Aspose.Email.Storage.Mbox.MboxStorageReader.CreateReader("sample.mbox", loadOptions))
        {
            // start reading messages
            Aspose.Email.MailMessage message = reader.ReadNextMessage();

            // read all messages in a loop
            while (message != null)
            {
                using (var stream = new System.IO.MemoryStream())
                {
                    // save the message in MHTML format into a stream
                    message.Save(stream, Aspose.Email.SaveOptions.DefaultMhtml);

                    // load the MHTML stream in an instance of Document
                    var doc = new Aspose.Words.Document(stream);
                    // save the document in PDF format
                    doc.Save(Guid.NewGuid() + ".pdf", SaveFormat.Pdf);
                }
                // get the next message
                message = reader.ReadNextMessage();
            }
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
        - icon: "far fa-file-email-o"
          title: " About MBOX File Format"
          content: |
            MBox is a generic container for collection of electronic mail messages stored along with their attachments. Messages from an entire folder are saved in a single database file and new messages are appended to the end of the file. Numerous applications and API provide support for MBox file format such as Apple Mail and Mozilla Thunderbird.

          link: "https://docs.fileformat.com/email/mbox/"

############################# More Formats ############################
more_formats:
    enable: true
    title: "Other Supported Conversions"
    format: 
        # format loop
        - name: "MSG TO PDF"
          link: "/total/net/convert-msg-to-pdf-with-email-headers/"
          description: "Microsoft Outlook Email"

        # format loop
        - name: "EMLX TO PDF"
          link: "/total/net/convert-emlx-to-pdf-with-email-headers/"
          description: "Apple Mail File Format"

        # format loop
        - name: "OFT TO PDF"
          link: "/total/net/convert-oft-to-pdf-with-email-headers/"
          description: "Outlook File Template"

        # format loop
        - name: "EML TO PDF"
          link: "/total/net/convert-eml-to-pdf-with-email-headers/"
          description: "E-Mail Message"

        # format loop
        - name: "OLM TO PDF"
          link: "/total/net/convert-olm-messages-to-pdf/"
          description: "Outlook Storage for macOS"

        # format loop
        - name: "OST TO PDF"
          link: "/total/net/convert-ost-messages-to-pdf/"
          description: "Outlook Storage File"

############################# Back to top ###############################
back_to_top:
  enable: true
---