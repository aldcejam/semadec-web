import Identity from "../../../molecules/ViewProfile/IdentityData/Index"
import ProfilePic from "../../../atoms/ProfilePic/Index"
import Secondarydata from "../../../molecules/ViewProfile/Secondarydata/Index"
import SocialMidias from "../../../molecules/ViewProfile/SocialMidias/Index"
import { StyledContent } from "./Styled"

const Content = () => {

    const userDataBase = {
        name: 'aldcejam Paulino Morais Junior',
        matriculation: 20191064010004,
        instagram: '@ald',
        twitter: '@juniorAldcejam',
        academicEmail: 'aldcejam.j@escolar.ifrn.edu.br',
        personalcEmail: 'aldcejamj923@gmail.com',
        bio: "fault with a man who chooses to enjoy a pleasure that has no annoying consequences",
        course: "Informática"
    }
    return (
        <StyledContent>
            <div className="content__profile-pic">
                <ProfilePic />
            </div>
            <Identity
                course={userDataBase.course}
                matriculation={userDataBase.matriculation}
                name={userDataBase.name}
                bio={userDataBase.bio}
            />
            <SocialMidias
                instagram={userDataBase.instagram}
                twitter={userDataBase.twitter}
            />
            <div className="content--divider-line" />
            <Secondarydata
                academicEmail={userDataBase.academicEmail}
                personalcEmail={userDataBase.personalcEmail}
            />
        </StyledContent>
    )
}

export default Content