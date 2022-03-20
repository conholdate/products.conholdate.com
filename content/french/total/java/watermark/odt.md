---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "fr/total/java/watermark/odt/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTM DOTX RTF TXT XLS XLSM XLSX XLSB XLT XLTM XLTX PPT PPTX PPTM PPS PPSX PPSM POT POTX POTM EML EMLX OFT MSG ODT BMP GIF JPEG JP2 PNG TIFF TIF WEBP VSD VDX VDW VSDM VSDX VSS VSSM VSSX VST VSTM VSTX VSX VTX JPG Word Excel Image Visio Spreadsheet Worksheet Presentation"
ad_headline: "Fichier ODT de filigrane | Java"
ad_description: "Ajouter, rechercher, modifier et supprimer des filigranes du fichier ODT en Java"

############################# Head ############################
head_title: "Fichier ODT de filigrane en Java - Ajouter, modifier, rechercher, supprimer le filigrane"
head_description: "Ajouter un filigrane à un document ODT en Java. Ajoutez, modifiez, recherchez et supprimez un filigrane de texte ou d'image à partir d'un fichier ODT, Word, Excel, PowerPoint, diagramme ou image dans Java et J2SE dans vos applications de bureau, Web ou mobiles."

############################# Header ############################
title: "Ajouter un filigrane de texte et d'image à ODT en Java"
description: "Ajoutez un filigrane d'image ou de texte à une application de visualisation de documents ODT, basée sur les plates-formes Java et J2SE. Affichez le fichier filigrané au format HTML, Image ou PDF dans les applications sans utiliser de logiciel supplémentaire. Utilisez un ensemble intelligent de méthodes de gestion et de manipulation des filigranes pour ajouter, modifier, rechercher et supprimer tous les types de filigranes courants des documents PDF, Microsoft Word, des feuilles de calcul Excel, des présentations PowerPoint, des diagrammes, des pièces jointes aux e-mails et des formats de fichiers image. L'API de filigrane .NET permet également de visualiser le fichier filigrané au format HTML, Image ou PDF dans n'importe quelle application basée sur Java."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Comment ajouter un filigrane d'image à ODT en Java"
      content_left: |
          [Conholdate.Total pour Java](https://products.conholdate.com/total/java/) permet aux programmeurs Java d'ajouter plus facilement des filigranes d'image à leurs applications de visualisation de documents ODT en ajoutant quelques étapes simples.

          -   Instancier l'objet **FileInputStream** avec le document ODT d'entrée
          -   Instanciez l'objet **Watermarker** à l'aide de l'objet de flux créé ci-dessus
          -   Utiliser le chemin de l'image du filigrane comme paramètre constructeur de la classe **ImageWatermark**
          -   Définir la taille et l'alignement du filigrane
          -   Ajoutez un filigrane au ** filigrane ** et créez un fichier de sortie
          -   Définir les options pour afficher le document au format HTML
          -   Instanciez **Viewer** avec le document de sortie
          
      title_right: "Instructions de téléchargement et d'installation des API"
      content_right: |
          L'exemple de code Java ci-dessous nécessite les espaces de noms `GroupDocs.Watermark` et `GroupDocs.Viewer` pour insérer, modifier, rechercher et supprimer des filigranes d'image des formats de fichiers pris en charge. Vous pouvez ajouter des fonctionnalités de visualisation de documents dans vos applications pour afficher le document en filigrane sous forme de fichier HTML sur différents systèmes d'exploitation tels que Windows, Linux (Ubuntu, OpenSUSE, CentOS et autres) ou macOS tout en utilisant des plates-formes telles que Microsoft Windows et Azure.
          
          Obtenez les fichiers respectifs à partir de [downloads](https://downloads.conholdate.com/total/java) ou récupérez l'ensemble du package à partir de [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse /tree/General/repo/com/conholdate/conholdate-total) pour ajouter 'Conholdate.Total` directement dans votre espace de travail. Découvrez d'autres [API Java pour les documents Office](https://products.conholdate.com/total/java/) proposés par Conholdate.Total.
          
      gisthash: "9fa88c2b755cc9ff8944cd0c4005b889"
      gistfile: "insert-image-watermark-to-pdf.java"

    - title_left: "Comment ajouter un filigrane de texte à ODT en Java"
      content_left: |
          Cet exemple de code Java montre comment ajouter un filigrane de texte à un document ODT à l'aide de quelques lignes simples de code Java. Le filigrane sera ajouté à toutes les pages du document source.

          -   Instanciez **Watermarker** avec le document ODT d'entrée
          -   Initialiser **TextWatermarker** avec le texte du filigrane, la taille de la police et le style
          -   Définir les propriétés du filigrane (alignement, couleur, etc.)
          -   Ajoutez un filigrane au **filigrane** et générez le document de sortie
        
      title_right: "Ajouter, rechercher, modifier et supprimer des filigranes personnalisés"
      content_right: |
          Conholdate.Total pour Java offre un ensemble unique de fonctionnalités pour ajouter des filigranes personnalisés aux images et aux formats de document pris en charge. Effectuez une opération de recherche de filigrane pour trouver tous les types possibles de filigranes déjà ajoutés au document source par un outil ou un logiciel tiers. Vous pouvez facilement modifier le texte ou l'image dans les filigranes trouvés et supprimer tout ou partie du filigrane de votre choix du document.

          Les types de filigrane pris en charge incluent XObject, Artifact, Annotation, Shape, texte, image, en-tête et pied de page.
          
      gisthash: "ecd2c1b6a7134033ed8e79ef1ec3a327"
      gistfile: "insert-text-watermark-to-pdf.java"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTM DOTX RTF TXT XLS XLSM XLSX XLSB XLT XLTM XLTX PPT PPTX PPTM PPS PPSX PPSM POT POTX POTM EML EMLX OFT MSG ODT BMP GIF JPEG JP2 PNG TIFF TIF WEBP VSD VDX VDW VSDM VSDX VSS VSSM VSSX VST VSTM VSTX VSX VTX JPG Word Excel Image Visio Spreadsheet Worksheet Presentation
############################# Back to top ###############################
back_to_top:
  enable: true
---