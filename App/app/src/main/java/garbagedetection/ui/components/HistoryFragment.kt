package com.example.garbagedetection.ui.components

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.example.garbagedetection.R

class HistoryFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_history, container, false)

        val textView = view.findViewById<TextView>(R.id.textViewHistory)
        textView.text = "Garbage Detection History:\n- 10:45 AM: Garbage Detected\n- 11:00 AM: Garbage Cleaned"

        return view
    }
}
