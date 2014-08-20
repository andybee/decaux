include('stdio.js');
include('subfolder/example.js');

function main(argc, argv)
{
    console.log(sprintf('%s v%s', example(), '0.2.1'));
    console.log(get_pi());
}