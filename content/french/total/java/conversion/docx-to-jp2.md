---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "fr/total/java/conversion/docx-to-jp2/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML MHTML HTM MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV FODS DIF SXC PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT ODS ODP OTP TIFF JPEG JPG PNG GIF BMP ICO WMF EMF DCM WEBP JP2 EMZ WMZ SVG SVGZ TGA XPS TEX MD PSD PSB EPUB WEB EXCEL IMAGE FODP DICOM"
ad_headline: "Conversion Java DOCX en JP2"
ad_description: "API de conversion de documents DOCX vers JP2 pour Java | Plus de 100 formats de fichiers pris en charge"

############################# Head ############################
head_title: "Convertir DOCX en JP2 en Java | Bibliothèque de conversion de mots Java"
head_description: "API de conversion de documents de traitement de texte Java. Convertissez DOCX en JP2 et plus de 100 autres images et formats de fichiers dans des applications Java à l'aide des environnements de développement NetBeans, IntelliJ IDEA et Eclipse."

############################# Header ############################
title: "Bibliothèque Java pour la conversion de DOCX en JP2"
description: "Convertissez par programme DOCX en JP2 dans les applications Java et J2SE à l'aide d'options de manipulation de documents flexibles pour personnaliser l'apparence du document résultant. La bibliothèque de conversion de documents Word convertit avec précision les formats de documents Word en PDF, feuille de calcul Excel, présentation PowerPoint, Photoshop, HTML, eBook, XML, images et de nombreux autres formats de fichiers populaires. Utilisation de plusieurs fonctionnalités de conversion de documents - convertissez l'intégralité du document ou choisissez des pages spécifiques du fichier de document source en fonction des numéros de page ou des plages de pages auto-sélectionnés et convertissez facilement en un format de document pris en charge sans utiliser de logiciel externe."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Comment convertir DOCX en JP2 en Java"
      content_left: |
          Effectuez la conversion de fichiers DOCX en JP2 en Java en trois étapes simples. Affichez le document MHTML converti tel quel ou rendez-le et affichez-le au format HTML sans utiliser de logiciel externe.

          -   Créez une nouvelle instance de la classe **Converter** et chargez le fichier DOCX
          -   Définissez **ConvertOptions** pour le type de document JP2
          -   Appelez la méthode **Convert** de l'instance de classe **Converter** pour la conversion en JP2
          -   Définir les options du visualiseur HTML
          -   Créez un objet **Viewer** pour afficher le JP2 converti au format HTML
          
      title_right: "Téléchargements et instructions d'installation"
      content_right: |
          Vous avez besoin des espaces de noms `GroupDocs.Conversion` et `GroupDocs.Viewer` pour convertir les formats de fichiers Word en une large gamme d'images et de types de documents tels que PDF, Microsoft Office (Word, Excel, PowerPoint, Project, Outlook), OpenDocument, HTML et Schémas CAO. Découvrez d'autres [API Java pour les documents Office](https://products.conholdate.com/total/java/) proposés par Conholdate.Total.
          
          Obtenez les fichiers d'assemblage respectifs à partir des [téléchargements](https://downloads.conholdate.com/total/java) ou récupérez l'ensemble du package à partir de [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo) pour ajouter `Conholdate.Total for Java` directement dans votre espace de travail.
          
      gisthash: "675fd7fb45acf595fd9f872593eb2899"
      gistfile: "word-to-pdf-conversion.java"

    - title_left: "Ajouter un filigrane à Word et convertir en PDF"
      content_left: |
          Convertissez avec précision des documents Word en PDF en Java, exactement comme le fichier source d'origine et appliquez des filigranes de texte ou d'image aux pages du document converti.

          -   Créer une nouvelle instance de la classe **Converter** pour convertir le document Word DOCX
          -   Instanciez la classe **ConvertOptions** appropriée (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions)
          -   Créer une nouvelle instance de la classe **WatermarkOptions**
          -   Spécifiez les propriétés du filigrane (couleur, largeur, hauteur, texte, image, etc.)
          -   Définir la propriété **Watermark** de l'instance **ConvertOptions**
          -   Appelez la méthode **Convert** de l'instance de classe **Converter** pour la conversion de Word en PDF
          
      title_right: "Charger et convertir des documents situés à distance"
      content_right: |
          À l'aide de Conholdate.Total pour Java, les développeurs peuvent charger et convertir des documents à partir de divers emplacements distants et de ressources de stockage de documents dans le cloud telles qu'Amazon S3, Microsoft Azure Blob, FTP, un disque local, un flux ou une simple URL. Spécifiez simplement la méthode pour obtenir le flux de documents situé à distance, puis transmettez-le à la classe Converter en tant que constructeur.
          
          Conholdate.Total pour les API Java sont pris en charge sur différents systèmes d'exploitation tels que Windows J2SE, Linux (Ubuntu, OpenSUSE, CentOS et autres), macOS et tout type d'applications Java basées sur les environnements de développement Eclipse, IntelliJ NetBeans, IntelliJ IDEA ou Visual Studio Code.
          
      gisthash: "6999e55b491eea2906d7fefe2e636e33"
      gistfile: "add-watermark-to-word-and-convert-to-pdf.java"
          
    - title_left: "Conversion Word en PDF protégée par mot de passe"
      content_left: |
          Chargez et convertissez avec précision des documents de traitement de texte protégés par mot de passe en PDF dans vos applications basées sur Java - il vous suffit de quelques lignes de code. Les développeurs peuvent également transformer un document Word (DOC ou DOCX) en d'autres formats tels que Web (HTML, MHTML), Images (JPG, PNG TIFF, BMP), Markdown et bien d'autres sans avoir besoin d'installer Microsoft Word.

          -   Créer une nouvelle instance de la classe **Converter** et transmettre le chemin du document source
          -   Instanciez la classe **ConvertOptions** appropriée, par ex. (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions, etc.)
          -   Appelez la méthode **convert** de l'instance de classe **Converter** et transmettez le nom de fichier du document converti
        
      title_right: "Extraction d'informations sur les documents sources"
      content_right: |
          La fonction d'extraction d'informations sur les documents permet non seulement d'obtenir les informations de base sur le fichier du document source, mais elle prend également en charge l'extraction de certaines informations précieuses spécifiques au format de fichier. Il inclut les dates de début et de fin du projet d'un fichier Microsoft Project, toutes les restrictions d'impression sur un document PDF, la liste des dossiers inclus dans un fichier de données Outlook et les informations sur les calques et les mises en page dans un document CAO.

          Une autre fonctionnalité utile des API Java Conholdate.Total pour la conversion de documents est la détection automatique d'une extension de format de fichier inconnue du document source qui est livrée sous la forme d'un flux d'octets.
          
      gisthash: "35e23082b8fa43502d6784c38947eef1"
      gistfile: "password-protected-word-document-to-pdf-conversion.java"

    - title_left: "Convertir des pages Word spécifiques en PDF en Java"
      content_left: |
          L'API de conversion de documents Java vous permet de choisir des pages sélectionnées dans le document source et de les convertir avec précision au format de document pris en charge. L'exemple de code ci-dessous montre comment convertir les 1ère et 4ème pages d'un document Word en fichier PDF résultant.

          -   Créez une nouvelle instance de la classe **Converter** et chargez le document d'entrée (Word)
          -   Instanciez la classe **ConvertOptions** appropriée, par ex. (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions, etc.)
          -   Définissez la propriété **setPages** de l'instance **ConvertOptions** et mentionnez le numéro de page spécifique à convertir
          -   Appelez la méthode **convert** de l'instance de classe **Converter** et transmettez le nom de fichier (PDF) pour le document converti
        
      title_right: "Mise en cache des résultats des documents convertis"
      content_right: |
          Dans certains cas, la taille du document converti est plus grande et la conversion prend du temps. La bibliothèque de conversion de documents offre la fonction de mise en cache pour gérer efficacement de telles situations et accélérer le processus de conversion répétitif. Activez l'interface ICache pour qu'elle fonctionne avec l'implémentation du cache personnalisé à l'aide du point d'extension et contrôlez la conversion du cache, comme vous le souhaitez.

          Le résultat de la conversion est enregistré sur le lecteur local par défaut, mais tout type de stockage de cache peut être pris en charge en implémentant les interfaces appropriées telles qu'Amazon S3, Dropbox, Google Drive, Windows Azure, Reddis ou tout autre.
          
      gisthash: "98e5756c4d2150212f5abd2eb2067059"
      gistfile: "convert-specific-word-document-pages-to-pdf.java"
############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML MHTML HTM MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV FODS DIF SXC PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT ODS ODP OTP TIFF JPEG JPG PNG GIF BMP ICO WMF EMF DCM WEBP JP2 EMZ WMZ SVG SVGZ TGA XPS TEX MD PSD PSB EPUB WEB EXCEL IMAGE FODP DICOM
############################# Back to top ###############################
back_to_top:
  enable: true
---