---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "fr/total/java/signature/ppt/"
other_out_formats: "PDF WORD EXCEL DOC DOCX DOCM DOT DOTM DOTX XLS XLSB XLSM XLSX XLTM XLTX PPT PPTX PPS PPSX POTX POTM BMP JPEG GIF PNG WEBP TIFF WMF PSD SVG ODP OTP ODS OTS ODT OTT"
ad_headline: "Signer numériquement PPT | Java"
ad_description: "Ajouter, modifier, rechercher, vérifier et supprimer des signatures numériques de PPT en Java"

############################# Head ############################
head_title: "Signer un fichier PPT avec des signatures de texte ou d'image en Java"
head_description: "Java PPT Signature API pour ajouter, modifier, supprimer, vérifier et rechercher des signatures numériques (texte, image, métadonnées, QR-Code, tampon). Affichez le fichier BMP signé au format HTML."

############################# Header ############################
title: "Signer le fichier PPT en Java et afficher en HTML"
description: "Signez et sécurisez les fichiers PPT dans les applications Java à l'aide de types de signature électronique populaires tels que le texte, l'image, les métadonnées, le code QR, le tampon et le champ de formulaire. Générez, mettez à jour, supprimez, vérifiez et recherchez par programmation des signatures numériques dans des documents PPT, des images et divers autres formats de fichiers sans qu'Adobe Reader soit installé."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Comment ajouter des signatures d'image à PPT en Java"
      content_left: |
          À l'aide de [Conholdate.Total for Java](https://products.conholdate.com/total/java/) - insérez une image personnalisée en tant que signature électronique dans un document PPT en Java. Ajoutez le logo de l'entreprise, l'icône de tampon ou le nom en utilisant différentes couleurs et effets de texte.

          -   Créez une nouvelle instance de la classe [Signature](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature) et transmettez-lui le document d'entrée
          -   Instanciez l'objet [ImageSignOptions](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature.options.sign/ImageSignOptions) et spécifiez les options de signature d'image
          -   Appelez la méthode [Sign](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature#sign(java.io.OutputStream,%20com.groupdocs.signature.options.sign.SignOptions)) de l'instance de classe **Signature** et transmettez-lui **ImageSignOptions**
          -   Définir les options pour afficher le document au format HTML
          -   Instancier la visionneuse avec le fichier de sortie
          
      title_right: "Instructions de téléchargement et d'installation des API"
      content_right: |
          Vous avez besoin des espaces de noms `GroupDocs.Signature` et `GroupDocs.Viewer` pour signer numériquement des documents en Java et les afficher au format HTML, image ou PDF. Découvrez d'autres [API Java pour les documents Office](https://products.conholdate.com/total/java/) proposés par Conholdate.Total.
          
          Obtenez les fichiers d'assemblage respectifs à partir des [téléchargements](https://downloads.conholdate.com/total/java) ou récupérez l'ensemble du package à partir de [Maven](https://repository.conholdate.com/webapp/#/artifacts /browse/tree/General/repo) pour ajouter 'Conholdate.Total` directement dans votre espace de travail.
          
      gisthash: "5683d8243aa8c95ea15ab0e5763e0dcd"
      gistfile: "add-image-signatures-to-pdf-files.java"

    - title_left: "Ajouter des signatures de texte à PPT en Java"
      content_left: |
          Ajoutez une signature de texte personnalisée à un document PPT en Java à l'aide de paramètres de texte avancés tels que la couleur de la police, la taille, le nom, l'alignement du texte et l'ajustement des bordures.

          -   Créez une nouvelle instance de la classe [Signature](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature) et transmettez le document d'entrée
          -   Instanciez l'objet [TextSignOptions](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature.options.sign/TextSignOptions) et spécifiez les options de signature de texte
          -   Appelez la méthode [sign](https://apireference.groupdocs.com/java/signature/com.groupdocs.signature/Signature#sign(java.io.OutputStream,%20com.groupdocs.signature.options.sign.SignOptions)) de l'instance de classe **Signature** et transmettez-lui **TextSignOptions**
        
      title_right: "Représentation d'image des pages de document"
      content_right: |
          Appliquez des signatures numériques à un large éventail de formats de documents et générez la représentation d'image des pages de document déjà signées aux formats PNG, JPG ou BMP. Vous pouvez facilement prévisualiser le document complet dans son ensemble ou choisir d'afficher certaines pages spécifiques en fonction des numéros de page ou des plages de pages.
          
      gisthash: "9d0efb4c5571e50b2a088b3ab054192d"
      gistfile: "add-text-signatures-to-pdf-files.java"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF WORD EXCEL DOC DOCX DOCM DOT DOTM DOTX XLS XLSB XLSM XLSX XLTM XLTX PPT PPTX PPS PPSX POTX POTM BMP JPEG GIF PNG WEBP TIFF WMF PSD SVG ODP OTP ODS OTS ODT OTT
############################# Back to top ###############################
back_to_top:
  enable: true
---