<?php
require_once 'vendor/swiftmailer/swiftmailer/lib/swift_required.php';

$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
        ->setUsername('benchsquatter101@gmail.com')
        ->setPassword('dheeraj1');
$mailer = Swift_Mailer::newInstance($transport);
$message = Swift_Message::newInstance()
->setSubject('Your subject')
->setFrom(array('madhu@seshadhritechnologies.com' => 'Dheeraj'))
->setTo(array('madhu@seshadhritechnologies.com'))->setBody('ses tech')
->addPart('<q>home</q>', 'text/html');

if ($mailer->send($message))
{
echo "Sent\n";
}
else
{
echo "Failed\n";
}