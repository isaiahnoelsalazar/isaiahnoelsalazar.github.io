<?php
$message = "This message exists because GitHub doesn't recognize PHP without the tag. It defaults to Hack, which is similar to PHP.";
?>
<!DOCTYPE html>
<html class="h-full">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=7">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Time In / Time Out</title>
        <link rel="stylesheet" href="css/index.css?<?php echo time();?>">
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link rel="stylesheet" href="css/sweetalert2.min.css">
        <script src="js/sweetalert2.all.min.js"></script>
    </head>
    <body class="h-full flex items-center justify-center bg-gray-300">
        <div class="flex flex-col bg-white items-center rounded-[16px]">
            <h2 class="text-[36px] flex items-center justify-center text-white bg-blue-500 font-bold m-0 w-full p-[8px] rounded-t-[16px]">Attendance</h2><br>
            <div class="px-[24px] pb-[24px]">
                <video id="video" width="320" height="240" autoplay class="hidden"></video>
                <button type="button" onclick="capture()" class="hidden">Capture Photo</button>
                <canvas id="canvas" width="320" height="240" class="hidden"></canvas>
                <img id="preview" width="320" class="rounded-[8px]"><br>
                <div class="flex flex-col w-full gap-[16px]">
                    <input type="hidden" name="photo" id="photo">
                    <div class="flex flex-col gap-[8px]">
                        <label class="font-bold">ID:</label>
                        <input type="number" maxlength="12" placeholder="Enter ID" id="id" name="id" class="bg-white outline-2 outline-blue-700 rounded-[8px] p-[8px]" required>
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <button onclick="fetchServerMessage('time_in')" name="action" value="time_in" class="bg-green-600 group relative inline-flex items-center justify-center overflow-hidden rounded-[8px] px-8 py-3 transition">
                            <div class="absolute inset-0 flex items-center [container-type:inline-size]">
                                <div class="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
                            </div>
                            <div class="absolute inset-0.5 rounded-[8px] bg-green-500"></div>
                            <div class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-[8px] bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
                            <div class="relative inline-flex items-center gap-2">
                                <span class="font-mona mt-px text-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">Time In</span>
                            </div>
                        </button>
                        <button onclick="fetchServerMessage('time_out')" name="action" value="time_out" class="bg-red-600 group relative inline-flex items-center justify-center overflow-hidden rounded-[8px] px-8 py-3 transition">
                            <div class="absolute inset-0 flex items-center [container-type:inline-size]">
                                <div class="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
                            </div>
                            <div class="absolute inset-0.5 rounded-[8px] bg-red-500"></div>
                            <div class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-[8px] bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
                            <div class="relative inline-flex items-center gap-2">
                                <span class="font-mona mt-px text-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">Time Out</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="js/index.js?<?php echo time();?>"></script>
</html>