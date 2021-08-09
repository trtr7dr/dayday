<!DOCTYPE html>
<html>
    <head>
        <title>С Днем Дня!</title>
        <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
        
         <meta name="description" content="Поздравления с днем дня и другими чудачными праздниками." />
        <meta name="keywords" content="Поздравления с днем дня и другими чудачными праздниками, странные праздники, поздравления на странные праздники" />
        <meta name="author" content="Gloagent" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        
        <link rel="stylesheet" href="style.css">
        <link href="jquery.fancybox.min.css" rel="stylesheet" type="text/css"/>
        <link href="bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="splide.min.css" rel="stylesheet" type="text/css"/>
    </head>
    <body >
        <div id="date">
            <?php
            echo date("d.m.Y");
            ?>
        </div>
        
        <div id="time">
            <?php
            echo date("G:i");
            ?>
        </div>

        
        <?php

            class Days {

                public function get_files() {
                    $dir = 'hand/' . date("d.m");
                    $files = scandir($dir);
                    unset($files[0]);
                    unset($files[1]);
                    return $files;
                }
                
                function print_image() {
                    foreach ($this->get_files() as $el){
                        $tmp =  date("d.m") . '/' . $el;
                        print('<li class="splide__slide"><a href="hand/' . $tmp . '" download=""><img src="hand/' . $tmp . '" /></a></li>');
                    }
                }

            }

            $d = new Days();
            ?>


        <div class="content">
            <div class="splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        
                        <?php
                            $d->print_image();
                        ?>
                        <li class="splide__slide"><a id="hday2" href="/" download=""><img id="aday2"  /></a></li>
                        <li class="splide__slide"><a id="hartcanvasday4" href="/" download=""><img id="aartcanvasday4"  /></a></li>
                        <li class="splide__slide"><a id="hday1" href="/" download=""><img id="aday1"  /></a></li>
                        <li class="splide__slide"><a id="hday3" href="/" download=""><img id="aday3"  /></a></li>
                    </ul>
                </div>
            </div>

        </div>

        
        <div class="container ftr">
            <div class="row">
                <div class="col-md-12">
                    <p>Свайп для просмотра, клик для скачивания.</p><br>
                    <p>Сделал: <a href="https://gloagent.ru">Глеб Глоагент</a> в 2021. upd. 9.8.21</p>
                </div>
            </div>
        </div>



        
        <canvas id="day1" width="1240px" height="1754px" style="display: none"></canvas>
        <canvas id="day2" width="1240px" height="1754px" style="display: none"></canvas>
        <canvas id="day3" width="1240px" height="1754px" style="display: none"></canvas>
        <div id="day4" width="620px" height="877px" style="display: none" ></div>

        <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
        <script src="splide.min.js" type="text/javascript"></script>
        <script src="json.js" type="text/javascript"></script>
        <script src="Pixels.js" type="text/javascript"></script>
        <script src="artcanvas.js" type="text/javascript"></script>
        <script src="script.js" type="text/javascript"></script>
        <script>
            new Splide('.splide').mount();
        </script>
        
        <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(83227993, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/83227993" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
    </body>
</html>