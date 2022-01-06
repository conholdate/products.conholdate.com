---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/net/conversion/bz2-to-pdf/"
other_in_formats: "ZIP TAR GZIP LZ RAR BZ2 7Z"
ad_headline: "Convert BZ2 to PDF | C# .NET"
ad_description: "Convert archive BZ2 file to PDF in C# .NET Core – compress & decompress zip files."

############################# Head ############################
head_title: "Convert BZ2 Files to PDF in C# VB.NET ASP.NET .NET Core"
head_description: "Dynamically convert archive BZ2 files to PDF document in C#, AP.NET, VB.NET & .NET Core applications. Encrypt archives, compress and decompress files and folders."

############################# Header ############################
title: "Convert BZ2 to PDF File in C# .NET"
description: "Programmatically convert archived BZ2 files to PDF document in C#, AP.NET, VB.NET & .NET Core applications. The compressed archive files will be converted safely and securely to PDF."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "BZ2 to PDF Conversion in C# .NET Core"
      content_left: |
          
          -   Create Archive instance with input BZ2 file
          -   Extract contents of BZ2 file using **ExtractToDictionary** method of Archive
          -   Get the list of extracted files from unzipped directory using **Directory.GetFiles** method - Loop through each unzipped / extracted file
          -   Convert extracted file to PDF format using Convert method of **Converter** class in [GroupDocs.Conversion API](https://apireference.groupdocs.com/conversion/net)
          -   Keep the list of all converted PDF files - Create instance of **Merger** class in [GroupDocs.Merger API](https://apireference.groupdocs.com/merger/net) with first converted PDF file in the list
          -   Loop through the list of converted PDF files starting from second converted file and merge all converted PDF files using **Join** method of **Merge** class
          -   Finally, save the merged PDF document using **Save** method of **Merger** class
          
      title_right: "Downloads & Installation Instructions"
      content_right: |
          You require `Aspose.ZIP`, `GroupDocs.Conversion` & `GroupDocs.Merger` namespaces to to extract the files/contents within a BZ2 file and convert to a single PDF file format as output. The below code example supports archive files conversion between ZIP, TAR, RAR, GZIP, LZ, CPIO, BZ2, XZ and 7z formats. Explore other [.NET documents manipulation APIs](https://products.conholdate.com/total/net/) as offered by Conholdate.Total for .NET.
          
          Get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [Nuget](https://www.nuget.org/packages/Conholdate.Total/) to add 'Conholdate.Total` directly in your workspace.
          
      gisthash: "6e53880b175382e0c835ff3bf410130d"
      gistfile: "convert-zip-to-pdf.cs"
          
    - title_left: "Encryption of Archives in C# .NET"
      content_left: |
          Aspose.ZIP supports password-protecting archives using traditional (ZipCrypto) and various other mixed encryption techniques with the capabilities to encrypt a complete archive or selective files with password. You can also apply all popular encryptions types to archives such as AES-128, AES-192, AES-256 and 7z (7-zip).

          The below code example demonstrates how to encrypt multiple files using a mixed encryption technique.
        
      title_right: "Compress & Decompress Files or Folders"
      content_right: |
          Aspose.ZIP for .NET supports a multitude of archives management features including encryption, compression and decompression of files and folders. Encrypt archives with specified passwords, compress or decompress files and folders according to its original structure. You can also add or delete files from existing archives. 

          Work with archiving files and folder on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
          
      gisthash: "3cfc76f062dcf3f332bd730104c779ba"
      gistfile: "encrypt-zip-files-using-encryption-techniques.cs"
############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: ZIP TAR GZIP LZ RAR BZ2 7Z
############################# Back to top ###############################
back_to_top:
  enable: true
---