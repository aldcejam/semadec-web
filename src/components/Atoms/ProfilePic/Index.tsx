import Image from "next/image"
import { StyleProfilePic } from "./Styled"

const ProfilePic = () => {
    return (
        <StyleProfilePic className="profile-pic-size">
            <div>
                <Image src={'/profile-image.jpg'} layout='fill' />
            </div>
        </StyleProfilePic>
    )
}

export default ProfilePic