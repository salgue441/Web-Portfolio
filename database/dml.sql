-- DML operations for the database

-- Inserting a new project
insert into projects (projectName, projectDescription, 
                     projectLink, projectImage)
values 
    (
        "Modding City Skylines for Academic use", 
        "Currently leading a team of 4 people responsible of documenting, creatinf game maps, and mods for the game City Skylines. The project is for academic use. Developed academic mods with C# and Unity.", 
        "https://github.com/City-Skylines-Modding/City-Skylines-Mod", 
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80"
    ), 
    (
        "Game Engine",
        "It is a work in progress. The game engine is being developed in modern C++ and OpenGL. The engine is platform dependent and it is being developed for Windows.",
        "https://github.com/salgue441/GameEngine",
        ""
    ),
    (
        "Minecraft Terrain Generator",
        "Build a minecraft terrain generato using modernGL, numpy, pygame, numba, PyGLM libraries.",
        "https://github.com/salgue441/Minecraft-Like-Engine",
        ""
    ),
    (
        "Chat Server",
        "Developed a chat server using Rust and Tokio. The server is able to handle multiple clients at the same time.",
        "https://github.com/salgue441/Chat-Server",
        ""
    ),
    (
        "CSharp Lexer",
        "Developed a lexer for the C# language using C++. The lexer is able to tokenize the C# language and take advantage of multithreading.",
        "https://github.com/salgue441/Csharp-Lexer",
        ""
    ),
    (
        "Electrum Racing Dashboard",
        "Developed a modular full stack dashboard using React and Node JS to display the kart's position, current velocity, engine temperature, and amperage of the lithium batteries. The software works by combining data from the kart's sensors and sending it to a main computer using an arduino and a wireless connection. Developed the software for the dashboard and data receiver using React and Node JS, as well as C++ respectively.",
        "https://github.com/salgue441/Electrum-Dashboard",
        ""
    ),
    (
        "Regular Expression to DFA Visualizer",
        "Developed a regular expression to DFA visualizer using C++ and OpenGL. The software is able to convert a regular expression to a DFA and display it in a window.",
        "https://github.com/salgue441/RegularExpressions-to-DFA",
        ""
    ),
    (
        "Black Dot - Retro Zëb",
        "Succesfully managed a team of five individuals to develop a web app using NodeJS, Express, MariaDB, and EJS. The web app allows the user to fill out retrospective surveys, providing valuable insight into a team performance. Displays both qualitative feedback in text and quantitative feedback in graphs, providing a comphrensive overview of the team's performance. Incorporated Jira API and Google Sign In API. Uses automated unit testing for data models",
        "https://github.com/salgue441/BlackDot",
        ""
    ),
    (
        "Data Structures and Algorithms",
        "Developed modern implementations using modern C++ of all the most common data structures and algorithms. The implementations are based on the book Introduction to Algorithms by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein.",
        "https://github.com/salgue441/Data-Structures-Algorithms"
        ""
    ),
    (
        "Sorting Algorithms Visualizer",
        "Developed a sorting algorithms visualizer using C++, OpenGL, and SDL2 library. Shows the sorting algorithms in action.",
        "https://github.com/salgue441/SortingAlgorithmVisualizer"
        ""
    ),
    (
        "Recreation of Space Invaders",
        "Recreated the classic game Space Invaders using C++ and OpenGL. The game is playable and uses C++, OpenGl, and GLFW library. The game has built in sprites.",
        "https://github.com/salgue441/ArcadeSpaceInvaders",
        ""
    ),
    (
        "Terminal tree list representation",
        "Developed a terminal tree list representation using python. The software is able to list the contents of a directory or folder in a tree like structure.",
        "https://github.com/salgue441/Terminal-Tree-list",
        ""
    ),
    (
        "Minecraft Clone",
        "Currently developing a Minecraft Clone using C++ and OpenGL. The game is being developed for Windows and Linux.",
        "https://github.com/salgue441/Minecraft-Clone",
        ""
    )
    ;


-- Trigger for auto updating the auto increment when a row is deleted
-- This trigger updates the auto-increment value of the projectID column

-- Trigger name: projects_auto_increment
-- Event: after delete
-- Table: projects
-- Purpose: update the auto increment value of the projectID column
delimiter $$
create trigger projects_auto_increment
after delete on projects
for each row
begin
    -- retrieve the max id from the projects table and add 1
    -- if the table is empty, set the max id to 1
    set @max_id = (select max(projectID) + 1 from projects);
    
    if @max_id is null then
        set @max_id = 1;
    end if;

    -- dynamically create the alter table statement and execute it
    set @alter_stmt = concat('alter table projects auto_increment = ', @max_id);
    prepare stmt from @alter_stmt;
    execute stmt;
    deallocate prepare stmt;
end$$
delimiter ;
