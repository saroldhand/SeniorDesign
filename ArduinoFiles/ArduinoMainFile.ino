#include <SD.h>
#include <SPI.h>
#include <TimeLib.h>
#include "DHT.h"
#define DHTPIN 2
#define DHTTYPE DHT22

const int sensorPin = A0; // Pin where the sensor is connected
const int relayPin = 7; // Pin where the relay is connected
const int threshold = 300; // Threshold for turning on the pump
bool watered = false;
bool started = false;

File moistureFile;
File tempFile;
File humidFile;

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600); // Start serial communication
  pinMode(relayPin, OUTPUT); // Set the relay pin as an output
  SD.begin(13, 10);
  dht.begin();
  // Initialize the SD card
  
  if(SD.exists("MOISTURE.txt")){
    SD.remove("MOISTURE.txt");
  } 
  if(SD.exists("TEMP.TXT")){
    SD.remove("TEMP.TXT");
  }  
  if(SD.exists("HUMIDITY.TXT")){
    SD.remove("HUMIDITY.TXT");
  } 
  Serial.println("SD card initialization done.");
  // Initialize Moisture Level Document //
  


}

void loop() {
  int sensorValue = analogRead(sensorPin); // Read the sensor value
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();
  // Read temperature as Fahrenheit (isFahrenheit = true)
  float f = dht.readTemperature(true);
  // Check if any reads failed and exit early (to try again).
  Serial.println(sensorValue);
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  

// write to moisture file
  
  moistureFile = SD.open("MOISTURE.txt", FILE_WRITE);
  if (moistureFile) {
    Serial.println("Moisture Working");
    if(!started){
      //print mosture data outlines
      moistureFile.println("var jsonfile = {");
      moistureFile.println("   \"jsonarray\": [");
      // started = true;
    }
    
    // Write the timestamp and the sensor value to the moisture file
    moistureFile.println(" {");
    moistureFile.print("   \"Time\": ");
    moistureFile.print(millis() / 1000.0);
    moistureFile.println(",");
    moistureFile.print("   \"Moisture\": ");
    moistureFile.println(sensorValue);
    moistureFile.println(" },");
    moistureFile.close();
       
    Serial.print("Moisture printed... ");
    Serial.print("Moisture: ");
    Serial.println(sensorValue);
  } else {
    Serial.println("Error opening data file");
  }

  tempFile = SD.open("TEMP.txt", FILE_WRITE);
  if (tempFile) {
    Serial.println("Temp Working");
    if(!started){
      //print temp data outlines
      tempFile.println("var jsonfile = {");
      tempFile.println("   \"jsonarray\": [");
     
      // started = true;
    }
    
    // Write the timestamp and temperature value to the temp file
    tempFile.println(" {");
    tempFile.print("   \"Time\": ");
    tempFile.print(millis() / 1000.0);
    tempFile.println(",");
    tempFile.print("   \"Temperature\": ");
    tempFile.println(f);
    tempFile.println(" },");
    tempFile.close();


    Serial.print("Temperature printed... ");
    Serial.print("Temp: ");
    Serial.println(f);
  } else {
    Serial.println("Error opening data file");
  }

  humidFile = SD.open("HUMIDITY.txt", FILE_WRITE);
  if (humidFile) {
    Serial.println("Temp Working");
    if(!started){
      //print temp data outlines
      humidFile.println("var jsonfile = {");
      humidFile.println("   \"jsonarray\": [");
     
      started = true;
    }
    
    // Write the timestamp and temperature value to the temp file
    humidFile.println(" {");
    humidFile.print("   \"Time\": ");
    humidFile.print(millis() / 1000.0);
    humidFile.println(",");
    humidFile.print("   \"Humidity\": ");
    humidFile.println(h);
    humidFile.println(" },");
    humidFile.close();


    Serial.print("Humidity printed... ");
    Serial.print("Humidity: ");
    Serial.println(h);
  } else {
    Serial.println("Error opening data file");
  }

  // Check if the soil is dry and hasn't been watered recently
  if (sensorValue < threshold && !watered && sensorValue > 80) {
    digitalWrite(relayPin, HIGH); // Turn on the relay if the soil is dry
    watered = true;
    delay(1500);
    digitalWrite(relayPin, LOW);
  } 
  
  // Check if the soil is wet again
  if (sensorValue > threshold){
    watered = false;
  }
  
  delay(1000); // Wait 2 seconds before reading the sensor again
}
