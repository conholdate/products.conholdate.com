---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "fr/total/net/merger/xlt/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTM DOTX RTF TXT XLS XLSB XLSM XLSX XLT XLTM XLTX XLAM CSV TSV PPT PPTX PPS PPSX VDX VSDM VSDX VSSM VSSX VSTM VSTX VSX VTX ONE HTML MHT MHTML ODP ODS ODT OTP OTT EPUB ERR PS TEX XPS"
ad_headline: "Fusionner et diviser des fichiers MERGER | C#"
ad_description: "Fusionner, diviser, déplacer, supprimer, échanger, faire pivoter et extraire efficacement des pages de fichiers MERGER dans .NET"

############################# Head ############################
head_title: "Fusionner et diviser des fichiers MERGER en C# .NET et ajouter des filigranes"
head_description: "Bibliothèque de fusion de documents C# .NET pour combiner plusieurs fichiers MERGER en un seul ou diviser un seul fichier MERGER en plusieurs fichiers. Déplacez, supprimez, faites pivoter, permutez et extrayez également des pages de documents."

############################# Header ############################
title: "Fusionner des fichiers MERGER et ajouter un filigrane dans .NET"
description: "API de fusion de documents C # .NET pour combiner plusieurs fichiers MERGER en un seul fichier en joignant un nombre sélectif de pages ou une plage de pages de plusieurs documents sources en un seul. Effectuez des opérations de manipulation de document unique telles que déplacer, supprimer, faire pivoter, permuter et extraire des pages ou diviser un seul document MERGER en plusieurs documents résultants."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Fusionner des fichiers MHTML et ajouter un filigrane en C#"
      content_left: |
          Joignez des fichiers MHTML en C# .NET et ajoutez des filigranes de texte ou d'image au document résultant unique dans les applications .NET (C#, VB.NET, ASP.NET et .NET Core).

          -   Instancier **Merger** avec le document d'entrée
          -   Appelez la méthode **Join** de l'instance de classe **Merger** et passez le deuxième chemin du document source
          -   Appelez la méthode **Save** de l'instance de classe **Merger** pour enregistrer le document fusionné
          -   Instanciez **Watermarker** avec le document fusionné tel que créé ci-dessus
          -   Créez l'objet **TextWatermark** et définissez les propriétés du filigrane
          -   Ajouter un filigrane et enregistrer le document en filigrane
          
      title_right: "Instructions de téléchargement et d'installation des API"
      content_right: |
          Vous avez besoin des espaces de noms `GroupDocs.Merger` et `GroupDocs.Watermark` pour effectuer des opérations de fusion de documents uniques et multiples au sein de PDF, Microsoft Office, HTML, OpenDocument et de nombreux autres formats de document. Explorez d'autres [API .NET pour les documents Office](https://products.conholdate.com/fr/total/net/) tel que proposé par Conholdate.Total.
          
          Obtenez les fichiers d'assemblage respectifs à partir des [téléchargements](https://downloads.conholdate.com/total/net) ou récupérez l'ensemble du package à partir de [NuGet](https://www.nuget.org/packages/Conholdate.Total/) pour ajouter 'Conholdate.Total` directement dans votre espace de travail.
          
      gisthash: "b0bd7c35dc5a889a10fb5b032952710a"
      gistfile: "join-multiple-pdf-documents-into-one-and-add-text-watermark.cs"

    - title_left: "Diviser le fichier MHTML et ajouter des filigranes dans .NET"
      content_left: |
          Divisez un seul document MHTML en plusieurs documents indépendants et insérez des filigranes d'image ou de texte dans chacun des fichiers divisés à l'aide de C# .NET.

          -   Instancier **Watermarker** avec un document fractionné
          -   Instanciez la police du filigrane, créez un objet **TextWatermark** et définissez les propriétés du filigrane
          -   Ajouter un filigrane et enregistrer le document en filigrane
          -   Définir le chemin de sortie où les fichiers seront enregistrés après le fractionnement
          -   Instanciez l'objet **SplitOptions** avec le chemin du fichier divisé et le nombre de pages à diviser
          -   Créez un objet **Merger** avec le document d'entrée et divisez-le à l'aide de **SplitOptions**
        
      title_right: "Opérations de modification de document unique"
      content_right: |
          Effectuez des fonctions de manipulation de documents multifonctionnelles dans une variété de formats de documents tels que Word, feuille de calcul Excel, présentations, RTF, PDF, Visio, HTML, OneNote, XPS et bien d'autres en ajoutant seulement quelques lignes de code C#.

          Les principales opérations sur un seul document incluent le déplacement de pages d'un document vers une nouvelle position, la suppression d'une seule page ou d'une collection ou de pages sélectionnées, l'échange des positions de page, l'extraction de pages spécifiques du document, la modification de l'orientation de la page en mode portrait ou paysage et la rotation les pages du document source à un angle de 90, 180 ou 270 degrés.
          
      gisthash: "d6abb787afd61e25cc82008968907d83"
      gistfile: "add-watermark-to-a-single-document-and-split-the-document-to-multiple-documents.cs"

    - title_left: "Comment fusionner Word, Excel, PPTX en PDF?"
      content_left: |
          Combinez par programmation plusieurs types de documents tels que **Word** (DOC/DOCX), **Excel** (XLS/XLSX) et **PowerPoint** (PPT/PPTX) dans un seul fichier PDF compact en C# .NET Applications, conservant le même texte, formatage et structure de mise en page dans le document résultant.

          -   Instanciez **Merger** avec le document PDF d'entrée
          -   Appelez la méthode **Join** de l'instance de classe **Merger** et transmettez les chemins d'accès aux documents un par un
          -   Appelez la méthode **Save** pour fusionner tous les documents en un seul fichier PDF
        
      title_right: "Représentation d'image des pages de document"
      content_right: |
          Combinez tous les formats de fichiers de documents courants et générez une représentation d'image des pages de document fusionnées aux formats **PNG**, **JPG** ou **BMP**. Vous pouvez facilement prévisualiser le document complet dans son ensemble ou afficher certaines pages spécifiques en fonction des numéros de page ou des plages de pages.

          Rejoignez les formats de fichiers de documents populaires sur différents systèmes d'exploitation tels que Windows, Linux ou macOS tout en utilisant des plates-formes telles que Windows Azure, Mono et Xamarin.
          
      gisthash: "a00735d92095357e41ebffd51ac75abb"
      gistfile: "merge-word-excel-powerpoint-documents-into-one-pdf-file.cs"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTM DOTX RTF TXT XLS XLSB XLSM XLSX XLT XLTM XLTX XLAM CSV TSV PPT PPTX PPS PPSX VDX VSDM VSDX VSSM VSSX VSTM VSTX VSX VTX ONE HTML MHT MHTML ODP ODS ODT OTP OTT EPUB ERR PS TEX XPS
############################# Back to top ###############################
back_to_top:
  enable: true
---