include('example.js');

function example()
{
    return 'Welcome to Decaux';
}

function main(argc, argv)
{
    console.log(sprintf('%s', example()));
}