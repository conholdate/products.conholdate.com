---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Convert OLM Messages to PDF via C# .NET Core"
head_description: "OLM to PDF Conversion with just a few lines of C# code"

############################# Header ############################
title: "Convert OLM Messages to PDF via C#"
description: "OLM to PDF conversion using .NET Core libraries"

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
    title_left: "Convert OLM Messages to PDF with C#"
    content_left: |
        -   Load the OLM file in an instance of [OlmStorage](https://apireference.aspose.com/email/net/aspose.email.storage.olm/olmstorage) via its constructor
        -   Get each message as an instance of [MapiMessage ](https://apireference.aspose.com/email/net/aspose.email.mapi/mapimessage) using [OlmStorage.EnumerateMessages](https://apireference.aspose.com/email/net/aspose.email.storage.olm/olmstorage/methods/enumeratemessages)
        -   Call [MapiMessage.Save](https://apireference.aspose.com/email/net/aspose.email.mapi/mapimessage/methods/save/index) method to export message as MHTML
        -   Load MHTML from previous step in an instance of [Document](https://apireference.aspose.com/words/net/aspose.words/document) class
        -   Call [Document.Save](https://apireference.aspose.com/words/net/aspose.words/document/methods/save/index) method with ```SaveFormat.Pdf``` as second parameter
        
    title_right: "Get Started with .NET Core APIs"
    content_right: |
        The namespaces required for the following piece of code are `Aspose.Email` & `Aspose.Words`. You can get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        OLM to PDF conversion can be done on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // load the OLM file
        using (var storage = new Aspose.Email.Storage.Olm.OlmStorage("sample.olm"))
        {
            // loop over all folders in the storage
            foreach (var folder in storage.FolderHierarchy)
            {
                // check if folder has any messages
                if (folder.HasMessages)
                {
                    // extract messages from folder
                    foreach (MapiMessage message in storage.EnumerateMessages(folder))
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
                    }
                }
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
          title: " About OLM File Format"
          content: |
            It is an Outlook file for macOS. An OLM file can store email messages, journals, calendar data, and other types of application data, whereas a single OLM file can contain multiple mailboxes. OLM files can be opened/loaded in Microsoft Outlook 365 and Outlook for Mac.

          link: "https://docs.fileformat.com/email/olm/"

############################# More Formats ############################
more_formats:
    enable: true
    title: "Other Supported Conversions"
    format: 
        # format loop
        - name: "OST TO PDF"
          link: "/total/net/convert-ost-messages-to-pdf/"
          description: "Outlook Offline Store"

        # format loop
        - name: "PST TO PDF"
          link: "/total/net/convert-pst-messages-to-pdf/"
          description: "Outlook Personal Storage File"

        # format loop
        - name: "OFT TO PDF"
          link: "/total/net/convert-oft-to-pdf-with-email-headers/"
          description: "Outlook File Template"

        # format loop
        - name: "EMLX TO PDF"
          link: "/total/net/convert-emlx-to-pdf-with-email-headers/"
          description: "Apple Mail Message"

        # format loop
        - name: "EML TO PDF"
          link: "/total/net/convert-eml-to-pdf-with-email-headers/"
          description: "E-Mail Message"

        # format loop
        - name: "MBOX TO PDF"
          link: "/total/net/convert-mbox-messages-to-pdf/"
          description: "Apple Mail Message"

############################# Back to top ###############################
back_to_top:
  enable: true
---