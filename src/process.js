const process_name = process.argv.slice(2)[0];

count = 8;

while(true){
    count++;
    if(count == 2000 || count == 4000) console.log(`Process ${process_name}: ${count}`);
}
