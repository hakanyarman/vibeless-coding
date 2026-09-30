
class Chef {
    name: string
    otherChefFields: object
    constructor(name: string, otherChefFields: object){
        this.name = name
        this.otherChefFields = otherChefFields
    }
    async cook(meal: Meal){
        console.log(`${this.name} is cooking ${meal.name}`)

        const mealFinishedMessage = new Promise<string>((resolve, reject)=>{
            setTimeout(()=>{
                resolve(`the ${meal.name} is ready`)
            }, meal.timeToCook*1000)
        })

        const res = await mealFinishedMessage
        console.log(res)
    }
}

class Meal {
    name: string
    timeToCook: number
    constructor(name: string, timeToCook: number){
        this.name = name
        this.timeToCook = timeToCook
    }
}

const hakan = new Chef("hakan", {otherField1: "otherField1", otherField2: "otherField2"})
const pasta = new Meal("spagetti", 2)
hakan.cook(pasta)