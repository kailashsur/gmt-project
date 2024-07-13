
import LoadingIcon from "../../assets/LIcon.svg"

export default function Loader() {
    return (
        <div className=" flex justify-center items-center h-screen bg-[#FE8C00]">
            <img src={LoadingIcon} alt="loader" width={50} height={50} />
        </div>

    )
}