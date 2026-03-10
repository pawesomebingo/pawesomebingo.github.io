@ECHO off

CALL ECHO ----------------
CALL ECHO 1 - [ wrangler - dev ]
CALL ECHO 9 - [ wrangler - deploy ]
CALL ECHO 0 - [ git - remove last commit ]
CALL ECHO ----------------

SET /P input="ENTER: "

IF %input% == 1 (
    CALL npx wrangler pages dev . --port=80
)

IF %input% == 9 (
    CALL npx wrangler pages deploy .
)

IF %input% == 0 (
	CALL git reset --soft HEAD~1
)

CALL ECHO ----------------

CALL ECHO FINISHED

PAUSE
