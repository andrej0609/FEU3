import "./app.css";

const App = () => {
  return (
    <>
      <div className="img">
        <img src="https://i0.wp.com/shiprelay.com/wp-content/uploads/2020/10/shiprelay_logo_1_horz-sitelogo-01.png?fit=628%2C205&ssl=1" alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Producte</a></li>
          <li><a href="">Company</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <header>
        <div>
          <h1>Header Image</h1>
        </div>
      </header>
      <main>
        <div className="upInfo">
          <div className="info">
            <h1>About</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, nam error possimus dignissimos dicta tempora, ut distinctio provident nihil libero excepturi.</p>
          </div>
          <div className="info">
            <h1>Company</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, nam error possimus dignissimos dicta tempora, ut distinctio provident nihil libero excepturi.</p>
          </div>
          <div className="info">
            <h1>Services</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, nam error possimus dignissimos dicta tempora, ut distinctio provident nihil libero excepturi.</p>
          </div>
        </div>
        <div class="contentAndMenu">
          <div className="contentInfo">
            <h1>Content</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officia tempore quas assumenda accusamus ullam dolore praesentium quisquam explicabo consequuntur error, quidem sit fugit libero.</p>
            <h1>Sub Header</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam laudantium omnis accusamus ea qui porro sequi ipsam quasi, dolore aspernatur id ad est expedita laborum natus voluptatum deleniti eligendi impedit iste iusto! Quasi, ratione voluptas asperiores ipsam quidem dicta aut voluptatem praesentium molestiae iure quam ea corrupti nostrum.</p>
          </div>
          <div className="BotNav">
            <h1>Navigation</h1>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Producte</a></li>
              <li><a href="">Company</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;


