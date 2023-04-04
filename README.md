# DemoNavigator
 Build stack and drawer navigator

# cài đạt môi trường
https://reactnative.dev/docs/environment-setup

cài đặt chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

cài đặt node, jdk
choco install -y nodejs-lts microsoft-openjdk11

cài đặt android studio và setup sdk

# tạo project

npx react-native@latest init DemoNavigator
cd DemoNavigator
npx react-native start


# cài đặt navigation
https://reactnavigation.org/docs/getting-started
	- npm install @react-navigation/native
	- Installing dependencies into a bare React Native project
		+ npm install react-native-screens react-native-safe-area-context
	- cài đặt drawer
		+ npm install @react-navigation/drawer
		+ npm install react-native-gesture-handler react-native-reanimated
	- cài đặt stack
		+ npm install @react-navigation/stack
		+ npm install react-native-gesture-handler
		+ npm install @react-native-masked-view/masked-view
	- sửa file MainActivity.java 
		+  @Override
		  protected void onCreate(Bundle savedInstanceState) {
			super.onCreate(null);
		  }
		+ import android.os.Bundle;
		
	- sửa file babel
		+ plugins: ['react-native-reanimated/plugin'],