from sqlmodel import Field, Session, SQLModel, create_engine, select
from typing import Annotated
from fastapi import Depends

SQLALCHEMY_DATABASE_URL = "sqlite:///ecommerce.db"

connect_args = {"check_same_thread": False}
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args=connect_args)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]

