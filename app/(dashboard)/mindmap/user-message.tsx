const UserMessage: React.FC<{
  message: string
}> = ({ message }) => {
  return (<div className="flex flex-row px-2 py-4 sm:px-4">
    <img
      className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
      src="https://dummyimage.com/256x256/363536/ffffff&text=U"
    />

    <div className="flex max-w-3xl items-center">
      <p>{message}</p>
    </div>
  </div>);
}

export default UserMessage;