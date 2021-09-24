---
############################# Static ############################
layout: "auto-gen"
date: 2021-09-22T14:22:14+03:00
draft: false
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Convert OST Messages to PDF via C# & .NET Core"
head_description: ".NET APIs for OST to PDF Conversion with just a few lines of C# code"

############################# Header ############################
title: "Convert OST Messages to PDF via C#"
description: "Load OST and convert each message to PDF via .NET Core libraries"

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
    title_left: "Convert OST Messages to PDF via C#"
    content_left: |
        -   Load the OST file in an instance of `PersonalStorage` via its `FromFile` method
        -   Access the OST folder with ```PersonalStorage.RootFolder.GetSubFolder``` method
        -   Enumerate folder messages & store each message with `SaveMessageToStream`
        -   Load message from steam using `MailMessage.Load` method
        -   Call ```MailMessage.Save``` method with customized object of `MhtSaveOptions`
        -   Load MHTML from previous step in an instance of ```Document```
        -   Call ```Document.Save``` method with ```SaveFormat.Pdf``` as second parameter
        
    title_right: "Get Started with .NET Core APIs"
    content_right: |
        The namespaces required for the following piece of code are `Aspose.Email` & `Aspose.Words`. You can get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

        OST to PDF can be done on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
        
    code: |
        ```cs {linenos=false}
        // load the OST file
        using (var personalStorage = Aspose.Email.Storage.Pst.PersonalStorage.FromFile("sample.ost"))
        {
            // access the Inbox folder of OST
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
          title: " About OST File Format"
          content: |
            OST or Offline Storage Files contains mailbox data using Exchange Server via Microsoft Outlook. After automatically created, the data in OST gets synced with the email server for an offline copy. OST files can contain emails, contacts, calendar information, notes, tasks and other similar data. It allows the users to create items in OST file even during disconnection from the server. 

          link: "https://docs.fileformat.com/email/ost/"

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
        - name: "EML TO PDF"
          link: "/total/net/convert-eml-to-pdf-with-email-headers/"
          description: "E-Mail Message"

        # format loop
        - name: "PST TO PDF"
          link: "/total/net/convert-pst-messages-to-pdf/"
          description: "Outlook Personal Storage File"

        # format loop
        - name: "MBOX TO PDF"
          link: "/total/net/convert-mbox-messages-to-pdf/"
          description: "Email Mailbox File"

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