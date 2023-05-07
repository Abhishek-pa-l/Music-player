const playbtn = document.getElementById('play')
const audio = new Audio('./mp3/1.mp3')
const progressBar = document.getElementById("progressBar")
const gif = document.getElementById('gif')
const song = Array.from(document.getElementsByClassName('song'));
const smallPlay = Array.from(document.getElementsByClassName('smallPlay'));
const previous = document.getElementById('previous')
const next = document.getElementById('next')

let songIndex ;

const songs = [
    {
        name:'we dont talk anymore',cover:'assest/download (1).jpg',path:'mp3/1'
    },{
        name:'kudi-kudi',cover:'assest/download (2).jpg',path:'mp3/2'
    },{
        name:'kyu dil mera',cover:'assest/download (3).jpg',path:'mp3/3'
    },{
        name:'akull on beat',cover:'assest/download (4).jpg',path:'mp3/4'
    },{
        name:'shoot the order',cover:'assest/download (5).jpg',path:'mp3/5'
    },{
        name:'dass de',cover:'assest/download (6).jpg',path:'mp3/6'
    }
]



    //   playing audio 




playbtn.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        console.log("aaaa")
    playbtn.classList.remove('fa-play')
    playbtn.classList.add('fa-pause')
    audio.play();
    gif.style.opacity=1;
    }
    else{
        playbtn.classList.remove('fa-pause')
        playbtn.classList.add('fa-play')
        audio.pause();
    gif.style.opacity=0;

    }
})


        // progress bar




audio.addEventListener('timeupdate',()=>{
    // console.log("qqqq")
    const progress = parseInt((audio.currentTime/audio.duration)*100);
    progressBar.value = progress;
})        





// /                                                   / seek



progressBar.addEventListener('change',()=>{
    audio.currentTime = progressBar.value * audio.duration/100;
})





                                            //    small play button 
song.forEach((element,index)=>{
    // console.log(element);
    element.getElementsByTagName('img')[0].src = songs[index].cover;
    element.getElementsByTagName('p')[0].innerText=songs[index].name;
})


const pauseAll = ()=>{
    smallPlay.forEach((element)=>{
        
            element.classList.remove('fa-pause')
            element.classList.add('fa-play')
    }
        )
}


smallPlay.forEach((element,index)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        pauseAll()
        songIndex = e.target.id;
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audio.src = `./mp3/${songIndex}.mp3`;
        audio.currentTime=0;
        audio.play();
        gif.style.opacity=1;
        playbtn.classList.remove('fa-play')
        playbtn.classList.add('fa-pause')

        
    })
})





next.addEventListener('click',()=>{
    if(songIndex>5){
        songIndex = 0
    }else{
        songIndex += 1
        
    }
    console.log('dddd')
    audio.src = `./mp3/${songIndex}.mp3`;
        audio.currentTime=0;
        audio.play();
    gif.style.opacity=1;
    playbtn.classList.remove('fa-play')
        playbtn.classList.add('fa-pause')

})
previous.addEventListener('click',()=>{
    if(songIndex<1){
        songIndex = 6
    }else{
        songIndex -= 1
        
    }
    console.log('dddd')
    audio.src = `./mp3/${songIndex}.mp3`;
        audio.currentTime=0;
        audio.play();
    gif.style.opacity=1;
    playbtn.classList.remove('fa-play')
        playbtn.classList.add('fa-pause')

})