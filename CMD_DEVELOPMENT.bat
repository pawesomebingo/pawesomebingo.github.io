@ECHO off

CALL ECHO ----------------
CALL ECHO 1 - [ node - localhost ]
CALL ECHO 0 - [ git - remove - last commit ]
CALL ECHO ----------------

SET /P input="ENTER: "

IF %input% == 1 (
    CALL node localhost.js
)

IF %input% == 0 (
	CALL git reset --soft HEAD~1
)

CALL ECHO ----------------

CALL ECHO FINISHED

PAUSE
