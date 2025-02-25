# Import necessary libraries
import cv2
import os
from datetime import datetime
from PIL import Image
import torch
import json
import io
import sqlite3

import requests
import os



def send_img(path, mac="AS:AS:BS:AS:SD:AS", addr="Ahmedabad, Gota"):
    url = f'http://127.0.0.1:5000/add/{addr}/{mac}'

    with open(path, 'rb') as img:
        name_img = os.path.basename(path)
        files = {'file': (name_img, img, 'multipart/form-data', {'Expires': '0'})}
        with requests.Session() as s:
            r = s.post(url, files=files)
            print(r)


def get_yolov5():
    model = torch.hub.load('yolov5', 'custom', path='best1000.pt', source='local')
    model.conf = 0.50
    return model

model1=get_yolov5()
# set path in which you want to save images
path = r'D:\OCR_Image\Garbage_yolo'

# changing directory to given path
os.chdir(path)

# i variable is to give unique name to images
i = 1

wait = 0
x=0
# Open the camera
video = cv2.VideoCapture(0)

conn = sqlite3.connect('garbage.db')

while True:
    # Read video by read() function and it
    # will extract and return the frame
    ret, img = video.read()

    # Put current DateTime on each frame
    font = cv2.FONT_HERSHEY_PLAIN
    cv2.putText(img, str(datetime.now()), (20, 40),
                font, 2, (255, 255, 255), 2, cv2.LINE_AA)

    # Display the imageq
    cv2.imshow('live video', img)

    # wait for user to press any key
    key = cv2.waitKey(100)

    # wait variable is to calculate waiting time
    wait = wait + 100

    if key == ord('q'):
        break
    # when it reaches to 5000 milliseconds
    # we will save that frame in given folder
    if wait == 5000:
        filename = 'Frame.jpg'
        # Save the images in given path
        cv2.imwrite(filename, img)
        img1=Image.open(r'D:\OCR_Image\Garbage_yolo\Frame.jpg')
        results = model1(img1, size=320)
        detect_res_f = results.pandas().xyxy[0].to_json(orient="records")
        detect_res = json.loads(detect_res_f)
        data = json.loads(detect_res_f)
        if len(data)!=0:
            print('Garbage detected')
            imgs = results.render()  # updates results.imgs with boxes and labels
            for img in imgs:
                x=x+1
                bytes_io = io.BytesIO()
                img_base64 = Image.fromarray(img)
                img_base64.save(bytes_io, format="jpeg")

                img_base64.save(f'D:\OCR_Image\Garbage_yolo\detected_GarbagewithBOX.jpeg')
            send_img(f'D:\OCR_Image\Garbage_yolo\detected_GarbagewithBOX.jpeg', "LK:ASK:LAS:ASL")
        else:
            print('Not detected')
        i = i + 1
        wait = 0

# close the camera
video.release()

# close open windows
cv2.destroyAllWindows()
