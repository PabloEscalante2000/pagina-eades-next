import BloqueTest from "@/components/BloqueTest"
import testTLP from "@/public/data/testTLP.json"

function TLPTest(){
    return (
        <BloqueTest tipo={"ansiedad"} test={testTLP}></BloqueTest>        
    )
}

export default TLPTest