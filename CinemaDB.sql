CREATE DATABASE cinema;
USE cinema;

CREATE TABLE Diretor (
    diretorid INT NOT NULL PRIMARY KEY, 
    nomeDiretor VARCHAR(80) NOT NULL,
    nascimentoDiretor DATE NOT NULL,
    nasciDiretor VARCHAR(80) NOT NULL
);

CREATE TABLE filmes (
    idFilme INT NOT NULL PRIMARY KEY,
    NomeFilme VARCHAR(80) NOT NULL,
    DescFilme Varchar(80) NOT NULL,  
    GeneroFilme VARCHAR(80) NOT NULL,
    AnoLanc DATE NOT NULL,
    diretorid INT NOT NULL, 
    FOREIGN KEY (diretorid) REFERENCES Diretor (diretorid)
);
ALTER TABLE filmes MODIFY COLUMN DescFilme TEXT;



INSERT INTO Diretor (diretorid, nomeDiretor, nascimentoDiretor, nasciDiretor)
VALUES
(1, 'Christopher Nolan', '1970-07-30', 'Londres, Inglaterra'),
(2, 'Quentin Tarantino', '1963-03-27', 'Knoxville, EUA'),
(3, 'Steven Spielberg', '1946-12-18', 'Cincinnati, EUA');

INSERT INTO filmes (idFilme, NomeFilme, DescFilme, GeneroFilme, AnoLanc, diretorid)
VALUES
(1, 'Inception', 'Um ladrão de segredos através de sonhos é desafiado a realizar a tarefa impossível de plantar uma ideia na mente de um alvo.', 'Ficção Científica', '2010-07-16', 1),
(2, 'Django Livre', 'Um escravo liberto se torna caçador de recompensas e tenta resgatar sua esposa das garras de um cruel fazendeiro.', 'Faroeste', '2012-01-18', 2),
(3, 'Jurassic Park', 'Cientistas criam um parque temático com dinossauros clonados, mas quando as coisas saem do controle, a vida encontra seu caminho.', 'Aventura', '1993-06-11', 3),
(4, 'The Dark Knight', 'Batman enfrenta o Coringa, um criminoso psicopata que quer levar Gotham à destruição total.', 'Ação', '2008-07-18', 1),
(5, 'Pulp Fiction', 'A história de vários personagens cujas vidas se cruzam em uma série de eventos violentos e inesperados.', 'Crime', '1994-10-14', 2),
(6, 'E.T. - O Extraterrestre', 'Um menino encontra um extraterrestre perdido e, com a ajuda de seus amigos, tenta ajudá-lo a voltar para casa.', 'Ficção Científica', '1982-06-11', 3);
