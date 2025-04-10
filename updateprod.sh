#!/bin/bash

while true; do
    echo "Do you want to continue? (y/n)"
    read answer

    case "$answer" in
        [yY]|[yY][eE][sS])
            echo "Continuing..."

            echo "Removing media"
            rm -rf media           

            echo "Removing styles" 
            rm -rf styles

            echo "Removing scripts" 
            rm -rf scripts

            echo "Removing Index.html"
            rm index.html

            echo "Removing CTF.html"
            rm ctf.html

            echo "Removing links.html"
            rm links.html

            echo "Removing team.html"
            rm team.html

            echo "Removing calendar.html"
            rm calendar.html

            echo "Removing bird.html"
            rm bird.html


            echo "moving scripts from dev to prod" 
            cp -r dev/scripts scripts

            echo "moving media from dev to prod" 
            cp -r dev/media media

            echo "moving styles from dev to prod" 
            cp -r dev/styles styles

            echo "moving index.html from dev to prod" 
            cp -r dev/index.html index.html

            echo "moving ctf.html from dev to prod" 
            cp -r dev/ctf.html ctf.html

            echo "moving links.html from dev to prod" 
            cp -r dev/links.html links.html

            echo "moving team.html from dev to prod" 
            cp -r dev/team.html team.html

            echo "moving calendar.html from dev to prod" 
            cp -r dev/calendar.html calendar.html

            echo "moving bird.html from dev to prod" 
            cp -r dev/bird.html bird.html

            echo "Complete. Prod is now updated"
            exit 0 
            ;;

        [nN]|[nN][oO])
            echo "Exiting."
            # Your code for when answer is no or variations of no
            exit 0  # Exit the script gracefully
            ;;
        *)
            echo "Invalid input. Please enter yes or no."
            ;;
    esac
done