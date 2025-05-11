package com.example.garbagedetection.utils

object Constants {
    const val GARBAGE_API_BASE_URL = "http://192.168.1.100:5000/"

    const val LOGIN_URL = "${GARBAGE_API_BASE_URL}login"
    const val UPLOAD_IMAGE_URL = "${GARBAGE_API_BASE_URL}upload"
    const val GET_HISTORY_URL = "${GARBAGE_API_BASE_URL}history"
    const val VERIFY_GARBAGE_URL = "${GARBAGE_API_BASE_URL}verify"
    const val DELETE_GARBAGE_URL = "${GARBAGE_API_BASE_URL}delete"
}
