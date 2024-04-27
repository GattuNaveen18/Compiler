import subprocess
from fastapi import FastAPI
from fastapi.exceptions import HTTPException
from fastapi import APIRouter
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# router = APIRouter()
# router.include_router(router,tags="subprocess")

# app.include_router(router)

# @router.get("/sub_process")
BACKEND_CORS_ORIGINS = ["http://localhost:3000"]
app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
@app.api_route("/sub_process")
def subprocess_writer():
    try:
        subprocess.run(["python", "D:/MyProject/Compiler/Backend/Program.py"],check=True)
        return {"detail":"sucessfuly executed"}
    except Exception as e:
        raise HTTPException(status_code=404,detail=e)

@app.api_route("/get_text",methods=["post"])
def get_text(text: dict):
    try:
        with open("Program_1.py", "w") as file:
            file.write(text['text'])
        subprocess_writer()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/get_output_text")
def get_output_text():
    try:
        with open("Output1.txt", "r") as file:
            content = file.read()
        return {"content": content}
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="output.txt not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


