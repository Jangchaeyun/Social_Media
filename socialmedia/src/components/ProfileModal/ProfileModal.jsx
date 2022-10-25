import '../../pages/Auth/Auth.css'
import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
    overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
    >
        <form className="infoForm">
            <h3>나의 정보</h3>
            
            <div>
                <input
                    type="text"
                    className="infoInput"
                    name="FirstName"
                    placeholder="First Name"
                />
                <input
                    type="text"
                    className="infoInput"
                    name="LastName"
                    placeholder="Last Name"
                />
            </div>

            <div>
                <input
                        type="text"
                        className="infoInput"
                        name="worksAT"
                        placeholder="학교"
                    />
            </div>

            <div>
                <input
                    type="text"
                    className="infoInput"
                    name="livesIN"
                    placeholder="사는 곳"
                />
                <input
                    type="text"
                    className="infoInput"
                    name="Country"
                    placeholder="도시"
                />
            </div>
            <div>
                <input type="text" className='infoInput' placeholder='관계 상태'/>
            </div>
            
            <div>
                프로필 이미지
                <input type="file" name='profileImg'/>
                배경 이미지
                <input type="file" name='coverImg'/>
            </div>

            <button className="button">
                업데이트
            </button>
        </form>
    </Modal>
  );
}

export default ProfileModal