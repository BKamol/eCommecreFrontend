from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from ..auth import (hash_password, verify_password, 
                    create_access_token, User)


router = APIRouter(prefix="/auth", tags=["auth"])


