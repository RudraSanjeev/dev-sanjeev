# ! /usr/bin/bash  
# (sharp bang #! or in short shebang - convention to write the interpreter name at the begining of the script.)

# go to this link to see read me file 
# https://gist.github.com/bradtraversy/ac3b1136fc7d739a788ad1e42a78b610
#  chmod +x ch2_shellScript.sh  - change permission to execute files

# ECHO COMMAND
# echo "hello world"

# VARIABLE
# By convention it should be in uppercase but not neccessary.
# contains only letters, numbers and underscores

# NAME="Sanjeev"  # here space is not allowed between var_name and asignment operator;
# echo $NAME
# or 
# echo ${NAME}


# to take input
# read -p "Enter your name: " NAME

# echo "your name is: "${NAME}
# OR
# echo "your name is: ${NAME}"

# IF STATEMENT 
# if [ "$NAME" == "sanjeev" ]
# then 
#     echo "Your name is Sanjeev"
# elif [ $NAME == "manjit" ];
# then
#     echo "Your name is manjit"
# else
#     echo "Your name is neither manjit nor sanjeev"
# fi

# read -p "Are You 21 year old ?" ANSWER

# case "$ANSWER" in
# [yY] | [Yy][eE][sS])
#     echo "You can take a beer ! ";;
#  [nN] | [Nn][oO])
#     echo "Sorry ! You are under age ";;

# *)
# echo "please enter y/Yes or n/No";;
# esac

# NAMES="john anna jane rebel"

# for NAME in $NAMES
#     do 
#     echo "Hello $NAME"
# done

# script to rename files

FILES=$(ls *.txt)   
NEW="new"
for FILE in $FILES
    do
    echo "Renaming $FILE to new-$FILE"
    mv $FILE $NEW-$FILE
done