import BloqueTest from "@/components/BloqueTest"
import testAnsiedad from "@/public/data/testAnsiedad.json"

function AnsiedadTest(){
    return (
        <BloqueTest tipo={"ansiedad"} test={testAnsiedad}></BloqueTest>        
    )
}

export default AnsiedadTest