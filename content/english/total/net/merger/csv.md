---
############################# Static ############################
layout: "autogen"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "total/net/merger/csv/"

############################# Head ############################
head_title: "Merge & Split CSV Files and Add Watermarks in C# .NET"
head_description: ".NET documents merger library to combine multiple CSV files into a single file by joining selective number of pages or a range of pages from multiple source documents into one."

############################# Header ############################
title: "Merge CSV Files & Add Watermark in .NET"
description: ".NET documents merger API to combine multiple CSV files into a single file by joining selective number of pages or a range of pages from multiple source documents into one. Perform single document operations such as move, remove, rotate, swap and extract pages or split a single CSV document into several resultant documents."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Merge CSV Files & Add Watermark in C#"
      content_left: |
          Join CSV files in C# .NET and add text or image watermarks to the single resultant document in .NET (C#, VB.NET, ASP.NET & .NET Core) applications.

          -   Instantiate **Merger** with input CSV document
          -   Call **Join** method of **Merger** class instance and pass second source document path
          -   Call **Save** method of **Merger** class instance to save merged document
          -   Instantiate **Watermarker** with merged CSV document as created above
          -   Create the **TextWatermark** object & set watermark properties
          -   Add watermark and save watermarked CSV
          
      title_right: "Source Document Information Extraction"
      content_right: |
          You require `GroupDocs.Merger` & `GroupDocs.Watermark` namespaces to perform single and multiple documents merging operations within PDF, Microsoft Office, HTML, OpenDocument and many other document formats. Explore other [.NET APIs for Office documents](https://products.conholdate.com/total/net/) as offered by Conholdate.Total.
          
          Get the respective assembly files from the [downloads](https://downloads.conholdate.com/total/net) or fetch the whole package from [Nuget](https://www.nuget.org/packages/Conholdate.Total/) to add 'Conholdate.Total` directly in your workspace.
          
      code: |
          ```cs {linenos=false}
          // Merge CSV files using GroupDocs.Merger API
          // Instantiate Merger with input CSV document
          using (Merger merger = new Merger("input1.csv"))
          {
              // Call Join method of Merger class instance and pass second source document path
              merger.Join("input2.csv");

              // Call Save method of Merger class instance to save merged document
              merger.Save("merged.csv");
          }

          // Add text watermark to CSV document
          // Instantiate Watermarker with merged CSV document created above
          // GroupDocs.Merger created Output folder and save merged.csv there
          // We will load merged.csv document from Output folder
          using (Watermarker watermarker = new Watermarker("Output/merged.csv"))
          {
              // Initialize the Font to be used for watermark
              Font font = new Font("Arial", 19, FontStyle.Bold | FontStyle.Italic);

              // Create the TextWatermark object
              TextWatermark watermark = new TextWatermark("my watermark", font);

              // Set watermark properties
              watermark.ForegroundColor = Color.Red;
              watermark.BackgroundColor = Color.Blue;
              watermark.TextAlignment = TextAlignment.Right;
              watermark.Opacity = 0.5;

              // Add watermark and save watermarked CSV
              watermarker.Add(watermark);
              watermarker.Save("output.csv");
          }
          ```
    - title_left: "Split CSV File & Add Watermarks in .NET"
      content_left: |
          Split a single CSV document to multiple independent documents and insert image or text watermarks to each of the splitted files using C# .NET.

          -   Set output path where files will be saved after splitting
          -   Instantiate **SplitOptions** object with path of splitted file and number of pages to be splitted
          -   Create **Merger** object with input CSV and split using **SplitOptions**
          -   Instantiate **Watermarker** with splitted CSV
          -   Create the **TextWatermark** object & set watermark properties
          -   Add watermark and save watermarked CSV
        
      title_right: "Image Representation of Document Pages"
      content_right: |
          Combine all popular document file formats and generate image representation of the merged document pages in 'PNG', 'JPG' or 'BMP' formats. You can easily preview the complete document as a whole or display some specific pages based on page numbers or page ranges.

          Join popular document file formats on different operating systems such as Windows, Linux or macOS while using platforms such as Windows Azure, Mono and Xamarin.
          
      code: |
          ```cs {linenos=false}
          // Set output path where files will be saved after splitting
          string outputFolder = @"c:\output\";

          // Instantiate SplitOptions object with path of splitted file and number of pages to be splitted
          SplitOptions splitOptions = new SplitOptions(outputFolder + "document_{0}.{1}", new int[] { 1, 2, 4 });

          // Create Merger object with input CSV
          using (Merger merger = new Merger("input.csv"))
          {
              // Split input CSV using SplitOptions
              merger.Split(splitOptions);
          }

          // Get list of splitted files from output path
          string[] files = Directory.GetFiles(outputFolder);
          // Create counter that will be used for naming output files
          int i = 0;

          // Loop through all splitted files in the output folder
          foreach(string file in files)
          {
              i++; // Increment counter

              // Instantiate Watermarker with splitted CSV
              using (Watermarker watermarker = new Watermarker(file))
              {
                  // Initialize the Font to be used for watermark
                  Font font = new Font("Arial", 19, FontStyle.Bold | FontStyle.Italic);

                  // Create the TextWatermark object
                  TextWatermark watermark = new TextWatermark("my watermark", font);

                  // Set watermark properties
                  watermark.ForegroundColor = Color.Red;
                  watermark.BackgroundColor = Color.Blue;
                  watermark.TextAlignment = TextAlignment.Right;
                  watermark.Opacity = 0.5;

                  // Add watermark and save watermarked CSV
                  watermarker.Add(watermark);
                  watermarker.Save(string.Format("{0}output{1}.csv",outputFolder,i));
              }
          }
          ```
############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: true
############################# Back to top ###############################
back_to_top:
  enable: true
---