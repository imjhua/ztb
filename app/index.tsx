import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

const URI =
  'https://idlt-apps.vercel.app/%EB%9E%9C%EB%8D%A4%EB%8B%AC%EB%A6%AC%EA%B8%B0'
  
const Page = () => {
  return (
    <WebView source={{ uri: URI }} allowsBackForwardNavigationGestures />
  )
}

export default Page

const styles = StyleSheet.create({})
