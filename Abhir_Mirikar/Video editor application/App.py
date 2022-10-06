import tkinter as tk # App uses Tkinter. 
from turtle import color, width
from PIL import Image, ImageTk
import cv2 as cv 
from tkinter.filedialog import askdirectory,askopenfilename
from cv2 import waitKey
import numpy as np
import random
def openFile():
    browse_txt.set("Loading...")
    file = askopenfilename( filetypes=[("all video format", ".mp4")],title="choose a video file")
    if file:
        browse_txt.set("Browse")
        windows = tk.Toplevel()
        windows.geometry("500x500")
        folder = askdirectory(title = "Save at")
        # txt = tk.Label(windows,text=file)
        # txt.grid(column=1,row = 0)
        c = cv.VideoCapture(file)
        length = int(c.get(cv.CAP_PROP_FRAME_COUNT))
        windows.title("VIDEO")
        i = 0
        while (c.isOpened() and folder): 
            ret,frame = c.read()
            if ret==False: 
                break
            cv.imwrite(folder + "/Frame" + str(i) + '.jpg',frame)
            i+=1
        c.release()
        cv.destroyAllWindows()
        canv= tk.Canvas(windows,width = 500, height = 1000)
        canv.grid(columnspan=3, rowspan = 10)
        f1 = tk.Label(windows,text = "Frames", font="Opensans 15")
        f1.grid(column = 1,row = 0)
        for i in range(5):
            t =  random.randint(0,length)
            Photo = Image.open(folder+"/Frame"+str(t)+".jpg")
            Resized_pic = Photo.resize((300,400),Image.ANTIALIAS)
            Photo_resized = ImageTk.PhotoImage(Resized_pic)
            Photo_label = tk.Label(windows,image = Photo_resized)
            Photo_label.image = Photo_resized
            Photo_label.grid(column = 1, row = 2*(i+1))
    else:
        browse_txt.set("Browse")
        
root = tk.Tk()
root.title("VEditor")
# root.grid(bg="#363636",fg="white")
canvas = tk.Canvas(root,width=450,height=500)
canvas.grid(columnspan=3,rowspan=3)
img = Image.open("video.jpg")
reimg = img.resize((300,300),Image.ANTIALIAS)
logo = ImageTk.PhotoImage(reimg)
logo_label = tk.Label(image= logo)
logo_label.image = logo
logo_label.grid(column = 1, row = 0)

instruction = tk.Label(root,text = "Select a video file to generate frames and Images",font = "segoe 12")
instruction.grid(columnspan = 3,row = 2,column = 0)
def changecolor(e):
    browse_btn['bg'] = "#006400"
def changecolor1(e):
    browse_btn['bg'] = "#1E5631"

browse_txt = tk.StringVar()

# output_txt = tk.StringVar()
# output_txt.set("Save at")
# outputPath = tk.Button(root,command = lambda: saveFileAt(),textvariable=output_txt,font = "Times",bg = "#006400" , fg = "white",height=2,width=15)
# outputPath.grid(column=1, row = 2)
browse_btn = tk.Button(root,command = lambda:openFile(), textvariable =browse_txt,font = "Times",bg="#1E5631",fg="white",height=2,width=15)
browse_txt.set("Browse")
browse_btn.grid(column=1,row =1)
browse_btn.bind("<Enter>",changecolor)
browse_btn.bind("<Leave>",changecolor1)

root.mainloop() #Run the app until it is exited. 