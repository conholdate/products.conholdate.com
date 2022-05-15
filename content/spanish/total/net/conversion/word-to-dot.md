---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "es/total/net/conversion/word-to-dot/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD FODP JPG"
ad_headline: "Convertir WORD a DOT | .NET"
ad_description: "La solución de conversión de documentos WORD a DOT más precisa para sus aplicaciones .NET."

############################# Head ############################
head_title: "Convierta WORD a DOT en C# ASP.NET | Conversión de documentos de Word .NET"
head_description: "API de conversión de documentos de procesamiento de texto .NET. Convierta WORD a DOT y más de 100 imágenes y formatos de archivo en aplicaciones .NET (C#, VB.NET, ASP.NET y .NET Core). Muestre el documento DOT convertido como visor HTML."

############################# Header ############################
title: "Convierta archivos de Word (WORD) a DOT en C# .NET"
description: "Convierta mediante programación WORD (archivos de Word) a DOT en aplicaciones C# VB.NET y ASP.NET utilizando funciones flexibles de conversión de documentos que le permiten personalizar la apariencia del documento resultante. Convierta todos los formatos populares de documentos de procesamiento de texto a hojas de cálculo de Excel, presentaciones de PowerPoint, PDF, Photoshop, eBook, web y formatos de archivo de imagen. La API de conversión nativa de .NET ofrece múltiples opciones de conversión de documentos para convertir el documento completo o elegir páginas específicas del archivo del documento de origen en función de los números de página o rangos de páginas seleccionados y convertir fácilmente a un formato de documento compatible."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Cómo convertir WORD a DOT en C# .NET"
      content_left: |
          Siga estos sencillos pasos para la conversión de WORD a DOT en .NET. Vea el documento DOT convertido tal como está o reprodúzcalo y muéstrelo como HTML sin usar ningún software externo.

          -   Crear objeto **Converter** para convertir documentos WORD
          -   Establecer las opciones de conversión para el formato DOT
          -   Llame al método **Convert** de la instancia de la clase **Converter** para la conversión a DOT
          -   Establecer opciones para el visor HTML
          -   Cree un objeto **Viewer** para ver DOT convertido como HTML
          
      title_right: "Descargas e instrucciones de instalación"
      content_right: |
          Necesita los espacios de nombres `GroupDocs.Conversion` y `GroupDocs.Viewer` para convertir formatos de archivo de Word a una amplia gama de imágenes y tipos de documentos como PDF, Microsoft Office (Word, Excel, PowerPoint, Project, Outlook), OpenDocument, HTML y diagramas CAD. Explore otras [API de .NET para documentos de Office](https://products.conholdate.com/total/net/) que ofrece Conholdate.Total.
          
          Obtenga los archivos de ensamblaje respectivos de [descargas](https://downloads.conholdate.com/total/net) o busque el paquete completo de [Nuget](https://www.nuget.org/packages/Conholdate.Total/) para agregar `Conholdate.Total para .NET` directamente en su espacio de trabajo.
          
      gisthash: "4f311c07ae9ee691b8afb7960aa6c806"
      gistfile: "word-to-pdf-conversion.cs"

    - title_left: "Agregar marca de agua de texto o imagen a DOT en C#"
      content_left: |
          Convierta con precisión documentos (WORD a DOT) exactamente como el archivo original y aplique marcas de agua de texto o imagen a las páginas del documento convertido usando C# .NET.

          -   Crear objeto **Converter** para convertir documentos WORD
          -   Crear una nueva instancia de la clase **WatermarkOptions**
          -   Especifique las propiedades de la marca de agua (color, ancho, texto, imagen, etc.)
          -   Crea una instancia de la clase **ConvertOptions** adecuada
          -   Establecer la propiedad **Watermark** de la instancia de **ConvertOptions**
          -   Llame al método **Convert** de la instancia de la clase **Converter** para la conversión a DOT
        
      title_right: "Extracción de información del documento de origen"
      content_right: |
          La función de extracción de información de documentos no solo permite obtener la información básica sobre el archivo del documento de origen, sino que también admite la extracción de información valiosa específica del formato de archivo, como las fechas de inicio y finalización del proyecto de un archivo de Microsoft Project, cualquier restricción de impresión en un documento PDF, lista de carpetas encerradas en un archivo de datos de Outlook, etc.

          Convierta formatos de archivo de documentos populares en diferentes sistemas operativos como Windows, Linux o macOS mientras usa plataformas como Windows Azure, Mono y Xamarin.
          
      gisthash: "a15affe15284876ce010a315a09da1f0"
      gistfile: "convert-word-to-pdf-and-add-text-watermark-to-converted-pdf.cs"

    - title_left: "Convertir Word protegido por contraseña a PDF"
      content_left: |
          La conversión de documentos protegidos por contraseña en .NET ahora es más fácil con Conholdate.Total para las API de .NET. Simplemente agregue unas pocas líneas de código C# y convierta con precisión un documento de Microsoft Word protegido por contraseña en un archivo PDF sin usar ningún software externo.

          -   Defina **LoadOptions** y establezca la contraseña de las opciones de carga específicas del documento
          -   Crear un objeto **Converter** para convertir un documento de Word
          -   Crear una instancia de la clase **PdfConvertOptions**
          -   Llame al método **Convert** de la instancia de la clase **Converter** para la conversión a PDF
          
      title_right: "Cargue y convierta documentos ubicados de forma remota"
      content_right: |
          Con Conholdate.Total para .NET, los desarrolladores pueden cargar y convertir documentos desde varias ubicaciones remotas y recursos de almacenamiento de documentos en la nube, como Amazon S3, Microsoft Azure Blob, FTP, disco local, transmisión o una URL simple. Solo tiene que especificar el método para obtener un flujo de documentos ubicado de forma remota y luego pasarlo a la clase Converter como constructor.
          
          Las API de Conholdate.Total para .NET son nativas de Windows Forms, ASP.NET, WPF, WCF o cualquier tipo de aplicación basada en .NET Framework 2.0 o posterior.
          
      gisthash: "3b7541492166a47d49ca85c55b531055"
      gistfile: "convert-password-protected-word-to-pdf.cs"

############################# About Formats ############################
about_formats:
    enable: false
############################# More Formats ############################
more_formats:
    enable: true
    auto: false
    other_out_formats: PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD FODP JPG
############################# Back to top ###############################
back_to_top:
  enable: true
---