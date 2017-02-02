drop database if exists UGRAM;
create database IF NOT EXISTS UGRAM;
use UGRAM;

  create table PHONE_CODE (
    CODE char(2) not null unique,
    NAME varchar(80) not null unique,
    PHONE_CODE int not null,
    ID_COUNTRY int not null auto_increment,
    constraint PK_PHONE_CODE primary KEY (ID_COUNTRY)
  );

  create table USER (
    ID_USER int not null auto_increment,
    FIRSTNAME varchar(255) not null,
    LASTNAME varchar(255) not null,
    PSEUDO varchar(255) not null unique,
    EMAIL varchar(255) not null unique,
    COUNTRY_PHONE_CODE int null,
    PHONE_NUMBER varchar(10),
    PASSWORD_HASH varchar(255) not null,
    PICTURE_PATH varchar(255) null,
    DATE_BIRTHDAY date null,
    SEXE char not null,
    constraint PK_USER primary key (ID_USER),
    constraint FK_PHONE_CODE foreign key (COUNTRY_PHONE_CODE) references PHONE_CODE(ID_COUNTRY),
    constraint CT_DATE_BIRTHDAY check (DATE_BIRTHDAY  between date '1900-01-01' and sysdate),
    constraint CT_SEXE check (SEXE = 'H' or SEXE = 'F' or SEXE = 'X') /** Homme (H) / Femme (F) / X (not défini) **/
  );

  create table PICTURE (
    ID_PICTURE int not null auto_increment,
    FILENAME varchar(255) not null unique,
    ID_OWNER int not null,
    DATE_POSTED timestamp not null,
    DESCRIPTION varchar(255) not null,
    constraint PK_PICTURE primary key (ID_PICTURE),
    constraint FK_PICTURE_OWNER foreign key (ID_OWNER) references USER(ID_USER) on delete cascade
  );

  create table MENTION (
    ID_USER int not null,
    ID_PICTURE int not null,
    constraint PK_MENTION primary key (ID_USER, ID_PICTURE),
    constraint FK_MENTION_USER foreign key (ID_USER) references USER(ID_USER),
    constraint FK_MENTION_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE)
  );

  create table HASHTAG (
    ID_PICTURE int not null,
    HASHTAG varchar(255) not null,
    constraint PK_HASHTAG primary key (ID_PICTURE, HASHTAG),
    constraint FK_HASHTAG_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE)
  );

  create table REACTION (
    ID_REACTION int not null,
    ID_USER int not null,
    ID_PICTURE int not null,
    constraint PK_REACTION primary key (ID_USER, ID_PICTURE),
    constraint FK_REACTION_USER foreign key (ID_USER) references USER(ID_USER),
    constraint FK_REACTION_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE)
  );

  create table COMMENT (
    ID_USER int not null,
    ID_PICTURE int not null,
    DATE_CREATION timestamp not null,
    CONTENT text not null,
    constraint PK_COMMENT primary key (ID_USER, ID_PICTURE, DATE_CREATION),
    constraint FK_COMMENT_USER foreign key (ID_USER) references USER(ID_USER),
    constraint FK_COMMENT_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE)
  );

  create table CHAT (
    ID_CHAT int not null auto_increment,
    NAME_CHAT varchar(255) not null,
    constraint PK_CHAT primary key (ID_CHAT)
  );

  create table CHAT_USER (
    ID_CHAT int not null,
    ID_USER int not null,
    constraint PK_CHAT_USER primary key (ID_CHAT, ID_USER),
    constraint FK_CHAT_USER_ID_CHAT foreign key (ID_CHAT) references CHAT(ID_CHAT),
    constraint FK_CHAT_USER_ID_USER foreign key (ID_USER) references USER(ID_USER)
  );

  create table CHAT_MESSAGE (
    ID_MESSAGE int not null auto_increment,
    ID_CHAT int not null,
    ID_SENDER int not null,
    MESSAGE text not null,
    constraint PK_CHAT_MESSAGE primary key (ID_MESSAGE),
    constraint FK_CHAT_MESSAGE_ID_CHAT foreign key (ID_CHAT) references CHAT(ID_CHAT),
    constraint FK_CHAT_MESSAGE_ID_USER foreign key (ID_SENDER) references USER(ID_USER)
  );
