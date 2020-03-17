export const modalError = ( setIsModal, setMessage, setClosedModal, text)  => {
  setIsModal(true);
  setMessage(text);
  setTimeout(() => {
    setClosedModal(true);
    setTimeout(() => {
      setIsModal( false );
      setClosedModal( false )
    }, 1000)
  }, 3000)
};

export const handleChangeModal = ( setClosedModal, setIsModal ) => {
  setClosedModal( true );
  setTimeout(() => {
    setIsModal( false );
    setClosedModal( false )
  }, 1000)
};