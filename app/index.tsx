import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { WebView } from 'react-native-webview'

const URI =
  'https://idlt-apps.vercel.app/%EB%A7%A4%EC%9D%BC%EC%98%81%EC%96%B4%EB%AC%B8%EC%9E%A5'
  
const Page = () => {
  return (
    <WebView source={{ uri: URI }} allowsBackForwardNavigationGestures />
  )
}

export default Page

const styles = StyleSheet.create({})
