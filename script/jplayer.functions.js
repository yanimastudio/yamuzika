
jQuery(document).ready(function() {

    var myPlayer = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_17",
		cssSelectorAncestor: "#jp_container_17"
	}, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "Bu Gan Shou (Couldn't say - ft. Yaongaku, Denis Kutepov) <small>Namusura</small> <span>05:44</span>",
            mp3: "music/Namu_song5_lamlai_withvocal.mp3",
            poster: "extra-images/banner-player-1.jpg",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "Fu (Father - ft. Yaongaku, Denis Kutepov) <small>Namusura</small> <span>04:24</span>",
            mp3: "music/Namu_song2_lamlai_withvocal.mp3",
            poster: "extra-images/banner-player-2.jpg",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }
    ],
     {
       
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        preload: 'auto',
		preload: 'metadata',
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
        size: { width: "100px", height: "100%" },

    });

	var $jp = $('#jquery_jplayer_17');
	   $jp.on($.jPlayer.event.play,  function(e){
	       $('#current-track1').empty();
		   $('#current-track1').append(myPlayer.playlist[myPlayer.current].title);
	   });

});




jQuery(document).ready(function($) {
    var myPlayer = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_16",
        cssSelectorAncestor: "#jp_container_16"
    }, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "Dj kozak-promo mix soundwave <span>03:08</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "Shot me Down (feat. Skylar Grey) <span>02:56</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "I'll Keep Loving you (feat. Birdy) <span>03:12</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "The Hum (Short Edit) <span>03:37</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        },
    ],
     {
       
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        preload: 'auto',
        preload: 'metadata',
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
        size: { width: "92px", height: "100%" },
    });

    var $jp = $('#jquery_jplayer_16');
       $jp.on($.jPlayer.event.play,  function(e){
           $('#current-track5').empty();
           $('#current-track5').append(myPlayer.playlist[myPlayer.current].title);
       });
});




jQuery(document).ready(function() {

    var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
    {
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    }, {
        cssSelectorAncestor: "#cp_container_1",
        swfPath: "images/jplayer.swf",
        wmode: "window",
        keyEnabled: true
    });

    var myCirclePlayer = new CirclePlayer("#jquery_jplayer_2",
    {
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    }, {
        cssSelectorAncestor: "#cp_container_2",
        swfPath: "images/jplayer.swf",
        wmode: "window",
        keyEnabled: true
    });

    var myCirclePlayer = new CirclePlayer("#jquery_jplayer_3",
    {
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    }, {
        cssSelectorAncestor: "#cp_container_3",
        swfPath: "images/jplayer.swf",
        wmode: "window",
        keyEnabled: true
    });

    var myCirclePlayer = new CirclePlayer("#jquery_jplayer_4",
    {
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    }, {
        cssSelectorAncestor: "#cp_container_4",
        swfPath: "images/jplayer.swf",
        wmode: "window",
        keyEnabled: true
    });

    var myCirclePlayer = new CirclePlayer("#jquery_jplayer_5",
    {
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    }, {
        cssSelectorAncestor: "#cp_container_5",
        swfPath: "images/jplayer.swf",
        wmode: "window",
        keyEnabled: true
    });

    var myCirclePlayer = new CirclePlayer("#jquery_jplayer_6",
    {
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    }, {
        cssSelectorAncestor: "#cp_container_6",
        swfPath: "images/jplayer.swf",
        wmode: "window",
        keyEnabled: true
    });

    var myCirclePlayer = new CirclePlayer("#jquery_jplayer_7",
    {
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    }, {
        cssSelectorAncestor: "#cp_container_7",
        swfPath: "images/jplayer.swf",
        wmode: "window",
        keyEnabled: true
    });

    var myCirclePlayer = new CirclePlayer("#jquery_jplayer_8",
    {
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    }, {
        cssSelectorAncestor: "#cp_container_8",
        swfPath: "images/jplayer.swf",
        wmode: "window",
            keyEnabled: true
        });

        var myCirclePlayer = new CirclePlayer("#jquery_jplayer_9",
        {
            m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
        }, {
            cssSelectorAncestor: "#cp_container_9",
            swfPath: "images/jplayer.swf",
            wmode: "window",
            keyEnabled: true
        });

});