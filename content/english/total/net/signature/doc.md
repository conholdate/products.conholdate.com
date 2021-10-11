---
############################# Static ############################
layout: "autogen"
date: 2021-06-29T14:22:14+03:00
draft: false
path: "total/net/signature/doc/"
product_tag: total
platform_tag: net

############################# Head ############################
head_title: "Add Digital Signatures to DOC File Viewer in C#, VB.NET"
head_description: "Digitally add signatures to Word processing documents (DOC) and 100+ other file formats in C# .NET. View the signed file in HTML using Conholdate.Total for .NET APIs."

############################# Header ############################
title: "Digitally Add Signatures to DOC Viewer"
description: "Digitally sign and verify signatures in Word processing (DOC) file format within your C#, ASP.NET, VB.NET & Xamarin applications. Implement Barcode, Text, Image, Metadata, QR Code, Form Field and stamp signatures in multiple forms by setting up customized text, font style, colors and adjusting advanced e-signatures properties in the document."
bg_image: "https://cms.admin.containerize.com/templates/aspose/App_Themes/V3/images/bg/header1.png"
bg_overlay: false
button:
    enable: true
    icon: "fas fa-arrow-down"
    label: "Download Free Trial"
    link: "https://downloads.groupdocs.com/total"

############################# SubMenu ############################
submenu:
    enable: false

    left:
        img_alt: "GroupDocs.Total for .NET"
        image: "https://cms.admin.containerize.com/templates/groupdocs/images/product-logos/90x90-noborder/groupdocs-total-net.png"
        product: "GroupDocs.Total"
        platform: ".NET"

    middle:
        button:

            # button loop
            - link: "https://apireference.groupdocs.com"
              text: "API Reference"

            # button loop
            - link: "https://github.com/groupdocs-total"
              text: "Code Examples"

            # button loop
            - link: "https://products.groupdocs.app/total"
              text: "Live Demos"

            # button loop
            - link: "https://purchase.groupdocs.com/buy"
              text: "Pricing"

    right:
        link_download: "https://downloads.groupdocs.com"
        link_learn: "https://docs.groupdocs.com/total/net/"
        link_buy: "https://purchase.groupdocs.com"

############################# About ############################
about:
    enable: false
    title: "About GroupDocs.Total for .NET"
    content: |
        GroupDocs.Total for .NET is a suite of document manipulation APIs to perform powerful documents manipulation & automation features within your desktop solutions and web apps without requiring any other commercial application. It enables developers to add the functionalities (view, edit, annotate, convert, compare, e-sign, assemble, search, parse, merge, redact and classify) within PDF, Microsoft Office Word, Excel, PowerPoint, OneNote, Visio, Outlook, HTML, images, graphics, diagrams and 90+ other popular document formats.

        GroupDocs.Total APIs are well supported on all major operating systems and platforms including .NET Framework, .NET Standard, .NET Core, Mono and Xamarin.

############################# Steps ############################
content:
    enable: true
    block:
    - title_left: "C# Code to Digitally Sign a DOC File"
      content_left: |
        [Conholdate.Total for .NET](https://products.conholdate.com/total/net/) supports signing Word processing (DOC) documents with digital signatures using a few lines of C# .NET code.

        *   Instantiate **Signature** with input document
        *   Instantiate **DigitalSignOptions** object with certificate details
        *   Call **Sign** method of **Signature** class and pass **DigitalSignOptions** to it
        *   Set options to view signed document as HTML
        
      title_right: "System Requirements"
      content_right: |
          The following piece of code requires `GroupDocs.Signature` & `GroupDocs.Viewer` namespaces. You can get the respective files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [NuGet](https://www.nuget.org/packages/Conholdate.Total/).

          Sign your digtial documents with Barcode, Text, Image, Metadata, QR Code, Form Field and stamp signatures on operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
          
      code: |
          ```cs
          // Add digital e-signatures to Word Processing (DOC) file using GroupDocs.Signature API
          // Instantiate Signature with input DOC document
          using (Signature signature = new Signature("input.doc"))
            {
              // initialize digital option with certificate file path
              DigitalSignOptions options = new DigitalSignOptions("certificate.pfx")
              {
                // certifiate password
                Password = "1234567890",

                // digital certificate details
                Reason = "Sign",
                Contact = "JohnSmith",
                Location = "Office1",

                // image appearance as digital certificate on document pages
                ImageFilePath = "sample.jpg",

                // Set signature size and alignmnet details
                AllPages = true,
                Width = 80,
                Height = 60,
                VerticalAlignment = VerticalAlignment.Bottom,
                HorizontalAlignment = HorizontalAlignment.Right,
                Margin = new Padding() {  Bottom = 10, Right = 10},
              };

            // Sign document to file
            signature.Sign("output.doc", options);

            // Set options to view signed document as HTML
            HtmlViewOptions viewOptions = HtmlViewOptions.forEmbeddedResources("output{0}.html");
            try (Viewer viewer = new Viewer("output.doc")) {
            viewer.view(viewOptions);
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
        - icon: "far fa-file-word-o"
          title: " About Word DOC File Format"
          content: |
            Files with .doc extension represent documents generated by Microsoft Word or other word processing documents in binary file format. The extension was initially used for plain text documentation on several different operating systems. It can contain several different types of data such as images, formatted as well as plain text, graphs, charts, embedded objects, links, pages, page formatting, print settings and a lot others. The format was popular for all sorts of documentation due to the variety of options it offers to users for writing manuals, proposals, specifications, resumes, articles or any similar documents. The updated version of DOC is DOCX which is based on Office OpenXML whose specifications are openly available.

          link: "https://docs.fileformat.com/word-processing/doc/"
    
############################# More Formats ############################
more_formats:
    enable: true
    auto: true

############################# Back to top ###############################
back_to_top:
  enable: true
---