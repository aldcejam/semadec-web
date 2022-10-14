Como usar uma Ilustração:

    <!-- CONSEGUIR A ILUSTRAÇÃO E A CONFIGURAR-LA -->

    passo 1: 
    Escolha sua ilustração no site https://storyset.com/ (use apenas as ilustrações deste site,motivo: não ter ilustrações com traços diferente das demais)

    passo 2: abra a ilustração com o "ADOBE ILLUSTRATOR"

    passo 3: Selecione a figura toda e aperte o potão direito do mouse e selecione exportar seleção

    passo 4: após fazer a etapa 3 será aberto um modal com as configurações, selecione o FORMATO SVG (verifique nas configurações(icone de engrenagem) se as configurações do svg estão assim: ESTILIZAÇÃO:CSS INTERNO, FONTE:SVG, IMAGENS: PRESERVAR, IDS DE OBJETO: NOMES DE CAMADAS)

    passo 5: exportar a ilustração para sua maquina, botão: exportar ativo(caso esteja em português)


    <!-- USAR NO CODIGO -->

    <!-- a partir daqui você também poderá se guiar vendo as outras illustrações -->

    passo 6: criar componente

    passo 7: criar styled do material ui dentro do componente

    passo 8: usar o styled no component, e colocar div.svg (div com class "svg") dentro

    passo 9: copiar o CODIGO svg(não o arquivo) e colocar dentro da div.svg

    passo 10: pegar conteúdo Style do svg e colocar dentro do Styled anteriormente criado,
    estara assim: <defs><styled>.cls{fill:black}</styled></defs>, pegue apenas as classes e e exclua o <defs> e o <style>

    passo 11: importe a cor principal (const {mainColor} = useThemeContext();) e a coloque antes do styled do Material

    passo 12: agora ache a cor principal da ilustração e retire a cor em hexadecimal e coloque o ${mainColor}

    <!-- REDIMENSIONAR -->

    Quando for usar o component poderá em uma tag pai alterar o tamanho.
    .tagPai{
        .svg{
            width: 100px;
            ...
        }
    }
