package com.example.garbagedetection

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.example.garbagedetection.databinding.ActivityMainBinding
import com.example.garbagedetection.ui.components.DeleteFragment
import com.example.garbagedetection.ui.components.HistoryFragment
import com.example.garbagedetection.ui.components.LoginFragment
import com.example.garbagedetection.ui.components.VerifiedFragment

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Use View Binding
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Load Login screen by default
        loadFragment(LoginFragment())

        // Optional: Setup a bottom navigation listener
        binding.bottomNavigation.setOnItemSelectedListener { item ->
            when (item.itemId) {
                R.id.nav_login -> loadFragment(LoginFragment())
                R.id.nav_history -> loadFragment(HistoryFragment())
                R.id.nav_verified -> loadFragment(VerifiedFragment())
                R.id.nav_delete -> loadFragment(DeleteFragment())
            }
            true
        }
    }

    private fun loadFragment(fragment: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commit()
    }
}
