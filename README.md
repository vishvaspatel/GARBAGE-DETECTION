# Garbage Detection

<img src="IMAGE_URL_1" alt="Garbage Detection System" width="1000">  

## 💥 Introduction

Garbage collection is a challenging task that requires significant effort and manpower. This project proposes an **automatic garbage detection system** utilizing CCTV cameras installed on streets. The system leverages deep learning models to detect garbage piles and send alerts to relevant authorities, helping to maintain cleaner urban environments efficiently.

The proposed work includes the generation of a **handcrafted dataset** containing images of garbage piles. Deep learning models such as **YOLOv5n, YOLOv7-tiny, and YOLOv8n** are employed for object detection, ensuring high accuracy in identifying garbage locations.

## 💡 Why did we build this?

- **Efficient Garbage Management:** Reduces dependency on manual monitoring.
- **Automated Alerts:** Sends notifications to municipal authorities for quick action.
- **Smart City Integration:** Supports real-time waste management solutions.
- **Deep Learning Implementation:** Enhances detection accuracy through advanced AI models.

## 🚀 Technologies Used  

### 🧠 Machine Learning & AI  
| Technology | Description |
|------------|-------------|
| ![YOLOv5](https://img.shields.io/badge/YOLOv5-EB5B3C?style=for-the-badge&logo=yolo) | Object detection using You Only Look Once (YOLO) v5 |
| ![YOLOv7](https://img.shields.io/badge/YOLOv7-252525?style=for-the-badge) | Advanced real-time object detection |
| ![YOLOv8](https://img.shields.io/badge/YOLOv8-FF9900?style=for-the-badge) | Latest YOLO model for enhanced detection accuracy |

### 🌍 Web Technologies  
| Technology | Description |
|------------|-------------|
| ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) | Backend development & AI model deployment |
| ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white) | High-performance web framework for APIs |
| ![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv) | Image processing and video frame analysis |

## 📂 Dataset Collection and Preparation

As per our study, **no suitable datasets** containing images of garbage piles were available. Hence, we created a **custom dataset** with manually gathered and annotated images. The dataset preparation process includes:

- **1000 original images** collected from CCTV footage at different times of the day.
- **Manual annotation** using the **LabelImg** tool.
- **Data Augmentation Techniques** applied: Flip, Rotate (90°), Shear, Exposure, Blur, and Noise.
- **Final dataset size:** 5000 images (1000 original + 4000 augmented images).

<img src="IMAGE_URL_2" alt="Dataset Annotation Example" width="800">  

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

## 🛠️ System Workflow

1. CCTV footage is processed in real-time.
2. Frames are extracted and passed through YOLO models.
3. Garbage piles are detected with bounding boxes.
4. Alerts are sent to relevant municipal authorities.

## 🏗️ Methodology

### A. Proposed Approach

This research methodology involves utilizing **real-time images** captured from CCTV cameras as input data. These images are employed to train deep learning models using **YOLOv5, YOLOv7, and YOLOv8**, which are well-known for their object detection capabilities. 

- The trained model's efficiency is evaluated using the train dataset.
- The developed model can detect real-time garbage, as shown in Figure 4.
- If garbage is detected within the input images, an **automatic alert is sent to the relevant authorities** to ensure timely action.

## 🎬 Video Demo

_(Link to video showcasing garbage detection in action)_

## 🚀 Future Enhancements

- **Integration with IoT devices** for real-time data collection.
- **Deployment on cloud services** for large-scale implementation.
- **Improvement in detection accuracy** with larger annotated datasets.

---

📌 **Contributors:** Your Name, Team Members 
📌 **License:** MIT License 
📌 **Contact:** your.email@example.com

