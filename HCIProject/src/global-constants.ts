export class GlobalConstants {
    public static count: number = 0;

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

    public static test0_cart: boolean = false;

    public static test0_total_clicks: number = 0;
    public static test1_total_clicks: number = 0;
    public static test2_total_clicks: number = 0;
    public static test3_total_clicks: number = 0;

    public static test0_on_clicks: number = 0;
    public static test1_on_clicks: number = 0;
    public static test2_on_clicks: number = 0;
    public static test3_on_clicks: number = 0;


    public static items = new Map([
        [ "soccer_ball", {name: "Soccer Ball", dept: "sports", description: "Standard regulation sized soccer ball for adults."}],
        [ "foot_ball", {name: "Football", dept: "sports", description: "Standard leather regulation sized football for adults."}],
        [ "volleyball", {name: "Volleyball", dept: "sports", description: "Standard issue volleyball for all ages."}],
        [ "basketball", {name: "Baskestball", dept: "sports", description: "Standard regulation mens basketball."}],
        [ "baseball", {name: "Baseball", dept: "sports", description: "Standard regulation baseball."}],
        [ "football_helmet", {name: "Football Helment", dept: "sports", description: "Football helment for men. Sizes include S, M, and L."}],
        [ "shin_guards", {name: "Soccer Shinguards", dept: "sports", description: "Soccer shinguiards to protect your shins. One size fits all!"}],
        [ "personal_computer", {name: "personal computer", dept: "electronics", description: "Computer capable of your everyday needs."}],
        [ "monitor", {name: "SUSA 27 inch gaming monitor", dept: "electronics", description: "High refresh rate gaming monitor with High Defintion display."}],
        [ "smartdevice", {name: "Goggle Alicia", dept: "electronics", description: "Upgrade your home with this smart device! Uses artificial intelligence to answer any question."}],
        [ "computer_mouse", {name: "Computer Mouse", dept: "electronics", description: "USB computer mouse."}],
        [ "computer_keyboard", {name: "Computer Keyboard", dept: "electronics", description: "USB standard keyboard. QWERTY layout."}],
        [ "graphics_card", {name: "MVIDA RTX 3090 Graphics Card", dept: "electronics", description: "Elusive and extremely rare super powerful graphics card. Supports ray tracing and high computing."}],
        [ "jacket", {name: "jacket", dept: "clothes", description: "Warm comfy uni-sex jacket."}],
        [ "hat", {name: "hat", dept: "clothes", description: "Warm fuzzy hat."}],
        [ "men_tshirt", {name: "5-Pack Men's Plain White Tee", dept: "clothes", description: "5 pack of comfortable white tee for mens. Comes in S, M, L, XL, and XXL."}],
        [ "women_dress", {name: "Doko Womens Spring Summer Deep V Dress", dept: "clothes", description: "The ruffled dress is chic and graceful.Ruffles, ruffles, ruffles! Showcasing a floral print on a mauve base lightweight fabrication. Designed with a ruffle tiered draped neckline and long balloon sleeves."}],
        [ "mens_shoe", {name: "Screechers Men's Superior Gains Loafer", dept: "clothes", description: "Screechers is an award-winning global leader in the lifestyle footwear industry that designs, develops, and markets lifestyle footwear that appeals to trend-savvy men, women and children. The company's success stems from it's high quality, diversified, and affordable product line that meets consumers' various lifestyle needs."}],
        [ "story_book", {name: "Children's Story Book", dept: "books", description: "A children picture book."}],
        [ "math_textbook", {name: "Introduction to Mathematics", dept: "books", description: ""}],
        [ "us_history_textbook", {name: "Introduction to US History", dept: "books", description: ""}],
        [ "world_history_textbook", {name: "Introduction to World History", dept: "books", description: ""}],
        [ "italian_textbook", {name: "Introduction to Italian", dept: "books", description: ""}],
        [ "english_textbook", {name: "Introduction to English", dept: "books", description: ""}],
        [ "spanish_textbook", {name: "Introduction to Spanish", dept: "books", description: ""}],
        [ "german_textbook", {name: "Introduction to Spanish", dept: "books", description: ""}],
        [ "french_textbook", {name: "Introduction to French", dept: "books", description: ""}],
        [ "chinese_textbook", {name: "Introduction to Chinese", dept: "books", description: ""}],
        [ "dutch_textbook", {name: "Introduction to Dutch", dept: "books", description: ""}],
        [ "turkish_textbook", {name: "Introduction to Turkish", dept: "books", description: ""}],
        [ "mens_socks", {name: "10 Pack of Cotton Socks for Men", dept: "clothes", description: ""}]
    ]);

    public static cart_items: any = [];
}