<?php

header("Content-type: text/calendar");
header("Access-Control-Allow-Origin: *");
die(file_get_contents("***ICAL PUBLIC CALENDAR***"));
