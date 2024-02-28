class Message {
    text: string;
    user: string;
 
    constructor(text: string, user: string) {
            this.text = text;
            this.user = user;
    }
 
    getSalary() : number {
        return 10000;
    }
}
 
function getAllMessages():Array<Message>{
    let result: Array<Message> = [
        new Message("Meow", "Cat1"),
        new Message("Miw", "Cat2"),
        new Message("Meow meow", "Cat3")
    ]
 
    return result;
}
 
export{
    Message ,
    getAllMessages
}