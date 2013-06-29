<?php
  //Usage: php po-parser.php ordnung1.pdf [ordnung2.pdf] ...

  include("./libs/simple_html_dom.php");

  function isNewSentence($str){
    for ( $i = 2; $i < 10 ; $i++ ) {
      if ( strpos($str,"(".$i) === 0 ) return true;
    }
    return false;
  }

  for ($j = 1; $j<sizeof($argv); $j++){

    exec("mkdir tmp");
    exec("cp ".$argv[$j]." tmp");
    $path = pathinfo($argv[$j]);
    exec("pdftohtml -c tmp/".$path['filename'].".pdf");
    exec("rename 's/-(\d)\.html/-0$1.html/g' tmp/*.html");
    $dir=scandir("tmp");
    $files = array();

    foreach ( $dir as $file ){    
      for ( $i = 0; $i < 10 ; $i++ ) {
        if ( strpos($file,$i.".html") !== False ) {
          array_push($files,$file);
          break;
        }
      }
    }

    $Ps = array();

    for ( $i=1; $i < sizeof($files); $i++ ){

      $html = $files[$i];

      $site = new simple_html_dom();  
      $site->load_file("tmp/".$html);

      $tmps = $site->find('P');

    
      foreach ( $tmps as $tmp ){
        $innertext = $tmp->innertext;
        $temps =explode("<br/>", $innertext);
        foreach ( $temps as $temp){
          array_push($Ps, $temp);
        }
      }
    }  

    $k = 0;
    $sentence = 0;
    $paragraphs = array(array());
    $paragraphs[0]['paragraph'] = "";
    $paragraphs[0]['text'][0] = "";

    foreach ( $Ps as $P ){
      $P = trim(str_replace("&#160;"," ",$P));
      if(      $P != "" && $P != "\n" 
            && $P != "1" && $P != "2"){
        if ( strpos(str_replace(" ", "",$P),"<b>§") !== FALSE 
             /*|| strpos($P,"§ ") === 0*/ ) {
          $k++;
          $sentence = 0;
          $paragraphs[$k]['paragraph'] = "";
          $paragraphs[$k]['text'][$sentence] = "";
        }
        if ( strpos($P,"<b>") !== FALSE ||
             strpos($P,"§ ") === 0){//part of paragraph
          $paragraphs[$k]['paragraph'] = $paragraphs[$k]['paragraph'] . strip_tags($P);
          $paragraphs[$k]['paragraph'] = trim(preg_replace('/  +/', ' ',$paragraphs[$k]['paragraph']));
        } else {
          if ( isNewSentence($P) ){
            $sentence++;
            $paragraphs[$k]['text'][$sentence] = "";
          }
          $string = $paragraphs[$k]['text'][$sentence] ." ". strip_tags($P) ;
          $string = trim(preg_replace('/  +/', ' ', $string));
          //if ( substr($string , -1) === '-' ){
          //  $string[strlen($string)-1] = ' ';
          //}
          $paragraphs[$k]['text'][$sentence] = $string;
        }
      }
    }

    $fp = fopen($path['filename'].'.md', 'w');

    $markdown = "";

    foreach ( $paragraphs as $paragraph ) {
      $markdown .= "## " . $paragraph['paragraph']. "\n\n";
      foreach ($paragraph['text'] as $text){
        $markdown .= trim($text). "\n\n";
      }
    }

    fwrite($fp, $markdown);
    fclose($fp);
    
    exec("rm -rf tmp");
  }
?>
