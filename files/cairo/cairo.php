<?php

// test_cairo.php

$s = new CairoImageSurface(CairoFormat::ARGB32, 400, 400);

$c = new CairoContext($s);

$c->fill();

$c->setSourceRGB(1, 0, 0);

$c->setLineWidth(50);

$c->arc(200, 200, 100, 0, 2 * M_PI);

$c->stroke();

$c->setSourceRGB(0, 0, 0.6);

$c->rectangle(0, 160, 400, 75);

$c->fill();
$s->writeToPng(dirname(__FILE__)  . '/test.png');

