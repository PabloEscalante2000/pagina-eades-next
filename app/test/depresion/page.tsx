import BloqueTest from "@/components/BloqueTest"
import testDepresion from "@/public/data/testDepresion.json"

function DepresionTest(){
    return (
        <BloqueTest tipo={"depresión"} test={testDepresion}></BloqueTest>
    )
}

export default DepresionTest