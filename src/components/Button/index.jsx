import { ButtonRed, ButtonWhite } from "./styles"

function Button({ children, red, ...rest }){

    return (
        <>
            { red ? (
            <ButtonRed {...rest}>{children}</ButtonRed>
            ) : ( 
            <ButtonWhite {...rest}>{children}</ButtonWhite>
            )}
        </>
    )

}


export default Button