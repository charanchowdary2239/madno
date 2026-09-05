// ============================================
// MADNO MENU DATA
// CHANGE MENU PRICES HERE
// ============================================

const MADNO_MENU_DATA = [
    // --------------------------------------------
    // SUNDAES
    // --------------------------------------------
    {
        name: "Classic Chocolate Sundae",
        category: "SUNDAES",
        description: "Double scoop vanilla & chocolate ice cream, rich chocolate drizzle, roasted peanuts and wafer.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
        badge: "Classic"
    },
    {
        name: "Brownie Blast Sundae",
        category: "SUNDAES",
        description: "Fudge chocolate brownie layered with creamy vanilla ice cream, hot chocolate sauce and nuts.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Cookie Crunch Sundae",
        category: "SUNDAES",
        description: "Chunky chocolate chip cookie crumbles, cookies & cream ice cream, caramel and dark fudge.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Oreo Madness Sundae",
        category: "SUNDAES",
        description: "Crushed Oreo cookies, vanilla ice cream, creamy whipped cream, and rich melted chocolate.",
        price: "₹189",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Choco Fudge Sundae",
        category: "SUNDAES",
        description: "Decadent gooey warm fudge sauce cascading over dark chocolate scoops and crispy roasted cashews.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80",
        badge: "Signature"
    },
    {
        name: "KitKat Crunch Sundae",
        category: "SUNDAES",
        description: "Crispy KitKat wafer bars, velvety milk chocolate gelato, chocolate swirls, and sprinkles.",
        price: "₹189",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Nutella Dream Sundae",
        category: "SUNDAES",
        description: "Generous spoonfuls of Italian hazelnut Nutella over vanilla bean gelato and toasted hazelnuts.",
        price: "₹219",
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=700&q=80",
        badge: "Signature"
    },
    {
        name: "Ferrero Fantasy Sundae",
        category: "SUNDAES",
        description: "Ferrero Rocher praline, hazelnut ganache, Belgian chocolate ice cream, and gold dust wafer.",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Fruit Fiesta Sundae",
        category: "SUNDAES",
        description: "Seasonal fresh exotic fruits, strawberry & mango ice creams, honey drizzle, and almond flakes.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Madno Special Sundae",
        category: "SUNDAES",
        description: "The crown jewel: brownie bites, trio of premium scoops, choco crisps, Oreo, nuts & chocolate fudge.",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=700&q=80",
        badge: "Madno Special"
    },

    // --------------------------------------------
    // ICE CREAM
    // --------------------------------------------
    {
        name: "Vanilla Ice Cream",
        category: "ICE CREAM",
        description: "Smooth, aromatic pure Bourbon vanilla bean scoop crafted for authentic simplicity.",
        price: "₹99",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Chocolate Ice Cream",
        category: "ICE CREAM",
        description: "Intense Belgian dark chocolate ice cream with silky smooth texture.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Strawberry Ice Cream",
        category: "ICE CREAM",
        description: "Sweet and tangy strawberry ice cream prepared with real fruit berries.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1560008511-11c63416e52d?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Butterscotch Ice Cream",
        category: "ICE CREAM",
        description: "Creamy golden butterscotch loaded with crunchy caramelized praline nuggets.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Cookie & Cream Ice Cream",
        category: "ICE CREAM",
        description: "Rich sweet cream blended generously with chocolate sandwich cookie crumbs.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Black Currant Ice Cream",
        category: "ICE CREAM",
        description: "Tart and fruity black currant scoops dotted with delicious dried berries.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Mango Ice Cream",
        category: "ICE CREAM",
        description: "Sun-ripened Alphonso mango pulp infused in velvety creamy goodness.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Chocolate Chip Ice Cream",
        category: "ICE CREAM",
        description: "Creamy chocolate base studded with dark crispy chocolate chips in every bite.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Pista Ice Cream",
        category: "ICE CREAM",
        description: "Traditional royal pistachio infused ice cream crowned with chopped roasted nuts.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1588710929895-6ef7aa6a8ca8?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Two Scoop Special",
        category: "ICE CREAM",
        description: "Choose any two of your favorite scoops paired with crispy waffle cones or cups.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },
    {
        name: "Three Scoop Special",
        category: "ICE CREAM",
        description: "A delightful trio of scoops of your choice topped with fruit syrups and sprinkles.",
        price: "₹219",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80",
        badge: "Value"
    },

    // --------------------------------------------
    // THICK SHAKES
    // --------------------------------------------
    {
        name: "Classic Chocolate Shake",
        category: "THICK SHAKES",
        description: "Thick, creamy blend of rich chocolate ice cream and chilled milk topped with fudge.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Oreo Thick Shake",
        category: "THICK SHAKES",
        description: "Crushed Oreo biscuits blended to thick perfection with dark cocoa and sweet cream.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Brownie Thick Shake",
        category: "THICK SHAKES",
        description: "Real freshly baked chocolate brownie blended into a rich, spoon-thick shake.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80",
        badge: "Signature"
    },
    {
        name: "KitKat Thick Shake",
        category: "THICK SHAKES",
        description: "Crisp KitKat chocolate bars blended into a decadent, velvety thick milkshake.",
        price: "₹189",
        image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Chocolate Hazelnut Shake",
        category: "THICK SHAKES",
        description: "Rich Italian hazelnut paste, roasted nuts, and deep milk chocolate gelato.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Strawberry Thick Shake",
        category: "THICK SHAKES",
        description: "Lush strawberry cream shake topped with berry compote and whipped cream.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Vanilla Thick Shake",
        category: "THICK SHAKES",
        description: "Pure vanilla bean ice cream blended ultra-thick for true classic lovers.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Butterscotch Thick Shake",
        category: "THICK SHAKES",
        description: "Velvety butterscotch shake filled with caramelized crunch bits.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Mango Thick Shake",
        category: "THICK SHAKES",
        description: "Luscious mango pulp blended with rich vanilla cream and garnished with nuts.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Cookie & Cream Thick Shake",
        category: "THICK SHAKES",
        description: "Decadent cookies and sweet dairy cream blended into a spoonable dessert shake.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Ferrero Chocolate Shake",
        category: "THICK SHAKES",
        description: "Premium Ferrero Rocher pralines blended with dark chocolate and hazelnut.",
        price: "₹229",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Madno Signature Thick Shake",
        category: "THICK SHAKES",
        description: "Our proprietary recipe: decadent Belgian cocoa, chocolate waffle crisps, whipped cream & nuts.",
        price: "₹229",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
        badge: "Madno Special"
    },

    // --------------------------------------------
    // MILKSHAKES
    // --------------------------------------------
    {
        name: "Vanilla Milkshake",
        category: "MILKSHAKES",
        description: "Light, chilled, and refreshing vanilla shake with smooth dairy milk.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Chocolate Milkshake",
        category: "MILKSHAKES",
        description: "Chilled milk combined with cocoa syrup for that everyday chocolate satisfaction.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Strawberry Milkshake",
        category: "MILKSHAKES",
        description: "Refreshing pink berry shake crafted with fragrant strawberries.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Butterscotch Milkshake",
        category: "MILKSHAKES",
        description: "Smooth and sweet butterscotch syrup shaken with ice-cold fresh milk.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Mango Milkshake",
        category: "MILKSHAKES",
        description: "Tropical Alphonso mango goodness chilled and blended silky smooth.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Oreo Milkshake",
        category: "MILKSHAKES",
        description: "Delicious crumbly Oreo infusion in chilled creamy milk.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Banana Milkshake",
        category: "MILKSHAKES",
        description: "Fresh ripe bananas whipped into rich creamy milk with a touch of honey.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Coffee Milkshake",
        category: "MILKSHAKES",
        description: "Fresh espresso notes shaken with chilled milk and a scoop of vanilla.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },

    // --------------------------------------------
    // WAFFLES
    // --------------------------------------------
    {
        name: "Classic Belgian Waffle",
        category: "WAFFLES",
        description: "Golden crispy Belgian waffle served with warm maple syrup and melted butter.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80",
        badge: "Classic"
    },
    {
        name: "Chocolate Waffle",
        category: "WAFFLES",
        description: "Crispy hot waffle drizzled generously with molten dark and milk chocolate sauces.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Nutella Waffle",
        category: "WAFFLES",
        description: "Crispy golden pockets filled with rich hazelnut Nutella spread and toasted nuts.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=700&q=80",
        badge: "Signature"
    },
    {
        name: "Oreo Waffle",
        category: "WAFFLES",
        description: "Hot waffle smothered in white chocolate sauce and crushed crunchy Oreo crumbles.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Brownie Waffle",
        category: "WAFFLES",
        description: "Crispy waffle base topped with warm chocolate brownie chunks and hot fudge.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "KitKat Waffle",
        category: "WAFFLES",
        description: "Loaded with crunchy KitKat bars, chocolate ganache, and chocolate shavings.",
        price: "₹189",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Strawberry Waffle",
        category: "WAFFLES",
        description: "Fresh strawberry slices, sweet berry glaze, and light whipped cream over crisp waffle.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Banana Chocolate Waffle",
        category: "WAFFLES",
        description: "Freshly sliced bananas layered with dark Belgian chocolate sauce and cinnamon.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Chocolate Overload Waffle",
        category: "WAFFLES",
        description: "Triple chocolate indulgence: white, milk, and dark chocolate drizzles with chocolate chips.",
        price: "₹219",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Madno Special Waffle",
        category: "WAFFLES",
        description: "Nutella, molten dark chocolate, crushed Oreos, nuts, and a scoop of vanilla bean ice cream.",
        price: "₹229",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80",
        badge: "Madno Special"
    },

    // --------------------------------------------
    // PANCAKES
    // --------------------------------------------
    {
        name: "Classic Pancakes",
        category: "PANCAKES",
        description: "Stack of fluffy, golden-brown American pancakes served with butter and maple syrup.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
        badge: "Classic"
    },
    {
        name: "Chocolate Pancakes",
        category: "PANCAKES",
        description: "Warm fluffy pancakes layered with rich warm chocolate sauce and dusted powdered sugar.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Nutella Pancakes",
        category: "PANCAKES",
        description: "Stack of fluffy pancakes smothered with warm Nutella spread and roasted hazelnut crumbs.",
        price: "₹189",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Oreo Pancakes",
        category: "PANCAKES",
        description: "Pancake stack layered with sweet cream filling, crushed Oreo cookies, and chocolate drizzle.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Banana Chocolate Pancakes",
        category: "PANCAKES",
        description: "Caramelized banana slices paired with Belgian chocolate ganache over fluffy pancakes.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Strawberry Pancakes",
        category: "PANCAKES",
        description: "Fresh strawberry compote, sliced berries, and whipped cream over light pancakes.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Chocolate Overload Pancakes",
        category: "PANCAKES",
        description: "Fluffy chocolate batter pancakes topped with dark & white chocolate sauces and chocochips.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },

    // --------------------------------------------
    // BROWNIES
    // --------------------------------------------
    {
        name: "Classic Chocolate Brownie",
        category: "BROWNIES",
        description: "Moist, dense, fudgy chocolate brownie with a delightfully crackly crust.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Hot Chocolate Brownie",
        category: "BROWNIES",
        description: "Warmed rich brownie drenched in bubbling hot chocolate sauce.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },
    {
        name: "Brownie With Ice Cream",
        category: "BROWNIES",
        description: "The timeless match: warm chocolate fudge brownie paired with a cold scoop of vanilla ice cream.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Oreo Brownie",
        category: "BROWNIES",
        description: "Chocolate brownie baked with whole Oreo cookies and topped with white chocolate drizzle.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Nutella Brownie",
        category: "BROWNIES",
        description: "Warm brownie stuffed and topped with rich Nutella hazelnut spread.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=700&q=80",
        badge: "Signature"
    },
    {
        name: "Brownie Sizzler",
        category: "BROWNIES",
        description: "Served on a smoking sizzler plate with sizzling melted chocolate and a vanilla scoop.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Madno Brownie Special",
        category: "BROWNIES",
        description: "Double layered warm brownie with roasted nuts, Nutella drizzle, and double ice cream scoops.",
        price: "₹229",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        badge: "Madno Special"
    },

    // --------------------------------------------
    // CAKES & DESSERTS
    // --------------------------------------------
    {
        name: "Chocolate Truffle Cake",
        category: "CAKES & DESSERTS",
        description: "Decadent dark chocolate sponge layered with silky smooth chocolate truffle ganache.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Black Forest Cake",
        category: "CAKES & DESSERTS",
        description: "Layers of chocolate sponge, tart cherries, whipped vanilla cream, and chocolate flakes.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Red Velvet Cake",
        category: "CAKES & DESSERTS",
        description: "Classic scarlet velvet sponge paired with luscious cream cheese frosting.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Cheesecake",
        category: "CAKES & DESSERTS",
        description: "Velvety New York style cheesecake with a buttery graham biscuit crust and berry compote.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80",
        badge: "Signature"
    },
    {
        name: "Chocolate Mousse",
        category: "CAKES & DESSERTS",
        description: "Light, airy, melt-in-the-mouth Belgian dark chocolate whipped mousse cup.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Brownie Cake",
        category: "CAKES & DESSERTS",
        description: "Rich cake slice merging the dense chewiness of brownies with fluffy chocolate cake.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Chocolate Lava Cake",
        category: "CAKES & DESSERTS",
        description: "Warm miniature chocolate cake with a molten center of liquid chocolate.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1617305855058-336d24456869?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Molten Chocolate Dessert",
        category: "CAKES & DESSERTS",
        description: "Warm gooey molten chocolate pudding served with a scoop of vanilla ice cream.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Fruit Cream",
        category: "CAKES & DESSERTS",
        description: "Fresh diced seasonal fruits tossed gently in sweetened thick whipped dairy cream.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Dessert Platter",
        category: "CAKES & DESSERTS",
        description: "The celebration platter: brownie bites, mini waffle quarters, cheesecake slice, and dual scoops.",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
        badge: "Signature"
    },

    // --------------------------------------------
    // COFFEE
    // --------------------------------------------
    {
        name: "Espresso",
        category: "COFFEE",
        description: "A bold, concentrated shot of pure freshly brewed Arabica coffee beans.",
        price: "₹89",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Americano",
        category: "COFFEE",
        description: "Rich espresso diluted with hot water for a smooth, classic deep coffee profile.",
        price: "₹99",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Cappuccino",
        category: "COFFEE",
        description: "Equal parts rich espresso, steamed milk, and velvety milk foam dusted with cocoa.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Cafe Latte",
        category: "COFFEE",
        description: "Mild, creamy espresso balanced with smooth steamed milk and subtle latte art.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Cafe Mocha",
        category: "COFFEE",
        description: "Delicious union of dark chocolate syrup, freshly brewed espresso, and steamed milk.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },
    {
        name: "Cold Coffee",
        category: "COFFEE",
        description: "Our classic chilled coffee blended with milk, ice, and sweet vanilla ice cream.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Iced Latte",
        category: "COFFEE",
        description: "Bold espresso poured over ice and fresh cold milk for crisp coffee refreshment.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Iced Mocha",
        category: "COFFEE",
        description: "Chilled espresso and rich chocolate sauce stirred with cold milk and ice.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Frappe",
        category: "COFFEE",
        description: "Frothy whipped iced coffee blended with crushed ice and creamy dairy froth.",
        price: "₹159",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Madno Signature Coffee",
        category: "COFFEE",
        description: "House blend iced coffee infused with roasted hazelnut, dark mocha drizzle and vanilla scoop.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
        badge: "Madno Special"
    },

    // --------------------------------------------
    // COLD BEVERAGES
    // --------------------------------------------
    {
        name: "Classic Cold Coffee",
        category: "COLD BEVERAGES",
        description: "Refreshing, perfectly sweetened chilled coffee shake with creamy foam.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Chocolate Cold Coffee",
        category: "COLD BEVERAGES",
        description: "Cold coffee blended with chocolate syrup and crowned with chocolate sprinkles.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Oreo Cold Coffee",
        category: "COLD BEVERAGES",
        description: "Crunchy Oreo pieces blended right inside chilled creamy cold coffee.",
        price: "₹159",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },
    {
        name: "Iced Tea",
        category: "COLD BEVERAGES",
        description: "Freshly brewed chilled black tea served over ice cubes with lemon mint garnish.",
        price: "₹99",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Lemon Iced Tea",
        category: "COLD BEVERAGES",
        description: "Crisp and invigorating lemon-infused iced tea with fresh mint leaves.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        badge: "Refreshing"
    },
    {
        name: "Peach Iced Tea",
        category: "COLD BEVERAGES",
        description: "Juicy, aromatic peach syrup infused with chilled tea over crushed ice.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Fresh Lime Soda",
        category: "COLD BEVERAGES",
        description: "Zesty fresh lime juice mixed with bubbly sparkling soda (Sweet / Salt / Mixed).",
        price: "₹89",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Blue Lagoon",
        category: "COLD BEVERAGES",
        description: "Vibrant blue curacao, citrus lime, and sparkling soda with ice.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        badge: "Signature"
    },
    {
        name: "Mint Cooler",
        category: "COLD BEVERAGES",
        description: "Crisp garden mint, lemon drops, and soda water for an instant reset.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Fruit Cooler",
        category: "COLD BEVERAGES",
        description: "Refreshing medley of citrus fruits, berry extracts, and chilled sparkling soda.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },

    // --------------------------------------------
    // MOCKTAILS
    // --------------------------------------------
    {
        name: "Blue Lagoon Mocktail",
        category: "MOCKTAILS",
        description: "Electric blue curacao flavor infused with lime juice, sprite, and crushed ice.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Virgin Mojito",
        category: "MOCKTAILS",
        description: "Muddled fresh mint leaves, lime wedges, pure cane sugar, and sparkling soda.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
        badge: "Classic"
    },
    {
        name: "Strawberry Mojito",
        category: "MOCKTAILS",
        description: "Fresh crushed strawberries, aromatic mint, lime juice, and effervescent soda.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Green Apple Mojito",
        category: "MOCKTAILS",
        description: "Crisp green apple syrup muddled with mint, lemon juice, and sparkling soda.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Passion Fruit Cooler",
        category: "MOCKTAILS",
        description: "Tropical passion fruit nectar mixed with citrus juice and crushed ice.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Watermelon Cooler",
        category: "MOCKTAILS",
        description: "Sweet fresh watermelon juice infused with mint and a pinch of black salt.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Tropical Punch",
        category: "MOCKTAILS",
        description: "Exotic blend of pineapple, orange, mango, and grenadine served ice-cold.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },
    {
        name: "Madno Special Mocktail",
        category: "MOCKTAILS",
        description: "Our signature layered mocktail: blue curacao, passion fruit, lime, and fizzy sparkle.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        badge: "Madno Special"
    },

    // --------------------------------------------
    // SNACKS & CAFE BITES
    // --------------------------------------------
    {
        name: "French Fries",
        category: "SNACKS",
        description: "Golden, crisp salted potato fries served piping hot with creamy dip.",
        price: "₹99",
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80",
        badge: "Classic"
    },
    {
        name: "Peri Peri Fries",
        category: "SNACKS",
        description: "Crispy golden french fries dusted generously in fiery peri peri spice blend.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Cheese Fries",
        category: "SNACKS",
        description: "Crispy french fries smothered in creamy melted cheddar cheese sauce.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },
    {
        name: "Loaded Fries",
        category: "SNACKS",
        description: "Golden fries topped with jalapeños, olives, cheese sauce, peri-peri seasoning and mayo.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Garlic Bread",
        category: "SNACKS",
        description: "Warm, toasted French baguette slices infused with aromatic garlic herb butter.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Cheese Garlic Bread",
        category: "SNACKS",
        description: "Garlic bread topped with golden bubbly melted mozzarella cheese and oregano.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Veg Sandwich",
        category: "SNACKS",
        description: "Fresh cucumbers, tomatoes, bell peppers, and mint chutney in soft white bread.",
        price: "₹99",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Cheese Sandwich",
        category: "SNACKS",
        description: "Classic sandwich packed with premium cheddar and mozzarella cheese slices.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Grilled Sandwich",
        category: "SNACKS",
        description: "Golden grilled sandwich loaded with spiced vegetable filling and melted cheese.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },
    {
        name: "Club Sandwich",
        category: "SNACKS",
        description: "Triple-layer toasted sandwich stuffed with seasoned veggies, cheese, and herb mayo.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Veg Burger",
        category: "SNACKS",
        description: "Crispy spiced vegetable patty, fresh lettuce, tomato, and mayo in a toasted bun.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Cheese Burger",
        category: "SNACKS",
        description: "Crispy veg patty crowned with melted cheddar cheese, caramelized onions, and burger sauce.",
        price: "₹139",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Pizza",
        category: "SNACKS",
        description: "Handmade crust topped with rich Italian tomato sauce, mozzarella, bell peppers, and corn.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },
    {
        name: "Mini Pizza",
        category: "SNACKS",
        description: "Individual bite-sized pizza loaded with gooey mozzarella cheese and herb seasonings.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Nachos With Cheese",
        category: "SNACKS",
        description: "Crisp Mexican tortilla nachos served with warm melted cheese dip and tomato salsa.",
        price: "₹129",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Loaded Nachos",
        category: "SNACKS",
        description: "Tortilla chips loaded with spicy salsa, jalapeños, black olives, melted cheese, and sour cream.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Potato Wedges",
        category: "SNACKS",
        description: "Crisp seasoned potato wedges served with tangy garlic dipping sauce.",
        price: "₹119",
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Mozzarella Sticks",
        category: "SNACKS",
        description: "Crispy golden crumb-coated mozzarella cheese sticks with an irresistible cheese pull.",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da410?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },

    // --------------------------------------------
    // PASTA
    // --------------------------------------------
    {
        name: "White Sauce Pasta",
        category: "PASTA",
        description: "Penne tossed in silky Italian white bechamel sauce with garlic, butter, and herbs.",
        price: "₹189",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller"
    },
    {
        name: "Red Sauce Pasta",
        category: "PASTA",
        description: "Pasta simmered in tangy, slow-cooked Italian tomato concasse sauce with basil.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Pink Sauce Pasta",
        category: "PASTA",
        description: "The best of both worlds: creamy bechamel combined with tangy tomato arrabbiata.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },
    {
        name: "Alfredo Pasta",
        category: "PASTA",
        description: "Classic rich and creamy Alfredo sauce with heavy cream, Parmesan cheese, and garlic.",
        price: "₹209",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80",
        badge: "Signature"
    },
    {
        name: "Arrabbiata Pasta",
        category: "PASTA",
        description: "Spicy Italian red sauce pasta flavored with red chili flakes, garlic, and fresh basil.",
        price: "₹189",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
        badge: ""
    },
    {
        name: "Creamy Mushroom Pasta",
        category: "PASTA",
        description: "Sauteed button mushrooms tossed in rich garlic cream sauce and tender penne.",
        price: "₹219",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80",
        badge: "Must Try"
    },
    {
        name: "Cheesy Pasta",
        category: "PASTA",
        description: "Ultra-decadent baked pasta smothered with four melted cheeses and crispy herb crust.",
        price: "₹229",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80",
        badge: "Popular"
    },

    // --------------------------------------------
    // SIGNATURE MADNO (Special Category)
    // --------------------------------------------
    {
        name: "Madno Special Sundae",
        category: "SIGNATURE MADNO",
        description: "Tower of triple artisanal scoops, warm brownie fudge, roasted dry fruits, and chocolate curls.",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=700&q=80",
        badge: "MADNO SPECIAL"
    },
    {
        name: "Madno Signature Thick Shake",
        category: "SIGNATURE MADNO",
        description: "Velvety Belgian chocolate gelato, chocolate waffle crisps, whipped cream & roasted nuts.",
        price: "₹229",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
        badge: "MADNO SPECIAL"
    },
    {
        name: "Madno Special Waffle",
        category: "SIGNATURE MADNO",
        description: "Crispy Belgian waffle loaded with Nutella, molten dark chocolate, crushed Oreos & vanilla scoop.",
        price: "₹229",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80",
        badge: "MADNO SPECIAL"
    },
    {
        name: "Madno Brownie Special",
        category: "SIGNATURE MADNO",
        description: "Double layered warm brownie with roasted nuts, Nutella drizzle, and double ice cream scoops.",
        price: "₹229",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        badge: "MADNO SPECIAL"
    },
    {
        name: "Madno Signature Coffee",
        category: "SIGNATURE MADNO",
        description: "House blend iced coffee infused with roasted hazelnut, dark mocha drizzle and vanilla scoop.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
        badge: "MADNO SPECIAL"
    },
    {
        name: "Madno Special Mocktail",
        category: "SIGNATURE MADNO",
        description: "Our signature layered mocktail: blue curacao, passion fruit, lime, and fizzy sparkle.",
        price: "₹169",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        badge: "MADNO SPECIAL"
    }
];

// Curated Signature Featured Desserts (6 items for the Featured section)
const FEATURED_ITEMS = [
    {
        name: "Brownie Blast Sundae",
        category: "SUNDAES",
        description: "Chocolate brownie, vanilla ice cream and warm bubbling chocolate sauce.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
        badge: "BESTSELLER"
    },
    {
        name: "Oreo Madness Sundae",
        category: "SUNDAES",
        description: "Oreo biscuits, vanilla gelato, rich whipped cream and chocolate drizzle.",
        price: "₹189",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80",
        badge: "BESTSELLER"
    },
    {
        name: "Choco Fudge Sundae",
        category: "SUNDAES",
        description: "Warm molten fudge, double dark chocolate scoops, and toasted cashews.",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80",
        badge: "SIGNATURE"
    },
    {
        name: "KitKat Crunch Sundae",
        category: "SUNDAES",
        description: "Crispy KitKat wafer bars, rich chocolate gelato and choco-crisp balls.",
        price: "₹189",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
        badge: "MUST TRY"
    },
    {
        name: "Nutella Dream Sundae",
        category: "SUNDAES",
        description: "Pure Nutella drizzle, vanilla bean scoops, and roasted hazelnut crunch.",
        price: "₹219",
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=700&q=80",
        badge: "SIGNATURE"
    },
    {
        name: "Madno Special Sundae",
        category: "SUNDAES",
        description: "Triple ice cream tower, warm brownie bites, nuts, Oreo & chocolate ganache.",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=700&q=80",
        badge: "MADNO SPECIAL"
    }
];

// Gallery Images Data
const GALLERY_ITEMS = [
    {
        title: "Artisanal Brownie Sundae",
        tag: "Handcrafted Sundaes",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=85"
    },
    {
        title: "Belgian Chocolate Shake",
        tag: "Thick Shakes",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=85"
    },
    {
        title: "Golden Belgian Waffles",
        tag: "Warm Waffles",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=85"
    },
    {
        title: "Fudge Brownie Indulgence",
        tag: "Molten Brownies",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85"
    },
    {
        title: "Blue Lagoon Mocktail",
        tag: "Refreshing Coolers",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=85"
    },
    {
        title: "Creamy Italian Pasta",
        tag: "Cafe Bites",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=1200&q=85"
    },
    {
        title: "Towering Madno Sundaes",
        tag: "Celebration Sundaes",
        image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=1200&q=85"
    },
    {
        title: "Crispy Loaded Fries",
        tag: "Hot Cafe Bites",
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=1200&q=85"
    }
];

// ============================================
// DOM ELEMENTS
// ============================================
const navbar = document.getElementById("navbar");
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileDrawer = document.getElementById("mobile-drawer");
const mobileDrawerClose = document.getElementById("mobile-drawer-close");
const mobileOverlay = document.getElementById("mobile-nav-overlay");
const mobileLinks = document.querySelectorAll(".mobile-link, .mobile-cta");

const featuredGrid = document.getElementById("featured-grid");
const menuGrid = document.getElementById("menu-grid");
const categoryPills = document.querySelectorAll(".category-pill");
const menuSearchInput = document.getElementById("menu-search");
const searchClearBtn = document.getElementById("search-clear");
const menuCounter = document.getElementById("menu-counter");
const activeFilterLabel = document.getElementById("active-filter-label");
const menuEmptyState = document.getElementById("menu-empty");
const btnResetFilter = document.getElementById("btn-reset-filter");

const galleryGrid = document.getElementById("gallery-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

const itemModalBackdrop = document.getElementById("item-modal-backdrop");
const itemModal = document.getElementById("item-modal");
const itemModalClose = document.getElementById("item-modal-close");
const modalItemImg = document.getElementById("modal-item-img");
const modalItemBadge = document.getElementById("modal-item-badge");
const modalItemCat = document.getElementById("modal-item-cat");
const modalItemName = document.getElementById("modal-item-name");
const modalItemPrice = document.getElementById("modal-item-price");
const modalItemDesc = document.getElementById("modal-item-desc");
const itemEnquiryForm = document.getElementById("item-enquiry-form");
const qtyMinus = document.getElementById("qty-minus");
const qtyPlus = document.getElementById("qty-plus");
const qtyVal = document.getElementById("qty-val");
const modalSuccess = document.getElementById("modal-success");

const generalEnquiryForm = document.getElementById("general-enquiry-form");
const enquirySuccess = document.getElementById("enquiry-success");
const backToTopBtn = document.getElementById("back-to-top");

// State
let activeCategory = "ALL";
let searchQuery = "";
let currentLightboxIndex = 0;
let modalQuantity = 1;

// ============================================
// MOBILE NAVIGATION
// ============================================
function openMobileDrawer() {
    mobileDrawer.classList.add("active");
    mobileOverlay.classList.add("active");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mobileDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeMobileDrawer() {
    mobileDrawer.classList.remove("active");
    mobileOverlay.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", openMobileDrawer);
}
if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener("click", closeMobileDrawer);
}
if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMobileDrawer);
}

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMobileDrawer();
    });
});

// ============================================
// MENU RENDERING
// ============================================
function createBadgeHTML(badgeText) {
    if (!badgeText) return "";
    let badgeClass = "badge-signature";
    const lower = badgeText.toLowerCase();
    if (lower.includes("bestseller")) badgeClass = "badge-bestseller";
    else if (lower.includes("madno special")) badgeClass = "badge-special";
    else if (lower.includes("must try")) badgeClass = "badge-must-try";
    else if (lower.includes("new")) badgeClass = "badge-new";

    return `<span class="badge ${badgeClass} card-badge">${badgeText}</span>`;
}

function createCardHTML(item) {
    const badgeHTML = createBadgeHTML(item.badge);
    return `
        <article class="dessert-card fade-in" data-name="${item.name.toLowerCase()}" data-category="${item.category}">
            <div class="card-img-container">
                <img src="${item.image}" alt="${item.name} at Madno" class="card-img" loading="lazy">
                ${badgeHTML}
            </div>
            <div class="card-content">
                <span class="card-category">${item.category}</span>
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${item.description}</p>
                <div class="card-footer">
                    <span class="card-price">${item.price}</span>
                    <button class="btn-card-enquire" 
                            data-name="${item.name}"
                            data-price="${item.price}"
                            data-cat="${item.category}"
                            data-desc="${item.description}"
                            data-img="${item.image}"
                            data-badge="${item.badge || ''}">
                        VIEW / ENQUIRE
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderFeaturedSection() {
    if (!featuredGrid) return;
    featuredGrid.innerHTML = FEATURED_ITEMS.map(item => createCardHTML(item)).join("");
    attachCardEnquiryListeners(featuredGrid);
}

function renderMenu() {
    if (!menuGrid) return;

    const filtered = MADNO_MENU_DATA.filter(item => {
        const matchesCategory = (activeCategory === "ALL") || (item.category === activeCategory);
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
                              item.description.toLowerCase().includes(searchQuery) ||
                              item.category.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        menuGrid.style.display = "none";
        if (menuEmptyState) menuEmptyState.style.display = "block";
    } else {
        menuGrid.style.display = "grid";
        if (menuEmptyState) menuEmptyState.style.display = "none";
        menuGrid.innerHTML = filtered.map(item => createCardHTML(item)).join("");
        attachCardEnquiryListeners(menuGrid);
    }

    if (menuCounter) {
        menuCounter.textContent = `Showing ${filtered.length} of ${MADNO_MENU_DATA.length} items`;
    }
    if (activeFilterLabel) {
        activeFilterLabel.textContent = `Category: ${activeCategory}`;
    }
}

// ============================================
// MENU FILTERING & SEARCH
// ============================================
categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
        categoryPills.forEach(p => {
            p.classList.remove("active");
            p.setAttribute("aria-selected", "false");
        });
        pill.classList.add("active");
        pill.setAttribute("aria-selected", "true");

        activeCategory = pill.getAttribute("data-category");
        renderMenu();

        // Scroll category pill into comfortable view on mobile
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
});

if (menuSearchInput) {
    menuSearchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        if (searchClearBtn) {
            searchClearBtn.style.display = searchQuery ? "flex" : "none";
        }
        renderMenu();
    });
}

if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
        menuSearchInput.value = "";
        searchQuery = "";
        searchClearBtn.style.display = "none";
        menuSearchInput.focus();
        renderMenu();
    });
}

if (btnResetFilter) {
    btnResetFilter.addEventListener("click", () => {
        activeCategory = "ALL";
        searchQuery = "";
        if (menuSearchInput) menuSearchInput.value = "";
        if (searchClearBtn) searchClearBtn.style.display = "none";
        
        categoryPills.forEach(p => {
            p.classList.toggle("active", p.getAttribute("data-category") === "ALL");
            p.setAttribute("aria-selected", p.getAttribute("data-category") === "ALL");
        });

        renderMenu();
    });
}

// Footer category shortcuts
document.querySelectorAll("[data-footer-cat]").forEach(link => {
    link.addEventListener("click", (e) => {
        const cat = link.getAttribute("data-footer-cat");
        const targetPill = document.querySelector(`.category-pill[data-category="${cat}"]`);
        if (targetPill) {
            targetPill.click();
        }
    });
});

// ============================================
// LIGHTBOX (GALLERY)
// ============================================
function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = GALLERY_ITEMS.map((item, index) => `
        <div class="gallery-item" data-index="${index}" role="button" tabindex="0" aria-label="View ${item.title}">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <span class="gallery-tag">${item.tag}</span>
                <span class="gallery-title">${item.title}</span>
            </div>
        </div>
    `).join("");

    const items = galleryGrid.querySelectorAll(".gallery-item");
    items.forEach(item => {
        const clickHandler = () => {
            const idx = parseInt(item.getAttribute("data-index"), 10);
            openLightbox(idx);
        };
        item.addEventListener("click", clickHandler);
        item.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                clickHandler();
            }
        });
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    const item = GALLERY_ITEMS[currentLightboxIndex];
    if (!item || !lightbox) return;

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = `${item.title} — ${item.tag}`;

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY_ITEMS.length;
    openLightbox(currentLightboxIndex);
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    openLightbox(currentLightboxIndex);
}

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightboxNext) lightboxNext.addEventListener("click", nextLightbox);
if (lightboxPrev) lightboxPrev.addEventListener("click", prevLightbox);

if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// ============================================
// MODALS (ITEM ENQUIRY & ACTIONS)
// ============================================
function attachCardEnquiryListeners(parentContainer) {
    if (!parentContainer) return;
    const btns = parentContainer.querySelectorAll(".btn-card-enquire");
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.getAttribute("data-name");
            const price = btn.getAttribute("data-price");
            const cat = btn.getAttribute("data-cat");
            const desc = btn.getAttribute("data-desc");
            const img = btn.getAttribute("data-img");
            const badge = btn.getAttribute("data-badge");

            openItemModal({ name, price, category: cat, description: desc, image: img, badge });
        });
    });
}

// Quick enquiry from specials section
document.querySelectorAll(".btn-quick-enquiry").forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-item");
        const price = btn.getAttribute("data-price");
        const matched = MADNO_MENU_DATA.find(i => i.name === name) || {
            name,
            price,
            category: "MADNO SPECIAL",
            description: "Signature handcrafted creation exclusively at Madno House of Sundaes, Eluru.",
            image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=700&q=80",
            badge: "MADNO SPECIAL"
        };
        openItemModal(matched);
    });
});

function openItemModal(item) {
    modalQuantity = 1;
    if (qtyVal) qtyVal.textContent = "1";

    if (modalItemName) modalItemName.textContent = item.name;
    if (modalItemPrice) modalItemPrice.textContent = item.price;
    if (modalItemCat) modalItemCat.textContent = item.category || "SUNDAES";
    if (modalItemDesc) modalItemDesc.textContent = item.description;
    if (modalItemImg) {
        modalItemImg.src = item.image;
        modalItemImg.alt = item.name;
    }

    if (modalItemBadge) {
        if (item.badge) {
            modalItemBadge.textContent = item.badge;
            modalItemBadge.style.display = "inline-block";
        } else {
            modalItemBadge.style.display = "none";
        }
    }

    if (modalSuccess) modalSuccess.style.display = "none";
    if (itemEnquiryForm) itemEnquiryForm.reset();

    itemModalBackdrop.classList.add("active");
    itemModalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeItemModal() {
    if (!itemModalBackdrop) return;
    itemModalBackdrop.classList.remove("active");
    itemModalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

if (itemModalClose) itemModalClose.addEventListener("click", closeItemModal);
if (itemModalBackdrop) {
    itemModalBackdrop.addEventListener("click", (e) => {
        if (e.target === itemModalBackdrop) {
            closeItemModal();
        }
    });
}

// Quantity controls
if (qtyMinus) {
    qtyMinus.addEventListener("click", () => {
        if (modalQuantity > 1) {
            modalQuantity--;
            qtyVal.textContent = modalQuantity;
        }
    });
}

if (qtyPlus) {
    qtyPlus.addEventListener("click", () => {
        modalQuantity++;
        qtyVal.textContent = modalQuantity;
    });
}

// Handle Item Enquiry Form Submission
if (itemEnquiryForm) {
    itemEnquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userName = document.getElementById("modal-user-name")?.value || "";
        const userPhone = document.getElementById("modal-user-phone")?.value || "";

        if (!userName.trim() || !userPhone.trim()) {
            alert("Please enter your name and phone number.");
            return;
        }

        if (modalSuccess) {
            modalSuccess.textContent = `✓ Thank you ${userName}! Your enquiry for (${modalQuantity}x) ${modalItemName.textContent} has been received.`;
            modalSuccess.style.display = "block";
        }

        setTimeout(() => {
            closeItemModal();
        }, 2400);
    });
}

// Handle General Contact / Reservation Enquiry Form
if (generalEnquiryForm) {
    generalEnquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("enquiry-name")?.value.trim();
        const phone = document.getElementById("enquiry-phone")?.value.trim();

        if (!name || !phone) {
            alert("Please provide both your name and phone number.");
            return;
        }

        if (enquirySuccess) {
            enquirySuccess.style.display = "flex";
            enquirySuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        generalEnquiryForm.reset();
    });
}

// Global Keyboard Shortcuts (Esc to close modals, Arrow keys for gallery lightbox)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (lightbox && lightbox.classList.contains("active")) {
            closeLightbox();
        }
        if (itemModalBackdrop && itemModalBackdrop.classList.contains("active")) {
            closeItemModal();
        }
        if (mobileDrawer && mobileDrawer.classList.contains("active")) {
            closeMobileDrawer();
        }
    } else if (lightbox && lightbox.classList.contains("active")) {
        if (e.key === "ArrowRight") {
            nextLightbox();
        } else if (e.key === "ArrowLeft") {
            prevLightbox();
        }
    }
});

// ============================================
// SCROLL ANIMATIONS & NAVBAR STATE
// ============================================
function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Sticky Navbar Background
    if (navbar) {
        if (scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    // Back to Top Button
    if (backToTopBtn) {
        if (scrollY > 400) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    }

    // Highlight Active Nav Link
    const sections = document.querySelectorAll("section[id]");
    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
            document.querySelectorAll(".nav-link").forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        }
    });
}

window.addEventListener("scroll", handleScroll, { passive: true });

// ============================================
// BACK TO TOP
// ============================================
if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const headerOffset = 76;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    renderFeaturedSection();
    renderMenu();
    renderGallery();
    handleScroll();
});
