package com.example.garbagedetection.ui.components

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.example.garbagedetection.R

class VerifiedFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_verified, container, false)

        val verifyButton = view.findViewById<Button>(R.id.buttonVerify)
        val imageView = view.findViewById<ImageView>(R.id.imageViewGarbage)

        verifyButton.setOnClickListener {
            Toast.makeText(context, "Garbage marked as verified", Toast.LENGTH_SHORT).show()
            // Could update repository or database here
        }

        return view
    }
}
