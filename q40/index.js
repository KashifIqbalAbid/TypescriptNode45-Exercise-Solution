//album
{
    var myalbum1 = make_album("Jawad Ahmed", "Dil Dil Pakistan", 52);
    var myalbum2 = make_album("ALi Zafar", "Hurahi");
    var myalbum3 = make_album("Sadaqat Khan", "Kashmir");
    console.log(myalbum1);
    console.log(myalbum2);
    console.log(myalbum3);
    function make_album(artist, title, noOfTracks) {
        return { artistName: artist, albumTitle: title, tracks: noOfTracks };
    }
}
