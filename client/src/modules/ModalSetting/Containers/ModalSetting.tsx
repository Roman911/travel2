import React, {useState} from "react"
import { connect } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import { Modal } from "../Components/Modal"
import { modalActions } from "../../../redax/actions"
import { addLocationsUserListMutation } from './mutations'
import { User } from "../../../types/user"

type ModalSettingProps = {
  mapInformation?: boolean
  showModal: (arg0: string) => void
  user: User
}

const ModalSetting: React.FC<ModalSettingProps> = ({ mapInformation, user, showModal }) => {
  const { data } = user
  const [showModalSetting, setShowModalSetting] = useState(false)
  const [closeModalSetting, setCloseModalSetting] = useState(false)
  const [addLocationsUserList] = useMutation(addLocationsUserListMutation)
  const handleClick = () => {
    if (data) {
      if (showModalSetting) {
        setCloseModalSetting(true)
        setTimeout(() => {
          setCloseModalSetting(false)
          setShowModalSetting(false)
        }, 400)
      } else {
        setShowModalSetting(true)
      }
    } else {
      showModal('Для виконання данної дії потрібно авторизоватись')
    }
  }
  const addLocationMyList = (action: string) => {
    handleClick()
    addLocationsUserList({
      variables: {
        userId: data.userId,
        locationId: '5e8dd38b3e3a8b4608faf12d',
        action: action
      }
    }).then(data => {
      if (data) {
        showModal('Локація успішно добавлена у ваш список')
      }
    })
  }

  return <Modal mapInformation={ mapInformation } handleClick={ handleClick } showModalSetting={ showModalSetting } closeModalSetting={ closeModalSetting } addLocationMyList={ addLocationMyList } />
}

const mapStateToProps = (state: { user: User }) => ({
  user: state.user
})

export default connect(mapStateToProps, { ...modalActions })(ModalSetting)