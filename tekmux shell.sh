#!/bin/bash
#for tekmux
function tek () { 
    vlc "/home/aakarsh/git_space/AdBlink/vids" --fullscreen --loop --random --no-video-title-show &
    while [ true ]
    do
    var1=$(git pull)
    var2="Already up to date."
    if [ "$var1" == "$var2" ]
    then
    echo "no prob"
 else
    killall -9 vlc
    vlc "/home/aakarsh/git_space/AdBlink/vids" --fullscreen --loop --random --no-video-title-show &
    fi
    sleep 8s
    done
}
tek