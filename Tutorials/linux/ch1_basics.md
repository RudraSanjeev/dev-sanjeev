#### Linux basics:

##### Go to this link to follow gist of traversy media

[click here](https://gist.github.com/bradtraversy/cc180de0edee05075a6139e42d5f28ce)

1. **pwd** - print working directories

2. **ls** - list all the doc of current directory

// options 3. **ls -a** - list down all the file (hidden also)

4. **ls -l** - list down directory with info (permissions, date_createdAt, user, group, etc.)

5. **mkdir** - to create new directory

6. **cd** - take you to home
7. **cd ~** - take you to home

8. **cd ..** - take you one step back in the current dir

Q. create a directory name dir1 and from anywhere else switch to /dir1
for ex- currently you are at /usr/bin and now you have to go /dir1

```bash
    cd ~/dir1
```

9. **touch <file_name>** - to create a file

##### To edit a file (nano editor):

**nano <file_name>** - this will open the file if exist or create new file and then open.

10. **cat <file_name>** - to see file content

11. **less <file_name>** - to list down in editor (press q to quit.)

12. **mv <existing_file_name> <rename_file_name>** - to rename the file.

13. **cp <existing_file_name> ~/Desktop/dir1/newFile.txt** - to copy file to specific location

14. **rm <file_name>** - to remove file

15. **rm <dir_name>** - to remove empty dir

16. **rm -R <dir_name>** - to remove any dir

<!-- Important  -->

17. **which <app_name>** - give you the location of software
    ex - which mongod

18. **history** - give you history of cmd

19. **ifconfig** - to show ip related info

20. **iwconfig** - to show wireless related info

21. **uname -a** - give info about os and user ect.

22. **sudo apt install <package_name>** - to install any package
23. **sudo dpkg -i <package_name>** - to install package that is present locally.

24. **sudo shutdown -r** - to restart
25. **sudo shutdown -h 10<time>** - to showdown after that time
26. **sudo shutdown -h now** - to shutdown now
