<?php
require_once __DIR__ .'/vendor/autoload.php';
header('Access-Control-Allow-Origin: *');
putenv('PAGSEGURO_EMAIL=leonardo_sa7@hotmail.com');
putenv('PAGSEGURO_TOKEN_SANDBOX=E19D337A84064027ACF6B8C5E7CE9F07');
putenv('PAGSEGURO_ENV=sandbox');

\PagSeguro\Library::initialize();
\PagSeguro\Library::cmsVersion()->setName("School of Net")->setRelease("10.0.1");
\PagSeguro\Library::moduleVersion()->setName("School of Net")->setRelease("10.0.2");
$sessionCode = \PagSeguro\Services\Session::create(
    \PagSeguro\Configuration\Configure::getAccountCredentials()
);
echo json_encode([
    'sessionId' => $sessionCode->getResult()
]);
//Pagamento transparente
//Conectar com o PAGSEGURO e gerar uma sessão que será um token

//Iniciar uma biblioteca javascript do PAGSEGURO e passando este token
//Gerar outro token para enviar para o servidor as informações de pagamento