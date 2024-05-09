import Chat from "./cmps/chat/Chat"
import Detail from "./cmps/detail/Detail"
import List from "./cmps/list/List"

const App = () => {
  return (
    <div className="backdrop-blur-lg w-[90vw] h-[90vh] bg-myBlue rounded-xl backdrop-saturate-150 border border-myWhite flex">
      <List></List>
      <Chat></Chat>
      <Detail></Detail>
    </div>
  )
}
export default App
