//album
{
    let myalbum1 = make_album("Jawad Ahmed", "Dil Dil Pakistan", 52);
    let myalbum2 = make_album("ALi Zafar", "Hurahi");
    let myalbum3 = make_album("Sadaqat Khan", "Kashmir");

    console.log(myalbum1);
    console.log(myalbum2);
    console.log(myalbum3);

    function make_album(artist:string, title:string, noOfTracks?:number){
        return {artistName:artist, albumTitle:title, tracks:noOfTracks};
    }
}