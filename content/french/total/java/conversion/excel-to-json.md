---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "fr/total/java/conversion/excel-to-json/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD XML JSON DICOM FODP JPG"
ad_headline: "Conversion Java EXCEL en JSON"
ad_description: "API de conversion de documents EXCEL vers JSON pour Java | Plus de 100 formats de fichiers pris en charge"

############################# Head ############################
head_title: "Convertir EXCEL en JSON via les API de conversion de feuille de calcul Java"
head_description: "Bibliothèque de conversion de documents Java 100 % native pour convertir la feuille de calcul Excel en JSON et plus de 100 autres formats de fichiers d'images et de documents dans les applications Java."

############################# Header ############################
title: "Convertir EXCEL en JSON en Java"
description: "Utilisation de la bibliothèque de conversion de documents Excel native - convertissez EXCEL en JSON et plus de 100 autres formats de fichiers dans tout type d'applications basées sur Java avec la plus grande précision. Travaillez avec un ensemble avancé de fonctionnalités de conversion de documents pour rester aux commandes et personnaliser l'apparence des documents convertis selon vos préférences. Convertissez par programme tous les formats de feuilles de calcul Excel populaires vers et depuis des documents Word, des présentations PowerPoint, des formats de fichier PDF, Photoshop, eBook, Web et image sans utiliser d'API ou de logiciel externe. En travaillant avec l'API de conversion Java Excel, convertissez facilement l'intégralité du document en une seule fois ou choisissez des pages spécifiques du document source en fonction des plages de pages sélectives ou des différents numéros de page pour convertir facilement vers un format de document pris en charge."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Comment convertir EXCEL en JSON en Java"
      content_left: |
          Effectuez la conversion de fichiers EXCEL en JSON en Java en trois étapes simples. Affichez le document converti tel qu'il est ou affichez-le au format HTML sans aucune dépendance à un logiciel externe.

          -   Créez une nouvelle instance de la classe **Converter** et chargez le fichier EXCEL
          -   Définissez **ConvertOptions** pour le type de document JSON
          -   Appelez la méthode **Convert** de l'instance de classe **Converter** pour la conversion en JSON
          -   Définir les options du visualiseur HTML
          -   Créez un objet **Viewer** pour afficher le JSON converti au format HTML
          
      title_right: "Téléchargements et instructions d'installation"
      content_right: |
          Vous avez besoin des espaces de noms `GroupDocs.Conversion` et `GroupDocs.Viewer` pour convertir entre plus de 100 documents et formats de fichiers image tels que PDF, Microsoft Word, Excel, PowerPoint, Project, Visio, Outlook, HTML et diagrammes. Découvrez d'autres [API Java pour les documents Office](https://products.conholdate.com/total/java/) proposés par Conholdate.Total.
          
          Obtenez les fichiers d'assemblage respectifs à partir des [téléchargements](https://downloads.conholdate.com/total/java) ou récupérez l'ensemble du package à partir de [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo) pour ajouter `Conholdate.Total` directement dans votre espace de travail.
          
      gisthash: "675fd7fb45acf595fd9f872593eb2899"
      gistfile: "excel-worksheet-to-pdf-conversion.java"
          
    - title_left: "Convertir EXCEL protégé par mot de passe en JSON"
      content_left: |
          Chargez et convertissez avec précision des documents protégés par un mot de passe dans vos applications basées sur Java. L'API de conversion de format de fichier prend également en charge le rendu de documents distants à partir de différentes sources, notamment S3, Blob, FTP, Stream, URL ou un disque local.

          -   Créer une nouvelle instance de la classe **Converter** et transmettre le chemin du document source
          -   Instanciez la classe **ConvertOptions** appropriée, par ex. (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions, etc.)
          -   Appelez la méthode **Convert** de l'instance de classe **Converter** et transmettez le nom de fichier du document converti
        
      title_right: "Extraction d'informations sur les documents sources"
      content_right: |
          La fonction d'extraction d'informations sur les documents permet non seulement d'obtenir les informations de base sur le fichier du document source, mais elle prend également en charge l'extraction de certaines informations précieuses spécifiques au format de fichier, telles que les dates de début et de fin du projet d'un fichier Microsoft Project, toute restriction d'impression sur un document PDF, liste des dossiers contenus dans un fichier de données Outlook, etc.

          Convertissez les formats de fichiers de documents populaires sur différents systèmes d'exploitation tels que Windows, Linux ou macOS tout en utilisant des environnements de développement tels que NetBeans, IntelliJ IDEA et Eclipse.
          
      gisthash: "35e23082b8fa43502d6784c38947eef1"
      gistfile: "password-protected-word-document-to-pdf-conversion.java"

    - title_left: "Ajouter un filigrane à Excel et convertir en PDF"
      content_left: |
          L'API de conversion de documents Java vous permet de convertir avec précision des documents de feuille de calcul Excel exactement comme le fichier d'origine et d'appliquer un filigrane de texte aux pages de document converties. Utilisez les options de filigrane telles que la police, la couleur, la largeur, la hauteur, l'arrière-plan et l'angle de rotation tout en ajoutant le texte en filigrane au document Excel et en le convertissant en fichier PDF.

          -   Créez une nouvelle instance de la classe **Converter** et chargez le document d'entrée
          -   Instanciez la classe **ConvertOptions** appropriée, par ex. (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions, etc.)
          -   Définir la propriété **Watermark** de l'instance **ConvertOptions**
          -   Spécifiez les propriétés du filigrane (couleur, largeur, texte, hauteur, etc.)
          -   Appelez la méthode **Convert** de l'instance de classe **Converter** pour la conversion en PDF
        
      title_right: "Mise en cache des résultats des documents convertis"
      content_right: |
          Dans certains cas, la taille du document converti est plus grande et la conversion prend du temps. La bibliothèque de conversion de documents offre la fonction de mise en cache pour gérer efficacement de telles situations et accélérer le processus de conversion répétitif. Activez l'interface ICache pour qu'elle fonctionne avec l'implémentation du cache personnalisé à l'aide du point d'extension et contrôlez la conversion du cache, comme vous le souhaitez.

          Le résultat de la conversion est enregistré sur le lecteur local par défaut, mais tout type de stockage de cache peut être pris en charge en implémentant les interfaces appropriées telles qu'Amazon S3, Dropbox, Google Drive, Windows Azure, Reddis ou tout autre.
          
      gisthash: "6999e55b491eea2906d7fefe2e636e33"
      gistfile: "add-watermark-to-excel-worksheet-and-convert-to-pdf.java"
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