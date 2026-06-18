import BloqueTest from "@/components/BloqueTest"
import testTLP from "@/public/data/testTLP.json"

function TLPTest(){
    return (
        <BloqueTest tipo={"tlp"} test={testTLP}></BloqueTest>
    )
}

export default TLPTest