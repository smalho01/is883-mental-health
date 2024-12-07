# Set CMAKE arguments (for Windows/Linux with different syntax)
# Windows (PowerShell) - CPU
<!-- # $env:CMAKE_ARGS = "-DGGML_BLAS=ON -DGGML_BLAS_VENDOR=OpenBLAS" -->

# Windows (PowerShell) - GPU
$env:CMAKE_ARGS = "-DGGML_CUDA=on"
$env:CUDA_HOME = "C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5"
$env:Path += ";C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\bin;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\libnvv"
$env:CUDAToolkitDir = "C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5"


# # Linux/macOS - CPU - not tested
<!-- # export CMAKE_ARGS="-DGGML_BLAS=ON -DGGML_BLAS_VENDOR=OpenBLAS" -->

# Install with extra index URL
pip install -r requirements.txt

# CPU - windows 
<!-- # pip install llama-cpp-python --extra-index-url https://abetlen.github.io/llama-cpp-python/whl/cpu -->

# GPU - windows
# Instead of the CPU wheel, use the CUDA-enabled wheel - Cuda toolkit 12.4
pip install llama-cpp-python --force-reinstall --upgrade --no-cache-dir --no-deps --extra-index-url https://abetlen.github.io/llama-cpp-python/whl/125

pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124

# Start the server
python run.py

# Force kill the pyhton process - windows
taskkill /IM python3.12.exe /F 