class Product {
    constructor(){
        // 590x300
        this.id = 0
        this.imageUrl = ""
        this.tags = []
        this.name = ""
        this.primaryCategory = ""
        this.categories = []
        this.author = ""
        this.lastUpdatedDate = ""
        this.price = ""
        this.licenses = []
        this.description = ""

        //
        this.isFree = false;
        this.isVerified = false;
        this.hasFutureUpdates = false;
        this.includedMonthsSupport = 0;
        
        this.authorId = 0
    }
}

export default Product