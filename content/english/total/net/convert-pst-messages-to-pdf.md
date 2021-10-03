---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Convert PST Messages to PDF with Message Headers"
head_description: ".NET APIs for PST to PDF Conversion with just a few lines of C# code"

############################# Header ############################
title: "Convert PST Messages to PDF via .NET Core"
description: "Load PST and convert each message to PDF with C#"

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
    title_left: "C# Convert PST Messages to PDF"
    content_left: |
        -   Load the PST file in an instance of `PersonalStorage` via its `FromFile` method
        -   Access the PST folder with ```PersonalStorage.RootFolder.GetSubFolder``` method
        -   Enumerate folder messages & store each message with `SaveMessageToStream`
        -   Load message from steam using `MailMessage.Load` method
        -   Call ```MailMessage.Save``` method with customized object of `MhtSaveOptions`
        -   Load MHTML from previous step in an instance of ```Document```
        -   Call ```Document.Save``` method with ```SaveFormat.Pdf``` as second parameter
        
    title_right: "Get Started with .NET Core APIs"
    content_right: |
        The namespaces required for the following piece of code are `Aspose.Email` & `Aspose.Words`. You can get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        PST to PDF can be done on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // load the PST file
        using (var personalStorage = Aspose.Email.Storage.Pst.PersonalStorage.FromFile("sample.pst"))
        {
            // access the Inbox folder of PST
            var inbox = personalStorage.RootFolder.GetSubFolder("myInbox");
            // loop over all messages of Inbox folder
            foreach (var messageInfo in inbox.EnumerateMessages())
            {
                using (MemoryStream streamMessage = new MemoryStream())
                {
                    // store the message in stream
                    personalStorage.SaveMessageToStream(messageInfo.EntryIdString, streamMessage);
                    // load message with an instance of MailMessage
                    var mailMsg = Aspose.Email.MailMessage.Load(streamMessage);
                    // create an instance of MhtSaveOptions for MTHML customization
                    var mhtSaveOptions = Aspose.Email.MhtSaveOptions.DefaultMhtml;
                    // set MhtSaveOptions to write headers with complete email addresses
                    mhtSaveOptions.MhtFormatOptions = Aspose.Email.MhtFormatOptions.WriteHeader | Aspose.Email.MhtFormatOptions.WriteCompleteEmailAddress;
                    using (var outstream = new System.IO.MemoryStream())
                    {
                        // temporarily save the MTHML in MemoryStream
                        mailMsg.Save(outstream, mhtSaveOptions);

                        // load the MHTML stream in an instance of Document
                        var doc = new Aspose.Words.Document(outstream);
                        doc.Save(messageInfo.EntryIdString + ".pdf", SaveFormat.Pdf);
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
          title: " About PST File Format"
          content: |
            Microsoft programs use to store items like calendar events, contacts, and email messages in PST files for archiving purposes. User information is stored in folders of different types which can be password protected for the loading applications to apply password before viewing.

          link: "https://docs.fileformat.com/email/pst/"

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
        - name: "EML TO PDF"
          link: "/total/net/convert-eml-to-pdf-with-email-headers/"
          description: "E-Mail Message"

        # format loop
        - name: "OST TO PDF"
          link: "/total/net/convert-ost-messages-to-pdf/"
          description: "Outlook Storage File"

        # format loop
        - name: "MBOX TO PDF"
          link: "/total/net/convert-mbox-messages-to-pdf/"
          description: "Apple Mail Message"

        # format loop
        - name: "OLM TO PDF"
          link: "/total/net/convert-olm-messages-to-pdf/"
          description: "Outlook Storage for macOS"

############################# Back to top ###############################
back_to_top:
  enable: true
---