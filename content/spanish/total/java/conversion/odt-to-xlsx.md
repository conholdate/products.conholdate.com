---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "es/total/java/conversion/odt-to-xlsx/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML MHTML HTM MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV FODS DIF SXC PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT ODS ODP OTP TIFF JPEG JPG PNG GIF BMP ICO WMF EMF DCM WEBP JP2 EMZ WMZ SVG SVGZ TGA XPS TEX MD PSD PSB EPUB WEB EXCEL IMAGE FODP DICOM"
ad_headline: "Conversión de Java ODT a XLSX"
ad_description: "API de conversión de documentos ODT a XLSX para Java | Más de 100 formatos de archivo compatibles"

############################# Head ############################
head_title: "Convertir ODT a XLSX en Java | Biblioteca de conversión de palabras Java"
head_description: "API de conversión de documentos de procesamiento de texto Java. Convierta ODT a XLSX y más de 100 imágenes y formatos de archivo en aplicaciones Java utilizando los entornos de desarrollo NetBeans, IntelliJ IDEA y Eclipse."

############################# Header ############################
title: "Biblioteca Java para la conversión de ODT a XLSX"
description: "Convierta ODT a XLSX mediante programación en aplicaciones Java y J2SE utilizando opciones flexibles de manipulación de documentos para personalizar la apariencia del documento resultante. La biblioteca de conversión de documentos de Word convierte con precisión los formatos de documentos de Word a PDF, hoja de cálculo de Excel, presentación de PowerPoint, Photoshop, HTML, eBook, XML, imágenes y muchos otros formatos de archivo populares. Uso de varias funciones de conversión de documentos: convierta el documento completo o elija páginas específicas del archivo del documento de origen en función de los números de página o rangos de páginas seleccionados y conviértalos fácilmente a un formato de documento compatible sin utilizar ningún software externo."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Cómo convertir ODT a XLSX en Java"
      content_left: |
          Realice la conversión de archivos ODT a XLSX en Java siguiendo tres sencillos pasos. Vea el documento MHTML convertido tal como está o reprodúzcalo y muéstrelo como HTML sin usar ningún software externo.

          -   Cree una nueva instancia de la clase **Converter** y cargue el archivo ODT
          -   Configure **ConvertOptions** para el tipo de documento XLSX
          -   Llame al método **Convert** de la instancia de la clase **Converter** para la conversión a XLSX
          -   Establecer opciones para el visor HTML
          -   Cree un objeto **Viewer** para ver XLSX convertido como HTML
          
      title_right: "Descargas e instrucciones de instalación"
      content_right: |
          Necesita los espacios de nombres `GroupDocs.Conversion` y `GroupDocs.Viewer` para convertir formatos de archivo de Word a una amplia gama de imágenes y tipos de documentos como PDF, Microsoft Office (Word, Excel, PowerPoint, Project, Outlook), OpenDocument, HTML y diagramas CAD. Explore otras [API de Java para documentos de Office](https://products.conholdate.com/total/java/) que ofrece Conholdate.Total.
          
          Obtenga los archivos de ensamblaje respectivos de [descargas](https://downloads.conholdate.com/total/java) o busque el paquete completo de [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo) para agregar `Conholdate.Total for Java` directamente en su espacio de trabajo.
          
      gisthash: "675fd7fb45acf595fd9f872593eb2899"
      gistfile: "word-to-pdf-conversion.java"

    - title_left: "Agregar marca de agua a Word y convertir a PDF"
      content_left: |
          Convierta con precisión documentos de Word a PDF en Java, exactamente como el archivo de origen original y aplique marcas de agua de texto o imagen a las páginas del documento convertido.

          -   Cree una nueva instancia de la clase **Converter** para convertir un documento DOCX de Word
          -   Crea una instancia de la clase **ConvertOptions** adecuada (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions)
          -   Crear una nueva instancia de la clase **WatermarkOptions**
          -   Especifique las propiedades de la marca de agua (color, ancho, alto, texto, imagen, etc.)
          -   Establecer la propiedad **Watermark** de la instancia de **ConvertOptions**
          -   Llame al método **Convert** de la instancia de la clase **Converter** para la conversión de Word a PDF
          
      title_right: "Cargue y convierta documentos ubicados de forma remota"
      content_right: |
          Con Conholdate.Total para Java, los desarrolladores pueden cargar y convertir documentos desde varias ubicaciones remotas y recursos de almacenamiento de documentos en la nube, como Amazon S3, Microsoft Azure Blob, FTP, disco local, transmisión o una URL simple. Simplemente especifique el método para obtener un flujo de documentos ubicado de forma remota y luego páselo a la clase Converter como constructor.
          
          Las API de Conholdate.Total para Java son compatibles con diferentes sistemas operativos como Windows J2SE, Linux (Ubuntu, OpenSUSE, CentOS y otros), macOS y cualquier tipo de aplicaciones Java basadas en entornos de desarrollo Eclipse, IntelliJ NetBeans, IntelliJ IDEA o Visual Studio Code.
          
      gisthash: "6999e55b491eea2906d7fefe2e636e33"
      gistfile: "add-watermark-to-word-and-convert-to-pdf.java"
          
    - title_left: "Conversión de Word a PDF protegida con contraseña"
      content_left: |
          Cargue y convierta con precisión documentos de procesamiento de Word protegidos por contraseña a PDF dentro de sus aplicaciones basadas en Java; todo lo que necesita son solo unas pocas líneas de código. Los desarrolladores también pueden transformar documentos de Word (DOC o DOCX) en otros formatos como Web (HTML, MHTML), Imágenes (JPG, PNG TIFF, BMP), Markdown y muchos otros sin necesidad de instalar Microsoft Word.

          -   Cree una nueva instancia de la clase **Converter** y pase la ruta del documento de origen
          -   Cree una instancia de la clase **ConvertOptions** adecuada, p. (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions, etc.)
          -   Llame al método **convert** de la instancia de clase **Converter** y pase el nombre de archivo para el documento convertido
        
      title_right: "Extracción de información del documento de origen"
      content_right: |
          La función de extracción de información de documentos no solo permite obtener la información básica sobre el archivo del documento de origen, sino que también admite la extracción de información valiosa específica del formato de archivo. Incluye las fechas de inicio y finalización del proyecto de un archivo de Microsoft Project, las restricciones de impresión en un documento PDF, la lista de carpetas incluidas en un archivo de datos de Outlook y la información sobre capas y diseños en un documento CAD.

          Otra función útil de Conholdate.Total API de Java para la conversión de documentos es la detección automática de una extensión de formato de archivo desconocida del documento de origen que se entrega en forma de flujo de bytes.
          
      gisthash: "35e23082b8fa43502d6784c38947eef1"
      gistfile: "password-protected-word-document-to-pdf-conversion.java"

    - title_left: "Convierta páginas específicas de Word a PDF en Java"
      content_left: |
          La API de conversión de documentos de Java le permite elegir páginas seleccionadas del documento de origen y convertirlas con precisión al formato de documento compatible. El siguiente código de ejemplo muestra cómo convertir la primera y la cuarta página de un documento de Word en el archivo PDF resultante.

          -   Cree una nueva instancia de la clase **Converter** y cargue el documento de entrada (Word)
          -   Cree una instancia de la clase **ConvertOptions** adecuada, p. (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions, etc.)
          -   Establezca la propiedad **setPages** de la instancia de **ConvertOptions** y mencione el número de página específico que se convertirá
          -   Llame al método **convert** de la instancia de la clase **Converter** y pase el nombre de archivo (PDF) para el documento convertido
        
      title_right: "Almacenamiento en caché de resultados de documentos convertidos"
      content_right: |
          En algunos casos, el tamaño del documento convertido es mayor y lleva tiempo convertirlo. La biblioteca de conversión de documentos ofrece la función de almacenamiento en caché para administrar de manera eficiente tales situaciones y acelerar el proceso de conversión repetitivo. Habilite la interfaz de ICache para que funcione con la implementación de caché personalizada utilizando el punto de extensión y controle la conversión de caché, como prefiera.

          El resultado de la conversión se guarda en la unidad local de forma predeterminada, pero se puede admitir cualquier tipo de almacenamiento en caché implementando las interfaces adecuadas, como Amazon S3, Dropbox, Google Drive, Windows Azure, Reddis o cualquier otra.
          
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