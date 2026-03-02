import Event from "./Event.jsx";

const Board = () => {
  return (
    <div className="Board">
      <div className="card">
        <Event
          event="Button Bakery"
          color="pink"
          location="1237 Chicago Ave"
          description="A family-owned South Evanston gem specializing in artisan sourdough and stone-oven breads. This cozy bakery focuses on high-quality seasonal ingredients and handcrafted pastries for the community."
        />
      </div>
      <div className="card">
        <Event
          event="Sea Ranch Sushi"
          color="blue"
          location="1600 Maple Ave"
          description="This unique hybrid features a Japanese grocery store and a casual sushi counter. It’s a local favorite for fresh, affordable rolls and imported Japanese snacks."
        />
      </div>
      <div className="card">
        <Event
          event="Union Squared Pizzeria"
          color="green"
          location="1510 Sherman Ave"
          description="Famous for authentic Detroit-style pan pizza, this spot serves rectangular pies with signature crispy, buttery edges. Enjoy local craft beers in their spacious outdoor garden."
        />
      </div>
      <div className="card">
        <Event
          event="Bagel Art Cafe"
          color="pink"
          location="505 Dempster St"
          description="A bright, artistic cafe offering house-made bagels and creative breakfast sandwiches. It’s the perfect neighborhood nook for a quick caffeine fix and unique cream cheese spreads."
        />
      </div>
      <div className="card">
        <Event
          event="Ovo Frito Café"
          color="blue"
          location="1419 Chicago Ave"
          description="This vibrant, egg-themed brunch destination blends Mexican and Belizean influences. Expect creative dishes like cornflake-crusted French toast and savory chilaquiles in a warm, welcoming atmosphere."
        />
      </div>
      <div className="card">
        <Event
          event="FRÍO Gelato"
          color="green"
          location="1710 Sherman Ave"
          description="An authentic Argentine gelateria serving silky, natural gelato and sorbet. They specialize in allergen-friendly treats and unique flavor profiles like passion fruit and floral teas."
        />
      </div>
      <div className="card">
        <Event
          event="Bennison's Bakery"
          color="pink"
          location="1104 Childs Ave"
          description="A historic European-style bakery serving Evanston since 1938. This award-winning institution is beloved for its artisan breads, colorful macarons, and traditional hand-laminated French pastries."
        />
      </div>
      <div className="card">
        <Event
          event="Tian Bistro"
          color="blue"
          location="1411 Chicago Ave"
          description="Specializing in authentic Beijing Roast Duck, this bistro offers a refined take on Northern Chinese cuisine. The menu features expertly crafted Sichuan specialties and handmade noodles."
        />
      </div>
      <div className="card">
        <Event
          event="Tian Dumpling House"
          color="green"
          location="1017 Church St"
          description="A hidden gem for Northern Chinese comfort food, featuring an open kitchen. Watch chefs hand-fold delicate dumplings and serve up authentic, savory noodles at affordable prices."
        />
      </div>
      <div className="card">
        <Event
          event="NaKorn"
          color="pink"
          location="626 Church St, Evanston"
          description="This upscale 'urban Thai' eatery combines 1970s Bangkok nostalgia with sophisticated flavors. Experience bold, traditional dishes like blue crab curry in a beautifully designed, vintage-chic space."
        />
      </div>
    </div>
  );
};

export default Board;
