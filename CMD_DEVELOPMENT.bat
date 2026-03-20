@ECHO off

ECHO ----
CALL ECHO 1 - [ node - download site ]
@REM CALL ECHO 2 - [ explorer - move files ]
CALL ECHO 2 - [ node - inject custom code ]
CALL ECHO 3 - [ wrangler-dev ]
CALL ECHO 9 - [ wrangler-deploy ]
CALL ECHO 0 - [ git reset --soft HEAD~1 ]
ECHO ----

SET "dir_downloads=%USERPROFILE%\Downloads"
SET /P input="ENTER: "

IF %input% == 1 (
    CALL node download_site.js https://pawesome-bingo.webflow.io
)

@REM IF %input% == 2 (
@REM     FOR %%A IN (index 404) DO (
@REM         IF exist "%dir_downloads%\%%A.html" (
@REM             ROBOCOPY "%dir_downloads%" "%CD%" "%%A.html" /R:0 /W:0 /IS /IT
@REM             DEL "%dir_downloads%\%%A.html"
@REM             ECHO:
@REM             ECHO %%A.html MOVED
@REM         ) ELSE (
@REM             ECHO:
@REM             ECHO %%A.html NOT FOUND
@REM         )
@REM         IF exist "%dir_downloads%\%%A_files" (
@REM             ROBOCOPY "%dir_downloads%\%%A_files" "%CD%\%%A_files" /E /R:0 /W:0 /IS /IT
@REM             RMDIR /S /Q "%dir_downloads%\%%A_files"
@REM             ECHO:
@REM             ECHO %%A_files MOVED
@REM         ) ELSE (
@REM             ECHO:
@REM             ECHO %%A_files NOT FOUND
@REM         )
@REM     )
@REM )

IF %input% == 2 (
    CALL node inject_custom_code.js
)

IF %input% == 3 (
    CALL yarn run wrangler-dev
)

IF %input% == 9 (
    CALL yarn run wrangler-deploy
)

IF %input% == 0 (
	CALL git reset --soft HEAD~1
)

ECHO ----
ECHO FINISHED

PAUSE
