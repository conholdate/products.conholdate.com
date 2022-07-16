---
############################# Static ############################
layout: "autogen-gist"
date: 2021-10-02T14:22:14+03:00
draft: false
path: "pt/total/java/conversion/sxc-to-xlt/"
other_out_formats: "PDF DOC DOCX DOCM DOT DOTX DOTM TXT RTF HTML HTM MHTML MHT XLS XLSX XLSM XLSB XLT XLTX XLTM XLAM CSV TSV DIF SXC FODS PPT PPTX PPS PPSX PPSM POT POTX PPTM POTM ODT OTT OTP ODP ODS EMZ WMZ SVG SVGZ XPS TEX DCM WMF EMF BMP PNG GIF JPEG TIFF ICO WEBP JP2 TGA PSB PSD EPUB MD XML JSON DICOM FODP JPG"
ad_headline: "Conversão Java SXC para XLT"
ad_description: "API de conversão de documentos SXC para XLT para Java | Mais de 100 formatos de arquivo suportados"

############################# Head ############################
head_title: "Converter SXC do Excel para XLT por meio de APIs de conversão de planilha Java"
head_description: "Biblioteca de conversão de documentos Java 100% nativa para converter SXC de planilha do Excel para XLT e mais de 100 outros formatos de arquivo de imagem e documento em aplicativos Java."

############################# Header ############################
title: "Converter SXC do Excel para XLT em Java"
description: "Usando a biblioteca nativa de conversão de documentos do Excel - converta SXC para XLT e mais de 100 outros formatos de arquivo em qualquer tipo de aplicativo baseado em Java com a máxima precisão. Trabalhe com um conjunto avançado de recursos de conversão de documentos para permanecer no comando e personalizar a aparência dos documentos convertidos conforme seu gosto. Converta programaticamente todos os formatos populares de planilhas do Excel de e para documentos do Word, apresentações do PowerPoint, PDF, Photoshop, eBook, web e formatos de arquivo de imagem sem usar nenhuma API ou software externo. Trabalhando com a API de conversão Java Excel, converta facilmente todo o documento de uma só vez ou escolha páginas específicas do documento de origem com base nos intervalos de página seletivos ou em números de página diferentes para converter facilmente em um formato de documento compatível."

############################# SubMenu ############################
submenu:
    enable: false

############################# Content ############################
content:
    enable: true
    block:
    - title_left: "Como converter SXC para XLT em Java"
      content_left: |
          Execute a conversão de arquivos SXC para XLT em Java usando três etapas simples. Visualize o documento convertido como está ou renderize-o para visualização como HTML sem qualquer dependência de software externo.

          -   Crie uma nova instância da classe **Converter** e carregue o arquivo SXC
          -   Defina **ConvertOptions** para o tipo de documento XLT
          -   Chame o método **Convert** da instância de classe **Converter** para conversão em XLT
          -   Definir opções para visualizador de HTML
          -   Crie o objeto **Viewer** para visualizar o XLT convertido como HTML
          
      title_right: "Instruções de download e instalação"
      content_right: |
          Você precisa dos namespaces `GroupDocs.Conversion` e `GroupDocs.Viewer` para converter entre mais de 100 documentos e formatos de arquivo de imagem como PDF, Microsoft Word, Excel, PowerPoint, Project, Visio, Outlook, HTML e diagramas. Explore outras [APIs Java para documentos do Office](https://products.conholdate.com/total/java/) oferecidas pela Conholdate.Total.
          
          Obtenha os respectivos arquivos de montagem do [Transferências](https://downloads.conholdate.com/total/java) ou busque o pacote inteiro do [Maven](https://repository.conholdate.com/webapp/#/artifacts/browse/tree/General/repo) para adicionar `Conholdate.Total` diretamente em sua área de trabalho.
          
      gisthash: "675fd7fb45acf595fd9f872593eb2899"
      gistfile: "excel-worksheet-to-pdf-conversion.java"

    - title_left: "Converter Excel para PDF/Word/HTML/PPTX"
      content_left: |
          Converta sua planilha do Excel para outros formatos de documentos populares, como PDF, HTML, apresentações do PowerPoint e formatos de arquivo de processamento de texto em Java. Carregue o arquivo de planilha do Excel de origem (XLS, XLSX) e salve-o como um documento convertido em uma variedade de formatos de arquivo suportados.

          -   Crie uma nova instância da classe **Converter** e carregue **XLSX** como arquivo de entrada
          -   Instancie a classe **ConvertOptions** adequada, por exemplo (**PdfConvertOptions** para conversão para PDF, **WordProcessingConvertOptions** para conversão para formatos Word, **MarkupConvertOptions** para conversão para HTML, **PresentationConvertOptions** para conversão para formatos PowerPoint)
          -   Chame o método **Convert** da instância da classe **Converter** para conversão para o formato PDF/HTML/PPTX ou DOCX
          
      title_right: "Converter todo o documento ou páginas específicas"
      content_right: |
          Usar a API de conversão de documentos para Java é muito simples e independente de plataforma, pois não requer a instalação de nenhum aplicativo externo, como o Microsoft Office, para realizar conversões do Excel para outros formatos de arquivo. Escolha uma lista de páginas desejadas com base em números de página variados ou converta um intervalo consecutivo de páginas em um dos formatos de documento suportados.
          
          Carregue documentos de origem usando opções estendidas para gerenciar comentários, anotações, marcas d'água e senhas em documentos protegidos durante o processo de conversão de arquivos. Você também pode personalizar a aparência dos documentos convertidos usando um conjunto flexível de recursos de manipulação de documentos.
          
      gisthash: "675fd7fb45acf595fd9f872593eb2899"
      gistfile: "excel-to-pdf-word-html-powerpoint-conversion.java"
          
    - title_left: "Converter SXC protegido por senha para XLT"
      content_left: |
          Carregue e converta com precisão documentos protegidos por senha em seus aplicativos baseados em Java. A API de conversão de formato de arquivo também suporta a renderização de documentos remotos de diferentes fontes, incluindo S3, Blob, FTP, Stream, URL ou um disco local.

          -   Crie uma nova instância da classe **Converter** e passe o caminho do documento de origem
          -   Instancie a classe **ConvertOptions** adequada, por exemplo (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions etc)
          -   Chame o método **Convert** da instância da classe **Converter** e passe o nome do arquivo para o documento convertido
        
      title_right: "Extração de informações do documento de origem"
      content_right: |
          O recurso de extração de informações de documentos não apenas permite obter as informações básicas sobre o arquivo do documento de origem, mas também suporta a extração de algumas informações valiosas específicas do formato de arquivo, como datas de início e término de um arquivo do Microsoft Project, quaisquer restrições de impressão em um documento PDF, lista de pastas incluídas em um arquivo de dados do Outlook etc.

          Converta formatos de arquivo de documentos populares em diferentes sistemas operacionais, como Windows, Linux ou macOS, enquanto usa ambientes de desenvolvimento como NetBeans, IntelliJ IDEA e Eclipse.
          
      gisthash: "35e23082b8fa43502d6784c38947eef1"
      gistfile: "password-protected-word-document-to-pdf-conversion.java"

    - title_left: "Adicionar marca d'água ao Excel e converter para PDF"
      content_left: |
          A API de conversão de documentos Java permite converter com precisão documentos de planilha do Excel exatamente como o arquivo original e aplicar uma marca d'água de texto às páginas do documento convertido. Use as opções de marca d'água, como fonte, cor, largura, altura, plano de fundo e ângulo de rotação, ao adicionar a marca d'água de texto ao documento do Excel e convertê-la em um arquivo PDF.

          -   Crie uma nova instância da classe **Converter** e carregue o documento de entrada
          -   Instancie a classe **ConvertOptions** adequada, por exemplo (PdfConvertOptions, WordProcessingConvertOptions, SpreadsheetConvertOptions etc)
          -   Defina a propriedade **Watermark** da instância **ConvertOptions**
          -   Especifique as propriedades da marca d'água (cor, largura, texto, altura etc.)
          -   Chame o método **Convert** da instância da classe **Converter** para conversão em PDF
        
      title_right: "Cache de resultados de documentos convertidos"
      content_right: |
          Em alguns casos, o tamanho do documento convertido é maior e leva tempo para ser convertido. A biblioteca de conversão de documentos oferece o recurso de cache para gerenciar com eficiência tais situações e acelerar o processo de conversão repetitivo. Habilite a interface ICache para trabalhar com implementação de cache personalizada usando o ponto de extensão e controle a conversão de cache, como preferir.

          O resultado da conversão é salvo na unidade local por padrão, mas qualquer tipo de armazenamento em cache pode ser suportado pela implementação das interfaces apropriadas, como Amazon S3, Dropbox, Google Drive, Windows Azure, Reddis ou qualquer outra.
          
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