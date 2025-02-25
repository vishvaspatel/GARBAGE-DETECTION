# 🚮 Smart Garbage Detection System

<img src="https://github.com/user-attachments/assets/b6393b94-2dd2-4057-b4d1-aaffe8845c74" alt="Garbage Detection System" width="1000"> 

## 💥 Introduction

Garbage collection is a challenging task that requires significant effort and manpower. This project proposes an **automatic garbage detection system** utilizing CCTV cameras installed on streets. The system employs deep learning models to detect garbage piles and send alerts to relevant authorities, ensuring cleaner urban environments with improved efficiency.

The project involves creating a **custom dataset** containing images of garbage piles and leveraging deep learning models such as **YOLOv5n, YOLOv7-tiny, and YOLOv8n** for accurate object detection.

## 💡 Why We Built This

- **Efficient Garbage Management:** Reduces dependency on manual monitoring.
- **Automated Alerts:** Notifies municipal authorities for prompt action.
- **Smart City Integration:** Supports real-time waste management solutions.
- **Deep Learning Implementation:** Enhances detection accuracy through advanced AI models.

## 📂 Dataset Collection and Preparation

Since no suitable public dataset containing images of garbage piles was available, we created a **custom dataset** with manually gathered and annotated images. The dataset preparation process includes:

- **1000 original images** collected from CCTV footage at different times of the day.
- **Manual annotation** using the **LabelImg** tool.
- **Data Augmentation Techniques** applied: Flip, Rotate (90°), Shear, Exposure, Blur, and Noise.
- **Final dataset size:** 5000 images (1000 original + 4000 augmented images).

### Sample Data
![chaud2-p5-chaud-small](https://github.com/user-attachments/assets/32dc25c2-f1ba-41a6-9c76-d6068e0c61b6)
![chaud1-p5-chaud-small](https://github.com/user-attachments/assets/b1073857-0ac3-4867-85b4-d39e62250c41)

## 🚀 Technologies Used

### 🧠 Machine Learning & AI

| Technology | Description |
| ---------- | --------------------------------------------------- |
| YOLO       | Object detection using You Only Look Once (YOLO) v5, v7, v8 |
| R-CNN      | Advanced real-time object detection                 |
| Deep Learning | Latest YOLO model for enhanced detection accuracy   |

### 🌍 Web Technologies

| Technology | Description |
| ---------- | ----------------------------------------- |
| OpenCV     | Image processing and video frame analysis |
| Node.js    | Backend development & AI model deployment |
| React      | Frontend UI framework                      |
| Flask      | High-performance web framework for APIs   |
| SQL        | Database management for storing alerts and detections |

## 🛠️ Local Development Setup

Ensure you have **Git, Python (3.8+), and pip** installed before proceeding.

1️⃣ Clone the repository:

```sh
git clone https://github.com/yourusername/Garbage-Detection.git
cd Garbage-Detection
```

2️⃣ Install dependencies:

```sh
pip install -r requirements.txt
```

3️⃣ Run the FastAPI server:

```sh
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

4️⃣ Setup React Frontend:

```sh
cd frontend
npm install
npm start
```

## 🌟 Features

- **Real-time garbage detection using CCTV footage**
- **Automated alert system for municipal authorities**
- **AI-powered object detection with YOLO models**
- **Web-based dashboard for monitoring detections**
- **Historical data storage for trend analysis**
  
## 🛠️ System Workflow

1. CCTV footage is processed in real-time.
2. Frames are extracted and passed through YOLO models.
3. Garbage piles are detected with bounding boxes.
4. Alerts are sent to relevant municipal authorities.

### Flow Diagram
<img src="https://github.com/user-attachments/assets/25f7fa26-dca7-40c8-9c93-2180731f21b4" alt="Garbage Detection System" width="800" height="700"> 

## 🏗️ Methodology

### Proposed Approach

This research methodology involves utilizing **real-time images** captured from CCTV cameras as input data. These images are used to train deep learning models, including **YOLOv5, YOLOv7, and YOLOv8**, which are known for their high object detection capabilities.

- The trained model's performance is evaluated using the training dataset.
- The model can detect garbage piles in real time.
- If garbage is detected, an **automatic alert is sent to the relevant authorities** for timely action.

## 📊 Results

![chaud t1-p5-chaud-small](https://github.com/user-attachments/assets/30da2975-2c4e-40a5-95c2-b564e831dbae)

## 💻 Web Portal Interface

### Login Page
![WhatsApp Image 2025-02-25 at 3 37 37 PM](https://github.com/user-attachments/assets/db0b98cb-e5cf-4387-9c3f-48b51a83651a)

### Analysis Dashboard 
![WhatsApp Image 2025-02-25 at 3 38 28 PM](https://github.com/user-attachments/assets/0ea751d6-dc32-4511-a4f1-965955a237e3)

### Notification Page
![WhatsApp Image 2025-02-25 at 3 38 02 PM](https://github.com/user-attachments/assets/a1a1fac8-c8b9-407c-8e3b-e72ac209a27f)

