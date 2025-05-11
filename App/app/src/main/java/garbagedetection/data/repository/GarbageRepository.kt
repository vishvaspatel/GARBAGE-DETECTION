import com.example.garbagedetection.data.model.GarbageItem

class GarbageRepository {
    fun getGarbageList(): List<GarbageItem> {
        return listOf(
            GarbageItem(1, "image1.jpg", "2024-05-10 12:30", false),
            GarbageItem(2, "image2.jpg", "2024-05-10 13:00", true)
        )
    }
}