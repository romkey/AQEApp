module( 'agreements' );

var data1 = '<Worksheet><Table><Row><Cell><Data>col1</Data></Cell><Cell><Data>col2</Data></Cell><Cell><Data>col3</Data></Cell><Cell><Data>col4</Data></Cell></Row></Table></Worksheet>';

var data2 = '<?xml version="1.0" encoding="UTF-8"?>\
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">\
<Styles>\
<Style ss:ID="sDT"><NumberFormat ss:Format="Short Date"/></Style>\
</Styles>\
<Worksheet ss:Name="Sheet1">\
<Table>\
<Row>\
<Cell><Data ss:Type="String">action</Data></Cell>\
<Cell><Data ss:Type="String">yesno_intakecompleted</Data></Cell>\
<Cell><Data ss:Type="String">yesno_firstcohort</Data></Cell>\
<Cell><Data ss:Type="String">firstname</Data></Cell>\
<Cell><Data ss:Type="String">lastname</Data></Cell>\
<Cell><Data ss:Type="String">primary-phone</Data></Cell>\
<Cell><Data ss:Type="String">alternate-phone</Data></Cell>\
<Cell><Data ss:Type="String">email-address</Data></Cell>\
<Cell><Data ss:Type="String">streetaddress</Data></Cell>\
<Cell><Data ss:Type="String">city</Data></Cell>\
<Cell><Data ss:Type="String">stateprov</Data></Cell>\
<Cell><Data ss:Type="String">country</Data></Cell>\
<Cell><Data ss:Type="String">bd_m</Data></Cell>\
<Cell><Data ss:Type="String">bd_d</Data></Cell>\
<Cell><Data ss:Type="String">bd_y</Data></Cell>\
<Cell><Data ss:Type="String">lengthunits</Data></Cell>\
<Cell><Data ss:Type="String">weightunits</Data></Cell>\
<Cell><Data ss:Type="String">height-cm</Data></Cell>\
<Cell><Data ss:Type="String">height-ft</Data></Cell>\
<Cell><Data ss:Type="String">height-in</Data></Cell>\
<Cell><Data ss:Type="String">weight</Data></Cell>\
<Cell><Data ss:Type="String">primarygoal</Data></Cell>\
<Cell><Data ss:Type="String">primarysport</Data></Cell>\
<Cell><Data ss:Type="String">primarygoal-importance</Data></Cell>\
<Cell><Data ss:Type="String">secondarygoal</Data></Cell>\
<Cell><Data ss:Type="String">secondarysport</Data></Cell>\
<Cell><Data ss:Type="String">secondarygoal-importance</Data></Cell>\
<Cell><Data ss:Type="String">exercise-regularly</Data></Cell>\
<Cell><Data ss:Type="String">consistent-plan</Data></Cell>\
<Cell><Data ss:Type="String">exercise-history</Data></Cell>\
<Cell><Data ss:Type="String">health-problem-details</Data></Cell>\
<Cell><Data ss:Type="String">medication-details</Data></Cell>\
<Cell><Data ss:Type="String">health-problem-therapy-details</Data></Cell>\
<Cell><Data ss:Type="String">injury-details</Data></Cell>\
<Cell><Data ss:Type="String">injury-therapy-details</Data></Cell>\
<Cell><Data ss:Type="String">job-details</Data></Cell>\
<Cell><Data ss:Type="String">work-schedule</Data></Cell>\
<Cell><Data ss:Type="String">activity-level</Data></Cell>\
<Cell><Data ss:Type="String">shift-work</Data></Cell>\
<Cell><Data ss:Type="String">primary-caregiver</Data></Cell>\
<Cell><Data ss:Type="String">travel-frequency</Data></Cell>\
<Cell><Data ss:Type="String">other-activities-details</Data></Cell>\
<Cell><Data ss:Type="String">other-complaints</Data></Cell>\
<Cell><Data ss:Type="String">shopping-frequency</Data></Cell>\
<Cell><Data ss:Type="String">eating-out-meals</Data></Cell>\
<Cell><Data ss:Type="String">food-allergies</Data></Cell>\
<Cell><Data ss:Type="String">food-sensitivities</Data></Cell>\
<Cell><Data ss:Type="String">nutritional-supplement-details</Data></Cell>\
<Cell><Data ss:Type="String">other-information</Data></Cell>\
<Cell><Data ss:Type="String">yesno_exercise</Data></Cell>\
<Cell><Data ss:Type="String">yesno_havegym</Data></Cell>\
<Cell><Data ss:Type="String">yesno_hirecoach</Data></Cell>\
<Cell><Data ss:Type="String">yesno_mealpreptime</Data></Cell>\
<Cell><Data ss:Type="String">yesno_dowhatwesay</Data></Cell>\
<Cell><Data ss:Type="String">yesno_workhard</Data></Cell>\
<Cell><Data ss:Type="String">yesno_giveussixmonths</Data></Cell>\
<Cell><Data ss:Type="String">yesno_provideprogress</Data></Cell>\
<Cell><Data ss:Type="String">yesno_providephotos</Data></Cell>\
<Cell><Data ss:Type="String">yesno_completetasks</Data></Cell>\
<Cell><Data ss:Type="String">yesno_imageconsent</Data></Cell>\
<Cell><Data ss:Type="String">yesno_blockoutface</Data></Cell>\
<Cell><Data ss:Type="String">yesno_medicalrelease</Data></Cell>\
<Cell><Data ss:Type="String">ajax</Data></Cell>\
<Cell><Data ss:Type="String">additionalcontact</Data></Cell>\
<Cell><Data ss:Type="String">chat-details</Data></Cell>\
<Cell><Data ss:Type="String">postalcode</Data></Cell>\
<Cell><Data ss:Type="String">id</Data></Cell>\
<Cell><Data ss:Type="String">level</Data></Cell>\
<Cell><Data ss:Type="String">userid</Data></Cell>\
<Cell><Data ss:Type="String">lastlogin</Data></Cell>\
<Cell><Data ss:Type="String">regstatus</Data></Cell>\
<Cell><Data ss:Type="String">cp_program_id</Data></Cell>\
<Cell><Data ss:Type="String">type</Data></Cell>\
<Cell><Data ss:Type="String">coach</Data></Cell>\
<Cell><Data ss:Type="String">gender</Data></Cell>\
<Cell><Data ss:Type="String">score</Data></Cell>\
<Cell><Data ss:Type="String">bio</Data></Cell>\
<Cell><Data ss:Type="String">goal</Data></Cell>\
<Cell><Data ss:Type="String">quote</Data></Cell>\
<Cell><Data ss:Type="String">coachingnotes</Data></Cell>\
<Cell><Data ss:Type="String">iscoach</Data></Cell>\
<Cell><Data ss:Type="String">lastcoachreview</Data></Cell>\
<Cell><Data ss:Type="String">lastcoachcontact</Data></Cell>\
<Cell><Data ss:Type="String">fullname</Data></Cell>\
<Cell><Data ss:Type="String">streetaddress2</Data></Cell>\
<Cell><Data ss:Type="String">age</Data></Cell>\
<Cell><Data ss:Type="String">height</Data></Cell>\
<Cell><Data ss:Type="String">fitnessexperience</Data></Cell>\
<Cell><Data ss:Type="String">whyworkwithus</Data></Cell>\
<Cell><Data ss:Type="String">frontpicname</Data></Cell>\
<Cell><Data ss:Type="String">sidepicname</Data></Cell>\
<Cell><Data ss:Type="String">backpicname</Data></Cell>\
<Cell><Data ss:Type="String">altprogress</Data></Cell>\
<Cell><Data ss:Type="String">emailnotification</Data></Cell>\
<Cell><Data ss:Type="String">notefromcoach</Data></Cell>\
<Cell><Data ss:Type="String">program_startdate</Data></Cell>\
<Cell><Data ss:Type="String">birthdate</Data></Cell>\
<Cell><Data ss:Type="String">lastvisiteddate</Data></Cell>\
<Cell><Data ss:Type="String">on_leaderboard</Data></Cell>\
<Cell><Data ss:Type="String">active</Data></Cell>\
<Cell><Data ss:Type="String">is_test_account</Data></Cell>\
<Cell><Data ss:Type="String">tempemail</Data></Cell>\
<Cell><Data ss:Type="String">encoded_coaching_agreement</Data></Cell>\
</Row>\
<Row>\
<Cell><Data ss:Type="String">intake</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">JOHN</Data></Cell>\
<Cell><Data ss:Type="String">DOE</Data></Cell>\
<Cell><Data ss:Type="String">555-555-1212</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">johndoe@example.com</Data></Cell>\
<Cell><Data ss:Type="String">1 Market St</Data></Cell>\
<Cell><Data ss:Type="String">San Francisco</Data></Cell>\
<Cell><Data ss:Type="String">CA</Data></Cell>\
<Cell><Data ss:Type="String">US</Data></Cell>\
<Cell><Data ss:Type="Number">12</Data></Cell>\
<Cell><Data ss:Type="Number">25</Data></Cell>\
<Cell><Data ss:Type="Number">1980</Data></Cell>\
<Cell><Data ss:Type="String">in</Data></Cell>\
<Cell><Data ss:Type="String">lb</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">6</Data></Cell>\
<Cell><Data ss:Type="Number">6</Data></Cell>\
<Cell><Data ss:Type="Number">200</Data></Cell>\
<Cell><Data ss:Type="String">loseweight</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">10</Data></Cell>\
<Cell><Data ss:Type="String">buildmuscle</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">9</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">none</Data></Cell>\
<Cell><Data ss:Type="String">none</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">days</Data></Cell>\
<Cell><Data ss:Type="String">None; seated work only</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">Rarely</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String">none</Data></Cell>\
<Cell><Data ss:Type="String">eggs, wheat, dairy</Data></Cell>\
<Cell><Data ss:Type="String">fish oil, vitamins, digestive enzymes</Data></Cell>\
<Cell><Data ss:Type="String">none</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
</Row>\
<Row>\
<Cell><Data ss:Type="String">intake</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">James</Data></Cell>\
<Cell><Data ss:Type="String">Smith</Data></Cell>\
<Cell><Data ss:Type="Number">5555551213</Data></Cell>\
<Cell><Data ss:Type="Number">5555551215</Data></Cell>\
<Cell><Data ss:Type="String">JAMES@example.com</Data></Cell>\
<Cell><Data ss:Type="String">Dreams Blvd</Data></Cell>\
<Cell><Data ss:Type="String">Manchester</Data></Cell>\
<Cell><Data ss:Type="String">NH</Data></Cell>\
<Cell><Data ss:Type="String">USA</Data></Cell>\
<Cell><Data ss:Type="Number">01</Data></Cell>\
<Cell><Data ss:Type="Number">01</Data></Cell>\
<Cell><Data ss:Type="Number">1991</Data></Cell>\
<Cell><Data ss:Type="String">in</Data></Cell>\
<Cell><Data ss:Type="String">lb</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">9</Data></Cell>\
<Cell><Data ss:Type="Number">9</Data></Cell>\
<Cell><Data ss:Type="Number">350</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String">Na</Data></Cell>\
<Cell><Data ss:Type="String">Na</Data></Cell>\
<Cell><Data ss:Type="String">Na</Data></Cell>\
<Cell><Data ss:Type="String">Na</Data></Cell>\
<Cell><Data ss:Type="String">Na</Data></Cell>\
<Cell><Data ss:Type="String">Na</Data></Cell>\
<Cell><Data ss:Type="String">I&apos;m JB</Data></Cell>\
<Cell><Data ss:Type="String">days</Data></Cell>\
<Cell><Data ss:Type="String">None; seated work only</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">A few times a year</Data></Cell>\
<Cell><Data ss:Type="String">Weight lifting</Data></Cell>\
<Cell><Data ss:Type="String">Na</Data></Cell>\
<Cell><Data ss:Type="String">1x</Data></Cell>\
<Cell><Data ss:Type="Number">5</Data></Cell>\
<Cell><Data ss:Type="String">Milk</Data></Cell>\
<Cell><Data ss:Type="String">Milk</Data></Cell>\
<Cell><Data ss:Type="String">Na</Data></Cell>\
<Cell><Data ss:Type="String">Na</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String">none</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
</Row>\
<Row>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
</Row>\
<Row>\
<Cell><Data ss:Type="String">intake</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">Jake</Data></Cell>\
<Cell><Data ss:Type="String">Smith</Data></Cell>\
<Cell><Data ss:Type="String">555-555-1214</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">jake.smith@example.com</Data></Cell>\
<Cell><Data ss:Type="String">11111 Elm Street</Data></Cell>\
<Cell><Data ss:Type="String">London</Data></Cell>\
<Cell><Data ss:Type="String">England</Data></Cell>\
<Cell><Data ss:Type="String">UK</Data></Cell>\
<Cell><Data ss:Type="Number">01</Data></Cell>\
<Cell><Data ss:Type="Number">01</Data></Cell>\
<Cell><Data ss:Type="Number">1971</Data></Cell>\
<Cell><Data ss:Type="String">in</Data></Cell>\
<Cell><Data ss:Type="String">lb</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">145</Data></Cell>\
<Cell><Data ss:Type="String">loseweight</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">10</Data></Cell>\
<Cell><Data ss:Type="String">getstronger</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">9</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String">month</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String">coach</Data></Cell>\
<Cell><Data ss:Type="String">mostly days</Data></Cell>\
<Cell><Data ss:Type="String">None; seated work only</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String">A few times a year</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">3</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="Number">1</Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
<Cell><Data ss:Type="String"></Data></Cell>\
</Row>\
</Table>\
</Worksheet>\
</Workbook>';

test( "basic", function() {
    expect( 3 );

    equal( typeof( Agreements.column_indices ), "object" );
    equal( typeof( Agreements.clients ), "object" );
    ok( Agreements.clients instanceof Array ); 
} );

test( "normalization", function() {
    expect( 1 );

    var client = { email: 'example@example.com' };


    // pounds
    equal( Agreements._normalize_weight( 200, 'lbs', client ), 200 );
    equal( Agreements._normalize_weight( 200, 'lb', client ), 200 );
    equal( Agreements._normalize_weight( 200, 'pounds', client ), 200 );

    // kgs
    equal( Agreements._normalize_weight( 200, 'kgs', client ), 440 );
    equal( Agreements._normalize_weight( 200, 'kg', client ), 440 );

    // stone
    equal( Agreements._normalize_weight( 20, 'st', client ), 280 );
    equal( Agreements._normalize_weight( 20, 'sts', client ), 280 );
    equal( Agreements._normalize_weight( 20, 'stone', client ), 280 );
    equal( Agreements._normalize_weight( 20, 'stones', client ), 280 );
    

    // invalid units
    equal( Agreements._normalize_weight( 200, 'xx', client ), 0 );

} );

test( "headings", function() {
    expect( 5 );

    Agreements.init();
    Agreements.import( data1 );

    equal( Agreements.column_indices.col1, 0 );
    equal( Agreements.column_indices.col2, 1 );
    equal( Agreements.column_indices.col3, 2 );
    equal( Agreements.column_indices.col4, 3 );
    equal( Agreements.clients.length, 0 );
} );

test( "real", function() {
    expect( 167 );

    Agreements.init();
    Agreements.import( data2 );

    equal( Agreements.column_indices[ "action"] , 0);
    equal( Agreements.column_indices[ "yesno_intakecompleted"] , 1);
    equal( Agreements.column_indices[ "yesno_firstcohort"] , 2);
    equal( Agreements.column_indices[ "firstname"] , 3);
    equal( Agreements.column_indices[ "lastname"] , 4);
    equal( Agreements.column_indices[ "primary-phone"] , 5);
    equal( Agreements.column_indices[ "alternate-phone"] , 6);
    equal( Agreements.column_indices[ "email-address"] , 7);
    equal( Agreements.column_indices[ "streetaddress"] , 8);
    equal( Agreements.column_indices[ "city"] , 9);
    equal( Agreements.column_indices[ "stateprov"] , 10);
    equal( Agreements.column_indices[ "country"] , 11);
    equal( Agreements.column_indices[ "bd_m"] , 12);
    equal( Agreements.column_indices[ "bd_d"] , 13);
    equal( Agreements.column_indices[ "bd_y"] , 14);
    equal( Agreements.column_indices[ "lengthunits"] , 15);
    equal( Agreements.column_indices[ "weightunits"] , 16);
    equal( Agreements.column_indices[ "height-cm"] , 17);
    equal( Agreements.column_indices[ "height-ft"] , 18);
    equal( Agreements.column_indices[ "height-in"] , 19);
    equal( Agreements.column_indices[ "weight"] , 20);
    equal( Agreements.column_indices[ "primarygoal"] , 21);
    equal( Agreements.column_indices[ "primarysport"] , 22);
    equal( Agreements.column_indices[ "primarygoal-importance"] , 23);
    equal( Agreements.column_indices[ "secondarygoal"] , 24);
    equal( Agreements.column_indices[ "secondarysport"] , 25);
    equal( Agreements.column_indices[ "secondarygoal-importance"] , 26);
    equal( Agreements.column_indices[ "exercise-regularly"] , 27);
    equal( Agreements.column_indices[ "consistent-plan"] , 28);
    equal( Agreements.column_indices[ "exercise-history"] , 29);
    equal( Agreements.column_indices[ "health-problem-details"] , 30);
    equal( Agreements.column_indices[ "medication-details"] , 31);
    equal( Agreements.column_indices[ "health-problem-therapy-details"] , 32);
    equal( Agreements.column_indices[ "injury-details"] , 33);
    equal( Agreements.column_indices[ "injury-therapy-details"] , 34);
    equal( Agreements.column_indices[ "job-details"] , 35);
    equal( Agreements.column_indices[ "work-schedule"] , 36);
    equal( Agreements.column_indices[ "activity-level"] , 37);
    equal( Agreements.column_indices[ "shift-work"] , 38);
    equal( Agreements.column_indices[ "primary-caregiver"] , 39);
    equal( Agreements.column_indices[ "travel-frequency"] , 40);
    equal( Agreements.column_indices[ "other-activities-details"] , 41);
    equal( Agreements.column_indices[ "other-complaints"] , 42);
    equal( Agreements.column_indices[ "shopping-frequency"] , 43);
    equal( Agreements.column_indices[ "eating-out-meals"] , 44);
    equal( Agreements.column_indices[ "food-allergies"] , 45);
    equal( Agreements.column_indices[ "food-sensitivities"] , 46);
    equal( Agreements.column_indices[ "nutritional-supplement-details"] , 47);
    equal( Agreements.column_indices[ "other-information"] , 48);
    equal( Agreements.column_indices[ "yesno_exercise"] , 49);
    equal( Agreements.column_indices[ "yesno_havegym"] , 50);
    equal( Agreements.column_indices[ "yesno_hirecoach"] , 51);
    equal( Agreements.column_indices[ "yesno_mealpreptime"] , 52);
    equal( Agreements.column_indices[ "yesno_dowhatwesay"] , 53);
    equal( Agreements.column_indices[ "yesno_workhard"] , 54);
    equal( Agreements.column_indices[ "yesno_giveussixmonths"] , 55);
    equal( Agreements.column_indices[ "yesno_provideprogress"] , 56);
    equal( Agreements.column_indices[ "yesno_providephotos"] , 57);
    equal( Agreements.column_indices[ "yesno_completetasks"] , 58);
    equal( Agreements.column_indices[ "yesno_imageconsent"] , 59);
    equal( Agreements.column_indices[ "yesno_blockoutface"] , 60);
    equal( Agreements.column_indices[ "yesno_medicalrelease"] , 61);
    equal( Agreements.column_indices[ "ajax"] , 62);
    equal( Agreements.column_indices[ "additionalcontact"] , 63);
    equal( Agreements.column_indices[ "chat-details"] , 64);
    equal( Agreements.column_indices[ "postalcode"] , 65);
    equal( Agreements.column_indices[ "id"] , 66);
    equal( Agreements.column_indices[ "level"] , 67);
    equal( Agreements.column_indices[ "userid"] , 68);
    equal( Agreements.column_indices[ "lastlogin"] , 69);
    equal( Agreements.column_indices[ "regstatus"] , 70);
    equal( Agreements.column_indices[ "cp_program_id"] , 71);
    equal( Agreements.column_indices[ "type"] , 72);
    equal( Agreements.column_indices[ "coach"] , 73);
    equal( Agreements.column_indices[ "gender"] , 74);
    equal( Agreements.column_indices[ "score"] , 75);
    equal( Agreements.column_indices[ "bio"] , 76);
    equal( Agreements.column_indices[ "goal"] , 77);
    equal( Agreements.column_indices[ "quote"] , 78);
    equal( Agreements.column_indices[ "coachingnotes"] , 79);
    equal( Agreements.column_indices[ "iscoach"] , 80);
    equal( Agreements.column_indices[ "lastcoachreview"] , 81);
    equal( Agreements.column_indices[ "lastcoachcontact"] , 82);
    equal( Agreements.column_indices[ "fullname"] , 83);
    equal( Agreements.column_indices[ "streetaddress2"] , 84);
    equal( Agreements.column_indices[ "age"] , 85);
    equal( Agreements.column_indices[ "height"] , 86);
    equal( Agreements.column_indices[ "fitnessexperience"] , 87);
    equal( Agreements.column_indices[ "whyworkwithus"] , 88);
    equal( Agreements.column_indices[ "frontpicname"] , 89);
    equal( Agreements.column_indices[ "sidepicname"] , 90);
    equal( Agreements.column_indices[ "backpicname"] , 91);
    equal( Agreements.column_indices[ "altprogress"] , 92);
    equal( Agreements.column_indices[ "emailnotification"] , 93);
    equal( Agreements.column_indices[ "notefromcoach"] , 94);
    equal( Agreements.column_indices[ "program_startdate"] , 95);
    equal( Agreements.column_indices[ "birthdate"] , 96);
    equal( Agreements.column_indices[ "lastvisiteddate"] , 97);
    equal( Agreements.column_indices[ "on_leaderboard"] , 98);
    equal( Agreements.column_indices[ "active"] , 99);
    equal( Agreements.column_indices[ "is_test_account"] , 100);
    equal( Agreements.column_indices[ "tempemail"] , 101);
    equal( Agreements.column_indices[ "encoded_coaching_agreement"] , 102);

    equal( Agreements.clients[ 0 ].age, "" );
    equal( Agreements.clients[ 0 ].city, "San Francisco");
    equal( Agreements.clients[ 0 ].coach, "" );
    equal( Agreements.clients[ 0 ].country, "US" );
    equal( Agreements.clients[ 0 ].email, "johndoe@example.com" );
    equal( Agreements.clients[ 0 ].firstname, "JOHN" );
    equal( Agreements.clients[ 0 ].gender, "" );
    equal( Agreements.clients[ 0 ].height, "" );
    equal( Agreements.clients[ 0 ].heightin, "6" );
    equal( Agreements.clients[ 0 ].id, "" );
    equal( Agreements.clients[ 0 ].lastname, "DOE" );
    equal( Agreements.clients[ 0 ].phone, "555-555-1212" );
    equal( Agreements.clients[ 0 ].postalcode, "" );
    equal( Agreements.clients[ 0 ].stateprov, "CA" );
    equal( Agreements.clients[ 0 ].userid, "" );
    equal( Agreements.clients[ 0 ].weight, "200" );

    equal( Agreements.clients[ 1 ].age, "" );
    equal( Agreements.clients[ 1 ].city, "Manchester");
    equal( Agreements.clients[ 1 ].coach, "" );
    equal( Agreements.clients[ 1 ].country, "USA" );
    equal( Agreements.clients[ 1 ].email, "james@example.com" );
    equal( Agreements.clients[ 1 ].firstname, "James" );
    equal( Agreements.clients[ 1 ].gender, "" );
    equal( Agreements.clients[ 1 ].height, "" );
    equal( Agreements.clients[ 1 ].heightin, "9" );
    equal( Agreements.clients[ 1 ].id, "" );
    equal( Agreements.clients[ 1 ].lastname, "Smith" );
    equal( Agreements.clients[ 1 ].phone, "5555551213" );
    equal( Agreements.clients[ 1 ].postalcode, "" );
    equal( Agreements.clients[ 1 ].stateprov, "NH" );
    equal( Agreements.clients[ 1 ].userid, "" );
    equal( Agreements.clients[ 1 ].weight, "350" );

    equal( Agreements.clients[ 2 ].age, "" );
    equal( Agreements.clients[ 2 ].city, "" );
    equal( Agreements.clients[ 2 ].coach, "" );
    equal( Agreements.clients[ 2 ].country, "" );
    equal( Agreements.clients[ 2 ].email, "" );
    equal( Agreements.clients[ 2 ].firstname, "" );
    equal( Agreements.clients[ 2 ].gender, "" );
    equal( Agreements.clients[ 2 ].height, "" );
    equal( Agreements.clients[ 2 ].heightin, "" );
    equal( Agreements.clients[ 2 ].id, "" );
    equal( Agreements.clients[ 2 ].lastname, "" );
    equal( Agreements.clients[ 2 ].phone, "" );
    equal( Agreements.clients[ 2 ].postalcode, "" );
    equal( Agreements.clients[ 2 ].stateprov, "" );
    equal( Agreements.clients[ 2 ].userid, "" );
    equal( Agreements.clients[ 2 ].weight, "" );

    equal( Agreements.clients[ 3 ].age, "" );
    equal( Agreements.clients[ 3 ].city, "London");
    equal( Agreements.clients[ 3 ].coach, "" );
    equal( Agreements.clients[ 3 ].country, "UK" );
    equal( Agreements.clients[ 3 ].email, "jake.smith@example.com" );
    equal( Agreements.clients[ 3 ].firstname, "Jake" );
    equal( Agreements.clients[ 3 ].gender, "" );
    equal( Agreements.clients[ 3 ].height, "" );
    equal( Agreements.clients[ 3 ].heightin, "" );
    equal( Agreements.clients[ 3 ].id, "" );
    equal( Agreements.clients[ 3 ].lastname, "Smith" );
    equal( Agreements.clients[ 3 ].phone, "555-555-1214" );
    equal( Agreements.clients[ 3 ].postalcode, "" );
    equal( Agreements.clients[ 3 ].stateprov, "England" );
    equal( Agreements.clients[ 3 ].userid, "" );
    equal( Agreements.clients[ 3 ].weight, "145" );


} );
