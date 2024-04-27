import subprocess

def GetCode(Code):
    pass  # Placeholder for your code logic

# Execute the Python script and capture its output
try:
    k = subprocess.run(["python", "D:/MyProject/Compiler/Backend/Program_1.py"], capture_output=True, check=True, text=True)
    
    print("hello")
    print(k.stdout)  # Print the output of the subprocess
    with open("Output1.txt", "w") as file:
        file.write(k.stdout)  # Write the output to a file
except subprocess.CalledProcessError as e:
    with open("Output1.txt", "w") as file:
        file.write("None")  # Write the output to a file
    print("Error:", e)
