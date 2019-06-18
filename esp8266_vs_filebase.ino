/* Controlling LED using Firebase console by CircuitDigest(www.circuitdigest.com) */
#include <ESP8266WiFi.h>                                                // esp8266 library
#include <FirebaseArduino.h>                                             // firebase library
#include <DHT.h>
#define FIREBASE_HOST "fir-b3df2.firebaseio.com"                         // the project name address from firebase id
#define FIREBASE_AUTH "EWd6TFVXo1CbyTLJOb7YlDArRFbuNSwEuxqP7yxq"                    // the secret key generated from firebase
#define WIFI_SSID "SKAV2"                                          // input your home or public wifi name 
#define WIFI_PASSWORD "buidaoanhvan13101997"                                    //password of wifi ssid
#define DHTPIN 14    // Chân dữ liệu của DHT 11 , với NodeMCU chân D5 GPIO là 14
#define DHTTYPE DHT11   // DHT 11
DHT dht(DHTPIN, DHTTYPE);

String fireStatus = "";                                                     // led status received from firebase
String fanStatus = "";
int led = D3;                                                                // for external led
int fan = D2;
void setup() {
  Serial.begin(9600);
  delay(1000);
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(led, OUTPUT);
  pinMode(fan, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);                                      //try to connect with wifi
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP()); //print local IP address
  dht.begin();
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);                                       // connect to firebase
  Firebase.setString("LED_STATUS", "OFF");                                          //send initial string of led status
  Firebase.setString("FAN_STATUS", "OFF");
}

void loop() {

  float h = dht.readHumidity();
  float t = dht.readTemperature();  // Đọc nhiệt độ theo độ C
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  Serial.print("Nhietdo: ");
  Serial.print(t);
  Serial.print("*C");
  Serial.print("Do am: ");
  Serial.print(h);
  Serial.println("%");
  Firebase.setFloat ("NHIET_DO", t);
  Firebase.setFloat ("DO_AM", h);

  
  //==========led============================================
  fireStatus = Firebase.getString("LED_STATUS");                                      // get ld status input from firebase
  if (fireStatus == "1") {                                                          // compare the input of led status received from firebase
    Serial.println("Led Turned ON");                                                                          // make bultin led ON
    digitalWrite(led, HIGH);                                                         // make external led ON
  }
  else if (fireStatus == "0") {                                                  // compare the input of led status received from firebase
    Serial.println("Led Turned OFF");                                      // make bultin led OFF
    digitalWrite(led, LOW);                                                         // make external led OFF
  }
  else {
    Serial.println("Wrong Credential! Please send ON/OFF");
  }
  //========================================================

  //==========fan============================================
  fanStatus = Firebase.getString("FAN_STATUS");                                      // get ld status input from firebase
  if (fanStatus == "1") {                                                          // compare the input of led status received from firebase
    Serial.println("Fan Turned ON");                                                                           // make bultin led ON
    digitalWrite(fan, HIGH);                                                         // make external led ON
  }
  else if (fanStatus == "0") {                                                  // compare the input of led status received from firebase
    Serial.println("Led Turned OFF");
    digitalWrite(fan, LOW);                                                         // make external led OFF
  }
  else {
    Serial.println("Wrong Credential! Please send ON/OFF");
    //========================================================
  }
}
