package com.example.pitchperfect.Screens

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity
import com.example.pitchperfect.MainActivity
import com.example.pitchperfect.R

class SplashScreen: AppCompatActivity() {

    private val SPLASH_DISPLAY_LENGTH = 2000 // Duration in milliseconds (2 seconds)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        // Using Handler to delay the transition to the main activity
        Handler().postDelayed({
            val mainIntent = Intent(this@SplashScreen, MainActivity::class.java)
            startActivity(mainIntent)
            finish()
        }, SPLASH_DISPLAY_LENGTH.toLong())
    }
}