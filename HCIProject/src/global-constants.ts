export interface StoreItem
{
    name: string;
    dept: string;
    description: string;
}

export class GlobalConstants 
{

    // Test 0 variables    
    public static test0_cart: boolean = false; // is True when user has opened the shopping cart

    // Test 1 variables
    public static test1_added: boolean = false; // is True when the user has added a volleyball to the cart

    // Test 2 variables
    public static test2_removed: boolean = false; // is True when the user has removed a volleyball from the cart

    // Test 3 variables
    public static test3_baseball: boolean = false; // is True when the user has added a baseball to the cart
    public static test3_computermouse: boolean = false; // is True when the user has added a computer mouse to the cart
    public static test3_hat: boolean = false; // is True when the user has added a hat to the cart
    public static test3_children: boolean = false; // is True when the user has added a children's book to the cart
    
    public static test0_start: Date;
    public static test1_start: Date;
    public static test2_start: Date;
    public static test3_start: Date;

    public static test0_end: Date;
    public static test1_end: Date;
    public static test2_end: Date;
    public static test3_end: Date;

    public static test0_fin: boolean = false;
    public static test1_fin: boolean = false;
    public static test2_fin: boolean = false;
    public static test3_fin: boolean = false;

    public static test0_active: boolean = false;
    public static test1_active: boolean = false;
    public static test2_active: boolean = false;
    public static test3_active: boolean = false;

    public static test0_total_clicks: number = 0;
    public static test1_total_clicks: number = 0;
    public static test2_total_clicks: number = 0;
    public static test3_total_clicks: number = 0;

    public static test0_on_clicks: number = 0;
    public static test1_on_clicks: number = 0;
    public static test2_on_clicks: number = 0;
    public static test3_on_clicks: number = 0;

    public static isDynamic: boolean = false;
    public static cartItems: StoreItem[] = [];

    public static storeItems: StoreItem[] = [
        {name: "Soccer Ball", dept: "sports", description: "Standard regulation sized soccer ball for adults."},
        {name: "Football", dept: "sports", description: "Standard leather regulation sized football for adults."},
        {name: "Volleyball", dept: "sports", description: "Standard issue volleyball for all ages."},
        {name: "Baskestball", dept: "sports", description: "Standard regulation mens basketball."},
        {name: "Baseball", dept: "sports", description: "Standard regulation baseball."},
        {name: "Football Helment", dept: "sports", description: "Football helment for men. Sizes include S, M, and L."},
        {name: "Soccer Shinguards", dept: "sports", description: "Soccer shinguiards to protect your shins. One size fits all!"},
        {name: "personal computer", dept: "electronics", description: "Computer capable of your everyday needs."},
        {name: "SUSA 27 inch gaming monitor", dept: "electronics", description: "High refresh rate gaming monitor with High Defintion display."},
        {name: "Goggle Alicia", dept: "electronics", description: "Upgrade your home with this smart device! Uses artificial intelligence to answer any question."},
        {name: "Computer Mouse", dept: "electronics", description: "USB computer mouse."},
        {name: "Computer Keyboard", dept: "electronics", description: "USB standard keyboard. QWERTY layout."},
        {name: "MVIDA RTX 3090 Graphics Card", dept: "electronics", description: "Elusive and extremely rare super powerful graphics card. Supports ray tracing and high computing."},
        {name: "jacket", dept: "clothes", description: "Warm comfy uni-sex jacket."},
        {name: "5-Pack Men's Plain White Tee", dept: "clothes", description: "5 pack of comfortable white tee for mens. Comes in S, M, L, XL, and XXL."},
        {name: "Doko Womens Spring Summer Deep V Dress", dept: "clothes", description: "The ruffled dress is chic and graceful.Ruffles, ruffles, ruffles! Showcasing a floral print on a mauve base lightweight fabrication. Designed with a ruffle tiered draped neckline and long balloon sleeves."},
        {name: "Screechers Men's Superior Gains Loafer", dept: "clothes", description: "Screechers is an award-winning global leader in the lifestyle footwear industry that designs, develops, and markets lifestyle footwear that appeals to trend-savvy men, women and children. The company's success stems from it's high quality, diversified, and affordable product line that meets consumers' various lifestyle needs."},
        {name: "Children's Story Book", dept: "books", description: "A children's picture book."},
        {name: "Introduction to Mathematics", dept: "books", description: "Numbers Numbers Numbers, some letters."},
        {name: "Introduction to US History", dept: "books", description: "Amerrrrriiiiica"},
        {name: "Introduction to World History", dept: "books", description: "Discover the rest of the world."},
        {name: "Introduction to Italian", dept: "books", description: "Enjoy the best cuisuine in the world while learning the culture and language."},
        {name: "Introduction to English", dept: "books", description: "You probably don't need this book if you can read this."},
        {name: "Introduction to Spanish", dept: "books", description: "Want to stop ordering incorrectly, learn Spanish now."},
        {name: "Introduction to French", dept: "books", description: "Don't be a tourist, travel to Paris in style."},
        {name: "Introduction to Chinese", dept: "books", description: "Join others in the largest spoken language in the world."},
        {name: "Introduction to Dutch", dept: "books", description: "Want to learn Dutch? Start by learning popular phrases!"},
        {name: "Introduction to Turkish", dept: "books", description: "Get started with the Turkish language and culture."},
        {name: "10 Pack of Cotton Socks for Men", dept: "clothes", description: "10-pack cotton socks for men. Cover your toes with these super comfortable socks."},
        {name: "hat", dept: "clothes", description: "Warm fuzzy hat."}
    ];
}