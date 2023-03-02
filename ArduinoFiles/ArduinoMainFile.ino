#include <SD.h>
#include <SPI.h>

const int sensorPin = A0; // Pin where the sensor is connected
const int relayPin = 7; // Pin where the relay is connected
const int threshold = 350; // Threshold for turning on the pump
bool watered = false;

File mySensorData;

void setup() {
  Serial.begin(9600); // Start serial communication
  pinMode(relayPin, OUTPUT); // Set the relay pin as an output
  
  // Initialize the SD card
  SD.begin(13, 10); 
  Serial.println("SD card initialization done.");
}

void loop() {
  int sensorValue = analogRead(sensorPin); // Read the sensor value
  
  // Open the data file for writing
  mySensorData = SD.open("data.txt", FILE_WRITE);

  if (mySensorData) {
    // Write the sensor value to the data file
    mySensorData.print("Moisture: ");
    mySensorData.println(sensorValue);
    mySensorData.close();
    Serial.println("working");
  } else {
    Serial.println("Error opening data file");
  }

  // Check if the soil is dry and hasn't been watered recently
  if (sensorValue < threshold && !watered) {
    digitalWrite(relayPin, HIGH); // Turn on the relay if the soil is dry
    watered = true;
    delay(3000);
    digitalWrite(relayPin, LOW);


  } 
  
  // Check if the soil is wet again
  if (sensorValue > threshold + 100){
    watered = false;
  }
  
  delay(500); // Wait 2 seconds before reading the sensor again
}
