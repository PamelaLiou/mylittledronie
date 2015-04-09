int sensorPin = A0;
//int ledPin = 13;

void setup() {
  Serial.begin(9600);
 // pinMode(ledPin,OUTPUT);
}

void loop() {
  Serial.println( analogRead(sensorPin));
  
//  if(Serial.available()>0){
//    char inByte;
//    while(Serial.available()>0){
//      inByte = Serial.read();
//    }
//    
//    if(inByte=='1'){
//      digitalWrite(ledPin,H99 
//    }
//    else{
//      digitalWrite(ledPin,LOW);
//    }
//  }
  
  delay(30);   
}
