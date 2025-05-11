package com.example.garbagedetection.ui.components

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.example.garbagedetection.R

class DeleteFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_delete, container, false)

        val deleteButton = view.findViewById<Button>(R.id.buttonDelete)

        deleteButton.setOnClickListener {
            Toast.makeText(context, "Selected item deleted", Toast.LENGTH_SHORT).show()
            // Perform deletion logic
        }

        return view
    }
}
