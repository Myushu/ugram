drop database if exists UGRAM;
create database IF NOT EXISTS UGRAM;
use UGRAM;

  create table USER (
    ID_USER int not null auto_increment,
    FIRSTNAME varchar(255) not null,
    LASTNAME varchar(255) not null,
    PSEUDO varchar(255) not null unique,
    EMAIL varchar(255) not null unique,
    PASSWORD_HASH varchar(255) null,
    PICTURE_PATH varchar(255) not null default 'default',
    DATE_BIRTHDAY date null,
    SEXE char not null,
    ID_USER_FACEBOOK varchar(255) null,
    IS_CONNECTED boolean not null,
    constraint PK_USER primary key (ID_USER)
  );

  delimiter //
  create trigger TR_USER_SEXE_CREATE
    before insert on USER
    for each row
    begin
      if new.SEXE not in ('M', 'F', 'X')
        then
        signal sqlstate '45000' set message_text = 'Invalid value for SEXE';
      end if;
    end;//

    create trigger TR_USER_SEXE_UPDATE
      before update on USER
      for each row
      begin
        if new.SEXE not in ('M', 'F', 'X')
          then
          signal sqlstate '45000' set message_text = 'Invalid value for SEXE';
        end if;
      end;//

  delimiter ;

  create table PICTURE (
    ID_PICTURE int not null auto_increment,
    ID_OWNER int not null,
    FILENAME varchar(255) not null,
    DATE_POSTED timestamp not null,
    DESCRIPTION varchar(255) not null,
    MIME_TYPE varchar(255) not null,
    constraint PK_PICTURE primary key (ID_PICTURE),
    constraint FK_PICTURE_OWNER foreign key (ID_OWNER) references USER(ID_USER) on delete cascade
  );

  create table PICTURE_PROPERTIES (
    ID_PICTURE int not null,
    BLUR int not null default 0,
    BRIGTHNESS int not null default 100,
    CONTRAST int not null default 100,
    GRAYSCALE int not null default 0,
    INVERT int not null default 0,
    OPACITY int not null default 100,
    SATURATE int not null default 100,
    SEPIA int not null default 0,
    constraint PK_PICTURE_PROPERTIES primary key (ID_PICTURE),
    constraint FK_PICTURE_PROPERTIES_ID_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE) on delete cascade
  );

  create table FOLLOWING (
    ID_USER int not null,
    ID_FOLLOWER int not null,
    constraint PK_FOLLOWING primary key (ID_USER, ID_FOLLOWER),
    constraint FK_FOLLOWING_USER foreign key (ID_USER) references USER(ID_USER) on delete cascade,
    constraint FK_FOLLOWING_FOLLOWER foreign key (ID_FOLLOWER) references USER(ID_USER) on delete cascade
  );

  create table MENTION (
    ID_USER int not null,
    ID_PICTURE int not null,
    constraint PK_MENTION primary key (ID_USER, ID_PICTURE),
    constraint FK_MENTION_USER foreign key (ID_USER) references USER(ID_USER) on delete cascade,
    constraint FK_MENTION_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE) on delete cascade
  );

  create table HASHTAG (
    ID_PICTURE int not null,
    HASHTAG varchar(255) not null,
    constraint PK_HASHTAG primary key (ID_PICTURE, HASHTAG),
    constraint FK_HASHTAG_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE) on delete cascade
  );

  create table REACTION (
    ID_USER int not null,
    ID_PICTURE int not null,
    constraint PK_REACTION primary key (ID_USER, ID_PICTURE),
    constraint FK_REACTION_USER foreign key (ID_USER) references USER(ID_USER) on delete cascade,
    constraint FK_REACTION_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE) on delete cascade
  );

  create table COMMENT (
    ID_COMMENT int not null auto_increment,
    ID_USER int not null,
    ID_PICTURE int not null,
    DATE_CREATION timestamp not null,
    CONTENT text not null,
    constraint PK_COMMENT primary key (ID_COMMENT),
    constraint FK_COMMENT_USER foreign key (ID_USER) references USER(ID_USER) on delete cascade,
    constraint FK_COMMENT_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE) on delete cascade
  );

  create table NOTIFICATION (
    ID_NOTIFICATION int not null auto_increment,
    MESSAGE varchar(255) not null,
    ID_USER int not null,
    ID_PICTURE int not null,
    ID_OWNER int not null,
    constraint PK_NOTIFICATION primary key (ID_NOTIFICATION),
    constraint FK_NOTIFICATION_USER foreign key (ID_USER) references USER(ID_USER) on delete cascade,
    constraint FK_NOTIFICATION_OWNER foreign key (ID_OWNER) references USER(ID_USER) on delete cascade,
    constraint FK_NOTIFICATION_PICTURE foreign key (ID_PICTURE) references PICTURE(ID_PICTURE) on delete cascade
  );

  create table MESSAGE (
    ID_MESSAGE int not null auto_increment,
    ID_SENDER int not null,
    ID_RECEIVER int not null,
    DATE_SENDED timestamp not null,
    MESSAGE text not null,
    constraint PK_MESSAGE primary key (ID_MESSAGE),
    constraint FK_MESSAGE_ID_SENDER foreign key (ID_SENDER) references USER(ID_USER) on delete cascade,
    constraint FK_MESSAGE_ID_RECEIVER foreign key (ID_RECEIVER) references USER(ID_USER) on delete cascade
  );
