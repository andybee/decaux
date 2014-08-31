include('stdio.js');
include('subfolder/example.js');

function main(argc, argv)
{
    console.log(sprintf('%s v%s', example(), DECAUX_VERSION));
    console.log(get_pi());
    console.log(alt());
}