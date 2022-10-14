import { CircleShape } from "./shapes/Circle-Shape"
import { CrossShape, CrossWhiteShape } from "./shapes/Cross-Shape"
import { DelineLineBottomShape, DelineLineTopShape } from "./shapes/DelineLineBottom-Shape"
import { LineShape, LineShapeWhite } from "./shapes/Line-Shape-white"
import { MinBals } from "./shapes/MinBals-Shape"
import { RectangleShape } from "./shapes/Rectangle-Shape"
import { StyledBackgroundPage, Circle1Cls9, Circle2Cls9, Circle3Cls9, MiniBalsTopCls3, MiniBalsBottomCls3, Cross1Cls5, DelineLineBottomCls7,Line2Cls11, Line3Cls12, Line6Cls11, Line7Cls11, RectangleTopCls4, RectangleBottomCls4, WaveBottomCls1, WaveBottomCls2, WaveTopCls1, WaveTopCls2, ContainerBackgroundPage, Cross2Cls5, DelineLineTopCls7, Cross1Cls6, Cross2Cls6, StarBall1, StarBall2, StarBall3, StarBall4, StarBall5 } from "./Styled"

const DefaultBackground = () => {
    return (
        <ContainerBackgroundPage>
            <StyledBackgroundPage>
                <WaveTopCls1>
                    <svg viewBox="0 0 478.32 176.55">
                        <g id="Camada_2" data-name="Camada 2">
                            <g id="OBJECTS">
                                <path className="cls-1" d="M0,0V138.5a127.43,127.43,0,0,0,34.36,23.89c32.84,15.54,71.08,17.42,106.62,9.85s68.65-24.07,99.13-43.85c42.43-27.55,81.69-62.25,130.15-76.77,23.72-7.1,49-9.12,71.66-19.07C457,25.94,471.07,14.3,478.32,0Z" />
                            </g>
                        </g>
                    </svg>
                </WaveTopCls1>
                <WaveTopCls2>
                    <svg viewBox="0 0 546.4 221.37">
                        <g id="Camada_2" data-name="Camada 2">
                            <g id="OBJECTS">
                                <path className="cls-2" d="M0,0V219c30.26,4.33,61.58,2.67,91.54-3.7C142,204.51,189,181.06,232.33,153c60.27-39.12,116-88.41,184.87-109C450.88,33.84,486.78,31,519,16.84A118.46,118.46,0,0,0,546.4,0Z" />
                            </g>
                        </g>
                    </svg>
                </WaveTopCls2>
                <WaveBottomCls1>
                    <svg viewBox="0 0 561.51 227.19">
                        <g id="Camada_2" data-name="Camada 2"><g id="OBJECTS">
                            <path className="cls-1" d="M561.51,1A302.93,302.93,0,0,0,473.35,6.9C416.32,19,363.2,45.53,314.29,77.28c-68.09,44.21-131.1,99.89-208.87,123.19C70.67,210.88,33.83,214.48,0,227.19H561.51Z" />
                        </g>
                        </g>
                    </svg>
                </WaveBottomCls1>
                <WaveBottomCls2>
                    <svg viewBox="0 0 612.79 271.11">
                        <g id="Camada_2" data-name="Camada 2">
                            <g id="OBJECTS">
                                <path className="cls-2" d="M612.79,0A375.67,375.67,0,0,0,570,6.56c-67.2,14.3-129.79,45.52-187.41,82.92-80.22,52.08-154.45,117.69-246.08,145.14C91.63,248,43.84,251.85,1,270.67l-1,.44H612.79Z" />
                            </g>
                        </g>
                    </svg>
                </WaveBottomCls2>
                <MiniBalsTopCls3>
                    <MinBals />
                </MiniBalsTopCls3>
                <MiniBalsBottomCls3>
                    <MinBals />
                </MiniBalsBottomCls3>
                <RectangleTopCls4>
                    <RectangleShape />
                </RectangleTopCls4>
                <RectangleBottomCls4>
                    <RectangleShape />
                </RectangleBottomCls4>
                <Circle1Cls9>
                    <CircleShape />
                </Circle1Cls9>
                <Circle2Cls9 className="cls-9">
                    <CircleShape />
                </Circle2Cls9>
                <Circle3Cls9>
                    <CircleShape />
                </Circle3Cls9>
                <DelineLineBottomCls7>
                    <DelineLineBottomShape />
                </DelineLineBottomCls7>
                <DelineLineTopCls7>
                    <DelineLineTopShape/>
                </DelineLineTopCls7>
                <Line2Cls11>
                    <LineShapeWhite />
                </Line2Cls11>
                <Line3Cls12>
                    <LineShape />
                </Line3Cls12>
                <Line6Cls11>
                    <LineShapeWhite />
                </Line6Cls11>
                <Line7Cls11>
                    <LineShapeWhite />
                </Line7Cls11>
                <Cross1Cls5>
                    <CrossShape />
                </Cross1Cls5>
                <Cross2Cls5>
                    <CrossShape />
                </Cross2Cls5>
                <Cross1Cls6>
                    <CrossWhiteShape/>
                </Cross1Cls6>
                <Cross2Cls6>
                    <CrossWhiteShape/>
                </Cross2Cls6>
                <StarBall1 className="Starball"/>
                <StarBall2 className="Starball"/>
                <StarBall3 className="Starball"/>
                <StarBall4 className="Starball"/>
                <StarBall5 className="Starball"/>

            </StyledBackgroundPage>
        </ContainerBackgroundPage>

    )
}

export default DefaultBackground
