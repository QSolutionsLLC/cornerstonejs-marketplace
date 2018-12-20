class Product {
  constructor(){
    // 590x300
    this.id = 0
    this.imageUrl = ""
    this.tags = []
    this.name = ""
    this.slug = ""
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

  toJson() {
    let {id, imageUrl, tags, name, slug, primaryCategory, categories, author, lastUpdatedDate, price, licenses, description, isFree, isVerified, hasFutureUpdates, includedMonthsSupport, authorId} = this;
    return {id, imageUrl, tags, name, slug, primaryCategory, categories, author, lastUpdatedDate, price, licenses, description, isFree, isVerified, hasFutureUpdates, includedMonthsSupport, authorId};
  }
}

export default Product