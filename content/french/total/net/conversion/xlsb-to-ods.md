---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "fr/total/net/conversion/xlsb-to-ods/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD XML JSON DICOM FODP JPG"
ad_headline: "Convertir XLSB en ODS | .NET"
ad_description: "La solution de conversion de documents XLSB vers ODS la plus précise pour vos applications .NET."

############################# Head ############################
head_title: "Convertir Excel XLSB en ODS en C# ASP.NET | Conversion de documents .NET"
head_description: "API de conversion des formats de document de feuille de calcul .NET Excel. Convertissez XLSB en ODS et plus de 100 autres images et formats de fichiers de documents dans les applications .NET (C#, VB.NET, ASP.NET et .NET Core)."

############################# Header ############################
title: "Convertir un fichier Excel (XLSB) en ODS en C# .NET"
description: "Utilisez l'API native de conversion de documents Excel pour convertir XLSB en ODS dans les applications C# VB.NET et ASP.NET. Travaillez avec des fonctions de conversion de documents flexibles pour personnaliser l'apparence du document résultant. Convertissez avec précision tous les formats de feuilles de calcul Excel populaires vers et depuis des documents Word, des présentations PowerPoint, des formats de fichiers PDF, Photoshop, eBook, Web et image. Convertissez l'intégralité du document ou choisissez des pages spécifiques du fichier de document source en fonction des numéros de page ou des plages de pages sélectionnés et convertissez facilement en un format de document pris en charge."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Comment convertir XLSB en ODS en C# .NET"
      content_left: |
          Suivez ces étapes simples pour la conversion de XLSB en ODS dans .NET. Affichez le document ODS converti tel quel ou rendez-le et affichez-le au format HTML sans utiliser de logiciel externe.

          -   Créer un objet **Converter** pour convertir le document XLSB
          -   Définir les options de conversion pour le format ODS
          -   Appelez la méthode **Convert** de l'instance de classe **Converter** pour la conversion en ODS
          -   Définir les options du visualiseur HTML
          -   Créez un objet **Viewer** pour afficher le ODS converti au format HTML
          
      title_right: "Téléchargements et instructions d'installation"
      content_right: |
          Vous avez besoin des espaces de noms `GroupDocs.Conversion` et `GroupDocs.Viewer` pour convertir les formats de fichiers Word en une large gamme d'images et de types de documents tels que PDF, Microsoft Office (Word, Excel, PowerPoint, Project, Outlook), OpenDocument, HTML et Schémas CAO. Découvrez d'autres [API .NET pour les documents Office](https://products.conholdate.com/fr/total/net/) proposées par Conholdate.Total.
          
          Obtenez les fichiers d'assemblage respectifs à partir des [téléchargements](https://downloads.conholdate.com/total/net) ou récupérez l'ensemble du package à partir de [Nuget](https://www.nuget.org/packages/Conholdate.Total/) pour ajouter `Conholdate.Total for .NET` directement dans votre espace de travail.
          
      gisthash: "4f311c07ae9ee691b8afb7960aa6c806"
      gistfile: "excel-to-pdf-conversion.cs"

    - title_left: "Convertir Excel en PDF/Word/HTML/PPTX en C#"
      content_left: |
          Convertissez vos feuilles de calcul Excel en d'autres formats de documents populaires tels que PDF, HTML, présentations PowerPoint et formats de fichiers de traitement de texte à l'aide du code C# .NET. Chargez le classeur Excel source et enregistrez-le en tant que document converti dans un autre format de document.

          -   Créez un objet **Converter** et transmettez-lui le fichier Excel source
          -   Instanciez la classe **ConvertOptions** appropriée, par ex. (**PdfConvertOptions** pour la conversion au format PDF, **WordProcessingConvertOptions** pour la conversion au format Word, **MarkupConvertOptions** pour la conversion au format HTML, **PresentationConvertOptions** pour la conversion au format PowerPoint)
          -   Appelez la méthode **Convert** de l'instance de classe **Converter** pour la conversion au format de document PDF/HTML/PPTX ou Word
          
      title_right: "Conversion d'archives protégées par mot de passe"
      content_right: |
          Dans certains cas, la taille du document converti est plus grande et la conversion prend du temps. Par défaut, le document converti en cache est enregistré sur le lecteur local, mais [Conholdate.Total for .NET](https://products.conholdate.com/total/net/) offre une fonctionnalité de mise en œuvre de cache personnalisée à l'aide de l'interface iCache pour gérer efficacement résultats de la conversion du cache à votre manière. Il accélère le processus de conversion répétitif global.
          
          La [bibliothèque de conversion .NET Excel](https://products.groupdocs.com/conversion/net/) prend également en charge la conversion vers et depuis des archives protégées par mot de passe et la compression des résultats de conversion en ZIP, RAR, 7Z, TAR, GZ et BZ2 formats d'archives.
          
      gisthash: "4f311c07ae9ee691b8afb7960aa6c806"
      gistfile: "excel-to-pdf-word-html-powerpoint-conversion.cs"

    - title_left: "Ajouter un texte ou un filigrane d'image à ODS en C #"
      content_left: |
          Convertissez avec précision des documents (XLSB en ODS) exactement comme le fichier d'origine et appliquez des filigranes de texte ou d'image aux pages de document converties à l'aide de C# .NET.

          -   Créer un objet **Converter** pour convertir le document XLSB
          -   Créer une nouvelle instance de la classe **WatermarkOptions**
          -   Spécifiez les propriétés du filigrane (couleur, largeur, texte, image, etc.)
          -   Instanciez la bonne classe **ConvertOptions**
          -   Définir la propriété **Watermark** de l'instance **ConvertOptions**
          -   Appelez la méthode **Convert** de l'instance de classe **Converter** pour la conversion en ODS
        
      title_right: "Extraction d'informations sur les documents sources"
      content_right: |
          La fonction d'extraction d'informations sur les documents permet non seulement d'obtenir les informations de base sur le fichier du document source, mais elle prend également en charge l'extraction de certaines informations précieuses spécifiques au format de fichier, telles que les dates de début et de fin du projet d'un fichier Microsoft Project, toute restriction d'impression sur un document PDF, liste des dossiers contenus dans un fichier de données Outlook, etc.

          Convertissez les formats de fichiers de documents populaires sur différents systèmes d'exploitation tels que Windows, Linux ou macOS tout en utilisant des plates-formes telles que Windows Azure, Mono et Xamarin.
          
      gisthash: "a15affe15284876ce010a315a09da1f0"
      gistfile: "convert-word-to-pdf-and-add-text-watermark-to-converted-pdf.cs"

    - title_left: "Convertir un fichier JSON en Excel en C# .NET"
      content_left: |
          La conversion d'un fichier JSON en Excel dans .NET est désormais plus facile avec Conholdate.Total pour les API .NET. Utilisez le fichier JSON comme source de données et convertissez-le précisément au format de fichier de feuille de calcul Excel en ajoutant quelques lignes de code C # sans utiliser de logiciel externe.

          -   Créer un objet **Converter** pour convertir le fichier JSON
          -   Instancier la classe **SpreadsheetConvertOptions**
          -   Appelez la méthode **Convert** de l'instance de classe **Converter** pour la conversion en XLSX
          
      title_right: "Charger et convertir des documents situés à distance"
      content_right: |
          À l'aide de Conholdate.Total pour .NET, les développeurs peuvent charger et convertir des documents à partir de divers emplacements distants et de ressources de stockage de documents dans le cloud telles qu'Amazon S3, Microsoft Azure Blob, FTP, un disque local, un flux ou une simple URL. Il vous suffit de spécifier la méthode pour obtenir le flux de documents situé à distance, puis de le transmettre à la classe Converter en tant que constructeur.
          
          Les API Conholdate.Total pour .NET sont natives pour Windows Forms, ASP.NET, WPF, WCF ou tout type d'application basée sur .NET Framework 2.0 ou version ultérieure.
          
      gisthash: "7864dd1c0c16ca647722d18664d5c84a"
      gistfile: "json-to-excel-spreadsheet-conversion.cs"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD XML JSON DICOM FODP JPG
############################# Back to top ###############################
back_to_top:
  enable: true
---