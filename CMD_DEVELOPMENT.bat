@ECHO off

CALL ECHO ----------------
CALL ECHO 1 - [ wrangler-dev ]
CALL ECHO 9 - [ wrangler-deploy ]
CALL ECHO 0 - [ git reset --soft HEAD~1 ]
CALL ECHO ----------------

SET /P input="ENTER: "

IF %input% == 1 (
    CALL npm run wrangler-dev
)

IF %input% == 9 (
    CALL npm run wrangler-deploy
)

IF %input% == 0 (
	CALL git reset --soft HEAD~1
)

CALL ECHO ----------------

CALL ECHO FINISHED

PAUSE
